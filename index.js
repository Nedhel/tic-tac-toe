let gameArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
function drawSymbol(pos) {
    let player = 0;
    document.getElementById("turn").innerHTML == "Turno de Jugador 1"
        ? (player = 1)
        : (player = 2);
    if (player == 1) {
        document.getElementById(pos.target.id).innerHTML = "X";
        document.getElementById("turn").innerHTML = "Turno de Jugador 2";
    } else {
        document.getElementById(pos.target.id).innerHTML = "O";
        document.getElementById("turn").innerHTML = "Turno de Jugador 1";
    }
    gameArray[pos.target.id[0]][pos.target.id[1]] = player;
    checkBoard(player);
}
function checkBoard(player) {
    let anyOneWon = 0;
    if (
        (gameArray[0][0] == player &&
            gameArray[0][1] == player &&
            gameArray[0][2] == player) ||
        (gameArray[1][0] == player &&
            gameArray[1][1] == player &&
            gameArray[1][2] == player) ||
        (gameArray[2][0] == player &&
            gameArray[2][1] == player &&
            gameArray[2][2] == player) ||
        (gameArray[0][0] == player &&
            gameArray[1][0] == player &&
            gameArray[2][0] == player) ||
        (gameArray[0][1] == player &&
            gameArray[1][1] == player &&
            gameArray[2][1] == player) ||
        (gameArray[0][2] == player &&
            gameArray[1][2] == player &&
            gameArray[2][2] == player) ||
        (gameArray[0][0] == player &&
            gameArray[1][1] == player &&
            gameArray[2][2] == player) ||
        (gameArray[0][2] == player &&
            gameArray[1][1] == player &&
            gameArray[2][0] == player)
    )
        anyOneWon = 1;
    if (anyOneWon == 1) {
        console.log(`Gana Jugador ${player}`);
    }
}
function reset() {
    let buttons = document.getElementById("container").children;
    for (const iterator of buttons) {
        iterator.firstChild.innerHTML = "";
    }
    gameArray.forEach((item) => {
        item.forEach(function (number) {
            number = 0;
        });
    });
}

window.addEventListener("load", () => {
    let buttons = document.getElementById("container").children;
    for (const iterator of buttons) {
        iterator.firstChild.addEventListener("click", drawSymbol);
    }
    document.getElementById("reset").addEventListener("click", reset);
});
