<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php
    wp_head();
  ?>
</head>
<body>
<header>

  <?php
    $customLogoId = get_theme_mod('custom_logo');
    $logo = wp_get_attachment_image_src($customLogoId);
  ?>

  <div class="top-header">
    <img class="logo" src="<?php echo $logo[0] ?>" alt="egry logo">
    <div class="top-header-right">
      <img src="<?php echo wp_get_attachment_image_src(27)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(28)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(29)[0]; ?>" alt="egry socials">
      <div class="toggle-menu">
        &#9776;
      </div>
    </div>

  </div>

  <?php wp_nav_menu([
    'menu' => 'primary',
    'container' => '',
    'theme_location' => 'primary',
    'items_wrap' => '<ul class="menu-container">%3$s</ul>'
  ]) ?>



    <div class="sidebar-container">
      <?php get_template_part( 'template-parts/sidebar/sidebar-navigation' ); ?>


<!--      <p>Blog title --><?php //echo get_bloginfo('title') ?><!-- </p>-->
<!--      <h5>--><?php //the_title(); ?><!--</h5>-->
    </div>

</header>

<script>
  const toggleMenu = document.querySelector('.toggle-menu');
  const menuContainer = document.querySelector('.sidebar-container');

  toggleMenu.addEventListener('click', () => {
    menuContainer.classList.toggle('show');
  });
</script>