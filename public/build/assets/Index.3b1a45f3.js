import{L as y}from"./Layout.1df25095.js";import{P as w}from"./Pagination.69304734.js";import{L as C,H as P,z as B,r as c,o as n,c as i,a as r,w as d,b as e,j as b,k as N,l as S,d as D,F as g,e as L,m as f,q as K,f as h,t as m}from"./app.6ae85c79.js";import{S as v}from"./sweetalert2.all.5ab3a842.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const A={layout:y,components:{Link:C,Head:P,Pagination:w},props:{categories:Object},setup(){const l=B(new URL(document.location).searchParams.get("search"));return{search:l,handleSearch:()=>{f.Inertia.get("/admin/categories",{search:l.value})},destroy:a=>{v.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Hapus"}).then(u=>{u.isConfirmed&&(f.Inertia.delete(`/admin/categories/${a}`),v.fire({title:"Deleted!",text:"Pelajaran Berhasil Dihapus!.",icon:"success",timer:1e3,showConfirmButton:!1}))})}}}},H={class:"page-wrapper"},j={class:"page-content"},I=K('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Kategori Peminatan</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Kategori Peminatan</li></ol></nav></div></div>',1),T={class:"card"},q={class:"card-body"},E={class:"d-lg-flex align-items-center mb-4 gap-3"},F={class:"position-relative"},M=h(),U=e("span",{class:"position-absolute top-50 product-show translate-middle-y"},[e("i",{class:"bx bx-search"})],-1),z={class:"ms-auto"},O=e("i",{class:"bx bxs-plus-square"},null,-1),R=h(" Tambah Kategori Peminatan"),G={class:"table-responsive"},J={class:"table mb-0"},Q=e("thead",{class:"table-light"},[e("tr",null,[e("th",null,"No"),e("th",null,"Nama Kategori Peminatan"),e("th",null,"Image"),e("th",null,"Aksi")])],-1),W={key:0,align:"center",colspan:"4"},X={key:0},Y=["src"],Z={key:1},$={class:"btn-group"},ee=h("Edit"),te=["onClick"];function ae(l,o,s,a,u,se){const k=c("Head"),_=c("Link"),x=c("Pagination");return n(),i(g,null,[r(k,null,{default:d(()=>[e("title",null,m(l.appName)+" - Data Kategori Peminatan",1)]),_:1}),e("div",H,[e("div",j,[I,e("div",T,[e("div",q,[e("div",E,[e("form",{onSubmit:o[1]||(o[1]=b((...t)=>a.handleSearch&&a.handleSearch(...t),["prevent"]))},[e("div",F,[N(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>a.search=t),class:"form-control ps-5 radius-20",placeholder:"Cari Berdasarkan Nama...."},null,512),[[S,a.search]]),M,U])],32),e("div",z,[r(_,{href:"/admin/categories/create",class:"btn btn-primary mt-2 mt-lg-0"},{default:d(()=>[O,R]),_:1})])]),e("div",G,[e("table",J,[Q,e("tbody",null,[e("tr",null,[s.categories.data.length?D("",!0):(n(),i("td",W,"Data Kategori kosong"))]),(n(!0),i(g,null,L(s.categories.data,(t,p)=>(n(),i("tr",{key:p},[e("td",null,m(++p+(s.categories.current_page-1)*s.categories.per_page),1),e("td",null,m(t.name),1),e("td",null,[t.thumbnail?(n(),i("div",X,[e("img",{src:"/storage/upload_files/categories/"+t.thumbnail,style:{width:"90px"}},null,8,Y)])):(n(),i("div",Z," - "))]),e("td",null,[e("div",$,[r(_,{href:`/admin/categories/${t.id}/edit`,class:"btn btn-success btn-space"},{default:d(()=>[ee]),_:2},1032,["href"]),e("a",{href:"#",onClick:b(ne=>a.destroy(t.id),["prevent"]),class:"btn btn-danger btn-space"},"Delete",8,te)])])]))),128))])])]),r(x,{links:s.categories.links,align:"end"},null,8,["links"])])])])])],64)}const de=V(A,[["render",ae]]);export{de as default};
