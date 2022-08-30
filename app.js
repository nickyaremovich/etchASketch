
let board = document.querySelector('.board');
board.style.gridTemplateRows = 'repeat(16, 1fr)';
board.style.gridTemplateColumns = 'repeat(16, 1fr)'
let squares
for (let i = 0; i < 256; i++) {
    let squares = document.createElement('div');
    squares.style.backgroundColor = "#FFFFFF";
    squares.addEventListener('mouseover', () => {
        squares.style.backgroundColor = "black";
    });
    board.insertAdjacentElement("beforeend", squares);
}

