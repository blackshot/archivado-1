import{e}from"./writeEffect.2b6e3f1e.js";import{t}from"./onAnimationEnd.ac9f6989.js";import"./typingInterval.419fdb3c.js";const o=async({elements:o},a)=>{if(a.cascade)o.forEach((e=>e.currentNode.textContent=""));else{const{getLongestTextElement:e}=await import("./index.3f403a93.js"),n=e(o);t(n,(()=>a.dispatch("done")))}for(const t of o)a.cascade?await e(t,a):e(t,a);a.cascade&&a.dispatch("done")};export{o as mode};