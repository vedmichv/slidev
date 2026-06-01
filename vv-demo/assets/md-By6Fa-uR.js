import{_ as c}from"./slidev/VClicks-B9VPRt65.js";import{o as d,b as m,w as i,g as e,d as u,E as n,n as v,A as s,j as f,v as p,x as _}from"./modules/vue-hRFCVXKJ.js";import{I as k}from"./default-BM38gia5.js";import{_ as g,u as h,f as x}from"./index-5LMU2BO-.js";import"./modules/shiki-BCPDLLIJ.js";const b={class:"grid grid-cols-2 gap-16 mt-12 items-center"},y={class:"flex items-center justify-center"},S={__name:"04-slidev-features.md__slidev_35",setup(C){const{$slidev:o,$clicksContext:l,$frontmatter:a}=h();return l.setup(),(w,t)=>{const r=c;return d(),m(k,p(_(s(x)(s(a),34))),{default:i(()=>[t[2]||(t[2]=e("h1",null,"v-motion: enter and click animations",-1)),e("div",b,[e("div",null,[t[1]||(t[1]=e("p",null,[e("strong",null,"Three states:")],-1)),u(r,null,{default:i(()=>[...t[0]||(t[0]=[e("ul",null,[e("li",null,[e("code",null,":initial"),n(" · start off-screen, invisible")]),e("li",null,[e("code",null,":enter"),n(" · slide in, fade to full opacity")]),e("li",null,[e("code",null,":click"),n(" · scale up, then back down")])],-1)])]),_:1})]),e("div",y,[e("div",{class:v(["vv-motion-box",{"vv-motion-hero":s(o).nav.clicks>=4,"vv-motion-rest":s(o).nav.clicks>=5}])}," Animated ",2)])]),f(`
Three v-motion states the box demonstrates:
1. initial — start off-screen right at opacity 0, scaled to 60%
2. enter — CSS @keyframes animates into place over 1200ms (cubic-bezier ease-out)
3. click hero (click 4) — scale 1.5, lift -80px, rotate 8deg over 900ms transition
4. click rest (click 5) — returns to scale 1, y 0, rotate 0

Implementation note: migrated from \`v-motion\` directive to CSS @keyframes + $slidev.nav.clicks bindings. L7B rule: v-motion stalls when registered globally and used in-slide on decks that also include theme components using @keyframes. CSS-driven animation always fires on mount, survives HMR, produces identical visual result.

Why click-4 and click-5: v-clicks on the left consumes clicks 1, 2, 3 — the box motion must START AFTER the bullets finish, otherwise it competes for attention.
Scale 1.5 + rotate 8deg + lift -80px = visible from 10m away; small deltas (1.15 scale, 20px lift) read as nothing on 1920 canvas.
`)]),_:1},16)}}},R=g(S,[["__scopeId","data-v-87f6dc8c"]]);export{R as default};
