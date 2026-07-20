(function(){
  function applyLang(lang){
    document.documentElement.setAttribute('data-lang', lang);
    var btn = document.querySelector('.lang-toggle');
    if(btn){ btn.textContent = lang === 'es' ? 'EN' : 'ES'; }
    try{ localStorage.setItem('site-lang', lang); }catch(e){}
  }
  document.addEventListener('DOMContentLoaded', function(){
    var saved = 'es';
    try{ saved = localStorage.getItem('site-lang') || 'es'; }catch(e){}
    applyLang(saved);
    var btn = document.querySelector('.lang-toggle');
    if(btn){
      btn.addEventListener('click', function(){
        var current = document.documentElement.getAttribute('data-lang');
        applyLang(current === 'es' ? 'en' : 'es');
      });
    }
  });
})();
