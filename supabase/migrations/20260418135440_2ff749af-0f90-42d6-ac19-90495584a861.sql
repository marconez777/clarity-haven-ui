-- Create redirects table
CREATE TABLE public.redirects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  from_path TEXT NOT NULL UNIQUE,
  to_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_redirects_from_path ON public.redirects(from_path);

ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view redirects"
ON public.redirects FOR SELECT
USING (true);

CREATE POLICY "Only admins can insert redirects"
ON public.redirects FOR INSERT
TO authenticated
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Only admins can update redirects"
ON public.redirects FOR UPDATE
TO authenticated
USING (is_admin(auth.uid()))
WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Only admins can delete redirects"
ON public.redirects FOR DELETE
TO authenticated
USING (is_admin(auth.uid()));

CREATE TRIGGER update_redirects_updated_at
BEFORE UPDATE ON public.redirects
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Seed with known legacy redirects
INSERT INTO public.redirects (from_path, to_path) VALUES
  ('nossa-equipe', '/equipe'),
  ('onde-atendo', '/contato'),
  ('agende-sua-consulta', '/contato'),
  ('teste-online-para-saber-se-voce-tem-deficit-de-atencao-dr-gabriel', '/teste-tdah-hiperatividade'),
  ('teste-de-deficit-de-atencao-tdah-adulto', '/teste-de-tdah-hiperatividade-adulto'),
  ('autismo-adulto-aq-10', '/teste-autismo-aq10'),
  ('teste-de-depressao-phq9', '/teste-depressao-phq9'),
  ('teste-ansiedade-gad7', '/teste-de-ansiedade-gad-7'),
  ('teste-de-transtorno-bipolar', '/teste-transtorno-bipolar'),
  ('teste-compulsao-alimentar', '/teste-de-compulsao-alimentar'),
  ('transtornos-de-adaptacao-ajustamento', '/'),
  ('entrevistas', '/blog'),
  ('dr-gabriel', '/dr-gabriel-lopes'),
  ('especialidade', '/especialidades'),
  ('testes', '/testes-de-saude-mental'),
  ('blog-saude-mental', '/blog');