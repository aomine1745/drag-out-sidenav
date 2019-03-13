var HyDrawer = hyDrawer.HyDrawer;

var ua = navigator.userAgent.toLowerCase();
var isSafari = ua.indexOf('safari') > 0 && ua.indexOf('chrome') < 0;
var isMobileSafari = isSafari && ua.indexOf('mobile') > 0;

window.drawer = new HyDrawer(window.drawerEl, {
  range: isMobileSafari ? [35, 150] : [0, 150],
  threshold: isSafari ? 0 : 10,
  touchEvents: true,
  mouseEvents: true,
  preventDefault: true,
});

window.drawerEl.addEventListener('hy-drawer-transitioned', function (e) {
  // console.log('hy-drawer transitioned to', e.detail);
});

window.menuEl.addEventListener('click', function (e) {
  e.preventDefault();
  window.drawer.toggle();
});