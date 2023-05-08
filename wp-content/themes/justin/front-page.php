<?php get_header() ?>

  <style>
    .service-areas {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;
    }

    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
      justify-items: auto;
    }

    .products-detail {
      background: #18467E;
      padding: 6px 12px;
      color: #fefefe;
    }

    .product {
      background: #fefefe;
    }

    .product img {
      height: 200px;
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

    .health-safety {
      background: #fefefe;
      margin-top: 100px;
    }

    .health-safety div {
      width: 50%;
    }

    .mission {
      padding: 50px;
    }

    .mission p {
      width: 50%;
      margin: 30px auto;
      color: #fefefe;
    }

    .partners {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3rem;

    }

    .partners-container {
      background: #fefefe;
      padding-top: 60px;
      padding-bottom: 60px;
      margin-top: 60px;
    }

    @media (max-width: 767px) {
      .service-areas, .products, .partners {
        display: block;
      }
      .health-safety div {
        width: 100%;
      }
      .partner-heading {
        font-size: 24px;
      }
      .mission {
       padding: 10px;
      }

      .mission p {
        width: 90%;
      }
    }
  </style>

  <?php get_template_part( 'template-parts/content/slider' ); ?>

  <div class="px">
    <h1 class="center cap">our service areas</h1>
    <div class="service-areas">
      <div>
        <img src="<?php echo wp_get_attachment_image_src(46)[0]; ?>" alt="egry socials">
        <p>Petrochemical</p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(45)[0]; ?>" alt="egry socials">
        <p>Clinical Diagnostics & Pharmaceuticals</p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(41)[0]; ?>" alt="egry socials">
        <p>Food, Safety  & Agriculture</p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(42)[0]; ?>" alt="egry socials">
        <p>Environmental Monitoring</p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(43)[0]; ?>" alt="egry socials">
        <p>Geological, Mining and Metallurgical</p>
      </div>
      <div>
        <img src="<?php echo wp_get_attachment_image_src(44)[0]; ?>" alt="egry socials">
        <p>Education and Academic Research</p>
      </div>
    </div>
  </div>

  <div class="px py-20 health-safety">
    <div>
      <h1>Health, Safety and Environment</h1>
      <p>
        Egry endeavors to educate local communities affected or adjacent to work
        areas to give full assurance that ongoing work is being sympathetically
        undertaken and that local customs and habitats will be enhanced by the work.
      </p>
      <button class="btn accent-bg">Learn More</button>
    </div>
  </div>

  <div class="app-bg mission">
    <p class="center">
      ‘’Our future rests on our people. We are passionate in seeing our professional staff grow
      into highly-skilled and experienced men and women.’’
    </p>
  </div>

  <div class="px">
    <h1 class="center cap">Our Products</h1>
    <div class="products">
      <div class="product">
        <img src="<?php echo wp_get_attachment_image_src(64)[0]; ?>" alt="egry socials">
        <div class="products-detail">
          <p>DU-8200 Single Beam UV/VIS <br> Spectrophotometer</p>
        </div>
      </div>
      <div class="product">
        <img src="<?php echo wp_get_attachment_image_src(65)[0]; ?>" alt="egry socials">
        <div class="products-detail">
          <p>PM5000 Patient <br> Monitor</p>
        </div>
      </div>
      <div class="product">
        <img src="<?php echo wp_get_attachment_image_src(66)[0]; ?>" alt="egry socials">
        <div class="products-detail">
          <p>DigiPol Automatic <br> Polarimeter</p>
        </div>
      </div>

      <div class="product">
        <img src="<?php echo wp_get_attachment_image_src(67)[0]; ?>" alt="egry socials">
        <div class="products-detail">
          <p>GC1290 Gas Chromatography <br> (LCD Touch Screen)</p>
        </div>
      </div>
      <div class="product">
        <img src="<?php echo wp_get_attachment_image_src(68)[0]; ?>" alt="egry socials">
        <div class="products-detail">
          <p>WJ-2 Series CO2 Incubator <br> (Chamber Volume: 80L/160L)</p>
        </div>
      </div>
      <div class="product">
        <img src="<?php echo wp_get_attachment_image_src(69)[0]; ?>" alt="egry socials">
        <div class="products-detail">
          <p>High & Low Speed Refrigerated <br> Centrifuge TDL-5/6M/MC</p>
        </div>
      </div>
    </div>
  </div>

  <div class="px partners-container">
    <h1 class="center partner-heading">Meet our Partners</h1>
    <div class="partners">
      <img src="<?php echo wp_get_attachment_image_src(72)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(71)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(70)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(574)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(575)[0]; ?>" alt="egry socials">
      <img src="<?php echo wp_get_attachment_image_src(576)[0]; ?>" alt="egry socials">
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