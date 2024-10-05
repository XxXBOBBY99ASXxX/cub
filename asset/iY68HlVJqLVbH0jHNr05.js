import{q as c,R as a,j as t}from"./DEYDuN7xp-m3cL830AkD.js";import{F as p}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as x}from"./BIydnCOjy0yj0KXiAVvY.js";const d=c.div`
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	gap: 5px;

	a {
		color: var(--text);
		cursor: pointer;
		padding: 2px 6px;
		font-weight: 600;
		user-select: none;
		display: inline-block;
		background: var(--background-tertiary);

		font-size: 10px;
		text-transform: uppercase;
	}
`;function h(e){const o=a.useRef(null);let r="Copy";e.class&&(r=e.class.split("-")[1]);const l=a.useCallback(()=>{var i,s;const n=(s=(i=o.current)==null?void 0:i.querySelector("code"))==null?void 0:s.innerText;n&&navigator.clipboard.writeText(n)},[o]);return t.jsxs("pre",{ref:o,style:{position:"relative"},children:[t.jsx(d,{children:t.jsx(p,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:'"Copy to Clipboard'})},children:t.jsx(x,{children:t.jsx("a",{onClick:l,children:r})})})}),e.children]})}export{h as C};
//# sourceMappingURL=iY68HlVJqLVbH0jHNr05.js.map
