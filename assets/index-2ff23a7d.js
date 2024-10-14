import{z as N,d as x,U as F,V as R,e as f,W as I,B as D,X as U,A as L,Y,Z as W,E as O,L as S,a as z,g as b,h as A,$ as G,o as v,c as g,b as r,t as c,f as m,l as y,a0 as H,F as C,j as P,m as K,a1 as T,_ as w,N as X,O as Z,P as q,S as M}from"./index-48607fab.js";const[B,J]=N("row"),E=Symbol(B),Q={tag:I("div"),wrap:D,align:String,gutter:{type:[String,Number,Array],default:0},justify:String};var tt=x({name:B,props:Q,setup(d,{slots:u}){const{children:i,linkChildren:n}=F(E),l=R(()=>{const s=[[]];let t=0;return i.forEach((a,o)=>{t+=Number(a.span),t>24?(s.push([o]),t-=24):s[s.length-1].push(o)}),s}),e=R(()=>{let s=0;Array.isArray(d.gutter)?s=Number(d.gutter[0])||0:s=Number(d.gutter);const t=[];return s&&l.value.forEach(a=>{const o=s*(a.length-1)/a.length;a.forEach((_,k)=>{if(k===0)t.push({right:o});else{const $=s-t[_-1].right,h=o-$;t.push({left:$,right:h})}})}),t}),p=R(()=>{const{gutter:s}=d,t=[];if(Array.isArray(s)&&s.length>1){const a=Number(s[1])||0;if(a<=0)return t;l.value.forEach((o,_)=>{_!==l.value.length-1&&o.forEach(()=>{t.push({bottom:a})})})}return t});return n({spaces:e,verticalSpaces:p}),()=>{const{tag:s,wrap:t,align:a,justify:o}=d;return f(s,{class:J({[`align-${a}`]:a,[`justify-${o}`]:o,nowrap:!t})},{default:()=>{var _;return[(_=u.default)==null?void 0:_.call(u)]}})}}});const[et,ot]=N("col"),st={tag:I("div"),span:U(0),offset:L};var nt=x({name:et,props:st,setup(d,{slots:u}){const{parent:i,index:n}=Y(E),l=R(()=>{if(!i)return;const{spaces:e,verticalSpaces:p}=i;let s={};if(e&&e.value&&e.value[n.value]){const{left:a,right:o}=e.value[n.value];s={paddingLeft:a?`${a}px`:null,paddingRight:o?`${o}px`:null}}const{bottom:t}=p.value[n.value]||{};return W(s,{marginBottom:t?`${t}px`:null})});return()=>{const{tag:e,span:p,offset:s}=d;return f(e,{style:l.value,class:ot({[p]:p,[`offset-${s}`]:s})},{default:()=>{var t;return[(t=u.default)==null?void 0:t.call(u)]}})}}});const at=O(nt),rt=O(tt),lt={class:"mt-4 space-y-4"},ct={class:"title"},ut={class:"flex items-center justify-center text-primary space-x-1"},it={class:"text-2xl"},pt={class:"text-sm text-center text-text-primary"},dt={class:"bg-secondary rounded-lg"},_t=x({__name:"PoolRobotCard",props:{min:{},max:{}},setup(d){const u=S(),i=d,{t:n}=z(),l=b(0),e=b([{id:1,title:n("poolRobot.totalOutput"),value:"0",unit:"MTOPS"},{id:2,title:n("poolRobot.validNodes"),value:""},{id:3,title:n("poolRobot.participants"),value:4140076},{id:4,title:n("poolRobot.userBenefits"),value:n("poolRobot.userBenefits3.0")}]),p=(o,_)=>Math.floor(Math.random()*(_-o+1))+o,s=()=>{const o=Math.floor(Date.now()/1e3);l.value=1187366932e-2+(o-1728677121)*2+p(100,500)+Math.random(),l.value=parseFloat(l.value.toFixed(2)),e.value[0].value=(o-1728677121)*2+p(100,500)+Math.random(),e.value[2].value=4140076+(o-1728677121)*2+p(1,100)};let t;A(()=>{t=setInterval(s,1500)}),G(()=>{clearInterval(t)});function a(o){if(typeof o.value=="number"){const _=o.value.toFixed(2);return o.unit?`${_} ${o.unit}`:_}return o.value.toString()}return(o,_)=>{const k=T,$=H;return v(),g("div",lt,[r("h2",ct,c(m(n)("poolRobot.title")),1),r("div",ut,[r("strong",it,c(l.value),1),r("span",null,c(m(u).token),1)]),r("p",pt,c(m(n)("poolRobot.totalOutput")),1),r("div",dt,[f($,{inset:""},{default:y(()=>[(v(!0),g(C,null,P(e.value,(h,V)=>(v(),K(k,{key:V,title:h.title,value:h.id==2?`${i.min}% ~ ${i.max}%`:h.id!=3?a(h):h.value},null,8,["title","value"]))),128))]),_:1})])])}}});const ft=w(_t,[["__scopeId","data-v-b0ccd59c"],["__file","PoolRobotCard.vue"]]);const mt={class:"space-y-4"},vt={class:"title"},gt={class:"text-sm text-text-primary"},ht={class:"text-sm text-text-primary"},bt={class:"text-sm text-text-primary text-center"},xt={class:"bg-secondary rounded-lg1 p-3 text-sm"},yt={class:"border-border-primary flex justify-between items-center py-3 border-gray-700"},$t={style:{"flex-basis":"40%"}},Rt={style:{"flex-basis":"30%"}},St=x({__name:"RobotOutput",props:{pool:{}},setup(d){const u=S(),i=e=>`${parseInt(e.min.toString())} ~${parseInt(e.max.toString())} `,n=e=>(e*100).toFixed(2)+"%",l=e=>`${e.min*e.rebate} ~ ${e.max*e.rebate} `;return(e,p)=>{const s=at,t=rt;return v(),g("div",mt,[r("p",vt,c(e.$t("poolRobot.intelligentRobotYield")),1),f(t,null,{default:y(()=>[f(s,{span:"8",class:"text-center"},{default:y(()=>[r("span",gt,c(e.$t("poolRobot.investmentAmount"))+" ("+c(m(u).token)+") ",1)]),_:1}),f(s,{span:"8",class:"text-center"},{default:y(()=>[r("span",ht,c(e.$t("poolRobot.rateOfReturn")),1)]),_:1}),f(s,{span:"8",class:"text-center"},{default:y(()=>[r("span",bt,c(e.$t("poolRobot.profit"))+" ("+c(m(u).token)+") ",1)]),_:1})]),_:1}),(v(!0),g(C,null,P(e.pool,(a,o)=>(v(),g("div",{key:o},[r("ul",xt,[r("li",yt,[r("span",$t,c(i(a)),1),r("span",Rt,c(n(a.rebate)),1),r("span",null,c(l(a)),1)])])]))),128))])}}});const wt=w(St,[["__scopeId","data-v-2a82c00b"],["__file","RobotOutput.vue"]]),kt={class:"space-y-4"},Ct={class:"title"},Pt={class:"max-h-120 overflow-y-scroll"},Mt={class:"bg-secondary rounded-lg p-3 text-sm"},Nt={class:"text-text-primary"},It=x({__name:"MiningRecords",props:{transactions:{}},setup(d){const u=S();function i(n,l){return n.length<=l*2?n:`${n.slice(0,l)}....${n.slice(-l)}`}return(n,l)=>(v(),g("div",kt,[r("h2",Ct,c(n.$t("poolRobot.miningRecords")),1),X("",!0),r("div",Pt,[r("ul",Mt,[(v(!0),g(C,null,P(n.transactions,e=>(v(),g("li",{key:e.address,class:"border-b border-border-primary flex justify-between items-center py-3 border-gray-700"},[r("span",Nt,c(i(e.address,8)),1),r("span",null,c(e.amount)+" "+c(m(u).token),1)]))),128))])])]))}}),Ot=w(It,[["__file","MiningRecords.vue"]]),At={class:"h-full flex flex-col"},Bt={class:"flex-1 overflow-y-auto"},Et={class:"p-3 space-y-4"},j=x({__name:"index",setup(d){const u=S(),i=b(0),n=b(0),l=b([]),e=b([]),p=async t=>await Z(t),s=t=>{e.value=t.record,l.value=t.pool,i.value=t.rebate_min*100,n.value=t.rebate_max*100};return A(async()=>{const t={address:u.address,network:u.network,token:u.token},a=await p(t);s(a.data)}),(t,a)=>{const o=q;return v(),g("div",At,[f(o),r("div",Bt,[r("div",Et,[f(ft,{min:m(i),max:m(n)},null,8,["min","max"]),f(wt,{pool:m(l)},null,8,["pool"]),f(Ot,{transactions:m(e)},null,8,["transactions"]),a[0]||(a[0]=r("div",{class:"h-14"},null,-1))])])])}}});typeof M=="function"&&M(j);const Vt=w(j,[["__file","index.vue"]]);export{Vt as default};
