!function(){"use strict";var t;t=()=>{const t=document.querySelectorAll("lottie-player.wp-block-themeisle-blocks-lottie"),e=document.querySelectorAll("dotlottie-player.wp-block-themeisle-blocks-lottie"),o=t=>{"false"===t.dataset.loop&&t.setLooping(!1),-1===t.__direction&&t.seek("100%"),Boolean(t.__count)&&(t.__count=t.__count-1),-1===t.__direction&&"true"===t.dataset.loop&&(t.setLooping(!0),Boolean(t.__count)&&t.addEventListener("frame",(e=>{e.target.getLottie().playCount===t.__count&&e.target.getLottie().currentFrame&&t.stop()})))},i=t=>{const e=t.getAttribute("trigger");return"scroll"===e?window.LottieInteractivity.create({mode:"scroll",player:t.getLottie(),container:t,actions:[{visibility:[0,1],type:"seek",frames:[0,t.getLottie().totalFrames]}]}):"hover"===e?(t.addEventListener("mouseover",(()=>{t.play()})),t.addEventListener("mouseout",(()=>{t.stop()})),o(t),-1===t.__direction?t.pause():t.stop()):"click"===e?(t.addEventListener("click",(()=>{t.play()})),t.addEventListener("complete",(()=>t.stop())),o(t),-1===t.__direction?t.pause():t.stop()):o(t)},n=t=>{if(t.getAttribute("width")){t.style.height="auto";const e=t.getAttribute("width");"%"===e.toString().slice(-1)?t.style.maxWidth=e:t.style.width="px"!==e.toString().slice(-2)?`${e}px`:e}};t.forEach((t=>{t.addEventListener("load",(t=>{const e=t.target;i(e)})),n(t)})),e.forEach((t=>{const e=setInterval((()=>{var o;t.load&&(null===(o=t.load(t.dataset.src))||void 0===o||o.then((()=>{i(t)})),n(t),clearInterval(e))}),0)}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",t):t())}();