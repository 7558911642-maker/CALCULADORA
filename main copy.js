const ORIGINAL_FINANCING = {
  27500: { contado: 27500, f12:{fin:29000,ini:10000,cuota:1583.34}, f24:{fin:30500,ini:10000,cuota:854.17}, f36:{fin:32500,ini:10000,cuota:625.00}, f48:{fin:33500,ini:10000,cuota:489.59} },
  33000: { contado: 33000, f12:{fin:34500,ini:10000,cuota:2041.67}, f24:{fin:36000,ini:10000,cuota:1083.34}, f36:{fin:38000,ini:10000,cuota:777.78}, f48:{fin:39000,ini:10000,cuota:604.17} },
  37000: { contado: 37000, f12:{fin:38500,ini:10000,cuota:2375.00}, f24:{fin:40000,ini:10000,cuota:1250.00}, f36:{fin:42000,ini:10000,cuota:888.89}, f48:{fin:43000,ini:10000,cuota:687.50} },
  38500: { contado: 38500, f12:{fin:40000,ini:10000,cuota:2500.00}, f24:{fin:41500,ini:10000,cuota:1312.50}, f36:{fin:43500,ini:10000,cuota:930.56}, f48:{fin:44500,ini:10000,cuota:718.75} },
  42000: { contado: 42000, f12:{fin:43500,ini:10000,cuota:2791.67}, f24:{fin:45000,ini:10000,cuota:1458.34}, f36:{fin:47000,ini:10000,cuota:1027.78}, f48:{fin:48000,ini:10000,cuota:791.67} },
  44000: { contado: 44000, f12:{fin:45500,ini:10000,cuota:2958.34}, f24:{fin:47000,ini:10000,cuota:1541.67}, f36:{fin:49000,ini:10000,cuota:1083.34}, f48:{fin:50000,ini:10000,cuota:833.34} },
  49500: { contado: 49500, f12:{fin:51000,ini:10000,cuota:3416.67}, f24:{fin:52500,ini:10000,cuota:1770.84}, f36:{fin:54500,ini:10000,cuota:1236.12}, f48:{fin:55500,ini:10000,cuota:947.92} }
};
const ORIGINAL_LOTES = [
  {m:'A',l:1,area:120.81,obs:'-',p:37000},{m:'A',l:2,area:120.92,obs:'Esquina',p:42000},
  {m:'A',l:3,area:91.91,obs:'-',p:27500},{m:'A',l:6,area:90.49,obs:'-',p:27500},
  {m:'A',l:7,area:90.00,obs:'-',p:27500},{m:'A',l:8,area:90.22,obs:'-',p:27500},
  {m:'A',l:9,area:90.42,obs:'-',p:27500},{m:'A',l:10,area:90.63,obs:'-',p:27500},
  {m:'A',l:11,area:90.14,obs:'-',p:27500},{m:'A',l:12,area:90.35,obs:'-',p:27500},
  {m:'A',l:16,area:90.46,obs:'Frente a parque',p:38500},{m:'A',l:17,area:90.67,obs:'Frente a parque',p:38500},
  {m:'A',l:18,area:90.16,obs:'Frente a parque',p:38500},{m:'A',l:19,area:90.36,obs:'Frente a parque',p:38500},
  {m:'A',l:20,area:90.56,obs:'Frente a parque',p:38500},{m:'A',l:21,area:90.04,obs:'Frente a parque',p:38500},
  {m:'A',l:24,area:90.63,obs:'-',p:27500},{m:'A',l:25,area:90.10,obs:'-',p:27500},
  {m:'A',l:26,area:90.30,obs:'-',p:27500},{m:'A',l:27,area:90.49,obs:'-',p:27500},
  {m:'A',l:28,area:90.34,obs:'-',p:27500},{m:'A',l:29,area:90.15,obs:'-',p:27500},
  {m:'A',l:30,area:90.34,obs:'-',p:27500},{m:'A',l:31,area:90.53,obs:'-',p:27500},
  {m:'A',l:32,area:90.72,obs:'-',p:27500},{m:'A',l:34,area:90.37,obs:'-',p:27500},
  {m:'A',l:35,area:90.55,obs:'-',p:27500},{m:'A',l:36,area:90.00,obs:'-',p:27500},
  {m:'A',l:37,area:90.19,obs:'-',p:27500},{m:'A',l:38,area:90.37,obs:'-',p:27500},
  {m:'A',l:39,area:90.55,obs:'-',p:27500},{m:'A',l:40,area:90.74,obs:'-',p:27500},
  {m:'A',l:44,area:90.72,obs:'Frente a parque',p:38500},{m:'A',l:45,area:90.15,obs:'Frente a parque',p:38500},
  {m:'A',l:46,area:90.33,obs:'Frente a parque',p:38500},{m:'A',l:47,area:90.51,obs:'Frente a parque',p:38500},
  {m:'A',l:48,area:90.68,obs:'Costado de parque',p:38500},
  {m:'B',l:1,area:90.00,obs:'Esquina',p:38500},{m:'B',l:2,area:90.00,obs:'-',p:33000},
  {m:'B',l:3,area:90.00,obs:'Esquina',p:38500},{m:'B',l:4,area:120.06,obs:'Frente a parque',p:49500},
  {m:'B',l:5,area:120.06,obs:'Frente a parque',p:49500},{m:'B',l:6,area:120.06,obs:'Frente a parque',p:49500},
  {m:'B',l:7,area:120.06,obs:'Frente a parque',p:49500},{m:'B',l:8,area:120.06,obs:'Frente a parque',p:49500},
  {m:'B',l:9,area:120.06,obs:'Frente a parque',p:49500},{m:'B',l:10,area:120.06,obs:'Costado de parque',p:49500},
  {m:'C',l:1,area:90.00,obs:'Costado de parque',p:38500},{m:'C',l:2,area:90.00,obs:'-',p:33000},
  {m:'C',l:3,area:90.00,obs:'-',p:33000},{m:'C',l:4,area:90.00,obs:'-',p:33000},
  {m:'C',l:5,area:90.00,obs:'-',p:33000},{m:'C',l:8,area:90.00,obs:'-',p:33000},
  {m:'C',l:9,area:90.00,obs:'-',p:33000},{m:'C',l:10,area:90.00,obs:'-',p:33000},
  {m:'C',l:11,area:90.00,obs:'-',p:33000},
  {m:'D',l:1,area:90.00,obs:'Esquina',p:38500},{m:'D',l:2,area:90.00,obs:'-',p:33000},
  {m:'D',l:3,area:90.00,obs:'-',p:33000},{m:'D',l:4,area:90.00,obs:'-',p:33000},
  {m:'D',l:5,area:90.00,obs:'-',p:33000},{m:'D',l:6,area:90.00,obs:'-',p:33000},
  {m:'D',l:7,area:90.00,obs:'-',p:33000},{m:'D',l:8,area:90.00,obs:'-',p:33000},
  {m:'D',l:9,area:90.00,obs:'Esquina / frente a parque',p:44000},{m:'D',l:10,area:90.00,obs:'Esquina / frente a parque',p:44000},
  {m:'D',l:11,area:90.00,obs:'-',p:33000},{m:'D',l:12,area:90.00,obs:'-',p:33000},
  {m:'D',l:13,area:90.00,obs:'-',p:33000},{m:'D',l:14,area:90.00,obs:'-',p:33000},
  {m:'D',l:15,area:90.00,obs:'-',p:33000},{m:'D',l:16,area:90.00,obs:'Frente a parque',p:38500},
  {m:'D',l:17,area:90.00,obs:'Frente a parque',p:38500},{m:'D',l:18,area:90.00,obs:'Esquina / frente a parque',p:44000},
  {m:'E',l:1,area:90.67,obs:'Costado de parque',p:38500},{m:'E',l:2,area:90.67,obs:'-',p:33000},
  {m:'E',l:3,area:90.67,obs:'-',p:33000},{m:'E',l:4,area:90.67,obs:'-',p:33000},
  {m:'E',l:5,area:90.67,obs:'-',p:33000},{m:'E',l:6,area:90.67,obs:'-',p:33000},
  {m:'E',l:7,area:90.67,obs:'-',p:33000},{m:'E',l:8,area:90.67,obs:'-',p:33000},
  {m:'E',l:9,area:90.67,obs:'-',p:33000},{m:'E',l:10,area:90.67,obs:'Esquina',p:38500},
  {m:'E',l:11,area:90.67,obs:'Esquina',p:38500},{m:'E',l:12,area:90.67,obs:'-',p:33000},
  {m:'E',l:13,area:90.67,obs:'-',p:33000},{m:'E',l:14,area:90.67,obs:'-',p:33000},
  {m:'E',l:15,area:90.67,obs:'-',p:33000},{m:'E',l:16,area:90.67,obs:'-',p:33000},
  {m:'E',l:17,area:90.67,obs:'-',p:33000},{m:'E',l:18,area:90.67,obs:'-',p:33000},
  {m:'E',l:19,area:90.67,obs:'-',p:33000},{m:'E',l:20,area:90.67,obs:'Costado de parque',p:38500},
  {m:'F',l:1,area:90.50,obs:'Esquina',p:38500},{m:'F',l:2,area:90.69,obs:'-',p:33000},
  {m:'F',l:3,area:90.34,obs:'-',p:33000},{m:'F',l:4,area:90.00,obs:'-',p:33000},
  {m:'F',l:5,area:90.70,obs:'-',p:33000},{m:'F',l:6,area:90.36,obs:'-',p:33000},
  {m:'F',l:7,area:90.00,obs:'Costado de parque',p:38500},
  {m:'G',l:1,area:123.06,obs:'-',p:44000},{m:'G',l:2,area:120.86,obs:'-',p:44000},
  {m:'G',l:3,area:120.86,obs:'-',p:44000},{m:'G',l:4,area:120.86,obs:'-',p:44000},
  {m:'G',l:5,area:120.86,obs:'-',p:44000},{m:'G',l:6,area:107.67,obs:'Esquina / frente a parque',p:49500},
  {m:'G',l:7,area:105.53,obs:'Frente a parque',p:44000},{m:'G',l:8,area:105.53,obs:'Frente a parque',p:44000},
  {m:'G',l:9,area:105.53,obs:'Frente a parque',p:44000},{m:'G',l:10,area:107.67,obs:'Esquina / frente a parque',p:49500},
  {m:'G',l:11,area:120.86,obs:'-',p:44000},{m:'G',l:12,area:120.86,obs:'-',p:44000},
  {m:'G',l:13,area:120.86,obs:'-',p:44000},
  {m:'H',l:1,area:90.00,obs:'Costado de parque',p:38500},{m:'H',l:2,area:90.00,obs:'-',p:33000},
  {m:'H',l:3,area:90.00,obs:'-',p:33000},{m:'H',l:4,area:90.00,obs:'-',p:33000},
  {m:'H',l:5,area:90.00,obs:'-',p:33000},{m:'H',l:6,area:90.00,obs:'-',p:33000},
  {m:'H',l:7,area:90.00,obs:'-',p:33000},{m:'H',l:8,area:90.00,obs:'-',p:33000},
  {m:'H',l:9,area:90.00,obs:'-',p:33000},{m:'H',l:10,area:90.00,obs:'Esquina',p:38500},
  {m:'H',l:11,area:90.00,obs:'Esquina',p:38500},{m:'H',l:12,area:90.00,obs:'-',p:33000},
  {m:'H',l:13,area:90.00,obs:'-',p:33000},{m:'H',l:14,area:90.00,obs:'-',p:33000},
  {m:'H',l:15,area:90.00,obs:'-',p:33000},{m:'H',l:16,area:90.00,obs:'-',p:33000},
  {m:'H',l:17,area:90.00,obs:'-',p:33000},{m:'H',l:18,area:90.00,obs:'-',p:33000},
  {m:'H',l:19,area:90.00,obs:'-',p:33000},{m:'H',l:20,area:90.00,obs:'Costado de parque',p:38500},
  {m:'I',l:1,area:90.53,obs:'Esquina / frente a parque',p:44000},{m:'I',l:2,area:90.23,obs:'Frente a parque',p:38500},
  {m:'I',l:3,area:90.49,obs:'Frente a parque',p:38500},{m:'I',l:4,area:90.74,obs:'Frente a parque',p:38500},
  {m:'I',l:5,area:90.74,obs:'-',p:33000},{m:'I',l:6,area:90.68,obs:'-',p:33000},
  {m:'I',l:7,area:90.37,obs:'-',p:33000},{m:'I',l:8,area:90.61,obs:'-',p:33000},
  {m:'I',l:9,area:90.29,obs:'-',p:33000},{m:'I',l:10,area:90.52,obs:'-',p:33000},
  {m:'I',l:11,area:90.21,obs:'Esquina',p:38500}
];

