const $=s=>document.querySelector(s);let cur=0,done={};
try{done=JSON.parse(localStorage.getItem('mlDone')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('mlDone',JSON.stringify(done))}catch(e){}};
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
function menu(){$('#menu').innerHTML=T.map((t,i)=>`<a href="#${i}" class="${i==cur?'on':''} ${done[t.id]?'done':''}">${i+1}. ${t.name}</a>`).join('')}
function show(){cur=Math.max(0,Math.min(T.length-1,parseInt(location.hash.slice(1))||0));const t=T[cur],f=FILES[t.id];
$('#main').innerHTML=`<h1>${cur+1}. ${t.name}</h1>
<button onclick="document.body.classList.toggle('hide')">👁 Self-test mode (hide/show answers)</button>
<label><input type="checkbox" id="rv" ${done[t.id]?'checked':''}> Mark as revised</label>
<div class="mk"><b>16-mark answer plan:</b> Definition (2) → Algorithm/steps (4) → Formulas (2) → Worked example with numbers (5) → Diagram (1) → Advantages, limitations, applications (2)</div>
${t.s.map((s,i)=>`<details ${i<2?'open':''}><summary>${s[0]}</summary>${s[1]}</details>`).join('')}
<details open><summary>📊 Output images</summary>${t.img.map(n=>`<figure><img src="images/${n}.png" alt="${n}"><figcaption>${n}</figcaption></figure>`).join('')}</details>
<details><summary>💻 Python code</summary><pre>${esc(f.code)}</pre></details>
<details><summary>🖥 Console output</summary><pre>${esc(f.out)}</pre></details>
<button onclick="location.hash=${cur-1}" ${cur?'':'disabled'}>◀ Previous</button><button onclick="location.hash=${cur+1}" ${cur<T.length-1?'':'disabled'}>Next ▶</button>`;
$('#rv').onchange=e=>{done[t.id]=e.target.checked;save();menu()};menu();scrollTo(0,0)}
addEventListener('hashchange',show);show();
