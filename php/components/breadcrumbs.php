<?php
/**
 * Breadcrumbs Component
 * 
 * @param array $items Array of breadcrumb items: [['label' => 'Text', 'href' => '/url'], ...]
 */
function render_breadcrumbs($items) {
?>
<nav aria-label="Breadcrumb" style="padding: 1.5rem 1rem; max-width: 1200px; margin: 0 auto;">
    <ol style="display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; list-style: none; margin: 0; padding: 0;">
        <li style="display: flex; align-items: center;">
            <a href="/" style="color: hsl(210, 10%, 45%); text-decoration: none; font-size: 0.875rem; transition: color 0.2s;">
                Home
            </a>
        </li>
        <?php foreach ($items as $index => $item): ?>
            <li style="display: flex; align-items: center; color: hsl(210, 10%, 60%);">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 0.25rem;">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </li>
            <li style="display: flex; align-items: center;">
                <?php if ($index === count($items) - 1): ?>
                    <span style="color: hsl(210, 10%, 30%); font-size: 0.875rem; font-weight: 500;">
                        <?php echo htmlspecialchars($item['label']); ?>
                    </span>
                <?php else: ?>
                    <a href="<?php echo htmlspecialchars($item['href']); ?>" style="color: hsl(210, 10%, 45%); text-decoration: none; font-size: 0.875rem; transition: color 0.2s;">
                        <?php echo htmlspecialchars($item['label']); ?>
                    </a>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
    </ol>
</nav>

<style>
    nav[aria-label="Breadcrumb"] a:hover {
        color: hsl(198, 92%, 36%);
    }
    
    @media (max-width: 768px) {
        nav[aria-label="Breadcrumb"] {
            padding: 1rem 1rem;
        }
        nav[aria-label="Breadcrumb"] ol {
            font-size: 0.8125rem;
        }
    }
</style>
<?php
}
?>
