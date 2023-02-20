

/*The game counters are broken. But i don't really think it's that important for the enjoyment of the page, maybe i fix them in the future*/ 


let userLives = 5;
let robotLives = 5;
let userGames = 0;
let robotGames = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const comment_1 = document.querySelector("#comment-1");

const robot_health = document.querySelector("#robot-health")
const chad_health = document.querySelector("#chad-health")

const restartPage = document.querySelector("#restart-page");
const restartButton = document.querySelector("#restart-page > button");
const restartText = document.querySelector("#restart-page > p")


console.log(buttons)

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function round(pSelect, cSelect){//Takes player selection and computer selection
    if(pSelect == cSelect){ 
        comment_1.textContent = "It's a tie!";
    } else if ((pSelect == 0 && cSelect == 2) || (pSelect == 1 && cSelect == 0) || (pSelect == 2 && cSelect == 1) ){
        comment_1.textContent = "You win this round! " + numTranslator(pSelect) + " BEATS " + numTranslator(cSelect);
        robotLives -= 1;
        lowerLife(robot_health, robotLives);
    } else {
        comment_1.textContent = "You lost this round! " + numTranslator(cSelect) + " BEATS " + numTranslator(pSelect);
        userLives -= 1;
        lowerLife(chad_health, userLives);
    }
    if(userLives == 0){
        restartPage.style.transform = "translateY(0%)";
        robotGames += 1;
        restartText.textContent = `You lose!`
        return;
    } 
    else if(robotLives == 0){
        restartPage.style.transform = "translateY(0%)";
        userGames += 1
        restartText.textContent = `You win!`
        return;
    }

}


function game(){ 
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



function lowerLife(life, lives){
    if(lives == 4){
        life.style.width = "80%";
    } else if(lives == 3){
        life.style.width = "60%";
    } else if(lives == 2){
        life.style.width = "40%";
    } else if(lives == 1){
        life.style.width = "20%";
    } else if(lives == 0){
        life.style.width = "0%";
    }
}


function restartGame(){
    restartPage.style.transform = "translateY(-100%)";
    userLives = 5;
    robotLives = 5;
    chad_health.style.width = "100%";
    robot_health.style.width = "100%";

}

game();

restartButton.addEventListener("click", () => restartGame())