const $=id=>document.getElementById(id);
const fmt=n=>'S/ '+Number(n||0).toLocaleString('es-PE',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmt0=n=>'S/ '+Number(n||0).toLocaleString('es-PE',{maximumFractionDigits:0});
const uid=p=>p+'_'+Date.now()+'_'+Math.random().toString(36).slice(2,8);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
const getJSON=(k,f=[])=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}};
const setJSON=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const getTerrains=()=>getJSON('pisco_terrains',[]);
const setTerrains=v=>setJSON('pisco_terrains',v);
const getQuotes=()=>getJSON('pisco_quotes',[]);
const setQuotes=v=>setJSON('pisco_quotes',v);
let selectedTerrainId='';
let deferredInstallPrompt=null;

function getSeller(){return JSON.parse(localStorage.getItem('pisco_seller')||'{}')}
function setSeller(v){localStorage.setItem('pisco_seller',JSON.stringify(v))}

function originalPlans(price){
  const p=ORIGINAL_FINANCING[Number(price)];
  const out={};
  [12,24,36,48].forEach(m=>{
    const x=p?.['f'+m];
    if(x) out[m]={total:Number(x.fin),inicial:Number(x.ini)};
  });
  return out;
}
function seedData(){
  return ORIGINAL_LOTES.map((l,i)=>({
    id:'orig_'+i+'_'+l.m+'_'+l.l,proyecto:'San Clemente',etapa:'Primera Etapa',
    manzana:l.m,lote:String(l.l),codigo:`SC-${l.m}-${l.l}`,estado:'Disponible',
    area:Number(l.area),frente:null,fondo:null,ubicacion:l.obs==='-'?'Regular':l.obs,
    direccion:'',precio:Number(l.p),planes:originalPlans(l.p),notas:'',source:'original'
  }));
}
if(!localStorage.getItem('pisco_terrains')) setTerrains(seedData());
if(!localStorage.getItem('pisco_quotes')) setQuotes([]);

