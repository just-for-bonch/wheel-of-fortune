function spin() {
  let animation = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');

  animation.setAttribute('attributeName', 'transform');
  animation.setAttribute('type', 'rotate');
  animation.setAttribute('from', '0 400 400');
  animation.setAttribute('to', '-360 400 400');
  animation.setAttribute('dur', '10s');
  animation.setAttribute('repeatCount', 'indefinite');

  let object = document.getElementById("logo").contentDocument.querySelector('#circle');
  object.appendChild(animation);
  console.log('start')
}

function hiddenButton() {
  let button = document.querySelector('.btn-start');
  button.remove();
}

function stopSpin() {
  let object = document.getElementById("logo").contentDocument.querySelector('animateTransform');
  object.remove();
  console.log('stop');
}

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

function createInput() {
  let button = document.createElement('button');
  button.innerHTML = 'Отправить';
  document.querySelector('.submit-number').appendChild(button);
}

function valueInput(value) {
  let input = document.querySelector('.submit-number__result');
  input.value = value;
}
function tease(number) {
  if (number === 450) {
    return 'Азазазаз))'
  } else {
    if ((number / 10) % 2 === 0) {
      return 1;
    } else {
      return 100;
    }
  }
}
function digits(i, number) {
  if (i < 500) {
    setTimeout(function() {
      if (i < 100) {
        i += 4;
      } else {
        i += 10;
      }
      let number;
      if (i < 400 || i === 500) {
        number = random(10, 100);
      } else {
        number = tease(i);
      }
      document.querySelector('.random-number').innerHTML = number;
      valueInput(number);
      digits(i, number);
    }, i);
  } else {
    stopSpin();
    createInput();
  }
  console.log(i);
}

function start() {
  spin();
  hiddenButton();
  digits(0); 
}