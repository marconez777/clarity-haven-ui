<?php
/**
 * Blog - Dr Gabriel Lopes
 * 
 * Nota: Esta é uma versão estática do blog. 
 * Para carregar posts dinamicamente, você precisará configurar uma conexão com banco de dados.
 */

// Exemplo de posts estáticos (substitua por consulta ao banco de dados)
$posts = [
    // Adicione seus posts aqui quando tiver integração com banco de dados
];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Dr Gabriel Lopes | Artigos sobre Saúde Mental</title>
    <meta name="description" content="Artigos e conteúdos sobre saúde mental, TDAH, ansiedade, depressão e bem-estar escritos pelo Dr. Gabriel Lopes. Informação confiável para cuidar da sua mente.">
    <meta name="keywords" content="blog saúde mental, artigos psiquiatria, TDAH, ansiedade, depressão, bem-estar mental">
    <link rel="canonical" href="https://drgabriellopes.com.br/blog">
    <link rel="stylesheet" href="styles.css">
    <style>
        .blog-hero {
            padding: 2rem 0 4rem;
            background: linear-gradient(to bottom right, hsl(var(--background)), hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05));
        }

        .blog-hero-content {
            max-width: 48rem;
            margin: 0 auto;
            text-align: center;
            padding: 0 1rem;
        }

        .blog-hero h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: hsl(var(--foreground));
            margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
            .blog-hero h1 {
                font-size: 3rem;
            }
        }

        .blog-hero p {
            font-size: 1.125rem;
            color: hsl(var(--muted-foreground));
        }

        .blog-posts-section {
            padding: 4rem 0;
        }

        .blog-posts-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1rem;
        }

        @media (min-width: 768px) {
            .blog-posts-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .blog-posts-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .blog-card {
            background: hsl(var(--card));
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: box-shadow 0.3s;
            text-decoration: none;
            display: block;
            height: 100%;
        }

        .blog-card:hover {
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        }

        .blog-card-image {
            position: relative;
            height: 12rem;
            overflow: hidden;
        }

        .blog-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .blog-card-header {
            padding: 1.5rem 1.5rem 0;
        }

        .blog-badge {
            display: inline-block;
            background: hsl(var(--primary));
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }

        .blog-card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: hsl(var(--foreground));
            margin-bottom: 1rem;
            transition: color 0.2s;
        }

        .blog-card:hover .blog-card-title {
            color: hsl(var(--primary));
        }

        .blog-card-content {
            padding: 0 1.5rem 1.5rem;
        }

        .blog-card-excerpt {
            color: hsl(var(--muted-foreground));
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .blog-card-meta {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 0.875rem;
            color: hsl(var(--muted-foreground));
        }

        .blog-card-meta-item {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .blog-card-meta-item svg {
            width: 1rem;
            height: 1rem;
        }

        .empty-state {
            text-align: center;
            padding: 4rem 1rem;
            color: hsl(var(--muted-foreground));
        }
    </style>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    
    <?php 
    include 'components/breadcrumbs.php';
    render_breadcrumbs([
        ['label' => 'Blog', 'href' => '/blog.php']
    ]);
    ?>

    <main class="main-content">
        <!-- Hero Section -->
        <section class="blog-hero">
            <div class="blog-hero-content">
                <h1>Blog</h1>
                <p>
                    Artigos, insights e informações sobre saúde mental, bem-estar e qualidade de vida. 
                    Conteúdo especializado para você cuidar melhor da sua mente.
                </p>
            </div>
        </section>

        <!-- Blog Posts Grid -->
        <section class="blog-posts-section">
            <div class="container">
                <?php if (empty($posts)): ?>
                    <div class="empty-state">
                        <p>Nenhum post publicado ainda.</p>
                        <p style="margin-top: 1rem; font-size: 0.875rem;">Em breve teremos novos conteúdos sobre saúde mental.</p>
                    </div>
                <?php else: ?>
                    <div class="blog-posts-grid">
                        <?php foreach ($posts as $post): ?>
                            <a href="/<?php echo htmlspecialchars($post['slug']); ?>" class="blog-card">
                                <?php if (!empty($post['featured_image'])): ?>
                                    <div class="blog-card-image">
                                        <img 
                                            src="<?php echo htmlspecialchars($post['featured_image']); ?>" 
                                            alt="<?php echo htmlspecialchars($post['title']); ?>"
                                        >
                                    </div>
                                <?php endif; ?>
                                
                                <div class="blog-card-header">
                                    <span class="blog-badge">
                                        <?php echo htmlspecialchars($post['category'] ?? 'Sem categoria'); ?>
                                    </span>
                                    <h2 class="blog-card-title">
                                        <?php echo htmlspecialchars($post['title']); ?>
                                    </h2>
                                </div>
                                
                                <div class="blog-card-content">
                                    <p class="blog-card-excerpt">
                                        <?php echo htmlspecialchars($post['excerpt']); ?>
                                    </p>
                                    <div class="blog-card-meta">
                                        <?php if (!empty($post['published_at'])): ?>
                                            <span class="blog-card-meta-item">
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
                                            <span class="blog-card-meta-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                                <?php echo htmlspecialchars($post['author']); ?>
                                            </span>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
    <?php include 'components/whatsapp-button.php'; ?>
</body>
</html>
