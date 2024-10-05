import{q as h,o as d,j as e,h as p,L as m,C as a}from"./DEYDuN7xp-m3cL830AkD.js";import{u as x}from"./zdDLXtJuoQIQMZlDPq5d.js";import{C as v}from"./_a2nbyBlJj5scP7Xn1Nd.js";const c=h.div`
	display: flex;
	flex: 1;
`;function f(){const t=x();if(!t.activeGuild||!t.activeChannel)return e.jsx(c,{});const{channels:s}=t.activeGuild,l=({index:r,key:i,style:o})=>{const n=s[r],u=t.activeChannelId===n.id,C=n.type===a.GuildCategory;return e.jsx("div",{style:o,children:e.jsx(v,{isCategory:C,active:u,channel:n},i)})};return e.jsx(c,{children:e.jsx(p,{children:({width:r,height:i})=>e.jsx(m,{height:i,overscanRowCount:2,rowCount:s.length,rowHeight:({index:o})=>s[o].type===a.GuildCategory?44:33,rowRenderer:l,width:r})})})}const L=d(f);export{L as C};
//# sourceMappingURL=3i2vWdesvkbF47i5Q7T6.js.map
