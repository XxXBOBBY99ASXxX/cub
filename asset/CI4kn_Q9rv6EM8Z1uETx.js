import{q as g,j as r}from"./DEYDuN7xp-m3cL830AkD.js";import{m as f}from"./DlU01QiUEGHWpg_beOfr.js";import"./CFJNYz37NDnhYvpCku9W.js";import{g as m,z as a}from"./DFxtuzOGt4j9P4wz18l_.js";import{A as x}from"./wiSqEwmaN9BWFn9sqlOW.js";import{F as h}from"./B6LPZ-dQPmAoN-cV9-92.js";import{V as j}from"./DR6l8Aev73dlAAMDxUCB.js";const n=350;function y(i,d){const s=i/d;let e=i*s,o=d*s;if(o>n){const t=n/o;e*=t,o=n}return{adjustedWidth:Math.floor(e),adjustedHeight:Math.floor(o)}}const A=g.div`
	cursor: ${i=>i.withPointer?"pointer":"default"};
	padding: 2px 0;
`,_=g.img`
	border-radius: 4px;
	width: 100%;
	height: auto;
`;function F({attachment:i}){var o;const d=i.proxy_url&&i.proxy_url.length>0?i.proxy_url:i.url,s=m(i);let e=r.jsx(r.Fragment,{});if(s.isImage&&s.isEmbeddable){const t=i.width,u=i.height,{adjustedWidth:l,adjustedHeight:p}=y(t,u);e=r.jsx(_,{src:d,alt:i.filename,loading:"lazy",style:{maxWidth:l,maxHeight:p}})}else s.isVideo&&s.isEmbeddable?e=r.jsx(j,{attachment:i}):s.isAudio&&s.isEmbeddable?e=r.jsx(x,{attachment:i}):e=r.jsx(h,{attachment:i});return r.jsx(A,{withPointer:(o=i.content_type)==null?void 0:o.startsWith("image"),onClick:()=>{var l;if(!((l=i.content_type)!=null&&l.startsWith("image")))return;const{width:t,height:u}=a(i.width,i.height);f.push({type:"image_viewer",attachment:i,width:t,height:u})},children:e},i.id)}export{F as M};
//# sourceMappingURL=CI4kn_Q9rv6EM8Z1uETx.js.map
