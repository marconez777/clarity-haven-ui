<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
    <style>
    .dropdown {
        position: relative;
    }

    .dropdown-toggle {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
    }

    .dropdown-toggle svg {
        width: 16px;
        height: 16px;
        transition: transform 0.2s;
    }

    .dropdown.active .dropdown-toggle svg {
        transform: rotate(180deg);
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 220px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        padding: 8px;
        margin-top: 8px;
        z-index: 1000;
    }

    .dropdown.active .dropdown-menu {
        display: block;
    }

    .dropdown-item {
        display: block;
        padding: 12px 16px;
        color: #333;
        text-decoration: none;
        border-radius: 6px;
        transition: background-color 0.2s;
    }

    .dropdown-item:hover {
        background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
        .dropdown-menu {
            position: static;
            box-shadow: none;
            padding-left: 20px;
            margin-top: 0;
        }
    }
    </style>

    <nav class="navbar">
        <div class="nav-container">
            <a href="<?php echo home_url( '/' ); ?>" class="nav-logo">
                <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="Dr Gabriel Lopes - Saúde Mental Integrada">
            </a>

            <ul class="nav-menu">
                <li><a href="<?php echo home_url( '/dr-gabriel-lopes' ); ?>">Dr. Gabriel Lopes</a></li>
                <li class="dropdown">
                    <a href="<?php echo home_url( '/especialidades' ); ?>" class="dropdown-toggle">
                        Especialidades
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </a>
                    <div class="dropdown-menu">
                        <a href="<?php echo home_url( '/tdah' ); ?>" class="dropdown-item">TDAH</a>
                        <a href="<?php echo home_url( '/ansiedade' ); ?>" class="dropdown-item">Ansiedade</a>
                        <a href="<?php echo home_url( '/depressao' ); ?>" class="dropdown-item">Depressão</a>
                        <a href="<?php echo home_url( '/transtorno-bipolar' ); ?>" class="dropdown-item">Transtorno Bipolar</a>
                    </div>
                </li>
                <li><a href="<?php echo home_url( '/equipe' ); ?>">Nossa Equipe</a></li>
                <li><a href="<?php echo home_url( '/testes' ); ?>">Testes</a></li>
                <li><a href="<?php echo home_url( '/blog' ); ?>">Blog</a></li>
                <li><a href="<?php echo home_url( '/contato' ); ?>">Contato</a></li>
                <li><a href="#agendar" class="nav-cta" style="color: white;">Agende sua consulta</a></li>
            </ul>
        </div>
    </nav>
</header>
<script>
// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');

    if (dropdown && dropdownToggle) {
        // Toggle on click
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Close on outside click
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
});
</script>
