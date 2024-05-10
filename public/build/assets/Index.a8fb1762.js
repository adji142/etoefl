import{L as y}from"./Layout.a023144c.js";import{P as w}from"./Pagination.beb90802.js";import{L as C,H as P,z as B,r as h,o as l,c,a as o,w as r,b as e,j as p,k as L,l as S,d as D,F as f,e as N,m as g,q as H,f as u,t as d}from"./app.74a9e360.js";import{S as v}from"./sweetalert2.all.309c5041.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const A={layout:y,components:{Link:C,Head:P,Pagination:w},props:{announcements:Object},setup(){const i=B(new URL(document.location).searchParams.get("search"));return{search:i,handleSearch:()=>{g.Inertia.get("/admin/announcements",{search:i.value})},destroy:a=>{v.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Hapus"}).then(_=>{_.isConfirmed&&(g.Inertia.delete(`/admin/announcements/${a}`),v.fire({title:"Deleted!",text:"Pengumuman Berhasil Dihapus!.",icon:"success",timer:1e3,showConfirmButton:!1}))})}}}},T={class:"page-wrapper"},j={class:"page-content"},I=H('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Pengumuman</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Pengumuman</li></ol></nav></div></div>',1),q={class:"card"},E={class:"card-body"},F={class:"d-lg-flex align-items-center mb-4 gap-3"},J={class:"position-relative"},M=u(),U=e("span",{class:"position-absolute top-50 product-show translate-middle-y"},[e("i",{class:"bx bx-search"})],-1),z={class:"ms-auto"},O=e("i",{class:"bx bxs-plus-square"},null,-1),R=u(" Tambah Pengumuman"),G={class:"table-responsive"},K={class:"table mb-0"},Q=e("thead",{class:"table-light"},[e("tr",null,[e("th",null,"No"),e("th",null,"Judul"),e("th",null,"Dibuat pada"),e("th",null,"Aksi")])],-1),W={key:0,align:"center",colspan:"4"},X={class:"btn-group"},Y=u("Lihat"),Z=u("Edit"),$=["onClick"];function ee(i,s,n,a,_,te){const k=h("Head"),m=h("Link"),x=h("Pagination");return l(),c(f,null,[o(k,null,{default:r(()=>[e("title",null,d(i.appName)+" - Data Pengumuman",1)]),_:1}),e("div",T,[e("div",j,[I,e("div",q,[e("div",E,[e("div",F,[e("form",{onSubmit:s[1]||(s[1]=p((...t)=>a.handleSearch&&a.handleSearch(...t),["prevent"]))},[e("div",J,[L(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>a.search=t),class:"form-control ps-5 radius-20",placeholder:"Cari Berdasarkan Judul...."},null,512),[[S,a.search]]),M,U])],32),e("div",z,[o(m,{href:"/admin/announcements/create",class:"btn btn-primary mt-2 mt-lg-0"},{default:r(()=>[O,R]),_:1})])]),e("div",G,[e("table",K,[Q,e("tbody",null,[e("tr",null,[n.announcements.data.length?D("",!0):(l(),c("td",W,"Data Pengumuman kosong"))]),(l(!0),c(f,null,N(n.announcements.data,(t,b)=>(l(),c("tr",{key:b},[e("td",null,d(++b+(n.announcements.current_page-1)*n.announcements.per_page),1),e("td",null,d(t.title),1),e("td",null,d(t.created_at),1),e("td",null,[e("div",X,[o(m,{href:`/admin/announcements/${t.id}`,class:"btn btn-success btn-space"},{default:r(()=>[Y]),_:2},1032,["href"]),o(m,{href:`/admin/announcements/${t.id}/edit`,class:"btn btn-warning btn-space"},{default:r(()=>[Z]),_:2},1032,["href"]),e("a",{href:"#",onClick:p(ae=>a.destroy(t.id),["prevent"]),class:"btn btn-danger btn-space"},"Hapus",8,$)])])]))),128))])])]),o(x,{links:n.announcements.links,align:"end"},null,8,["links"])])])])])],64)}const ce=V(A,[["render",ee]]);export{ce as default};