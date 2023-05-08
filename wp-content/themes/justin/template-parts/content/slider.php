
  <style>
    * {box-sizing: border-box}
    body {font-family: Verdana, sans-serif; margin:0}
    .mySlides {display: none}
    img {vertical-align: middle;}

    /* Slideshow container */
    .slideshow-container {
      position: relative;
      margin: auto;
    }

    /* Next & previous buttons */
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -22px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover, .next:hover {
      background-color: rgba(0,0,0,0.8);
    }

    /* Caption text */
    .text {
      color: #f2f2f2;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      top: 20px;
      left: 100px;
      width: 50%;
    }

    .text h1 {
      font-weight: 900;
    }

    /* Number text (1/3 etc) */
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }

    /* The dots/bullets/indicators */
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }

    .active, .dot:hover {
      background-color: #717171;
    }

    /* Fading animation */
    .fade {
      animation-name: fade;
      animation-duration: 1.5s;
    }

    @keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
    }

    /* On smaller screens, decrease text size */
    @media only screen and (max-width: 300px) {
      .prev, .next,.text {font-size: 11px}
      .prev, .next {padding: 8px}
    }

     @media (max-width: 767px) {
       .text {
         top: 2px;
         left: 10px;
         width: 90%;
       }
       .text h1 {
         margin-top: 5px;
         margin-bottom: 5px;
         font-weight: 500;
         font-size: 14px;
       }

       .text p {
         font-size: 10px;
       }

       .text button {
         display: none;
       }
     }
  </style>


  <div>
    <div class="slideshow-container">

      <div class="mySlides fade">
        <img src="<?php echo wp_get_attachment_image_src(63)[0]; ?>" width="100%" alt="egry socials">
        <div class="text">
          <h1>INSTRUMENT SALES, CALIBRATION AND REPAIR SERVICES</h1>
          <p>
            We provide top quality chemical analysis solutions and laboratory
            instrumentation coupled with excellent pre-sales and after-sales
            technical support services on a multi-instrument and multi-vendor platform.
          </p>
          <button onclick="location.href='<?php echo esc_url( get_permalink( get_page_by_title( 'Contact Us' ) ) ); ?>';" class="btn accent-bg">Contact Us</button>
        </div>
      </div>


      <a class="prev" onclick="plusSlides(-1)">❮</a>
      <a class="next" onclick="plusSlides(1)">❯</a>

    </div>
  </div>

<script>
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
</script>
