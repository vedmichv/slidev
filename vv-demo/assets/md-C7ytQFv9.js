import{_ as c}from"./slidev/VClick-Iwt8O45s.js";import{_ as o}from"./VvCard-WRe_Piuv.js";import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-B0SaWSDe.js";import{o as _,b as g,w as n,g as s,d as l,m,E as i,v as u,x as A,A as e}from"./modules/vue-hRFCVXKJ.js";import{I as D}from"./default-DK8CBICn.js";import{_ as C,u as f,f as y}from"./index-ndxBl781.js";import"./slidev/VClicks-zUyBUnom.js";import"./modules/unplugin-icons-BGjEH5hM.js";import"./slidev/TitleIcon.vue_vue_type_script_setup_true_lang-CzbIp9mW.js";import"./modules/shiki-BCPDLLIJ.js";const B={__name:"04-slidev-features.md__slidev_29",setup(v){const{$clicksContext:t,$frontmatter:r}=f();return t.setup(),(b,a)=>{const p=d,k=o,h=c;return _(),g(D,u(A(e(y)(e(r),28))),{default:n(()=>[a[2]||(a[2]=s("h1",null,"Code from external file",-1)),l(p,m({lines:!0,maxHeight:"480px"},{title:"",ranges:["5-8","14-19","21-30"]}),{default:n(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-yaml"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"# AWS Infrastructure — Terraform")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'provider "aws" {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  region = "eu-central-1"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'resource "aws_vpc" "main" {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  cidr_block           = "10.0.0.0/16"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  enable_dns_hostnames = true")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  tags = {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'    Name        = "deep-signal-vpc"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'    Environment = "production"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'    ManagedBy   = "terraform"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'resource "aws_subnet" "public" {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  vpc_id                  = aws_vpc.main.id")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  cidr_block              = "10.0.1.0/24"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  availability_zone       = "eu-central-1a"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  map_public_ip_on_launch = true")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  tags = {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'    Name = "deep-signal-public-1a"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'    Tier = "public"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'resource "aws_eks_cluster" "main" {')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},'  name     = "deep-signal-cluster"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  role_arn = aws_iam_role.eks.arn")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"  vpc_config {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"    subnet_ids = [aws_subnet.public.id]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")])])],-1)])]),_:1},16),l(h,null,{default:n(()=>[l(k,{accent:"teal",class:"mt-6"},{default:n(()=>[...a[1]||(a[1]=[s("p",null,[s("strong",null,"Pattern:"),i(" Use "),s("code",null,"<<<"),i(" to import code from external files. Keeps slides clean, code reusable. Combine with line ranges and "),s("code",null,"maxHeight"),i(" for long files.")],-1)])]),_:1})]),_:1})]),_:1},16)}}},z=C(B,[["__scopeId","data-v-756a6056"]]);export{z as default};