function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500)}
function openModule(id){
  document.querySelectorAll('.module').forEach(x=>x.classList.toggle('active',x.id===id));
  document.querySelectorAll('.nav button').forEach(x=>x.classList.toggle('active',x.dataset.module===id));
  refreshAll();
  window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('.nav button').forEach(b=>b.addEventListener('click',()=>openModule(b.dataset.module)));

function refreshSummary(){
  const ts=getTerrains(),qs=getQuotes(),disp=ts.filter(t=>t.estado==='Disponible');
  $('sTerrenos').textContent=ts.length;
  $('sDisponibles').textContent=disp.length;
  $('sCotizaciones').textContent=qs.length;
  $('sValor').textContent=fmt0(disp.reduce((s,t)=>s+Number(t.precio||0),0));
  $('storageStatus').textContent=`Datos guardados: ${ts.length} terrenos · ${qs.length} cotizaciones.`;
}

/* Terrenos */
function resetTerrainForm(){
  $('terrainForm').reset();$('terrainId').value='';$('tProyecto').value='San Clemente';$('tEtapa').value='Primera Etapa';
  $('tEstado').value='Disponible';$('tUbicacion').value='Regular';
  $('terrainSaveBtn').textContent='Guardar terreno';$('terrainCancelBtn').style.display='none';
}
function readTerrainForm(){
  const m=$('tManzana').value.trim().toUpperCase(),l=$('tLote').value.trim(),precio=Number($('tPrecio').value);
  const plans={};
  [12,24,36,48].forEach(x=>{
    const total=Number($('tF'+x).value||0),ini=Number($('tI'+x).value||0);
    if(total>0) plans[x]={total,inicial:ini};
  });
  return {
    id:$('terrainId').value||uid('ter'),proyecto:$('tProyecto').value.trim(),etapa:$('tEtapa').value.trim(),
    manzana:m,lote:l,codigo:$('tCodigo').value.trim()||`SC-${m}-${l}`,estado:$('tEstado').value,
    area:Number($('tArea').value),frente:$('tFrente').value?Number($('tFrente').value):null,
    fondo:$('tFondo').value?Number($('tFondo').value):null,ubicacion:$('tUbicacion').value,
    direccion:$('tDireccion').value.trim(),precio,planes,notas:$('tNotas').value.trim(),source:'manual'
  };
}
$('terrainForm').addEventListener('submit',e=>{
  e.preventDefault();
  const t=readTerrainForm();
  if(!t.manzana||!t.lote||!(t.area>0)||!(t.precio>0)){alert('Completa manzana, lote, área y precio.');return}
  let list=getTerrains();
  const dup=list.find(x=>x.id!==t.id&&String(x.manzana).toUpperCase()===t.manzana&&String(x.lote)===t.lote&&String(x.etapa).toLowerCase()===String(t.etapa).toLowerCase());
  if(dup){alert(`Ya existe ${dup.manzana}-${dup.lote} en esta etapa.`);return}
  const i=list.findIndex(x=>x.id===t.id);
  if(i>=0)list[i]={...list[i],...t};else list.unshift(t);
  setTerrains(list);resetTerrainForm();selectedTerrainId='';refreshAll();toast(i>=0?'Terreno actualizado':'Terreno guardado');
});
$('terrainCancelBtn').addEventListener('click',resetTerrainForm);
function editTerrain(id){
  const t=getTerrains().find(x=>x.id===id);if(!t)return;
  $('terrainId').value=t.id;$('tProyecto').value=t.proyecto||'';$('tEtapa').value=t.etapa||'';$('tManzana').value=t.manzana||'';
  $('tLote').value=t.lote||'';$('tCodigo').value=t.codigo||'';$('tEstado').value=t.estado||'Disponible';$('tArea').value=t.area??'';
  $('tFrente').value=t.frente??'';$('tFondo').value=t.fondo??'';$('tUbicacion').value=t.ubicacion||'Regular';$('tDireccion').value=t.direccion||'';
  $('tPrecio').value=t.precio??'';$('tNotas').value=t.notas||'';
  [12,24,36,48].forEach(m=>{$('tF'+m).value=t.planes?.[m]?.total??'';$('tI'+m).value=t.planes?.[m]?.inicial??''});
  $('terrainSaveBtn').textContent='Actualizar terreno';$('terrainCancelBtn').style.display='inline-block';window.scrollTo({top:0,behavior:'smooth'});
}
function deleteTerrain(id){
  const t=getTerrains().find(x=>x.id===id);if(!t||!confirm(`¿Eliminar ${t.manzana}-${t.lote}?`))return;
  setTerrains(getTerrains().filter(x=>x.id!==id));if(selectedTerrainId===id)selectedTerrainId='';refreshAll();toast('Terreno eliminado');
}
function renderTerrains(){
  const q=($('terrainSearch').value||'').trim().toLowerCase(),f=$('terrainFilter').value;
  const list=getTerrains().filter(t=>{
    const s=`${t.manzana}-${t.lote} ${t.codigo} ${t.proyecto}`.toLowerCase();
    return (!q||s.includes(q))&&(!f||t.estado===f);
  }).sort((a,b)=>String(a.manzana).localeCompare(String(b.manzana))||Number(a.lote)-Number(b.lote));
  $('terrainRows').innerHTML=list.length?list.map(t=>`
    <tr>
      <td><b>${esc(t.manzana)}-${esc(t.lote)}</b><br><span style="color:var(--muted)">${esc(t.codigo||'')}</span></td>
      <td>${Number(t.area||0).toFixed(2)} m²</td>
      <td><span class="badge ${esc(t.estado)}">${esc(t.estado)}</span></td>
      <td><b>${fmt0(t.precio)}</b></td>
      <td><button class="btn secondary small" data-edit="${t.id}">Editar</button> <button class="btn danger small" data-del="${t.id}">Eliminar</button></td>
    </tr>`).join(''):`<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--muted)">Sin terrenos.</td></tr>`;
  $('terrainRows').querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',()=>editTerrain(b.dataset.edit)));
  $('terrainRows').querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>deleteTerrain(b.dataset.del)));
}
$('terrainSearch').addEventListener('input',renderTerrains);$('terrainFilter').addEventListener('change',renderTerrains);

