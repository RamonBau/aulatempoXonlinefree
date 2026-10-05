(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`],t=`15:00`,n=`21:00`;function r(){return{teachers:[{id:1,name:`Anna Vidal`,color:`#f28b82`,instrument:`Piano`},{id:2,name:`Marc Soler`,color:`#a7ffeb`,instrument:`Guitar`},{id:3,name:`Laura Puig`,color:`#ccff90`,instrument:`Violin`},{id:4,name:`Jon Smith`,color:`#aecbfa`,instrument:`Drums`},{id:5,name:`Clara Ríos`,color:`#fdcfe8`,instrument:`Voice`},{id:6,name:`Pau Ferrer`,color:`#fff475`,instrument:`Theory`}],rooms:[{id:1,name:`Piano 1`},{id:2,name:`Piano 2`},{id:3,name:`Guitar`},{id:4,name:`Strings`},{id:5,name:`Drums`},{id:6,name:`Combo`},{id:7,name:`Theory`}],students:[{id:1,name:`Emma Carter`,instrument:`Piano`,phone:`+1 555 0101`},{id:2,name:`Leo Martín`,instrument:`Guitar`,phone:`+34 600 111 222`},{id:3,name:`Sofia Ng`,instrument:`Violin`,phone:`+44 7700 900123`},{id:4,name:`Noah Berg`,instrument:`Drums`,phone:`+49 151 2345678`},{id:5,name:`Mia Rossi`,instrument:`Voice`,phone:`+39 333 1112233`},{id:6,name:`Lucas Pérez`,instrument:`Piano`,phone:`+34 612 345 678`},{id:7,name:`Olivia Chen`,instrument:`Guitar`,phone:`+1 555 0199`},{id:8,name:`Hugo Dubois`,instrument:`Theory`,phone:`+33 6 12 34 56 78`},{id:9,name:`Ava Silva`,instrument:`Violin`,phone:`+351 912 345 678`},{id:10,name:`Mateo López`,instrument:`Combo`,phone:`+34 655 000 111`},{id:11,name:`Isla Brown`,instrument:`Piano`,phone:`+44 7700 900456`},{id:12,name:`Diego Costa`,instrument:`Drums`,phone:`+34 622 888 999`},{id:13,name:`Nora Haas`,instrument:`Voice`,phone:`+49 170 998877`},{id:14,name:`Theo Blanc`,instrument:`Guitar`,phone:`+33 6 98 76 54 32`},{id:15,name:`Lina Ortega`,instrument:`Piano`,phone:`+34 677 121 212`}],classes:[{id:1,day:0,roomId:1,teacherId:1,studentIds:[1],start:`16:00`,end:`16:30`},{id:2,day:0,roomId:1,teacherId:1,studentIds:[6],start:`16:30`,end:`17:00`},{id:3,day:0,roomId:3,teacherId:2,studentIds:[2],start:`17:00`,end:`17:30`},{id:4,day:0,roomId:6,teacherId:6,studentIds:[10,7,14],start:`18:00`,end:`19:00`,title:`Combo band`,isGroup:!0},{id:5,day:0,roomId:4,teacherId:3,studentIds:[3],start:`17:30`,end:`18:00`},{id:6,day:1,roomId:5,teacherId:4,studentIds:[4],start:`16:00`,end:`16:45`},{id:7,day:1,roomId:2,teacherId:1,studentIds:[11],start:`17:00`,end:`17:30`},{id:8,day:1,roomId:7,teacherId:6,studentIds:[8,10],start:`17:30`,end:`18:15`,title:`Theory group`,isGroup:!0},{id:9,day:1,roomId:3,teacherId:2,studentIds:[7],start:`18:00`,end:`18:30`},{id:10,day:2,roomId:1,teacherId:1,studentIds:[15],start:`16:00`,end:`17:00`},{id:11,day:2,roomId:4,teacherId:3,studentIds:[9],start:`16:30`,end:`17:00`},{id:12,day:2,roomId:6,teacherId:5,studentIds:[5,13],start:`18:00`,end:`18:45`,title:`Voice duo`,isGroup:!0},{id:13,day:2,roomId:5,teacherId:4,studentIds:[12],start:`17:00`,end:`17:30`},{id:14,day:3,roomId:3,teacherId:2,studentIds:[2,14],start:`16:00`,end:`16:45`,title:`Guitar duo`,isGroup:!0},{id:15,day:3,roomId:1,teacherId:1,studentIds:[1],start:`17:00`,end:`17:30`},{id:16,day:3,roomId:7,teacherId:6,studentIds:[8],start:`17:30`,end:`18:00`},{id:17,day:3,roomId:4,teacherId:3,studentIds:[3],start:`18:00`,end:`18:30`},{id:18,day:4,roomId:2,teacherId:1,studentIds:[6,11],start:`16:00`,end:`16:45`,title:`Piano duo`,isGroup:!0},{id:19,day:4,roomId:5,teacherId:4,studentIds:[4],start:`17:00`,end:`17:30`},{id:20,day:4,roomId:6,teacherId:6,studentIds:[10,7,12],start:`18:00`,end:`19:00`,title:`Friday combo`,isGroup:!0},{id:21,day:4,roomId:3,teacherId:2,studentIds:[7],start:`16:30`,end:`17:00`}],nextIds:{teacher:7,room:8,student:16,class:22}}}var i=`aulatempox-web-demo-v1`;function a(){try{let e=localStorage.getItem(i);if(!e){let e=r();return o(e),e}return JSON.parse(e)}catch{let e=r();return o(e),e}}function o(e){localStorage.setItem(i,JSON.stringify(e))}function s(){let e=r();return o(e),e}function c(e){let[t,n]=e.split(`:`).map(Number);return t*60+n}function l(e){let t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}function u(e,t,n,r){let i=c(e),a=c(t),o=c(n),s=c(r);return!(a<=o||i>=s)}function d(e,t,n){let r=[];for(let i=c(e);i<c(t);i+=n)r.push(l(i));return r}function f(e){let t=e.replace(`#`,``);if(t.length!==6)return`#2f3640`;let n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),i=parseInt(t.slice(4,6),16);return(n*299+r*587+i*114)/1e3>=160?`#2f3640`:`#ffffff`}function p(e,t){let n=e.filter(e=>e.day===t),r=new Set,i=e=>{let t=[...e].sort((e,t)=>e.start.localeCompare(t.start));for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++)u(t[e].start,t[e].end,t[n].start,t[n].end)&&(r.add(t[e].id),r.add(t[n].id))},a=new Map,o=new Map;for(let e of n)a.has(e.teacherId)||a.set(e.teacherId,[]),a.get(e.teacherId).push(e),o.has(e.roomId)||o.set(e.roomId,[]),o.get(e.roomId).push(e);for(let e of a.values())i(e);for(let e of o.values())i(e);return r}var m=`info@aulatempox.com`,h=`AulaTempoX desktop demo request`,g=`Hi,

I would like to receive the AulaTempoX desktop demo and install instructions.

Thanks.`,_=`mailto:${m}?subject=${encodeURIComponent(h)}&body=${encodeURIComponent(g)}`,v=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(m)}&su=${encodeURIComponent(h)}&body=${encodeURIComponent(g)}`,y=`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(m)}&subject=${encodeURIComponent(h)}&body=${encodeURIComponent(g)}`,b=[{id:`receipts`,label:`Receipts`,blurb:`Issue and track receipts for each student. Available in the full AulaTempoX desktop app.`},{id:`payments`,label:`Payments / SEPA`,blurb:`SEPA direct-debit remittances, IBAN checks and billing workflows. Available in the full commercial version.`},{id:`hours`,label:`Teacher hours`,blurb:`Automatic teacher hour counts from the timetable. Available in the full AulaTempoX desktop app.`},{id:`export`,label:`Exports`,blurb:`PDF/Excel exports of schedules and lists. Available in the full commercial version.`},{id:`whatsapp`,label:`WhatsApp notices`,blurb:`Prepared messages with weekly schedules for families. Available in the full AulaTempoX desktop app.`},{id:`reports`,label:`Reports`,blurb:`Statistics and school reports. Available in the full commercial version.`}],x=a(),S=`schedule`,C=0,w=null,T=null,E=document.querySelector(`#app`);function D(){o(x)}function O(e){return x.teachers.find(t=>t.id===e)}function k(e){return e.map(e=>x.students.find(t=>t.id===e)?.name).filter(Boolean).join(`, `)}function A(){E.innerHTML=`
    <div class="banner">
      Browser-only · data stays in this browser
      <span class="spacer"></span>
      <button type="button" class="btn ghost compact" id="btn-reset">Reset</button>
    </div>
    <header class="topbar">
      <div class="brand">AulaTempoX <span>Free schedule preview</span></div>
      <nav class="menu">
        <button type="button" data-view="schedule" class="${S===`schedule`?`active`:``}">Schedule</button>
        <button type="button" data-view="teachers" class="${S===`teachers`?`active`:``}">Teachers</button>
        <button type="button" data-view="students" class="${S===`students`?`active`:``}">Students</button>
        <button type="button" data-view="rooms" class="${S===`rooms`?`active`:``}">Rooms</button>
        ${b.map(e=>`<button type="button" class="locked" data-locked="${e.id}">${e.label}</button>`).join(``)}
      </nav>
      <button type="button" class="cta" id="btn-demo">Request desktop demo</button>
    </header>
    <div class="main" id="main"></div>
  `,j();let e=E.querySelector(`#main`);e.innerHTML=S===`schedule`?I():S===`teachers`?z():S===`students`?V():B(),L()}function j(){E.querySelector(`#btn-reset`)?.addEventListener(`click`,()=>{confirm(`Reset all data to the sample school? Your changes will be lost.`)&&(x=s(),A())}),E.querySelector(`#btn-demo`)?.addEventListener(`click`,()=>N()),E.querySelectorAll(`[data-view]`).forEach(e=>{e.addEventListener(`click`,()=>{S=e.dataset.view,A()})}),E.querySelectorAll(`[data-locked]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=b.find(t=>t.id===e.dataset.locked);t&&P(t.label,t.blurb)})})}async function M(e,t,n){try{await navigator.clipboard.writeText(e);let r=t.textContent;t.textContent=`Copied!`,setTimeout(()=>{t.textContent=r||n},1400)}catch{window.prompt(`Copy this address:`,e)}}function N(){let e=document.createElement(`div`);e.className=`overlay`,e.innerHTML=`
    <div class="modal contact-modal">
      <h3>Request desktop demo</h3>
      <p class="muted">
        No mail app needed. Copy the address, or open Gmail / Outlook in the browser.
      </p>
      <div class="contact-email-row">
        <code class="contact-email">${F(m)}</code>
        <button type="button" class="btn primary" id="copy-email">Copy email</button>
      </div>
      <div class="contact-links">
        <a class="btn" href="${v}" target="_blank" rel="noopener noreferrer">Open in Gmail</a>
        <a class="btn" href="${y}" target="_blank" rel="noopener noreferrer">Open in Outlook</a>
        <a class="btn ghost" href="${_}">Mail app</a>
      </div>
      <details class="contact-details">
        <summary>Suggested message</summary>
        <pre class="contact-body">${F(`Subject: ${h}\n\n${g}`)}</pre>
        <button type="button" class="btn compact" id="copy-msg">Copy message</button>
      </details>
      <div class="modal-actions">
        <button type="button" class="btn" id="m-close">Close</button>
      </div>
    </div>
  `,document.body.appendChild(e);let t=()=>e.remove();e.addEventListener(`click`,n=>{n.target===e&&t()}),e.querySelector(`#m-close`)?.addEventListener(`click`,t),e.querySelector(`#copy-email`)?.addEventListener(`click`,e=>{M(m,e.currentTarget,`Copy email`)}),e.querySelector(`#copy-msg`)?.addEventListener(`click`,e=>{M(`Subject: ${h}\n\n${g}\n\nTo: ${m}`,e.currentTarget,`Copy message`)})}function P(e,t){let n=document.createElement(`div`);n.className=`overlay`,n.innerHTML=`
    <div class="modal">
      <h3>🔒 ${F(e)}</h3>
      <p>${F(t)}</p>
      <p class="muted">
        This free preview focuses on the weekly schedule (rooms × teachers × time).
        Request the desktop demo for install instructions.
      </p>
      <div class="modal-actions">
        <button type="button" class="btn" id="m-close">Close</button>
        <button type="button" class="btn primary" id="m-mail">Request desktop demo</button>
      </div>
    </div>
  `,document.body.appendChild(n);let r=()=>n.remove();n.addEventListener(`click`,e=>{e.target===n&&r()}),n.querySelector(`#m-close`)?.addEventListener(`click`,r),n.querySelector(`#m-mail`)?.addEventListener(`click`,()=>{r(),N()})}function F(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function I(){let r=d(t,n,30),i=p(x.classes,C),a=x.rooms.map((e,t)=>`<div class="room-header" style="grid-column:${t+2};grid-row:1">${F(e.name)}</div>`).join(``),o=r.map((e,t)=>{let n=x.rooms.map((e,n)=>`<div class="cell" style="grid-column:${n+2};grid-row:${t+2}"></div>`).join(``);return`<div class="time-label" style="grid-column:1;grid-row:${t+2}">${e}</div>${n}`}).join(``),s=c(t),l=(c(n)-s)/30*28,u=x.classes.filter(e=>e.day===C).map(e=>{let t=x.rooms.findIndex(t=>t.id===e.roomId);if(t<0)return``;let n=O(e.teacherId),r=(c(e.start)-s)/30*28,a=Math.max(22,(c(e.end)-c(e.start))/30*28-2),o=t*140+2,l=n?.color||`#dfe6e9`,u=f(l),d=i.has(e.id)?` conflict`:``,p=e.title||k(e.studentIds)||`Class`;return`
        <div class="class-block${d}" data-class="${e.id}"
          style="left:${o}px;top:${r}px;width:134px;height:${a}px;background:${l};color:${u}"
          title="${F(`${e.start}–${e.end} · ${n?.name||`?`} · ${p}`)}">
          <div class="t">${F(e.start)} ${F(n?.name?.split(` `)[0]||``)}</div>
          <div class="s">${F(p)}</div>
        </div>`}).join(``);return`
    <div class="toolbar">
      <div class="day-tabs" role="tablist" aria-label="Weekday">
        ${e.map((e,t)=>`<button type="button" class="day-tab${t===C?` active`:``}" data-day="${t}">${e}</button>`).join(``)}
      </div>
      <span class="toolbar-sep"></span>
      <button type="button" class="btn primary" id="btn-new-class">New class</button>
      <span class="hint">${i.size?`⚠ ${i.size} class(es) with conflicts (same teacher or room)`:`No conflicts today`}</span>
    </div>
    <div class="schedule-wrap">
      <div class="schedule-inner">
        <div class="schedule" style="grid-template-columns: var(--time-col) repeat(${x.rooms.length}, 140px); grid-template-rows: 36px repeat(${r.length}, var(--slot-h));">
          <div class="corner" style="grid-column:1;grid-row:1"></div>
          ${a}
          ${o}
        </div>
        <div class="class-layer" style="height:${l}px;width:${x.rooms.length*140}px">
          ${u}
        </div>
      </div>
    </div>
  `}function L(){S===`schedule`&&(E.querySelectorAll(`[data-day]`).forEach(e=>{e.addEventListener(`click`,()=>{C=Number(e.dataset.day),A()})}),E.querySelector(`#btn-new-class`)?.addEventListener(`click`,()=>{w=null,R()}),E.querySelectorAll(`[data-class]`).forEach(e=>{e.addEventListener(`click`,()=>{w=Number(e.dataset.class),R()})})),S===`teachers`&&H(`teacher`),S===`students`&&H(`student`),S===`rooms`&&H(`room`)}function R(){let t=w?x.classes.find(e=>e.id===w):null,n=t?{...t,studentIds:[...t.studentIds]}:{id:0,day:C,roomId:x.rooms[0]?.id||0,teacherId:x.teachers[0]?.id||0,studentIds:[],start:`17:00`,end:`17:30`,title:``,isGroup:!1},r=document.createElement(`div`);r.className=`overlay`,r.innerHTML=`
    <div class="modal">
      <h3>${t?`Edit class`:`New class`}</h3>
      <div class="form-row"><label>Day</label>
        <select id="f-day">${e.map((e,t)=>`<option value="${t}" ${t===n.day?`selected`:``}>${e}</option>`).join(``)}</select>
      </div>
      <div class="form-row"><label>Room</label>
        <select id="f-room">${x.rooms.map(e=>`<option value="${e.id}" ${e.id===n.roomId?`selected`:``}>${F(e.name)}</option>`).join(``)}</select>
      </div>
      <div class="form-row"><label>Teacher</label>
        <select id="f-teacher">${x.teachers.map(e=>`<option value="${e.id}" ${e.id===n.teacherId?`selected`:``}>${F(e.name)}</option>`).join(``)}</select>
      </div>
      <div class="form-row"><label>Start</label><input id="f-start" type="time" value="${n.start}" step="300" /></div>
      <div class="form-row"><label>End</label><input id="f-end" type="time" value="${n.end}" step="300" /></div>
      <div class="form-row"><label>Title</label><input id="f-title" type="text" placeholder="Optional" value="${F(n.title||``)}" /></div>
      <div class="form-row"><label></label><label style="font-weight:400"><input type="checkbox" id="f-group" ${n.isGroup?`checked`:``}/> Group class</label></div>
      <div class="form-row checks"><label>Students</label>
        <div class="checks-list">
          ${x.students.map(e=>`<label><input type="checkbox" value="${e.id}" ${n.studentIds.includes(e.id)?`checked`:``}/> ${F(e.name)} <span style="color:#7f8c8d">(${F(e.instrument)})</span></label>`).join(``)}
        </div>
      </div>
      <p class="conflict-note" id="f-warn" hidden></p>
      <div class="modal-actions">
        ${t?`<button type="button" class="btn danger grow" id="f-del">Delete</button>`:`<span class="grow"></span>`}
        <button type="button" class="btn" id="f-cancel">Cancel</button>
        <button type="button" class="btn primary" id="f-save">Save</button>
      </div>
    </div>
  `,document.body.appendChild(r);let i=()=>r.remove();r.addEventListener(`click`,e=>{e.target===r&&i()}),r.querySelector(`#f-cancel`)?.addEventListener(`click`,i),r.querySelector(`#f-del`)?.addEventListener(`click`,()=>{t&&confirm(`Delete this class?`)&&(x.classes=x.classes.filter(e=>e.id!==t.id),D(),i(),A())}),r.querySelector(`#f-save`)?.addEventListener(`click`,()=>{let e=r.querySelector(`#f-start`).value,n=r.querySelector(`#f-end`).value;if(!e||!n||c(n)<=c(e)){alert(`End time must be after start time.`);return}let a=[...r.querySelectorAll(`.checks-list input:checked`)].map(e=>Number(e.value)),o={id:t?.id??x.nextIds.class++,day:Number(r.querySelector(`#f-day`).value),roomId:Number(r.querySelector(`#f-room`).value),teacherId:Number(r.querySelector(`#f-teacher`).value),start:e,end:n,title:r.querySelector(`#f-title`).value.trim(),isGroup:r.querySelector(`#f-group`).checked,studentIds:a},s=p(t?x.classes.map(e=>e.id===t.id?o:e):[...x.classes,o],o.day);if(s.has(o.id)||!t&&s.size){let e=r.querySelector(`#f-warn`);e.hidden=!1,e.textContent=`Warning: this creates a teacher or room conflict. You can still save — conflicted classes are highlighted in red.`}t?x.classes=x.classes.map(e=>e.id===t.id?o:e):x.classes.push(o),D(),i(),C=o.day,A()})}function z(){return`
    <div class="panel">
      <h2>Teachers</h2>
      <p class="sub">Used to colour and assign classes on the schedule.</p>
      <div class="panel-actions"><button type="button" class="btn primary" data-add="teacher">Add teacher</button></div>
      <table class="data">
        <thead><tr><th>Name</th><th>Instrument</th><th></th></tr></thead>
        <tbody>
          ${x.teachers.map(e=>`
            <tr>
              <td><span class="swatch" style="background:${e.color}"></span>${F(e.name)}</td>
              <td>${F(e.instrument||`—`)}</td>
              <td>
                <button type="button" class="btn ghost" data-edit-teacher="${e.id}">Edit</button>
                <button type="button" class="btn ghost" data-del-teacher="${e.id}">Delete</button>
              </td>
            </tr>`).join(``)}
        </tbody>
      </table>
    </div>`}function B(){return`
    <div class="panel">
      <h2>Rooms</h2>
      <p class="sub">Columns on the weekly schedule.</p>
      <div class="panel-actions"><button type="button" class="btn primary" data-add="room">Add room</button></div>
      <table class="data">
        <thead><tr><th>Name</th><th></th></tr></thead>
        <tbody>
          ${x.rooms.map(e=>`
            <tr>
              <td>${F(e.name)}</td>
              <td>
                <button type="button" class="btn ghost" data-edit-room="${e.id}">Edit</button>
                <button type="button" class="btn ghost" data-del-room="${e.id}">Delete</button>
              </td>
            </tr>`).join(``)}
        </tbody>
      </table>
    </div>`}function V(){return`
    <div class="panel">
      <h2>Students</h2>
      <p class="sub">In this free preview only name, instrument and phone are editable.</p>
      <div class="panel-actions"><button type="button" class="btn primary" data-add="student">Add student</button></div>
      <table class="data">
        <thead><tr><th>Name</th><th>Instrument</th><th>Phone</th><th></th></tr></thead>
        <tbody>
          ${x.students.map(e=>`
            <tr>
              <td>${F(e.name)}</td>
              <td>${F(e.instrument)}</td>
              <td>${F(e.phone)}</td>
              <td>
                <button type="button" class="btn ghost" data-edit-student="${e.id}">Edit</button>
                <button type="button" class="btn ghost" data-del-student="${e.id}">Delete</button>
              </td>
            </tr>`).join(``)}
        </tbody>
      </table>
      <div class="locked-fields">
        <h3>🔒 Full student file (commercial)</h3>
        <div class="locked-grid">
          ${[`IBAN / SEPA`,`Billing & fees`,`Guardians`,`Address`,`Discounts`,`Enrolment dates`].map(e=>`<button type="button" class="locked-chip" data-chip>${F(e)}</button>`).join(``)}
        </div>
      </div>
    </div>`}function H(e){E.querySelector(`[data-add="${e}"]`)?.addEventListener(`click`,()=>{T={kind:e,id:null},U()}),E.querySelectorAll(`[data-edit-${e}]`).forEach(t=>{t.addEventListener(`click`,()=>{T={kind:e,id:Number(t.getAttribute(`data-edit-${e}`))},U()})}),E.querySelectorAll(`[data-del-${e}]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=Number(t.getAttribute(`data-del-${e}`));if(e===`teacher`){if(x.classes.some(e=>e.teacherId===n)){alert(`This teacher still has classes. Reassign or delete those classes first.`);return}if(!confirm(`Delete this teacher?`))return;x.teachers=x.teachers.filter(e=>e.id!==n)}else if(e===`room`){if(x.classes.some(e=>e.roomId===n)){alert(`This room still has classes. Move or delete those classes first.`);return}if(!confirm(`Delete this room?`))return;x.rooms=x.rooms.filter(e=>e.id!==n)}else{if(!confirm(`Delete this student?`))return;x.students=x.students.filter(e=>e.id!==n),x.classes=x.classes.map(e=>({...e,studentIds:e.studentIds.filter(e=>e!==n)}))}D(),A()})}),E.querySelectorAll(`[data-chip]`).forEach(e=>{e.addEventListener(`click`,()=>{P(`Full student file`,`Billing, SEPA, guardians and more are available in the full AulaTempoX desktop app.`)})})}function U(){if(!T)return;let{kind:e,id:t}=T,n=e===`teacher`&&t?x.teachers.find(e=>e.id===t):null,r=e===`student`&&t?x.students.find(e=>e.id===t):null,i=e===`room`&&t?x.rooms.find(e=>e.id===t):null,a=e===`teacher`?`Teacher`:e===`student`?`Student`:`Room`,o=``;o=e===`teacher`?`
      <div class="form-row"><label>Name</label><input id="e-name" value="${F(n?.name||``)}" /></div>
      <div class="form-row"><label>Instrument</label><input id="e-inst" value="${F(n?.instrument||``)}" /></div>
      <div class="form-row"><label>Color</label><input id="e-color" type="color" value="${n?.color||`#aecbfa`}" /></div>`:e===`student`?`
      <div class="form-row"><label>Name</label><input id="e-name" value="${F(r?.name||``)}" /></div>
      <div class="form-row"><label>Instrument</label><input id="e-inst" value="${F(r?.instrument||``)}" /></div>
      <div class="form-row"><label>Phone</label><input id="e-phone" value="${F(r?.phone||``)}" /></div>`:`<div class="form-row"><label>Name</label><input id="e-name" value="${F(i?.name||``)}" /></div>`;let s=document.createElement(`div`);s.className=`overlay`,s.innerHTML=`
    <div class="modal">
      <h3>${t?`Edit`:`New`} ${a}</h3>
      ${o}
      <div class="modal-actions">
        <button type="button" class="btn" id="e-cancel">Cancel</button>
        <button type="button" class="btn primary" id="e-save">Save</button>
      </div>
    </div>`,document.body.appendChild(s);let c=()=>s.remove();s.querySelector(`#e-cancel`)?.addEventListener(`click`,c),s.addEventListener(`click`,e=>{e.target===s&&c()}),s.querySelector(`#e-save`)?.addEventListener(`click`,()=>{let t=s.querySelector(`#e-name`).value.trim();if(!t){alert(`Name is required.`);return}if(e===`teacher`){let e={id:n?.id??x.nextIds.teacher++,name:t,instrument:s.querySelector(`#e-inst`).value.trim(),color:s.querySelector(`#e-color`).value};n?x.teachers=x.teachers.map(t=>t.id===n.id?e:t):x.teachers.push(e)}else if(e===`student`){let e={id:r?.id??x.nextIds.student++,name:t,instrument:s.querySelector(`#e-inst`).value.trim(),phone:s.querySelector(`#e-phone`).value.trim()};r?x.students=x.students.map(t=>t.id===r.id?e:t):x.students.push(e)}else{let e={id:i?.id??x.nextIds.room++,name:t};i?x.rooms=x.rooms.map(t=>t.id===i.id?e:t):x.rooms.push(e)}D(),c(),A()})}A();