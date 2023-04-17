console.log("Welcome to Tic Tac Toe");
let turn = "X";
let isgameover = false;
let click = new Audio("1.wav");
let bgmusic = new Audio("mix.mp3");
let end = new Audio("2.wav");

// Function to changeTurn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 6, 0],
        [3, 4, 5, 5, 18, 0],
        [6, 7, 8, 5, 31, 0],
        [0, 3, 6, -7.5, 19, 90],
        [1, 4, 7, 4.5, 19, 90],
        [2, 5, 8, 16, 19, 90],
        [0, 4, 8, 5, 18, 45],
        [2, 4, 6, 5, 18, 135]];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.getElementsByTagName('img')[0].style.width = "100px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "27vw";
            end.play();

        }
    })
}

//Logic to main Game
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            click.play();
            bgmusic.pause();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                bgmusic.play();

            }
        }
    })
})
// Add eventListener
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    document.querySelector('.line').style.width = 0;
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    bgmusic.pause();
    document.getElementsByClassName("info")[0].innerText = "Turn for: " + turn;
    document.getElementsByTagName('img')[0].style.width = "0px";

})