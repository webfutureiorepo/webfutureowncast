(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{24019:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(1413),a=r(67294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},s=r(42135),o=function(e,t){return a.createElement(s.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:i}))};o.displayName="ClockCircleOutlined";var l=a.forwardRef(o)},24308:function(e,t,r){"use strict";r.d(t,{c4:function(){return i}});var n=r(4942),a=r(87462),i=["xxl","xl","lg","md","sm","xs"],s={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},o=new Map,l=-1,c={},u={matchHandlers:{},dispatch:function(e){return c=e,o.forEach((function(e){return e(c)})),o.size>=1},subscribe:function(e){return o.size||this.register(),l+=1,o.set(l,e),e(c),l},unsubscribe:function(e){o.delete(e),o.size||this.unregister()},unregister:function(){var e=this;Object.keys(s).forEach((function(t){var r=s[t],n=e.matchHandlers[r];null===n||void 0===n||n.mql.removeListener(null===n||void 0===n?void 0:n.listener)})),o.clear()},register:function(){var e=this;Object.keys(s).forEach((function(t){var r=s[t],i=function(r){var i=r.matches;e.dispatch((0,a.Z)((0,a.Z)({},c),(0,n.Z)({},t,i)))},o=window.matchMedia(r);o.addListener(i),e.matchHandlers[r]={mql:o,listener:i},i(o)}))}};t.ZP=u},16791:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/stream-health",function(){return r(46523)}])},89270:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(85893),a=r(29217),i=r(92616),s=r.n(i),o=r(58091),l=r(60727);function c(e){var t={};return e.forEach((function(e){var r=new Date(e.time),n=(0,o.Z)(r,"H:mma");t[n]=e.value})),t}function u(e){var t=e.data,r=e.title,a=e.color,i=e.unit,s=e.dataCollections,o=e.yFlipped,u=e.yLogarithmic,d=[];t&&t.length>0&&d.push({name:r,color:a,data:c(t)}),s.forEach((function(e){d.push({name:e.name,data:c(e.data),color:e.color,dataset:e.options})}));var h={scales:{y:{reverse:!1,type:"linear"},x:{type:"time"}}};return h.scales.y.reverse=o,h.scales.y.type=u?"logarithmic":"linear",(0,n.jsx)("div",{className:"line-chart-container",children:(0,n.jsx)(l.wW,{xtitle:"Time",ytitle:r,suffix:i,legend:"bottom",color:a,data:d,download:r,library:h})})}s().use(a.Z),u.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},14880:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(85893),a=r(8751),i=r(11475),s=r(25968),o=r(6226),l=r(74763),c=r(84485),u=r(14670),d=r(71577),h=r(41664),p=r.n(h),m=r(67294),f=r(35159);function y(e){var t=e.showTroubleshootButton,r=(0,m.useContext)(f.aC).health;if(!r)return null;var h=r.healthy,y=r.healthPercentage,x=r.message,v=r.representation,g="#3f8600",w="info";return y<80?(g="#cf000f",w="error"):y<30&&(g="#f0ad4e",w="error"),(0,n.jsxs)("div",{children:[(0,n.jsxs)(s.Z,{gutter:8,children:[(0,n.jsx)(o.Z,{span:12,children:(0,n.jsx)(l.Z,{title:"Healthy Stream",value:h?"Yes":"No",valueStyle:{color:g},prefix:h?(0,n.jsx)(a.Z,{}):(0,n.jsx)(i.Z,{})})}),(0,n.jsx)(o.Z,{span:12,children:(0,n.jsx)(l.Z,{title:"Playback Health",value:y,valueStyle:{color:g},suffix:"%"})})]}),(0,n.jsx)(s.Z,{style:{display:v<100&&0!==v?"grid":"none"},children:(0,n.jsxs)(c.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",v,"% of all known players. Other player status is unknown."]})}),(0,n.jsx)(s.Z,{gutter:16,style:{width:"100%",display:x?"grid":"none",marginTop:"10px"},children:(0,n.jsx)(o.Z,{span:24,children:(0,n.jsx)(u.Z,{message:x,type:w,showIcon:!0,action:t&&(0,n.jsx)(p(),{passHref:!0,href:"/stream-health",children:(0,n.jsx)(d.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})}y.defaultProps={showTroubleshootButton:!0}},46523:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(47568),a=r(34051),i=r.n(a),s=r(85893),o=r(84485),l=r(14670),c=r(11382),u=r(26713),d=r(25968),h=r(6226),p=r(59652),m=r(74763),f=r(67294),y=r(1413),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 00-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 00-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 00-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 10128 0 64 64 0 10-128 0z"}}]},name:"wifi",theme:"outlined"},v=r(42135),g=function(e,t){return f.createElement(v.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:t,icon:x}))};g.displayName="WifiOutlined";var w=f.forwardRef(g),b=r(24019),j=r(28058),Z=r(58827),F=r(89270),k=r(14880);function S(e){var t=e.title,r=e.description;return(0,s.jsxs)("div",{className:"description-box",children:[(0,s.jsx)(o.Z.Title,{children:t}),(0,s.jsx)(o.Z.Paragraph,{children:r})]})}function C(){var e,t,r,a,y,x,v,g=(0,f.useState)([]),C=g[0],P=g[1],E=(0,f.useState)([]),T=E[0],L=E[1],N=(0,f.useState)(),B=N[0],D=N[1],z=(0,f.useState)(),O=z[0],q=z[1],M=(0,f.useState)([]),I=M[0],_=M[1],H=(0,f.useState)([]),R=H[0],V=H[1],A=(0,f.useState)([]),Q=A[0],Y=A[1],W=(0,f.useState)([]),X=W[0],U=W[1],$=(0,f.useState)([]),G=$[0],J=$[1],K=(0,f.useState)([]),ee=K[0],te=K[1],re=(0,f.useState)([]),ne=re[0],ae=re[1],ie=(0,f.useState)([]),se=ie[0],oe=ie[1],le=(0,f.useState)(0),ce=le[0],ue=le[1],de=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.rQ)(Z.N$);case 3:t=e.sent,P(t.errors),L(t.qualityVariantChanges),q(t.highestLatency),D(t.lowestLatency),_(t.medianLatency),V(t.medianSegmentDownloadDuration),Y(t.maximumSegmentDownloadDuration),U(t.minimumSegmentDownloadDuration),J(t.minPlayerBitrate),te(t.medianPlayerBitrate),ae(t.maxPlayerBitrate),oe(t.availableBitrates),ue(t.segmentLength-.3),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();(0,f.useEffect)((function(){var e;return de(),e=setInterval(de,Z.NE),function(){clearInterval(e)}}),[]);var he=(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Z.Title,{children:"Stream Performance"}),(0,s.jsx)(l.Z,{type:"info",message:" Data has not yet been collected. Once a stream has begun and viewers are watching this page will be available."}),(0,s.jsx)(c.Z,{size:"large",children:(0,s.jsx)("div",{style:{marginTop:"50px",height:"100px"}})})]});if(!(null===C||void 0===C?void 0:C.length))return he;if(!(null===I||void 0===I?void 0:I.length))return he;if(!(null===R||void 0===R?void 0:R.length))return he;var pe=[{name:"Errors",color:"#B63FFF",options:{radius:3},data:C},{name:"Quality changes",color:"#2087E2",options:{radius:2},data:T}],me=[{name:"Median stream latency",color:"#00FFFF",options:{radius:2},data:I},{name:"Lowest stream latency",color:"#02FD0D",options:{radius:2},data:B},{name:"Highest stream latency",color:"#B63FFF",options:{radius:2},data:O}],fe=[{name:"Max download duration",color:"#B63FFF",options:{radius:2},data:Q},{name:"Median download duration",color:"#00FFFF",options:{radius:2},data:R},{name:"Min download duration",color:"#02FD0D",options:{radius:2},data:X},{name:"Approximate limit",color:"#003FFF",data:R.map((function(e){return{time:e.time,value:ce}})),options:{radius:0}}],ye=[{name:"Lowest player speed",color:"#B63FFF",data:G,options:{radius:2}},{name:"Median player speed",color:"#00FFFF",data:ee,options:{radius:2}},{name:"Maximum player speed",color:"#02FD0D",data:ne,options:{radius:2}}];se.forEach((function(e){ye.push({name:"Available bitrate",color:"#003FFF",data:G.map((function(t){return{time:t.time,value:e}})),options:{radius:0}})}));var xe=null===(t=null===(e=ye[0])||void 0===e?void 0:e.data[ye[0].data.length-1])||void 0===t?void 0:t.value,ve=null===(r=R[R.length-1])||void 0===r?void 0:r.value,ge=se[0],we=(null===(a=I[I.length-1])||void 0===a?void 0:a.value)||0,be=(null===(y=O[O.length-1])||void 0===y?void 0:y.value)||0,je=(null===(x=B[B.length-1])||void 0===x?void 0:x.value)||0,Ze=(Number(be)+Number(je)+Number(we))/3,Fe=0;((null===(v=pe[0])||void 0===v?void 0:v.data.length)||0)>5?Fe=pe[0].data.slice(-5).reduce((function(e,t){return e+Number(t.value)}),0):Fe=pe[0].data.reduce((function(e,t){return e+Number(t.value)}),0);var ke=xe>0||ve>0||Fe>0,Se=null,Ce=null;0!==xe&&xe<ge&&(Se="One of your viewers is playing your stream at ".concat(xe,"kbps, slower than ").concat(ge,"kbps, the lowest quality you made available. Consider adding a lower quality with a lower bitrate if the errors over time warrant this.")),ve>ce&&(Ce="Your viewers may be consuming your video slower than required. This may be due to slow networks or your latency configuration. You need to decrease the amount of time viewers are taking to consume your video. Consider adding a lower quality with a lower bitrate or experiment with increasing the latency buffer setting.");var Pe=Fe>0?"#B63FFF":"#FFFFFF",Ee={display:"flex",alignItems:"center",justifyContent:"center",height:"80px"};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z.Title,{children:"Stream Performance"}),(0,s.jsx)(o.Z.Paragraph,{children:"This tool hopes to help you identify and troubleshoot problems you may be experiencing with your stream. It aims to aggregate experiences across your viewers, meaning one viewer with an exceptionally bad experience may throw off numbers for the whole, especially with a low number of viewers."}),(0,s.jsx)(o.Z.Paragraph,{children:"The data is only collected by those using the Owncast web interface and is unable to gain insight into external players people may be using such as VLC, MPV, QuickTime, etc."}),(0,s.jsxs)(u.Z,{direction:"vertical",size:"middle",children:[(0,s.jsx)(d.Z,{justify:"space-around",children:(0,s.jsx)(h.Z,{style:{width:"100%"},children:(0,s.jsx)(p.Z,{type:"inner",children:(0,s.jsx)(k.Z,{showTroubleshootButton:!1})})})}),(0,s.jsxs)(d.Z,{gutter:[16,16],justify:"space-around",style:{display:ke?"flex":"none"},children:[(0,s.jsx)(h.Z,{children:(0,s.jsx)(p.Z,{type:"inner",children:(0,s.jsx)("div",{style:Ee,children:(0,s.jsx)(m.Z,{title:"Viewer Playback Speed",value:"".concat(xe),prefix:(0,s.jsx)(w,{style:{marginRight:"5px"}}),precision:0,suffix:"kbps"})})})}),(0,s.jsx)(h.Z,{children:(0,s.jsx)(p.Z,{type:"inner",children:(0,s.jsx)("div",{style:Ee,children:(0,s.jsx)(m.Z,{title:"Viewer Latency",value:"".concat(Ze),prefix:(0,s.jsx)(b.Z,{style:{marginRight:"5px"}}),precision:0,suffix:"seconds"})})})}),(0,s.jsx)(h.Z,{children:(0,s.jsx)(p.Z,{type:"inner",children:(0,s.jsx)("div",{style:Ee,children:(0,s.jsx)(m.Z,{title:"Recent Playback Errors",value:"".concat(Fe||0),valueStyle:{color:Pe},prefix:(0,s.jsx)(j.Z,{style:{marginRight:"5px"}}),suffix:""})})})})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(S,{title:"Video Segment Download",description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z.Paragraph,{children:"Once a video segment takes too long to download a viewer will experience buffering. If you see slow downloads you should offer a lower quality for your viewers, or find other ways, possibly an external storage provider, a CDN or a faster network, to improve your stream quality. Increasing your latency buffer can also help for some viewers."}),(0,s.jsx)(o.Z.Paragraph,{children:"In short, once the pink line consistently gets near the blue line, your stream is likely experiencing problems for viewers."})]})}),Ce&&(0,s.jsx)(l.Z,{message:"Slow downloads",description:Ce,type:"error",showIcon:!0}),(0,s.jsx)(F.Z,{title:"Seconds",dataCollections:fe,color:"#FF7700",unit:"s",yLogarithmic:!0})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(S,{title:"Player Network Speed",description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z.Paragraph,{children:"The playback bitrate of your viewers. Once somebody's bitrate drops below the lowest video variant bitrate they will experience buffering. If you see viewers with slow connections trying to play your video you should consider offering an additional, lower quality."}),(0,s.jsx)(o.Z.Paragraph,{children:"In short, once the pink line gets near the lowest blue line, your stream is likely experiencing problems for at least one of your viewers."})]})}),Se&&(0,s.jsx)(l.Z,{message:"Low bandwidth viewers",description:Se,type:"error",showIcon:!0}),(0,s.jsx)(F.Z,{title:"Lowest Player Bitrate",dataCollections:ye,color:"#FF7700",unit:"kbps",yLogarithmic:!0})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(S,{title:"Errors and Quality Changes",description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z.Paragraph,{children:"Recent number of errors, including buffering, and quality changes from across all your viewers. Errors can occur for many reasons, including browser issues, plugins, wifi problems, and they don't all represent fatal issues or something you have control over."}),"A quality change is not necessarily a negative thing, but if it's excessive and coinciding with errors you should consider adding another quality variant.",(0,s.jsx)(o.Z.Paragraph,{})]})}),(0,s.jsx)(F.Z,{title:"#",dataCollections:pe,color:"#FF7700",unit:""})]}),(0,s.jsxs)(p.Z,{children:[(0,s.jsx)(S,{title:"Viewer Latency",description:"An approximate number of seconds that your viewers are behind your live video. The largest cause of latency spikes is buffering. High latency itself is not a problem, and optimizing for low latency can result in buffering, resulting in even higher latency."}),(0,s.jsx)(F.Z,{title:"Seconds",dataCollections:me,color:"#FF7700",unit:"s"})]})]})]})}}},function(e){e.O(0,[2757,8091,7961,5315,4763,2139,9774,2888,179],(function(){return t=16791,e(e.s=t);var t}));var t=e.O();_N_E=t}]);