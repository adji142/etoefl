import{L as k}from"./Layout.0e8791d0.js";import{L as w,H as x,i as E,r as p,o as c,c as d,a as _,w as j,b as e,j as C,k as S,l as V,n as D,t as m,d as f,F as N,m as B,q as L}from"./app.03e15cc8.js";import{S as P}from"./sweetalert2.all.2d6a8d85.js";import{E as U}from"./Editor.c62202cb.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const H={layout:k,components:{Link:w,Head:x,Editor:U},props:{errors:Object,announcement:Object},setup(i){const t=E({title:i.announcement.title,description:i.announcement.description});return{form:t,submit:()=>{B.Inertia.put(`/admin/announcements/${i.announcement.id}`,{title:t.title,description:t.description},{onSuccess:()=>{P.fire({title:"Success!",text:"Pengumuman Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},q={class:"page-wrapper"},z={class:"page-content"},F=L('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Pengumuman</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item"><a href="/admin/announcements">Daftar Pengumuman</a></li><li class="breadcrumb-item active" aria-current="page">Edit Pengumuman</li></ol></nav></div></div>',1),I={class:"card"},M={class:"card-body"},O={class:"col-12"},R=e("label",{class:"form-label"},"Judul",-1),T={key:0,class:"invalid-feedback"},J={class:"col-12"},G=e("label",{class:"form-label"},[e("b",null,"Deskripsi")],-1),K={key:0},Q=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function W(i,t,s,o,X,Y){const v=p("Head"),g=p("Editor");return c(),d(N,null,[_(v,null,{default:j(()=>[e("title",null,m(i.appName)+" - Edit Pengumuman",1)]),_:1}),e("div",q,[e("div",z,[F,e("div",I,[e("div",M,[e("form",{onSubmit:t[2]||(t[2]=C((...a)=>o.submit&&o.submit(...a),["prevent"])),class:"row g-3"},[e("div",O,[R,S(e("input",{type:"text",class:D(["form-control",{"is-invalid":s.errors.title}]),"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.title=a),placeholder:"Nama"},null,2),[[V,o.form.title]]),s.errors.title?(c(),d("div",T,m(s.errors.title),1)):f("",!0)]),e("div",J,[G,_(g,{"api-key":"958z2qj9q76pfd7ryf02bwbov0y5exsjrzc82ir659sv46wn",modelValue:o.form.description,"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.description=a),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",images_upload_credentials:!0,file_picker_types:"image",file_picker_callback:function(a,Z,$){var n=i.document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.onchange=function(){var r=this.files[0],l=new i.FileReader;l.readAsDataURL(r),l.onload=function(){var h="blobid"+new Date().getTime(),u=i.tinymce.activeEditor.editorUpload.blobCache,y=l.result.split(",")[1],b=u.create(h,r,y);u.add(b),a(b.blobUri(),{title:r.name})}},n.click()}}},null,8,["modelValue","init"]),s.errors.description?(c(),d("div",K,m(s.errors.description),1)):f("",!0)]),Q],32)])])])])],64)}const oe=A(H,[["render",W]]);export{oe as default};
