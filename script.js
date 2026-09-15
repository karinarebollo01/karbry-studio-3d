const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter');
const products=document.querySelectorAll('.product');
filters.forEach(f=>f.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active')); f.classList.add('active');
  const cat=f.dataset.filter;
  products.forEach(p=>p.style.display=(cat==='all'||p.dataset.cat===cat)?'block':'none');
}));
