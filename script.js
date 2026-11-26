/* ---- performance tier: phones and weak devices get the "lite" profile; an FPS monitor can downgrade further ---- */
let LITE=matchMedia("(pointer:coarse)").matches||(navigator.deviceMemory||8)<=4||(navigator.hardwareConcurrency||8)<=4||innerWidth<700,ULTRA=false;
document.documentElement.classList.toggle("lite",LITE);
const NAME="Nira",FROM="ROHAN",PIN="0231",RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const REASONS=["Your smile turns my hardest days into soft ones.","You listen as if nothing else in the world matters.","You make ordinary moments feel like celebrations.","You are strong and kind and beautiful all at once.","Your laugh is my favourite sound.","You believe in me even when I don’t.","Home is wherever you are.","You make me want to be better, every single day."];
const LETTER=`My dearest,\n\nToday the world gained one more reason to smile, because it is the day you were born. Thank you for every laugh, every hug and every quiet moment we share.\n\nI hope this year brings you everything your heart has been wishing for. I will be right beside you for all of it.\n\nHappy birthday, my love.\n\nForever yours,\n${FROM} ♥`;
const KN=["The key of time","The key of memory","The key of words","The key of courage","The key of wishes"];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},SV=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let TSP=RM?999:1,skipT=null;const typeTo=(el,t,cb,sp=32)=>{let i=0;const L=el.id==="ltx",done=()=>{clearInterval(id);if(L)skipT=null;el.textContent=t;cb&&cb()},id=setInterval(()=>{i+=L?TSP:1;el.textContent=t.slice(0,i);if(i>=t.length)done()},sp);if(L)skipT=done};

/* starry sky */
const sk=$("#sky"),sx=sk.getContext("2d");let S=[],sh=null;
function rsz(){sk.width=innerWidth;sk.height=innerHeight;S=Array.from({length:Math.min(260,Math.floor(innerWidth/4))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:Math.random()*.85+.15,p:Math.random()*6}))}
function frame(t){sx.clearRect(0,0,sk.width,sk.height);
 S.forEach(s=>{const y=((s.y-scrollY*s.z*.25)%sk.height+sk.height)%sk.height;sx.globalAlpha=.35+.65*Math.abs(Math.sin(t/900*s.z+s.p));sx.fillStyle=s.z>.8?"#ffe9b0":"#dfe4ff";sx.beginPath();sx.arc(s.x,y,s.z*1.5,0,6.3);sx.fill()});
 if(!sh&&Math.random()<.004)sh={x:Math.random()*sk.width*.8,y:Math.random()*sk.height*.4,l:1};
 if(sh){sx.globalAlpha=sh.l;const g=sx.createLinearGradient(sh.x,sh.y,sh.x-90,sh.y-45);g.addColorStop(0,"#fff");g.addColorStop(1,"#fff0");sx.strokeStyle=g;sx.lineWidth=2;sx.beginPath();sx.moveTo(sh.x,sh.y);sx.lineTo(sh.x-90,sh.y-45);sx.stroke();sh.x+=14;sh.y+=7;sh.l-=.02;if(sh.l<=0)sh=null}
 if(!matchMedia("(prefers-reduced-motion:reduce)").matches)requestAnimationFrame(frame)}
rsz();requestAnimationFrame(frame);
addEventListener("pointermove",e=>{if(LITE)return;const l=$("#lamp").style;l.setProperty("--x",e.clientX+"px");l.setProperty("--y",e.clientY+"px")});

/* fireworks / confetti */
const cv=$("#fx"),cx=cv.getContext("2d");let P=[],run=false;
function size(){cv.width=innerWidth;cv.height=innerHeight}size();let lw=innerWidth,rt;addEventListener("resize",()=>{clearTimeout(rt);rt=setTimeout(()=>{if(innerWidth===lw)return;lw=innerWidth;size();rsz()},220)});
function boom(x=innerWidth/2,y=innerHeight/2,n=140){const c=["#f2c46d","#ff6b9a","#ffffff","#5eead4","#a78bfa"];
 for(let i=0;i<n;i++){const a=Math.random()*6.28,s=3+Math.random()*9;P.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-4,r:2+Math.random()*4,c:c[i%5],l:1,rot:Math.random()*6})}
 if(!run){run=true;requestAnimationFrame(tick)}}
function tick(){cx.clearRect(0,0,cv.width,cv.height);P=P.filter(p=>p.l>0&&p.y<cv.height+20);
 P.forEach(p=>{p.vy+=.18;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.l-=.007;p.rot+=.2;cx.save();cx.globalAlpha=Math.max(p.l,0);cx.translate(p.x,p.y);cx.rotate(p.rot);cx.fillStyle=p.c;cx.shadowColor=p.c;cx.shadowBlur=8;cx.fillRect(-p.r,-p.r/2,p.r*2,p.r);cx.restore()});
 P.length?requestAnimationFrame(tick):(run=false,cx.clearRect(0,0,cv.width,cv.height))}

/* journey: keys link every chapter */
let d=0;
function toast(t){const m=$("#ts");m.textContent=t;m.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>m.classList.remove("show"),2800)}
function show(n){const c=$("#c"+n);if(!c.hidden)return c.scrollIntoView({behavior:"smooth"});c.hidden=false;c.classList.add("em");if(window.gsap&&!RM)gsap.from(`#c${n} .cl,#c${n} h2,#c${n} .rd`,{y:50,opacity:0,duration:1.4,stagger:.18,ease:"power3.out",delay:.3});if(window.ScrollTrigger)setTimeout(()=>ScrollTrigger.refresh(),300);setTimeout(()=>c.scrollIntoView({behavior:"smooth"}),80)}
function grant(n,e){if(d>=n)return;d=n;const k=$$(".k")[n-1],t=k.getBoundingClientRect(),x=e&&e.clientX||innerWidth/2,y=e&&e.clientY||innerHeight/2,s=document.createElement("div");
 s.className="fk";s.textContent="✦";s.style.cssText=`left:${x}px;top:${y}px`;document.body.appendChild(s);
 s.animate([{transform:"translate(-50%,-50%) scale(1)"},{transform:"translate(-50%,-50%) scale(3.2)",offset:.35},{transform:`translate(${t.x+t.width/2-x}px,${t.y+t.height/2-y}px) translate(-50%,-50%) scale(.5)`}],{duration:1400,easing:"ease-in-out"}).onfinish=()=>{s.remove();k.classList.add("on");boom(t.x+t.width/2,t.y+t.height/2,50);toast(KN[n-1]+" is yours")};
 const nx=$("#c"+n+" .nx");setTimeout(()=>nx&&nx.classList.add("vis"),2200)}
$$(".nx").forEach(b=>b.onclick=()=>show(+b.closest(".ch").id.slice(1)+1));

/* gate */
let pin="";const dots=$$("#dots i");
"123456789 0⌫".split("").forEach(k=>{if(k===" "){$("#pad").appendChild(document.createElement("span"));return}const b=document.createElement("button");b.textContent=k;b.onclick=()=>key(k);$("#pad").appendChild(b)});
function key(k){if(k==="⌫")pin=pin.slice(0,-1);else if(pin.length<4)pin+=k;dots.forEach((x,i)=>x.classList.toggle("on",i<pin.length));
 if(pin.length===4){if(pin===PIN){if(wantM)music(true);$("#hint").textContent="The gate opens…";setTimeout(unlock,600)}else{$("#dots").classList.add("sh");$("#hint").textContent="The gate stays silent. Try again.";setTimeout(()=>{$("#dots").classList.remove("sh");pin="";dots.forEach(x=>x.classList.remove("on"))},550)}}}
