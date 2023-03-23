// 1
const diceFaces = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]
    console.log('facce del dado ->',diceFaces);

// 2
let humanDice = Math.floor((Math.random() * diceFaces.length) + 1)
    console.log('dado umano ->',humanDice);
    document.getElementById("human").innerHTML =
        `Human <br>
        ${humanDice}`
    
let computerDice = Math.floor((Math.random() * diceFaces.length) + 1)
    console.log('dado computer ->',computerDice);
    document.getElementById("computer").innerHTML =
        `Computer <br>
        ${computerDice}`

// 3
if (humanDice > computerDice) {
    console.log("vince umano");
    document.getElementById('winner').innerHTML = `Human Wins!`
} else if (humanDice === computerDice) {
    console.log("pareggio");
    document.getElementById('winner').innerHTML = `It's a Draw!`
} else if (humanDice < computerDice) {
    console.log("vince computer");
    document.getElementById('winner').innerHTML = `Computer Wins!`
}


