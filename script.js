// smooth scroll para enlaces (botones)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const selector = this.getAttribute('href');
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
