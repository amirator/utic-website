document.getElementById('yr').textContent=new Date().getFullYear();
const setLang=l=>{document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';
document.querySelectorAll('[data-en]').forEach(e=>e.textContent=e.dataset[l]);
document.querySelectorAll('[data-ph-en]').forEach(e=>e.placeholder=l==='ar'?e.dataset.phAr:e.dataset.phEn);
document.getElementById('lang').textContent=l==='ar'?'English':'عربي';localStorage.setItem('lang',l)};
document.getElementById('lang').onclick=()=>setLang(document.documentElement.lang==='ar'?'en':'ar');
document.getElementById('burger').onclick=()=>document.getElementById('menu').classList.toggle('open');
document.querySelectorAll('#menu a').forEach(a=>a.onclick=()=>document.getElementById('menu').classList.remove('open'));
if(localStorage.getItem('lang')==='ar')setLang('ar');
function sendForm(e){e.preventDefault();document.getElementById('note').style.color='#3a6b1f';return false}
