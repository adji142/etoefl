import{L as y}from"./Layout.0e8791d0.js";import{L as k,H as q,i as x,r as p,o as c,c as d,a as f,w as E,b as e,j as A,k as j,l as C,n as F,t as m,d as _,F as S,m as V,q as D}from"./app.03e15cc8.js";import{S as N}from"./sweetalert2.all.2d6a8d85.js";import{E as B}from"./Editor.c62202cb.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const Q={layout:y,components:{Link:k,Head:q,Editor:B},props:{errors:Object,faq:Object},setup(a){const t=x({question:a.faq.question,answer:a.faq.answer});return{form:t,submit:()=>{V.Inertia.put(`/admin/faqs/${a.faq.id}`,{question:t.question,answer:t.answer},{onSuccess:()=>{N.fire({title:"Success!",text:"FAQ Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},U={class:"page-wrapper"},H={class:"page-content"},z=D('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">FAQ</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item"><a href="/admin/faqs">Daftar FAQ</a></li><li class="breadcrumb-item active" aria-current="page">Edit FAQ</li></ol></nav></div></div>',1),I={class:"card"},M={class:"card-body"},O={class:"col-12"},R=e("label",{class:"form-label"},"Pertanyaan",-1),T={key:0,class:"invalid-feedback"},J={class:"col-12"},P=e("label",{class:"form-label"},[e("b",null,"Jawaban")],-1),G={key:0},K=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function W(a,t,s,r,X,Y){const v=p("Head"),g=p("Editor");return c(),d(S,null,[f(v,null,{default:E(()=>[e("title",null,m(a.appName)+" - Edit FAQ",1)]),_:1}),e("div",U,[e("div",H,[z,e("div",I,[e("div",M,[e("form",{onSubmit:t[2]||(t[2]=A((...i)=>r.submit&&r.submit(...i),["prevent"])),class:"row g-3"},[e("div",O,[R,j(e("input",{type:"text",class:F(["form-control",{"is-invalid":s.errors.question}]),"onUpdate:modelValue":t[0]||(t[0]=i=>r.form.question=i),placeholder:"Nama"},null,2),[[C,r.form.question]]),s.errors.question?(c(),d("div",T,m(s.errors.question),1)):_("",!0)]),e("div",J,[P,f(g,{"api-key":"958z2qj9q76pfd7ryf02bwbov0y5exsjrzc82ir659sv46wn",modelValue:r.form.answer,"onUpdate:modelValue":t[1]||(t[1]=i=>r.form.answer=i),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",images_upload_credentials:!0,file_picker_types:"image",file_picker_callback:function(i,Z,$){var o=a.document.createElement("input");o.setAttribute("type","file"),o.setAttribute("accept","image/*"),o.onchange=function(){var l=this.files[0],n=new a.FileReader;n.readAsDataURL(l),n.onload=function(){var h="blobid"+new Date().getTime(),u=a.tinymce.activeEditor.editorUpload.blobCache,w=n.result.split(",")[1],b=u.create(h,l,w);u.add(b),i(b.blobUri(),{title:l.name})}},o.click()}}},null,8,["modelValue","init"]),s.errors.answer?(c(),d("div",G,m(s.errors.answer),1)):_("",!0)]),K],32)])])])])],64)}const re=L(Q,[["render",W]]);export{re as default};
