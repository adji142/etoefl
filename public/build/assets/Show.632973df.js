import{L as n}from"./Layout.1df25095.js";import{L as o,H as c,r as i,o as r,c as d,a as u,w as _,b as t,t as e,F as m,q as b}from"./app.6ae85c79.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";const h={layout:n,components:{Link:o,Head:c},props:{faq:Object}},f={class:"page-wrapper"},v={class:"page-content"},g=b('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">FAQ</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item"><a href="/admin/faqs">Daftar FAQ</a></li><li class="breadcrumb-item active" aria-current="page">Edit FAQ</li></ol></nav></div></div>',1),q={class:"card"},w={class:"card-body"},x={class:"table mb-0"},F=t("tr",null,[t("th",null,"Judul")],-1),H=t("tr",null,[t("td",{colspan:"2"})],-1),L=t("tr",null,[t("th",null,"Dibuat")],-1),y=t("tr",null,[t("td",{colspan:"2"})],-1),A=t("tr",null,[t("th",null,"Jawaban")],-1),N=["innerHTML"];function Q(s,k,a,B,D,E){const l=i("Head");return r(),d(m,null,[u(l,null,{default:_(()=>[t("title",null,e(s.appName)+" - Edit FAQ",1)]),_:1}),t("div",f,[t("div",v,[g,t("div",q,[t("div",w,[t("table",x,[t("tbody",null,[F,t("tr",null,[t("td",null,e(a.faq.question),1)]),H,L,t("tr",null,[t("td",null,e(a.faq.created_at),1)]),y,A,t("tr",null,[t("td",null,[t("div",{innerHTML:a.faq.answer},null,8,N)])])])])])])])])],64)}const C=p(h,[["render",Q]]);export{C as default};
