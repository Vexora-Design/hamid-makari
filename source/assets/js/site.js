const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    toggle.addEventListener('click', () => {
      const opened=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.textContent=opened?'×':'☰';
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';
    }));
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');observer.unobserve(item.target)}}),{threshold:.08});
      document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    } else { document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible')); }
