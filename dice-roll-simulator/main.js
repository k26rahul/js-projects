let buttonEl = document.querySelector('.game-container button');
let diceEl = document.querySelector('.game-dice');
let resultContainerEl = document.querySelector('.result-container');

let dieFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
let rollIdx = 1;

buttonEl.addEventListener('click', function () {
  diceEl.classList.add('roll-animation'); // just after button click
});

diceEl.addEventListener('animationend', function () {
  diceEl.classList.remove('roll-animation'); // after animation finishes (1s later)
  let randomInt = parseInt(Math.random() * 6);
  diceEl.innerHTML = dieFaces[randomInt];

  // now add a result-item to result-container
  addResultItem(randomInt);
  rollIdx++;
});

// set outerHTML, div + content both are done directly 👇
function addResultItem(randomInt) {
  let div = document.createElement('div');
  resultContainerEl.prepend(div);

  div.outerHTML = `<div class="result-item slide-up-animation">
                      <span class="result-label">Roll #${rollIdx}:</span>
                      <span class="result-dice">${dieFaces[randomInt]}</span>
                   </div>`;
}

// set innerHTML (content), do div separately (better approach than before) 👇
// function addResultItem(randomInt) {
//   let div = document.createElement('div');
//   div.classList.add('result-item');
//   div.innerHTML = `<span class="result-label">Roll #${rollIdx}</span>
//                    <span class="result-dice">${dieFaces[randomInt]}</span>`;
//   resultContainerEl.appendChild(div);
// }

// verbose/clumsy approach below 👇
// function addResultItem(randomInt) {
//   let div = document.createElement('div');
//   div.classList.add('result-item');

//   let labelSpan = document.createElement('span');
//   labelSpan.innerHTML = `Roll #${rollIdx}`;
//   labelSpan.classList.add('result-label');

//   let diceSpan = document.createElement('span');
//   diceSpan.innerHTML = dieFaces[randomInt];
//   diceSpan.classList.add('result-dice');

//   div.appendChild(labelSpan);
//   div.appendChild(diceSpan);
//   resultContainerEl.appendChild(div);
// }
