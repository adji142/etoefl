import{L as f}from"./Layout.1df25095.js";import{L as y,H as g,i as k,r as w,o as i,c as l,a as S,w as J,b as e,j as V,k as c,v as _,n as m,F as v,e as x,t as n,d,l as u,m as P,q as U}from"./app.6ae85c79.js";import{S as M}from"./sweetalert2.all.5ab3a842.js";import"./index.f48223d1.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:f,components:{Link:y,Head:g},props:{errors:Object,categories:Object},setup(){const r=k({category_id:"",name:"",total_choices:"",total_section:"",add_value_category:"",assessment_type:"",show_answer:"",minimum_grade:""});return{form:r,submit:()=>{P.Inertia.post("/admin/question-titles",{category_id:r.category_id,name:r.name,total_choices:r.total_choices,total_section:r.total_section,add_value_category:r.add_value_category,assessment_type:r.assessment_type,show_answer:r.show_answer,minimum_grade:r.minimum_grade},{onSuccess:a=>{console.log(a),M.fire({title:"Success!",text:"Judul Soal Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},p={class:"page-wrapper"},C={class:"page-content"},B=U('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Judul Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item"><a href="/admin/question-titles">Data Soal</a></li><li class="breadcrumb-item active" aria-current="page">Tambah Judul Soal</li></ol></nav></div></div>',1),D={class:"card"},L={class:"card-body"},j={class:"col-12"},H=e("label",{class:"form-label"},"Kategori",-1),K=e("option",{value:""},"[ Pilih ]",-1),q=["value"],F={key:0,class:"invalid-feedback"},O={class:"col-12"},Y=e("label",{class:"form-label"},"Judul Soal",-1),z={key:0,class:"invalid-feedback"},A={class:"col-12"},E=e("label",{class:"form-label"},"Jumlah Pilihan",-1),I={key:0,class:"invalid-feedback"},G={class:"col-12"},Q=e("label",{class:"form-label"},"Jumlah Sesi",-1),R={key:0,class:"invalid-feedback"},W={class:"col-12"},X=e("label",{class:"form-label"},"Tambahkan Kategori Penilaian",-1),Z=e("option",{value:""},"[ Pilih ]",-1),$=e("option",{value:"0"},"Tidak",-1),ee=e("option",{value:"1"},"Ya",-1),ae=[Z,$,ee],se={key:0,class:"invalid-feedback"},oe={key:0,class:"col-12"},te=e("label",{class:"form-label"},"Jenis Penilaian",-1),ie=e("option",{value:""},"[ Pilih ]",-1),le=e("option",{value:"1"},"Dihitung Per Kategori Penilaian",-1),re=[ie,le],ne={key:0,class:"invalid-feedback"},de={class:"col-12"},ce=e("label",{class:"form-label"},"Tampilkan Koreksi Jawaban",-1),me=e("option",{value:""},"[ Pilih ]",-1),_e=e("option",{value:"0"},"Tidak",-1),ue=e("option",{value:"1"},"Ya",-1),ve=[me,_e,ue],he={key:0,class:"invalid-feedback"},be={key:1,class:"col-12"},fe=e("label",{class:"form-label"},"Minimal Nilai Untuk Melihat Jawaban",-1),ye={key:0,class:"invalid-feedback"},ge=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function ke(r,t,a,s,we,Se){const h=w("Head");return i(),l(v,null,[S(h,null,{default:J(()=>[e("title",null,n(r.appName)+" - Tambah Judul Soal",1)]),_:1}),e("div",p,[e("div",C,[B,e("div",D,[e("div",L,[e("form",{onSubmit:t[8]||(t[8]=V((...o)=>s.submit&&s.submit(...o),["prevent"])),class:"row g-3"},[e("div",j,[H,c(e("select",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.category_id=o),class:m([{"is-invalid":a.errors.category_id},"form-select"])},[K,(i(!0),l(v,null,x(a.categories,(o,b)=>(i(),l("option",{key:b,value:o.id},n(o.name),9,q))),128))],2),[[_,s.form.category_id]]),a.errors.category_id?(i(),l("div",F,n(a.errors.category_id),1)):d("",!0)]),e("div",O,[Y,c(e("input",{type:"text",class:m(["form-control",{"is-invalid":a.errors.name}]),"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.name=o),placeholder:"Judul Soal"},null,2),[[u,s.form.name]]),a.errors.name?(i(),l("div",z,n(a.errors.name),1)):d("",!0)]),e("div",A,[E,c(e("input",{type:"number",class:m(["form-control",{"is-invalid":a.errors.total_choices}]),"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.total_choices=o),placeholder:"Jumlah Pilihan"},null,2),[[u,s.form.total_choices]]),a.errors.total_choices?(i(),l("div",I,n(a.errors.total_choices),1)):d("",!0)]),e("div",G,[Q,c(e("input",{type:"number",class:m(["form-control",{"is-invalid":a.errors.total_section}]),"onUpdate:modelValue":t[3]||(t[3]=o=>s.form.total_section=o),placeholder:"Jumlah Sesi"},null,2),[[u,s.form.total_section]]),a.errors.total_section?(i(),l("div",R,n(a.errors.total_section),1)):d("",!0)]),e("div",W,[X,c(e("select",{"onUpdate:modelValue":t[4]||(t[4]=o=>s.form.add_value_category=o),class:m([{"is-invalid":a.errors.add_value_category},"form-select"])},ae,2),[[_,s.form.add_value_category]]),a.errors.add_value_category?(i(),l("div",se,n(a.errors.add_value_category),1)):d("",!0)]),s.form.add_value_category==1?(i(),l("div",oe,[te,c(e("select",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.form.assessment_type=o),class:m([{"is-invalid":a.errors.assessment_type},"form-select"])},re,2),[[_,s.form.assessment_type]]),a.errors.assessment_type?(i(),l("div",ne,n(a.errors.assessment_type),1)):d("",!0)])):d("",!0),e("div",de,[ce,c(e("select",{"onUpdate:modelValue":t[6]||(t[6]=o=>s.form.show_answer=o),class:m([{"is-invalid":a.errors.show_answer},"form-select"])},ve,2),[[_,s.form.show_answer]]),a.errors.show_answer?(i(),l("div",he,n(a.errors.show_answer),1)):d("",!0)]),s.form.show_answer==1?(i(),l("div",be,[fe,c(e("input",{type:"number",class:m(["form-control",{"is-invalid":a.errors.minimum_grade}]),"onUpdate:modelValue":t[7]||(t[7]=o=>s.form.minimum_grade=o),placeholder:"Minimal Nilai Untuk Melihat Jawaban"},null,2),[[u,s.form.minimum_grade]]),a.errors.minimum_grade?(i(),l("div",ye,n(a.errors.minimum_grade),1)):d("",!0)])):d("",!0),ge],32)])])])])],64)}const Me=N(T,[["render",ke]]);export{Me as default};
