import{L as p}from"./Layout.0e8791d0.js";import{L as u,H as b,r as i,o as s,c as t,a as o,w as r,b as e,F as c,e as h,q as g,t as n,f as v}from"./app.03e15cc8.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";const x={layout:p,components:{Link:u,Head:b},props:{categories:Object}},k={class:"page-wrapper"},L={class:"page-content"},y=g('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Ujian</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Kategori</li></ol></nav></div></div><h4 class="mb-0 text-uppercase text-center">Pilih Kategori Sesuai Minatmu.....</h4><hr>',3),N={class:"row"},j={class:"col-xs-12 col-sm-6 col-md-6 col-lg-4"},w={class:"card border-bottom border-3 border-0"},H=["src"],S={class:"card-body"},V={class:"card-title"},$=e("p",{class:"card-text"},"Pelajari dan pahami sebaik mungkin materi yang tersedia. Raih nilai terbaik di kategori ini.",-1),B=e("hr",null,null,-1),K={class:"text-center"},C=v("Selengkapnya");function F(l,P,d,q,A,D){const m=i("Head"),_=i("Link");return s(),t(c,null,[o(m,null,{default:r(()=>[e("title",null,n(l.appName)+" - Kategori",1)]),_:1}),e("div",k,[e("div",L,[y,e("div",N,[(s(!0),t(c,null,h(d.categories,a=>(s(),t("div",j,[e("div",w,[e("img",{src:"/storage/upload_files/categories/"+a.thumbnail,class:"card-img-top"},null,8,H),e("div",S,[e("h5",V,n(a.name),1),$,B,e("div",K,[o(_,{href:`/user/categories/${a.id}/exams`,class:"btn btn-outline-primary"},{default:r(()=>[C]),_:2},1032,["href"])])])])]))),256))])])])],64)}const O=f(x,[["render",F]]);export{O as default};