/* Calculadora */
function renderCalcSelectors(){
  const ts=getTerrains(),ms=[...new Set(ts.map(t=>String(t.manzana)))].sort();
  const oldM=$('calcManzana').value;
  $('calcManzana').innerHTML=ms.map(m=>`<option value="${esc(m)}">${esc(m)}</option>`).join('');
  if(ms.includes(oldM))$('calcManzana').value=oldM;
  const m=$('calcManzana').value||ms[0]||'';
  const lots=ts.filter(t=>String(t.manzana)===m).sort((a,b)=>Number(a.lote)-Number(b.lote));
  const oldL=$('calcLote').value;
  $('calcLote').innerHTML=lots.map(t=>`<option value="${t.id}">${esc(t.lote)} · ${fmt0(t.precio)} · ${esc(t.estado)}</option>`).join('');
  if(lots.some(t=>t.id===oldL))$('calcLote').value=oldL;
  if(!$('calcLote').value&&lots[0])$('calcLote').value=lots[0].id;
  selectedTerrainId=$('calcLote').value||'';
  loadPlanFromTerrain();
}
function calcTerrain(){return getTerrains().find(t=>t.id===$('calcLote').value)||null}
function loadPlanFromTerrain(){
  const t=calcTerrain();if(!t){renderCalcResult();return}
  selectedTerrainId=t.id;$('calcEstado').value=t.estado||'';
  const m=Number($('calcMeses').value),p=t.planes?.[m];
  $('calcFinanciado').value=p?.total??t.precio;
  $('calcInicial').value=p?.inicial??10000;
  recalc();
}
function recalc(){
  const t=calcTerrain();if(!t){renderCalcResult();return}
  const months=Number($('calcMeses').value),fin=Number($('calcFinanciado').value||0),ini=Number($('calcInicial').value||0);
  const saldo=Math.max(0,fin-ini),cuota=months>0?saldo/months:0;
  $('calcCuota').value=fmt(cuota);
  renderCalcResult();
}
$('calcManzana').addEventListener('change',renderCalcSelectors);
$('calcLote').addEventListener('change',loadPlanFromTerrain);
$('calcMeses').addEventListener('change',loadPlanFromTerrain);
$('calcFinanciado').addEventListener('input',recalc);$('calcInicial').addEventListener('input',recalc);
$('usePlanBtn').addEventListener('click',loadPlanFromTerrain);

