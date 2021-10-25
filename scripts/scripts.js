ScrollReveal({ distance: '60px' });

ScrollReveal().reveal('.artist-container', {
  reset: true,
});

ScrollReveal().reveal('.flame-highlight', {
  reset: true
});

ScrollReveal().reveal('.logo', {
  reset: true,
  delay: 500
});

ScrollReveal().reveal('.reveal', {
  reset: true,
  easing: 'ease-in-out',
  scale: 0.2
});

ScrollReveal().reveal('.reveal-text', {
  reset: true,
  delay: 300
});

const socialReveal = document.querySelectorAll('.social-icons img');
ScrollReveal().reveal(socialReveal, {
  interval: 4,
  reset: true,
  delay: 500
});

const tracksReveal = document.querySelectorAll('.tracklist li');
ScrollReveal().reveal(tracksReveal, {
  interval: 4,
  reset: true
});

const socialsFooterReveal = document.querySelectorAll('.socials-footer img');
ScrollReveal().reveal(socialsFooterReveal, {
  interval: 4,
  reset: true,
  delay: 800
});