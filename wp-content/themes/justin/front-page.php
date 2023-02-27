<?php get_header() ?>

    <h3>The page</h3>


  <?php

  /* Start the Loop */
  while ( have_posts() ) :
    the_post();
    get_template_part( 'template-parts/content/content-page' );

    // If comments are open or there is at least one comment, load up the comment template.
    if ( comments_open() || get_comments_number() ) {
      comments_template();
    }
  endwhile; // End of the loop.
?>

    <div class="grid">
        <div>
            Hello world
        </div>
        <div>
            Hello world
        </div>
        <div>
            Hello world
        </div>
    </div>

<?php get_footer() ?>