function renderCalcResult(){
  const t=calcTerrain(),el=$('calcResult');
  if(!t){el.className='panel result-panel empty';el.innerHTML='<div><div class="dash">—</div><b>Sin terreno seleccionado</b></div>';return}
  const months=Number($('calcMeses').value),fin=Number($('calcFinanciado').value||0),ini=Number($('calcInicial').value||0);
  const saldo=Math.max(0,fin-ini),cuota=months?saldo/months:0,extra=fin-Number(t.precio||0),ppm2=t.area?Number(t.precio)/Number(t.area):0;
  el.className='panel result-panel';
  el.innerHTML=`
    <div class="calculator-card">
      <div class="lot-title"><div><p class="lot-id">${esc(t.manzana)}-${esc(t.lote)}</p><span style="font-size:10.5px;color:var(--muted)">${esc(t.codigo||'')} · ${esc(t.ubicacion||'Regular')}</span></div><span class="badge ${esc(t.estado)}">${esc(t.estado)}</span></div>
      <div class="meta-grid">
        <div class="meta"><span>Área</span><b>${Number(t.area||0).toFixed(2)} m²</b></div>
        <div class="meta"><span>Precio por m²</span><b>${fmt(ppm2)}</b></div>
        <div class="meta"><span>Frente</span><b>${t.frente?Number(t.frente).toFixed(2)+' m':'—'}</b></div>
        <div class="meta"><span>Fondo</span><b>${t.fondo?Number(t.fondo).toFixed(2)+' m':'—'}</b></div>
      </div>
      <div class="price-label">Precio contado</div><div class="cash-price">${fmt(t.precio)}</div>
      <div class="receipt">
        <div class="row"><span>Precio financiado</span><b>${fmt(fin)}</b></div>
        <div class="row"><span>Inicial</span><b>${fmt(ini)}</b></div>
        <div class="row"><span>Saldo a financiar</span><b>${fmt(saldo)}</b></div>
        <div class="row"><span>${months} cuotas de</span><b>${fmt(cuota)}</b></div>
        <div class="row total"><span>Total del plan</span><b>${fmt(fin)}</b></div>
        <div class="row"><span>Diferencia vs. contado</span><b>${extra>=0?'+':''}${fmt(extra)}</b></div>
      </div>
      ${t.estado!=='Disponible'?`<div class="notice">Este lote está marcado como <b>${esc(t.estado)}</b>. Confirma disponibilidad antes de ofrecerlo.</div>`:''}
      <div class="actions quote-actions">
        <button id="saveQuoteBtn" class="btn primary" type="button">Guardar cotización</button>
        <button id="shareQuoteBtn" class="btn secondary" type="button">Compartir</button>
        <button id="printQuoteBtn" class="btn secondary" type="button">Imprimir / PDF</button>
      </div>
    </div>`;
  $('saveQuoteBtn').addEventListener('click',saveQuote);
  $('shareQuoteBtn').addEventListener('click',shareQuote);
  $('printQuoteBtn').addEventListener('click',printQuotePDF);
}

