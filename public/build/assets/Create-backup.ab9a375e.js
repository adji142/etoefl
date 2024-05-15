import{L as D}from"./Layout.0e8791d0.js";import{L as x,H as R,i as L,r as U,o as r,c as n,a as f,w as A,b as a,j as B,k as w,v as E,n as k,t as b,d as c,F as V,e as P,l as q,m as F,q as j,f as I}from"./app.03e15cc8.js";import"./sweetalert2.all.2d6a8d85.js";import{E as S}from"./Editor.c62202cb.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const N={layout:D,components:{Link:x,Head:R,Editor:S},props:{errors:Object,questionTitle:Object,valueCategories:Object,optionAlphabet:Array},setup(u){const i=L({value_category_id:"",audio_input:"",audio:"",audio_played_limit:"",audio_answer_time:"",question:"",option_1:"",option_2:"",option_3:"",option_4:"",option_5:"",answer:"",discussion:"",type:1,direction:""});return{form:i,submit:()=>{F.Inertia.post(`/admin/question-titles/${u.questionTitle.id}/questions`,{forceFormData:!0,add_value_category:u.questionTitle.add_value_category,question_title_id:u.questionTitle.id,value_category_id:i.value_category_id,audio_input:i.audio_input,audio:i.audio,audio_played_limit:i.audio_played_limit,audio_answer_time:i.audio_answer_time,question:i.question,option_1:i.option_1,option_2:i.option_2,option_3:i.option_3,option_4:i.option_4,option_5:i.option_5,answer:i.answer,discussion:i.discussion,type:i.type,direction:i.direction},{onSuccess:t=>{console.log(t)}})}}}},H=a("title",null,"MyEnglish - Tambah Soal",-1),O={class:"page-wrapper"},J={class:"page-content"},K=j('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Soal</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Tambah Soal</li></ol></nav></div></div>',1),W={class:"card"},z={class:"card-body"},Q={class:"d-lg-flex align-items-center"},Y={class:"ms-auto"},G=I("Kembali"),X={class:"col-12"},Z=a("label",{class:"form-label"},"Tipe",-1),$=a("option",{value:"1"},"Pertanyaan (Question)",-1),ee=a("option",{value:"2"},"Petunjuk (Direction)",-1),ie=[$,ee],te={key:0,class:"invalid-feedback"},ae={key:0,class:"col-12"},oe=a("label",{class:"form-label"},"Kategori Penilaian",-1),le=a("option",{value:""},"[ Pilih ]",-1),re=["value"],ne={key:0,class:"invalid-feedback"},se={key:1,class:"col-12"},de=a("label",{class:"form-label"},[a("b",null,"Direction")],-1),ce={key:0},ue={key:2,class:"col-12"},me=a("label",{class:"form-label"},"Tambah Audio",-1),_e=a("option",{value:""},"[ Pilih ]",-1),be=a("option",{value:"0"},"Tidak",-1),pe=a("option",{value:"1"},"Ya",-1),ve=[_e,be,pe],fe={key:0,class:"invalid-feedback"},ge={key:3,class:"col-12"},ye=a("label",{class:"form-label"},"Audio",-1),he={key:0,class:"invalid-feedback"},ke={key:4,class:"col-12"},we=a("label",{class:"form-label"},"Batasan Audio Bisa Diputar",-1),Ee={key:0,class:"invalid-feedback"},Ue={key:5,class:"col-12"},Ae=a("label",{class:"form-label"},"Batas Waktu Menjawab (Detik), Input 0 Jika Tidak Ada Batasan",-1),Ve={key:0,class:"invalid-feedback"},qe={key:6,class:"col-12"},je=a("label",{class:"form-label"},[a("b",null,"Soal")],-1),Ce={key:0},Te=a("hr",null,null,-1),De={key:7,class:"col-12"},xe=a("label",{class:"form-label"},[a("b",null,"Pilihan A")],-1),Re={key:0},Le={key:8,class:"col-12"},Be=a("label",{class:"form-label"},[a("b",null,"Pilihan B")],-1),Pe={key:0},Fe={key:9,class:"col-12"},Ie=a("label",{class:"form-label"},[a("b",null,"Pilihan C")],-1),Se={key:0},Me={key:10,class:"col-12"},Ne=a("label",{class:"form-label"},[a("b",null,"Pilihan D")],-1),He={key:0},Oe={key:11,class:"col-12"},Je=a("label",{class:"form-label"},[a("b",null,"Pilihan E")],-1),Ke={key:0},We={key:12,class:"col-12"},ze=a("label",{class:"form-label"},[a("b",null,"Jawaban")],-1),Qe=j('<option value="">[ Pilih ]</option><option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option><option value="5">E</option>',6),Ye=[Qe],Ge={key:0,class:"invalid-feedback"},Xe={key:13,class:"col-12"},Ze=a("label",{class:"form-label"},[a("b",null,"Pembahasan")],-1),$e={key:0},ei=a("div",{class:"col-12"},[a("button",{type:"submit",class:"btn btn-primary px-5"},"Submit")],-1);function ii(u,i,o,t,ti,ai){const C=U("Head"),T=U("Link"),y=U("Editor");return r(),n(V,null,[f(C,null,{default:A(()=>[H]),_:1}),a("div",O,[a("div",J,[K,a("div",W,[a("div",z,[a("div",Q,[a("div",Y,[f(T,{href:`/admin/question-titles/${o.questionTitle.id}/questions`,class:"btn btn-primary mt-2 mt-lg-0"},{default:A(()=>[G]),_:1},8,["href"])])]),a("form",{onSubmit:i[15]||(i[15]=B((...e)=>t.submit&&t.submit(...e),["prevent"])),class:"row g-3"},[a("div",X,[Z,w(a("select",{"onUpdate:modelValue":i[0]||(i[0]=e=>t.form.type=e),class:k([{"is-invalid":o.errors.type},"form-select"])},ie,2),[[E,t.form.type]]),o.errors.type?(r(),n("div",te,b(o.errors.type),1)):c("",!0)]),o.questionTitle.add_value_category==1&&o.questionTitle.assessment_type==1?(r(),n("div",ae,[oe,w(a("select",{"onUpdate:modelValue":i[1]||(i[1]=e=>t.form.value_category_id=e),class:k([{"is-invalid":o.errors.value_category_id},"form-select"])},[le,(r(!0),n(V,null,P(o.valueCategories,(e,g)=>(r(),n("option",{key:g,value:e.id},b(e.name),9,re))),128))],2),[[E,t.form.value_category_id]]),o.errors.value_category_id?(r(),n("div",ne,b(o.errors.value_category_id),1)):c("",!0)])):c("",!0),t.form.type==2?(r(),n("div",se,[de,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.direction,"onUpdate:modelValue":i[2]||(i[2]=e=>t.form.direction=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.direction?(r(),n("div",ce,b(o.errors.direction),1)):c("",!0)])):c("",!0),t.form.type==1?(r(),n("div",ue,[me,w(a("select",{"onUpdate:modelValue":i[3]||(i[3]=e=>t.form.audio_input=e),class:k([{"is-invalid":o.errors.audio_input},"form-select"])},ve,2),[[E,t.form.audio_input]]),o.errors.audio_input?(r(),n("div",fe,b(o.errors.audio_input),1)):c("",!0)])):c("",!0),t.form.type==1&&t.form.audio_input==1?(r(),n("div",ge,[ye,a("input",{type:"file",class:k(["form-control",{"is-invalid":o.errors.audio}]),onInput:i[4]||(i[4]=e=>t.form.audio=e.target.files[0]),placeholder:"Audio"},null,34),o.errors.audio?(r(),n("div",he,b(o.errors.audio),1)):c("",!0)])):c("",!0),t.form.type==1&&t.form.audio_input==1?(r(),n("div",ke,[we,w(a("input",{type:"number",class:k(["form-control",{"is-invalid":o.errors.audio_played_limit}]),"onUpdate:modelValue":i[5]||(i[5]=e=>t.form.audio_played_limit=e),placeholder:"Batasan Audio Bisa Diputar"},null,2),[[q,t.form.audio_played_limit]]),o.errors.audio_played_limit?(r(),n("div",Ee,b(o.errors.audio_played_limit),1)):c("",!0)])):c("",!0),t.form.type==1&&t.form.audio_input==1?(r(),n("div",Ue,[Ae,w(a("input",{type:"number",class:k(["form-control",{"is-invalid":o.errors.audio_answer_time}]),"onUpdate:modelValue":i[6]||(i[6]=e=>t.form.audio_answer_time=e),placeholder:"Batas Waktu Menjawab Sesudah Audio Di Putar"},null,2),[[q,t.form.audio_answer_time]]),o.errors.audio_answer_time?(r(),n("div",Ve,b(o.errors.audio_answer_time),1)):c("",!0)])):c("",!0),t.form.type==1?(r(),n("div",qe,[je,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.question,"onUpdate:modelValue":i[7]||(i[7]=e=>t.form.question=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.question?(r(),n("div",Ce,b(o.errors.question),1)):c("",!0)])):c("",!0),Te,1<=o.questionTitle.total_choices&&t.form.type==1?(r(),n("div",De,[xe,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.option_1,"onUpdate:modelValue":i[8]||(i[8]=e=>t.form.option_1=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.option_1?(r(),n("div",Re,b(o.errors.option_1),1)):c("",!0)])):c("",!0),2<=o.questionTitle.total_choices&&t.form.type==1?(r(),n("div",Le,[Be,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.option_2,"onUpdate:modelValue":i[9]||(i[9]=e=>t.form.option_2=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.option_2?(r(),n("div",Pe,b(o.errors.option_2),1)):c("",!0)])):c("",!0),3<=o.questionTitle.total_choices&&t.form.type==1?(r(),n("div",Fe,[Ie,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.option_3,"onUpdate:modelValue":i[10]||(i[10]=e=>t.form.option_3=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.option_3?(r(),n("div",Se,b(o.errors.option_3),1)):c("",!0)])):c("",!0),4<=o.questionTitle.total_choices&&t.form.type==1?(r(),n("div",Me,[Ne,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.option_4,"onUpdate:modelValue":i[11]||(i[11]=e=>t.form.option_4=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.option_4?(r(),n("div",He,b(o.errors.option_4),1)):c("",!0)])):c("",!0),5<=o.questionTitle.total_choices&&t.form.type==1?(r(),n("div",Oe,[Je,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.option_5,"onUpdate:modelValue":i[12]||(i[12]=e=>t.form.option_5=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.option_5?(r(),n("div",Ke,b(o.errors.option_5),1)):c("",!0)])):c("",!0),t.form.type==1?(r(),n("div",We,[ze,w(a("select",{"onUpdate:modelValue":i[13]||(i[13]=e=>t.form.answer=e),class:k([{"is-invalid":o.errors.answer},"form-select"])},Ye,2),[[E,t.form.answer]]),o.errors.answer?(r(),n("div",Ge,b(o.errors.answer),1)):c("",!0)])):c("",!0),t.form.type==1?(r(),n("div",Xe,[Ze,f(y,{"api-key":"eadr6nvvbqyre9bvvnh05ugt00j9hutowfg0skm1k18w74iy",modelValue:t.form.discussion,"onUpdate:modelValue":i[14]||(i[14]=e=>t.form.discussion=e),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",file_picker_types:"image",file_picker_callback:function(e,g,h){var l=u.document.createElement("input");l.setAttribute("type","file"),l.setAttribute("accept","image/*"),l.onchange=function(){var s=this.files[0],d=new u.FileReader;d.readAsDataURL(s),d.onload=function(){var p="blobid"+new Date().getTime(),m=u.tinymce.activeEditor.editorUpload.blobCache,v=d.result.split(",")[1],_=m.create(p,s,v);m.add(_),e(_.blobUri(),{title:s.name})}},l.click()}}},null,8,["modelValue","init"]),o.errors.discussion?(r(),n("div",$e,b(o.errors.discussion),1)):c("",!0)])):c("",!0),ei],32)])])])])],64)}const di=M(N,[["render",ii]]);export{di as default};
