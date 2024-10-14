import{z as U,B as z,A as W,X as D,d as j,g as q,aj as F,aJ as re,U as ve,V as d,ao as J,w as E,v as fe,x as de,aK as he,h as G,aq as ge,s as we,af as me,ag as xe,al as ye,e as $,am as K,q as Q,aE as M,aL as be,aM as B,E as Z,Y as Se}from"./index-82806629.js";const[ee,I]=U("swipe"),Te={loop:z,width:W,height:W,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:z,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:z,stopPropagation:z},te=Symbol(ee);var pe=j({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:y,slots:g}){const u=q(),h=q(),t=F({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let b=!1;const r=re(),{children:w,linkChildren:s}=ve(te),i=d(()=>w.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),x=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),k=d(()=>o.value?Math.ceil(Math.abs(x.value)/o.value):i.value),O=d(()=>i.value*o.value),S=d(()=>(t.active+i.value)%i.value),R=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${O.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?B(l+e,-1,i.value):B(l+e,0,k.value):l},Y=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-x.value));let f=l-n;return a.loop||(f=B(f,x.value,0)),f},m=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=Y(c,l);if(a.loop){if(w[0]&&C!==x.value){const _=C<x.value;w[0].setOffset(_?O.value:0)}if(w[i.value-1]&&C!==0){const _=C>0;w[i.value-1].setOffset(_?-O.value:0)}}t.active=c,t.offset=C,n&&c!==f&&y("change",S.value)},A=()=>{t.swiping=!0,t.active<=-1?m({pace:i.value}):t.active>=i.value&&m({pace:-i.value})},ne=()=>{A(),r.reset(),M(()=>{t.swiping=!1,m({pace:-1,emitChange:!0})})},X=()=>{A(),r.reset(),M(()=>{t.swiping=!1,m({pace:1,emitChange:!0})})};let H;const p=()=>clearTimeout(H),P=()=>{p(),+a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{X(),P()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!K(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=Y(e),w.forEach(c=>{c.setOffset(0)}),P()};K(u)?Q().then(l):l()},L=()=>T(t.active);let N;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),b=!1,N=Date.now(),p(),A())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),R.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(be(e,a.stopPropagation),m({offset:v.value}),b||(y("dragStart",{index:S.value}),b=!0))))},V=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-N,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&R.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),m({pace:c,emitChange:!0})}else v.value&&m({pace:0});b=!1,t.swiping=!1,y("dragEnd",{index:S.value}),P()},se=(e,l={})=>{A(),r.reset(),M(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?M(()=>{t.swiping=!1}):t.swiping=!1,m({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return $("i",{style:f,class:I("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return $("div",{class:I("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return J({prev:ne,next:X,state:t,resize:L,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:S}),E(()=>a.initialSwipe,e=>T(+e)),E(i,()=>T(t.active)),E(()=>a.autoplay,P),E([fe,de,()=>a.width,()=>a.height],L),E(he(),e=>{e==="visible"?P():p()}),G(T),ge(()=>T(t.active)),we(()=>T(t.active)),me(p),xe(p),ye("touchmove",oe,{target:h}),()=>{var e;return $("div",{ref:u,class:I()},[$("div",{ref:h,style:ae.value,class:I("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:V,onTouchcancel:V},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ae=Z(pe),[Pe,Ce]=U("swipe-item");var Ee=j({name:Pe,setup(a,{slots:y}){let g;const u=F({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const b=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,x=o===0&&s?v:o-1,k=o===v&&s?0:o+1;return g=t.value===o||t.value===x||t.value===k,g}),w=s=>{u.offset=s};return G(()=>{Q(()=>{u.mounted=!0})}),J({setOffset:w}),()=>{var s;return $("div",{class:Ce(),style:b.value},[r.value?(s=y.default)==null?void 0:s.call(y):null])}}});const ze=Z(Ee);export{Ae as S,ze as a};
