import{q as n,u as j,f as x,R as o,j as t}from"./DEYDuN7xp-m3cL830AkD.js";import{C as w}from"./CZ177u3GNS87Q_oqsjHX.js";import{m as M}from"./DlU01QiUEGHWpg_beOfr.js";import"./CFJNYz37NDnhYvpCku9W.js";import{u as $}from"./zdDLXtJuoQIQMZlDPq5d.js";import{P as I}from"./B8a7_oPVuhqv4mSPchaN.js";import{I as s}from"./B94yhYbfBuA5NqzsiYEV.js";import{F as P}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as b}from"./BIydnCOjy0yj0KXiAVvY.js";const k=n.div`
	padding: ${e=>e.isCategory?"16px 8px 0 0":"1px 8px 0 0"};
	cursor: pointer;
`,E=n.div`
	margin-left: ${e=>e.isCategory?"0":"8px"};
	height: ${e=>e.isCategory?"28px":"33px"};
	border-radius: 4px;
	align-items: center;
	display: flex;
	padding: ${e=>e.isCategory?"0 8px 0 8px":"0 16px"};
	background-color: ${e=>e.active?"var(--background-primary-alt)":"transparent"};
	justify-content: space-between;

	&:hover {
		background-color: ${e=>e.isCategory?"transparent":"var(--background-primary-alt)"};
	}
`,H=n.span`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	color: ${e=>e.isCategory&&e.hovered?"var(--text)":"var(--text-secondary)"};
	user-select: none;
`;function T({channel:e,isCategory:r,active:d}){const m=$(),f=j(),a=x.useContext(w),[i,p]=o.useState(!1),[g,c]=o.useState(!1),[v,l]=o.useState(!1),[C,h]=o.useState(!1);return x.useEffect(()=>{if(!r)return;const y=I.getPermission(m.account.id,e.guild,e).has("MANAGE_CHANNELS");h(y)},[e]),t.jsx(k,{isCategory:r,onClick:()=>{e.isTextChannel&&f(`/channels/${e.guildId}/${e.id}`)},ref:a.setReferenceElement,onContextMenu:u=>a.onContextMenu(u,{type:"channel",channel:e}),children:t.jsxs(E,{isCategory:r,active:d,onMouseOver:()=>p(!0),onMouseOut:()=>p(!1),children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.channelIcon&&!r&&t.jsx(s,{icon:e.channelIcon,size:"16px",style:{marginRight:"8px"},color:"var(--text-secondary)"}),r&&t.jsx(s,{icon:"mdiChevronDown",size:"12px",color:i?"var(--text)":"var(--text-secondary)",style:{marginRight:"8px"}}),t.jsx(H,{isCategory:r,hovered:i,children:e.name})]}),r&&C&&t.jsx(P,{placement:"top",type:"tooltip",offset:10,props:{content:t.jsx("span",{children:"Create Channel"})},children:t.jsx(b,{children:t.jsx("span",{onMouseOver:()=>c(!0),onMouseOut:()=>c(!1),onMouseDown:()=>l(!0),onMouseUp:()=>l(!1),onClick:()=>{if(!e.guild){console.warn("No guild found for channel",e);return}M.push({type:"create_channel",guild:e.guild,category:e})},children:t.jsx(s,{icon:"mdiPlus",size:"18px",style:{marginLeft:"auto"},color:v?"var(--text-header)":g?"var(--text)":"var(--text-secondary)"})})})})]})},e.id)}export{T as C};
//# sourceMappingURL=_a2nbyBlJj5scP7Xn1Nd.js.map
