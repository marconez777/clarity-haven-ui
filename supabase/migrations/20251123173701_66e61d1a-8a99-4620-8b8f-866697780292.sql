-- Adicionar 'modelo-local' aos templates permitidos
ALTER TABLE pages DROP CONSTRAINT IF EXISTS pages_template_check;

ALTER TABLE pages ADD CONSTRAINT pages_template_check 
CHECK (template IN ('generic', 'specialty', 'team', 'service', 'modelo-local'));