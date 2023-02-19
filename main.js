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
let userGames = 0;
let robotGames = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const comment_1 = document.querySelector("#comment-1");
const comment_2 = document.querySelector("#comment-2"); 


console.log(buttons)

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function round(pSelect, cSelect){//Takes player selection and computer selection
    console.log("Computer selected: " + numTranslator(cSelect) )
    if(pSelect == cSelect){ 
        comment_1.textContent = "It's a tie!"
        comment_2 = ""
    } else if ((pSelect == 0 && cSelect == 2) || (pSelect == 1 && cSelect == 0) || (pSelect == 2 && cSelect == 1) ){
        comment_1.textContent = "You win this round! " + numTranslator(pSelect) + " BEATS " + numTranslator(cSelect);
        comment_2 = ""
        console.log("You win this round! " + numTranslator(pSelect) + " BEATS " + numTranslator(cSelect));
        robotLives -= 1;
        return "You win this round! " + numTranslator(pSelect) + " BEATS " + numTranslator(cSelect);
    } else {
        comment_1.textContent = "You lost this round! " + numTranslator(cSelect) + " BEATS " + numTranslator(pSelect)
        comment_2 = ""
        console.log("You lost this round! " + numTranslator(cSelect) + " BEATS " + numTranslator(pSelect));
        userLives -= 1;
        return "You lost this round! " + numTranslator(cSelect) + " BEATS " + numTranslator(pSelect);
    }
    if(userLives == 0){
        comment_2.textContent = "Unlucky! You lost the game" 
        console.log("YOU LOST THE GAME")
        userLives = 5;
        robotLives = 5;
        robotGames += 1
    } 
    else if(robotLives == 0){
        comment_2.textContent = "Congrats! You won the game" 
        console.log("YOU WON THE GAME")
        userLives = 5;
        robotLives = 5;
        userGames += 1
    }

}


function game(){ 
    
    userLives = 5;
    robotLives = 5;
    rock.addEventListener("click", () => {
        pInput = 0;
        round(pInput, getComputerChoice())
    })
    paper.addEventListener("click", () => {
        pInput = 1;
        round(pInput, getComputerChoice())
    })
    scissors.addEventListener("click", () => {
        pInput = 2;
        round(pInput, getComputerChoice())
    })

    
    
}


function numTranslator(num){
    if(num == 0){
        return "🗿";
    } 
    if(num == 1){
        return "📄";
    }
    if(num == 2){
        return "✂️"
    }
}



game();