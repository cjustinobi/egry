<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
		<?php
            the_date();
            the_tags();
            comments_number();
		the_content();

comments_template();
		?>


<!--	--><?php //if ( ! is_singular( 'attachment' ) ) : ?>
<!--		--><?php //get_template_part( 'template-parts/post/author-bio' ); ?>
<!--	--><?php //endif; ?>

