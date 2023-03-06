<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */

?>

<div class="px mt">
  <h2><?php the_title(); ?></h2>
  <img src="<?php echo the_post_thumbnail_url('thumbnail'); ?>" alt="">
  <p><?php the_content(); ?></p>
</div>
		<?php
//            the_date();
//            the_tags();
//            comments_number();
//comments_template();
		?>


