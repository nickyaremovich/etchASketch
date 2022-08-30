function setSize() {
    let size = prompt("Please enter a number between 1 & 100");
    let area = size * size;
    
    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div');
    
    square.forEach((div) => div.remove());
   
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    
    for (let i = 0; i < area; i++) {
    let squares = document.createElement('div');
    squares.style.backgroundColor = "#FFFFFF";
    squares.addEventListener('mouseover', () => {
        squares.style.backgroundColor = "black";
    });
    board.insertAdjacentElement("beforeend", squares);
    }
}       
