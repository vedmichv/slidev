import{aE as k,az as m,aF as f,aG as v}from"./modules/unplugin-icons-BGjEH5hM.js";import{o as w,b as g,w as x,j as e,g as o,d as t,E as l,v as b,x as y,A as i}from"./modules/vue-hRFCVXKJ.js";import{I as S}from"./default-DK8CBICn.js";import{_ as z,u as G,f as B}from"./index-ndxBl781.js";import"./modules/shiki-BCPDLLIJ.js";const C={class:"s-topo-meta"},M={class:"s-topo"},N={class:"s-topo-hub"},T={class:"s-topo-spoke s-topo-pos-1"},W={class:"s-topo-spoke s-topo-pos-2"},I={class:"s-topo-spoke s-topo-pos-3"},V={class:"s-topo-spoke s-topo-pos-4"},E={class:"s-topo-spoke s-topo-pos-5"},P={class:"s-topo-spoke s-topo-pos-6"},A={__name:"10-complex-schemas.md__slidev_91",setup(F){const{$clicksContext:r,$frontmatter:a}=G();return r.setup(),(L,s)=>{const d=k,n=m,u=f,p=v;return w(),g(S,b(y(i(B)(i(a),90))),{default:x(()=>[e(`
Geometry (single source of truth, VERIFIED against actual DOM 2026-04-26):
  canvas            1920 × 1080
  title             top 132, left 96, 44px bold    (bottom ~180)
  meta subtitle     top 200, left 96, 22px mono    (bottom ~226)
  mesh container    top 272, left 96, right 96 → width 1728, height 584
  hub center        container (864, 292) → slide (960, 564)
  hub radius        102 (204px div)
  spoke radius      84  (168px div)
  gap each ring     6 px

  Flat-top hex — 6 spokes on ellipse rx=540 ry=240 (NO spoke at 12/6 o'clock so
  subtitle y≈226 has 46px gap to nearest spoke top at slide y=272):
    spoke-1 upper-right -60° → (1134,  84)  slide (1230, 356)
    spoke-2 right         0° → (1404, 292)  slide (1500, 564)
    spoke-3 lower-right  60° → (1134, 500)  slide (1230, 772)
    spoke-4 lower-left  120° → ( 594, 500)  slide ( 690, 772)
    spoke-5 left        180° → ( 324, 292)  slide ( 420, 564)
    spoke-6 upper-left  240° → ( 594,  84)  slide ( 690, 356)

  Wire trim: hub offset 108 (=102+6), spoke offset 90 (=84+6) along unit vector.
  Diag dx=270 dy=208 dist=340.8 → unit (±0.7922, ±0.6103)
  Horizontal dx=540 dy=0 dist=540 → unit (±1, 0)

    w1 upper-right  ( 949, 226) → (1063, 139)
    w2 right        ( 972, 292) → (1314, 292)
    w3 lower-right  ( 949, 358) → (1063, 445)
    w4 lower-left   ( 779, 358) → ( 665, 445)
    w5 left         ( 756, 292) → ( 414, 292)
    w6 upper-left   ( 779, 226) → ( 665, 139)

  SVG viewBox "0 0 1728 584", 1:1 px mapping.
  KPI footer        bottom 44px, 4 cells
`),s[37]||(s[37]=o("h1",null,"Network topology · hub-and-spoke · 6 regions",-1)),o("div",C,[t(d,{style:{"font-size":"22px"}}),s[0]||(s[0]=o("span",null,"AWS Transit Gateway",-1)),s[1]||(s[1]=o("span",{class:"sep"},"·",-1)),t(n,{class:"dot-amber"}),s[2]||(s[2]=l()),s[3]||(s[3]=o("span",null,"hub 10.0.0.0/16",-1)),t(n,{class:"dot-teal"}),s[4]||(s[4]=l()),s[5]||(s[5]=o("span",null,"6 spokes",-1)),t(n,{class:"dot-violet"}),s[6]||(s[6]=l()),s[7]||(s[7]=o("span",null,"active traffic · 1.4 Gbps",-1))]),o("div",M,[e(` Wires layer. Container 1728×584 → viewBox 0 0 1728 584, 1:1 px mapping.
       Hub (864, 292). Flat-top hex, 6 trimmed endpoints:
         w1 upper-right ( 949, 226) → (1063, 139)   (diag unit 0.7922, -0.6103)
         w2 right       ( 972, 292) → (1314, 292)
         w3 lower-right ( 949, 358) → (1063, 445)
         w4 lower-left  ( 779, 358) → ( 665, 445)
         w5 left        ( 756, 292) → ( 414, 292)
         w6 upper-left  ( 779, 226) → ( 665, 139)
  `),s[28]||(s[28]=o("svg",{class:"s-topo-wires",viewBox:"0 0 1728 584",preserveAspectRatio:"none"},[o("defs",null,[o("marker",{id:"topo-arrow",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"8",markerHeight:"8",orient:"auto"},[o("path",{d:"M 0 1 L 10 5 L 0 9 z",fill:"#14B8A6","fill-opacity":"0.9"})])]),o("g",{stroke:"#14B8A6","stroke-opacity":"0.6","stroke-width":"2.5",fill:"none","stroke-dasharray":"6 4"},[o("line",{x1:"949",y1:"226",x2:"1063",y2:"139",class:"wire w1","marker-end":"url(#topo-arrow)"}),o("line",{x1:"972",y1:"292",x2:"1314",y2:"292",class:"wire w2","marker-end":"url(#topo-arrow)"}),o("line",{x1:"949",y1:"358",x2:"1063",y2:"445",class:"wire w3","marker-end":"url(#topo-arrow)"}),o("line",{x1:"779",y1:"358",x2:"665",y2:"445",class:"wire w4","marker-end":"url(#topo-arrow)"}),o("line",{x1:"756",y1:"292",x2:"414",y2:"292",class:"wire w5","marker-end":"url(#topo-arrow)"}),o("line",{x1:"779",y1:"226",x2:"665",y2:"139",class:"wire w6","marker-end":"url(#topo-arrow)"})])],-1)),e(" Hub (center) — Transit Gateway (no official TGW Iconify logo, use duotone globe + AWS amber tier) "),o("div",N,[t(u,{class:"hub-icon"}),s[8]||(s[8]=o("span",{class:"hub-label"},"Transit Gateway",-1)),s[9]||(s[9]=o("span",{class:"hub-sub"},"10.0.0.0/16 · eu-central-1",-1))]),e(` 6 spokes (literal divs, NO v-for+v-motion — L27).
       Geographic ordering from hub (eu-central-1 / Frankfurt):
         pos-1 upper-right → ap-ne-1   (Tokyo,     NE)
         pos-2 right       → us-east-1 (Virginia,  E)
         pos-3 lower-right → ap-south-1(Mumbai,    SE)
         pos-4 lower-left  → sa-east-1 (São Paulo, SW)
         pos-5 left        → eu-west-1 (Ireland,   W)
         pos-6 upper-left  → eu-north-1(Stockholm, NW) `),o("div",T,[t(p,{style:{"font-size":"44px"}}),s[10]||(s[10]=o("span",{class:"spoke-name"},"ap-ne-1",-1)),s[11]||(s[11]=o("span",{class:"spoke-sub"},"10.6.0.0/16",-1)),s[12]||(s[12]=o("span",{class:"spoke-meta"},"prod · 140 Mbps",-1))]),o("div",W,[t(p,{style:{"font-size":"44px"}}),s[13]||(s[13]=o("span",{class:"spoke-name"},"us-east-1",-1)),s[14]||(s[14]=o("span",{class:"spoke-sub"},"10.2.0.0/16",-1)),s[15]||(s[15]=o("span",{class:"spoke-meta"},"prod · 380 Mbps",-1))]),o("div",I,[t(p,{style:{"font-size":"44px"}}),s[16]||(s[16]=o("span",{class:"spoke-name"},"ap-south-1",-1)),s[17]||(s[17]=o("span",{class:"spoke-sub"},"10.3.0.0/16",-1)),s[18]||(s[18]=o("span",{class:"spoke-meta"},"staging · 180 Mbps",-1))]),o("div",V,[t(p,{style:{"font-size":"44px"}}),s[19]||(s[19]=o("span",{class:"spoke-name"},"sa-east-1",-1)),s[20]||(s[20]=o("span",{class:"spoke-sub"},"10.4.0.0/16",-1)),s[21]||(s[21]=o("span",{class:"spoke-meta"},"dev · 60 Mbps",-1))]),o("div",E,[t(p,{style:{"font-size":"44px"}}),s[22]||(s[22]=o("span",{class:"spoke-name"},"eu-west-1",-1)),s[23]||(s[23]=o("span",{class:"spoke-sub"},"10.1.0.0/16",-1)),s[24]||(s[24]=o("span",{class:"spoke-meta"},"prod · 420 Mbps",-1))]),o("div",P,[t(p,{style:{"font-size":"44px"}}),s[25]||(s[25]=o("span",{class:"spoke-name"},"eu-north-1",-1)),s[26]||(s[26]=o("span",{class:"spoke-sub"},"10.5.0.0/16",-1)),s[27]||(s[27]=o("span",{class:"spoke-meta"},"prod · 220 Mbps",-1))]),e(" Packets — CSS offset-path (L27 keeps packets as CSS, not v-motion) "),s[29]||(s[29]=o("div",{class:"s-topo-pkt p1"},null,-1)),s[30]||(s[30]=o("div",{class:"s-topo-pkt p2"},null,-1)),s[31]||(s[31]=o("div",{class:"s-topo-pkt p3"},null,-1)),s[32]||(s[32]=o("div",{class:"s-topo-pkt p4"},null,-1)),s[33]||(s[33]=o("div",{class:"s-topo-pkt p5"},null,-1)),s[34]||(s[34]=o("div",{class:"s-topo-pkt p6"},null,-1)),e(" Return packets (teal, opposite direction) — production hot paths: right + left "),s[35]||(s[35]=o("div",{class:"s-topo-pkt-back p2"},null,-1)),s[36]||(s[36]=o("div",{class:"s-topo-pkt-back p5"},null,-1))]),s[38]||(s[38]=o("div",{class:"s-topo-kpi"},[o("div",{class:"kpi-cell"},[o("div",{class:"kpi-v"},"1.4 Gbps"),o("div",{class:"kpi-l"},"aggregate throughput")]),o("div",{class:"kpi-cell"},[o("div",{class:"kpi-v"},"6"),o("div",{class:"kpi-l"},"peered VPCs")]),o("div",{class:"kpi-cell"},[o("div",{class:"kpi-v"},"4 prod · 1 staging · 1 dev"),o("div",{class:"kpi-l"},"environments")]),o("div",{class:"kpi-cell"},[o("div",{class:"kpi-v s-topo-kpi-hot"},"p99 · 42 ms"),o("div",{class:"kpi-l"},"cross-region RTT")])],-1))]),_:1},16)}}},$=z(A,[["__scopeId","data-v-02f033a5"]]);export{$ as default};
