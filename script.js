  const menuToggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('drawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer(){
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
    menuToggle.setAttribute('aria-expanded','true');
    drawerClose.focus();
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.focus();
  }
  menuToggle.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });

  // close drawer when a nav link is clicked
  document.querySelectorAll('.drawer-nav a').forEach(a=>{
    a.addEventListener('click', closeDrawer);
  });
