import{q as l,o as m,R as r,x as c,j as i}from"./DEYDuN7xp-m3cL830AkD.js";import{u as d}from"./zdDLXtJuoQIQMZlDPq5d.js";import{L as u}from"./DTibWn8R1AT2k8TLRti5.js";import{M as p}from"./DUid96tUHbjsjFdSiI-E.js";const x=l.div`
	display: flex;
	flex: 0 0 240px;
	flex-direction: column;
	background-color: var(--background-secondary);
	overflow-x: hidden;

	@media (max-width: 1050px) {
		display: none;
	}
`,f=l.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	// overflow-y: auto;
	// height: 100%;
	// width: 100%;
`;function h(){const e=d(),[o,a]=r.useState(null);return r.useEffect(()=>c(()=>{if(e.activeGuild&&e.activeChannel){const{memberLists:t}=e.activeGuild,n=e.activeChannel.listId,s=t.get(n);a(s?s.list:null)}else a(null)}),[]),i.jsx(x,{children:i.jsx(f,{children:o?o.map((t,n)=>i.jsx(u,{name:t.name,items:t.items.map(s=>i.jsx(p,{item:s}))},n)):null})})}const g=m(h);export{g as M};
//# sourceMappingURL=BbX4uXhcu33F9J3gqkoK.js.map
