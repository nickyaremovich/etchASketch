function genBoard(size) { 
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    };
};

genBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        genBoard(input)
    } else {
    console.log('Error: Input not between 2 & 100');
    };
};

function colorSquare {
    square.style.backgroundColor = 'black';
};
