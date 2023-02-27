<?php

  function africinnovate_support() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
  }

  add_action('after_setup_theme', 'africinnovate_support');

  function africinnovate_menus() {
    $locations = [
      'primary' => 'Header Menu',
      'footer' => 'Footer Menu',
    ];

    register_nav_menus($locations);
  }

  add_action('init', 'africinnovate_menus');

function africinnovate_register_styles() {

  $version = wp_get_theme()->get('Version');
  wp_enqueue_style(
    'africinnovate-global-style',
    get_template_directory_uri() . '/style.css',
    [],
    $version,
    'all'
  );
}

add_action('wp_enqueue_scripts', 'africinnovate_register_styles');


  function africinnovate_register_scripts() {

    wp_enqueue_script(
      'africinnovate-js',
      get_template_directory_uri() . '/assets/js/app.js',
      [],
      '',
      true
    );
  }

  add_action('wp_enqueue_scripts', 'africinnovate_register_scripts');


  function africinnovate_theme_styles() {
//    if(get_queried_object_id() == 97){
      wp_enqueue_style( 'my-styles', get_template_directory_uri() . '/assets/css/home.css');
//    }
  }

  add_action( 'wp_enqueue_scripts', 'africinnovate_theme_styles' );


  function africinnovate_widget_areas() {

    register_sidebar([
      'name' => 'App sidebar',
      'description' => 'Add whatever you like!',
      'id' => 'africside'
    ]);
  }

  add_action('widgets_init', 'africinnovate_widget_areas');