
const PHASES=[
 {range:[1,3],name:'Readaptação',days:[['Força A','strengthA'],['Cardio leve','cardio1'],['Mobilidade','mobility'],['Força B','strengthB'],['Descanso','rest'],['Cardio moderado','cardio2'],['Descanso','rest']]},
 {range:[4,7],name:'Construção',days:[['Força A','buildA'],['Cardio moderado','cardio2'],['Força B','buildB'],['Mobilidade','mobility'],['Força C','buildC'],['Cardio longo','long'],['Descanso','rest']]},
 {range:[8,11],name:'Específica',days:[['Força A','specificA'],['Intervalos de corda','intervals'],['Mobilidade','mobility'],['Força B','specificB'],['Descanso','rest'],['Circuito snowboard','snow'],['Cardio moderado','long']]},
 {range:[12,12],name:'Simulação',days:[['Força A','specificA'],['Caminhada 50–60 min','long'],['Descanso','rest'],['Circuito — 4 voltas','snow'],['Descanso','rest'],['Caminhada 75–90 min','long'],['Recuperação ativa','recovery']]},
 {range:[13,13],name:'Redução de carga',days:[['Força curta','taper'],['Caminhada leve','recovery'],['Mobilidade','mobility'],['Circuito leve','taperCircuit'],['Descanso','rest'],['Caminhada leve','recovery'],['Descanso','rest']]}
];
const X={
 strengthA:[['Goblet squat para cadeira','2×8–12','60–90 s'],['Peso morto romeno','2×8–12','60–90 s'],['Remada inclinada','2×10–12','60 s'],['Lunge atrás assistido','2×6–8/perna','60 s'],['Flexões inclinadas','2×8–12','60 s'],['Dead bug','2×6–8/lado','45 s'],['Elevação de gémeos','2×12–15','45 s']],
 strengthB:[['Step-up ou split squat','2×8/perna','60 s'],['Ponte de glúteos','2×10–15','60 s'],['Split squat assistido','2×6–8/perna','60 s'],['Press de ombros','2×8–12','60 s'],['Remada unilateral','2×10/lado','60 s'],['Bird dog','2×6–8/lado','45 s'],['Prancha lateral','2×15–25 s/lado','45 s'],['Equilíbrio unilateral','2×20–30 s/perna','30 s']],
 buildA:[['Goblet squat','3×8–12','75 s'],['Peso morto romeno','3×8–12','75 s'],['Lunge atrás','3×8/perna','60 s'],['Remada inclinada','3×10–12','60 s'],['Flexões inclinadas','3×8–15','60 s'],['Dead bug','3×8/lado','45 s'],['Gémeos','3×12–20','45 s']],
 buildB:[['Split squat','3×8–10/perna','75 s'],['Peso morto unilateral','3×8/perna','60 s'],['Step-up','3×8–10/perna','60 s'],['Press de ombros','3×8–12','60 s'],['Remada unilateral','3×10–12/lado','60 s'],['Prancha lateral','3×20–35 s/lado','45 s'],['Suitcase carry','3×30–45 s/lado','45 s']],
 buildC:[['Goblet squat','12 rep.','0 s'],['Lunge atrás','8/perna','0 s'],['Ponte de glúteos','15 rep.','0 s'],['Remada','12 rep.','0 s'],['Flexões inclinadas','8–12 rep.','0 s'],['Prancha','20–30 s','0 s'],['Marcha rápida','60 s','90 s']],
 specificA:[['Split squat — descida 3 s','3×8–10/perna','75 s'],['Peso morto romeno','3×8–12','75 s'],['Goblet squat com pausa','3×10–12','75 s'],['Remada inclinada','3×10–12','60 s'],['Flexões','3 séries','60 s'],['Prancha lateral','3×25–40 s/lado','45 s'],['Suitcase carry','3×40–60 s/lado','45 s']],
 specificB:[['Step-up','3×10/perna','60 s'],['Peso morto unilateral','3×8–10/perna','60 s'],['Lunge lateral','3×8–10/lado','60 s'],['Ponte unilateral','3×8–12/lado','60 s'],['Press de ombros','3×8–12','60 s'],['Remada unilateral','3×10–12/lado','60 s'],['Dead bug com haltere','3×8/lado','45 s']],
 snow:[['Wall sit','30–60 s','0 s'],['Lunge lateral','8/lado','0 s'],['Step-down lento','8/lado','0 s'],['Skater step','10/lado','0 s'],['Ponte unilateral','10/lado','0 s'],['Prancha lateral','25–40 s/lado','0 s'],['Equilíbrio unilateral','30 s/lado','0 s'],['Corda ou marcha','60 s','90 s']],
 mobility:[['Tornozelo junto à parede','10/lado','0 s'],['Anca 90/90','8/lado','0 s'],['Flexores da anca','30 s/lado','0 s'],['Rotação torácica','8/lado','0 s'],['Agachamento assistido','20–30 s','0 s'],['Alongar gémeos','30 s/lado','0 s'],['Respiração lenta','60–90 s','0 s']],
 taper:[['Goblet squat','2×8','60 s'],['Peso morto romeno','2×8','60 s'],['Lunge atrás','2×6/perna','60 s'],['Remada','2×10','60 s'],['Prancha lateral','2×20 s/lado','45 s']],
 taperCircuit:[['Agachamento','10 rep.','0 s'],['Lunge atrás','6/lado','0 s'],['Ponte de glúteos','12 rep.','0 s'],['Wall sit','20–30 s','0 s'],['Bird dog','6/lado','0 s'],['Marcha rápida','60 s','60 s']],
 cardio1:[['Aquecimento / marcha','5 min','0 s'],['Corda','8–10×20 s','70 s marcha'],['Caminhada','10–20 min','0 s'],['Retorno à calma','5 min','0 s']],
 cardio2:[['Caminhada rápida','35–50 min','0 s'],['Retorno à calma','5 min','0 s']],
 long:[['Cardio contínuo moderado','45–90 min conforme semana','0 s'],['Retorno à calma','5 min','0 s']],
 intervals:[['Aquecimento','5–8 min','0 s'],['Corda moderadamente forte','6–10×45 s','75 s marcha'],['Retorno à calma','5 min','0 s']],
 recovery:[['Caminhada ou marcha fácil','30–40 min','0 s'],['Mobilidade suave','5–10 min','0 s']],
 rest:[['Recuperação','Dormir 7–9 h e caminhar suavemente se apetecer','0 s']]
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const state=JSON.parse(localStorage.getItem('snowready')||'{}');
state.start=state.start||'2026-10-26'; state.done=state.done||{}; state.selectedWeek=state.selectedWeek||currentWeek();
function currentWeek(){const d=new Date(),s=new Date(state.start||'2026-10-26');return Math.max(1,Math.min(13,Math.floor((d-s)/604800000)+1))}
function save(){localStorage.setItem('snowready',JSON.stringify(state))}
function phase(w){return PHASES.find(p=>w>=p.range[0]&&w<=p.range[1])}
function isoDate(w,d){let x=new Date(state.start+'T12:00:00');x.setDate(x.getDate()+(w-1)*7+d);return x.toISOString().slice(0,10)}
function dateLabel(iso){return new Intl.DateTimeFormat('pt-PT',{weekday:'short',day:'numeric',month:'short'}).format(new Date(iso+'T12:00:00'))}
function sessionProgress(key,type){const ex=X[type]||[];if(!ex.length)return 0;return ex.filter((_,i)=>state.done[key+'-'+i]).length/ex.length}
function render(){
 const w=state.selectedWeek,p=phase(w),today=new Date().toISOString().slice(0,10);
 $('#weekName').textContent=`Semana ${w} · ${p.name}`; $('#dateRange').textContent=`${dateLabel(isoDate(w,0))} — ${dateLabel(isoDate(w,6))}`;
 let total=0,complete=0;p.days.forEach((day,i)=>{const k=`${w}-${i}`; total++;if(sessionProgress(k,day[1])===1)complete++});
 $('#weekProgress').style.width=(complete/total*100)+'%';$('#completeMetric').textContent=`${complete}/${total}`;$('#phaseMetric').textContent=p.name;$('#daysMetric').textContent=Math.max(0,Math.ceil((new Date('2027-01-25')-new Date())/86400000));
 $('#weekChips').innerHTML=Array.from({length:13},(_,i)=>`<button class="week-chip ${i+1===w?'active':''}" data-week="${i+1}">Semana ${i+1}</button>`).join('');
 $('#sessions').innerHTML=p.days.map((day,i)=>{let key=`${w}-${i}`,pr=sessionProgress(key,day[1]),date=isoDate(w,i);return `<div class="card session"><div class="icon">${day[1]==='rest'?'🌙':day[1].includes('cardio')||day[1]==='long'?'🚶':'🏋️'}</div><div class="session-info"><h3>${day[0]}</h3><p>${dateLabel(date)} · ${Math.round(pr*100)}% concluído</p><div class="progress"><i style="width:${pr*100}%"></i></div></div><button class="btn small open-session" data-day="${i}">${pr===1?'Rever':'Abrir'}</button></div>`}).join('');
 $('#weekChips').querySelectorAll('button').forEach(b=>b.onclick=()=>{state.selectedWeek=+b.dataset.week;save();render()});
 $$('.open-session').forEach(b=>b.onclick=()=>openSession(+b.dataset.day));
 renderCalendar();
}
function openSession(day){const w=state.selectedWeek,p=phase(w),[name,type]=p.days[day],key=`${w}-${day}`,items=X[type]||[];$('#sessionTitle').textContent=name;$('#sessionMeta').textContent=`Semana ${w} · ${dateLabel(isoDate(w,day))}`;$('#exerciseList').innerHTML=items.map((x,i)=>{let id=key+'-'+i,done=!!state.done[id];return `<div class="exercise ${done?'done':''}"><div class="ex-top"><input aria-label="Concluir exercício" class="check" type="checkbox" data-id="${id}" ${done?'checked':''}><div><h4>${x[0]}</h4><p>${x[1]}${x[2]!=='0 s'?' · descanso '+x[2]:''}</p>${x[2]!=='0 s'?`<div class="timer"><button class="btn secondary small timer-btn" data-sec="${parseInt(x[2])||60}">Iniciar descanso</button><span class="timer-display"></span></div>`:''}</div></div></div>`}).join('');showView('workout');$$('.check').forEach(c=>c.onchange=()=>{state.done[c.dataset.id]=c.checked;save();c.closest('.exercise').classList.toggle('done',c.checked)});$$('.timer-btn').forEach(b=>b.onclick=()=>timer(b,+b.dataset.sec));}
let timerId;function timer(btn,sec){clearInterval(timerId);const out=btn.nextElementSibling;btn.disabled=true;out.textContent=sec+'s';timerId=setInterval(()=>{sec--;out.textContent=sec+'s';if(sec<=0){clearInterval(timerId);btn.disabled=false;out.textContent='Pronto ✓';if(navigator.vibrate)navigator.vibrate([100,60,100])}},1000)}
function renderCalendar(){const p=phase(state.selectedWeek),today=new Date().toISOString().slice(0,10);$('#calendarDots').innerHTML=p.days.map((d,i)=>{let date=isoDate(state.selectedWeek,i),done=sessionProgress(`${state.selectedWeek}-${i}`,d[1])===1;return `<div class="daydot ${done?'complete':''} ${date===today?'today':''}">${['S','T','Q','Q','S','S','D'][i]}</div>`}).join('')}
function showView(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.view===id));scrollTo(0,0);if(id==='home')render()}
$$('.nav button').forEach(b=>b.onclick=()=>showView(b.dataset.view));$('#backBtn').onclick=()=>showView('home');
$('#startDate').value=state.start;$('#startDate').onchange=e=>{state.start=e.target.value;state.selectedWeek=1;save();render()};
$('#resetBtn').onclick=()=>{if(confirm('Apagar todo o progresso?')){state.done={};save();render()}};
$('#exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='snowready-progresso.json';a.click();URL.revokeObjectURL(a.href)};
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js');render();
