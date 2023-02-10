(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _settings = /*#__PURE__*/new WeakMap();

var OW_Base = /*#__PURE__*/function () {
  function OW_Base() {
    _classCallCheck(this, OW_Base);

    _settings.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "elements", void 0);

    this.onInit();
    this.bindEvents();
  }

  _createClass(OW_Base, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {};
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      return {};
    }
  }, {
    key: "onInit",
    value: function onInit() {
      _classPrivateFieldSet(this, _settings, this.getDefaultSettings());

      this.elements = this.getDefaultElements();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "getSettings",
    value: function getSettings() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!!key) {
        return _classPrivateFieldGet(this, _settings)[key];
      }

      return _classPrivateFieldGet(this, _settings);
    }
  }, {
    key: "setSettings",
    value: function setSettings() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!settings) {
        return;
      }

      _classPrivateFieldSet(this, _settings, Object.assign(_classPrivateFieldGet(this, _settings), settings));
    }
  }]);

  return OW_Base;
}();

var _default = OW_Base;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _base = _interopRequireDefault(require("./base/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OW_Portfolio = /*#__PURE__*/function (_OW_Base) {
  _inherits(OW_Portfolio, _OW_Base);

  var _super = _createSuper(OW_Portfolio);

  function OW_Portfolio() {
    _classCallCheck(this, OW_Portfolio);

    return _super.apply(this, arguments);
  }

  _createClass(OW_Portfolio, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          portfolio: ".portfolio-wrap",
          portfolioMasonry: ".portfolio-entries.masonry-grid .portfolio-wrap",
          portfolioGrid: ".portfolio-entries.isotope-grid .portfolio-wrap",
          linkIcon: ".portfolio-wrap .op-link"
        },
        options: oceanwpLocalize
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings("selectors");
      return {
        portfolio: document.querySelectorAll(selectors.portfolio),
        portfolioMasonry: document.querySelectorAll(selectors.portfolioMasonry),
        portfolioGrid: document.querySelectorAll(selectors.portfolioGrid),
        linkIcon: document.querySelectorAll(selectors.linkIcon),
        body: document.body
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      _get(_getPrototypeOf(OW_Portfolio.prototype), "onInit", this).call(this);

      this.initMasonry();
      this.initGrid();

      if (this.elements.portfolio.length > 0) {
        this.initLightboxGallery();
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this$elements$linkIc;

      (_this$elements$linkIc = this.elements.linkIcon) === null || _this$elements$linkIc === void 0 ? void 0 : _this$elements$linkIc.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.stopPropagation();
        });
      });
    }
  }, {
    key: "initMasonry",
    value: function initMasonry() {
      var _this$elements$portfo;

      var options = this.getSettings("options");
      (_this$elements$portfo = this.elements.portfolioMasonry) === null || _this$elements$portfo === void 0 ? void 0 : _this$elements$portfo.forEach(function (portfolio) {
        imagesLoaded(portfolio, function (instance) {
          new Isotope(portfolio, {
            itemSelector: ".portfolio-entry",
            transformsEnabled: true,
            isOriginLeft: options.isRTL ? false : true,
            transitionDuration: "0.4s",
            layoutMode: "masonry"
          });
        });
      });
    }
  }, {
    key: "initGrid",
    value: function initGrid() {
      var _this$elements$portfo2;

      var options = this.getSettings("options");
      (_this$elements$portfo2 = this.elements.portfolioGrid) === null || _this$elements$portfo2 === void 0 ? void 0 : _this$elements$portfo2.forEach(function (portfolio) {
        imagesLoaded(portfolio, function (instance) {
          var layoutMode = portfolio.dataset.layout ? portfolio.dataset.layout : "masonry";
          var portfolioFilter = portfolio.previousElementSibling;
          var portfolioGridIsotope = new Isotope(portfolio, {
            itemSelector: ".portfolio-entry",
            transformsEnabled: true,
            isOriginLeft: options.isRTL ? false : true,
            transitionDuration: "0.4s",
            layoutMode: layoutMode
          });

          if (!!portfolioFilter && portfolioFilter.classList.contains("portfolio-filters")) {
            var _portfolioFilter$quer;

            (_portfolioFilter$quer = portfolioFilter.querySelectorAll("a")) === null || _portfolioFilter$quer === void 0 ? void 0 : _portfolioFilter$quer.forEach(function (portfolioFilterLink) {
              portfolioFilterLink.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                portfolioGridIsotope.arrange({
                  filter: portfolioFilterLink.dataset.filter
                });
                portfolioFilter.querySelectorAll("li").forEach(function (listTag) {
                  listTag.classList.remove("active");
                });
                portfolioFilterLink.parentNode.classList.add("active");
              });
            });
          }
        });
      });
    }
  }, {
    key: "initLightboxGallery",
    value: function initLightboxGallery() {
      var _this$elements$portfo3,
          _this = this;

      this.addPhotoSwipeToDOM();
      var pswpElement = document.querySelector(".pswp");
      var options = this.getSettings("options");
      (_this$elements$portfo3 = this.elements.portfolio) === null || _this$elements$portfo3 === void 0 ? void 0 : _this$elements$portfo3.forEach(function (portfolio) {
        var _portfolio$querySelec;

        var images = Array.from(portfolio.querySelectorAll(".portfolio-lightbox")).reduce(function (acc, lightbox) {
          var imageSize = lightbox.dataset.size.split("x");
          acc.push({
            src: lightbox.href,
            w: imageSize[0],
            h: imageSize[1]
          });
          return acc;
        }, []);
        (_portfolio$querySelec = portfolio.querySelectorAll(".portfolio-lightbox")) === null || _portfolio$querySelec === void 0 ? void 0 : _portfolio$querySelec.forEach(function (lightbox) {
          var _lightbox$nextElement, _lightbox$nextElement2, _lightbox$closest;

          lightbox.addEventListener("click", function (event) {
            event.preventDefault();
          });
          (_lightbox$nextElement = lightbox.nextElementSibling) === null || _lightbox$nextElement === void 0 ? void 0 : (_lightbox$nextElement2 = _lightbox$nextElement.querySelector(".op-link")) === null || _lightbox$nextElement2 === void 0 ? void 0 : _lightbox$nextElement2.addEventListener("click", function (event) {
            event.stopPropagation();
          });
          (_lightbox$closest = lightbox.closest("figure")) === null || _lightbox$closest === void 0 ? void 0 : _lightbox$closest.addEventListener("click", function (event) {
            event.stopPropagation();
            var figure = event.currentTarget;
            var lightboxGallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, {
              index: _this.getImageIndex(figure),
              bgOpacity: 0.7,
              showHideOpacity: true,
              shareButtons: [{
                id: "facebook",
                label: options.shareFacebook,
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
              }, {
                id: "twitter",
                label: options.shareTwitter,
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
              }, {
                id: "pinterest",
                label: options.sharePinterest,
                url: "http://www.pinterest.com/pin/create/button/" + "?url={{url}}&media={{image_url}}&description={{text}}"
              }, {
                id: "download",
                label: options.pswpDownload,
                url: "{{raw_image_url}}",
                download: true
              }]
            });
            lightboxGallery.init();
          });
        });
      });
    }
  }, {
    key: "addPhotoSwipeToDOM",
    value: function addPhotoSwipeToDOM() {
      if (!!document.querySelector(".pswp")) {
        return;
      }

      this.elements.body.insertAdjacentHTML("beforeend", "<!-- Root element of PhotoSwipe. Must have class pswp. -->\n            <div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n                <!-- Background of PhotoSwipe. \n                    It's a separate element as animating opacity is faster than rgba(). -->\n                <div class=\"pswp__bg\"></div>\n\n                <!-- Slides wrapper with overflow:hidden. -->\n                <div class=\"pswp__scroll-wrap\">\n                    <!-- Container that holds slides. \n                        PhotoSwipe keeps only 3 of them in the DOM to save memory.\n                        Don't modify these 3 pswp__item elements, data is added later on. -->\n                    <div class=\"pswp__container\">\n                        <div class=\"pswp__item\"></div>\n                        <div class=\"pswp__item\"></div>\n                        <div class=\"pswp__item\"></div>\n                    </div>\n\n                    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->\n                    <div class=\"pswp__ui pswp__ui--hidden\">\n                        <div class=\"pswp__top-bar\">\n                            <!--  Controls are self-explanatory. Order can be changed. -->\n                            <div class=\"pswp__counter\"></div>\n\n                            <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n                            <button class=\"pswp__button pswp__button--share\" title=\"Share\"></button>\n                            <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n                            <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n\n                            <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->\n                            <!-- element will get class pswp__preloader--active when preloader is running -->\n                            <div class=\"pswp__preloader\">\n                                <div class=\"pswp__preloader__icn\">\n                                <div class=\"pswp__preloader__cut\">\n                                    <div class=\"pswp__preloader__donut\"></div>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                            <div class=\"pswp__share-tooltip\"></div> \n                        </div>\n\n                        <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\">\n                        </button>\n\n                        <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\">\n                        </button>\n\n                        <div class=\"pswp__caption\">\n                            <div class=\"pswp__caption__center\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>");
    }
  }, {
    key: "getImageIndex",
    value: function getImageIndex(figure) {
      var figures = figure.parentNode.children;

      for (var index = 0; index < figures.length; index++) {
        if (figures[index] == figure) {
          return index;
        }
      }

      return 0;
    }
  }]);

  return OW_Portfolio;
}(_base["default"]);

