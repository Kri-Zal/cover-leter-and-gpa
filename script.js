// ═══ TOOL SWITCHING ═══
function switchTool(t){
  document.getElementById('panel-cl').classList.toggle('active',t==='cl');
  document.getElementById('panel-gpa').classList.toggle('active',t==='gpa');
  document.getElementById('tab-cl').classList.toggle('active',t==='cl');
  document.getElementById('tab-gpa').classList.toggle('active',t==='gpa');
  document.getElementById('nav-cl').classList.toggle('active',t==='cl');
  document.getElementById('nav-gpa').classList.toggle('active',t==='gpa');
}

// ═══ COVER LETTER ═══
document.querySelectorAll('input[name="atype"]').forEach(r=>{
  r.addEventListener('change',()=>{
    const co=r.value==='company'&&r.checked;
    document.getElementById('pf').style.display=co?'none':'block';
    document.getElementById('cf').style.display=co?'block':'none';
  });
});

function v(id){const e=document.getElementById(id);return e?e.value.trim():'';}
function fmtDate(){
  const d=new Date(),mo=['January','February','March','April','May','June','July','August','September','October','November','December'];
  return `${d.getDate()} ${mo[d.getMonth()]}, ${d.getFullYear()}`;
}
function refNo(){return `MCL/DOM/${new Date().getFullYear()}/${Math.floor(Math.random()*9000)+1000}`;}

function buildLetter(){
  const isOrg=document.querySelector('input[name="atype"]:checked').value==='company';
  const domain=v('dom')||'[domain-name].com.np';
  const purp=v('purp')||'personal website';
  const ns1=v('ns1')||'[primary nameserver]';
  const ns2=v('ns2')||'[secondary nameserver]';
  const ref=refNo(); const date=fmtDate();
  let fromName,addrLine,phone,email,idLabel,idVal,bodyP1,bodyP2,sigHTML;
  if(!isOrg){
    fromName=v('p-name')||'[Full Name]';
    addrLine=v('p-addr')||'[Address]';
    phone=v('p-ph'); email=v('p-em')||'[Email]';
    idLabel='Citizenship / Passport No.'; idVal=v('p-cit')||'[Citizenship No.]';
    bodyP1=`I, <strong>${fromName}</strong>, a citizen of Nepal, hereby formally request the registration of the domain name <strong>${domain}</strong> under the .com.np country code top-level domain with Mercantile Communications Pvt. Ltd.`;
    bodyP2=`The requested domain name corresponds directly to my legal name as documented in my citizenship certificate (No. ${idVal}). I confirm that I am the rightful applicant for this domain and will use it for ${purp}.`;
    sigHTML=`<div class="l-sig-line"></div><div class="l-sig-name">${fromName}</div><div class="l-sig-info">${addrLine}</div>${phone?`<div class="l-sig-info">${phone}</div>`:''}${email?`<div class="l-sig-info">${email}</div>`:''}`;
  } else {
    fromName=v('c-org')||'[Organization Name]';
    const authN=v('c-auth')||'[Authorized Person]'; const des=v('c-des')||'[Designation]';
    addrLine=v('c-addr')||'[Address]'; phone=v('c-ph'); email=v('c-em')||'[Email]';
    const regNo=v('c-reg')||'[Reg. No.]'; const pan=v('c-pan');
    idLabel='Company Registration No.'; idVal=regNo;
    bodyP1=`We, on behalf of <strong>${fromName}</strong>, a duly registered organization in Nepal (Reg. No. ${regNo}${pan?', PAN: '+pan:''}), hereby formally request the registration of the domain name <strong>${domain}</strong> under the .com.np country code top-level domain.`;
    bodyP2=`The requested domain name corresponds directly to our organization's registered name. This application is submitted by an authorized representative of the organization.`;
    sigHTML=`<div class="l-sig-line"></div><div class="l-sig-name">${authN}</div><div class="l-sig-info">${des}</div><div class="l-sig-info">${fromName}</div>${phone?`<div class="l-sig-info">${phone}</div>`:''}${email?`<div class="l-sig-info">${email}</div>`:''}`;
  }
  const subLine=`${addrLine}${phone?' | '+phone:''}${email?' | '+email:''}`;
  document.getElementById('pshell').innerHTML=`<div id="letter-el"><div class="l-top-bar"></div><div class="l-red-bar"></div><div class="l-inner"><div class="l-head"><div><div class="l-org">${fromName}</div><div class="l-addr">${subLine}</div></div><div class="l-head-right"><div class="l-ref">Ref: ${ref}</div><div class="l-date">Date: ${date}</div></div></div><div class="l-to"><strong>To,</strong>The Hostmaster<br>Mercantile Communications Pvt. Ltd.<br>Durbar Marg, Kathmandu, Nepal<br><span style="font-family:'Courier New',monospace;font-size:10px;color:#888">hostmaster@register.com.np</span></div><div class="l-subj"><span style="font-size:12px;font-weight:700;color:#1a2f4e;text-transform:uppercase;letter-spacing:.04em;text-decoration:underline;text-underline-offset:3px">Subject: Formal Request for Registration of Domain Name — ${domain}</span></div><div class="l-sal">Dear Hostmaster,</div><p class="l-body">${bodyP1}</p><p class="l-body">${bodyP2}</p><p class="l-body">Kindly find below the complete technical and administrative details for the requested domain registration:</p><table style="width:100%;border-collapse:collapse;margin:13px 0 15px;font-size:11px"><tr><th colspan="2" style="background:#1a2f4e;color:#fff;padding:6px 9px;text-align:left;font-weight:600;letter-spacing:.03em;font-size:10px">Domain Registration Details</th></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">Requested Domain Name</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111"><strong>${domain}</strong></td></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">Domain Extension</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">.com.np (Nepal ccTLD)</td></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">Purpose of Website</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">${purp}</td></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">Primary Nameserver (NS1)</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111;font-family:'Courier New',monospace;font-size:10.5px;color:#1a2f4e">${ns1}</td></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">Secondary Nameserver (NS2)</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111;font-family:'Courier New',monospace;font-size:10.5px;color:#1a2f4e">${ns2}</td></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">${idLabel}</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">${idVal}</td></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">Applicant Name</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">${fromName}</td></tr><tr><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">Contact Email</td><td style="padding:5.5px 9px;border:1px solid #d1d5db;color:#111">${email}</td></tr></table><div style="font-size:11.5px;line-height:1.85;color:#1a1a1a;margin:13px 0;padding:9px 13px;border-left:3px solid #9b1c1c;background:#fef2f2;font-style:italic">I/We hereby solemnly declare that all information provided in this application is true, complete, and accurate to the best of my/our knowledge.</div><p class="l-body">I/We kindly request you to process this application at the earliest convenience and grant domain control panel access upon approval.</p><p class="l-body">Thanking you for your time and cooperation.</p><div style="font-size:12px;color:#222;margin-top:17px;margin-bottom:5px">Yours faithfully,</div><div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:26px"><div>${sigHTML}</div><div style="text-align:right;font-size:9px;color:#9ca3af;font-family:'Courier New',monospace;line-height:1.7">Generated for register.com.np<br>Ref: ${ref}<br>Encl: Identity Document</div></div><div style="margin-top:24px;padding-top:9px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center"><div style="font-family:'Courier New',monospace;font-size:9px;color:#9ca3af;letter-spacing:.03em">Enclosures: (1) Scanned Identity Document &nbsp;(2) This Cover Letter</div></div></div></div>`;
  document.getElementById('dlbtn').classList.add('show');
}

