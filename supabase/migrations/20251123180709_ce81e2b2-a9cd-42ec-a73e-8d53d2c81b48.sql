-- Add RLS policies for admin-only tables
-- This ensures server-side validation that only admins can access sensitive data

-- Enable RLS on all admin tables if not already enabled
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wordpress_imports ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Only admins can insert blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Only admins can update blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Only admins can delete blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Admins can view all blog posts" ON public.blog_posts;

DROP POLICY IF EXISTS "Only admins can insert categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Only admins can update categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Only admins can delete categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Anyone can view categories" ON public.blog_categories;

DROP POLICY IF EXISTS "Only admins can insert pages" ON public.pages;
DROP POLICY IF EXISTS "Only admins can update pages" ON public.pages;
DROP POLICY IF EXISTS "Only admins can delete pages" ON public.pages;
DROP POLICY IF EXISTS "Anyone can view published pages" ON public.pages;
DROP POLICY IF EXISTS "Admins can view all pages" ON public.pages;

DROP POLICY IF EXISTS "Only admins can manage wordpress imports" ON public.wordpress_imports;

-- Blog Posts Policies
CREATE POLICY "Only admins can insert blog posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can update blog posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete blog posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can view published blog posts"
ON public.blog_posts
FOR SELECT
TO public
USING (status = 'published');

CREATE POLICY "Admins can view all blog posts"
ON public.blog_posts
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

-- Blog Categories Policies
CREATE POLICY "Only admins can insert categories"
ON public.blog_categories
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can update categories"
ON public.blog_categories
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete categories"
ON public.blog_categories
FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can view categories"
ON public.blog_categories
FOR SELECT
TO public
USING (true);

-- Pages Policies
CREATE POLICY "Only admins can insert pages"
ON public.pages
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can update pages"
ON public.pages
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete pages"
ON public.pages
FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Anyone can view published pages"
ON public.pages
FOR SELECT
TO public
USING (status = 'published');

CREATE POLICY "Admins can view all pages"
ON public.pages
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

-- WordPress Imports Policies (admin only)
CREATE POLICY "Only admins can manage wordpress imports"
ON public.wordpress_imports
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));