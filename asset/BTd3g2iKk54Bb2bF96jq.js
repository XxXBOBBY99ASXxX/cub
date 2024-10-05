import{q as a,o as u,R as t,f,j as e}from"./DEYDuN7xp-m3cL830AkD.js";import{u as h}from"./zdDLXtJuoQIQMZlDPq5d.js";import{I as m}from"./B94yhYbfBuA5NqzsiYEV.js";import{S as x}from"./0WhST9NCUz7On59exuEj.js";import{F as g}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as v}from"./BIydnCOjy0yj0KXiAVvY.js";const s=a(x)`
	background-color: var(--background-secondary);
	cursor: pointer;

	&:hover {
		background-color: var(--background-secondary-highlight);
	}
`,i=a.header`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	user-select: none;
`;function j(){const r=h(),[o,c]=t.useState(!1),[l,n]=t.useState("mdiChevronDown"),d=p=>{c(p)};return f.useEffect(()=>{n(o?"mdiClose":"mdiChevronDown")},[o]),r.activeGuildId==="@me"?e.jsx(s,{style:{cursor:"default",pointerEvents:"none",display:"flex",justifyContent:"center"},children:e.jsx(i,{children:"Direct Messages"})}):r.activeGuild?e.jsx(g,{type:"guild",open:o,onOpenChange:d,props:{guild:r.activeGuild},children:e.jsx(v,{children:e.jsxs(s,{children:[e.jsx(i,{children:r.activeGuild.name}),e.jsx(m,{icon:l,size:"20px",color:"var(--text)"})]})})}):null}const E=u(j);export{E as C};
//# sourceMappingURL=BTd3g2iKk54Bb2bF96jq.js.map
