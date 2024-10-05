import{q as d,o as v,f as C,R as o,j as s}from"./DEYDuN7xp-m3cL830AkD.js";import{C as g}from"./CZ177u3GNS87Q_oqsjHX.js";import{u as M}from"./zdDLXtJuoQIQMZlDPq5d.js";import{F as b}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as E}from"./BIydnCOjy0yj0KXiAVvY.js";const j=d.div`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	user-select: none;

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;function y({message:t,guild:c}){const p=M(),u=C.useContext(g),[f,m]=o.useState(void 0),[r,l]=o.useState(),[i,h]=o.useState(void 0),{members:n}=c||{};o.useEffect(()=>{r&&u.onContextMenu(r,{type:"user",user:t.author,member:i})},[r,i]);const x=async e=>{var a;e.preventDefault(),e.stopPropagation(),l(e),(a=p.guilds.get(t.guild_id))==null||a.members.resolve(t.author.id).then(h)};return o.useEffect(()=>{if(!n)return;const e=n.get(t.author.id);e&&m(e.roleColor)},[t,n]),s.jsx(b,{placement:"right-start",type:"userPopout",props:{user:t.author},children:s.jsx(E,{children:s.jsx(j,{style:{color:f},ref:u.setReferenceElement,onContextMenu:x,children:t.author.username})})})}const q=v(y);export{q as M};
//# sourceMappingURL=CAENNYHyDGwiXac_Jodl.js.map
