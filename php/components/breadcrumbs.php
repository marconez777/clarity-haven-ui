<?php
/**
 * Breadcrumbs Component
 * 
 * @param array $items Array of breadcrumb items: [['label' => 'Text', 'href' => '/url'], ...]
 */
function render_breadcrumbs($items) {
?>
<div class="breadcrumbs-container">
    <nav aria-label="Breadcrumb" class="breadcrumbs">
        <ol class="breadcrumbs-list">
            <li class="breadcrumb-item">
                <a href="/" class="breadcrumb-link">Home</a>
            </li>
            <?php foreach ($items as $index => $item): ?>
                <li class="breadcrumb-separator">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </li>
                <li class="breadcrumb-item">
                    <?php if ($index === count($items) - 1): ?>
                        <span class="breadcrumb-current"><?php echo htmlspecialchars($item['label']); ?></span>
                    <?php else: ?>
                        <a href="<?php echo htmlspecialchars($item['href']); ?>" class="breadcrumb-link">
                            <?php echo htmlspecialchars($item['label']); ?>
                        </a>
                    <?php endif; ?>
                </li>
            <?php endforeach; ?>
        </ol>
    </nav>
</div>
<?php
}
?>
