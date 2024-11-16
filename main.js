let title = document.getElementById("h1");
let square = [];
let turn = "x";
let gameOver = false;

function end(num1, num2, num3) {
    title.innerHTML = `${square[num1]} wins!`;
    document.getElementById("box" + num1).style.backgroundColor = "#000";
    document.getElementById("box" + num2).style.backgroundColor = "#000";
    document.getElementById("box" + num3).style.backgroundColor = "#000";
    gameOver = true;
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function checkWinner() {
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('box' + i).innerHTML;
    }
    if (square[1] === square[2] && square[2] === square[3] && square[1] !== "") {
        end(1, 2, 3);
    } else if (square[4] === square[5] && square[5] === square[6] && square[4] !== "") {
        end(4, 5, 6);
    } else if (square[7] === square[8] && square[8] === square[9] && square[7] !== "") {
        end(7, 8, 9);
    } else if (square[1] === square[4] && square[4] === square[7] && square[1] !== "") {
        end(1, 4, 7);
    } else if (square[2] === square[5] && square[5] === square[8] && square[2] !== "") {
        end(2, 5, 8);
    } else if (square[3] === square[6] && square[6] === square[9] && square[3] !== "") {
        end(3, 6, 9);
    } else if (square[1] === square[5] && square[5] === square[9] && square[1] !== "") {
        end(1, 5, 9);
    } else if (square[3] === square[5] && square[5] === square[7] && square[3] !== "") {
        end(3, 5, 7);
    }

    if (!square.includes("") && !gameOver) {
        title.innerHTML = "It's a draw!";
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}

function game(id) {
    if (gameOver) return;

    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML === "") {
        element.innerHTML = "x";
        turn = "o";
        title.innerHTML = "o's turn";
    } else if (turn === "o" && element.innerHTML === "") {
        element.innerHTML = "o";
        turn = "x";
        title.innerHTML = "x's turn";
    }
    checkWinner();
}

