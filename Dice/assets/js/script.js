// schedule

/*

1- creare un array di di numeri da 1 a 6 (facce di un dado)
2- creare due "const" random - una per l'umano una per il computer
3- creare un ciclo "for" con relativo "if" per determinare il vincitore




*/

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

let humanDice = Math.floor((Math.random() * diceFaces.length) + 1)
    console.log('dado umano ->',humanDice);
    
let computerDice = Math.floor((Math.random() * diceFaces.length) + 1)
    console.log('dado computer ->',computerDice);