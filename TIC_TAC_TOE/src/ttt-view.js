class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const grid = document.createElement("ul");
    grid.classList.add("grid");
    grid.style.display = "flex"
    grid.style.flexWrap = "wrap"
    grid.style.width = "300px";
    grid.style.height = "300px";

    for (let col=0; col < 3; col++) {
      for (let row=0; row < 3; row++) {
        const cell = document.createElement("li");
        cell.style.backgroundColor = "gray";
        cell.style.border = "1px solid black";
        cell.style.width = "32.33%";
        cell.style.height = "32.33%";
        cell.style.listStyle = "none";
        cell.style.cursor = "pointer";
      
        cell.classList.add("cell");
        cell.setAttribute("data-row", row);
        cell.setAttribute("data-col", col);
        grid.appendChild(cell);
      }

    }
    this.el.appendChild(grid);
  }
  
  bindEvents() {
    const grid = document.querySelector("ul");
    grid.addEventListener("click", this.makeMove.bind(this));
  }

  handleClick(e) {
    const cell = e.target
    const x = parseInt(cell.getAttribute("data-row"))
    const y = parseInt(cell.getAttribute("data-col"))
    const pos = [x, y]
    const currentPlayer = this.game.currentPlayer

    this.game.playMove(pos);
    cell.style.backgroundColor = "white";
    cell.innerHTML = currentPlayer;
    cell.classList.add(currentPlayer === "X" ? "x" : "o");
  }


  makeMove(square) {
    this.handleClick(square);
    if (this.game.isOver()) {
      if (this.game.winner()) {
        console.log(`${this.game.winner()} has won!`);
      } else {
        console.log('NO ONE WINS!');
      }
      // this.game.gameCompletionCallback();
    }
  }
}

module.exports = View;