"use strict";

new OW_Portfolio();

},{"./base/base":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvcG9ydGZvbGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTztBQUlGLHFCQUFjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQ1YsU0FBSyxNQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0g7Ozs7V0FFRCw4QkFBcUI7QUFDakIsYUFBTyxFQUFQO0FBQ0g7OztXQUVELDhCQUFxQjtBQUNqQixhQUFPLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCw2Q0FBaUIsS0FBSyxrQkFBTCxFQUFqQjs7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBSyxrQkFBTCxFQUFoQjtBQUNIOzs7V0FFRCxzQkFBYSxDQUFFOzs7V0FFZix1QkFBd0I7QUFBQSxVQUFaLEdBQVksdUVBQU4sSUFBTTs7QUFDcEIsVUFBSSxDQUFDLENBQUMsR0FBTixFQUFXO0FBQ1AsZUFBTyx1Q0FBZSxHQUFmLENBQVA7QUFDSDs7QUFFRCxtQ0FBTyxJQUFQO0FBQ0g7OztXQUVELHVCQUEyQjtBQUFBLFVBQWYsUUFBZSx1RUFBSixFQUFJOztBQUN2QixVQUFJLENBQUMsUUFBTCxFQUFlO0FBQ1g7QUFDSDs7QUFFRCw2Q0FBaUIsTUFBTSxDQUFDLE1BQVAsdUJBQWMsSUFBZCxjQUE4QixRQUE5QixDQUFqQjtBQUNIOzs7Ozs7ZUFHVSxPOzs7Ozs7OztBQ3pDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLFk7Ozs7Ozs7Ozs7Ozs7V0FDRiw4QkFBcUI7QUFDakIsYUFBTztBQUNILFFBQUEsU0FBUyxFQUFFO0FBQ1AsVUFBQSxTQUFTLEVBQUUsaUJBREo7QUFFUCxVQUFBLGdCQUFnQixFQUFFLGlEQUZYO0FBR1AsVUFBQSxhQUFhLEVBQUUsaURBSFI7QUFJ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QUFPLENBQVA7QUFDSDs7OztFQW5Qc0IsZ0I7O0FBc1AxQixZQUFEOztBQUNBLElBQUksWUFBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIE9XX0Jhc2Uge1xuICAgICNzZXR0aW5ncztcbiAgICBlbGVtZW50cztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0RWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuI3NldHRpbmdzID0gdGhpcy5nZXREZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuZ2V0RGVmYXVsdEVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHt9XG5cbiAgICBnZXRTZXR0aW5ncyhrZXkgPSBudWxsKSB7XG4gICAgICAgIGlmICghIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NldHRpbmdzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3M7XG4gICAgfVxuXG4gICAgc2V0U2V0dGluZ3Moc2V0dGluZ3MgPSB7fSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24odGhpcy4jc2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XX0Jhc2U7XG4iLCJpbXBvcnQgT1dfQmFzZSBmcm9tIFwiLi9iYXNlL2Jhc2VcIjtcblxuY2xhc3MgT1dfUG9ydGZvbGlvIGV4dGVuZHMgT1dfQmFzZSB7XG4gICAgZ2V0RGVmYXVsdFNldHRpbmdzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3JzOiB7XG4gICAgICAgICAgICAgICAgcG9ydGZvbGlvOiBcIi5wb3J0Zm9saW8td3JhcFwiLFxuICAgICAgICAgICAgICAgIHBvcnRmb2xpb01hc29ucnk6IFwiLnBvcnRmb2xpby1lbnRyaWVzLm1hc29ucnktZ3JpZCAucG9ydGZvbGlvLXdyYXBcIixcbiAgICAgICAgICAgICAgICBwb3J0Zm9saW9HcmlkOiBcIi5wb3J0Zm9saW8tZW50cmllcy5pc290b3BlLWdyaWQgLnBvcnRmb2xpby13cmFwXCIsXG4gICAgICAgICAgICAgICAgbGlua0ljb246IFwiLnBvcnRmb2xpby13cmFwIC5vcC1saW5rXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogb2NlYW53cExvY2FsaXplLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gdGhpcy5nZXRTZXR0aW5ncyhcInNlbGVjdG9yc1wiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9ydGZvbGlvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5wb3J0Zm9saW8pLFxuICAgICAgICAgICAgcG9ydGZvbGlvTWFzb25yeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMucG9ydGZvbGlvTWFzb25yeSksXG4gICAgICAgICAgICBwb3J0Zm9saW9HcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5wb3J0Zm9saW9HcmlkKSxcbiAgICAgICAgICAgIGxpbmtJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5saW5rSWNvbiksXG4gICAgICAgICAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG5cbiAgICAgICAgdGhpcy5pbml0TWFzb25yeSgpO1xuICAgICAgICB0aGlzLmluaXRHcmlkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHMucG9ydGZvbGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdExpZ2h0Ym94R2FsbGVyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5saW5rSWNvbj8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdE1hc29ucnkoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNldHRpbmdzKFwib3B0aW9uc1wiKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnRzLnBvcnRmb2xpb01hc29ucnk/LmZvckVhY2goKHBvcnRmb2xpbykgPT4ge1xuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKHBvcnRmb2xpbywgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3IElzb3RvcGUocG9ydGZvbGlvLCB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogXCIucG9ydGZvbGlvLWVudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpc09yaWdpbkxlZnQ6IG9wdGlvbnMuaXNSVEwgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogXCIwLjRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dE1vZGU6IFwibWFzb25yeVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRHcmlkKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZXR0aW5ncyhcIm9wdGlvbnNcIik7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50cy5wb3J0Zm9saW9HcmlkPy5mb3JFYWNoKChwb3J0Zm9saW8pID0+IHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChwb3J0Zm9saW8sIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheW91dE1vZGUgPSBwb3J0Zm9saW8uZGF0YXNldC5sYXlvdXQgPyBwb3J0Zm9saW8uZGF0YXNldC5sYXlvdXQgOiBcIm1hc29ucnlcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3J0Zm9saW9GaWx0ZXIgPSBwb3J0Zm9saW8ucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcnRmb2xpb0dyaWRJc290b3BlID0gbmV3IElzb3RvcGUocG9ydGZvbGlvLCB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogXCIucG9ydGZvbGlvLWVudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpc09yaWdpbkxlZnQ6IG9wdGlvbnMuaXNSVEwgPyBmYWxzZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogXCIwLjRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dE1vZGU6IGxheW91dE1vZGUsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISFwb3J0Zm9saW9GaWx0ZXIgJiYgcG9ydGZvbGlvRmlsdGVyLmNsYXNzTGlzdC5jb250YWlucyhcInBvcnRmb2xpby1maWx0ZXJzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnRmb2xpb0ZpbHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKT8uZm9yRWFjaCgocG9ydGZvbGlvRmlsdGVyTGluaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9ydGZvbGlvRmlsdGVyTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRmb2xpb0dyaWRJc290b3BlLmFycmFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHBvcnRmb2xpb0ZpbHRlckxpbmsuZGF0YXNldC5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0Zm9saW9GaWx0ZXIucXVlcnlTZWxlY3RvckFsbChcImxpXCIpLmZvckVhY2goKGxpc3RUYWcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFRhZy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydGZvbGlvRmlsdGVyTGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRMaWdodGJveEdhbGxlcnkoKSB7XG4gICAgICAgIHRoaXMuYWRkUGhvdG9Td2lwZVRvRE9NKCk7XG5cbiAgICAgICAgY29uc3QgcHN3cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzd3BcIik7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNldHRpbmdzKFwib3B0aW9uc1wiKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnRzLnBvcnRmb2xpbz8uZm9yRWFjaCgocG9ydGZvbGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKHBvcnRmb2xpby5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcnRmb2xpby1saWdodGJveFwiKSkucmVkdWNlKChhY2MsIGxpZ2h0Ym94KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTaXplID0gbGlnaHRib3guZGF0YXNldC5zaXplLnNwbGl0KFwieFwiKTtcblxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBsaWdodGJveC5ocmVmLFxuICAgICAgICAgICAgICAgICAgICB3OiBpbWFnZVNpemVbMF0sXG4gICAgICAgICAgICAgICAgICAgIGg6IGltYWdlU2l6ZVsxXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgICAgIHBvcnRmb2xpby5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcnRmb2xpby1saWdodGJveFwiKT8uZm9yRWFjaCgobGlnaHRib3gpID0+IHtcbiAgICAgICAgICAgICAgICBsaWdodGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsaWdodGJveC5uZXh0RWxlbWVudFNpYmxpbmc/LnF1ZXJ5U2VsZWN0b3IoXCIub3AtbGlua1wiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxpZ2h0Ym94LmNsb3Nlc3QoXCJmaWd1cmVcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlndXJlID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaWdodGJveEdhbGxlcnkgPSBuZXcgUGhvdG9Td2lwZShwc3dwRWxlbWVudCwgUGhvdG9Td2lwZVVJX0RlZmF1bHQsIGltYWdlcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0SW1hZ2VJbmRleChmaWd1cmUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmdPcGFjaXR5OiAwLjcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93SGlkZU9wYWNpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZhY2Vib29rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb25zLnNoYXJlRmFjZWJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT17e3VybH19XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInR3aXR0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbnMuc2hhcmVUd2l0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD17e3RleHR9fSZ1cmw9e3t1cmx9fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwaW50ZXJlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbnMuc2hhcmVQaW50ZXJlc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy5waW50ZXJlc3QuY29tL3Bpbi9jcmVhdGUvYnV0dG9uL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiP3VybD17e3VybH19Jm1lZGlhPXt7aW1hZ2VfdXJsfX0mZGVzY3JpcHRpb249e3t0ZXh0fX1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG93bmxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbnMucHN3cERvd25sb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwie3tyYXdfaW1hZ2VfdXJsfX1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxpZ2h0Ym94R2FsbGVyeS5pbml0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkUGhvdG9Td2lwZVRvRE9NKCkge1xuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBzd3BcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudHMuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgICAgICAgYDwhLS0gUm9vdCBlbGVtZW50IG9mIFBob3RvU3dpcGUuIE11c3QgaGF2ZSBjbGFzcyBwc3dwLiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8IS0tIEJhY2tncm91bmQgb2YgUGhvdG9Td2lwZS4gXG4gICAgICAgICAgICAgICAgICAgIEl0J3MgYSBzZXBhcmF0ZSBlbGVtZW50IGFzIGFuaW1hdGluZyBvcGFjaXR5IGlzIGZhc3RlciB0aGFuIHJnYmEoKS4gLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2JnXCI+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIFNsaWRlcyB3cmFwcGVyIHdpdGggb3ZlcmZsb3c6aGlkZGVuLiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fc2Nyb2xsLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250YWluZXIgdGhhdCBob2xkcyBzbGlkZXMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9Td2lwZSBrZWVwcyBvbmx5IDMgb2YgdGhlbSBpbiB0aGUgRE9NIHRvIHNhdmUgbWVtb3J5LlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uJ3QgbW9kaWZ5IHRoZXNlIDMgcHN3cF9faXRlbSBlbGVtZW50cywgZGF0YSBpcyBhZGRlZCBsYXRlciBvbi4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19pdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9faXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2l0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEZWZhdWx0IChQaG90b1N3aXBlVUlfRGVmYXVsdCkgaW50ZXJmYWNlIG9uIHRvcCBvZiBzbGlkaW5nIGFyZWEuIENhbiBiZSBjaGFuZ2VkLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3VpIHBzd3BfX3VpLS1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX190b3AtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgQ29udHJvbHMgYXJlIHNlbGYtZXhwbGFuYXRvcnkuIE9yZGVyIGNhbiBiZSBjaGFuZ2VkLiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY291bnRlclwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJDbG9zZSAoRXNjKVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1zaGFyZVwiIHRpdGxlPVwiU2hhcmVcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHN3cF9fYnV0dG9uIHBzd3BfX2J1dHRvbi0tZnNcIiB0aXRsZT1cIlRvZ2dsZSBmdWxsc2NyZWVuXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLXpvb21cIiB0aXRsZT1cIlpvb20gaW4vb3V0XCI+PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFByZWxvYWRlciBkZW1vIGh0dHBzOi8vY29kZXBlbi5pby9kaW1zZW1lbm92L3Blbi95eUJXb1IgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBlbGVtZW50IHdpbGwgZ2V0IGNsYXNzIHBzd3BfX3ByZWxvYWRlci0tYWN0aXZlIHdoZW4gcHJlbG9hZGVyIGlzIHJ1bm5pbmcgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19pY25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3ByZWxvYWRlcl9fY3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fcHJlbG9hZGVyX19kb251dFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX3NoYXJlLW1vZGFsIHBzd3BfX3NoYXJlLW1vZGFsLS1oaWRkZW4gcHN3cF9fc2luZ2xlLXRhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwc3dwX19zaGFyZS10b29sdGlwXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwc3dwX19idXR0b24gcHN3cF9fYnV0dG9uLS1hcnJvdy0tbGVmdFwiIHRpdGxlPVwiUHJldmlvdXMgKGFycm93IGxlZnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBzd3BfX2J1dHRvbiBwc3dwX19idXR0b24tLWFycm93LS1yaWdodFwiIHRpdGxlPVwiTmV4dCAoYXJyb3cgcmlnaHQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBzd3BfX2NhcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHN3cF9fY2FwdGlvbl9fY2VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VJbmRleChmaWd1cmUpIHtcbiAgICAgICAgY29uc3QgZmlndXJlcyA9IGZpZ3VyZS5wYXJlbnROb2RlLmNoaWxkcmVuO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWd1cmVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGZpZ3VyZXNbaW5kZXhdID09IGZpZ3VyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuKFwidXNlIHN0cmljdFwiKTtcbm5ldyBPV19Qb3J0Zm9saW8oKTtcbiJdfQ==
