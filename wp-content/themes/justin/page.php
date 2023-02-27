

<?php

  get_header();

  dynamic_sidebar('africside');

  /* Start the Loop */
  while ( have_posts() ) {
    the_post();
    get_template_part( 'template-parts/content/content-page' );
  }




  get_footer();
