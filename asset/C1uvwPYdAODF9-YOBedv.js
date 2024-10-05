import{q as h,f as p,j as t,R as s,u as m}from"./DEYDuN7xp-m3cL830AkD.js";import{C as x}from"./CZ177u3GNS87Q_oqsjHX.js";import{u as f}from"./zdDLXtJuoQIQMZlDPq5d.js";import{h as g,r as M}from"./DFxtuzOGt4j9P4wz18l_.js";import{F as j}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as C}from"./BIydnCOjy0yj0KXiAVvY.js";const u=h.span`
	padding: 0 2px;
	border-radius: 4px;
	background-color: hsl(${e=>e.color??"var(--primary-hsl)"} / 0.3);
	user-select: ${e=>e.withHover?"none":"inherit"};

	${e=>e.withHover&&`
		&:hover {
			background-color: hsl(${e.color??"var(--primary-hsl)"} / 0.5);
			cursor: pointer;
		}
	`}
`;function d({id:e}){const o=f(),[n,i]=s.useState(null),l=s.useContext(x);return s.useEffect(()=>{(async()=>{const r=await o.users.resolve(e);i(r??null)})()},[e]),n?t.jsx(j,{type:"userPopout",placement:"right",props:{user:n},children:t.jsx(C,{children:t.jsxs(u,{withHover:!0,onContextMenu:c=>l.onContextMenu(c,{type:"user",user:n}),children:["@",n.username]})})}):t.jsxs(u,{children:["@",e]})}function v({id:e}){const o=f(),[n,i]=s.useState(null),l=m(),c=s.useContext(x),r=()=>{n&&n.isGuildTextChannel&&l(`/channels/${n.guildId}/${n.id}`)};return s.useEffect(()=>{const a=o.channels.get(e);a&&i(a)},[e]),n?t.jsxs(u,{withHover:!0,onClick:r,onContextMenu:a=>c.onContextMenu(a,{type:"channelMention",channel:n}),children:["#",n.name]}):t.jsxs(u,{children:["#",e]})}function w({id:e}){const o=f(),[n,i]=s.useState(null),[l,c]=s.useState(void 0);return s.useEffect(()=>{const r=o.roles.get(e);r&&i(r)},[e]),s.useEffect(()=>{if(!(n!=null&&n.color)||n.color==="#000000")return;const r=g(n.color);r&&c(M(r.r,r.g,r.b))},[n]),n?t.jsxs(u,{color:l,withHover:!0,children:["@",n.name]}):t.jsx(u,{children:"@unknown-role"})}function $({id:e}){return t.jsx(u,{children:e})}function b({type:e,id:o}){return e==="role"?t.jsx(w,{id:o}):e==="user"?t.jsx(d,{id:o}):e==="channel"?t.jsx(v,{id:o}):e==="text"?t.jsx($,{id:o}):null}const k=p.memo(b);export{k as M};
//# sourceMappingURL=C1uvwPYdAODF9-YOBedv.js.map
