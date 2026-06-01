import{aH as w,az as f,aI as _,N as q,x as y,aJ as g,aK as x,aL as z,aM as E}from"./modules/unplugin-icons-BGjEH5hM.js";import{o as L,b as R,w as B,j as o,g as s,d as t,E as r,v as T,x as j,A as l}from"./modules/vue-hRFCVXKJ.js";import{I as C}from"./default-BM38gia5.js";import{_ as I,u as M,f as V}from"./index-5LMU2BO-.js";import"./modules/shiki-BCPDLLIJ.js";const A={class:"s-cqrs-meta"},S={class:"s-cqrs"},h={class:"s-cqrs-client"},W={class:"s-cqrs-node node-command"},P={class:"s-cqrs-node node-store"},G={class:"s-cqrs-node node-bus"},H={class:"s-cqrs-node node-query"},N={class:"s-cqrs-node node-readmodel"},Y={class:"s-cqrs-node node-projector"},O={__name:"10-complex-schemas.md__slidev_92",setup(F){const{$clicksContext:a,$frontmatter:i}=M();return a.setup(),(K,e)=>{const d=w,n=f,p=_,c=q,u=y,m=g,v=x,b=z,k=E;return L(),R(C,T(j(l(V)(l(i),91))),{default:B(()=>[o(`
Geometry (L25 full-bleed native 1920×1080, single source of truth):
  NOTE 2026-06-01: .s-cqrs container top shifted 276→316 (+40px) to clear the
  write-zone label off the meta legend. All "slide" absolute Y values below were
  authored for top:276 — add +40 to convert to current absolute Y. The container-
  RELATIVE conversions (cy_c = cy_s - 276) and all node/wire/packet coords are
  unchanged and remain correct (they were re-anchored to the new container top).
  canvas          1920 × 1080
  title           top 132, left 96, 44px Space Grotesk 700 (bottom ~180)
  meta subtitle   top 200, left 96, 22px Mono (bottom ~226)
  client          left 96,  top 464, 160×160 round (slide center 176, 544)
                  → VERTICALLY CENTERED between zones: midpoint((write_bottom 476, read_top 612)) = 544
  write zone      left 320, top 276, 1504×200, border amber
    command       left 396, top 336, 200×120 (slide center 496, 396)
    event store   left 820, top 336, 200×120 (slide center 920, 396)  — VIOLET (persistent log)
    event bus     left 1244,top 336, 200×120 (slide center 1344, 396)
  read zone       left 320, top 612, 1504×200, border teal
    query         left 396, top 672, 200×120 (slide center 496, 732)  — LEFT (near client)
    read model    left 820, top 672, 200×120 (slide center 920, 732)
    projector     left 1244,top 672, 200×120 (slide center 1344, 732) — RIGHT (under event bus)
  KPI footer      bottom 44, 4 cells

  Read lane is REVERSED: projector on right (directly under event bus → clean
  vertical violet sync), then read model middle, then query on left (next to
  client → clean horizontal return path).

  Container .s-cqrs = slide(276, 96) → (896, 1632), 1728×620. Convert slide
  coords to container: cx_c = cx_s - 96; cy_c = cy_s - 276.
    client       → ( 80, 264)
    command      → (400, 120)
    event store  → (824, 120)
    event bus    → (1248, 120)
    query        → (400, 456)
    read model   → (824, 456)
    projector    → (1248, 456)

  Wire endpoints (container coords, trim 12px from node edges).
  Client center (80, 268) radius 80 — use 30° above/below horizontal for
  diagonal emission so w1/w7 are symmetric mirrors:
    w1  client→command       (149, 228) → (300, 120)  [amber, upper-right of client]
    w2  command→store        (500, 120) → (724, 120)  [amber]
    w3  store→bus            (924, 120) → (1148, 120) [violet log stream, bolder stroke]
    w4  bus↓projector        (1248, 180) → (1248, 396)[violet vertical sync, bold]
    w5  projector→read model (1148, 456) → (924, 456) [teal, right→left]
    w6  read model→query     (724, 456) → (500, 456)  [teal, right→left]
    w7  query→client         (300, 456) → (149, 308)  [teal return, lower-right of client]
`),e[34]||(e[34]=s("h1",null,"CQRS · write and read separation",-1)),s("div",A,[t(d,{style:{"font-size":"22px"}}),e[0]||(e[0]=s("span",null,"event sourcing",-1)),e[1]||(e[1]=s("span",{class:"sep"},"·",-1)),t(n,{class:"dot-amber"}),e[2]||(e[2]=r()),e[3]||(e[3]=s("span",null,"write",-1)),t(n,{class:"dot-violet"}),e[4]||(e[4]=r()),e[5]||(e[5]=s("span",null,"event log",-1)),t(n,{class:"dot-teal"}),e[6]||(e[6]=r()),e[7]||(e[7]=s("span",null,"read",-1)),e[8]||(e[8]=s("span",{class:"sep"},"·",-1)),e[9]||(e[9]=s("span",null,"bus decouples sides",-1))]),s("div",S,[o(` Wires: SVG coords 1:1 with container 1728×620 (top:276→bottom 896; zones 276..476, 612..812).
       viewBox matches container to avoid preserveAspectRatio stretch (gotcha #46). `),e[24]||(e[24]=s("svg",{class:"s-cqrs-wires",viewBox:"0 0 1728 620",preserveAspectRatio:"none"},[s("defs",null,[s("marker",{id:"cqrs-arrow-amber",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"8",markerHeight:"8",orient:"auto"},[s("path",{d:"M 0 1 L 10 5 L 0 9 z",fill:"#F59E0B","fill-opacity":"0.95"})]),s("marker",{id:"cqrs-arrow-violet",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"8",markerHeight:"8",orient:"auto"},[s("path",{d:"M 0 1 L 10 5 L 0 9 z",fill:"#a78bfa","fill-opacity":"0.95"})]),s("marker",{id:"cqrs-arrow-teal",viewBox:"0 0 10 10",refX:"8",refY:"5",markerWidth:"8",markerHeight:"8",orient:"auto"},[s("path",{d:"M 0 1 L 10 5 L 0 9 z",fill:"#14B8A6","fill-opacity":"0.95"})])]),s("g",{"stroke-width":"2.5",fill:"none","stroke-dasharray":"6 4"},[o(" Write path (amber) — w1 emits from UPPER-RIGHT of client (30° above horizontal) "),s("path",{d:"M 149 228 L 300 120",stroke:"#F59E0B","stroke-opacity":"0.75",class:"wire w1","marker-end":"url(#cqrs-arrow-amber)"}),s("path",{d:"M 500 120 L 724 120",stroke:"#F59E0B","stroke-opacity":"0.75",class:"wire w2","marker-end":"url(#cqrs-arrow-amber)"}),o(" Store → bus log stream (violet) — bolder opacity so third wire reads clearly "),s("path",{d:"M 924 120 L 1148 120",stroke:"#a78bfa","stroke-opacity":"0.95","stroke-width":"3",class:"wire w3","marker-end":"url(#cqrs-arrow-violet)"}),o(" Bus → projector sync (violet, vertical, decoupling boundary) "),s("path",{d:"M 1248 180 L 1248 396",stroke:"#a78bfa","stroke-opacity":"0.95","stroke-width":"3",class:"wire w4","marker-end":"url(#cqrs-arrow-violet)"}),o(" Read path (teal) — reversed lane: projector (right, under bus) → read model → query (left) "),s("path",{d:"M 1148 456 L 924 456",stroke:"#14B8A6","stroke-opacity":"0.75",class:"wire w5","marker-end":"url(#cqrs-arrow-teal)"}),s("path",{d:"M 724 456 L 500 456",stroke:"#14B8A6","stroke-opacity":"0.75",class:"wire w6","marker-end":"url(#cqrs-arrow-teal)"}),o(" Query → client return (teal) — mirrors w1 into LOWER-RIGHT of client "),s("path",{d:"M 300 456 L 149 308",stroke:"#14B8A6","stroke-opacity":"0.75",class:"wire w7","marker-end":"url(#cqrs-arrow-teal)"})])],-1)),o(" Write zone (amber border, persistent command-side) "),e[25]||(e[25]=s("div",{class:"s-cqrs-zone s-cqrs-zone-write"},[s("div",{class:"s-cqrs-zone-label"},"write side · command")],-1)),o(" Read zone (teal border, projection + query side) "),e[26]||(e[26]=s("div",{class:"s-cqrs-zone s-cqrs-zone-read"},[s("div",{class:"s-cqrs-zone-label"},"read side · query")],-1)),o(" Client (bridges both zones) "),s("div",h,[t(p,{class:"client-icon"}),e[10]||(e[10]=s("span",{class:"client-label"},"client",-1)),e[11]||(e[11]=s("span",{class:"client-sub"},"SPA · REST",-1))]),o(" Write nodes (amber command + amber bus + VIOLET event store) "),s("div",W,[t(c,{class:"node-icon icon-amber"}),e[12]||(e[12]=s("span",{class:"node-label"},"command",-1)),e[13]||(e[13]=s("span",{class:"node-sub"},"POST /order",-1))]),s("div",P,[t(u,{class:"node-icon icon-violet"}),e[14]||(e[14]=s("span",{class:"node-label"},"event store",-1)),e[15]||(e[15]=s("span",{class:"node-sub"},"append-only log",-1))]),s("div",G,[t(m,{class:"node-icon icon-amber"}),e[16]||(e[16]=s("span",{class:"node-label"},"event bus",-1)),e[17]||(e[17]=s("span",{class:"node-sub"},"Kafka · Kinesis",-1))]),o(" Read nodes (all teal) — REVERSED lane: projector right (under bus), query left (near client) "),s("div",H,[t(v,{class:"node-icon icon-teal"}),e[18]||(e[18]=s("span",{class:"node-label"},"query",-1)),e[19]||(e[19]=s("span",{class:"node-sub"},"GET /order/:id",-1))]),s("div",N,[t(b,{class:"node-icon icon-teal"}),e[20]||(e[20]=s("span",{class:"node-label"},"read model",-1)),e[21]||(e[21]=s("span",{class:"node-sub"},"denormalized",-1))]),s("div",Y,[t(k,{class:"node-icon icon-teal"}),e[22]||(e[22]=s("span",{class:"node-label"},"projector",-1)),e[23]||(e[23]=s("span",{class:"node-sub"},"handler",-1))]),o(" R15 packets — amber outbound write path (client → command → store → bus) "),e[27]||(e[27]=s("div",{class:"s-cqrs-pkt pkt-amber p-w1"},null,-1)),e[28]||(e[28]=s("div",{class:"s-cqrs-pkt pkt-amber p-w2"},null,-1)),e[29]||(e[29]=s("div",{class:"s-cqrs-pkt pkt-violet p-w3"},null,-1)),o(" Violet sync packet (bus → projector, persistent log decouples) "),e[30]||(e[30]=s("div",{class:"s-cqrs-pkt pkt-violet p-sync"},null,-1)),o(" Teal read path (projector → read model → query → client return) "),e[31]||(e[31]=s("div",{class:"s-cqrs-pkt pkt-teal p-r1"},null,-1)),e[32]||(e[32]=s("div",{class:"s-cqrs-pkt pkt-teal p-r2"},null,-1)),e[33]||(e[33]=s("div",{class:"s-cqrs-pkt pkt-teal p-return"},null,-1))]),e[35]||(e[35]=s("div",{class:"s-cqrs-kpi"},[s("div",{class:"kpi-cell"},[s("div",{class:"kpi-v"},"12k events/s"),s("div",{class:"kpi-l"},"write throughput")]),s("div",{class:"kpi-cell"},[s("div",{class:"kpi-v s-cqrs-kpi-hot"},"p99 · 28 ms"),s("div",{class:"kpi-l"},"query latency")]),s("div",{class:"kpi-cell"},[s("div",{class:"kpi-v"},"42 ms"),s("div",{class:"kpi-l"},"projector lag")]),s("div",{class:"kpi-cell"},[s("div",{class:"kpi-v"},"4.2 B"),s("div",{class:"kpi-l"},"events in log")])],-1))]),_:1},16)}}},U=I(O,[["__scopeId","data-v-86d6337e"]]);export{U as default};
