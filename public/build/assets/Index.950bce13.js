import{L as y}from"./Layout.1df25095.js";import{P as w}from"./Pagination.69304734.js";import{L,H as B,z as C,r as h,o as i,c as o,a as r,w as d,b as e,j as p,k as S,l as D,F as g,e as N,m as f,q as U,f as u,t as s}from"./app.6ae85c79.js";import{S as v}from"./sweetalert2.all.5ab3a842.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const H={layout:y,components:{Link:L,Head:B,Pagination:w},props:{users:Object},setup(){const c=C(new URL(document.location).searchParams.get("search"));return{search:c,handleSearch:()=>{f.Inertia.get("/admin/users",{search:c.value})},destroy:a=>{v.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Hapus"}).then(_=>{_.isConfirmed&&(f.Inertia.delete(`/admin/users/${a}`),v.fire({title:"Deleted!",text:"User Berhasil Dihapus!.",icon:"success",timer:1e3,showConfirmButton:!1}))})}}}},P={class:"page-wrapper"},T={class:"page-content"},V=U('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">User</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data User</li></ol></nav></div></div>',1),j={class:"card"},E={class:"card-body"},I={class:"d-lg-flex align-items-center mb-4 gap-3"},M={class:"position-relative"},q=u(),F=e("span",{class:"position-absolute top-50 product-show translate-middle-y"},[e("i",{class:"bx bx-search"})],-1),z={class:"ms-auto"},O=e("i",{class:"bx bxs-plus-square"},null,-1),R=u(" Tambah User"),G={class:"table-responsive"},J={class:"table mb-0",id:"orderTable"},K=e("thead",{class:"table-light"},[e("tr",null,[e("th",null,"No"),e("th",null,"Nama"),e("th",null,"Email"),e("th",null,"Level"),e("th",null,"Dibuat pada"),e("th",null,"Status User"),e("th",null,"Last Login"),e("th",null,"Aksi")])],-1),Q={class:"badge bg-success"},W={key:0,class:"badge bg-success"},X={key:1,class:"badge bg-danger"},Y={class:"badge bg-danger"},Z={class:"btn-group"},$=u("Lihat Data"),ee=u("Edit"),te=["onClick"];function ae(c,n,l,a,_,se){const k=h("Head"),m=h("Link"),x=h("Pagination");return i(),o(g,null,[r(k,null,{default:d(()=>[e("title",null,s(c.appName)+" - Data User",1)]),_:1}),e("div",P,[e("div",T,[V,e("div",j,[e("div",E,[e("div",I,[e("form",{onSubmit:n[1]||(n[1]=p((...t)=>a.handleSearch&&a.handleSearch(...t),["prevent"]))},[e("div",M,[S(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>a.search=t),class:"form-control ps-5 radius-20",placeholder:"Cari Berdasarkan Nama...."},null,512),[[D,a.search]]),q,F])],32),e("div",z,[r(m,{href:"/admin/users/create",class:"btn btn-primary mt-2 mt-lg-0"},{default:d(()=>[O,R]),_:1})])]),e("div",G,[e("table",J,[K,e("tbody",null,[(i(!0),o(g,null,N(l.users.data,(t,b)=>(i(),o("tr",{key:b},[e("td",null,s(++b+(l.users.current_page-1)*l.users.per_page),1),e("td",null,s(t.name),1),e("td",null,s(t.email),1),e("td",null,[e("span",Q,s(t.level==1?"Admin":"Member"),1)]),e("td",null,s(t.created_at),1),e("td",null,[t.is_active==1?(i(),o("span",W,"Active")):(i(),o("span",X,"Non-active"))]),e("td",null,[e("span",Y,s(t.last_login_at),1)]),e("td",null,[e("div",Z,[r(m,{href:`/admin/users/${t.id}`,class:"btn btn-success btn-space"},{default:d(()=>[$]),_:2},1032,["href"]),r(m,{href:`/admin/users/${t.id}/edit`,class:"btn btn-warning btn-space"},{default:d(()=>[ee]),_:2},1032,["href"]),e("a",{href:"#",onClick:p(ne=>a.destroy(t.id),["prevent"]),class:"btn btn-danger btn-space"},"Delete",8,te)])])]))),128))])])]),r(x,{links:l.users.links,align:"end"},null,8,["links"])])])])])],64)}const de=A(H,[["render",ae]]);export{de as default};