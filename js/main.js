document.addEventListener('DOMContentLoaded', function(){
  // Dropdown menu hover support (for desktop)
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(function(dd){
    dd.addEventListener('mouseenter', function(){
      var menu = this.querySelector('.dropdown-menu');
      if(menu) menu.style.display = 'block';
    });
    dd.addEventListener('mouseleave', function(){
      var menu = this.querySelector('.dropdown-menu');
      if(menu) menu.style.display = 'none';
    });
  });

  // Contact form placeholder behavior
  var form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('This is a placeholder form. Replace with real submission logic.');
    });
  }
});
