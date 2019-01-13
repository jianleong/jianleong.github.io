/* TODO: replace with anime.js (to animate list expansion, etc)
 * */
var titleAnimationDuration = 1000;

ScrollReveal().reveal('.hero-title', {
  duration: titleAnimationDuration,
  distance: '100px',
  origin: 'top'
});

ScrollReveal().reveal('.resume-item', {
  delay: titleAnimationDuration / 2.5,
  duration: 1000,
  distance: '50px',
  interval: 200,
  origin: 'left'
});
