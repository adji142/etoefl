import{L as x}from"./Layout.acad3ff5.js";import{L as C,H as E,i as V,r as c,o as d,c as m,a as u,w as f,b as e,j as S,k as j,l as L,n as N,t as p,d as v,F as D,m as B,q as T,f as U}from"./app.6d475ed4.js";import{S as A}from"./sweetalert2.all.1405a000.js";import{E as H}from"./Editor.e9f44946.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";const q={layout:x,components:{Link:C,Head:E,Editor:H},props:{errors:Object},setup(){const t=V({title:"",description:""});return{form:t,submit:()=>{B.Inertia.post("/admin/announcements",{title:t.title,description:t.description},{onSuccess:()=>{A.fire({title:"Success!",text:"Pengumuman Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},z={class:"page-wrapper"},F={class:"page-content"},I=T('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Pengumuman</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Pengumuman</li></ol></nav></div></div>',1),M={class:"card"},R={class:"card-body"},J={class:"d-lg-flex align-items-center"},K={class:"ms-auto"},O=U("Kembali"),G={class:"col-12"},Q=e("label",{class:"form-label"},"Judul",-1),W={key:0,class:"invalid-feedback"},X={class:"col-12"},Y=e("label",{class:"form-label"},[e("b",null,"Deskripsi")],-1),Z={key:0},$=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function ee(t,i,o,s,te,ie){const g=c("Head"),h=c("Link"),y=c("Editor");return d(),m(D,null,[u(g,null,{default:f(()=>[e("title",null,p(t.appName)+" - Tambah Pengumuman",1)]),_:1}),e("div",z,[e("div",F,[I,e("div",M,[e("div",R,[e("div",J,[e("div",K,[u(h,{href:"/admin/announcements",class:"btn btn-primary mt-2 mt-lg-0"},{default:f(()=>[O]),_:1})])]),e("form",{onSubmit:i[2]||(i[2]=S((...a)=>s.submit&&s.submit(...a),["prevent"])),class:"row g-3"},[e("div",G,[Q,j(e("input",{type:"text",class:N(["form-control",{"is-invalid":o.errors.title}]),"onUpdate:modelValue":i[0]||(i[0]=a=>s.form.title=a),placeholder:"Nama"},null,2),[[L,s.form.title]]),o.errors.title?(d(),m("div",W,p(o.errors.title),1)):v("",!0)]),e("div",X,[Y,u(y,{"api-key":"958z2qj9q76pfd7ryf02bwbov0y5exsjrzc82ir659sv46wn",modelValue:s.form.description,"onUpdate:modelValue":i[1]||(i[1]=a=>s.form.description=a),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",images_upload_credentials:!0,file_picker_types:"image",file_picker_callback:function(a,ae,se){var r=t.document.createElement("input");r.setAttribute("type","file"),r.setAttribute("accept","image/*"),r.onchange=function(){var l=this.files[0],n=new t.FileReader;n.readAsDataURL(l),n.onload=function(){var k="blobid"+new Date().getTime(),b=t.tinymce.activeEditor.editorUpload.blobCache,w=n.result.split(",")[1],_=b.create(k,l,w);b.add(_),a(_.blobUri(),{title:l.name})}},r.click()}}},null,8,["modelValue","init"]),o.errors.description?(d(),m("div",Z,p(o.errors.description),1)):v("",!0)]),$],32)])])])])],64)}const de=P(q,[["render",ee]]);export{de as default};
