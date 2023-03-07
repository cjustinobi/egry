<style>
  .sidebar-menu-container ul {
    min-width: 150px;
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    top: -999em;
    left: -999em;
    z-index: 999999;
  }

  /*.sidebar-menu-container li {*/
  /*  display: inline-block;*/
  /*  position: relative;*/
  /*  text-align: left;*/
  /*}*/

  .sidebar-menu-container li.focus > ul,
  .sidebar-menu-container li:hover > ul {
    top: auto;
    left: auto;
  }

  .sidebar-menu-container li li {
    display: block;
  }

  .sidebar-menu-container li li.focus > ul,
  .sidebar-menu-container li li:hover > ul {
    left: 100%;
    top: 0;
  }
</style>
 <?php

   wp_nav_menu( array(
     'theme_location' => 'primary', // replace with the name of your menu location
     'menu_class' => 'max-mega-menu', // specify the CSS class for the menu
//     'walker' => new Max_Mega_Menu_Walker(), // specify the Max Mega Menu walker
     'echo' => true, // whether to display the menu or return it as a string
     'fallback_cb' => false, // whether to display a fallback menu if the location doesn't exist
     'menu_id' => '', // specify the ID for the menu
     'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>', // specify the HTML wrapper for the menu items
     'depth' => 0, // specify the depth of the menu
     'max_mega_menu' => 'true', // enable Max Mega Menu for this menu
   ) );

//   wp_nav_menu([
//     'menu' => 'primary',
//     'container' => '',
//     'theme_location' => 'primary',
//     'items_wrap' => '<ul class="sidebar-menu-container">%3$s</ul>'
//   ]);