
CREATE OR REPLACE FUNCTION public.get_unified_leads(
  p_filter text DEFAULT 'all',
  p_search text DEFAULT '',
  p_limit integer DEFAULT 20,
  p_offset integer DEFAULT 0
)
RETURNS TABLE(
  id uuid,
  name text,
  email text,
  phone text,
  source text,
  source_url text,
  created_at timestamptz,
  lead_type text,
  total_count bigint
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_total bigint;
BEGIN
  -- Count total matching records
  SELECT count(*) INTO v_total FROM (
    SELECT l.id FROM leads l
    WHERE (p_filter = 'all' OR p_filter = 'contact')
      AND (p_search = '' OR l.email ILIKE '%' || p_search || '%' OR l.name ILIKE '%' || p_search || '%' OR l.source ILIKE '%' || p_search || '%')
    UNION ALL
    SELECT t.id FROM test_submissions t
    WHERE (p_filter = 'all' OR p_filter = 'test' OR t.test_type = p_filter)
      AND p_filter != 'contact'
      AND (p_search = '' OR t.email ILIKE '%' || p_search || '%' OR t.test_type ILIKE '%' || p_search || '%')
  ) sub;

  RETURN QUERY
  SELECT sub.id, sub.name, sub.email, sub.phone, sub.source, sub.source_url, sub.created_at, sub.lead_type, v_total as total_count
  FROM (
    SELECT l.id, l.name, l.email, l.phone, l.source, l.source_url, l.created_at, 'contact'::text as lead_type
    FROM leads l
    WHERE (p_filter = 'all' OR p_filter = 'contact')
      AND (p_search = '' OR l.email ILIKE '%' || p_search || '%' OR l.name ILIKE '%' || p_search || '%' OR l.source ILIKE '%' || p_search || '%')
    UNION ALL
    SELECT t.id, NULL::text as name, t.email, NULL::text as phone, t.test_type as source, NULL::text as source_url, t.created_at, 'test'::text as lead_type
    FROM test_submissions t
    WHERE (p_filter = 'all' OR p_filter = 'test' OR t.test_type = p_filter)
      AND p_filter != 'contact'
      AND (p_search = '' OR t.email ILIKE '%' || p_search || '%' OR t.test_type ILIKE '%' || p_search || '%')
  ) sub
  ORDER BY sub.created_at DESC
  LIMIT p_limit OFFSET p_offset;
END;
$$;

-- Function to get test type counts (no 1000 row limit)
CREATE OR REPLACE FUNCTION public.get_test_type_counts()
RETURNS TABLE(test_type text, count bigint)
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT t.test_type, count(*) as count
  FROM test_submissions t
  GROUP BY t.test_type
  ORDER BY count DESC;
$$;
