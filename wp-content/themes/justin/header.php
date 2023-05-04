<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php
    wp_head();
  ?>
  <style>
    header {
      background: #fefefe;
    }

    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid grey;
    }

    .top-header-right {
      display: flex;
      align-items: center;
    }

    .top-header-right > * {
      margin: 0 10px;
    }

    #mega-menu-wrap-primary #mega-menu-primary li.mega-menu-item-has-children > a.mega-menu-link > span.mega-indicator {
      display: inline;
    }

    @media (max-width: 768px) {
      .logo {
        width: 160px;
      }

      .menu-container {
        display: none;
      }
    }

    @media (max-width: 466px) {
      .top-header-right img {
        display: none;
      }
    }

    @media (min-width: 768px) {
      .mobile-menu {
        display: none;
      }
    }

  </style>
</head>
<body>
<header>

  <?php
    $customLogoId = get_theme_mod('custom_logo');
    $logo = wp_get_attachment_image_src($customLogoId);
  ?>

  <div class="px py-5 top-header">
    <img class="logo" src="<?php echo $logo[0] ?>" alt="egry logo">
    <div class="top-header-right">
      <img src="<?php echo wp_get_attachment_image_src(27)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(28)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(29)[0]; ?>" alt="egry socials">
      <div class="mobile-menu">
        <?php
          wp_nav_menu(array(
            'theme_location' => 'primary', // replace with the name of your menu location
            'menu_class' => 'mobile-menu', // specify the CSS class for the menu
//     'walker' => new Max_Mega_Menu_Walker(), // specify the Max Mega Menu walker
            'echo' => true, // whether to display the menu or return it as a string
            'fallback_cb' => false, // whether to display a fallback menu if the location doesn't exist
            'menu_id' => '', // specify the ID for the menu
            'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>', // specify the HTML wrapper for the menu items
            'depth' => 0, // specify the depth of the menu
            'max_mega_menu' => 'true', // enable Max Mega Menu for this menu
          ));

        ?>
      </div>
    </div>

  </div>

  <div class="menu-container"><?php wp_nav_menu([
      'menu' => 'primary',
      'container' => '',
      'theme_location' => 'primary',
      'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>'
    ]) ?></div>

</header>

<script>

  // window.onload = () => {
  //   let menuItems = document.querySelectorAll('.mega-menu-item-has-children')
  //
  //   for (let i = 0; i < menuItems.length; i++) {
  //     menuItems[i].addEventListener('click', function(e) {
  //       e.preventDefault()
  //     })
  //   }
  // }
</script>