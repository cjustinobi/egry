<style>

  .product-types img {
    width: 100%;
  }

  .product-types div {
    margin-bottom: 20px;
  }

  .product-types {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: space-around;
  }

  @media (max-width: 767px) {
    .product-types {
      display: block;
    }
  }
</style>

<div class="px product-types">
  <div>
    <img src="<?php echo wp_get_attachment_image_src(125)[0]; ?>" alt="egry socials">
    <p class="center">DW-722G VIS Spectrophotometer</p>
  </div>
  <div>
    <img src="<?php echo wp_get_attachment_image_src(125)[0]; ?>" alt="egry socials">
    <p class="center">DW-721G VIS Spectrophotometer</p>
  </div>
  <div>
    <img src="<?php echo wp_get_attachment_image_src(126)[0]; ?>" alt="egry socials">
    <p class="center">DU-8800R Split Double Beam UV/VIS Spectrophotometer</p>
  </div>
  <div>
    <img src="<?php echo wp_get_attachment_image_src(127)[0]; ?>" alt="egry socials">
    <p class="center">DU-8600RN Split Beam UV/VIS Spectrophotometer</p>
  </div>
  <div>
    <img src="<?php echo wp_get_attachment_image_src(128)[0]; ?>" alt="egry socials">
    <p class="center">DU-8800D Double Beam UV/VIS Spectrophotometer</p>
  </div>
  <div>
    <img src="<?php echo wp_get_attachment_image_src(124)[0]; ?>" alt="egry socials">
    <p class="center">DU-8800DS Double Beam UV/VIS Spectrophotometer</p>
  </div>
</div>