function printQuotePDF(){
  const t=calcTerrain();
  if(!t)return;
  const seller=getSeller();
  const months=Number($('calcMeses').value),fin=Number($('calcFinanciado').value||0),ini=Number($('calcInicial').value||0);
  const cuota=(fin-ini)/months;
  const cliente=$('calcCliente').value.trim()||'Sin nombre';
  const dni=$('calcDocumento').value.trim()||'-';
  const tel=$('calcTelefono').value.trim()||'-';
  const old=document.getElementById('printArea');
  if(old)old.remove();
  const div=document.createElement('div');
  div.id='printArea';
  div.innerHTML=`
  <h1>LOTES SAN CLEMENTE</h1>
  <h2>COTIZACIÓN DE FINANCIAMIENTO</h2>
  <hr>
  <h3>DATOS DEL CLIENTE</h3>
  <p><b>Nombre:</b> ${esc(cliente)}<br><b>DNI / CE:</b> ${esc(dni)}<br><b>Celular:</b> ${esc(tel)}</p>
  <h3>DATOS DEL TERRENO</h3>
  <p><b>Lote:</b> ${esc(t.manzana)}-${esc(t.lote)}<br><b>Código:</b> ${esc(t.codigo||'')}<br><b>Área:</b> ${t.area} m²<br><b>Ubicación:</b> ${esc(t.ubicacion||'Regular')}</p>
  <h3>FINANCIAMIENTO</h3>
  <p><b>Precio contado:</b> ${fmt(t.precio)}<br><b>Precio financiado:</b> ${fmt(fin)}<br><b>Inicial:</b> ${fmt(ini)}<br><b>Saldo:</b> ${fmt(fin-ini)}<br><b>Plazo:</b> ${months} meses<br><b>Cuota:</b> ${fmt(cuota)}</p>
  <br><br>
  <table width='100%'><tr><td align='center'>_________________________<br>Firma vendedor / propietario<br>${esc(seller.nombre||'')}<br>${esc(seller.documento||'')}</td><td align='center'>_________________________<br>Firma comprador<br>${esc(cliente)}<br>DNI: ${esc(dni)}</td></tr></table>`;
  document.body.appendChild(div);
  window.print();
  setTimeout(()=>div.remove(),1000);
}

