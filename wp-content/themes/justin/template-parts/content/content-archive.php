
		<?php
		the_post_thumbnail_url('thumbnail');
		the_title();
		the_date();
		comments_number();
		the_excerpt();
		?>

		<a href="<?php the_permalink(); ?>">Read more</a>


