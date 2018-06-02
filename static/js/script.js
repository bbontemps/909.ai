function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
  if (e.type == "keydown") {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  } else if (e.type == "click") {
    var audio = document.querySelector(`audio[data-key="${e.srcElement.parentNode.getAttribute("data-key")}"]`);
    var key = document.querySelector(`div[data-key="${e.srcElement.parentNode.getAttribute("data-key")}"]`);
  }
  
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  console.log(e)
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSound));
