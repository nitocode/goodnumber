import{d as N,o as u,c,a as t,w as K,b as W,p as U,e as G,u as T,r as f,f as M,n as x,g as J,t as _,h as L,i as C,j as Q,k as R,R as X,l as Z,_ as ee,m as te,q as se,F as I,s as z,v as ae,x as ie,y as oe,z as ne,A as re,B as le,C as ue,D as de,E as ce}from"./vendor.205839e8.js";const pe=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};pe();const me=[{id:1,date:"2022-2-20",title:"Quelle est l'ann\xE9e de cr\xE9ation de twitch&nbsp;?",answer:2011,linkForMore:"https://fr.wikipedia.org/wiki/Twitch",attemptLimit:4},{id:2,date:"2022-2-21",title:"Combien existe-t-il de langues dans le monde&nbsp;? (en centaines ou milliers)",answer:7e3,linkForMore:"https://1to1progress.fr/blog/2021/04/30/combien-de-langues-dans-le-monde/",attemptLimit:5},{id:3,date:"2022-2-22",title:"Quelle est l'ann\xE9e de fondation de la ville de New\u2011York&nbsp;?",answer:1624,linkForMore:"https://fr.wikipedia.org/wiki/New_York",attemptLimit:6},{id:4,date:"2022-2-23",title:"Combien existe-t-il de constellations astronomiques&nbsp;?",answer:88,linkForMore:"https://fr.wikipedia.org/wiki/Liste_des_constellations",attemptLimit:4},{id:5,date:"2022-2-24",title:"Quelle est la hauteur de la Tour Eiffel&nbsp;? (en m\xE8tres)",answer:324,linkForMore:"https://fr.wikipedia.org/wiki/Tour_Eiffel",attemptLimit:6},{id:6,date:"2022-2-25",title:"Quel est le plus gros QI du monde&nbsp;?",answer:230,linkForMore:"https://fr.wikipedia.org/wiki/Quotient_intellectuel#Records",attemptLimit:5},{id:7,date:"2022-2-26",title:"Combien d'\xE9pisodes poss\xE8de la plus longue s\xE9rie termin\xE9e au monde&nbsp;?",answer:18262,linkForMore:"https://fr.wikipedia.org/wiki/Haine_et_Passion",attemptLimit:10},{id:8,date:"2022-2-27",title:"Combien d'os poss\xE8de un corps humain adulte&nbsp;?",answer:206,linkForMore:"https://fr.wikipedia.org/wiki/Squelette_humain",attemptLimit:4},{id:9,date:"2022-2-28",title:"Combien de temps la lumi\xE8re du soleil met-elle pour nous parvenir&nbsp;? (en minutes)",answer:8,linkForMore:"https://fr.wikipedia.org/wiki/Vitesse_de_la_lumi%C3%A8re",attemptLimit:4},{id:10,date:"2022-3-1",title:"Combien y a-t-il de signes astrologiques chinois ?",answer:12,linkForMore:"https://fr.wikipedia.org/wiki/Astrologie_chinoise",attemptLimit:3},{id:11,date:"2022-3-2",title:"Combien y a-t-il de joueurs sur le terrain dans une \xE9quipe de base-ball ?",answer:9,linkForMore:"https://fr.wikipedia.org/wiki/Baseball",attemptLimit:4},{id:12,date:"2022-3-3",title:"A combien d'ann\xE9es de mariages correspondent les noces de papier ?",answer:37,linkForMore:"https://fr.wikipedia.org/wiki/Anniversaire_de_mariage",attemptLimit:7},{id:13,date:"2022-3-4",title:"En quelle ann\xE9e Angela Merkel a-t-elle \xE9t\xE9 nomm\xE9e chanceli\xE8re d'Allemagne ?",answer:2005,linkForMore:"https://fr.wikipedia.org/wiki/Angela_Merkel",attemptLimit:4},{id:14,date:"2022-3-5",title:"Combien font un + la moiti\xE9 d'un quart de 8 ?",answer:2,linkForMore:"https://fr.wikipedia.org/wiki/2_(chiffre)",attemptLimit:2},{id:15,date:"2022-3-6",title:"Combien y a-t-il de miles \xE0 parcourir dans la course d'Indianapolis ?",answer:500,linkForMore:"https://fr.wikipedia.org/wiki/500_miles_d%27Indianapolis",attemptLimit:6},{id:16,date:"2022-3-7",title:"Combien de fois Elizabeth Taylor s'est-elle mari\xE9e ?",answer:8,linkForMore:"https://fr.wikipedia.org/wiki/Elizabeth_Taylor",attemptLimit:4},{id:17,date:"2022-3-8",title:"Quel num\xE9ro porte le d\xE9partement du Loir-et-Cher ?",answer:41,linkForMore:"https://fr.wikipedia.org/wiki/Loir-et-Cher",attemptLimit:6},{id:18,date:"2022-3-9",title:"Combien d'ann\xE9es a dur\xE9 le plus long r\xE8gne de tous les temps ?",answer:82,linkForMore:"https://fr.wikipedia.org/wiki/Sobhuza_II",attemptLimit:7},{id:19,date:"2022-3-10",title:"Combien de c\xF4t\xE9s poss\xE8de un enn\xE9agone ?",answer:9,linkForMore:"https://fr.wikipedia.org/wiki/Enn%C3%A9agone",attemptLimit:3},{id:20,date:"2022-3-11",title:"Quel chiffre effraie la plupart des habitants d'Asie de l'est ?",answer:4,linkForMore:"https://fr.wikipedia.org/wiki/T%C3%A9traphobie",attemptLimit:3}],F=s=>me.filter(a=>new Date(a.date).getTime()===new Date(s).setHours(0,0,0,0))[0],ve=s=>`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`,fe=s=>new Date(s.getTime()-24*60*60*1e3),he=s=>new Date(s.getTime()+24*60*60*1e3),S=N("datemode",{state:()=>({currentDate:ve(new Date),datemode:!1}),getters:{getCurrentDate:s=>s.currentDate},actions:{switch(){this.datemode=!this.datemode},changeCurrentDate(s){this.currentDate=s}}});var _e="/assets/cross.be0a5bfd.svg";var ge=(s,a)=>{const i=s.__vccOpts||s;for(const[n,e]of a)i[n]=e;return i};const we=s=>(U("data-v-f5e6e154"),s=s(),G(),s),ye={class:"rules-container border-2 border-white rounded fixed max-w-[400px] w-5/6 h-[500px] max-h-[90vh] mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll hide-scroll"},ke={class:"text-center p-4 text-sm"},xe=we(()=>t("img",{class:"w-[20px] h-[20px]",src:_e,alt:"croix de fermeture de modal des r\xE8gles"},null,-1)),be=[xe],De=W('<h2 class="font-bold text-lg my-4" data-v-f5e6e154>Comment \xE7a marche\xA0?</h2><p data-v-f5e6e154> Smart Numdle est un quiz quotidien o\xF9 vous devez trouver la bonne r\xE9ponse en un nombre de tentatives limit\xE9. </p><p data-v-f5e6e154>En cas de mauvaise r\xE9ponse un indice vous sera donn\xE9.</p><div class="separator" data-v-f5e6e154></div><p data-v-f5e6e154>1847 : \u{1F53A}<br data-v-f5e6e154>Le r\xE9sultat \xE0 trouver est plus grand.</p><div class="separator" data-v-f5e6e154></div><p data-v-f5e6e154>1400 : \u{1F53B}<br data-v-f5e6e154>Le r\xE9sultat \xE0 trouver est plus petit.</p><div class="separator" data-v-f5e6e154></div><p data-v-f5e6e154>Comparez ensuite votre r\xE9sultat avec vos amis\xA0!</p><p data-v-f5e6e154>Bonne chance\xA0!</p>',10),$e={emits:["close"],setup(s,{emit:a}){const i=()=>{a("close")};return(n,e)=>(u(),c("div",{class:"rules-modal fixed z-50 h-screen w-screen left-0 top-0",onClick:e[1]||(e[1]=K(r=>i(),["self"]))},[t("div",ye,[t("div",ke,[t("div",{class:"fixed top-4 right-4 cursor-pointer",onClick:e[0]||(e[0]=r=>i())},be),De])])]))}};var Le=ge($e,[["__scopeId","data-v-f5e6e154"]]),Ce="/assets/time.ac189514.svg",Se="/assets/rules.5cc81703.svg";const Te={class:"flex justify-between items-center mx-4 mb-8 relative z-10"},Fe=t("h1",{class:"text-2xl font-mono"},"SMART NUMDLE",-1),Me={class:"flex justify-between w-[80px]"},Ee={emits:["open"],setup(s,{emit:a}){const i=()=>{a("open")},n=S(),e=()=>{n.switch()};return(r,o)=>(u(),c("header",Te,[Fe,t("div",Me,[t("img",{class:"w-[32px] h-[32px] cursor-pointer",onClick:o[0]||(o[0]=l=>e()),src:Ce,alt:"icone pour ouvrir les r\xE8gles du jeu"}),t("img",{class:"w-[32px] h-[32px] cursor-pointer",onClick:o[1]||(o[1]=l=>i()),src:Se,alt:"icone pour ouvrir les r\xE8gles du jeu"})])]))}};var qe="/assets/left.8b41bb26.svg",Ae="/assets/right.ac3d04ce.svg";const V=N({id:"history",state:()=>({questionHistory:T("questionHistory",[]),bestStreak:T("bestStreak",0),currentStreak:T("currentStreak",0)}),getters:{history:s=>s.questionHistory,getTodaysQuestion:s=>s.questionHistory.filter(a=>new Date(a.date).getTime()===new Date().setHours(0,0,0,0))[0],getQuestionHistoryByDate:s=>a=>s.questionHistory.filter(i=>new Date(i.date).getTime()===new Date(a).setHours(0,0,0,0))[0]},actions:{addAttemptToQuestion(s,a,i,n){const e=this.questionHistory.filter(r=>new Date(r.date).getTime()===new Date(s.date).getTime())[0];e?(e.attempts.push(a),e.hasFound=i,e.hasFinished=n):this.questionHistory.push({id:s.id,date:s.date,attempts:[a],hasFound:i,hasFinished:n})}}}),He={class:"relative z-10 flex flex-row justify-around items-center"},Qe=t("img",{class:"w-[28px] h-[28px]",src:qe,alt:"left arrow image"},null,-1),Re=[Qe],Ie={key:0},ze=t("img",{class:"w-[28px] h-[28px]",src:Ae,alt:"right arrow image"},null,-1),Be=[ze],Ne={setup(s){V();const a=S(),i=f(null),n=f(null),e=f(null),r=new Date().setHours(0,0,0,0),o=()=>{n.value=new Date(a.currentDate).getTime(),i.value=new Date(a.currentDate).toLocaleDateString(),e.value=F(a.currentDate)},l=()=>{a.changeCurrentDate(he(new Date(a.currentDate))),o()},g=()=>{a.changeCurrentDate(fe(new Date(a.currentDate))),o()};return M(()=>{o()}),(m,w)=>(u(),c("div",He,[t("div",{class:x(["cursor-pointer opacity-0",{"opacity-100":e.value&&e.value.id>1}]),onClick:w[0]||(w[0]=D=>e.value&&e.value.id>1?g():null)},Re,2),t("div",null,[t("p",null,[J(_(i.value)+" ",1),e.value?(u(),c("span",Ie,"- #"+_(e.value.id),1)):L("",!0)])]),t("div",{class:x(["cursor-pointer opacity-0",{"opacity-100":n.value<C(r)}]),onClick:w[1]||(w[1]=D=>n.value<C(r)?l():null)},Be,2)]))}};const Ve={class:"app-container text-white min-h-screen px-4 py-8"},Pe={class:"max-w-[500px] mx-auto"},Oe={setup(s){const a=S(),i=f(!1),n=()=>{i.value=!0},e=()=>{i.value=!1},r=Z();return M(()=>{let o=localStorage.getItem("path");o&&(localStorage.removeItem("path"),r.push(o))}),(o,l)=>(u(),c("div",Ve,[i.value?(u(),Q(Le,{key:0,onClose:l[0]||(l[0]=g=>e())})):L("",!0),t("div",Pe,[R(Ee,{onOpen:l[1]||(l[1]=g=>n())}),C(a).datemode?(u(),Q(Ne,{key:0})):L("",!0),R(C(X))])]))}},Ye="modulepreload",B={},je="/",Ke=function(a,i){return!i||i.length===0?a():Promise.all(i.map(n=>{if(n=`${je}${n}`,n in B)return;B[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":Ye,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((l,g)=>{o.addEventListener("load",l),o.addEventListener("error",g)})})).then(()=>a())},We={class:"text-center relative"},Ue=t("canvas",{class:"fixed w-full h-full z-0 top-0 left-0",id:"confetti"},null,-1),Ge={key:0,class:"relative z-10"},Je={class:"h-[50vh]"},Xe=["innerHTML"],Ze={class:"mt-2"},et={key:0},tt={key:1,class:"font-bold text-amber-400"},st={class:"h-[40px] lg:h-[20vh] overflow-scroll lg:py-10 hide-scroll"},at=["id"],it={key:1,class:"relative z-10"},ot={key:0},nt=t("p",{class:"text-3xl my-10"},"BRAVO\xA0!!!",-1),rt={key:1},lt=t("p",{class:"text-3xl my-10"},"Dommage\xA0!!!",-1),ut={class:"text-xl"},dt=t("p",{class:"text-sm italic mt-2"}," \xC0 demain pour une nouvelle question\xA0! ",-1),ct=t("div",{class:"separator"},null,-1),pt={class:"text-lg mb-4"},mt={class:"text-md my-4"},vt=t("div",{class:"separator"},null,-1),ft={key:0},ht={key:1},_t=t("div",{class:"separator"},null,-1),gt=t("p",{class:"text-xl mb-2"},"En savoir plus",-1),wt=["href"],yt={setup(s){const{toClipboard:a}=ee(),i=V(),n=S(),e=f(null),r=f(0),o=f(0),l=f([]),g=f(),m=f(!1),w=f(!1),D=f(!1),k=f(!1),$=f(!1),b=f(!1),p=f([]);p.value=F(n.currentDate),te(()=>n.currentDate,()=>{p.value=F(n.currentDate),q()});const P=()=>{l.value=[],o.value=0,m.value=!1,w.value=!1,$.value=!1,k.value=!1,b.value=!1,D.value=!1},q=()=>{const d=i.getQuestionHistoryByDate(n.currentDate);d?(l.value=d.attempts[0],o.value=l.value.length,m.value=d.hasFound,w.value=d.hasFinished,w.value?($.value=!0,k.value=!0,b.value=!0):($.value=!1,k.value=!1,b.value=!1)):P()},O=(d,v,h)=>{let y="\u2705";p.value.answer-d<0?y="\u{1F53B}":p.value.answer-d>0?y="\u{1F53A}":y="\u2705",l.value.push({answer:d,gap:y}),i.addAttemptToQuestion(p.value,l.value,v,h)},Y=()=>{e.value({particleCount:50,startVelocity:30,spread:360,angle:0,origin:{x:.5,y:.25}})},A=()=>{const d=document.getElementById("question-text");d.ontransitionend=async v=>{v.propertyName==="opacity"&&($.value=!0,m.value&&Y(),await ne(),setTimeout(()=>{b.value=!0},1))},k.value=!0},H=()=>{g.value&&(o.value+=1,r.value=p.value.answer-g.value,r.value===0?(m.value=!0,w.value=!0,i.currentStreak++,i.currentStreak>i.bestStreak&&i.bestStreak++,A()):o.value===p.value.attemptLimit&&(m.value=!1,w.value=!0,i.currentStreak=0,A()),O(g.value,m.value,w.value),g.value="",document.getElementById("input-answer").focus(),setTimeout(()=>{const d=document.querySelector(`#text-attempt-${l.value.length-1}`);d&&d.scrollIntoView({behavior:"smooth",block:"end"})},100))},j=async()=>{let d=`Smart numdle #${p.value.id}: ${o.value===p.value.attemptLimit&&!m.value?"\u{1F61E}":o.value}/${p.value.attemptLimit} \r
\r
`;l.value.forEach((v,h)=>{d+=`Tentative n\xB0${h+1} : ${v.gap}\r
`}),d+=`\r
https://smartnumdle.nitocode.com`;try{await a(d),D.value=!0}catch(v){console.error(v)}};return M(()=>{q();const d=document.getElementById("confetti");e.value=se(d,{resize:!0,useWorker:!0})}),(d,v)=>(u(),c("main",We,[Ue,!m.value&&!w.value||!$.value?(u(),c("div",Ge,[t("div",Je,[t("div",{id:"question-text",class:x(["my-10 transition duration-1000",[{"translate-y-12 opacity-0":k.value&&m.value},{"opacity-0":k.value&&!m.value}]])},[t("h2",{class:"text-3xl",innerHTML:p.value.title},null,8,Xe),t("p",Ze,[p.value.attemptLimit-o.value>1?(u(),c("span",et,"(Tentatives restantes: "+_(p.value.attemptLimit-o.value)+")",1)):(u(),c("span",tt,"(Derni\xE8re tentative\xA0!)"))])],2),t("div",{class:x(["h-[20vh] overflow-hidden transition duration-500",[{"translate-y-4 opacity-0":k.value&&m.value},{"opacity-0":k.value&&!m.value}]])},[t("div",st,[(u(!0),c(I,null,z(l.value,(h,y)=>(u(),c("div",{key:y},[t("p",{id:`text-attempt-${y}`,class:"text-xl lg:text-lg my-4"}," Tentative n\xB0"+_(y+1)+": "+_(h.answer)+" : "+_(h.gap),9,at)]))),128))])],2)]),t("div",{class:x(["transition duration-1000",[{"-translate-y-24 opacity-0":k.value&&m.value},,{"opacity-0":k.value&&!m.value}]])},[ae(t("input",{id:"input-answer",class:"text-black px-4 py-2 text-xl block mx-auto","onUpdate:modelValue":v[0]||(v[0]=h=>g.value=h),type:"number",onKeyup:v[1]||(v[1]=oe(h=>H(),["enter"]))},null,544),[[ie,g.value]]),t("button",{class:"btn-numdle mt-6",onClick:v[2]||(v[2]=h=>H())},"VALIDER")],2)])):(u(),c("div",it,[t("div",{class:x(["transition duration-500 opacity-0",{"opacity-100":b.value}])},[m.value?(u(),c("div",ot,[nt,t("p",null," Vous avez trouv\xE9 la bonne r\xE9ponse en "+_(l.value.length)+"\xA0tentative"+_(l.value.length>1?"s":"")+"\xA0! ",1)])):(u(),c("div",rt,[lt,t("p",ut,"La bonne r\xE9ponse est : "+_(p.value.answer),1)])),dt],2),t("div",{class:x(["transition duration-500 delay-500 opacity-0",{"opacity-100":b.value}])},[ct,t("p",pt,"R\xE9sum\xE9 Smart Numdle #"+_(p.value.id),1),(u(!0),c(I,null,z(l.value,(h,y)=>(u(),c("div",{key:y},[t("p",mt," Tentative n\xB0"+_(y+1)+": "+_(h.answer)+" : "+_(h.gap),1)]))),128))],2),t("div",{class:x(["transition duration-500 delay-1000 opacity-0",{"opacity-100":b.value}])},[vt,t("div",null,[t("button",{class:"btn-numdle",onClick:v[3]||(v[3]=h=>j())},[D.value?(u(),c("span",ht,"R\xE9sultat copi\xE9 !")):(u(),c("span",ft,"Partager mon r\xE9sultat"))])])],2),p.value.linkForMore?(u(),c("div",{key:0,class:x(["transition duration-500 delay-1500 opacity-0",{"opacity-100":b.value}])},[_t,t("div",null,[gt,t("p",null,[t("a",{class:"underline break-words",href:p.value.linkForMore,target:"_blank"},_(p.value.linkForMore),9,wt)])])],2)):L("",!0)]))]))}},kt=re({history:le("/"),routes:[{path:"/",name:"home",component:yt},{path:"/result",name:"result",component:()=>Ke(()=>import("./ResultView.43ac77be.js"),["assets/ResultView.43ac77be.js","assets/ResultView.3a74caeb.css","assets/vendor.205839e8.js"])}]});ue.polyfill();const E=de(Oe);E.use(ce());E.use(kt);E.mount("#app");export{ge as _};
