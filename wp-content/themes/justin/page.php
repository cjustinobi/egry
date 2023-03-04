

<?php get_header(); ?>

<div class="px">
  <?php

    while ( have_posts() ) {
      the_post();
      get_template_part( 'template-parts/content/content-page' );
    }

  ?>
</div>

<?php get_footer(); ?>
