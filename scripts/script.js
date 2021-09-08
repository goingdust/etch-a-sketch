const container = document.querySelector('.container');
const block = document.querySelector('div');
const quantity = document.querySelector('.quantity');
const refresh = document.querySelector('button');
const prompt = document.querySelector('p');
let userInput = quantity.value;

function createBlockGrid () {
  const numberofBlocks = userInput * userInput;
  container.style.setProperty(
    'grid-template-columns', 
    `repeat(${userInput}, 1fr)`
    );

  container.style.setProperty(
    'grid-template-rows', 
    `repeat(${userInput}, 1fr)`
    );

  for (let i = 0; i < numberofBlocks; i++) {
    let blockDiv = document.createElement('div');
    blockDiv.className = 'block';
    container.append(blockDiv);
  }
  setBlockLimit(userInput);
}

function setBlockLimit () {
  if (userInput > 100) {
    userInput = 100;
    quantity.value = 100;
    prompt.textContent = 'Too high! Please enter a number between 1 \
    and 100.';
  } else if (userInput < 1) {
    userInput = 1;
    quantity.value = 1;
    prompt.textContent = 'Too low! Please enter a number between 1 \
    and 100.';
  }
}

block.addEventListener('mouseover', function (e) {
  e.target.classList.replace('block', 'color');
});

refresh.addEventListener('click', () => location.reload());

createBlockGrid();