function quoteText(){
  const t=calcTerrain();if(!t)return'';
  const months=Number($('calcMeses').value),fin=Number($('calcFinanciado').value||0),ini=Number($('calcInicial').value||0),cuota=(fin-ini)/months;
  return [
    'COTIZACIÓN REFERENCIAL — SAN CLEMENTE, PISCO',
    $('calcCliente').value.trim()?`Cliente: ${$('calcCliente').value.trim()}`:'',
    $('calcDocumento').value.trim()?`DNI/CE: ${$('calcDocumento').value.trim()}`:'',
    $('calcTelefono').value.trim()?`Celular: ${$('calcTelefono').value.trim()}`:'',
    `Terreno: ${t.manzana}-${t.lote}`,
    `Área: ${Number(t.area||0).toFixed(2)} m²`,
    `Ubicación: ${t.ubicacion||'Regular'}`,
    `Precio contado: ${fmt(t.precio)}`,
    `Precio financiado: ${fmt(fin)}`,
    `Inicial: ${fmt(ini)}`,
    `${months} cuotas: ${fmt(cuota)}`,
    '',
    'Precios y condiciones sujetos a confirmación.'
  ].filter(Boolean).join('\n');
}
function saveQuote(){
  const t=calcTerrain();if(!t)return;
  const months=Number($('calcMeses').value),fin=Number($('calcFinanciado').value||0),ini=Number($('calcInicial').value||0),cuota=(fin-ini)/months;
  const q={id:uid('q'),fecha:new Date().toISOString(),cliente:$('calcCliente').value.trim()||'Sin cliente',documento:$('calcDocumento').value.trim(),telefono:$('calcTelefono').value.trim(),terrainId:t.id,terreno:`${t.manzana}-${t.lote}`,area:t.area,contado:t.precio,meses,financiado:fin,inicial:ini,cuota};
  const list=getQuotes();list.unshift(q);setQuotes(list);refreshAll();toast('Cotización guardada');
}
async function shareQuote(){
  const text=quoteText();
  if(navigator.share){try{await navigator.share({title:'Cotización de lote',text});return}catch(e){}}
  try{await navigator.clipboard.writeText(text);toast('Cotización copiada')}catch{alert(text)}
}

/* Historial */
function renderQuotes(){
  const q=($('quoteSearch').value||'').toLowerCase().trim();
  const list=getQuotes().filter(x=>`${x.cliente} ${x.terreno} ${x.documento} ${x.telefono}`.toLowerCase().includes(q));
  $('quoteList').innerHTML=list.length?list.map(x=>`
    <div class="quote-card">
      <h3>${esc(x.cliente)} · Lote ${esc(x.terreno)}</h3>
      <p>${new Date(x.fecha).toLocaleString('es-PE')} · ${x.meses} meses · Contado ${fmt0(x.contado)} · Financiado ${fmt0(x.financiado)} · Cuota ${fmt(x.cuota)}</p>
      <div class="actions">
        <button class="btn danger small" data-qdel="${x.id}" type="button">Eliminar</button>
      </div>
    </div>`).join(''):'<div class="hint">Aún no hay cotizaciones guardadas.</div>';
  $('quoteList').querySelectorAll('[data-qdel]').forEach(b=>b.addEventListener('click',()=>{
    if(confirm('¿Eliminar esta cotización?')){setQuotes(getQuotes().filter(x=>x.id!==b.dataset.qdel));refreshAll();toast('Cotización eliminada')}
  }));
}
$('quoteSearch').addEventListener('input',renderQuotes);