addEventListener("keydown",e=>{if(!$("#gate")||$("#gate").classList.contains("out"))return;if(/^\d$/.test(e.key))key(e.key);if(e.key==="Backspace")key("⌫")});
let wantM=true;
function drift(c,cls,dur){if(document.hidden||document.querySelectorAll(".pt,.bl").length>(LITE?8:28))return;const e=document.createElement("div");e.className=cls;e.textContent=c[Math.floor(Math.random()*c.length)];e.style.left=Math.random()*100+"vw";e.style.setProperty("--dx",Math.random()*160-80+"px");e.style.fontSize=(cls==="bl"?38:16)+Math.random()*(cls==="bl"?24:14)+"px";e.style.animationDuration=dur+Math.random()*6+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),(dur+7)*1000)}
function unlock(){$("#gate").classList.add("out");$("#wel").hidden=false;boom(innerWidth/2,innerHeight/2,200);setTimeout(()=>$("#gate").remove(),1500)}
$("#wm2").onclick=()=>{wantM=!wantM;$("#wm2").textContent=wantM?"♪ Music on":"♪ Music off";muted=!wantM;music(wantM)};
$("#open").onclick=e=>{$("#wel").classList.add("out");$("#app").hidden=false;boom(e.clientX,e.clientY,260);if(wantM)music(true);start();setTimeout(()=>$("#wel").remove(),1700)};
$("#st").onclick=()=>$("#mega").classList.remove("open");$("#rp").onclick=()=>location.reload();

/* Nepali calendar (BS 2082–2083) */
const BM=["बैशाख","जेष्ठ","असार","श्रावण","भाद्र","आश्विन","कार्तिक","मंसिर","पौष","माघ","फाल्गुन","चैत्र"],WD=["आइत","सोम","मंगल","बुध","बिही","शुक्र","शनि"],ND="०१२३४५६७८९";
const BSD={2082:[31,31,32,31,31,31,30,29,30,29,30,30],2083:[31,31,32,32,31,30,30,29,30,29,30,30]},A0=Date.UTC(2025,3,14);
const np=n=>String(n).replace(/\d/g,x=>ND[x]),sum=a=>a.reduce((x,y)=>x+y,0),MN=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ad=o=>new Date(A0+o*864e5);
const off=(y,m)=>{let s=0;for(let Y=2082;Y<y;Y++)s+=sum(BSD[Y]);return s+sum(BSD[y].slice(0,m))};let cy=2083,cm=7;
function todayBS(){const n=new Date();let q=Math.floor((Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())-A0)/864e5);if(q<0)return null;for(const y of[2082,2083])for(let m=0;m<12;m++){if(q<BSD[y][m])return[y,m,q+1];q-=BSD[y][m]}return null}
function cal(){const o=off(cy,cm),len=BSD[cy][cm],f=ad(o),l=ad(o+len-1),t=todayBS();
 $("#ct").textContent=BM[cm]+" "+np(cy);$("#cs").textContent=`${MN[f.getUTCMonth()]} ${f.getUTCDate()} to ${MN[l.getUTCMonth()]} ${l.getUTCDate()}, ${l.getUTCFullYear()}`;
 $("#pv").disabled=cy===2082&&cm===0;$("#nv").disabled=cy===2083&&cm===11;
 let h=WD.map(w=>`<div class="w">${w}</div>`).join("")+"<div></div>".repeat(f.getUTCDay());
 for(let i=1;i<=len;i++){const b=cm===7&&i===11,tt=t&&t[0]===cy&&t[1]===cm&&t[2]===i;h+=`<div class="d${b?" b":""}${tt?" t":""}" ${b?'data-b="1"':""}>${np(i)}<small>${ad(o+i-1).getUTCDate()}</small></div>`}
 $("#grid").innerHTML=h}
$("#pv").onclick=()=>{if(--cm<0){cm=11;cy--}cal()};$("#nv").onclick=()=>{if(++cm>11){cm=0;cy++}cal()};
$("#grid").onclick=e=>{const x=e.target.closest(".d");if(!x)return;if(x.dataset.b){$("#cm").textContent="Mangsir 11. This is the night the stars were waiting for.";boom(e.clientX,e.clientY,120);grant(1,e)}else{$("#cm").textContent=["Not this night…","The stars are quiet here.","Closer. Look for the glow."][Math.floor(Math.random()*3)]}};
const b0=ad(off(2083,7)+10);let BD=new Date(b0.getUTCFullYear(),b0.getUTCMonth(),b0.getUTCDate());
if(Date.now()>BD.getTime()+864e5)BD=new Date(BD.getFullYear()+1,BD.getMonth(),BD.getDate());
function countdown(){const df=BD-Date.now(),box=$("#cd");
 if(df<=0&&df>-864e5){box.innerHTML="";$("#cdm").textContent="The stars have aligned. It’s your day!";if(!countdown.d){countdown.d=1;setInterval(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight/2,50),3000)}return}
 const s=Math.floor(df/1e3);box.innerHTML=[["Days",Math.floor(s/86400)],["Hours",Math.floor(s/3600)%24],["Minutes",Math.floor(s/60)%60],["Seconds",s%60]].map(([l,n])=>`<div><b>${n}</b><small>${l}</small></div>`).join("");$("#cdm").textContent="until the stars align"}

/* vault */
let ht,hp=0,opened=false,mems=LS("mems",[]);const hb=$("#hold");
function openVault(e){if(opened)return;opened=true;clearInterval(ht);hb.classList.add("op");hb.firstChild.textContent="🔓";$("#vault").classList.add("open");boom(innerWidth/2,innerHeight/2,100);grant(2,e)}
hb.onpointerdown=e=>{if(opened)return;ht=setInterval(()=>{hp+=4;hb.style.setProperty("--pr",hp+"%");if(hp>=100)openVault(e)},40)};
["pointerup","pointerleave","pointercancel"].forEach(v=>hb.addEventListener(v,()=>{clearInterval(ht);if(!opened){hp=0;hb.style.setProperty("--pr","0%")}}));
hb.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")openVault()};
const SAMPLE=[{t:"The day we met",d:"Sample",n:"Replace this with the moment everything began."},{t:"Our first adventure",d:"Sample",n:"A place, a laugh, a memory that still makes you smile."},{t:"A moment I treasure",d:"Sample",n:"Add your own memories above and they will appear here."}];
function drawMem(){const L=mems.map((m,i)=>({...m,i})),T=[...L].sort((a,b)=>(a.d||"9999")<(b.d||"9999")?-1:1),ph=L.filter(m=>m.p);
 $("#ml").innerHTML=(T.length?T:SAMPLE).map(m=>`<div class="ti glass${T.length?"":" s"}">${T.length?`<button class="x" data-i="${m.i}" aria-label="Delete memory">✕</button>`:""}<h3>${esc(m.t)}</h3><small>${esc(m.d||"")}</small><p>${esc(m.n||"")}</p></div>`).join("");
 $("#gl").innerHTML=ph.map(m=>`<div class="gi"><button class="hf im" data-i="${m.i}" aria-label="Open photo: ${esc(m.t)}"><img src="${m.p}" alt=""></button><small>${esc(m.t)}</small></div>`).join("")+Array.from({length:Math.max(0,3-ph.length)},()=>`<div class="gi"><button class="hf" data-add="1">+ Add a photo</button><small>A moment waits here</small></div>`).join("")}
