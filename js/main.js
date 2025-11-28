document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('menu-toggle');
  toggle && toggle.addEventListener('click', function(){
    var nav = document.querySelector('.main-nav');
    if(!nav) return;
    if(nav.style.display === 'flex'){
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '12px';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.right = '20px';
      nav.style.background = 'rgba(0,0,0,0.85)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '6px';
    }
  });

  // contact form placeholder behavior
  var form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('This is a placeholder form. Replace with real submission logic.');
    });
  }
});
