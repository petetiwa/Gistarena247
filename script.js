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

// ---------- LIVE TICKER: real jobs + real news from Supabase ----------
(function () {
  const track = document.querySelector('.ticker-track');
  if (!track) return;

  function renderTickerItems(items) {
    return items.map(item =>
      `<span class="ticker-item"><span class="tag-${item.tag}">${item.label}</span> ${item.text}</span>`
    ).join('');
  }

  async function loadTicker() {
    try {
      const { data: jobs } = await supabaseClient
        .from('jobs')
        .select('title, description')
        .order('created_at', { ascending: false })
        .limit(4);

      const { data: posts } = await supabaseClient
        .from('posts')
        .select('title, category')
        .order('created_at', { ascending: false })
        .limit(4);

      const items = [];

      (jobs || []).forEach(job => {
        items.push({ tag: 'gig', label: 'HIRE NOW', text: job.title });
      });

      (posts || []).forEach(post => {
        items.push({ tag: 'hot', label: (post.category || 'GIST').toUpperCase(), text: post.title });
      });

      if (items.length === 0) return;

      track.innerHTML = renderTickerItems(items) + renderTickerItems(items);
    } catch (err) {
      console.error('Ticker load failed:', err);
    }
  }

  loadTicker();
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
