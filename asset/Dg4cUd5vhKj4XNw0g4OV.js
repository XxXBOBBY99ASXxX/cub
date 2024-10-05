import{q as n,A as p,o as j,f as v,j as e}from"./DEYDuN7xp-m3cL830AkD.js";import{u as b}from"./zdDLXtJuoQIQMZlDPq5d.js";import{S as w}from"./CY6n2S5TtR4tZq-AWBsc.js";const y=n.div`
	display: flex;
	flex-direction: column;
`,A=n.div`
	border-radius: 8px;
	background-color: var(--background-secondary);
	padding: 16px;
`,i=n.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${t=>t.spacerTop&&p`
			margin-top: 24px;
		`}

	${t=>t.spacerBottom&&p`
			margin-bottom: 24px;
		`}
`,r=n.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	margin-right: 16px;
`,s=n.span`
	margin-bottom: 4px;
	color: var(--text-secondary);
	font-size: 12px;
	font-weight: var(--font-weight-medium);
	letter-spacing: 0.5px;
`,c=n.div`
	overflow: hidden;
	text-overflow: ellipsis;
`,a=n.span`
	color: var(--text);
	font-size: 16px;
	font-weight: var(--font-weight-regular);
`,S=n.button`
	color: var(--text-link);
	cursor: pointer;
	width: auto;
	display: inline;
	height: auto;
	padding: 2px 4px;
	position: relative;
	background: none;
	border: none;
	border-radius: 4px;
	font-size: 14px;
	font-weight: var(--font-weight-medium);
	user-select: none;
	text-rendering: optimizeLegibility;
`;function E(){var d,l,x;const t=b(),[o,u]=v.useState(!0),h=m=>{const[g,f]=m.split("@");return`${"*".repeat(g.length)}@${f}`};return e.jsxs("div",{children:[e.jsx(w,{children:"Account"}),e.jsx(y,{children:e.jsxs(A,{children:[e.jsx(i,{spacerBottom:!0,children:e.jsxs(r,{children:[e.jsx(s,{children:"Username"}),e.jsx(c,{children:e.jsxs(a,{children:[(d=t.account)==null?void 0:d.username,"#",(l=t.account)==null?void 0:l.discriminator]})})]})}),e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(s,{children:"Email"}),e.jsx(c,{children:e.jsxs(a,{children:[(x=t.account)!=null&&x.email?o?h(t.account.email):t.account.email:"No email added.",e.jsx(S,{onClick:()=>u(!o),children:o?"Reveal":"Hide"})]})})]})}),e.jsx(i,{spacerTop:!0,children:e.jsxs(r,{children:[e.jsx(s,{children:"Phone Number"}),e.jsx(c,{children:e.jsx(a,{children:"No phone number added."})})]})})]})})]})}const R=j(E);export{R as A};
//# sourceMappingURL=Dg4cUd5vhKj4XNw0g4OV.js.map
