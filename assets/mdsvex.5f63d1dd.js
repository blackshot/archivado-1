import{S as s,i as a,s as e,N as t,e as o,t as r,a as n,c,b as l,d as i,f as u,g as h,h as p,j as d,k as v,H as f,y as m,z as $,q as y,r as x,v as b,A as g,n as E}from"./index.d60de600.js";function w(s){let a,e,y,x,b,g,E,w,k;const H=s[1].default,P=t(H,s,s[0],null);return{c(){a=o("div"),e=o("h2"),y=r("I'm a mdsvex layout with a green border."),x=n(),b=o("p"),g=r("The blue bordered box below is the slot where i put my content"),E=n(),w=o("div"),P&&P.c(),this.h()},l(s){a=c(s,"DIV",{class:!0});var t=l(a);e=c(t,"H2",{});var o=l(e);y=i(o,"I'm a mdsvex layout with a green border."),o.forEach(u),x=h(t),b=c(t,"P",{});var r=l(b);g=i(r,"The blue bordered box below is the slot where i put my content"),r.forEach(u),E=h(t),w=c(t,"DIV",{class:!0});var n=l(w);P&&P.l(n),n.forEach(u),t.forEach(u),this.h()},h(){p(w,"class","mdsvex-layout-slot svelte-8b5ih8"),p(a,"class","mdsvex-layout svelte-8b5ih8")},m(s,t){d(s,a,t),v(a,e),v(e,y),v(a,x),v(a,b),v(b,g),v(a,E),v(a,w),P&&P.m(w,null),k=!0},p(s,[a]){P&&P.p&&1&a&&f(P,H,s,s[0],a,null,null)},i(s){k||(m(P,s),k=!0)},o(s){$(P,s),k=!1},d(s){s&&u(a),P&&P.d(s)}}}function k(s,a,e){let{$$slots:t={},$$scope:o}=a;return s.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,t]}class H extends s{constructor(s){super(),a(this,s,k,w,e,{})}}function P(s){let a,e,t,f,m,$,y,x,b,g,w,k,H,P,T,j,I,D,A,G,V;return{c(){a=o("h1"),e=r("This is mdsvex"),t=n(),f=o("p"),m=r("Go "),$=o("a"),y=r("check it out"),x=n(),b=o("h1"),g=r("try it out below"),w=n(),k=o("p"),H=r("Edit "),P=o("code"),T=r("src/pages/mdsvex.svx"),j=r(" and watch your browser update instantly every time you save."),I=n(),D=o("p"),A=r("you’ll love it, promise! cool"),G=n(),V=o("pre"),this.h()},l(s){a=c(s,"H1",{});var o=l(a);e=i(o,"This is mdsvex"),o.forEach(u),t=h(s),f=c(s,"P",{});var r=l(f);m=i(r,"Go "),$=c(r,"A",{href:!0,target:!0});var n=l($);y=i(n,"check it out"),n.forEach(u),r.forEach(u),x=h(s),b=c(s,"H1",{});var p=l(b);g=i(p,"try it out below"),p.forEach(u),w=h(s),k=c(s,"P",{});var d=l(k);H=i(d,"Edit "),P=c(d,"CODE",{});var v=l(P);T=i(v,"src/pages/mdsvex.svx"),v.forEach(u),j=i(d," and watch your browser update instantly every time you save."),d.forEach(u),I=h(s),D=c(s,"P",{});var E=l(D);A=i(E,"you’ll love it, promise! cool"),E.forEach(u),G=h(s),V=c(s,"PRE",{class:!0}),l(V).forEach(u),this.h()},h(){p($,"href","https://mdsvex.com"),p($,"target","_blank"),p(V,"class","language-js")},m(s,o){d(s,a,o),v(a,e),d(s,t,o),d(s,f,o),v(f,m),v(f,$),v($,y),d(s,x,o),d(s,b,o),v(b,g),d(s,w,o),d(s,k,o),v(k,H),v(k,P),v(P,T),v(k,j),d(s,I,o),d(s,D,o),v(D,A),d(s,G,o),d(s,V,o),V.innerHTML='<code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span></code>'},p:E,d(s){s&&u(a),s&&u(t),s&&u(f),s&&u(x),s&&u(b),s&&u(w),s&&u(k),s&&u(I),s&&u(D),s&&u(G),s&&u(V)}}}function T(s){let a,e;return a=new H({props:{$$slots:{default:[P]},$$scope:{ctx:s}}}),{c(){y(a.$$.fragment)},l(s){x(a.$$.fragment,s)},m(s,t){b(a,s,t),e=!0},p(s,[e]){const t={};1&e&&(t.$$scope={dirty:e,ctx:s}),a.$set(t)},i(s){e||(m(a.$$.fragment,s),e=!0)},o(s){$(a.$$.fragment,s),e=!1},d(s){g(a,s)}}}export default class extends s{constructor(s){super(),a(this,s,null,T,e,{})}}