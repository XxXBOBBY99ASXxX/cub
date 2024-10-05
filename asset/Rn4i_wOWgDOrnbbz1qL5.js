import{q as i,o as l,j as e,R as d,Y as m}from"./DEYDuN7xp-m3cL830AkD.js";import{u as c}from"./zdDLXtJuoQIQMZlDPq5d.js";import{M as p}from"./BbX4uXhcu33F9J3gqkoK.js";import{C as x}from"./xn9JGbSJZX2TnbBvckVW.js";import{M as f}from"./Bw8N6VABA76j6-vKrPEe.js";import{M as u}from"./Bh2fBHGoM6jnaDynWtED.js";import{T as h}from"./BzpSUQqnloStUF6y5NlJ.js";const j=i.div`
	display: flex;
	flex-direction: row;
	flex: 1 1 auto;
	overflow: hidden;
`,t=i.div`
	display: flex;
	flex-direction: column;
	background-color: var(--background-primary-alt);
	flex: 1 1 auto;
	overflow: hidden;
`,v=i.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	position: relative;
	overflow: hidden;
`;function C({channel:r,guild:n}){return e.jsxs(v,{children:[e.jsx(u,{guild:n,channel:r}),e.jsx(f,{channel:r,guild:n}),e.jsx(h,{channel:r})]})}const y=l(r=>{const{memberListVisible:n}=c();return e.jsxs(j,{children:[e.jsx(C,{...r}),n&&e.jsx(p,{})]})});function g(){const r=c(),{activeChannel:n,activeGuild:o,activeChannelId:a,activeGuildId:s}=r;return d.useEffect(()=>{!n||!o||a==="@me"||m(()=>{r.gateway.onChannelOpen(s,a)})},[n,o]),s&&s==="@me"?e.jsx(t,{children:e.jsx("span",{style:{padding:"1rem",userSelect:"none"},children:"Home Section Placeholder"})}):!o||!n?e.jsx(t,{children:e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"1.5rem",margin:"auto"},children:"Unknown Guild or Channel"})}):n.hasPermission("VIEW_CHANNEL")?e.jsxs(t,{children:[e.jsx(x,{channel:n}),e.jsx(y,{channel:n,guild:o})]}):e.jsx(t,{children:e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"1.5rem",margin:"auto"},children:"You do not have permission to view this channel"})})}const k=l(g);export{k as C};
//# sourceMappingURL=Rn4i_wOWgDOrnbbz1qL5.js.map
