(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _settings = /*#__PURE__*/new WeakMap();

var OW_Base = /*#__PURE__*/function () {
  function OW_Base() {
    _classCallCheck(this, OW_Base);

    _classPrivateFieldInitSpec(this, _settings, {
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideUp = exports.slideToggle = exports.slideDown = exports.fadeToggle = exports.fadeOut = exports.fadeIn = void 0;

var slideDown = function slideDown(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var display = window.getComputedStyle(element).display;

  if (display === "none") {
    display = "block";
  }

  element.style.transitionProperty = "height";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.opacity = 0;
  element.style.display = display;
  var height = element.offsetHeight;
  element.style.height = 0;
  element.style.opacity = 1;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = "".concat(height, "px");
  }, 5);
  window.setTimeout(function () {
    element.style.removeProperty("height");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
    element.style.removeProperty("opacity");
  }, duration + 50);
};

exports.slideDown = slideDown;

var slideUp = function slideUp(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  element.style.boxSizing = "border-box";
  element.style.transitionProperty = "height, margin";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.height = "".concat(element.offsetHeight, "px");
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = 0;
  }, 5);
  window.setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("height");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
  }, duration + 50);
};

exports.slideUp = slideUp;

var slideToggle = function slideToggle(element, duration) {
  window.getComputedStyle(element).display === "none" ? slideDown(element, duration) : slideUp(element, duration);
};

exports.slideToggle = slideToggle;