$("#gl").onclick=e=>{const b=e.target.closest(".hf");if(!b)return;if(b.dataset.add){$("#mt").focus();toast("Add a title and a photo, then seal the memory.");return}const m=mems[+b.dataset.i];$("#lb img").src=m.p;$("#lb figcaption").textContent=m.t+(m.n?" · "+m.n:"");$("#lb").classList.add("open")};
$("#lb").onclick=()=>$("#lb").classList.remove("open");addEventListener("keydown",e=>{if(e.key==="Escape")$("#lb").classList.remove("open")});
$("#ml").onclick=e=>{const b=e.target.closest(".x");if(b&&confirm("Remove this memory?")){mems.splice(+b.dataset.i,1);SV("mems",mems);drawMem()}};
const shrink=f=>new Promise(r=>{const fr=new FileReader();fr.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,700/im.width),c=document.createElement("canvas");c.width=im.width*k;c.height=im.height*k;c.getContext("2d").drawImage(im,0,0,c.width,c.height);r(c.toDataURL("image/jpeg",.72))};im.onerror=()=>r("");im.src=fr.result};fr.readAsDataURL(f)});
$("#ms").onclick=async()=>{const t=$("#mt").value.trim();if(!t){$("#mt").focus();return}const f=$("#mp").files[0],p=f?await shrink(f):"";
 mems.unshift({t,d:$("#md").value,n:$("#mn").value.trim(),p});if(!SV("mems",mems)){mems.shift();toast("Storage is full. Try a smaller photo.");return}
 $("#mt").value=$("#md").value=$("#mn").value=$("#mp").value="";drawMem();boom(innerWidth/2,innerHeight/2,70)};

/* letter */
let letter=LS("letter",LETTER);
$("#env").onclick=e=>{const v=$("#env");if(v.classList.contains("op"))return;v.classList.add("op");boom(e.clientX,e.clientY,90);setTimeout(()=>{$("#lt").classList.add("open");typeTo($("#ltx"),letter,null,30);if(!RM)for(let k=0;k<14;k++)setTimeout(()=>drift(["💖","💕","💗"],"bl",8),k*350)},1100);grant(3,e)};
$("#le").onclick=()=>{if($("#lta").hidden){$("#lta").value=letter;$("#lta").hidden=false;$("#ltx").hidden=true;$("#le").textContent="Save this letter"}else{letter=$("#lta").value;SV("letter",letter);$("#lta").hidden=true;$("#ltx").hidden=false;$("#ltx").textContent=letter;$("#le").textContent="Edit this letter"}};

/* trial of hearts */
let sc=0,tl=20,gi,gt;
function spawn(){const b=$("#gb"),h=document.createElement("button");h.className="h";h.textContent=["💖","💗","💕","💘"][Math.floor(Math.random()*4)];h.setAttribute("aria-label","Heart");h.style.left=Math.random()*(b.clientWidth-44)+"px";h.style.top="-44px";b.appendChild(h);
 setTimeout(()=>h.style.top=b.clientHeight+"px",30);setTimeout(()=>h.remove(),3600);
 h.onpointerdown=e=>{if(h.classList.contains("pop")||tl<=0)return;h.classList.add("pop");$("#gs").textContent=++sc;setTimeout(()=>h.remove(),260);if(sc>=8)endGame(true,e)}}
function endGame(w,e){clearInterval(gi);clearInterval(gt);tl=0;$("#gb").innerHTML=`<div class="empty" style="margin:110px 20px">${w?"All eight caught. The path is open.":"The lanterns faded. Try once more."}</div>`;if(w){boom(innerWidth/2,innerHeight/2,120);grant(4,e)}}
$("#gg").onclick=()=>{if(d>=4)return;clearInterval(gi);clearInterval(gt);$("#gb").innerHTML="";sc=0;tl=20;$("#gs").textContent=0;$("#gt").textContent=20;$("#gg").textContent="Restart";
 gi=setInterval(spawn,420);gt=setInterval(()=>{$("#gt").textContent=--tl;if(tl<=0)endGame(false)},1000)};

/* music */
const F={G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99};
const SONG=[["G4",.75],["G4",.25],["A4",1],["G4",1],["C5",1],["B4",2],["G4",.75],["G4",.25],["A4",1],["G4",1],["D5",1],["C5",2],["G4",.75],["G4",.25],["G5",1],["E5",1],["C5",1],["B4",1],["A4",2],["F5",.75],["F5",.25],["E5",1],["C5",1],["D5",1],["C5",2]];
let ac,mt,playing=false;
function playSong(){if(!playing)return;let t=ac.currentTime+.05;const B=.46;SONG.forEach(([n,q])=>{const o=ac.createOscillator(),g=ac.createGain();o.type="triangle";o.frequency.value=F[n];g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.2,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+q*B);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+q*B+.05);t+=q*B});mt=setTimeout(playSong,(t-ac.currentTime+1.5)*1000)}
function music(on){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();if(on===playing)return;playing=on;$("#mu").textContent=playing?"❚❚":"♪";clearTimeout(mt);if(playing){ac.resume();playSong()}}catch(e){}}
$("#mu").onclick=()=>music(!playing);

/* the wish and the finale */
const HP=[[150,250],[92,205],[40,119],[102,54],[150,100],[198,54],[260,119],[208,205]];let found=new Set();$("#rc").innerHTML=REASONS.map(r=>`<div class="rk"><div class="f">✦</div><div class="r2">${esc(r)}</div></div>`).join("");
$("#sg").innerHTML=HP.map((q,i)=>`<g class="st" data-i="${i}" tabindex="0" role="button" aria-label="Star ${i+1}"><circle cx="${q[0]}" cy="${q[1]}" r="22" fill="transparent"/><circle class="sd" cx="${q[0]}" cy="${q[1]}" r="6"/></g>`).join("");
function star(g){const i=+g.dataset.i,r=$("#rr");g.classList.add("on");$$(".rk")[i].classList.add("on");found.add(i);r.classList.remove("p");void r.offsetWidth;r.textContent=REASONS[i];r.classList.add("p");$("#fc").textContent=found.size+" of 8 stars found";
 const q=g.getBoundingClientRect();boom(q.x+q.width/2,q.y+q.height/2,40);if(found.size===8){$("#fc").textContent="Every star found. There are infinitely more.";for(let k=0;k<6;k++)setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight*.6,120),k*500);setTimeout(()=>{$("#mega").classList.add("open");for(let k=0;k<10;k++)setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight*.7,150),k*450)},3200)}}
$("#hs").onclick=e=>{const g=e.target.closest(".st");g&&star(g)};$("#hs").onkeydown=e=>{const g=e.target.closest&&e.target.closest(".st");if(g&&(e.key==="Enter"||e.key===" "))star(g)};
$("#blow").onclick=e=>{const c=$("#cake");if(c.classList.contains("off"))return;c.classList.add("off");$("#blow").hidden=true;$("#wm").textContent="Your wish is on its way to the stars.";boom(innerWidth/2,innerHeight*.5,200);grant(5,e);music(true);
 setTimeout(()=>{$("#fin").classList.add("open");$("#fin").scrollIntoView({behavior:"smooth",block:"center"});for(let k=0;k<5;k++)setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight*.5,130),k*600)},2400)};
$("#top").onclick=()=>$("#c0").scrollIntoView({behavior:"smooth"});

function start(){$("#nm").innerHTML=[...NAME].map((c,i)=>`<span style="animation-delay:${.5+i*.1}s">${c===" "?"&nbsp;":esc(c)}</span>`).join("");$("#big").textContent="Happy birthday, "+NAME;$("#mm").textContent=`Thank you for being you. Every day with you is a gift, and today the whole sky is celebrating you. With all my love, ${FROM} ♥`;
 if(!RM){setInterval(()=>drift(["🌸","🌹","❤️","🎉","✨","💖"],"pt",9),700);setInterval(()=>drift(["🎈"],"bl",12),3500);if(!LITE&&window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);gsap.to("#c0 .in",{yPercent:-16,opacity:.25,ease:"none",scrollTrigger:{trigger:"#c0",start:"top top",end:"bottom top",scrub:true}})}}
 $("#adv").textContent=BD.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});countdown();setInterval(countdown,1000);cal();drawMem();
 setTimeout(()=>typeTo($("#pro"),"Today the world celebrates someone wonderful, and I celebrate the happiness you bring into my life. Follow the trail, gather five keys, and the last door will open.",()=>$("#pr0").classList.add("vis"),38),1800)}

