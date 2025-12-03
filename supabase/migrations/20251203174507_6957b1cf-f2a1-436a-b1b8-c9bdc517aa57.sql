-- Criar tabela para armazenar submissões de testes com e-mail
CREATE TABLE public.test_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  test_type TEXT NOT NULL,
  score NUMERIC NOT NULL,
  max_score NUMERIC NOT NULL,
  result_level TEXT NOT NULL,
  answers JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.test_submissions ENABLE ROW LEVEL SECURITY;

-- Qualquer pessoa pode inserir (submeter teste)
CREATE POLICY "Anyone can insert test submissions"
ON public.test_submissions
FOR INSERT
WITH CHECK (true);

-- Apenas admins podem ver as submissões
CREATE POLICY "Admins can view test submissions"
ON public.test_submissions
FOR SELECT
USING (is_admin(auth.uid()));

-- Criar índices para performance
CREATE INDEX idx_test_submissions_email ON public.test_submissions(email);
CREATE INDEX idx_test_submissions_test_type ON public.test_submissions(test_type);
CREATE INDEX idx_test_submissions_created_at ON public.test_submissions(created_at DESC);