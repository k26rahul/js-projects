window.addEventListener('load', () => {
  let audio = new Audio('./assets/WhatsApp Audio 2025-02-21 at 6.20.04 PM.mpeg');
  audio.loop = true;
  const tryPlayAudio = () => {
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
      setTimeout(tryPlayAudio, 500);
    });
  };
  tryPlayAudio();
});

let x = 0;
let y = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let seenImages = new Set();

function activateRandomImage() {
  app.images.forEach(img => (img.isActive = false));

  if (seenImages.size === app.images.length) {
    seenImages.clear();
  }

  let unseenImages = app.images.filter(img => !seenImages.has(img));
  let randomImage = unseenImages[getRandomInt(0, unseenImages.length - 1)];
  randomImage.isActive = true;

  // let img = document.querySelector('img.active');
  // if (img) img.style.opacity = 0;
  // setTimeout(() => {
  //   if (img) img.style.opacity = 1;
  // }, 500);

  seenImages.add(randomImage);
}

activateRandomImage();
setInterval(activateRandomImage, 2000);

setInterval(() => {
  x = getRandomInt(0, window.innerWidth);
  y = getRandomInt(0, window.innerHeight);
  appendHeart();
}, 500);

document.addEventListener('click', event => {
  x = event.clientX;
  y = event.clientY;
  appendHeart();
});

function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// document.addEventListener(
//   'mousemove',
//   throttle(event => {
//     x = event.clientX;
//     y = event.clientY;
//     appendHeart();
//   }, 100)
// );

function appendHeart() {
  let div = document.createElement('div');
  div.classList.add('heart');
  div.innerHTML = '♡';

  let ftz = (Math.random() * 5).toFixed(2);

  div.style.top = `${y - ftz * 10}px`;
  div.style.left = `${x - ftz * 5}px`;

  div.style.fontSize = `${ftz}rem`;
  div.style.animationDuration = `${4 / ftz}s`;

  setTimeout(() => {
    document.body.removeChild(div);
  }, 3000);
  document.body.appendChild(div);
}
