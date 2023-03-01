<style>
  .footer-menu-container li {
    display: inline;
  }

  .footer-menu-container li a {
    color: #121212;
  }

  .footer-top {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    .footer-menu-container li {
      margin-left: 12px;
    }
  }

  @media (max-width: 767px) {
    .footer-top {
      display: block;
    }
  }
</style>

<footer>

  <?php
    $customLogoId = get_theme_mod('custom_logo');
    $logo = wp_get_attachment_image_src($customLogoId);
  ?>

  <div class="px footer-top">
    <img width="150px" class="logo" src="<?php echo $logo[0] ?>" alt="egry logo">

    <?php
      wp_nav_menu([
        'menu' => 'footer',
        'container' => '',
        'theme_location' => 'footer',
        'items_wrap' => '<ul class="footer-menu-container">%3$s</ul>'
      ])
    ?>
  </div>
  <p class="center">
    Copyright (C) <?php echo date('Y')?> EGRY ENGINEERING LIMITED
  </p>
</footer>

<?php
  wp_footer();
?>

</body>
</html>