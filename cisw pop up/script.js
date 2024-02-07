function showPopup() {
  document.getElementById('popup').style.transform = 'scale(1)';
  document.getElementById('overlay').style.display = 'block';
}

function showPopupAnimation() {
  const tl = gsap.timeline({ defaults: { duration: 0.25, ease: "power1.out" } });
  tl.fromTo('#popup', { scale: 0 }, { scale: 1, ease: "power1.out" })
    .fromTo('.icon', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0deg' })
    .fromTo('.popupContent', { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, '<');
}

function showPopupAndAnimation() {
  showPopup();
  showPopupAnimation();
}

function closePopup() {
  document.getElementById('popup').style.transform = 'scale(0)';
  document.getElementById('overlay').style.display = 'none';
}

document.getElementById('showPopupBtn').addEventListener('click', showPopupAndAnimation);

document.getElementById('closeBtn').addEventListener('click', closePopup);