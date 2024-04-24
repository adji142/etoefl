import{L as y}from"./Layout.acad3ff5.js";import{P as q}from"./Pagination.83f03354.js";import{L as w,H as C,z as B,r as u,o as l,c as r,a as o,w as d,b as a,j as b,k as A,l as S,d as D,F as f,e as F,m as p,q as L,f as g,t as c}from"./app.6d475ed4.js";import{S as v}from"./sweetalert2.all.1405a000.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const P={layout:y,components:{Link:w,Head:C,Pagination:q},props:{faqs:Object},setup(){const i=B(new URL(document.location).searchParams.get("search"));return{search:i,handleSearch:()=>{p.Inertia.get("/admin/faqs",{search:i.value})},destroy:e=>{v.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Hapus"}).then(h=>{h.isConfirmed&&(p.Inertia.delete(`/admin/faqs/${e}`),v.fire({title:"Deleted!",text:"FAQ Berhasil Dihapus!.",icon:"success",timer:1e3,showConfirmButton:!1}))})}}}},V={class:"page-wrapper"},H={class:"page-content"},Q=L('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">FAQ</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data FAQ</li></ol></nav></div></div>',1),T={class:"card"},j={class:"card-body"},I={class:"d-lg-flex align-items-center mb-4 gap-3"},M={class:"position-relative"},U=g(),z=a("span",{class:"position-absolute top-50 product-show translate-middle-y"},[a("i",{class:"bx bx-search"})],-1),E={class:"ms-auto"},J=a("i",{class:"bx bxs-plus-square"},null,-1),O=g(" Tambah Faq"),R={class:"table-responsive"},G={class:"table mb-0"},K=a("thead",{class:"table-light"},[a("tr",null,[a("th",null,"No"),a("th",null,"Pertanyaan"),a("th",null,"Dibuat pada"),a("th",null,"Aksi")])],-1),W={key:0,align:"center",colspan:"4"},X={class:"d-flex order-actions"},Y=a("i",{class:"bx bx-grid-alt"},null,-1),Z=a("i",{class:"bx bxs-edit"},null,-1),$=["onClick"],aa=a("i",{class:"bx bxs-trash"},null,-1),ta=[aa];function ea(i,n,s,e,h,sa){const x=u("Head"),m=u("Link"),k=u("Pagination");return l(),r(f,null,[o(x,null,{default:d(()=>[a("title",null,c(i.appName)+" - Data FAQ",1)]),_:1}),a("div",V,[a("div",H,[Q,a("div",T,[a("div",j,[a("div",I,[a("form",{onSubmit:n[1]||(n[1]=b((...t)=>e.handleSearch&&e.handleSearch(...t),["prevent"]))},[a("div",M,[A(a("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>e.search=t),class:"form-control ps-5 radius-20",placeholder:"Cari Berdasarkan Judul Pertanyaan...."},null,512),[[S,e.search]]),U,z])],32),a("div",E,[o(m,{href:"/admin/faqs/create",class:"btn btn-primary mt-2 mt-lg-0"},{default:d(()=>[J,O]),_:1})])]),a("div",R,[a("table",G,[K,a("tbody",null,[a("tr",null,[s.faqs.data.length?D("",!0):(l(),r("td",W,"Data Faq kosong"))]),(l(!0),r(f,null,F(s.faqs.data,(t,_)=>(l(),r("tr",{key:_},[a("td",null,c(++_+(s.faqs.current_page-1)*s.faqs.per_page),1),a("td",null,c(t.question),1),a("td",null,c(t.created_at),1),a("td",null,[a("div",X,[o(m,{href:`/admin/faqs/${t.id}`,class:"ms-2"},{default:d(()=>[Y]),_:2},1032,["href"]),o(m,{href:`/admin/faqs/${t.id}/edit`,class:"ms-2"},{default:d(()=>[Z]),_:2},1032,["href"]),a("a",{href:"#",onClick:b(na=>e.destroy(t.id),["prevent"]),class:"ms-2"},ta,8,$)])])]))),128))])])]),o(k,{links:s.faqs.links,align:"end"},null,8,["links"])])])])])],64)}const ca=N(P,[["render",ea]]);export{ca as default};
