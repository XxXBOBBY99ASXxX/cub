import{q as m,o as x,u,f as v,R as s,j as t,n as y,I as C,C as I}from"./DEYDuN7xp-m3cL830AkD.js";import{C as j}from"./CZ177u3GNS87Q_oqsjHX.js";import{u as b}from"./zdDLXtJuoQIQMZlDPq5d.js";import{P as E}from"./B8a7_oPVuhqv4mSPchaN.js";import{R as G}from"./hbLYaJX3EGTvbt5QpPV-.js";import{C as S}from"./BisB-MQD1dPuIWb42m0D.js";import{S as N}from"./DlgDXiEhLikS2_g6qtZo.js";import{F as R}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as $}from"./BIydnCOjy0yj0KXiAVvY.js";const k=m.div`
	position: relative;
	display: flex;
	justify-content: center;
	cursor: pointer;
`,M=m(S)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.hasImage?"transparent":e.active?"var(--primary)":"var(--background-secondary)"};
	transition:
		border-radius 0.2s ease,
		background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.hasImage?"transparent":"var(--primary)"};
	}
`;function P({guild:e,active:f}){const n=b(),l=u(),a=v.useContext(j),[h,r]=s.useState("none"),[i,c]=s.useState(!1);s.useEffect(()=>n.activeChannelId&&n.activeGuildId===e.id?r("active"):r(i?"hover":"none"),[n.activeGuildId,i]);const d=()=>{const o=e.channels.find(p=>E.getPermission(n.account.id,e,p).has("VIEW_CHANNEL")&&p.type!==I.GuildCategory);l(`/channels/${e.id}${o?`/${o.id}`:""}`)};return t.jsxs(k,{ref:a.setReferenceElement,onContextMenu:o=>a.onContextMenu(o,{type:"guild",guild:e}),children:[t.jsx(N,{type:h}),t.jsx(R,{placement:"right",type:"tooltip",offset:20,props:{content:t.jsx("span",{children:e.name})},children:t.jsx($,{children:t.jsx(M,{onClick:d,active:f,hasImage:!!(e!=null&&e.icon),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:e.icon?t.jsx("img",{src:G.makeCDNUrl(y.guildIcon(e.id,e==null?void 0:e.icon,C.PNG)),width:48,height:48,loading:"lazy"}):t.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:e==null?void 0:e.acronym})})})})]})}const D=x(P);export{k as G,D as a};
//# sourceMappingURL=CgV5dKuUDv2IPg3ZT2oY.js.map
