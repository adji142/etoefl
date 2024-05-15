import{L as u}from"./Layout.0e8791d0.js";import{L as b,H as f,i as v,r as h,o as l,c as o,a as y,w as x,b as a,j as C,k as n,l as c,n as m,t as d,d as _,F as k,m as V}from"./app.03e15cc8.js";import{S as N}from"./sweetalert2.all.2d6a8d85.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";const w={layout:u,components:{Link:b,Head:f},props:{errors:Object,valueCategory:Object,detailValueCategory:Object},setup(t){const e=v({min_grade:t.detailValueCategory.min_grade,max_grade:t.detailValueCategory.max_grade,category_grade:t.detailValueCategory.category_grade,final_grade:t.detailValueCategory.final_grade});return{form:e,submit:()=>{V.Inertia.put(`/admin/value-categories/${t.valueCategory.id}/detail-value-categories/${t.detailValueCategory.id}`,{value_category_id:t.valueCategory.id,min_grade:e.min_grade,max_grade:e.max_grade,category_grade:e.category_grade,final_grade:e.final_grade},{onSuccess:()=>{N.fire({title:"Success!",text:"Detail Kategori Penilaian Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},D={class:"page-wrapper"},S={class:"page-content"},M={class:"page-breadcrumb d-none d-sm-flex align-items-center mb-3"},j=a("div",{class:"breadcrumb-title pe-3"},"Kategori Penilaian",-1),B={class:"ps-3"},P={"aria-label":"breadcrumb"},E={class:"breadcrumb mb-0 p-0"},H=a("li",{class:"breadcrumb-item"},[a("a",{href:"javascript:;"},[a("i",{class:"bx bx-home-alt"})])],-1),K={class:"breadcrumb-item"},L=["href"],A=a("li",{class:"breadcrumb-item active","aria-current":"page"},"Edit Detail Kategori Penilaian",-1),O={class:"card"},U={class:"card-body"},F={class:"col-12"},z=a("label",{class:"form-label"},"Nilai Minimal",-1),I={key:0,class:"invalid-feedback"},T={class:"col-12"},q=a("label",{class:"form-label"},"Nilai Maksimal",-1),G={key:0,class:"invalid-feedback"},J={class:"col-12"},Q=a("label",{class:"form-label"},"Nilai Akhir",-1),R={key:0,class:"invalid-feedback"},W=a("div",{class:"col-12"},[a("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function X(t,e,i,r,Y,Z){const g=h("Head");return l(),o(k,null,[y(g,null,{default:x(()=>[a("title",null,d(t.appName)+" - Edit Detail Kategori Penilaian",1)]),_:1}),a("div",D,[a("div",S,[a("div",M,[j,a("div",B,[a("nav",P,[a("ol",E,[H,a("li",K,[a("a",{href:`/admin/value-categories/${i.valueCategory.id}/detail-value-categories`},"Daftar Detail Penilaian",8,L)]),A])])])]),a("div",O,[a("div",U,[a("form",{onSubmit:e[3]||(e[3]=C((...s)=>r.submit&&r.submit(...s),["prevent"])),class:"row g-3"},[a("div",F,[z,n(a("input",{type:"number",class:m(["form-control",{"is-invalid":i.errors.min_grade}]),"onUpdate:modelValue":e[0]||(e[0]=s=>r.form.min_grade=s),placeholder:"Nilai Minimal"},null,2),[[c,r.form.min_grade]]),i.errors.min_grade?(l(),o("div",I,d(i.errors.min_grade),1)):_("",!0)]),a("div",T,[q,n(a("input",{type:"number",class:m(["form-control",{"is-invalid":i.errors.max_grade}]),"onUpdate:modelValue":e[1]||(e[1]=s=>r.form.max_grade=s),placeholder:"Nilai Maksimal"},null,2),[[c,r.form.max_grade]]),i.errors.max_grade?(l(),o("div",G,d(i.errors.max_grade),1)):_("",!0)]),a("div",J,[Q,n(a("input",{type:"text",class:m(["form-control",{"is-invalid":i.errors.final_grade}]),"onUpdate:modelValue":e[2]||(e[2]=s=>r.form.final_grade=s),placeholder:"Nilai Akhir"},null,2),[[c,r.form.final_grade]]),i.errors.final_grade?(l(),o("div",R,d(i.errors.final_grade),1)):_("",!0)]),W],32)])])])])],64)}const ta=p(w,[["render",X]]);export{ta as default};
