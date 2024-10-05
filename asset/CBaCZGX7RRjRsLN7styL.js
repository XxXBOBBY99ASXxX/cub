import{q as r,A as f,o as g,f as h,j as e}from"./DEYDuN7xp-m3cL830AkD.js";import{u as m}from"./zdDLXtJuoQIQMZlDPq5d.js";import{i as u}from"./DFxtuzOGt4j9P4wz18l_.js";import{G as v,A as b,R as j,a as l}from"./CrNJGRo3pw0y5gaN129g.js";import{I as d}from"./B94yhYbfBuA5NqzsiYEV.js";import{L as w}from"./OR_ytwRu4mBfmJHq_ldu.js";import{M as y}from"./CsaE-lDR2QAIk4CN9raM.js";import{A as C}from"./Dg4cUd5vhKj4XNw0g4OV.js";import{D as k}from"./CIcAnCYJgtoSyWt89tnH.js";import{E as I}from"./BzvuNmCrzsAt3lI5NK7p.js";const S=r.div`
	display: flex;
	flex: 1;
	overflow: hidden;
`,A=r.div`
	display: flex;
	flex: 1 0 220px;
	justify-content: flex-end;
`,E=r.div`
	overflow: hidden scroll;
	display: flex;
	flex: 1 0 auto;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-start;
	background: var(--background-secondary);
`,z=r.nav`
	width: 220px;
	padding: 60px 6px 20px;
	box-sizing: border-box;
`,R=r.div`
	display: flex;
	flex-direction: column;
`,$=r.div`
	display: flex;
	flex: 1 1 800px;
	align-items: flex-start;
	background: var(--background-primary);
`,P=r.div`
	overflow: hidden scroll;
	justify-content: flex-start;
	position: static;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	background: var(--background-primary);
	box-sizing: border-box;
`,L=r.div`
	padding: 60px 40px 80px;
	flex: 1 1 auto;
	max-width: 740px;
	min-width: 460px;
	min-height: 100%;
	box-sizing: border-box;
`,N=r.div`
	padding: 6px 10px;
	color: var(--text-secondary);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	flex-shrink: 0;
	font-size: 14px;
	font-weight: var(--font-weight-bold);
	letter-spacing: 0.5px;
`,i=r.div`
	padding: 5px 10px;
	margin-bottom: 5px;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	flex-shrink: 0;
	color: ${o=>o.textColor??"var(--text-secondary);"};

	&:hover {
		background-color: hsl(var(--background-primary-hsl) / 0.6);
		cursor: pointer;
	}

	${o=>o.selected&&f`
			background-color: var(--background-primary);
			color: var(--text);
		`}
`,s=r.div`
	margin: 8px 10px;
	height: 1px;
	background-color: var(--text-disabled);
`,O=r.div`
	padding: 8px 10px;
	color: var(--text-secondary);
	font-size: 12px;
	font-weight: var(--font-weight-regular);
`,T=r.div`
	margin-right: 20px;
	flex: 0 0 36px;
	width: 60px;
	padding-top: 60px;
	position: relative;
`,V=r.div`
	position: fixed;
`,_=r.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,B=r.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 0 0 40px;
	border: solid 1px;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	cursor: pointer;
	color: var(--text-secondary);
`,Q=g(({...o})=>{const x=m(),[n,c]=h.useState(0),t=p=>{const a=p.currentTarget.getAttribute("data-value");a&&c(parseInt(a))};return e.jsx(y,{...o,fullScreen:!0,withoutCloseButton:!0,withEmptyActionBar:!0,padding:"0",children:e.jsxs(S,{children:[e.jsx(A,{children:e.jsx(E,{children:e.jsx(z,{children:e.jsxs(R,{children:[e.jsx(N,{children:"User Settings"}),e.jsx(i,{"data-value":"0",onClick:t,children:"Account"}),e.jsx(s,{}),e.jsx(i,{"data-value":"1",onClick:t,children:"Developer Options"}),e.jsx(i,{"data-value":"2",onClick:t,children:"Experiments"}),e.jsx(s,{}),e.jsx(i,{onClick:x.logout,children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",color:"var(--error)"},children:["Log Out",e.jsx(d,{icon:"mdiLogout",size:"16px",color:"var(--error)"})]})}),e.jsx(s,{}),e.jsxs(O,{children:[e.jsxs("span",{children:[v," ",b," (",e.jsx(w,{href:`${j}/commit/${l}`,target:"_blank",rel:"noreferrer",children:l.substring(0,7)}),")"]}),u&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:["Tauri ",window.globals.tauriVersion??"Fetching version information..."]}),e.jsx("span",{children:`${window.globals.platform.name} ${window.globals.platform.arch} (${window.globals.platform.version})`}),e.jsx("span",{children:window.globals.platform.locale??"Unknown"})]})]})]})})})}),e.jsx($,{children:e.jsxs(P,{children:[e.jsxs(L,{children:[n===0&&e.jsx(C,{}),n===1&&e.jsx(k,{}),n===2&&e.jsx(I,{})]}),e.jsxs(T,{children:[e.jsx(V,{}),e.jsx(_,{children:e.jsx(B,{onClick:()=>{console.log("Close modal")},children:e.jsx(d,{icon:"mdiClose",size:"18px"})})})]})]})})]})})});export{Q as S};
//# sourceMappingURL=CBaCZGX7RRjRsLN7styL.js.map