/* ---- enhancement layer ---- */
const bytes=u=>{const a=atob(u.split(",")[1]),r=new Uint8Array(a.length);for(let i=0;i<a.length;i++)r[i]=a.charCodeAt(i);return new Blob([r],{type:"image/jpeg"})};
/* richer birthday song: melody + warm bass + soft echo, starts right after the PIN */
let dly;
function playSong(){if(!playing)return;if(!dly){dly=ac.createDelay(1);dly.delayTime.value=.28;const g=ac.createGain();g.gain.value=.25;dly.connect(g).connect(dly);g.connect(ac.destination)}
 let t=ac.currentTime+.05;const B=.5;
 SONG.forEach(([n,q])=>{const f=F[n],L=q*B;[["triangle",f,.2],["sine",f/2,.16],...(LITE?[]:[["sine",f*1.5,.04]])].forEach(([ty,fr,v])=>{const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.value=fr;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+L);o.connect(g);g.connect(ac.destination);LITE||g.connect(dly);o.start(t);o.stop(t+L+.05)});t+=L});
 mt=setTimeout(playSong,(t-ac.currentTime+1.2)*1000)}
$("#mus").classList.add("on");
const _m=music;music=function(on){_m(on);$("#mus").classList.toggle("on",playing)};
$("#mu").onclick=()=>music(!playing);
/* sparkle trail, tilt, progress */
let lt=0;addEventListener("pointermove",e=>{const n=Date.now();if(n-lt<45||RM||LITE)return;lt=n;const s=document.createElement("i");s.className="sp";if(Math.random()<.45){s.classList.add("h");s.textContent=Math.random()<.5?"♥":"✦"}s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";document.body.appendChild(s);s.animate([{transform:"scale(1)",opacity:1},{transform:`translate(${Math.random()*30-15}px,28px) scale(0)`,opacity:0}],{duration:800}).onfinish=()=>s.remove();
 const g=e.target.closest&&e.target.closest(".glass");$$(".glass").forEach(x=>{if(x===g){const r=x.getBoundingClientRect();x.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*6+"deg");x.style.setProperty("--rx",(.5-(e.clientY-r.top)/r.height)*6+"deg")}else{x.style.setProperty("--rx","0deg");x.style.setProperty("--ry","0deg")}})});
addEventListener("scroll",()=>{$("#prog").style.width=scrollY/(document.documentElement.scrollHeight-innerHeight||1)*100+"%"},{passive:true});
/* shared vault: everyone who opens the link sees the same photos and moments */
const badge=s=>{const e=$("#sb");e.textContent=s?"✦ Shared vault: visible to everyone with this link":"Saved on this device only (open the link signed in to share)";e.className="sb"+(s?"":" l")};
(async()=>{badge(false);if(!window.claude||!claude.use)return;let db,as;try{db=await claude.use("db");as=await claude.use("assets")}catch(e){}
 if(!db)return;badge(true);const mc=db.collection("memories"),er=()=>{};
 mc.onSnapshot(s=>{mems=s.docs.map(d=>({...d.data(),id:d.id}));drawMem()},er);
 $("#ms").onclick=async()=>{const t=$("#mt").value.trim();if(!t)return $("#mt").focus();const b=$("#ms"),f=$("#mp").files[0];b.disabled=true;b.textContent="Sealing…";
  try{let p="";if(f){const u=await shrink(f);p=u&&as?(await as.upload(bytes(u))).url:u}
   await mc.doc("m"+Date.now().toString(36)+Math.random().toString(36).slice(2,5)).set({t,d:$("#md").value,n:$("#mn").value.trim(),p,ts:Date.now()});
   $("#mt").value=$("#md").value=$("#mn").value=$("#mp").value="";boom(innerWidth/2,innerHeight/2,90);toast("Memory sealed for everyone ✦")}
  catch(e){toast("Couldn't save. Your access may be view-only.")}b.disabled=false;b.textContent="Seal this memory"};
 $("#ml").onclick=e=>{const x=e.target.closest(".x");if(x&&confirm("Remove this memory for everyone?"))mc.doc(mems[+x.dataset.i].id).delete().catch(()=>toast("Only editors can remove memories."))}})();

/* gate floaters + bunting */
$("#bunt")||(()=>{const b=document.createElement("div");b.id="bunt";const C=["#ff5c8a","#ffc983","#8b5cf6","#5eead4","#ff9a7a"];for(let i=0;i<16;i++){const t=document.createElement("i");t.style.background=C[i%5];t.style.animationDelay=-i*.35+"s";b.appendChild(t)}document.body.appendChild(b)})();
const gfl=setInterval(()=>{const g=$("#gate");if(!g)return clearInterval(gfl);const e=document.createElement("div");e.className="gf";e.textContent=["❤️","💖","🎈","✨","🎉","💕"][Math.random()*6|0];e.style.left=Math.random()*100+"%";e.style.fontSize=18+Math.random()*30+"px";e.style.setProperty("--dx",Math.random()*120-60+"px");e.style.animationDuration=7+Math.random()*6+"s";g.appendChild(e);setTimeout(()=>e.remove(),14000)},LITE?1500:450);

/* ===== v3 features ===== */
/* sound effects: pop + applause */
function sfx(){if(muted)return;try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();const n=ac.sampleRate*.1|0,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n)**2;const s=ac.createBufferSource(),g=ac.createGain();s.buffer=b;g.gain.value=.35;s.connect(g);g.connect(ac.destination);s.start()}catch(e){}}
const applause=(sec=4)=>{if(muted)return;for(let i=0;i<sec*(LITE?7:16);i++)setTimeout(sfx,i*(LITE?140:62)+Math.random()*50)};
/* themes */
const TH=[["Rose Gold","#ffc983","#ff5c8a","#10030f","#2a0b25b3"],["Aurora","#7ef2d9","#7aa2ff","#030d1a","#0b2036b3"],["Lavender","#e6c9ff","#ff8fd8","#0e0720","#1f1038b3"],["Sunset","#ffd36b","#ff7a45","#160804","#2e130bb3"]];let ti=LS("theme",0);
function setTheme(i,say){const t=TH[i],r=document.documentElement.style;r.setProperty("--gold",t[1]);r.setProperty("--rose",t[2]);r.setProperty("--bg",t[3]);r.setProperty("--glass",t[4]);SV("theme",i);if(say)toast("Theme: "+t[0])}
setTheme(ti);
/* HUD buttons */
(()=>{const w=document.createElement("div");w.className="hr";const mk=(t,l,f)=>{const b=document.createElement("button");b.className="hq";b.textContent=t;b.setAttribute("aria-label",l);b.onclick=f;return b};
 w.append(mk("🎨","Change theme",()=>setTheme(ti=(ti+1)%TH.length,1)),mk("🎉","Confetti",e=>{for(let k=0;k<6;k++)setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight*.6,90),k*220);sfx()}),$("#mu"));$("#hud").appendChild(w)})();