/* Excel - formato XML Spreadsheet 2003 (.xls), funciona sin librerías externas */
function xmlEsc(value){
  return String(value ?? '')
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'","&apos;");
}
function excelCell(value, header=false){
  const isNum = typeof value === 'number' && Number.isFinite(value);
  const type = isNum ? 'Number' : 'String';
  const style = header ? ' ss:StyleID="Header"' : '';
  return `<Cell${style}><Data ss:Type="${type}">${xmlEsc(value)}</Data></Cell>`;
}
function excelSheet(name, headers, rows){
  const safeName = String(name).slice(0,31).replace(/[\\\/\?\*\[\]\:]/g,' ');
  const headerRow = `<Row>${headers.map(h=>excelCell(h,true)).join('')}</Row>`;
  const body = rows.map(r=>`<Row>${r.map(v=>excelCell(v)).join('')}</Row>`).join('');
  return `<Worksheet ss:Name="${xmlEsc(safeName)}"><Table>${headerRow}${body}</Table></Worksheet>`;
}
function downloadExcel(filename, sheets){
  const workbook = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="Header">
   <Font ss:FontName="Calibri" ss:Size="11" ss:Bold="1"/>
   <Interior ss:Color="#EDE3CF" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 ${sheets.map(s=>excelSheet(s.name,s.headers,s.rows)).join('')}
</Workbook>`;
  const blob = new Blob(['\ufeff'+workbook], {type:'application/vnd.ms-excel;charset=utf-8'});
  downloadBlob(filename, blob);
  toast('Excel descargado');
}
function terrainExcelRows(){
  return getTerrains().map(t=>[
    t.proyecto||'', t.etapa||'', t.manzana||'', t.lote||'', t.codigo||'', t.estado||'',
    Number(t.area||0), t.frente==null?'':Number(t.frente), t.fondo==null?'':Number(t.fondo),
    t.ubicacion||'', t.direccion||'', Number(t.precio||0),
    Number(t.planes?.[12]?.total||0), Number(t.planes?.[12]?.inicial||0),
    Number(t.planes?.[24]?.total||0), Number(t.planes?.[24]?.inicial||0),
    Number(t.planes?.[36]?.total||0), Number(t.planes?.[36]?.inicial||0),
    Number(t.planes?.[48]?.total||0), Number(t.planes?.[48]?.inicial||0),
    t.notas||''
  ]);
}
const terrainExcelHeaders = [
  'Proyecto','Etapa','Manzana','Lote','Código','Estado','Área m²','Frente m','Fondo m',
  'Ubicación','Dirección / referencia','Precio contado',
  'Total 12 meses','Inicial 12 meses','Total 24 meses','Inicial 24 meses',
  'Total 36 meses','Inicial 36 meses','Total 48 meses','Inicial 48 meses','Observaciones'
];
function quoteExcelRows(){
  return getQuotes().map(x=>[
    x.fecha||'', x.cliente||'', x.documento||'', x.telefono||'', x.terreno||'',
    Number(x.area||0), Number(x.contado||0), Number(x.meses||0),
    Number(x.financiado||0), Number(x.inicial||0), Number(x.cuota||0)
  ]);
}
const quoteExcelHeaders = [
  'Fecha','Cliente','Documento','Teléfono','Terreno','Área m²',
  'Precio contado','Meses','Precio financiado','Inicial','Cuota'
];

$('exportTerrainsExcel').addEventListener('click',()=>{
  downloadExcel('terrenos_lotes_pisco.xls',[
    {name:'Terrenos',headers:terrainExcelHeaders,rows:terrainExcelRows()}
  ]);
});
$('exportQuotesExcel').addEventListener('click',()=>{
  downloadExcel('cotizaciones_lotes_pisco.xls',[
    {name:'Cotizaciones',headers:quoteExcelHeaders,rows:quoteExcelRows()}
  ]);
});
$('exportAllExcel').addEventListener('click',()=>{
  downloadExcel('reporte_completo_lotes_pisco.xls',[
    {name:'Terrenos',headers:terrainExcelHeaders,rows:terrainExcelRows()},
    {name:'Cotizaciones',headers:quoteExcelHeaders,rows:quoteExcelRows()}
  ]);
});


/* Respaldo */
function downloadBlob(name,blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
$('backupBtn').addEventListener('click',()=>{
  const data={version:1,exportedAt:new Date().toISOString(),terrains:getTerrains(),quotes:getQuotes()};
  downloadBlob('calculadora_lotes_respaldo.json',new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));toast('Respaldo descargado');
});
$('restoreBtn').addEventListener('click',async()=>{
  const f=$('restoreFile').files[0];if(!f){alert('Selecciona un archivo JSON.');return}
  try{
    const d=JSON.parse(await f.text());
    if(!Array.isArray(d.terrains)||!Array.isArray(d.quotes))throw new Error('Formato no válido');
    if(!confirm('¿Reemplazar los datos actuales con este respaldo?'))return;
    setTerrains(d.terrains);setQuotes(d.quotes);selectedTerrainId='';refreshAll();toast('Respaldo restaurado');
  }catch(e){alert('No se pudo importar: '+e.message)}
});
$('seedBtn').addEventListener('click',()=>{if(confirm('¿Restaurar el inventario original?')){setTerrains(seedData());selectedTerrainId='';refreshAll();toast('Inventario restaurado')}});
$('clearBtn').addEventListener('click',()=>{if(confirm('¿Borrar todos los terrenos y cotizaciones del dispositivo?')){setTerrains([]);setQuotes([]);selectedTerrainId='';refreshAll();toast('Datos borrados')}});

/* PWA */
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;$('installBtn').classList.remove('hidden')});
$('installBtn').addEventListener('click',async()=>{
  if(!deferredInstallPrompt){alert('Si usas iPhone: Safari → Compartir → Añadir a pantalla de inicio. En Android, abre el menú del navegador y elige Instalar aplicación.');return}
  deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;$('installBtn').classList.add('hidden');
});
window.addEventListener('appinstalled',()=>{$('installBtn').classList.add('hidden');toast('Aplicación instalada')});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}))}

/* Refresh */
function refreshAll(){refreshSummary();renderTerrains();renderCalcSelectors();renderQuotes()}
refreshAll();
