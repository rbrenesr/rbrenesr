// Navigation remains visible when JavaScript is unavailable.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const small = window.matchMedia('(max-width: 640px)');
function syncNavigation() {
  const focusWasInNav = nav.contains(document.activeElement);
  toggle.hidden = !small.matches;
  nav.hidden = small.matches;
  toggle.setAttribute('aria-expanded', String(!nav.hidden));
  if (small.matches && focusWasInNav) toggle.focus();
}
if (toggle && nav) {
  syncNavigation();
  small.addEventListener('change', syncNavigation);
  toggle.addEventListener('click', () => {
    nav.hidden = !nav.hidden;
    toggle.setAttribute('aria-expanded', String(!nav.hidden));
  });
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && small.matches) {
      nav.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}
