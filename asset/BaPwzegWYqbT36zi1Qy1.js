import{q as s,f as m,M as n,j as t}from"./DEYDuN7xp-m3cL830AkD.js";import{F as i}from"./Bc_CI9fYq0FFF-wnlCnI.js";import{F as d}from"./BIydnCOjy0yj0KXiAVvY.js";const c=s.div`
	background-color: hsl(var(--background-tertiary-hsl) / 0.3);
	padding: 2px;
	border-radius: 4px;
	width: fit-content;
`;function p({timestamp:e,style:o}){const a=n.unix(Number(e));let r="";switch(o){case"t":r=a.format("hh:mm");break;case"T":r=a.format("hh:mm:ss");break;case"R":r=a.fromNow();break;case"D":r=a.format("DD MMMM YYYY");break;case"F":r=a.format("dddd, DD MMMM YYYY hh:mm");break;case"f":default:r=a.format("DD MMMM YYYY hh:mm");break}return t.jsx(c,{children:t.jsx(i,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:a.format("dddd, MMMM MM, h:mm A")})},children:t.jsx(d,{children:t.jsx("span",{children:r})})})})}const l=m.memo(p);export{l as T};
//# sourceMappingURL=BaPwzegWYqbT36zi1Qy1.js.map
