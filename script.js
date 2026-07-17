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
// ---------- DYNAMIC TICKER: marketplace + gamified prompts ----------
(function () {
  const track = document.querySelector('.ticker-track');
  if (!track) return;

  const tickerItems = [
    { tag: 'hot',  label: 'BREAKING',      text: 'Lagos–Ibadan expressway repairs to begin next phase' },
    { tag: 'gig',  label: 'HIRE NOW',      text: 'Generator technician needed, Lekki — ₦25,000/day' },
    { tag: 'game', label: 'LIVE AT 8PM',   text: "Tonight's Trivia Jackpot is ₦10,000!" },
    { tag: 'hot',  label: 'GIST',          text: 'Afrobeats star teases surprise collab at Lagos show' },
    { tag: 'game', label: 'PREDICT & WIN', text: 'Will the Third Mainland Bridge be clear at 5:00 PM?' },
    { tag: 'gig',  label: 'HIRE NOW',      text: 'Event decorator for weekend wedding, Abuja — ₦60,000' },
    { tag: 'hot',  label: 'BUSINESS',      text: 'Naira firms slightly against dollar in parallel market' },
    { tag: 'game', label: 'STREAK',        text: "Log in today to keep your Daily Streak alive — don't lose your Fuel Points!" },
    { tag: 'gig',  label: 'HIRE NOW',      text: 'Delivery riders wanted, Port Harcourt — daily pay' },
    { tag: 'game', label: 'AUCTION LIVE',  text: 'Reverse Auction closing soon — lowest unique bid wins a free ad slot' }
  ];

  function renderTickerItems(items) {
    return items.map(item =>
      `<span class="ticker-item"><span class="tag-${item.tag}">${item.label}</span> ${item.text}</span>`
    ).join('');
  }

  track.innerHTML = renderTickerItems(tickerItems) + renderTickerItems(tickerItems);
})();


// ---------- 30-SECOND ATTENTION TRACKER ----------
(function () {
  const articleEl = document.querySelector('.postview-body');
  if (!articleEl) return;

  setTimeout(() => {
    const toast = document.createElement('div');
    toast.className = 'fuel-toast';
    toast.textContent = "+5 Fuel Points Earned! Download our app to claim them and join tonight's trivia.";
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 6000);
  }, 30000);
})();

