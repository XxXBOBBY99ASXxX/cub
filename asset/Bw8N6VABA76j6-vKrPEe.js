import{q as d,o as j,R as p,a0 as k,j as o,C as _}from"./DEYDuN7xp-m3cL830AkD.js";import{m as D}from"./DlU01QiUEGHWpg_beOfr.js";import"./CFJNYz37NDnhYvpCku9W.js";import{u as w}from"./zdDLXtJuoQIQMZlDPq5d.js";import{S as I}from"./D1PEH0-ihVsLoLRNDxxE.js";import{M as y}from"./CRVc6oM1S2A6wZaWXjdS.js";import{d as q}from"./fynzmAtJ_PmpHXIxRwqH.js";import{M as N}from"./C2M0T80ZBUdF6FBIDoaH.js";import{A as P}from"./CcpxSRmeWFfcqCGBxpy7.js";import{A as U}from"./DEwhMUWPjYXNotYwBFCo.js";const W=d.div`
	padding: 0 16px;
	margin-bottom: 25px;
`,$=d.div`
	background-color: var(--background-primary);
	padding: 0 16px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
`,F=d.div`
	display: flex;
	flex-direction: row;
`,G=d.div`
	flex: 0 0 auto;
	position: sticky;
`,K=d.div`
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
`;function R({channel:t}){var M;const c=w(),[n,h]=p.useState(""),[s,a]=p.useState([]),x=p.useCallback(q(()=>t.stopTyping(),1e4),[t]),S=p.useCallback(()=>!(!s.length&&(!n||!n.trim()||!n.replace(/\r?\n|\r/g,""))),[s,n]),E=p.useCallback(async()=>{t.stopTyping();const e=c.experiments.isTreatmentEnabled("message_queue",2),m=!c.experiments.isTreatmentEnabled("message_queue",1);if(!S()&&!e)return;const u=n,l=s;h(""),a([]),x(!0);const g=I.generate(),f=c.queue.add({id:g,content:u,files:l,author:c.account.raw,channel_id:t.id,guild_id:t.guildId,timestamp:new Date().toISOString(),type:k.Default});if(m)try{let r;if(l.length>0){const i=new FormData;i.append("payload_json",JSON.stringify({content:n,nonce:g})),l.forEach((v,C)=>{i.append(`files[${C}]`,v)}),r=i}else r={content:n,nonce:g};await t.sendMessage(r,f)}catch(r){const i=r instanceof Error?r.message:typeof r=="string"?r:"Unknown error";f.fail(i)}else e&&f.fail("Message queue experiment")},[n,s,t,S]),A=e=>{if(e.ctrlKey&&e.key==="Enter"||!e.shiftKey&&e.key==="Enter")return e.preventDefault(),E();e.key==="Escape"&&s.length>0&&a([]),x(!0)},T=e=>{h(e.target.value),t.startTyping()},b=e=>{if(e.length!==0){if(e.length>y||s.length+e.length>y){D.push({type:"error",title:"Too many attachments",error:`You can only attach ${y} files at once.`});return}a(m=>[...m,...e])}};return o.jsx(W,{children:o.jsxs($,{children:[o.jsx(U,{attachments:s,remove:e=>{s.length!==0&&(s.length===1?a([]):a(s.filter((m,u)=>u!==e)))}}),o.jsxs(F,{children:[o.jsx(G,{children:t.hasPermission("ATTACH_FILES")&&t.hasPermission("SEND_MESSAGES")&&o.jsx(P,{append:b})}),o.jsx(N,{id:"messageinput",value:n,placeholder:t.hasPermission("SEND_MESSAGES")?`Message ${t.type===_.DM?(M=t.recipients)==null?void 0:M[0].username:"#"+t.name}`:"You do not have permission to send messages in this channel.",disabled:!t.hasPermission("SEND_MESSAGES"),onChange:T,onKeyDown:A}),o.jsx(K,{})]})]})})}const Z=j(R);export{Z as M};
//# sourceMappingURL=Bw8N6VABA76j6-vKrPEe.js.map
