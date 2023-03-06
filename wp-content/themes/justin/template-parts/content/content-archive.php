<style>
  a {
    color: grey;
  }
  .posts {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 3rem;
  }

  .post {
    border-bottom: 1px solid grey;
    display: flex;
    margin-bottom: 30px;
  }

  .post img {
    width: 160px;
  }

  .categories {

  }


  @media (max-width: 767px) {
    .posts {
      display: block;
    }
    .categories {
      display: none;
    }
  }
</style>

<div class="posts px">
  <a href="<?php the_permalink(); ?>" class="post">
    <img src="<?php echo the_post_thumbnail_url('thumbnail'); ?>" alt="">
    <div>
      <h1><?php the_title(); ?></h1>
      <p><?php the_excerpt(); ?></p>
    </div>
  </a>
<!--  <ul class="categories">-->
<!--    --><?php
//      $args = array(
//        'orderby' => 'name',
//        'order' => 'ASC',
//        'hide_empty' => true
//      );
//
//      $categories = get_categories($args);
//
//      foreach ($categories as $category) {
//        echo '<li><a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a></li>';
//      }
//    ?>
<!--  </ul>-->
</div>