/* ambient orbs */
["#ff5c8a|-10%|10%|340","#8b5cf6|70%|60%|420","#ffc983|20%|75%|300"].forEach(s=>{const [c,l,t,z]=s.split("|"),o=document.createElement("div");o.className="orb";o.style.cssText=`background:${c};left:${l};top:${t};width:${z}px;height:${z}px`;document.body.appendChild(o)});
/* chapter dots */
const nd=document.createElement("nav");nd.id="nd";document.body.appendChild(nd);let nn=0;
setInterval(()=>{const L=$$(".ch").filter(c=>!c.hidden);if(L.length!==nn&&!$("#app").hidden){nn=L.length;nd.innerHTML="";L.forEach((c,i)=>{const b=document.createElement("button");b.title=["Welcome","Calendar","Vault","Letter","Trial","Wish"][+c.id.slice(1)];b.setAttribute("aria-label",b.title);b.onclick=()=>c.scrollIntoView({behavior:"smooth"});nd.appendChild(b)})}
 let best=0,bd=1e9;L.forEach((c,i)=>{const r=c.getBoundingClientRect(),dd=Math.abs(r.top+r.height/2-innerHeight/2);if(dd<bd){bd=dd;best=i}});[...nd.children].forEach((b,i)=>b.classList.toggle("on",i===best))},1000);
/* scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("v");io.unobserve(e.target)}}),{threshold:.12});
setInterval(()=>LITE||$$(".glass:not(.rv),.ti:not(.rv),.gi:not(.rv),.rk:not(.rv)").forEach((e,i)=>{e.classList.add("rv");e.style.transitionDelay=Math.min(i%6,5)*.08+"s";io.observe(e)}),700);
/* pop the balloons */
$$(".bal").forEach(b=>b.onclick=e=>{sfx();boom(e.clientX,e.clientY,55);toast(REASONS[Math.random()*REASONS.length|0]);b.style.visibility="hidden";setTimeout(()=>b.style.visibility="",4500)});
/* slideshow */
$("#gl").insertAdjacentHTML("beforebegin",'<button class="bt" id="ssb">▶ Play slideshow</button>');let ss;
$("#ssb").onclick=()=>{const L=mems.filter(m=>m.p);if(!L.length)return toast("Add a photo first ✦");let i=0;const go=()=>{const m=L[i++%L.length],im=$("#lb img");im.classList.remove("kb");void im.offsetWidth;im.src=m.p;$("#lb figcaption").textContent=m.t;im.classList.add("kb");$("#lb").classList.add("open")};go();clearInterval(ss);ss=setInterval(()=>$("#lb").classList.contains("open")?go():clearInterval(ss),4200)};
/* blow out the candles with your voice */
$("#blow").insertAdjacentHTML("afterend",' <button class="bt" id="mic">🎤 Blow into the mic</button>');
$("#blow").addEventListener("click",()=>{$("#mic").hidden=true;applause(5)});
$("#mic").onclick=async()=>{try{const st=await navigator.mediaDevices.getUserMedia({audio:true}),c=new(window.AudioContext||window.webkitAudioContext)(),a=c.createAnalyser();a.fftSize=512;c.createMediaStreamSource(st).connect(a);const d=new Uint8Array(a.frequencyBinCount);toast("Take a breath and blow on the mic…");let h=0;const chk=()=>{if($("#cake").classList.contains("off"))return st.getTracks().forEach(t=>t.stop());a.getByteFrequencyData(d);h=d.slice(0,12).reduce((x,y)=>x+y,0)/12>150?h+1:0;if(h>6){st.getTracks().forEach(t=>t.stop());return $("#blow").click()}requestAnimationFrame(chk)};chk()}catch(e){toast("Mic unavailable. Use the button instead.")}};
/* finale applause + downloadable card */
new MutationObserver(()=>{if($("#mega").classList.contains("open")&&!applause.d){applause.d=1;applause(6)}}).observe($("#mega"),{attributes:true,attributeFilter:["class"]});
$("#top").parentNode.insertAdjacentHTML("beforebegin",'<p><button class="bt p" id="cardb">💌 Save my birthday card</button></p>');
$("#cardb").onclick=async()=>{const c=document.createElement("canvas");c.width=1080;c.height=1350;const x=c.getContext("2d"),cs=getComputedStyle(document.documentElement),gold=cs.getPropertyValue("--gold").trim(),rose=cs.getPropertyValue("--rose").trim(),g=x.createLinearGradient(0,0,1080,1350);g.addColorStop(0,"#34103a");g.addColorStop(1,cs.getPropertyValue("--bg").trim());x.fillStyle=g;x.fillRect(0,0,1080,1350);
 for(let i=0;i<190;i++){x.globalAlpha=Math.random()*.9;x.fillStyle="#fff";x.beginPath();x.arc(Math.random()*1080,Math.random()*1350,Math.random()*2.4,0,7);x.fill()}x.globalAlpha=1;x.textAlign="center";
 try{await document.fonts.load("italic 120px 'Cormorant Garamond'")}catch(e){}
 x.strokeStyle=gold;x.lineWidth=3;x.strokeRect(50,50,980,1250);x.globalAlpha=.4;x.strokeRect(70,70,940,1210);x.globalAlpha=1;
 x.font="170px serif";x.fillText("❤️",540,330);x.fillStyle="#fff";x.shadowColor=rose;x.shadowBlur=40;x.font="italic 500 128px 'Cormorant Garamond',Georgia,serif";x.fillText("Happy Birthday",540,560);
 const n=x.createLinearGradient(0,620,0,900);n.addColorStop(0,"#fff");n.addColorStop(.5,gold);n.addColorStop(1,rose);x.fillStyle=n;x.font="italic 500 290px 'Cormorant Garamond',Georgia,serif";x.fillText(NAME,540,880);x.shadowBlur=0;
 x.fillStyle="#fff";x.font="42px Jost,sans-serif";["May every wish you make this year","come true, and may every day be as","beautiful as the smile you wear."].forEach((l,i)=>x.fillText(l,540,1010+i*58));x.fillStyle=gold;x.font="italic 52px 'Cormorant Garamond',Georgia,serif";x.fillText("With all my love, "+FROM+" ♥",540,1235);
 c.toBlob(async b=>{try{const dl=window.claude&&claude.use?await claude.use("downloads"):null;if(dl){await dl.save({filename:"birthday-card.png",data:b});return toast("Card saved ✦")}}catch(e){}
  const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="birthday-card.png";a.click();toast("Card saved ✦")})};

/* =====================================================================
   v4 LAYER (organised by section)
   ===================================================================== */
let muted=false;const SVGNS="http://www.w3.org/2000/svg",cssv=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const saveFile=async(b,name)=>{try{const dl=window.claude&&claude.use?await claude.use("downloads"):null;if(dl){await dl.save({filename:name,data:b});return toast("Saved ✦")}}catch(e){}const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=name;a.click();toast("Saved ✦")};

/* ---- 1. canvas: layered starfield with cursor parallax + shooting stars ---- */
let mx=0,my=0,SH=[];
addEventListener("pointermove",e=>{if(LITE)return;mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;const r=document.documentElement.style;r.setProperty("--px",mx*2);r.setProperty("--py",my*2)},{passive:true});
function rsz(){sk.width=innerWidth;sk.height=innerHeight;S=Array.from({length:LITE?(innerWidth<600?55:90):Math.min(320,innerWidth/3.5|0)},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:Math.random()*.85+.15,p:Math.random()*6,h:Math.random()<.18}))}
function frame(t){if(LITE&&!RM&&!ULTRA&&t-(frame.l||0)<32){requestAnimationFrame(frame);return}frame.l=t;const W=sk.width,H=sk.height;sx.clearRect(0,0,W,H);
 S.forEach(s=>{const x=((s.x-mx*s.z*30)%W+W)%W,y=((s.y-scrollY*s.z*.25-my*s.z*20)%H+H)%H,a=RM?.7:.3+.7*Math.abs(Math.sin(t/(700+s.z*500)+s.p));sx.globalAlpha=a;sx.fillStyle=s.z>.8?"#ffe9b0":s.h?"#ffd0e2":"#dfe4ff";sx.beginPath();sx.arc(x,y,s.z*1.5,0,6.3);sx.fill();
  if(!LITE&&s.h&&s.z>.6){sx.globalAlpha=a*.55;sx.strokeStyle=sx.fillStyle;sx.lineWidth=.8;sx.beginPath();sx.moveTo(x-s.z*5,y);sx.lineTo(x+s.z*5,y);sx.moveTo(x,y-s.z*5);sx.lineTo(x,y+s.z*5);sx.stroke()}});
 if(!RM&&!ULTRA){if(SH.length<2&&!LITE&&Math.random()<.007)SH.push({x:Math.random()*W*.9,y:Math.random()*H*.4,l:1,v:9+Math.random()*7});
  SH=SH.filter(s=>s.l>0);SH.forEach(s=>{sx.globalAlpha=s.l;const g=sx.createLinearGradient(s.x,s.y,s.x-s.v*9,s.y-s.v*4.5);g.addColorStop(0,"#fff");g.addColorStop(1,"#fff0");sx.strokeStyle=g;sx.lineWidth=2;sx.beginPath();sx.moveTo(s.x,s.y);sx.lineTo(s.x-s.v*9,s.y-s.v*4.5);sx.stroke();s.x+=s.v;s.y+=s.v/2;s.l-=.018});requestAnimationFrame(frame)}}
