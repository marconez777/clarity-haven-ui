<?php
/**
 * Post Individual - Dr Gabriel Lopes
 * 
 * Nota: Esta é uma versão preparada para integração com banco de dados.
 * O slug do post é recebido via parâmetro GET: post.php?slug=nome-do-post
 */

// Simulação de dados do post (substitua por consulta ao banco de dados)
$slug = isset($_GET['slug']) ? $_GET['slug'] : '';

// Exemplo de estrutura de post (substitua pela query real)
$post = null;
$relatedPosts = [];

// Se você tiver banco de dados configurado, descomente e ajuste:
/*
$pdo = new PDO("mysql:host=localhost;dbname=seu_db", "usuario", "senha");
$stmt = $pdo->prepare("
    SELECT p.*, c.name as category_name, c.slug as category_slug 
    FROM blog_posts p 
    LEFT JOIN blog_categories c ON p.category_id = c.id 
    WHERE p.slug = ? AND p.status = 'published'
");
$stmt->execute([$slug]);
$post = $stmt->fetch(PDO::FETCH_ASSOC);

if ($post) {
    // Buscar posts relacionados
    $stmt = $pdo->prepare("
        SELECT id, title, slug, category_name 
        FROM blog_posts 
        WHERE category_id = ? AND id != ? AND status = 'published' 
        LIMIT 3
    ");
    $stmt->execute([$post['category_id'], $post['id']]);
    $relatedPosts = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
*/

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php if ($post): ?>
        <title><?php echo htmlspecialchars($post['seo_title'] ?? $post['title'] . ' - Dr Gabriel Lopes'); ?></title>
        <meta name="description" content="<?php echo htmlspecialchars($post['seo_description'] ?? $post['excerpt']); ?>">
        <meta name="keywords" content="<?php echo htmlspecialchars($post['seo_keywords'] ?? $post['category_name'] . ', saúde mental'); ?>">
        <link rel="canonical" href="https://drgabriellopes.com.br/<?php echo htmlspecialchars($post['slug']); ?>">
        <meta property="og:title" content="<?php echo htmlspecialchars($post['title']); ?>">
        <meta property="og:description" content="<?php echo htmlspecialchars($post['excerpt']); ?>">
        <?php if (!empty($post['featured_image'])): ?>
            <meta property="og:image" content="<?php echo htmlspecialchars($post['featured_image']); ?>">
        <?php endif; ?>
    <?php else: ?>
        <title>Post não encontrado - Dr Gabriel Lopes</title>
        <meta name="description" content="O post solicitado não foi encontrado.">
    <?php endif; ?>
    <link rel="stylesheet" href="styles.css">
    <style>
        .back-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: transparent;
            border: none;
            color: hsl(var(--muted-foreground));
            cursor: pointer;
            text-decoration: none;
            transition: color 0.2s;
            margin-bottom: 1.5rem;
        }

        .back-button:hover {
            color: hsl(var(--foreground));
        }

        .back-button svg {
            width: 1rem;
            height: 1rem;
        }

        .post-container {
            max-width: 56rem;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .post-meta {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .post-badge {
            display: inline-block;
            background: hsl(var(--primary));
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
        }

        .post-meta-item {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.875rem;
            color: hsl(var(--muted-foreground));
        }

        .post-meta-item svg {
            width: 1rem;
            height: 1rem;
        }

        .post-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: hsl(var(--foreground));
            margin-bottom: 2rem;
            line-height: 1.2;
        }

        @media (min-width: 768px) {
            .post-title {
                font-size: 3rem;
            }
        }

        .post-featured-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 0.5rem;
            margin-bottom: 3rem;
        }

        .blog-content {
            font-size: 1.125rem;
            line-height: 1.75;
            color: hsl(var(--foreground));
        }

        .blog-content h2 {
            font-size: 1.875rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: hsl(var(--foreground));
        }

        .blog-content h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: hsl(var(--foreground));
        }

        .blog-content p {
            margin-bottom: 1.5rem;
        }

        .blog-content ul, .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
        }

        .blog-content li {
            margin-bottom: 0.5rem;
        }

        .blog-content a {
            color: hsl(var(--primary));
            text-decoration: underline;
        }

        .blog-content a:hover {
            color: hsl(var(--accent));
        }

        .blog-content blockquote {
            border-left: 4px solid hsl(var(--primary));
            padding-left: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            color: hsl(var(--muted-foreground));
        }

        .blog-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 2rem 0;
        }

        .cta-box {
            margin-top: 4rem;
            padding: 2rem;
            background: linear-gradient(to bottom right, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05));
            border-radius: 0.5rem;
            text-align: center;
        }

        .cta-box h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: hsl(var(--foreground));
        }

        .cta-box p {
            color: hsl(var(--muted-foreground));
            margin-bottom: 1.5rem;
        }

        .cta-button {
            display: inline-block;
            padding: 0.75rem 2rem;
            background: hsl(var(--primary));
            color: white;
            text-decoration: none;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: all 0.2s;
        }

        .cta-button:hover {
            background: hsl(var(--primary) / 0.9);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .related-posts-section {
            padding: 4rem 0;
            background: hsl(var(--muted) / 0.3);
        }

        .related-posts-container {
            max-width: 56rem;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .related-posts-title {
            font-size: 1.875rem;
            font-weight: bold;
            margin-bottom: 2rem;
            color: hsl(var(--foreground));
        }

        .related-posts-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        @media (min-width: 768px) {
            .related-posts-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .related-card {
            background: hsl(var(--card));
            border-radius: 0.5rem;
            padding: 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s;
            text-decoration: none;
            display: block;
        }

        .related-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        }

        .related-card .post-badge {
            margin-bottom: 0.5rem;
        }

        .related-card-title {
            font-size: 1.125rem;
            font-weight: bold;
            color: hsl(var(--foreground));
            line-height: 1.4;
        }

        .not-found-container {
            min-height: 50vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem 1rem;
            text-align: center;
        }

        .not-found-container h1 {
            font-size: 1.875rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: hsl(var(--foreground));
        }

        .not-found-container p {
            color: hsl(var(--muted-foreground));
            margin-bottom: 2rem;
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php 
    include 'components/breadcrumbs.php';
    if ($post) {
        render_breadcrumbs([
            ['label' => 'Blog', 'href' => '/blog.php'],
            ['label' => $post['title'], 'href' => '/post.php?slug=' . $post['slug']]
        ]);
    } else {
        render_breadcrumbs([
            ['label' => 'Blog', 'href' => '/blog.php']
        ]);
    }
    ?>

    <main class="main-content" style="padding-top: 2rem; padding-bottom: 4rem;">
        <?php if ($post): ?>
            <div class="container">
                <a href="blog.php" class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Voltar ao Blog
                </a>
            </div>

            <article>
                <div class="container">
                    <div class="post-container">
                        <div class="post-meta">
                            <?php if (!empty($post['category_name'])): ?>
                                <span class="post-badge"><?php echo htmlspecialchars($post['category_name']); ?></span>
                            <?php endif; ?>
                            
                            <?php if (!empty($post['published_at'])): ?>
                                <span class="post-meta-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <?php 
                                        $date = new DateTime($post['published_at']);
                                        echo $date->format('d/m/Y');
                                    ?>
                                </span>
                            <?php endif; ?>
                            
                            <?php if (!empty($post['author'])): ?>
                                <span class="post-meta-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <?php echo htmlspecialchars($post['author']); ?>
                                </span>
                            <?php endif; ?>
                            
                            <?php if (!empty($post['read_time'])): ?>
                                <span class="post-meta-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <?php echo htmlspecialchars($post['read_time']); ?>
                                </span>
                            <?php endif; ?>
                        </div>

                        <h1 class="post-title">
                            <?php echo htmlspecialchars($post['title']); ?>
                        </h1>

                        <?php if (!empty($post['featured_image'])): ?>
                            <img 
                                src="<?php echo htmlspecialchars($post['featured_image']); ?>" 
                                alt="<?php echo htmlspecialchars($post['title']); ?>"
                                class="post-featured-image"
                            >
                        <?php endif; ?>

                        <div class="blog-content">
                            <?php 
                                // Sanitizar o conteúdo HTML
                                echo htmlspecialchars_decode($post['content']); 
                            ?>
                        </div>

                        <div class="cta-box">
                            <h3>Precisa de ajuda profissional?</h3>
                            <p>Agende uma consulta e descubra como podemos ajudá-lo.</p>
                            <a href="contato.php" class="cta-button">Agendar Consulta</a>
                        </div>
                    </div>
                </div>
            </article>

            <?php if (!empty($relatedPosts)): ?>
                <section class="related-posts-section">
                    <div class="related-posts-container">
                        <h2 class="related-posts-title">Artigos Relacionados</h2>
                        <div class="related-posts-grid">
                            <?php foreach ($relatedPosts as $related): ?>
                                <a href="post.php?slug=<?php echo htmlspecialchars($related['slug']); ?>" class="related-card">
                                    <?php if (!empty($related['category_name'])): ?>
                                        <span class="post-badge"><?php echo htmlspecialchars($related['category_name']); ?></span>
                                    <?php endif; ?>
                                    <h3 class="related-card-title"><?php echo htmlspecialchars($related['title']); ?></h3>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </section>
            <?php endif; ?>

        <?php else: ?>
            <div class="not-found-container">
                <h1>Post não encontrado</h1>
                <p>O artigo que você está procurando não existe ou foi removido.</p>
                <a href="blog.php" class="cta-button">Voltar ao Blog</a>
            </div>
        <?php endif; ?>
    </main>

    <?php include 'includes/footer.php'; ?>
    <?php include 'components/whatsapp-button.php'; ?>
</body>
</html>