function doDownload(){
  const el=document.getElementById('letter-el');
  if(!el){alert('Generate the letter first.');return;}
  const btn=document.getElementById('dlbtn');
  btn.textContent='⏳ Processing…'; btn.disabled=true;
  html2canvas(el,{scale:2,useCORS:true,backgroundColor:'#ffffff',logging:false,width:el.scrollWidth,height:el.scrollHeight}).then(canvas=>{
    let q=0.85, url=canvas.toDataURL('image/jpeg',q);
    while(url.length*0.75>200000&&q>0.4){q-=0.05;url=canvas.toDataURL('image/jpeg',q);}
    const dom=(v('dom')||'comnp-letter').replace(/[^a-z0-9.\-]/gi,'');
    const a=document.createElement('a'); a.href=url; a.download=`cover-letter-${dom}.jpg`; a.click();
    btn.textContent='✓ Downloaded'; btn.disabled=false;
  }).catch(()=>{btn.textContent='Error — try again';btn.disabled=false;});
}

// ═══ NEB GPA ═══
function switchStream(s){
  document.getElementById('stream-science').style.display=s==='science'?'block':'none';
  document.getElementById('stream-management').style.display=s==='management'?'block':'none';
  document.getElementById('stab-science').classList.toggle('active',s==='science');
  document.getElementById('stab-management').classList.toggle('active',s==='management');
  document.getElementById('result-card').classList.remove('show');
}

