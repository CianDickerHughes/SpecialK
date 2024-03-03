// Author:Cian Dicker-Hughes
let diceRolls = [];

// roll the dice
function RollDice() {
    let rolls = "";
    let dices;
    for(let i = 0; i < diceRolls.length; i++){
        switch(diceRolls[i]){
            case 2:
                dices = Math.floor(Math.random() * 2) + 1;
                break;
            case 4:
                dices = Math.floor(Math.random() * 4) + 1;
                break;
            case 6:
                dices = Math.floor(Math.random() * 6) + 1
                break;
            case 8:
                dices = Math.floor(Math.random() * 8) + 1
                break;
            case 10:
                dices = Math.floor(Math.random() * 10) + 1
                break;
            case 12:
                dices = Math.floor(Math.random() * 12) + 1
                break;
            case 20:
                dices = Math.floor(Math.random() * 20) + 1
                break;
            case 100:
                dices = Math.floor(Math.random() * 100) + 1
                break;
            default:
                dices = 1;
                break;
        }
        rolls = rolls +" "+ dices;
    }

    document.getElementById("diceroll").innerHTML = rolls;
}

// Get the what dice are picked
function Dice2() {
   diceRolls.push(2);
}
function Dice4() {
    diceRolls.push(4);
 }
 function Dice6() {
    diceRolls.push(6);
 }
 function Dice8() {
    diceRolls.push(8);
 }
 function Dice10() {
    diceRolls.push(10);
 }
 function Dice12() {
    diceRolls.push(12);
 }
 function Dice20() {
    diceRolls.push(20);
 }
 function Dic100() {
    diceRolls.push(100);
 }