!function(){"use strict";const e={none:void 0,"o-count-slower":3,"o-count-slow":2,"o-count-fast":1.5,"o-count-fastest":1},t=new Set(Array.from("0123456789,.")),n=new Set(Array.from(","));var o;o=()=>{const o={root:null,rootMargin:"0px",threshold:[.6]},r=new Set("0123456789");setTimeout((()=>{document.querySelectorAll("o-anim-count").forEach((s=>{if(Array.from(s.innerHTML).some((e=>r.has(e)))){const r=new IntersectionObserver((o=>{o.forEach((o=>{o.isIntersecting&&0<o.intersectionRect.height&&(r.unobserve(s),(o=>{var r,s,l;const i=(null==o?void 0:o.innerHTML)||"",a=(t=>{let n=t.parentElement;for(let t=0;t<3;++t)if(Array.from(n.classList).some((e=>e.includes("o-count-")))){var o,r;const t=Array.from(n.classList),s=t.filter((e=>e.includes("o-count-delay-"))).pop(),l=parseInt((null==s||null===(o=s.split("-"))||void 0===o?void 0:o[3])||"0"),i=null==s?void 0:s.includes("ms"),a=Object.keys(e),u=(null==t||null===(r=t.filter((e=>a.includes(e))))||void 0===r?void 0:r.pop())||"fast";return{speed:e[u],delay:l*(i?0:1e3)}}})(o),{suffix:u,prefix:c,number:d}=(e=>{const n=Array.from(e),o=[],r=[],s=[];let l=!0,i=!1;for(let e of n)t.has(e)?(l&&(l=!1),i?r.push(e):s.push(e)):l?o.push(e):(i||(i=!0),r.push(e));return{prefix:o.join(""),suffix:r.join(""),number:s}})(i),p=[...d].reverse().map(((e,t)=>n.has(e)?{position:t,character:e}:null)).filter((e=>e)),f=(null===(r=d.join(""))||void 0===r||null===(s=r.split("."))||void 0===s||null===(l=s[1])||void 0===l?void 0:l.length)||0,v=parseFloat(d.filter((e=>","!==e)).join("")),h=i.length-u.length,m=e=>{const t=e.split("").reverse();return p.forEach((e=>{e.position<t.length&&t.splice(e.position,0,e.character)})),((c||"")+t.reverse().join("")).padStart(h," ")+u||""},{start:y,steps:L}=((e,t)=>{let n,o=0;const r=Math.ceil(e/.05)+1||1,s=e=>{clearInterval(n),null==e||e()};return{steps:r,start:(e,t)=>{n=setInterval((()=>{o<r?(null==e||e(o),o+=1):s(t)}),50)},stop:s}})((null==a?void 0:a.speed)||2),S=parseFloat((v/L).toFixed(f||2));if(1e-12>S)return;let g=[0];for(let e=1;e<L;++e)g.push(g[e-1]+S);g=g.map((e=>e.toFixed(f))),0<g.length&&(g[L-1]=v.toFixed(f||0),o.innerHTML=m(g[0]),setTimeout((()=>{o.style.whiteSpace="pre",y((e=>{o.innerHTML=m(g[e])}),(()=>{o.style.whiteSpace="",o.innerHTML=i}))}),(null==a?void 0:a.delay)||0))})(s))}))}),o);r.observe(s)}}))}),300)},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",o):o())}();