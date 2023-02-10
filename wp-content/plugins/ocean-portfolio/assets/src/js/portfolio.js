import OW_Base from "./base/base";

class OW_Portfolio extends OW_Base {
    getDefaultSettings() {
        return {
            selectors: {
                portfolio: ".portfolio-wrap",
                portfolioMasonry: ".portfolio-entries.masonry-grid .portfolio-wrap",
                portfolioGrid: ".portfolio-entries.isotope-grid .portfolio-wrap",
                linkIcon: ".portfolio-wrap .op-link",
            },
            options: oceanwpLocalize,
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings("selectors");

        return {
            portfolio: document.querySelectorAll(selectors.portfolio),
            portfolioMasonry: document.querySelectorAll(selectors.portfolioMasonry),
            portfolioGrid: document.querySelectorAll(selectors.portfolioGrid),
            linkIcon: document.querySelectorAll(selectors.linkIcon),
            body: document.body,
        };
    }

    onInit() {
        super.onInit();

        this.initMasonry();
        this.initGrid();

        if (this.elements.portfolio.length > 0) {
            this.initLightboxGallery();
        }
    }

    bindEvents() {
        this.elements.linkIcon?.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.stopPropagation();
            });
        });
    }

    initMasonry() {
        const options = this.getSettings("options");

        this.elements.portfolioMasonry?.forEach((portfolio) => {
            imagesLoaded(portfolio, (instance) => {
                new Isotope(portfolio, {
                    itemSelector: ".portfolio-entry",
                    transformsEnabled: true,
                    isOriginLeft: options.isRTL ? false : true,
                    transitionDuration: "0.4s",
                    layoutMode: "masonry",
                });
            });
        });
    }

    initGrid() {
        const options = this.getSettings("options");

        this.elements.portfolioGrid?.forEach((portfolio) => {
            imagesLoaded(portfolio, (instance) => {
                const layoutMode = portfolio.dataset.layout ? portfolio.dataset.layout : "masonry";
                const portfolioFilter = portfolio.previousElementSibling;

                const portfolioGridIsotope = new Isotope(portfolio, {
                    itemSelector: ".portfolio-entry",
                    transformsEnabled: true,
                    isOriginLeft: options.isRTL ? false : true,
                    transitionDuration: "0.4s",
                    layoutMode: layoutMode,
                });

                if (!!portfolioFilter && portfolioFilter.classList.contains("portfolio-filters")) {
                    portfolioFilter.querySelectorAll("a")?.forEach((portfolioFilterLink) => {
                        portfolioFilterLink.addEventListener("click", (event) => {
                            event.preventDefault();
                            event.stopPropagation();

                            portfolioGridIsotope.arrange({
                                filter: portfolioFilterLink.dataset.filter,
                            });

                            portfolioFilter.querySelectorAll("li").forEach((listTag) => {
                                listTag.classList.remove("active");
                            });

                            portfolioFilterLink.parentNode.classList.add("active");
                        });
                    });
                }
            });
        });
    }

    initLightboxGallery() {
        this.addPhotoSwipeToDOM();

        const pswpElement = document.querySelector(".pswp");
        const options = this.getSettings("options");

        this.elements.portfolio?.forEach((portfolio) => {
            const images = Array.from(portfolio.querySelectorAll(".portfolio-lightbox")).reduce((acc, lightbox) => {
                const imageSize = lightbox.dataset.size.split("x");

                acc.push({
                    src: lightbox.href,
                    w: imageSize[0],
                    h: imageSize[1],
                });

                return acc;
            }, []);

            portfolio.querySelectorAll(".portfolio-lightbox")?.forEach((lightbox) => {
                lightbox.addEventListener("click", (event) => {
                    event.preventDefault();
                });

                lightbox.nextElementSibling?.querySelector(".op-link")?.addEventListener("click", (event) => {
                    event.stopPropagation();
                });

                lightbox.closest("figure")?.addEventListener("click", (event) => {
                    event.stopPropagation();

                    const figure = event.currentTarget;

                    const lightboxGallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, {
                        index: this.getImageIndex(figure),
                        bgOpacity: 0.7,
                        showHideOpacity: true,
                        shareButtons: [
                            {
                                id: "facebook",
                                label: options.shareFacebook,
                                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
                            },
                            {
                                id: "twitter",
                                label: options.shareTwitter,
                                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
                            },
                            {
                                id: "pinterest",
                                label: options.sharePinterest,
                                url:
                                    "http://www.pinterest.com/pin/create/button/" +
                                    "?url={{url}}&media={{image_url}}&description={{text}}",
                            },
                            {
                                id: "download",
                                label: options.pswpDownload,
                                url: "{{raw_image_url}}",
                                download: true,
                            },
                        ],
                    });

                    lightboxGallery.init();
                });
            });
        });
    }

    addPhotoSwipeToDOM() {
        if (!!document.querySelector(".pswp")) {
            return;
        }

        this.elements.body.insertAdjacentHTML(
            "beforeend",
            `<!-- Root element of PhotoSwipe. Must have class pswp. -->
            <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                <!-- Background of PhotoSwipe. 
                    It's a separate element as animating opacity is faster than rgba(). -->
                <div class="pswp__bg"></div>

                <!-- Slides wrapper with overflow:hidden. -->
                <div class="pswp__scroll-wrap">
                    <!-- Container that holds slides. 
                        PhotoSwipe keeps only 3 of them in the DOM to save memory.
                        Don't modify these 3 pswp__item elements, data is added later on. -->
                    <div class="pswp__container">
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                    </div>

                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
                    <div class="pswp__ui pswp__ui--hidden">
                        <div class="pswp__top-bar">
                            <!--  Controls are self-explanatory. Order can be changed. -->
                            <div class="pswp__counter"></div>

                            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            <button class="pswp__button pswp__button--share" title="Share"></button>
                            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                            <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                            <!-- element will get class pswp__preloader--active when preloader is running -->
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                <div class="pswp__preloader__cut">
                                    <div class="pswp__preloader__donut"></div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div class="pswp__share-tooltip"></div> 
                        </div>

                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                        </button>

                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                        </button>

                        <div class="pswp__caption">
                            <div class="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }

    getImageIndex(figure) {
        const figures = figure.parentNode.children;

        for (let index = 0; index < figures.length; index++) {
            if (figures[index] == figure) {
                return index;
            }
        }

        return 0;
    }
}

("use strict");
new OW_Portfolio();
