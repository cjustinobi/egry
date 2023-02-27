
<?php


  get_header();
  /* Start the Loop */
  while ( have_posts() )  {
    the_post();
    get_template_part( 'template-parts/content/content-archive' );
  }

the_posts_pagination();


  get_footer();