const GRADES=[
  {gr:'A+',gp:4.0,min:90,cls:'gAp',desc:'Outstanding'},
  {gr:'A', gp:3.6,min:80,cls:'gA', desc:'Excellent'},
  {gr:'B+',gp:3.2,min:70,cls:'gBp',desc:'Very Good'},
  {gr:'B', gp:2.8,min:60,cls:'gB', desc:'Good'},
  {gr:'C+',gp:2.4,min:50,cls:'gCp',desc:'Above Average'},
  {gr:'C', gp:2.0,min:40,cls:'gC', desc:'Average'},
  {gr:'D', gp:1.6,min:30,cls:'gD', desc:'Below Average'},
  {gr:'NG',gp:0.0,min:0, cls:'gNG',desc:'Non-Graded'},
];
function getGrade(pct){return GRADES.find(g=>pct>=g.min)||GRADES[7];}

function calcRow(id,tMax,pMax,cr){
  const tEl=document.getElementById(id+'-t');
  const pEl=document.getElementById(id+'-p');
  const pctEl=document.getElementById(id+'-pct');
  const grEl=document.getElementById(id+'-gr');
  if(!tEl)return;
  const t=parseFloat(tEl.value)||0;
  const p=pMax>0?(parseFloat(pEl?.value)||0):0;
  let pct=pMax===0?t:(t/tMax)*75+(p/pMax)*25;
  pct=Math.min(100,Math.max(0,pct));
  const g=getGrade(pct);
  pctEl.textContent=pct.toFixed(1)+'%';
  grEl.textContent=g.gr; grEl.className='neb-grade-cell '+g.cls;
}

let bioIsCS=false;
function toggleBioCS(){
  bioIsCS=document.getElementById('bio-cs-toggle').checked;
  const lbl=document.getElementById('bio-cs-label');
  const tp=document.getElementById('bio-t'); const pp=document.getElementById('bio-p');
  if(bioIsCS){
    lbl.innerHTML='Computer Science<small>Credit: 5 | Theory /50, Prac /50</small>';
    tp.max=50;tp.placeholder='0–50';pp.max=50;pp.placeholder='0–50';
  } else {
    lbl.innerHTML='Biology<small>Credit: 5 | Theory /75, Prac /25</small>';
    tp.max=75;tp.placeholder='0–75';pp.max=25;pp.placeholder='0–25';
  }
  tp.value=''; pp.value='';
  document.getElementById('bio-pct').textContent='—';
  document.getElementById('bio-gr').textContent='—';
  document.getElementById('bio-gr').className='neb-grade-cell';
}
function calcBioCS(){
  const t=parseFloat(document.getElementById('bio-t').value)||0;
  const p=parseFloat(document.getElementById('bio-p').value)||0;
  const pct=bioIsCS?Math.min(100,(t/50)*50+(p/50)*50):Math.min(100,(t/75)*75+(p/25)*25);
  const g=getGrade(pct);
  document.getElementById('bio-pct').textContent=pct.toFixed(1)+'%';
  document.getElementById('bio-gr').textContent=g.gr;
  document.getElementById('bio-gr').className='neb-grade-cell '+g.cls;
}

function updateOptLabel(){
  const opts={optmath:'Optional Mathematics<small id="opt-sub">Credit: 5 | Theory /100</small>',hotel:'Hotel Management<small id="opt-sub">Credit: 5 | Theory /100</small>',marketing:'Marketing<small id="opt-sub">Credit: 5 | Theory /100</small>'};
  document.getElementById('opt-label').innerHTML=opts[document.getElementById('opt-select').value];
}

