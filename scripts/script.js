const container = document.querySelector('.container');
const blocks = document.querySelectorAll('.block');
const numberofBlocks = 256;
let blockDiv;

for (let i = 0; i < numberofBlocks; i++) {
  blockDiv = document.createElement('div');
  blockDiv.className = 'block';
  container.append(blockDiv);
}

blocks.forEach(block => {
  block.addEventListener('mouseenter', () => console.log('Mouse enter'));
  block.addEventListener('mouseleave', () => console.log('Mouse leave'));
})