rsz();RM?frame(0):0;

/* ---- 2. canvas: confetti / fireworks with sparkle, heart and ribbon shapes ---- */
const heart=(c,r)=>{c.beginPath();c.moveTo(0,r*.4);c.bezierCurveTo(-r*1.5,-r*.5,-r*.6,-r*1.5,0,-r*.5);c.bezierCurveTo(r*.6,-r*1.5,r*1.5,-r*.5,0,r*.4);c.fill()},
 spark=(c,r)=>{c.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4,d=i%2?r*.35:r*1.4;c.lineTo(Math.cos(a)*d,Math.sin(a)*d)}c.closePath();c.fill()};
function boom(x=innerWidth/2,y=innerHeight/2,n=140){if(RM)n=Math.min(n,24);if(LITE)n=Math.ceil(n*.35);if(P.length>(LITE?150:800))return;const C=[cssv("--gold"),cssv("--rose"),"#ffffff","#5eead4","#a78bfa"],K=["r","h","s","b","s","h"];
 for(let i=0;i<n;i++){const a=Math.random()*6.28,s=3+Math.random()*9;P.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-4,r:2+Math.random()*4,c:C[i%5],l:1,rot:Math.random()*6,vr:(Math.random()-.5)*.4,k:K[i%6]})}
 if(!run){run=true;requestAnimationFrame(tick)}}
function tick(){cx.clearRect(0,0,cv.width,cv.height);P=P.filter(p=>p.l>0&&p.y<cv.height+30);
 P.forEach(p=>{p.vy+=p.k==="b"?.07:.18;p.vx*=.99;p.x+=p.vx+(p.k==="b"?Math.sin(p.l*14)*1.2:0);p.y+=p.vy;p.l-=.0075;p.rot+=p.vr;cx.save();cx.globalAlpha=Math.max(p.l,0);cx.translate(p.x,p.y);cx.rotate(p.rot);cx.fillStyle=p.c;
  if(p.k==="h")heart(cx,p.r*1.3);else if(p.k==="s")spark(cx,p.r);else if(p.k==="b")cx.fillRect(-p.r*3,-1,p.r*6,2.2);else cx.fillRect(-p.r,-p.r/2,p.r*2,p.r);cx.restore()});
 P.length?requestAnimationFrame(tick):(run=false,cx.clearRect(0,0,cv.width,cv.height))}

/* ---- 3. audio: chime, master mute indicator, tab-visibility handling ---- */
function chime(){if(muted)return;try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume();[784,988,1319].forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime+i*.12;o.type="sine";o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.18,t+.02);g.gain.exponentialRampToValueAtTime(.001,t+.9);o.connect(g);g.connect(ac.destination);o.start(t);o.stop(t+1)})}catch(e){}}
const syncMu=()=>{const b=$("#mu"),on=playing&&!muted&&(!ac||ac.state==="running");b.textContent=on?"🔊":"🔇";b.classList.toggle("off",!on);b.setAttribute("aria-pressed",on);b.title=on?"Mute sound":playing&&ac&&ac.state==="suspended"?"Tap to enable sound":"Unmute sound";b.setAttribute("aria-label",b.title)};
const _m2=music;music=function(on){_m2(on);try{ac.onstatechange=syncMu}catch(e){}syncMu()};
$("#mu").onclick=()=>{if(playing){muted=true;music(false)}else{muted=false;music(true)}};syncMu();
document.addEventListener("visibilitychange",()=>{if(!ac)return;document.hidden?ac.suspend():playing&&!muted&&ac.resume()});
const _g=grant;grant=function(n,e){const had=d>=n;_g(n,e);if(!had)setTimeout(chime,1300)};

/* ---- 4. tactile balloons ---- */
$(".hrt2").insertAdjacentHTML("afterend",'<div><button id="bpill">🎈 0 popped · tap to respawn</button></div>');let pops=0,eggs=0;
const bubble=(x,y)=>{const e=document.createElement("div");e.className="fb";e.textContent=REASONS[Math.random()*REASONS.length|0];e.style.left=Math.min(Math.max(x,125),innerWidth-125)+"px";e.style.top=y+"px";document.body.appendChild(e);setTimeout(()=>e.remove(),2700)};
function respawn(b){if(b.style.visibility!=="hidden")return;b.style.visibility="";if(!RM)b.animate([{scale:".2",opacity:0},{scale:"1.15",opacity:1,offset:.6},{scale:"1"}],{duration:700,easing:"cubic-bezier(.34,1.56,.64,1)"})}
$$(".bal").forEach(b=>b.onclick=()=>{if(b.style.visibility==="hidden")return;const r=b.getBoundingClientRect(),x=r.x+r.width/2,y=r.y+r.height/2,
 fin=()=>{b.style.visibility="hidden";sfx();boom(x,y,60);bubble(x,y);$("#bpill").textContent=`🎈 ${++pops} popped · tap to respawn`;if(pops%4===0){chime();for(let k=0;k<4;k++)setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight*.6,90),k*250);toast("Balloon party! 🎈")}setTimeout(()=>respawn(b),5000)};
 RM?fin():b.animate([{scale:"1"},{scale:"1.35 .72",offset:.35},{scale:".85 1.3",offset:.65},{scale:"1.7",opacity:0}],{duration:320,easing:"ease-out"}).onfinish=fin});
$("#bpill").onclick=()=>$$(".bal").forEach(respawn);
$$(".orb").forEach((o,i)=>o.style.setProperty("--d",22+i*20));

/* ---- 5. love letter: typing speed + skip ---- */
$("#le").insertAdjacentHTML("beforebegin",'<div class="lc"><button class="bt" id="lsp">Typing ×1</button><button class="bt" id="lsk">Skip ⏩</button></div>');
$("#lsp").onclick=()=>{TSP=TSP>=4?1:TSP*2;$("#lsp").textContent="Typing ×"+TSP};$("#lsk").onclick=$("#ltx").onclick=()=>skipT&&skipT();
$("#env").addEventListener("click",()=>setTimeout(chime,500));

/* ---- 6. constellation: ghost line preview, sequential lines, reveal / shuffle / filter ---- */
$("#sg").insertAdjacentHTML("beforebegin",'<g id="cl"></g>');$$(".rk").forEach((c,i)=>c.dataset.i=i);let order=[];
const prev=i=>{const r=$("#rr");r.classList.remove("p");void r.offsetWidth;r.textContent=REASONS[i];r.classList.add("p")},
 line=(a,b,c)=>{const l=document.createElementNS(SVGNS,"line");[["x1",a[0]],["y1",a[1]],["x2",b[0]],["y2",b[1]],["class",c]].forEach(([k,v])=>l.setAttribute(k,v));l.setAttribute("pathLength",1);return l};