function calcGPA(stream){
  let subs=[];
  if(stream==='science'){
    const bioT=parseFloat(document.getElementById('bio-t').value)||0;
    const bioP=parseFloat(document.getElementById('bio-p').value)||0;
    const bioPct=bioIsCS?Math.min(100,(bioT/50)*50+(bioP/50)*50):Math.min(100,(bioT/75)*75+(bioP/25)*25);
    subs=[
      {name:'Physics',              pct:Math.min(100,(parseFloat(document.getElementById('phy-t').value)||0)/75*75+(parseFloat(document.getElementById('phy-p').value)||0)/25*25), cr:5},
      {name:'Chemistry',            pct:Math.min(100,(parseFloat(document.getElementById('chem-t').value)||0)/75*75+(parseFloat(document.getElementById('chem-p').value)||0)/25*25),cr:5},
      {name:bioIsCS?'Computer Science':'Biology', pct:bioPct, cr:5},
      {name:'Mathematics',          pct:Math.min(100,parseFloat(document.getElementById('math-t').value)||0), cr:5},
      {name:'English',              pct:Math.min(100,(parseFloat(document.getElementById('eng-t').value)||0)/75*75+(parseFloat(document.getElementById('eng-p').value)||0)/25*25), cr:4},
      {name:'Nepali',               pct:Math.min(100,(parseFloat(document.getElementById('nep-t').value)||0)/75*75+(parseFloat(document.getElementById('nep-p').value)||0)/25*25), cr:4},
    ];
  } else {
    const optNames={optmath:'Optional Mathematics',hotel:'Hotel Management',marketing:'Marketing'};
    const optKey=document.getElementById('opt-select').value;
    subs=[
      {name:'Accountancy',    pct:Math.min(100,parseFloat(document.getElementById('acc-t').value)||0),  cr:5},
      {name:'Economics',      pct:Math.min(100,parseFloat(document.getElementById('eco-t').value)||0),  cr:5},
      {name:'Business Studies',pct:Math.min(100,parseFloat(document.getElementById('bst-t').value)||0), cr:5},
      {name:optNames[optKey], pct:Math.min(100,parseFloat(document.getElementById('opt-t').value)||0),  cr:5},
      {name:'English',        pct:Math.min(100,parseFloat(document.getElementById('meng-t').value)||0), cr:4},
      {name:'Nepali',         pct:Math.min(100,parseFloat(document.getElementById('mnep-t').value)||0), cr:4},
    ];
  }
  let totCr=0,totGP=0;
  let rows='<tr><th>Subject</th><th>Percentage</th><th>Grade</th><th>Credits</th><th>Grade Points</th></tr>';
  let hasNG=false;
  subs.forEach(s=>{
    const g=getGrade(s.pct);
    if(g.gr==='NG')hasNG=true;
    const contrib=s.cr*g.gp;
    totCr+=s.cr; totGP+=contrib;
    rows+=`<tr><td>${s.name}</td><td>${s.pct.toFixed(1)}%</td><td style="font-weight:600;color:${g.cls==='gAp'?'#166534':g.cls==='gA'?'#15803d':g.cls==='gBp'?'#1d4ed8':g.cls==='gB'?'#2563eb':g.cls==='gCp'?'#92400e':g.cls==='gC'?'#b45309':g.cls==='gD'?'#dc2626':'#9ca3af'}">${g.gr}</td><td>${s.cr}</td><td>${(s.cr*g.gp).toFixed(2)}</td></tr>`;
  });
  const gpa=totCr>0?totGP/totCr:0;
  const fg=getGrade(gpa>=4?100:gpa>=3.6?80:gpa>=3.2?70:gpa>=2.8?60:gpa>=2.4?50:gpa>=2.0?40:gpa>=1.6?30:0);
  document.getElementById('res-gpa').textContent=gpa.toFixed(2);
  document.getElementById('res-grade').textContent=hasNG?'NG':fg.gr;
  document.getElementById('res-desc').textContent=hasNG?'Non-Graded (NG in a subject)':fg.desc;
  document.getElementById('res-cr').textContent=totCr;
  document.getElementById('res-table').innerHTML=rows;
  document.getElementById('res-note').textContent=`GPA = ${totGP.toFixed(2)} ÷ ${totCr} = ${gpa.toFixed(2)}${hasNG?' — NG in one or more subjects results in overall NG status.':' — Minimum D grade in all subjects needed.'}`;
  document.getElementById('result-card').classList.add('show');
  document.getElementById('result-card').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function resetGPA(stream){
  document.getElementById('result-card').classList.remove('show');
  const prefix=stream==='science'?['phy','chem','bio','math','eng','nep']:['acc','eco','bst','opt','meng','mnep'];
  prefix.forEach(id=>{
    const t=document.getElementById(id+'-t'); if(t)t.value='';
    const p=document.getElementById(id+'-p'); if(p&&!p.disabled)p.value='';
    const pct=document.getElementById(id+'-pct'); if(pct)pct.textContent='—';
    const gr=document.getElementById(id+'-gr'); if(gr){gr.textContent='—';gr.className='neb-grade-cell';}
  });
  if(stream==='science'&&bioIsCS){
    document.getElementById('bio-cs-toggle').checked=false;
    bioIsCS=false; toggleBioCS();
  }
}

function tog(el){
  const a=el.nextElementSibling;
  a.classList.toggle('open');
  el.querySelector('span').textContent=a.classList.contains('open')?'−':'+';
}