import{q as c,R as n,j as r}from"./DEYDuN7xp-m3cL830AkD.js";import{C as l}from"./BisB-MQD1dPuIWb42m0D.js";import{G as s}from"./CgV5dKuUDv2IPg3ZT2oY.js";import{I as m}from"./B94yhYbfBuA5NqzsiYEV.js";import{S as d}from"./DlgDXiEhLikS2_g6qtZo.js";import{F as u}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as f}from"./BIydnCOjy0yj0KXiAVvY.js";const g=c(l)`
	${e=>e.margin!==!1?"margin-top: 9px;":""}};
	padding: 0;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.active?"var(--primary)":"var(--background-secondary)"};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: border-radius 0.2s ease, background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.useGreenColorScheme?"var(--success)":"var(--primary)"};

	}
`;function C(e){if(e.image&&e.icon&&e.label)throw new Error("SidebarAction can only have one of image, icon, or label");const[t,i]=n.useState("none"),[a,o]=n.useState(!1);return n.useEffect(()=>{if(!e.disablePill)return e.active?i("active"):i(a?"hover":"none")},[e.active,a]),r.jsxs(s,{children:[r.jsx(d,{type:t}),r.jsx(u,{placement:"right",type:"tooltip",offset:20,props:{content:r.jsx("span",{children:e.tooltip})},children:r.jsx(f,{children:r.jsxs(g,{onClick:e.action,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),margin:e.margin,active:e.active,useGreenColorScheme:e.useGreenColorScheme,children:[e.image&&r.jsx("img",{...e.image,loading:"lazy"}),e.icon&&r.jsx(m,{...e.icon,color:a&&e.useGreenColorScheme?"var(--text)":e.icon.color}),e.label&&r.jsx("span",{children:e.label})]})})})]})}export{C as S};
//# sourceMappingURL=CEmQnnpbgDVTwJpbWSts.js.map
