-- Create table for tracking conversion events
CREATE TABLE public.conversion_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL DEFAULT 'whatsapp_click',
  page_url TEXT,
  button_location TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.conversion_events ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public tracking)
CREATE POLICY "Anyone can insert conversion events" 
ON public.conversion_events 
FOR INSERT 
WITH CHECK (true);

-- Only admins can view
CREATE POLICY "Admins can view conversion events" 
ON public.conversion_events 
FOR SELECT 
USING (public.is_admin(auth.uid()));

-- Create index for faster queries
CREATE INDEX idx_conversion_events_created_at ON public.conversion_events(created_at DESC);
CREATE INDEX idx_conversion_events_type ON public.conversion_events(event_type);