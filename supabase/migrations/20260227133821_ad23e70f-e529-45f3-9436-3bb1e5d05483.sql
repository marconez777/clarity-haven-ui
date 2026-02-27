
DROP FUNCTION IF EXISTS public.get_unified_leads(text, text, integer, integer);

CREATE OR REPLACE FUNCTION public.get_unified_leads(p_filter text DEFAULT 'all'::text, p_search text DEFAULT ''::text, p_limit integer DEFAULT 20, p_offset integer DEFAULT 0)
 RETURNS TABLE(id uuid, email text, whatsapp text, source text, created_at timestamp with time zone, lead_type text, total_count bigint)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_total bigint;
BEGIN
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
  SELECT sub.id, sub.email, sub.whatsapp, sub.source, sub.created_at, sub.lead_type, v_total as total_count
  FROM (
    SELECT l.id, l.email, l.phone as whatsapp, l.source, l.created_at, 'contact'::text as lead_type
    FROM leads l
    WHERE (p_filter = 'all' OR p_filter = 'contact')
      AND (p_search = '' OR l.email ILIKE '%' || p_search || '%' OR l.name ILIKE '%' || p_search || '%' OR l.source ILIKE '%' || p_search || '%')
    UNION ALL
    SELECT t.id, t.email, t.whatsapp, t.test_type as source, t.created_at, 'test'::text as lead_type
    FROM test_submissions t
    WHERE (p_filter = 'all' OR p_filter = 'test' OR t.test_type = p_filter)
      AND p_filter != 'contact'
      AND (p_search = '' OR t.email ILIKE '%' || p_search || '%' OR t.test_type ILIKE '%' || p_search || '%')
  ) sub
  ORDER BY sub.created_at DESC
  LIMIT p_limit OFFSET p_offset;
END;
$function$
