(function(e){function t(t){for(var o,s,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,s=1;s<a.length;s++){var r=a[s];0!==n[r]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},s={app:0},n={app:0},i=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-137dd5a2":"d065ce68","chunk-4c2bad76":"719ca9a4","chunk-729d2150":"dbe1933d"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-137dd5a2":1,"chunk-4c2bad76":1,"chunk-729d2150":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var o="css/"+({}[e]||e)+"."+{"chunk-137dd5a2":"81d17d28","chunk-4c2bad76":"0f8337fc","chunk-729d2150":"f4872007"}[e]+".css",n=l.p+o,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===n))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===o||u===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete s[e],m.parentNode.removeChild(m),a(i)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[e]=0})));var o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,a){o=n[e]=[t,a]}));t.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=n[e];if(0!==a){if(a){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,a[1](d)}n[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("85ec"),s=a.n(o);s.a},1449:function(e,t,a){"use strict";var o=a("c182"),s=a.n(o);s.a},"24a1":function(e,t,a){e.exports=a.p+"img/logo_portal_postal.58503de6.png"},"349f":function(e,t,a){},"511d":function(e,t,a){e.exports=a.p+"img/logo_boxcubo_white.9d964ae0.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vue-template"},[o("span",{staticClass:"language"},e._l(e.languages,(function(t){return o("a",{key:t.title,staticClass:"tight",attrs:{href:"#"},on:{click:function(a){return e.changeLocale(t.language)}}},[o("country-flag",{attrs:{country:t.flag}})],1)})),0),o("div",{staticClass:"navbar navbar-default navbar-static-top",style:{backgroundColor:this.params[e.$selected].cores[0]},attrs:{id:"menu"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"navbar-header"},[e._m(0),o("a",{staticClass:"navbar-brand",attrs:{href:"index.html"}},[o("img",{directives:[{name:"show",rawName:"v-show",value:0==e.$selected,expression:"$selected == 0"}],attrs:{src:a("9c5b"),height:"35"}}),o("img",{directives:[{name:"show",rawName:"v-show",value:1==e.$selected,expression:"$selected == 1"}],attrs:{src:a("c562"),height:"35"}}),o("img",{directives:[{name:"show",rawName:"v-show",value:2==e.$selected,expression:"$selected == 2"}],attrs:{src:a("511d"),height:"35"}}),o("img",{directives:[{name:"show",rawName:"v-show",value:3==e.$selected,expression:"$selected == 3"}],attrs:{src:a("6f40"),height:"35"}})])]),o("div",{staticClass:"collapse navbar-collapse"},[o("ul",{staticClass:"nav navbar-nav navbar-right linha"},[o("li",{class:{active:0==e.$selected}},[o("router-link",{attrs:{to:"/home"}},[o("a",{style:{color:this.params[e.$selected].cores[4]},attrs:{herf:"#"}},[e._v("Home")])])],1),o("li",{class:{active:1==e.$selected}},[o("router-link",{attrs:{to:"/portalpostal"}},[o("a",{style:{color:this.params[e.$selected].cores[4]},attrs:{herf:"#"}},[e._v("Portal Postal")])])],1),o("li",{class:{active:2==e.$selected}},[o("router-link",{attrs:{to:"/boxcubo"}},[o("a",{style:{color:this.params[e.$selected].cores[4]},attrs:{herf:"#"}},[e._v("Boxcubo")])])],1),o("li",{class:{active:3==e.$selected}},[o("a",{staticClass:"hands",style:{color:this.params[e.$selected].cores[4]},attrs:{herf:"#"},on:{click:function(t){return e.scroll("#contato")}}},[e._v(e._s(e.$t("contato")))])])])])])]),o("Canvas",{attrs:{slogan:e.$t("inicio")[e.$selected].slogan,msg:e.$t("inicio")[e.$selected].msg,shapeColors:this.params[e.$selected].cores,login:this.$selected}}),o("div",{attrs:{id:"app"}},[o("router-view")],1),o("Contato",{staticClass:"pt-lg",attrs:{id:"contato"}}),o("Footer"),e._m(1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggle",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse"}},[a("span",{staticClass:"icon icon-bar"}),a("span",{staticClass:"icon icon-bar"}),a("span",{staticClass:"icon icon-bar"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"go-top",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-angle-up"})])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"row",style:{backgroundColor:e.shapeColors[0]}},[a("div",{staticClass:"col-sm-12 col-md-8 col-lg-6 pd"},[a("h2",{staticClass:"wow fadeInUp",style:{color:e.shapeColors[4]},attrs:{"data-wow-delay":"0.6s"}},[e._v(e._s(e.slogan))]),a("p",{staticClass:"wow fadeInUp text-justify",style:{color:e.shapeColors[4]},attrs:{"data-wow-delay":"0.8s"}},[e._v(e._s(e.msg))]),1==e.login?a("button",{staticClass:"btn btn-primary-outline",on:{click:e.showModal}},[e._v(" Login Portal Postal ")]):e._e(),2==e.login?a("button",{staticClass:"btn btn-boxcubo",on:{click:function(t){return t.stopPropagation(),e.showModal(t)}}},[e._v(" "+e._s(e.$t("loginbtnbox"))+" ")]):e._e()])]),a("canvas",{staticClass:"bg-gray",style:{borderColor:e.shapeColors[0]},attrs:{id:"waves"}}),1==e.login?a("ModalLogin",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal}}):e._e(),2==e.login?a("ModalLoginBox",{directives:[{name:"show",rawName:"v-show",value:e.isModalVisible,expression:"isModalVisible"}],on:{close:e.closeModal}}):e._e()],1)},r=[],l=(a("cb29"),a("a5cf")),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal-fade"}},[o("div",{staticClass:"back",on:{click:e.onClickOutside}},[o("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[o("div",{staticClass:"sm-form"},[o("h5",[o("img",{staticClass:"img-responsive",attrs:{src:a("24a1")}})]),o("h5",[e._v("Login")]),o("div",{staticClass:"form-group col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.agencia,expression:"agencia"}],staticClass:"form-control form-control-sm",attrs:{type:"number",size:"3",placeholder:"agência",maxlength:"3"},domProps:{value:e.agencia},on:{input:function(t){t.target.composing||(e.agencia=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-sm",attrs:{type:"email",placeholder:"usuário"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("passwordToglge",{model:{value:e.senha,callback:function(t){e.senha=t},expression:"senha"}})],1),o("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:function(t){return e.loginPortal()}}},[e._v("Login")]),o("div",{staticClass:"forgot-password"},[o("a",{staticClass:"forgot-password mt-2 mb-4",attrs:{href:"#"}},[e._v(e._s(e.$t("forgotpass")))])])])])])])},u=[],d=(a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group",attrs:{id:"show_hide_password"}},["checkbox"===[e.tipo]?a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"form-control",attrs:{placeholder:"senha",type:"checkbox"},domProps:{checked:Array.isArray(e.inputValue)?e._i(e.inputValue,null)>-1:e.inputValue},on:{input:e.onInputChange,change:function(t){var a=e.inputValue,o=t.target,s=!!o.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);o.checked?i<0&&(e.inputValue=a.concat([n])):i>-1&&(e.inputValue=a.slice(0,i).concat(a.slice(i+1)))}else e.inputValue=s}}}):"radio"===[e.tipo]?a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"form-control",attrs:{placeholder:"senha",type:"radio"},domProps:{checked:e._q(e.inputValue,null)},on:{input:e.onInputChange,change:function(t){e.inputValue=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"form-control",attrs:{placeholder:"senha",type:[e.tipo]},domProps:{value:e.inputValue},on:{input:[function(t){t.target.composing||(e.inputValue=t.target.value)},e.onInputChange]}}),a("div",{staticClass:"input-group-addon"},[a("a",{attrs:{href:"#"}},[a("i",{class:[e.classe],staticStyle:{color:"#2e6da4"},on:{click:function(t){return e.toggleEye()}}})])])])}),m=[],p={name:"passwordToglgev",props:["value"],data:function(){return{tipo:"password",classe:"fa fa-eye-slash",inputValue:this.value}},methods:{onInputChange:function(){this.$emit("input",this.inputValue)},toggleEye:function(){"password"===this.tipo?this.tipo="text":this.tipo="password","fa fa-eye-slash"===this.classe?this.classe="fa fa-eye":this.classe="fa fa-eye-slash"}}},f=p,h=(a("c20b"),a("2877")),g=Object(h["a"])(f,d,m,!1,null,"c8c037b6",null),v=g.exports,b={name:"ModalLogin",components:{passwordToglge:v},data:function(){return{agencia:"",email:"",senha:"",output:""}},methods:{onClickOutside:function(e){"back"==e.target.className&&(this.$emit("close"),document.body.removeEventListener("click",this.event))},loginPortal:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:this.email,senha:this.senha})};console.log(JSON.stringify({login:this.email,senha:this.senha})),fetch("https://portalpostal.com.br/rest/cliente/usuario/login?idEmpresa="+this.agencia,t).then((function(e){return e.json()})).then((function(t){console.log(t);var a=t.data.cliente_usuario;a.dataLoginInMillis=(new Date).getTime(),a.idEmpresa=e.agencia;var o=t.data.cliente,s=t.data.temAcessoPesquisaPostagem;a&&a.token&&(localStorage.setItem("currentUser",JSON.stringify(a)),localStorage.setItem("cliente",JSON.stringify(o)),localStorage.setItem("temAcessoPesquisaPostagem",s))})).catch((function(e){this.output=e}))}}},C=b,y=(a("cb0a"),Object(h["a"])(C,c,u,!1,null,"d8197fb8",null)),_=y.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal-fade"}},[o("div",{staticClass:"back",on:{click:e.onClickOutside}},[o("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[o("div",{staticClass:"sm-form"},[o("h5",[o("img",{staticClass:"img-responsive",attrs:{src:a("ad74")}})]),o("h5",[e._v("Login")]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control form-control-sm",attrs:{type:"email",placeholder:"e-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.cnpj,expression:"cnpj"}],staticClass:"form-control form-control-sm",attrs:{type:"email",placeholder:"cnpj"},domProps:{value:e.cnpj},on:{input:function(t){t.target.composing||(e.cnpj=t.target.value)}}})]),o("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(t){return e.loginBoxCubo()}}},[e._v("Login")])])])])])},x=[],P={name:"ModalLoginBox",components:{},data:function(){return{email:"",cnpj:"",output:""}},methods:{onClickOutside:function(e){"back"==e.target.className&&(this.$emit("close"),document.body.removeEventListener("click",this.event))},loginBoxCubo:function(){var e={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"}};fetch("http://www.portalpostal.com.br/ServLoginBox?email="+this.email+"&cnpj="+this.cnpj,e).then((function(e){return console.log(e)})).catch((function(e){this.output=e}))}}},k=P,$=(a("a4b7"),Object(h["a"])(k,w,x,!1,null,"9bfbaec8",null)),E=$.exports,O={name:"Canvas",components:{ModalLoginBox:E,ModalLogin:_},data:function(){return{isModalVisible:!1}},props:{slogan:String,msg:String,cor:String,login:void 0,shapeColors:void 0},watch:{shapeColors:function(e,t){console.log("Prop changed: ",e," | was: ",t),this.canvasOn(e[1],e[2],e[3])}},mounted:function(){this.canvasOn("#F37F80","#68BFD0","#F9C75A")},methods:{showModal:function(e){e.preventDefault(),this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1},canvasOn:function(e,t,a){var o=document.querySelector("#waves"),s=o.getContext("2d"),n=1e3,i=240,r=function(){var e=window.devicePixelRatio||1,t=window.innerWidth/n,a=e*t;o.width=n*a,o.height=i*a,s.scale(a,a),s.globalCompositeOperation="overlay"};r(),window.addEventListener("resize",r);var c="M 1002 -2 H -2 v 74 c 0 1 415.9 195.6 502 11.7 c 50 -133.7 500.6 -12.4 502 -11.7 V -2",u="M 1002 -2 H -2 v 75 c 384 190 570 122.8 502 11.7 c -35 -86.7 87 -119.7 502 -11.7 V -2",d="M 1002 -2 H -2 v 102 c -1 0 262 238 503 -15 c 127 -170 503 -13.7 502 -11.7 V -2",m={d:c},p={d:u},f={d:d},h=function(){s.clearRect(0,0,n,i),s.fillStyle=e,s.fill(new Path2D(m.d)),s.fillStyle=t,s.fill(new Path2D(p.d)),s.fillStyle=a,s.fill(new Path2D(f.d))},g=new l["b"]({repeat:-1,onUpdate:h}),v=l["a"].easeInOut;g.to(m,3,{d:u,ease:v}),g.to(f,3,{d:c,ease:v},"-=2.5"),g.to(p,3,{d:d,ease:v},"-=2.5"),g.to(f,3,{d:u,ease:v}),g.to(p,3,{d:c,ease:v},"-=2.5"),g.to(m,3,{d:d,ease:v},"-=2.5"),g.to(p,3,{d:u,ease:v}),g.to(m,3,{d:c,ease:v},"-=2.5"),g.to(f,3,{d:d,ease:v},"-=2.5")}}},T=O,S=(a("1449"),Object(h["a"])(T,i,r,!1,null,"f82397d4",null)),j=S.exports,A=a("a925");o["a"].use(A["a"]);var M={"pt-br":{inicio:[{slogan:"Entregamos tecnologia",msg:"E simplificamos a sua logística. "},{slogan:"Inovamos. ",msg:"Para deixar a sua experiência de envio pelos Correios melhor ."},{slogan:"n.º 1 do Brasil",msg:"Com mais de 60% do market share a Boxcubo é líder de mercado no segmento de cubagem estática."},{slogan:"Fale conosco",msg:"Acreditamos que a comunicação é alma de qualquer negócio. Gostariamos muito de ouvir o que você tem a nos dizer"}],lampadaTitulo:"Tecnologia para melhores resultados",lampadaTexto:"Somos uma equipe multidisciplinar, especializada em combinar tecnologia e logística. Podemos ajudar sua empresa a redesenhar e digitalizar seus processos. ",faixascc4:'"O coração e a alma da empresa são criatividade e inovação." - Bob Iger',featuresscc4:[{text:"Conheça a máquina de cubagem estática mais vendida no Brasil.",head:"BOXCUBO"},{text:"Sistema de operação, gestão e comunicação com clientes. O melhor para agências de Correios Franqueadas.",head:"PORTAL POSTAL"}],history:"Nossa história",items:[{type:"Plataforma Hoito",content:"Criada a primeira plataforma online para acompanhamento e interação de clientes com agências de Correios."},{type:"Portal Postal",content:"Em consonância ao mundo em digitalização, criamos o Portal Postal. "},{type:"Pré-postagem",content:"Primeiro sistema a utilizar etiquetas de pré-postagem. "},{type:"Boxcubo",content:"Desenvolvemos a primeira máquina de cubagem estática para agências de Correios. "},{type:"Reconhecimento",content:"Ganhamos a certificação UX dos Correios. "}],contato:"Fale conosco",administrativo:"Administrativo",comercial:"Comercial",suporte:"Suporte",textoFaixa:"Mais facilidades",saibaMais:"Quer saber mais",seunome:"Seu nome",seuemail:"Seu email",seutelefone:"Seu telefone",suamensagem:"Sua mensagem",enviar:"Enviar",featuresportal:[{texto:"Envio automático de todas as atualizações de rastreamento da sua encomenda. Em breve também por Whatsapp. ",heading:"Seu cliente atualizado"},{texto:"Nosso sistema registra uma foto de todas as suas encomendas no momento da pesagem. Tenha acesso ao tamanho e peso de todas as suas caixas. ",heading:"Imagem da sua caixa"},{texto:"Integre seu ERP, loja virtual ou marketplace com o Portal Postal. Muito mais rápido e organizado.  ",heading:"Totalmente integrado"},{texto:"Procure por nossos Apps na Google Play ou na Apple Store e tenha controle total de seus envios diretamente do seu telefone. ",heading:"Apps Android e IOS"}],objetos:"Objetos processados/mês",empresas:"Empresas atendidas",conceitobox:"Um conceito inovador",textbox:"Podendo ser facilmente integrada a qualquer software, a BOXCUBO é a unica solução que pode ser adquirida sem nenhum investimento inicial. ",objetosbox:"Objetos medidos/mês",clients:"Clientes",video1T:"REPENSE",video1Tx:"A maneira como pesa e mede suas caixas ",video2T:"REDUZA",video2Tx:"Tempo e recursos no porcesso de medição. ",video3T:"REVISE",video3Tx:"Seus objetos através de imagem. ",forgotpass:"Esqueceu a senha?",loginbtnbox:"login área do cliente"},en:{inicio:[{slogan:"We deliver technology",msg:"To keep logistics simple."},{slogan:"Innovation",msg:"To make your postal experience better."},{slogan:"Brazil`s n.º 1",msg:"Holding more than 60% of market share, Boxcubo is the leadership in static dimensioning and cubing system."},{slogan:"Talk to us",msg:"Comunication is the key. We´d be pleased to hear from you."}],lampadaTitulo:"We can help you",lampadaTexto:"We are a multidisciplinary team, specialized in combining technology and logistics. We can help your company redesign and turn your processes digital. ",faixascc4:'"The heart and soul of the company is creativity and innovation." - Bob Iger',featuresscc4:[{text:"Discover the best-selling static cubing and weighing system in Brazil.",head:"BOXCUBO"},{text:"The best system for operation and management of AGFs and integrated communication with customers.",head:"PORTAL POSTAL"}],history:"Our history",items:[{type:"Plataforma Hoito",content:"Developed the first system for monitoring and interacting with customers online for post offices. "},{type:"Portal Postal",content:"We created the Postal Portal to respond to a world in digitalization. "},{type:"Shipping label",content:"First system to use pre shipping label. "},{type:"Boxcubo",content:"First static cubing machine for post offices. "},{type:"Acknowledgment",content:"We got the UX certification from Correios. "}],contato:"Contact us",administrativo:"Administration",comercial:"Sales",suporte:"Support",saibaMais:"To know more",textoFaixa:"More Features",seunome:"Your name",seuemail:"Your email",seutelefone:"Your phone",suamensagem:"Your Menssage",enviar:"Send",featuresportal:[{texto:"Automatic email all tracking updates for your order. Coming soon, also by Whatsapp ",heading:"Update your client"},{texto:"Our system records a photo of all your orders at the time of weighing. Get access to the size and weight of all your boxes. ",heading:"Picture of your box"},{texto:"Integrate your ERP, online store or marketplace with the Postal Portal. Much faster and more organized. ",heading:"Fully integrated"},{texto:"Search for our Apps on Google Play and Apple Store and get full control of your shipments directly from your phone.",heading:"Android and IOS apps"}],objetos:"Sent objects/month",empresas:"Companies using",conceitobox:"A new concept",textbox:"Being able to be easily integrated into any software, BOXCUBO is the only solution that can be purchased without any initial investment. ",objetosbox:"Measured packages/month",clients:"Clients",video1T:"RETHINK",video1Tx:"The way you weigh and measure your boxes. ",video2T:"REDUCE",video2Tx:"Time and resources in the measurement process. ",video3T:"CHECK",video3Tx:"Your objects through image.",forgotpass:"Forgot your password?",loginbtnbox:"login client area"}},B=new A["a"]({locale:"pt-br",fallbackLocale:"en",messages:M}),V=B,L=a("eea2"),N=a("f13c"),F=a.n(N),q=a("7737"),I={name:"App",components:{Contato:q["default"],Canvas:j,CountryFlag:L["a"]},data:function(){return{languages:[{flag:"us",language:"en",title:"English"},{flag:"br",language:"pt-br",title:"Português"}],params:[{id_:1,cores:["#FEE2C2","#F37F80","#68BFD0","#F9C75A","#33475B"]},{id_:2,cores:["#2CB0D0","#a8abad","#03adce","#444444","white"]},{id_:3,cores:["#FF6837","#ff584d","#ffdcad","#444444","white"]},{id_:4,cores:["black","#00d67e","#de00ff","#ff9c00"]}]}},watch:{$route:function(e,t){console.log(t.meta),this.$selected=e.meta.sel}},methods:{changeLocale:function(e){V.locale=e},scroll:function(e){F.a.scrollTo(e)}}},D=I,U=(a("034f"),Object(h["a"])(D,s,n,!1,null,null,null)),z=U.exports,H=a("8c4f");o["a"].use(H["a"]);var R=[{path:"/home",name:"home",component:function(){return a.e("chunk-729d2150").then(a.bind(null,"2c09"))},meta:{sel:0}},{path:"/",name:"home",component:function(){return a.e("chunk-729d2150").then(a.bind(null,"2c09"))},meta:{sel:0}},{path:"/portalpostal",name:"portalpostal",component:function(){return a.e("chunk-4c2bad76").then(a.bind(null,"7a22"))},meta:{sel:1}},{path:"/boxcubo",name:"boxcubo",component:function(){return a.e("chunk-137dd5a2").then(a.bind(null,"0533"))},meta:{sel:2}},{path:"/contato",name:"contato",component:function(){return Promise.resolve().then(a.bind(null,"7737"))},meta:{sel:3}}],W=new H["a"]({mode:"history",base:"/",routes:R}),G=W,J=a("bc3a"),X=a.n(J),Y=a("a7fe"),K=a.n(Y),Q=a("0a63"),Z=a.n(Q),ee=a("c28b"),te=a.n(ee);o["a"].prototype.$selected=0,o["a"].component("country-flag",L["a"]),o["a"].config.productionTip=!1,o["a"].use(K.a,X.a,Z.a,te.a,F.a),o["a"].config.productionTip=!1,new o["a"]({router:G,i18n:V,render:function(e){return e(z)}}).$mount("#app")},"693f":function(e,t,a){},"6f40":function(e,t,a){e.exports=a.p+"img/logo_scc4_white.b6be66d1.png"},"742d":function(e,t,a){},7737:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{attrs:{id:"contact"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("h2",{staticClass:"text-center"},[e._v(e._s(e.$t("contato")))]),a("div",{staticClass:"wow fadeInUp col-md-6 col-sm-6 contact-detail",attrs:{"data-wow-delay":"0.6s"}},[a("div",{staticClass:" col-md-6 col-sm-6 "},[a("div",{staticClass:"contact-detail-1"},[a("h3",[e._v("Headquarter")]),a("p",{staticClass:"small"},[e._v("Estrada Haroldo Soares Glavan, 4382")]),a("p",{staticClass:"small"},[e._v("CEP 88050-005 - Casa 01")]),a("p",{staticClass:"small"},[e._v("Cacupé - Florianópolis/SC")]),a("div",{staticClass:"contact-detail-2"},[a("h4",[e._v(e._s(e.$t("administrativo")))]),a("p",{staticClass:"small"},[e._v("atendimento01@scc4.com.br")]),e._m(0)])]),a("div",{staticClass:"contact-detail-2"},[a("h4",[e._v(e._s(e.$t("comercial")))]),a("p",{staticClass:"small"},[e._v("comercial01@scc4.com.br")]),e._m(1)])]),a("div",{staticClass:"col-md-6 col-sm-6"},[a("div",{staticClass:"contact-detail-1"},[a("h3",[e._v(e._s(e.$t("suporte")))]),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11)])])]),a("div",{staticClass:"wow fadeInUp col-md-6 col-sm-6",attrs:{"data-wow-delay":"0.4s"}},[a("form",{attrs:{action:"contact.php",method:"post"}},[a("div",{staticClass:"col-md-6 col-sm-6"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:e.$t("seunome"),required:""}})]),a("div",{staticClass:"col-md-6 col-sm-6"},[a("input",{staticClass:"form-control",attrs:{type:"email",placeholder:e.$t("seuemail"),required:""}})]),a("div",{staticClass:"col-md-6 col-sm-12"},[a("input",{staticClass:"form-control",attrs:{type:"tel",placeholder:e.$t("seutelefone"),required:""}})]),a("div",{staticClass:"col-md-12 col-sm-12"},[a("textarea",{staticClass:"form-control",attrs:{placeholder:e.$t("suamensagem"),rows:"6",required:""}})]),a("div",{staticClass:"col-md-4 col-sm-6"},[a("input",{staticClass:"form-control",attrs:{type:"submit"},domProps:{value:e.$t("enviar")}})])])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (48) 4042-1778")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-whatsapp pr-10"}),e._v(" +55 (48) 9 9915-0278")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (11) 4210-0340")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (19) 4042-5063")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (31) 4042-1156")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (41) 4042-7109")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (43) 4052-9436")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (48) 4042-1778")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (51) 4042-1825")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (81) 4042-1943")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-phone pr-10"}),e._v(" +55 (85) 4042-1179")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small"},[a("i",{staticClass:"fa fa-whatsapp pr-10"}),e._v(" +55 (48) 9 9915-0172")])}],n={name:"Contato"},i=n,r=(a("f5ed"),a("2877")),l=Object(r["a"])(i,o,s,!1,null,"8d236212",null);t["default"]=l.exports},"85ec":function(e,t,a){},"9c5b":function(e,t,a){e.exports=a.p+"img/logo_scc4.424588a4.png"},a4b7:function(e,t,a){"use strict";var o=a("349f"),s=a.n(o);s.a},ad2f:function(e,t,a){},ad74:function(e,t,a){e.exports=a.p+"img/logo_boxcubo.96a94fd4.png"},c182:function(e,t,a){},c20b:function(e,t,a){"use strict";var o=a("ad2f"),s=a.n(o);s.a},c562:function(e,t,a){e.exports=a.p+"img/logo_portal_postal_white.d343b403.png"},cb0a:function(e,t,a){"use strict";var o=a("742d"),s=a.n(o);s.a},f5ed:function(e,t,a){"use strict";var o=a("693f"),s=a.n(o);s.a}});
//# sourceMappingURL=app.32f21f38.js.map