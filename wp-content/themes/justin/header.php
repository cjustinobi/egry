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

    .menu-container {
      display: flex;
      padding: 10px 30px;
    }

    .sidebar-container {
      display: none;
    }

    .menu-container li {
      font-weight: 700;
      text-transform: uppercase;
      margin: 0 20px;
    }

    .sidebar-menu-container li {
      color: #fefefe;
      font-weight: 700;
      text-transform: uppercase;
      margin: 20px;
    }


    .toggle-menu {
      display: none;
    }

    .menu-container ul {
      min-width: 150px;
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      top: -999em;
      left: -999em;
    }

    .menu-container li {
      display: inline-block;
      position: relative;
      text-align: left;
    }

    .menu-container li.focus > ul,
    .menu-container li:hover > ul {
      top: auto;
      left: auto;
    }

    .menu-container li li {
      display: block;
    }

    .menu-container li li.focus > ul,
    .menu-container li li:hover > ul {
      left: 100%;
      top: 0;
    }

    .menu-container a {
      color: #515151;
      text-decoration: none;
      display: block;
      white-space: nowrap;
      padding: 10px 15px;
    }

    .menu-container a:hover,
    .menu-container li:hover > a,
    .menu-container li.focus > a,
    .menu-container .current-menu-item > a,
    .menu-container .current-menu-ancestor > a {
      color: #7DC239;
    }

    .menu-container .menu-item-has-children > a::before {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      border: 4px solid transparent;
      border-top-color: currentColor;
    }

    .menu-container ul .menu-item-has-children > a::before {
      right: 2px;
      border-top-color: transparent;
      border-left-color: currentColor;
    }

    .menu-container ul {
      background-color: #fefefe;
    }




    @media (max-width: 768px) {
      .logo {
        width: 160px;
      }

      .menu-container {
        display: none;
      }

      .toggle-menu {
        display: flex;
        justify-content: right;
        cursor: pointer;
      }

      .sidebar-container {
        display: none;
        background: grey;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 99999;
        padding-top: 60px;
        overflow: hidden;
      }

      .sidebar-container.show {
        display: block;
      }
    }

    @media (max-width: 466px) {
      .top-header-right img {
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