function finale(){if(finale.d)return;finale.d=1;$("#fc").textContent="Every star found. There are infinitely more.";for(let k=0;k<6;k++)setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight*.6,120),k*500);setTimeout(()=>{$("#mega").classList.add("open");for(let k=0;k<10;k++)setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight*.7,150),k*450)},3200)}
function star(g,quiet){const i=+g.dataset.i;if(found.has(i))return prev(i);g.classList.add("on");$(`.rk[data-i="${i}"]`).classList.add("on");
 if(order.length)$("#cl").appendChild(line(HP[order[order.length-1]],HP[i],"cln"));order.push(i);found.add(i);prev(i);$("#fc").textContent=found.size+" of 8 stars found";chime();
 if(!quiet){const q=g.getBoundingClientRect();boom(q.x+q.width/2,q.y+q.height/2,40)}if(found.size===8)finale()}
const ghost=g=>{$("#hs .ghl")?.remove();if(!g||!order.length||found.has(+g.dataset.i))return;$("#cl").appendChild(line(HP[order[order.length-1]],HP[+g.dataset.i],"ghl"))};
$("#hs").addEventListener("pointerover",e=>{const g=e.target.closest(".st");ghost(g);if(g&&found.has(+g.dataset.i))prev(+g.dataset.i)});$("#hs").addEventListener("pointerleave",()=>ghost(null));
$("#hs").addEventListener("focusin",e=>{const g=e.target.closest(".st");ghost(g);if(g&&found.has(+g.dataset.i))prev(+g.dataset.i)});$("#hs").addEventListener("focusout",()=>ghost(null));
$("#fc").insertAdjacentHTML("afterend",'<div class="cc"><button class="bt" id="ra">✦ Reveal all</button><button class="bt" id="shf">⇄ Shuffle</button><button class="bt" id="flt">Show: all</button></div>');
$("#ra").onclick=()=>$$("#sg .st").filter(g=>!found.has(+g.dataset.i)).forEach((g,k)=>setTimeout(()=>star(g,true),k*380));
$("#shf").onclick=()=>{const rc=$("#rc");[...rc.children].sort(()=>Math.random()-.5).forEach(c=>rc.appendChild(c));toast("Reasons reshuffled ✦")};
$("#flt").onclick=()=>{const o=$("#rc").classList.toggle("fo");$("#flt").textContent=o?"Show: found":"Show: all"};

/* ---- 7. vault: date polish, lightbox navigation, slideshow, JSON backup ---- */
const fmtD=d=>{if(!d||d==="Sample")return d||"";const t=new Date(d+"T00:00:00");return isNaN(t)?d:t.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})};
function drawMem(){const L=mems.map((m,i)=>({...m,i})),T=[...L].sort((a,b)=>(a.d||"9999")<(b.d||"9999")?-1:1),ph=L.filter(m=>m.p);
 $("#ml").innerHTML=(T.length?T:SAMPLE).map(m=>`<div class="ti glass${T.length?"":" s"}">${T.length?`<button class="x" data-i="${m.i}" aria-label="Delete memory">✕</button>`:""}<h3>${esc(m.t)}</h3><small>${esc(fmtD(m.d))}</small><p>${esc(m.n||"")}</p></div>`).join("");
 $("#gl").innerHTML=ph.map(m=>`<div class="gi"><button class="hf im" data-i="${m.i}" aria-label="Open photo: ${esc(m.t)}"><img src="${esc(m.p)}" alt=""></button><small>${esc(m.t)}</small></div>`).join("")+Array.from({length:Math.max(0,3-ph.length)},()=>`<div class="gi"><button class="hf" data-add="1">+ Add a photo</button><small>A moment waits here</small></div>`).join("")}
$("#lb").insertAdjacentHTML("afterbegin",'<div id="lbc"></div><button class="lbn" id="lbp" aria-label="Previous photo">‹</button><button class="lbn" id="lbx" aria-label="Next photo">›</button>');let LB=[],li=0;
function openLb(L,i){LB=L;li=(i+L.length)%L.length;const m=L[li],im=$("#lb img");im.classList.remove("kb");void im.offsetWidth;im.src=m.p;im.classList.add("kb");$("#lb figcaption").textContent=[m.t,fmtD(m.d),m.n].filter(Boolean).join(" · ");$("#lbc").textContent=li+1+" / "+L.length;$("#lb").classList.toggle("one",L.length<2);$("#lb").classList.add("open")}
$("#gl").onclick=e=>{const b=e.target.closest(".hf");if(!b)return;if(b.dataset.add){$("#mt").focus();return toast("Add a title and a photo, then seal the memory.")}const L=mems.filter(m=>m.p);openLb(L,L.indexOf(mems[+b.dataset.i]))};
const step=(e,k)=>{e.stopPropagation();clearInterval(ss);openLb(LB,li+k)};$("#lbp").onclick=e=>step(e,-1);$("#lbx").onclick=e=>step(e,1);
addEventListener("keydown",e=>{if(!$("#lb").classList.contains("open"))return;if(e.key==="ArrowLeft")step(e,-1);if(e.key==="ArrowRight")step(e,1)});
$("#ssb").onclick=()=>{const L=mems.filter(m=>m.p);if(!L.length)return toast("Add a photo first ✦");let i=0;openLb(L,i++);clearInterval(ss);ss=setInterval(()=>$("#lb").classList.contains("open")?openLb(LB,li+1):clearInterval(ss),4200)};
$("#ssb").insertAdjacentHTML("afterend",'<button class="bt" id="exb">⬇ Backup (JSON)</button>');
$("#exb").onclick=()=>saveFile(new Blob([JSON.stringify({exported:new Date().toISOString(),memories:mems.map(({id,i,...r})=>r)},null,2)],{type:"application/json"}),"nira-memories.json");
drawMem();

/* ---- 8. promise coupons, secret note, time together ---- */
const COUPONS=["One Free Hug 🤗","Coffee Date ☕","Movie Night Pick 🎬","Breakfast in Bed 🥞","Unlimited Cuddles 🧸","A Handwritten Poem ✍️"],SECRET=`Nira, you found the secret note.\nWhatever this year brings, I will be beside you, on every ordinary Tuesday and every big celebration.\nYou are my favourite person.\n${FROM} ♥`;let used=LS("used",[]);
$("#cardb").parentNode.insertAdjacentHTML("beforebegin",`<div class="pk"><h3 class="cl" style="font-size:30px">Promise coupons</h3><p class="rd" style="margin-bottom:0">Tap a coupon to redeem it. Each is valid forever.</p><div id="pd">${COUPONS.map((c,i)=>`<button class="cp${used.includes(i)?" on":""}" data-i="${i}" aria-label="Coupon ${i+1}"><span class="f">🎟️ Tap to redeem</span><span class="b">${esc(c)}</span></button>`).join("")}</div><p><button class="bt p" id="sn">🤫 Open my secret note</button></p></div>`);
$("#pd").onclick=e=>{const b=e.target.closest(".cp");if(!b||b.classList.contains("on"))return;b.classList.add("on");used.push(+b.dataset.i);SV("used",used);chime();boom(e.clientX,e.clientY,50);toast("Redeemed: "+COUPONS[+b.dataset.i])};
document.body.insertAdjacentHTML("beforeend",'<div id="sec" role="dialog" aria-label="Secret note"><div><p id="sp"></p><div id="tc"></div><label>Our story began: <input id="td" type="date"></label><p style="min-height:0;margin:16px 0 0"><button class="bt" id="sx">Close</button></p></div></div>');
const tg=()=>{const s=LS("since","");$("#tc").textContent=s?(()=>{const ms=Date.now()-new Date(s+"T00:00:00");return ms<0?"":`${Math.floor(ms/864e5)} days · ${Math.floor(ms/36e5)%24} hours · ${Math.floor(ms/6e4)%60} minutes together ❤️`})():"Pick the day your story began ↓"};
$("#td").value=LS("since","");$("#td").onchange=()=>{SV("since",$("#td").value);tg()};setInterval(()=>$("#sec").classList.contains("open")&&tg(),1000);
function openSecret(){$("#sec").classList.add("open");tg();chime();boom(innerWidth/2,innerHeight/2,100);$("#sp").textContent="";typeTo($("#sp"),SECRET,null,38)}
$("#sn").onclick=openSecret;$("#sx").onclick=()=>$("#sec").classList.remove("open");addEventListener("keydown",e=>e.key==="Escape"&&$("#sec").classList.remove("open"));
$(".hrt2").onclick=()=>{if(++eggs>=5){eggs=0;openSecret()}else if(eggs===3)toast("Keep tapping… ❤️")};

