const container = document.querySelector('.container');
let numberofBlocks = 32;
let blockDiv;

for (let i = 0; i < numberofBlocks; i++) {
  blockDiv = document.createElement('div');
  blockDiv.className = 'block';
  container.append(blockDiv);
}