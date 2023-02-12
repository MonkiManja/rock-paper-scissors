/* 
    There's 3 elections: -Rock (0)    (kills scissors {2})
                         -Paper (1)   (kills rock {0})
                         -Scissors(2) (kills paper {1})

    You have 5 lives and 3 elections for each.
    So i will need the computer/robot lives and the user one

    When the player submits his selection, the computer needs to pick a random one
    and depending in who wins i need to lower adversary's lives.

*/

let userLives = 5;
let robotLives = 5;

console.log(" Rock: 0  Paper: 1  Scissors: 2 ")

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function round(pSelect, cSelect){//Takes player selection and computer selection
    console.log("Computer selected: " + numTranslator(cSelect) )
    if(pSelect == cSelect){ 
        console.log("It's a tie!")
    } else if ((pSelect == 0 && cSelect == 2) || (pSelect == 1 && cSelect == 0) || (pSelect == 2 && cSelect == 1) ){
        console.log("You win this round!");
        robotLives -= 1;
    } else {
        console.log("You lost this round!");
        userLives -= 1;
    }
    console.log("LIVES: -Computer: "+ robotLives + "   -You: " + userLives)
    if(userLives == 0){
        console.log("!!!GAME OVER!!!");
        userLives = 5;
        console.log("Lives restarted")
    } else if(robotLives == 0){
        console.log("YOU WON THE MATCH");
        robotLives = 5;
        console.log("Lives restarted")
    }
}


function numTranslator(num){
    if(num == 0){
        return "rock";
    } 
    if(num == 1){
        return "paper";
    }
    if(num == 2){
        return "scissors"
    }
}