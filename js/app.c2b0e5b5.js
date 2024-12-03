(function(){"use strict";var e={7783:function(e,t,s){var a=s(5130),i=s(5931),n=s(6768),o=s(4232);const l={id:"app"},c={class:"profile"},r={class:"contact"},d={class:"language-switcher"},u={class:"modal"},g={class:"modal-title"},m={class:"modal-content"},p={key:0},b={key:1};function h(e,t,s,i,h,k){const f=(0,n.g2)("TtsComponent"),v=(0,n.g2)("NewsComponent");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("div",c,[t[5]||(t[5]=(0,n.Fv)('<div class="profile-img"><img src="https://avatars.githubusercontent.com/u/188633910?v=4" alt="Foto de Perfil" class="evt-img"></div><div class="me"><h1>blackbird</h1><a style="display:flex;align-items:center;justify-content:center;" href="https://youtube.com/@blackbirdsrn?sub_confirmation=1"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="30px" style="padding-right:5px;"><p>@blackbirdsrn</p></a></div>',2)),(0,n.Lk)("p",r,[(0,n.Lk)("label",d,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=t=>e.isEnglish=t),onChange:t[1]||(t[1]=(...e)=>k.toggleLanguage&&k.toggleLanguage(...e))},null,544),[[a.lH,e.isEnglish]]),t[4]||(t[4]=(0,n.Fv)('<span class="slider round"></span><span class="select-en"><img src="https://cdn-icons-png.flaticon.com/512/555/555417.png" width="20px" height="20px"></span><span class="select-ptbr"><img src="https://cdn-icons-png.flaticon.com/128/630/630591.png" width="21px" height="21px"></span>',3))])])]),(0,n.bF)(a.eB,{name:"fade"},{default:(0,n.k6)((()=>[h.selectedLink?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:t[3]||(t[3]=(0,a.D$)(((...e)=>k.closeModal&&k.closeModal(...e)),["self"]))},[(0,n.Lk)("div",u,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>k.closeModal&&k.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h2",g,(0,o.v_)(h.selectedLink),1),(0,n.Lk)("div",m,["GitHub"===h.selectedLink?((0,n.uX)(),(0,n.CE)("p",p," Github ")):(0,n.Q3)("",!0),"dev.to"===h.selectedLink?((0,n.uX)(),(0,n.CE)("p",b)):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(f),(0,n.bF)(v)])}const k={class:"slider-container"},f={class:"card-content"},v={style:{"margin-top":"-10px","margin-left":"40px"}},y=["innerHTML"];function L(e,t,s,a,i,l){const c=(0,n.g2)("slide"),r=(0,n.g2)("navigation"),d=(0,n.g2)("pagination"),u=(0,n.g2)("carousel");return(0,n.uX)(),(0,n.CE)("div",k,[(0,n.bF)(u,{"items-to-show":1.5,pagination:!1,navigation:!0},{addons:(0,n.k6)((()=>[(0,n.bF)(r),(0,n.bF)(d)])),default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.messages,(e=>((0,n.uX)(),(0,n.Wv)(c,{key:e.message_id,class:"card"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",f,[t[0]||(t[0]=(0,n.Lk)("div",{class:"clonett"},[(0,n.Lk)("img",{src:"https://avatars.githubusercontent.com/u/188633910?v=4",alt:"Foto de Perfil",class:"evtt"}),(0,n.Lk)("h3",null,"@blackbirdsrn")],-1)),(0,n.Lk)("p",v,(0,o.v_)(e.message_id),1),(0,n.Lk)("p",{innerHTML:e.text},null,8,y)])])),_:2},1024)))),128))])),_:1})])}var w=s(1114),x={name:"MessageSlider",components:{Carousel:w.FN,Slide:w.q7,Pagination:w.dK,Navigation:w.Vx},data(){return{messages:[{message_id:"#tech",text:this.$t("telegram",{blackbird:"@blackbirdsrn"})},{message_id:"#youtube",text:this.$t("youtube")},{message_id:"",text:this.$t("medias")}]}},watch:{"$i18n.locale":function(){this.updateMessages()}},methods:{enviarEmail(){window.location="mailto:@outlook.com?subject=Tecnologia"},updateMessages(){this.messages[0].text=this.$t("telegram",{blackbird:"@blackbirdsrn"}),this.messages[1].text=this.$t("youtube"),this.messages[2].text=this.$t("medias")}},mounted(){this.updateMessages()}},_=s(1241);const C=(0,_.A)(x,[["render",L],["__scopeId","data-v-28b2f6ae"]]);var M=C;const E={class:"news"},N={class:"cards-container"},T={class:"all-cards"},$=["onClick"],A=["src"],F={class:"card-news"},G={href:"https://www.youtube.com/shorts/_mmnnJTAnmg",style:{color:"black"}},z={class:"modal"},O={class:"modal-title"},I={class:"modal-content"},S={id:"badge-ia"},j={style:{"font-size":"14px"}},X={class:"modal"},B={class:"modal-title"},D={class:"modal-content"},Q={id:"badge-ia"},W={style:{"font-size":"14px"}},H={style:{"font-size":"10px"}},P={class:"modal"},U={class:"modal-title"},V={class:"modal-content"},q={id:"badge-ia"},J={style:{"font-size":"14px"}};function K(e,t,s,i,l,c){return(0,n.uX)(),(0,n.CE)("div",E,[(0,n.Lk)("div",N,[(0,n.Lk)("h2",null,[(0,n.Lk)("span",null,(0,o.v_)(e.$t("principaisvids")),1)]),(0,n.Lk)("div",T,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.news,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,onClick:t=>c.openModal(e),class:"card-news"},[(0,n.Lk)("img",{class:"img-news",src:e.image,alt:"News image"},null,8,A),(0,n.Lk)("h4",null,(0,o.v_)(e.title),1),t[9]||(t[9]=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1))],8,$)))),128)),(0,n.Lk)("div",{class:"card-news",onClick:t[0]||(t[0]=e=>c.openModal("google"))},[t[10]||(t[10]=(0,n.Lk)("img",{class:"img-news",src:"",alt:"News image"},null,-1)),(0,n.Lk)("h4",null,(0,o.v_)(e.$t("google")),1),t[11]||(t[11]=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1))]),(0,n.Lk)("div",F,[(0,n.Lk)("a",G,[t[12]||(t[12]=(0,n.Lk)("img",{class:"img-news",src:"",alt:"News image"},null,-1)),(0,n.Lk)("h4",null,(0,o.v_)(e.$t("glb")),1),t[13]||(t[13]=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1))])])]),(0,n.Lk)("div",{class:"card-news",onClick:t[1]||(t[1]=e=>c.openModal("nvidia"))},[t[14]||(t[14]=(0,n.Lk)("img",{class:"img-news",src:"",alt:"News image"},null,-1)),(0,n.Lk)("h4",null,(0,o.v_)(e.$t("nvidia")),1),t[15]||(t[15]=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1))]),(0,n.Lk)("div",{class:"card-news",onClick:t[2]||(t[2]=e=>c.openModal("bitcoin"))},[t[16]||(t[16]=(0,n.Lk)("img",{class:"img-news",src:"",alt:"News image"},null,-1)),(0,n.Lk)("h4",null,(0,o.v_)(e.$t("bitcoin")),1),t[17]||(t[17]=(0,n.Lk)("i",{id:"external-link",class:"fa fa-external-link"},null,-1))]),(0,n.bF)(a.eB,{name:"fade"},{default:(0,n.k6)((()=>["nvidia"===l.selectedNews?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:t[4]||(t[4]=(0,a.D$)(((...e)=>c.closeModal&&c.closeModal(...e)),["self"]))},[(0,n.Lk)("div",z,[(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h3",O,(0,o.v_)(l.selectedNews.title)+(0,o.v_)(e.$t("nvidia")),1),(0,n.Lk)("div",I,[(0,n.Lk)("span",S,[t[18]||(t[18]=(0,n.Lk)("i",{class:"fa-solid fa-microchip"},null,-1)),(0,n.eW)(" "+(0,o.v_)(e.$t("badgeia")),1)]),(0,n.Lk)("p",j,(0,o.v_)(l.selectedNews.summary)+" "+(0,o.v_)(e.$t("nvidiasummary")),1),t[19]||(t[19]=(0,n.Lk)("p",{style:{"font-size":"10px"}},[(0,n.eW)(" Link: "),(0,n.Lk)("a",{href:"https://www.youtube.com/shorts/uNfgsziy4Ds"},"https://www.youtube.com/shorts/uNfgsziy4Ds")],-1))])])])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(a.eB,null,{default:(0,n.k6)((()=>["google"===l.selectedNews?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:t[6]||(t[6]=(0,a.D$)(((...e)=>c.closeModal&&c.closeModal(...e)),["self"]))},[(0,n.Lk)("div",X,[(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h3",B,(0,o.v_)(l.selectedNews.title)+(0,o.v_)(e.$t("google")),1),(0,n.Lk)("div",D,[(0,n.Lk)("span",Q,[t[20]||(t[20]=(0,n.Lk)("i",{class:"fa-solid fa-microchip"},null,-1)),(0,n.eW)(" "+(0,o.v_)(e.$t("badgeia")),1)]),(0,n.Lk)("p",W,(0,o.v_)(l.selectedNews.summary)+" "+(0,o.v_)(e.$t("googlesummary")),1),(0,n.Lk)("p",H,[(0,n.eW)((0,o.v_)(e.$t("leia"))+": ",1),t[21]||(t[21]=(0,n.Lk)("a",{href:"https://www.youtube.com/shorts/F_tWg3vJSb8"}," https://www.youtube.com/shorts/F_tWg3vJSb8",-1))])])])])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(a.eB,null,{default:(0,n.k6)((()=>["bitcoin"===l.selectedNews?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal-overlay",onClick:t[8]||(t[8]=(0,a.D$)(((...e)=>c.closeModal&&c.closeModal(...e)),["self"]))},[(0,n.Lk)("div",P,[(0,n.Lk)("button",{onClick:t[7]||(t[7]=(...e)=>c.closeModal&&c.closeModal(...e)),class:"close-button"},"×"),(0,n.Lk)("h3",U,(0,o.v_)(l.selectedNews.title)+" "+(0,o.v_)(e.$t("bitcoin")),1),(0,n.Lk)("div",V,[(0,n.Lk)("span",q,[t[22]||(t[22]=(0,n.Lk)("i",{class:"fa-solid fa-microchip"},null,-1)),(0,n.eW)(" "+(0,o.v_)(e.$t("badgeia")),1)]),(0,n.Lk)("p",J,(0,o.v_)(l.selectedNews.summary)+" "+(0,o.v_)(e.$t("bitcoinsummary")),1),t[23]||(t[23]=(0,n.Lk)("p",{style:{"font-size":"10px"}},[(0,n.eW)(" Link: "),(0,n.Lk)("a",{href:"https://youtube.com/shorts/33yHVOXiA_8"}," https://youtube.com/shorts/33yHVOXiA_8")],-1))])])])):(0,n.Q3)("",!0)])),_:1})])])}var Y={data(){return{news:[],selectedNews:null}},methods:{openModal(e){this.selectedNews=e},closeModal(){this.selectedNews=null}},mounted(){}};const R=(0,_.A)(Y,[["render",K]]);var Z=R,ee={data(){return{selectedLink:null}},components:{TtsComponent:M,NewsComponent:Z},computed:{currentLanguage(){return this.$i18n.locale}},methods:{openModal(e){this.selectedLink=e},closeModal(){this.selectedLink=null},toggleLanguage(){const e="pt"===this.currentLanguage?"en":"pt";this.$i18n.locale=e,console.log(e),localStorage.setItem("language",e)}}};const te=(0,_.A)(ee,[["render",h]]);var se=te,ae=s(1387);const ie=[{path:"/",name:"home"}],ne=(0,ae.aE)({history:(0,ae.LA)("/"),routes:ie});var oe=ne;const le={en:{telegram:"Access the channel {blackbird}srn on <a href='https://t.me/ LjTe1cdGQEs5OTcx' target='_blank'>Telegram</a>. <br><button class='email-btn'><a href='t.me/ LjTe1cdGQEs5OTcx' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:30px'> </i></a></button>",youtube:"Help the channel grow on YouTube, subscribe! <br><br><a style='color:black; display:flex; align-items:center; justify-content: center'color:black;  href='https://youtube.com/{blackbird}?sub_confirmation=1'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' width='30px' style='padding-right:5px'/> {blackbird}</a>",medias:"Diverse and useful topics (Sports, Artificial Intelligence, Economy, and Finance) in the context of Technology. Social media: <h3>{blackbird}</h3>",principaisvids:"Principais vídeos",badgeia:"{blackbird}",google:"Google connects its AI assistant (Gemini) with Spotify.",googlesummary:"Google Gemini, the AI assistant, now integrates with Spotify on Android devices. Users can play music using voice commands in English, searching by title, artist, album, or playlist. The integration requires linking Google and Spotify accounts and prioritizes the last music service used. It is the second non-Google app enabled for Gemini.",glb:"Mentes Digitais: Série sobre Inteligência Artificial",nvidia:"🤖 Fugatto: AI by Nvidia",bitcoin:"Guia sobre Bitcoin: A primeira criptomoeda!",bitcoinsummary:"This Infomoney guide covers the history of Bitcoin, the first cryptocurrency, created by Satoshi Nakamoto. It explains its decentralized peer-to-peer operation, mining (transaction validation with BTC rewards), purchasing methods (exchanges, ETFs, funds), the differences between Bitcoin and centralized digital currencies, and its volatility. Despite the creator's anonymity, the blockchain's security and investment potential are highlighted, but the high risk is also emphasized."},pt:{telegram:"Acesse o canal {blackbird} no <a href='https://t.me/ LjTe1cdGQEs5OTcx' target='_blank'>Telegram</a>. <br><button class='email-btn'><a href='https://t.me/ LjTe1cdGQEs5OTcx' target='_blank'> <i class='fab fa-telegram-plane' style='font-size:30px'> </i></a></button>",youtube:"Ajude o canal a crescer no YouTube, inscreva-se! <br><br><a style='color:black; display:flex; align-items:center; justify-content: center'color:black;  href='https://youtube.com/{blackbird}?sub_confirmation=1'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' width='30px' style='padding-right:5px'/> {blackbird}</a>",medias:"Assuntos diversos e úteis (Esporte, inteligência Artificial, Economia e Finanças) no contexto da Tecnologia.  Mídias socias: <h3>{blackbird}</h3>",principaisvids:"Principais vídeos",badgeia:"{blackbird}",google:"Google conecta seu assistente de IA (Gemini) com o Spotify.",googlesummary:"O Google Gemini, assistente de IA, agora integra o Spotify em aparelhos Android.  Usuários podem reproduzir músicas via comandos de voz em inglês, buscando por título, artista, álbum ou playlist.  A integração exige vincular contas Google e Spotify, e prioriza o último serviço de música usado.  É o segundo aplicativo que não é do Google habilitado ao Gemini.",glb:"Mentes Digitais: Série sobre Inteligência Artificial",nvidia:"🤖 Nova IA da Nvidia: Fugatto",bitcoin:"Guia sobre Bitcoin: A primeira criptomoeda!",bitcoinsummary:"Este guia da Infomoney aborda a história do Bitcoin, a 1ª criptomoeda, criada por Satoshi Nakamoto.  Explica seu funcionamento descentralizado (peer-to-peer), a mineração (validação de transações com recompensa em BTC),  a compra (exchanges, ETFs, fundos),  as diferenças entre Bitcoin e moedas digitais centralizadas, e sua volatilidade.  Apesar do anonimato do criador, a segurança da blockchain e o potencial de investimento são destacados, mas o alto risco também é alertado."}},ce=(0,i.hU)({locale:"pt",messages:le});(0,a.Ef)(se).use(oe).use(ce).mount("#app")}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,a,i,n){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],n=e[d][2];for(var l=!0,c=0;c<a.length;c++)(!1&n||o>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[c])}))?a.splice(c--,1):(l=!1,n<o&&(o=n));if(l){e.splice(d--,1);var r=i();void 0!==r&&(t=r)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,i,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,o=a[0],l=a[1],c=a[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(c)var d=c(s)}for(t&&t(a);r<o.length;r++)n=o[r],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},a=self["webpackChunkblackbird"]=self["webpackChunkblackbird"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(7783)}));a=s.O(a)})();
//# sourceMappingURL=app.c2b0e5b5.js.map