/* =====================================================================
   v5 CINEMATIC LAYER: every block is isolated so one failure can't break the page
   ===================================================================== */
const safe=f=>{try{f()}catch(e){console.warn("v5:",e)}},root=document.documentElement.style;
/* more themes */
safe(()=>TH.push(["Ocean","#9be7ff","#4f8cff","#020a1c","#0a1a3ab3"],["Cherry","#ffd1dc","#ff3d6e","#14020a","#2e0a18b3"]));
/* moon + hero ring text */
safe(()=>{document.body.insertAdjacentHTML("beforeend",'<div id="moon"></div>');const t=("HAPPY BIRTHDAY "+NAME.toUpperCase()+" ❤ ").repeat(4);
 $("#c0").insertAdjacentHTML("afterbegin",`<svg id="ring" viewBox="0 0 400 400" aria-hidden="true"><defs><path id="rp" d="M200,200 m-165,0 a165,165 0 1,1 330,0 a165,165 0 1,1 -330,0"/></defs><text><textPath href="#rp">${t}</textPath></text></svg>`)});
/* floating sky lanterns */
safe(()=>{if(RM||LITE)return;setInterval(()=>{if(LITE||$("#app").hidden||document.hidden||document.querySelectorAll(".lan").length>7)return;const l=document.createElement("div");l.className="lan";l.style.left=Math.random()*94+"vw";l.style.setProperty("--s",.6+Math.random()*.9);l.style.setProperty("--sw",Math.random()*140-70+"px");l.style.animationDuration=(20+Math.random()*12)+"s,"+(1.4+Math.random())+"s";document.body.appendChild(l);setTimeout(()=>l.remove(),33000)},2400)});
/* heading wipe-in on scroll */
safe(()=>{const w=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("v");w.unobserve(e.target)}}),{threshold:.3});setInterval(()=>LITE||$$(".ch h2:not(.wipe),.ch .cl:not(.wipe)").forEach(e=>{if(!RM)e.classList.add("wipe");w.observe(e)}),800)});
/* magnetic buttons (the cursor ring was removed) */
safe(()=>{if(!matchMedia("(pointer:fine)").matches||RM)return;let mg=null;addEventListener("pointermove",e=>{const b=e.target.closest(".bt,.hq");if(mg&&mg!==b)mg.style.translate="";if(b){const r=b.getBoundingClientRect();b.style.translate=(e.clientX-r.x-r.width/2)*.18+"px "+(e.clientY-r.y-r.height/2)*.25+"px"}mg=b},{passive:true})});
/* music-reactive visualizer: route all audio through one analyser */
let AN=null;
safe(()=>{const oc=AudioNode.prototype.connect;AudioNode.prototype.connect=function(t,...a){if(typeof ac!=="undefined"&&ac&&t===ac.destination&&this!==AN){if(!AN||AN.context!==ac){AN=ac.createAnalyser();AN.fftSize=128;AN.smoothingTimeConstant=.82;oc.call(AN,ac.destination)}oc.call(this,AN,...a);return t}return oc.call(this,t,...a)};
 const vz=document.createElement("canvas");vz.id="viz";document.body.appendChild(vz);const vc=vz.getContext("2d"),fit=()=>{vz.width=innerWidth;vz.height=90};fit();addEventListener("resize",fit);let bass=0,n=0,gold="#ffc983",rose="#ff5c8a";
 (function vl(){requestAnimationFrame(vl);if(RM||LITE||document.hidden)return;const on=AN&&playing&&!muted;if(!on&&bass<.01){if(bass){bass=0;root.setProperty("--bass",0);vc.clearRect(0,0,vz.width,vz.height)}return}
  if(n++%40===0){gold=cssv("--gold");rose=cssv("--rose")}const W=vz.width,H=vz.height,B=Math.min(56,W/12|0),f=new Uint8Array(AN?AN.frequencyBinCount:64);if(on)AN.getByteFrequencyData(f);
  vc.clearRect(0,0,W,H);const g=vc.createLinearGradient(0,H,0,0);g.addColorStop(0,rose);g.addColorStop(1,gold);vc.fillStyle=g;const bw=W/B;
  for(let i=0;i<B;i++){const v=f[Math.min(f.length-1,i*f.length/B|0)]/255,h=Math.max(2,v*H*.95);vc.globalAlpha=.35+v*.65;vc.beginPath();vc.roundRect?vc.roundRect(i*bw+bw*.18,H-h,bw*.64,h,bw*.3):vc.rect(i*bw+bw*.18,H-h,bw*.64,h);vc.fill()}
  bass=on?(f[0]+f[1]+f[2]+f[3])/1020:bass*.9;root.setProperty("--bass",bass.toFixed(3))})()});
/* candle smoke when the flames go out */
safe(()=>$("#blow").addEventListener("click",()=>{if(RM)return;[39,50,61].forEach((p,i)=>{const s=document.createElement("i");s.className="sm";s.style.left=p+"%";s.style.setProperty("--sx",(i-1)*18+"px");s.style.animationDelay=i*.15+"s";$("#cake").appendChild(s);setTimeout(()=>s.remove(),3200)})}));
/* click anywhere for a little sparkle burst */
safe(()=>addEventListener("pointerdown",e=>{if(!e.target.closest("button,input,textarea,label,a,.st,#grid,#hold,#sec,#lb"))boom(e.clientX,e.clientY,16)}));
/* type "love" or "nira" anywhere for a heart shower */
safe(()=>{let buf="";addEventListener("keydown",e=>{if($("#gate")||e.key.length!==1||e.target.closest("input,textarea"))return;buf=(buf+e.key.toLowerCase()).slice(-4);if(buf==="love"||buf==="nira"){buf="";chime();toast("You found a little magic ✦");if(!RM)for(let k=0;k<26;k++)setTimeout(()=>drift(["❤️","💖","💕","💗"],"bl",7),k*160)}})});


/* ---- adaptive performance: measure real frame times and step down if the device struggles ---- */
function setLite(on){LITE=on;document.documentElement.classList.toggle("lite",on);if(on)$$(".lan,.sp,.fb").forEach(e=>e.remove())}
safe(()=>{let f=[],last=0,rounds=0;const chk=t=>{if(document.hidden||$("#app").hidden){last=0;return requestAnimationFrame(chk)}if(last)f.push(t-last);last=t;
 if(f.length>=120){f.sort((a,b)=>a-b);const med=f[60];f=[];rounds++;if(med>30&&!LITE)setLite(true);else if(med>40&&LITE&&!ULTRA){ULTRA=true;document.documentElement.classList.add("ultra")}if(rounds>=4)return}requestAnimationFrame(chk)};requestAnimationFrame(chk)});
