import{L as p}from"./Layout.79f21746.js";import{P as h}from"./Pagination.14a45b60.js";import{L as g,H as v,r as o,o as t,c as n,a as c,w as d,b as e,d as f,F as r,e as k,q as P,t as s,f as x}from"./app.7382884e.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const y={layout:p,components:{Link:g,Head:v,Pagination:h},props:{announcements:Object}},N={class:"page-wrapper"},D={class:"page-content"},V=P('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Pengumuman</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Pengumuman</li></ol></nav></div></div>',1),H={class:"card"},w={class:"card-body"},B=e("div",{class:"d-flex align-items-center"},[e("div",null,[e("h6",{class:"mb-3"},"Pengumuman")])],-1),C={class:"table-responsive"},j={class:"table mb-0"},A=e("thead",{class:"table-light"},[e("tr",null,[e("th",null,"No"),e("th",null,"Judul"),e("th",null,"Dibuat pada"),e("th",null,"Aksi")])],-1),F={key:0,align:"center",colspan:"4"},S={class:"btn-group"},q=x("Lihat Data");function E(u,I,a,J,O,T){const m=o("Head"),_=o("Link"),b=o("Pagination");return t(),n(r,null,[c(m,null,{default:d(()=>[e("title",null,s(u.appName)+" - Data Pengumuman",1)]),_:1}),e("div",N,[e("div",D,[V,e("div",H,[e("div",w,[B,e("div",C,[e("table",j,[A,e("tbody",null,[e("tr",null,[a.announcements.data.length?f("",!0):(t(),n("td",F,"Data Pengumuman kosong"))]),(t(!0),n(r,null,k(a.announcements.data,(l,i)=>(t(),n("tr",{key:i},[e("td",null,s(++i+(a.announcements.current_page-1)*a.announcements.per_page),1),e("td",null,s(l.title),1),e("td",null,s(l.created_at),1),e("td",null,[e("div",S,[c(_,{href:`/user/announcements/${l.id}`,class:"btn btn-success btn-space"},{default:d(()=>[q]),_:2},1032,["href"])])])]))),128))])])]),c(b,{links:a.announcements.links,align:"end"},null,8,["links"])])])])])],64)}const Q=L(y,[["render",E]]);export{Q as default};