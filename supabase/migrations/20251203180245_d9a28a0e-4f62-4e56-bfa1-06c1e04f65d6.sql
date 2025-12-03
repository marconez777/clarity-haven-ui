-- Create leads table
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT,
  source TEXT NOT NULL,
  source_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone can insert leads (public forms)
CREATE POLICY "Anyone can insert leads" ON public.leads
  FOR INSERT WITH CHECK (true);

-- Only admins can view leads
CREATE POLICY "Admins can view leads" ON public.leads
  FOR SELECT USING (is_admin(auth.uid()));

-- Only admins can delete leads
CREATE POLICY "Admins can delete leads" ON public.leads
  FOR DELETE USING (is_admin(auth.uid()));