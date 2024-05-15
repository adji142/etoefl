import{L as f}from"./Layout.0e8791d0.js";import{P as k}from"./Pagination.5ce7decb.js";import{L as y,H as x,r as d,o as e,c as s,a as o,w as r,b as a,d as i,F as m,e as L,q as N,t as n,f as b}from"./app.03e15cc8.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";const T={layout:f,components:{Link:y,Head:x,Pagination:k},props:{transactions:Object},methods:{formatPrice(c){return"Rp."+(c/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},D={class:"page-wrapper"},w={class:"page-content"},B=N('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">Transaksi</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Data Transaksi</li></ol></nav></div></div>',1),S={class:"card"},V={class:"card-body"},H=a("div",{class:"d-flex align-items-center"},[a("div",null,[a("h6",{class:"mb-3"},"Data Transaksi")])],-1),j={class:"table-responsive"},C={class:"table mb-0"},F=a("thead",{class:"table-light"},[a("tr",null,[a("th",null,"No"),a("th",null,"Kode Transaksi"),a("th",null,"Kategori"),a("th",null,"Judul Ujian"),a("th",null,"Nama User"),a("th",null,"Batas Pembayaran"),a("th",null,"Total"),a("th",null,"Status"),a("th",null,"Aksi")])],-1),A={key:0,align:"center",colspan:"9"},I={key:0,class:"badge bg-warning"},K={key:1,class:"badge bg-primary"},U={key:2,class:"badge bg-danger"},q={key:3,class:"badge bg-success"},E={class:"btn-group"},G=b("Lihat Detail"),J=b("Lihat Invoice");function O(c,h,l,R,z,p){const g=d("Head"),u=d("Link"),v=d("Pagination");return e(),s(m,null,[o(g,null,{default:r(()=>[a("title",null,n(c.appName)+" - Data Transaksi",1)]),_:1}),a("div",D,[a("div",w,[B,a("div",S,[a("div",V,[H,a("div",j,[a("table",C,[F,a("tbody",null,[a("tr",null,[l.transactions.data.length?i("",!0):(e(),s("td",A,"Data Transaksi kosong"))]),(e(!0),s(m,null,L(l.transactions.data,(t,_)=>(e(),s("tr",{key:_},[a("td",null,n(++_+(l.transactions.current_page-1)*l.transactions.per_page),1),a("td",null,n(t.code),1),a("td",null,n(t.exam.category.name),1),a("td",null,n(t.exam.title),1),a("td",null,n(t.user.name),1),a("td",null,n(t.maximum_payment_time),1),a("td",null,n(p.formatPrice(t.total_purchases)),1),a("td",null,[t.transaction_status=="pending"?(e(),s("span",I,"Pending")):i("",!0),t.transaction_status=="paid"?(e(),s("span",K,"Lunas")):i("",!0),t.transaction_status=="failed"?(e(),s("span",U,"Gagal")):i("",!0),t.transaction_status=="done"?(e(),s("span",q,"Selesai")):i("",!0)]),a("td",null,[a("div",E,[o(u,{href:`/admin/transactions/${t.id}`,class:"btn btn-success btn-space"},{default:r(()=>[G]),_:2},1032,["href"]),o(u,{href:`/admin/transactions/${t.id}/invoice`,class:"btn btn-warning btn-space"},{default:r(()=>[J]),_:2},1032,["href"])])])]))),128))])])]),o(v,{links:l.transactions.links,align:"end"},null,8,["links"])])])])])],64)}const Y=P(T,[["render",O]]);export{Y as default};