var fadeIn = function fadeIn(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = {
    duration: 300,
    display: null,
    opacity: 1,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 0;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeIn = fadeIn;

var fadeOut = function fadeOut(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = {
    duration: 300,
    display: null,
    opacity: 0,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 1;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeOut = fadeOut;

var fadeToggle = function fadeToggle(element, options) {
  window.getComputedStyle(element).display === "none" ? fadeIn(element, options) : fadeOut(element, options);
};

exports.fadeToggle = fadeToggle;

},{}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _delegate = _interopRequireDefault(require("delegate"));

var _base = _interopRequireDefault(require("./base/base"));

var _utils = require("./lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var OW_PopupLogin = /*#__PURE__*/function (_OW_Base) {
  _inherits(OW_PopupLogin, _OW_Base);

  var _super = _createSuper(OW_PopupLogin);

  function OW_PopupLogin() {
    _classCallCheck(this, OW_PopupLogin);

    return _super.apply(this, arguments);
  }

  _createClass(OW_PopupLogin, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          popupLogin: "#opl-login-form",
          popupLoginInner: "#opl-login-form .opl-login-wrap",
          triggerButtons: ".opl-link, .opl-link-wrap a, .sidr-class-opl-link",
          closeElements: ".opl-close-button, .opl-overlay",
          customTriggerBtn: ".opl-link-wrap a",
          loginWrapper: ".opl-login",
          loginForm: "#opl_login_form",
          loginUserNameInput: "#opl_user_login",
          loginMessage: ".opl-login .opl-errors",
          backToLoginButtons: ".login-link",
          registerWrapper: ".opl-register",
          registerForm: "#opl_registration_form",
          registerUserNameInput: "#opl_register_login",
          registerMessage: ".opl-register .opl-errors",
          backToRegisterBtn: ".register-link",
          resetPassWrapper: ".opl-reset-password",
          resetPassForm: "#opl_reset_password_form",
          resetPassUserNameInput: "#opl_user_or_email",
          resetPassMessage: ".opl-reset-password .opl-errors",
          backToResetPassBtn: ".forgot-pass-link",
          inputs: ".input-lg",
          messages: ".opl-errors"
        },
        options: oceanwpLocalize
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings("selectors");
      return {
        popupLogin: document.querySelector(selectors.popupLogin),
        popupLoginInner: document.querySelector(selectors.popupLoginInner),
        triggerButtons: document.querySelectorAll(selectors.triggerButtons),
        closeElements: document.querySelectorAll(selectors.closeElements),
        customTriggerBtn: document.querySelector(selectors.customTriggerBtn),
        loginWrapper: document.querySelector(selectors.loginWrapper),
        loginForm: document.querySelector(selectors.loginForm),
        loginUserNameInput: document.querySelector(selectors.loginUserNameInput),
        loginMessage: document.querySelector(selectors.loginMessage),
        backToLoginButtons: document.querySelectorAll(selectors.backToLoginButtons),
        registerWrapper: document.querySelector(selectors.registerWrapper),
        registerForm: document.querySelector(selectors.registerForm),
        registerUserNameInput: document.querySelector(selectors.registerUserNameInput),
        registerMessage: document.querySelector(selectors.registerMessage),
        backToRegisterBtn: document.querySelector(selectors.backToRegisterBtn),
        resetPassWrapper: document.querySelector(selectors.resetPassWrapper),
        resetPassUserNameInput: document.querySelector(selectors.resetPassUserNameInput),
        resetPassForm: document.querySelector(selectors.resetPassForm),
        resetPassMessage: document.querySelector(selectors.resetPassMessage),
        backToResetPassBtn: document.querySelector(selectors.backToResetPassBtn),
        inputs: document.querySelectorAll(selectors.inputs),
        messages: document.querySelectorAll(selectors.messages),
        html: document.querySelector("html")
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this$elements$custom;

      _get(_getPrototypeOf(OW_PopupLogin.prototype), "onInit", this).call(this);

      var options = this.getSettings("options");

      if (options.loggedIn) {
        return;
      } // Add login form ID to custom link href.


      var selectors = this.getSettings("selectors");
      (_this$elements$custom = this.elements.customTriggerBtn) === null || _this$elements$custom === void 0 ? void 0 : _this$elements$custom.setAttribute("href", selectors.popupLogin);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this$elements$closeE,
          _this = this,
          _this$elements$backTo,
          _this$elements$backTo2,
          _this$elements$backTo3,
          _this$elements$loginF,
          _this$elements$regist,
          _this$elements$resetP;

      var selectors = this.getSettings("selectors"); // Click on triggers buttons.

      (0, _delegate["default"])(document.body, selectors.triggerButtons, "click", this.openPopup.bind(this));
      (0, _delegate["default"])(document.body, selectors.triggerButtons, "touchend", this.openPopup.bind(this)); // Click on close elements.

      (_this$elements$closeE = this.elements.closeElements) === null || _this$elements$closeE === void 0 ? void 0 : _this$elements$closeE.forEach(function (closeElement) {
        closeElement.addEventListener("click", _this.closePopup.bind(_this));
      }); // Click on back to login button.

      (_this$elements$backTo = this.elements.backToLoginButtons) === null || _this$elements$backTo === void 0 ? void 0 : _this$elements$backTo.forEach(function (backToLoginBtn) {
        backToLoginBtn.addEventListener("click", _this.onBackToLoginBtnClick.bind(_this));
      }); // Click on back to register button.

      (_this$elements$backTo2 = this.elements.backToRegisterBtn) === null || _this$elements$backTo2 === void 0 ? void 0 : _this$elements$backTo2.addEventListener("click", this.onBackToRegisterBtnClick.bind(this)); // Click on back to reset password button.

      (_this$elements$backTo3 = this.elements.backToResetPassBtn) === null || _this$elements$backTo3 === void 0 ? void 0 : _this$elements$backTo3.addEventListener("click", this.onBackToResetPassBtnClick.bind(this)); // Submit login form.

      (_this$elements$loginF = this.elements.loginForm) === null || _this$elements$loginF === void 0 ? void 0 : _this$elements$loginF.addEventListener("submit", this.onLoginFormSubmit.bind(this)); // Submit register form.

      (_this$elements$regist = this.elements.registerForm) === null || _this$elements$regist === void 0 ? void 0 : _this$elements$regist.addEventListener("submit", this.onRegisterFormSubmit.bind(this)); // Submit reset password form.

      (_this$elements$resetP = this.elements.resetPassForm) === null || _this$elements$resetP === void 0 ? void 0 : _this$elements$resetP.addEventListener("submit", this.onResetPassFormSubmit.bind(this));
    }
  }, {
    key: "openPopup",
    value: function openPopup(event) {
      event.preventDefault();
      this.elements.html.style.overflow = "hidden";
      this.elements.popupLogin.classList.add("is-visible");
      (0, _utils.fadeIn)(this.elements.popupLogin);
      this.showLogin();
      this.elements.loginUserNameInput.focus();
      this.elements.messages.forEach(function (errorMessage) {
        errorMessage.style.display = "none";
      });
      this.elements.inputs.forEach(function (input) {
        input.value = "";
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup(event) {
      var _this2 = this;

      event.preventDefault();
      setTimeout(function () {
        _this2.elements.html.style.removeProperty("overflow");
      }, 300);
      this.elements.popupLogin.classList.remove("is-visible");
      (0, _utils.fadeOut)(this.elements.popupLogin);
    }
  }, {
    key: "onBackToLoginBtnClick",
    value: function onBackToLoginBtnClick(event) {
      var _this3 = this;

      event.preventDefault();
      this.showLogin();
      setTimeout(function () {
        _this3.elements.loginUserNameInput.focus();
      }, 100);
    }
  }, {
    key: "onBackToRegisterBtnClick",
    value: function onBackToRegisterBtnClick(event) {
      var _this4 = this;

      event.preventDefault();
      this.showRegister();
      setTimeout(function () {
        _this4.elements.registerUserNameInput.focus();
      }, 100);
    }
  }, {
    key: "onBackToResetPassBtnClick",
    value: function onBackToResetPassBtnClick(event) {
      var _this5 = this;

      event.preventDefault();
      this.showResetPass();
      setTimeout(function () {
        _this5.elements.resetPassUserNameInput.focus();
      }, 100);
    }
  }, {
    key: "onLoginFormSubmit",
    value: function onLoginFormSubmit(event) {
      var _this6 = this;

      event.preventDefault();
      var options = this.getSettings("options");
      var formData = new FormData(this.elements.loginForm);
      var submitBtn = this.elements.loginForm.querySelector("button");
      var loginText = submitBtn.innerHTML;
      var loginLoadingText = submitBtn.dataset.loadingText;
      submitBtn.innerHTML = loginLoadingText;
      axios.post(options.ajaxURL, formData).then(function (_ref) {
        var data = _ref.data;
        _this6.elements.loginMessage.style.display = "block";
        _this6.elements.loginMessage.innerHTML = data.message;

        if (data.error === false) {
          var _this6$elements$login;

          var redirectTo = (_this6$elements$login = _this6.elements.loginForm.querySelector('input[name="redirect_to"]')) === null || _this6$elements$login === void 0 ? void 0 : _this6$elements$login.value;

          _this6.elements.popupLoginInner.classList.add("loading");

          !!redirectTo ? window.location.href = redirectTo : window.location.reload(true);
        }

        submitBtn.innerHTML = loginText;
      });
    }
  }, {
    key: "onRegisterFormSubmit",
    value: function onRegisterFormSubmit(event) {
      var _this7 = this;

      event.preventDefault();
      var options = this.getSettings("options");
      var formData = new FormData(this.elements.registerForm);
      var submitBtn = this.elements.registerForm.querySelector("button");
      var registerText = submitBtn.innerHTML;
      var registerLoadingText = submitBtn.dataset.loadingText;
      submitBtn.innerHTML = registerLoadingText;
      axios.post(options.ajaxURL, formData).then(function (_ref2) {
        var data = _ref2.data;
        _this7.elements.registerMessage.style.display = "block";
        _this7.elements.registerMessage.innerHTML = data.message;

        if (data.error === false) {
          var _this7$elements$regis;

          var redirectTo = (_this7$elements$regis = _this7.elements.registerForm.querySelector('input[name="redirect_to"]')) === null || _this7$elements$regis === void 0 ? void 0 : _this7$elements$regis.value;

          _this7.elements.popupLoginInner.classList.add("loading");

          !!redirectTo ? window.location.href = redirectTo : window.location.reload(true);
        }

        submitBtn.innerHTML = registerText;
      });
    }
  }, {
    key: "onResetPassFormSubmit",
    value: function onResetPassFormSubmit(event) {
      var _this8 = this;

      event.preventDefault();
      var options = this.getSettings("options");
      var formData = new FormData(this.elements.resetPassForm);
      var submitBtn = this.elements.resetPassForm.querySelector("button");
      var resetPassText = submitBtn.innerHTML;
      var resetPassLoadingText = submitBtn.dataset.loadingText;
      submitBtn.innerHTML = resetPassLoadingText;
      axios.post(options.ajaxURL, formData).then(function (_ref3) {
        var data = _ref3.data;
        _this8.elements.resetPassMessage.style.display = "block";
        _this8.elements.resetPassMessage.innerHTML = data.message;
        submitBtn.innerHTML = resetPassText;
      });
    }
  }, {
    key: "showLogin",
    value: function showLogin() {
      var _this$elements$regist2, _this$elements$regist3, _this$elements$resetP2, _this$elements$resetP3;

      this.elements.loginWrapper.classList.remove("opl-hide");
      this.elements.loginWrapper.classList.add("opl-show");
      (_this$elements$regist2 = this.elements.registerWrapper) === null || _this$elements$regist2 === void 0 ? void 0 : _this$elements$regist2.classList.add("opl-hide");
      (_this$elements$regist3 = this.elements.registerWrapper) === null || _this$elements$regist3 === void 0 ? void 0 : _this$elements$regist3.classList.remove("opl-show");
      (_this$elements$resetP2 = this.elements.resetPassWrapper) === null || _this$elements$resetP2 === void 0 ? void 0 : _this$elements$resetP2.classList.add("opl-hide");
      (_this$elements$resetP3 = this.elements.resetPassWrapper) === null || _this$elements$resetP3 === void 0 ? void 0 : _this$elements$resetP3.classList.remove("opl-show");
    }
  }, {
    key: "showRegister",
    value: function showRegister() {
      var _this$elements$loginW, _this$elements$loginW2, _this$elements$resetP4, _this$elements$resetP5;

      this.elements.registerWrapper.classList.remove("opl-hide");
      this.elements.registerWrapper.classList.add("opl-show");
      (_this$elements$loginW = this.elements.loginWrapper) === null || _this$elements$loginW === void 0 ? void 0 : _this$elements$loginW.classList.add("opl-hide");
      (_this$elements$loginW2 = this.elements.loginWrapper) === null || _this$elements$loginW2 === void 0 ? void 0 : _this$elements$loginW2.classList.remove("opl-show");
      (_this$elements$resetP4 = this.elements.resetPassWrapper) === null || _this$elements$resetP4 === void 0 ? void 0 : _this$elements$resetP4.classList.add("opl-hide");
      (_this$elements$resetP5 = this.elements.resetPassWrapper) === null || _this$elements$resetP5 === void 0 ? void 0 : _this$elements$resetP5.classList.remove("opl-show");
    }
  }, {
    key: "showResetPass",
    value: function showResetPass() {
      var _this$elements$loginW3, _this$elements$loginW4, _this$elements$regist4, _this$elements$regist5;

      this.elements.resetPassWrapper.classList.remove("opl-hide");
      this.elements.resetPassWrapper.classList.add("opl-show");
      (_this$elements$loginW3 = this.elements.loginWrapper) === null || _this$elements$loginW3 === void 0 ? void 0 : _this$elements$loginW3.classList.add("opl-hide");
      (_this$elements$loginW4 = this.elements.loginWrapper) === null || _this$elements$loginW4 === void 0 ? void 0 : _this$elements$loginW4.classList.remove("opl-show");
      (_this$elements$regist4 = this.elements.registerWrapper) === null || _this$elements$regist4 === void 0 ? void 0 : _this$elements$regist4.classList.add("opl-hide");
      (_this$elements$regist5 = this.elements.registerWrapper) === null || _this$elements$regist5 === void 0 ? void 0 : _this$elements$regist5.classList.remove("opl-show");
    }
  }]);

  return OW_PopupLogin;
}(_base["default"]);

"use script";
window.addEventListener("DOMContentLoaded", function () {
  new OW_PopupLogin();
});

},{"./base/base":1,"./lib/utils":2,"delegate":5}],4:[function(require,module,exports){
var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;

},{}],5:[function(require,module,exports){
var closest = require('./closest');

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;

},{"./closest":4}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2Jhc2UvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvbGliL3V0aWxzLmpzIiwiYXNzZXRzL3NyYy9qcy9wb3B1cC1sb2dpbi5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvY2xvc2VzdC5qcyIsIm5vZGVfbW9kdWxlcy9kZWxlZ2F0ZS9zcmMvZGVsZWdhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQU0sTztFQUlGLG1CQUFjO0lBQUE7O0lBQUE7TUFBQTtNQUFBO0lBQUE7O0lBQUE7O0lBQ1YsS0FBSyxNQUFMO0lBQ0EsS0FBSyxVQUFMO0VBQ0g7Ozs7V0FFRCw4QkFBcUI7TUFDakIsT0FBTyxFQUFQO0lBQ0g7OztXQUVELDhCQUFxQjtNQUNqQixPQUFPLEVBQVA7SUFDSDs7O1dBRUQsa0JBQVM7TUFDTCx1Q0FBaUIsS0FBSyxrQkFBTCxFQUFqQjs7TUFDQSxLQUFLLFFBQUwsR0FBZ0IsS0FBSyxrQkFBTCxFQUFoQjtJQUNIOzs7V0FFRCxzQkFBYSxDQUFFOzs7V0FFZix1QkFBd0I7TUFBQSxJQUFaLEdBQVksdUVBQU4sSUFBTTs7TUFDcEIsSUFBSSxDQUFDLENBQUMsR0FBTixFQUFXO1FBQ1AsT0FBTyx1Q0FBZSxHQUFmLENBQVA7TUFDSDs7TUFFRCw2QkFBTyxJQUFQO0lBQ0g7OztXQUVELHVCQUEyQjtNQUFBLElBQWYsUUFBZSx1RUFBSixFQUFJOztNQUN2QixJQUFJLENBQUMsUUFBTCxFQUFlO1FBQ1g7TUFDSDs7TUFFRCx1Q0FBaUIsTUFBTSxDQUFDLE1BQVAsdUJBQWMsSUFBZCxjQUE4QixRQUE5QixDQUFqQjtJQUNIOzs7Ozs7ZUFHVSxPOzs7Ozs7Ozs7OztBQ3pDUixJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVksQ0FBQyxPQUFELEVBQTZCO0VBQUEsSUFBbkIsUUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgT1dfQmFzZSB7XHJcbiAgICAjc2V0dGluZ3M7XHJcbiAgICBlbGVtZW50cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdEVsZW1lbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MgPSB0aGlzLmdldERlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmdldERlZmF1bHRFbGVtZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7fVxyXG5cclxuICAgIGdldFNldHRpbmdzKGtleSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoISFrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3NldHRpbmdzW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jc2V0dGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2V0dGluZ3Moc2V0dGluZ3MgPSB7fSkge1xyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuI3NldHRpbmdzLCBzZXR0aW5ncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9XX0Jhc2U7XHJcbiIsImV4cG9ydCBjb25zdCBzbGlkZURvd24gPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheTtcclxuXHJcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHRcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVVwID0gKGVsZW1lbnQsIGR1cmF0aW9uID0gMzAwKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcclxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiID8gc2xpZGVEb3duKGVsZW1lbnQsIGR1cmF0aW9uKSA6IHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZVRvZ2dsZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IGZhZGVJbihlbGVtZW50LCBvcHRpb25zKSA6IGZhZGVPdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbn07XHJcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcclxuaW1wb3J0IE9XX0Jhc2UgZnJvbSBcIi4vYmFzZS9iYXNlXCI7XHJcbmltcG9ydCB7IGZhZGVJbiwgZmFkZU91dCB9IGZyb20gXCIuL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgT1dfUG9wdXBMb2dpbiBleHRlbmRzIE9XX0Jhc2Uge1xyXG4gICAgZ2V0RGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBMb2dpbjogXCIjb3BsLWxvZ2luLWZvcm1cIixcclxuICAgICAgICAgICAgICAgIHBvcHVwTG9naW5Jbm5lcjogXCIjb3BsLWxvZ2luLWZvcm0gLm9wbC1sb2dpbi13cmFwXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbnM6IFwiLm9wbC1saW5rLCAub3BsLWxpbmstd3JhcCBhLCAuc2lkci1jbGFzcy1vcGwtbGlua1wiLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VFbGVtZW50czogXCIub3BsLWNsb3NlLWJ1dHRvbiwgLm9wbC1vdmVybGF5XCIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21UcmlnZ2VyQnRuOiBcIi5vcGwtbGluay13cmFwIGFcIixcclxuXHJcbiAgICAgICAgICAgICAgICBsb2dpbldyYXBwZXI6IFwiLm9wbC1sb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Gb3JtOiBcIiNvcGxfbG9naW5fZm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgbG9naW5Vc2VyTmFtZUlucHV0OiBcIiNvcGxfdXNlcl9sb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgbG9naW5NZXNzYWdlOiBcIi5vcGwtbG9naW4gLm9wbC1lcnJvcnNcIixcclxuICAgICAgICAgICAgICAgIGJhY2tUb0xvZ2luQnV0dG9uczogXCIubG9naW4tbGlua1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyV3JhcHBlcjogXCIub3BsLXJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICByZWdpc3RlckZvcm06IFwiI29wbF9yZWdpc3RyYXRpb25fZm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJVc2VyTmFtZUlucHV0OiBcIiNvcGxfcmVnaXN0ZXJfbG9naW5cIixcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyTWVzc2FnZTogXCIub3BsLXJlZ2lzdGVyIC5vcGwtZXJyb3JzXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrVG9SZWdpc3RlckJ0bjogXCIucmVnaXN0ZXItbGlua1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0UGFzc1dyYXBwZXI6IFwiLm9wbC1yZXNldC1wYXNzd29yZFwiLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRQYXNzRm9ybTogXCIjb3BsX3Jlc2V0X3Bhc3N3b3JkX2Zvcm1cIixcclxuICAgICAgICAgICAgICAgIHJlc2V0UGFzc1VzZXJOYW1lSW5wdXQ6IFwiI29wbF91c2VyX29yX2VtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICByZXNldFBhc3NNZXNzYWdlOiBcIi5vcGwtcmVzZXQtcGFzc3dvcmQgLm9wbC1lcnJvcnNcIixcclxuICAgICAgICAgICAgICAgIGJhY2tUb1Jlc2V0UGFzc0J0bjogXCIuZm9yZ290LXBhc3MtbGlua1wiLFxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0czogXCIuaW5wdXQtbGdcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBcIi5vcGwtZXJyb3JzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IG9jZWFud3BMb2NhbGl6ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlZmF1bHRFbGVtZW50cygpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLmdldFNldHRpbmdzKFwic2VsZWN0b3JzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3B1cExvZ2luOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5wb3B1cExvZ2luKSxcclxuICAgICAgICAgICAgcG9wdXBMb2dpbklubmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5wb3B1cExvZ2luSW5uZXIpLFxyXG5cclxuICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLnRyaWdnZXJCdXR0b25zKSxcclxuICAgICAgICAgICAgY2xvc2VFbGVtZW50czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMuY2xvc2VFbGVtZW50cyksXHJcbiAgICAgICAgICAgIGN1c3RvbVRyaWdnZXJCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmN1c3RvbVRyaWdnZXJCdG4pLFxyXG5cclxuICAgICAgICAgICAgbG9naW5XcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5sb2dpbldyYXBwZXIpLFxyXG4gICAgICAgICAgICBsb2dpbkZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmxvZ2luRm9ybSksXHJcbiAgICAgICAgICAgIGxvZ2luVXNlck5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMubG9naW5Vc2VyTmFtZUlucHV0KSxcclxuICAgICAgICAgICAgbG9naW5NZXNzYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5sb2dpbk1lc3NhZ2UpLFxyXG4gICAgICAgICAgICBiYWNrVG9Mb2dpbkJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzLmJhY2tUb0xvZ2luQnV0dG9ucyksXHJcblxyXG4gICAgICAgICAgICByZWdpc3RlcldyYXBwZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnJlZ2lzdGVyV3JhcHBlciksXHJcbiAgICAgICAgICAgIHJlZ2lzdGVyRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMucmVnaXN0ZXJGb3JtKSxcclxuICAgICAgICAgICAgcmVnaXN0ZXJVc2VyTmFtZUlucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5yZWdpc3RlclVzZXJOYW1lSW5wdXQpLFxyXG4gICAgICAgICAgICByZWdpc3Rlck1lc3NhZ2U6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnJlZ2lzdGVyTWVzc2FnZSksXHJcbiAgICAgICAgICAgIGJhY2tUb1JlZ2lzdGVyQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5iYWNrVG9SZWdpc3RlckJ0biksXHJcblxyXG4gICAgICAgICAgICByZXNldFBhc3NXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5yZXNldFBhc3NXcmFwcGVyKSxcclxuICAgICAgICAgICAgcmVzZXRQYXNzVXNlck5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMucmVzZXRQYXNzVXNlck5hbWVJbnB1dCksXHJcbiAgICAgICAgICAgIHJlc2V0UGFzc0Zvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnJlc2V0UGFzc0Zvcm0pLFxyXG4gICAgICAgICAgICByZXNldFBhc3NNZXNzYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5yZXNldFBhc3NNZXNzYWdlKSxcclxuICAgICAgICAgICAgYmFja1RvUmVzZXRQYXNzQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5iYWNrVG9SZXNldFBhc3NCdG4pLFxyXG5cclxuICAgICAgICAgICAgaW5wdXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycy5pbnB1dHMpLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMubWVzc2FnZXMpLFxyXG5cclxuICAgICAgICAgICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNldHRpbmdzKFwib3B0aW9uc1wiKTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMubG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGxvZ2luIGZvcm0gSUQgdG8gY3VzdG9tIGxpbmsgaHJlZi5cclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLmdldFNldHRpbmdzKFwic2VsZWN0b3JzXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuY3VzdG9tVHJpZ2dlckJ0bj8uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBzZWxlY3RvcnMucG9wdXBMb2dpbik7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLmdldFNldHRpbmdzKFwic2VsZWN0b3JzXCIpO1xyXG5cclxuICAgICAgICAvLyBDbGljayBvbiB0cmlnZ2VycyBidXR0b25zLlxyXG4gICAgICAgIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9ycy50cmlnZ2VyQnV0dG9ucywgXCJjbGlja1wiLCB0aGlzLm9wZW5Qb3B1cC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvcnMudHJpZ2dlckJ1dHRvbnMsIFwidG91Y2hlbmRcIiwgdGhpcy5vcGVuUG9wdXAuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIENsaWNrIG9uIGNsb3NlIGVsZW1lbnRzLlxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuY2xvc2VFbGVtZW50cz8uZm9yRWFjaCgoY2xvc2VFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZVBvcHVwLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDbGljayBvbiBiYWNrIHRvIGxvZ2luIGJ1dHRvbi5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmJhY2tUb0xvZ2luQnV0dG9ucz8uZm9yRWFjaCgoYmFja1RvTG9naW5CdG4pID0+IHtcclxuICAgICAgICAgICAgYmFja1RvTG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25CYWNrVG9Mb2dpbkJ0bkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIENsaWNrIG9uIGJhY2sgdG8gcmVnaXN0ZXIgYnV0dG9uLlxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuYmFja1RvUmVnaXN0ZXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQmFja1RvUmVnaXN0ZXJCdG5DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBDbGljayBvbiBiYWNrIHRvIHJlc2V0IHBhc3N3b3JkIGJ1dHRvbi5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmJhY2tUb1Jlc2V0UGFzc0J0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub25CYWNrVG9SZXNldFBhc3NCdG5DbGljay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gU3VibWl0IGxvZ2luIGZvcm0uXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5sb2dpbkZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5vbkxvZ2luRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBTdWJtaXQgcmVnaXN0ZXIgZm9ybS5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyRm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLm9uUmVnaXN0ZXJGb3JtU3VibWl0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIFN1Ym1pdCByZXNldCBwYXNzd29yZCBmb3JtLlxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucmVzZXRQYXNzRm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLm9uUmVzZXRQYXNzRm9ybVN1Ym1pdC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUG9wdXAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucG9wdXBMb2dpbi5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgZmFkZUluKHRoaXMuZWxlbWVudHMucG9wdXBMb2dpbik7XHJcbiAgICAgICAgdGhpcy5zaG93TG9naW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5sb2dpblVzZXJOYW1lSW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5tZXNzYWdlcy5mb3JFYWNoKChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlUG9wdXAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5odG1sLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5wb3B1cExvZ2luLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy12aXNpYmxlXCIpO1xyXG4gICAgICAgIGZhZGVPdXQodGhpcy5lbGVtZW50cy5wb3B1cExvZ2luKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhY2tUb0xvZ2luQnRuQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dMb2dpbigpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5sb2dpblVzZXJOYW1lSW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFja1RvUmVnaXN0ZXJCdG5DbGljayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1JlZ2lzdGVyKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyVXNlck5hbWVJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrVG9SZXNldFBhc3NCdG5DbGljayhldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Jlc2V0UGFzcygpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5yZXNldFBhc3NVc2VyTmFtZUlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ2luRm9ybVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldFNldHRpbmdzKFwib3B0aW9uc1wiKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmVsZW1lbnRzLmxvZ2luRm9ybSk7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gdGhpcy5lbGVtZW50cy5sb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBsb2dpblRleHQgPSBzdWJtaXRCdG4uaW5uZXJIVE1MO1xyXG4gICAgICAgIGNvbnN0IGxvZ2luTG9hZGluZ1RleHQgPSBzdWJtaXRCdG4uZGF0YXNldC5sb2FkaW5nVGV4dDtcclxuXHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IGxvZ2luTG9hZGluZ1RleHQ7XHJcblxyXG4gICAgICAgIGF4aW9zLnBvc3Qob3B0aW9ucy5hamF4VVJMLCBmb3JtRGF0YSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5sb2dpbk1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5sb2dpbk1lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5tZXNzYWdlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdFRvID0gdGhpcy5lbGVtZW50cy5sb2dpbkZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInJlZGlyZWN0X3RvXCJdJyk/LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucG9wdXBMb2dpbklubmVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgISFyZWRpcmVjdFRvID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3RUbykgOiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gbG9naW5UZXh0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVnaXN0ZXJGb3JtU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZWxlbWVudHMucmVnaXN0ZXJGb3JtKTtcclxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyRm9ybS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyVGV4dCA9IHN1Ym1pdEJ0bi5pbm5lckhUTUw7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJMb2FkaW5nVGV4dCA9IHN1Ym1pdEJ0bi5kYXRhc2V0LmxvYWRpbmdUZXh0O1xyXG5cclxuICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gcmVnaXN0ZXJMb2FkaW5nVGV4dDtcclxuXHJcbiAgICAgICAgYXhpb3MucG9zdChvcHRpb25zLmFqYXhVUkwsIGZvcm1EYXRhKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyTWVzc2FnZS5pbm5lckhUTUwgPSBkYXRhLm1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvciA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0VG8gPSB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicmVkaXJlY3RfdG9cIl0nKT8udmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5wb3B1cExvZ2luSW5uZXIuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAhIXJlZGlyZWN0VG8gPyAod2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdFRvKSA6IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5pbm5lckhUTUwgPSByZWdpc3RlclRleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNldFBhc3NGb3JtU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2V0dGluZ3MoXCJvcHRpb25zXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZWxlbWVudHMucmVzZXRQYXNzRm9ybSk7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gdGhpcy5lbGVtZW50cy5yZXNldFBhc3NGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgcmVzZXRQYXNzVGV4dCA9IHN1Ym1pdEJ0bi5pbm5lckhUTUw7XHJcbiAgICAgICAgY29uc3QgcmVzZXRQYXNzTG9hZGluZ1RleHQgPSBzdWJtaXRCdG4uZGF0YXNldC5sb2FkaW5nVGV4dDtcclxuXHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IHJlc2V0UGFzc0xvYWRpbmdUZXh0O1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KG9wdGlvbnMuYWpheFVSTCwgZm9ybURhdGEpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucmVzZXRQYXNzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnJlc2V0UGFzc01lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5tZXNzYWdlO1xyXG5cclxuICAgICAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9IHJlc2V0UGFzc1RleHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0xvZ2luKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMubG9naW5XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGwtaGlkZVwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmxvZ2luV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwib3BsLXNob3dcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucmVnaXN0ZXJXcmFwcGVyPy5jbGFzc0xpc3QuYWRkKFwib3BsLWhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5yZWdpc3RlcldyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGwtc2hvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5yZXNldFBhc3NXcmFwcGVyPy5jbGFzc0xpc3QuYWRkKFwib3BsLWhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5yZXNldFBhc3NXcmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BsLXNob3dcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1JlZ2lzdGVyKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucmVnaXN0ZXJXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGwtaGlkZVwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwib3BsLXNob3dcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMubG9naW5XcmFwcGVyPy5jbGFzc0xpc3QuYWRkKFwib3BsLWhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5sb2dpbldyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGwtc2hvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5yZXNldFBhc3NXcmFwcGVyPy5jbGFzc0xpc3QuYWRkKFwib3BsLWhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5yZXNldFBhc3NXcmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKFwib3BsLXNob3dcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Jlc2V0UGFzcygpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnJlc2V0UGFzc1dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wbC1oaWRlXCIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMucmVzZXRQYXNzV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwib3BsLXNob3dcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMubG9naW5XcmFwcGVyPy5jbGFzc0xpc3QuYWRkKFwib3BsLWhpZGVcIik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5sb2dpbldyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGwtc2hvd1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5yZWdpc3RlcldyYXBwZXI/LmNsYXNzTGlzdC5hZGQoXCJvcGwtaGlkZVwiKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnJlZ2lzdGVyV3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZShcIm9wbC1zaG93XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4oXCJ1c2Ugc2NyaXB0XCIpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgbmV3IE9XX1BvcHVwTG9naW4oKTtcclxufSk7XHJcbiIsInZhciBET0NVTUVOVF9OT0RFX1RZUEUgPSA5O1xuXG4vKipcbiAqIEEgcG9seWZpbGwgZm9yIEVsZW1lbnQubWF0Y2hlcygpXG4gKi9cbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICB2YXIgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZTtcblxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IHBhcmVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3QgKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5tYXRjaGVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICBlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcbiIsInZhciBjbG9zZXN0ID0gcmVxdWlyZSgnLi9jbG9zZXN0Jyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcbiJdfQ==
