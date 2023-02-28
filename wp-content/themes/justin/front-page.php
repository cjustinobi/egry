<?php get_header() ?>

  <style>
    .service-areas {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;
    }

    .service-areas div {
      border-top: 2px solid #18467E;
      background: #fefefe;
      padding: 2rem;
    }

    .service-areas div img {
      margin-top: 12px;
      width: 30px;
    }

    .service-areas-detail {
      font-weight: 100;
    }

    @media (max-width: 767px) {
      .service-areas {
        display: block;
      }
    }
  </style>

  <div class="px">
    <h1 class="center cap">our service areas</h1>
    <div class="service-areas">
      <div>
        <img src="<?php echo wp_get_attachment_image_src(46)[0]; ?>" alt="egry socials">
        <p>Petrochemical</p>
        <p class="service-areas-detail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla, quisquam.
          Adipisci doloremque ex iste labore officia perspiciatis sint soluta suscipit.
        </p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(45)[0]; ?>" alt="egry socials">
        <p>Clinical Diagnostics & Pharmaceuticals</p>
        <p class="service-areas-detail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla, quisquam.
          Adipisci doloremque ex iste labore officia perspiciatis sint soluta suscipit.
        </p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(41)[0]; ?>" alt="egry socials">
        <p>Food, Safety  & Agriculture</p>
        <p class="service-areas-detail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla, quisquam.
          Adipisci doloremque ex iste labore officia perspiciatis sint soluta suscipit.
        </p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(42)[0]; ?>" alt="egry socials">
        <p>Environmental Monitoring</p>
        <p class="service-areas-detail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla, quisquam.
          Adipisci doloremque ex iste labore officia perspiciatis sint soluta suscipit.
        </p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(43)[0]; ?>" alt="egry socials">
        <p>Geological, Mining and Metallurgical</p>
        <p class="service-areas-detail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla, quisquam.
          Adipisci doloremque ex iste labore officia perspiciatis sint soluta suscipit.
        </p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(44)[0]; ?>" alt="egry socials">
        <p>Education and Academic Research</p>
        <p class="service-areas-detail">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nulla, quisquam.
          Adipisci doloremque ex iste labore officia perspiciatis sint soluta suscipit.
        </p>
      </div>
    </div>
  </div>

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


<?php get_footer() ?>