window.addEventListener("load", startGame);
let points = 0;
let lives = 3;
let gameIsPaused = false;
let gameHasEnded = false;
let durationOfGame = 30;

function startGame() {


    console.log("function start()");

    timeLeft = durationOfGame;

    deciSeconds = durationOfGame * 10;

    startTimer();
    document.querySelector("#mushroom_container").classList.add("pos1");
    document.querySelector("#mushroom_container").classList.add("fall1");
    document.querySelector("#mushroom").addEventListener("click", scaleDown1);
    document.querySelector("#egg_container").classList.add("pos2");
    document.querySelector("#egg_container").classList.add("fall2");
    document.querySelector("#egg").addEventListener("click", scaleDown2);
    document.querySelector("#fish_container").classList.add("pos3");
    document.querySelector("#fish_container").classList.add("fall3");
    document.querySelector("#fish").addEventListener("click", scaleDown3);
    document.querySelector("#poison_container").classList.add("pos4");
    document.querySelector("#poison_container").classList.add("fall4");
    document.querySelector("#poison").addEventListener("click", scaleDown4);
    document.querySelector("#poison_container").addEventListener("animationiteration", loseLife);
    document.querySelector("#candy_container").classList.add("pos5");
    document.querySelector("#candy_container").classList.add("fall5");

    document.querySelector("#candy").addEventListener("click", scaleDown5);
    document.querySelector("#candy_container").addEventListener("animationiteration", loseLife);

    document.querySelector("#poison").addEventListener("click", getPoint);
    document.querySelector("#candy").addEventListener("click", getPoint);
    document.querySelector("#mushroom").addEventListener("click", losePoint);
    document.querySelector("#egg").addEventListener("click", losePoint);
    document.querySelector("#fish").addEventListener("click", losePoint);
    document.querySelector("#settings").addEventListener("click", showSettings);
    document.querySelector("#settings").addEventListener("click", showSettings);


}

function restartGame() {
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#settings_board").classList.add("hidden");

    document.querySelector("#level_complete").classList.add("hidden");


    lives = 3;
    points = 0;
    document.querySelector("#mushroom_container").classList.remove("paused");
    document.querySelector("#egg_container").classList.remove("paused");
    document.querySelector("#fish_container").classList.remove("paused");
    document.querySelector("#poison_container").classList.remove("paused");

    document.querySelector("#candy_container").classList.remove("paused");
    document.querySelector("#mushroom").classList.remove("paused");
    document.querySelector("#egg").classList.remove("paused");


    document.querySelector("#fish").classList.remove("paused");
    document.querySelector("#candy").classList.remove("paused");


    gameHasEnded = false;

    startGame();
}

function showSettings() {
    console.log("function showSettings()");
    pauseGame();
    document.querySelector("#settings").classList.add("showSettings");
    document.querySelector("#settings").addEventListener("click", showSettings);
    document.querySelector("#settings_board").classList.remove("hidden");



}

function pauseGame() {
    if (gameIsPaused == false) {
        console.log("Game is set to PAUSED");

        document.querySelector("#mushroom_container").classList.add("paused");
        document.querySelector("#egg_container").classList.add("paused");
        document.querySelector("#fish_container").classList.add("paused");
        document.querySelector("#poison_container").classList.add("paused");

        document.querySelector("#candy_container").classList.add("paused");

        document.querySelector("#mushroom").classList.add("paused");
        document.querySelector("#egg").classList.add("paused");
        document.querySelector("#fish").classList.add("paused");
        document.querySelector("#poison").classList.add("paused");

        document.querySelector("#candy").classList.add("paused");
        document.querySelector("#mushroom").removeEventListener("click", scaleDown1);
        document.querySelector("#egg").removeEventListener("click", scaleDown2);
        document.querySelector("#fish").removeEventListener("click", scaleDown3);
        document.querySelector("#poison").removeEventListener("click", scaleDown4);
        document.querySelector("#candy").removeEventListener("click", scaleDown5);
        document.querySelector("#mushroom").offsetHeight;

        gameIsPaused = true;
    } else {
        console.log("Game is set to NOT Paused");
        document.querySelector("#mushroom_container").classList.remove("paused");
        document.querySelector("#egg_container").classList.remove("paused");
        document.querySelector("#fish_container").classList.remove("paused");
        document.querySelector("#poison_container").classList.remove("paused");


        document.querySelector("#candy_container").classList.remove("paused");

        document.querySelector("#mushroom").classList.remove("paused");
        document.querySelector("#egg").classList.remove("paused");
        document.querySelector("#fish").classList.remove("paused");
        document.querySelector("#poison").classList.remove("paused");

        document.querySelector("#candy").classList.remove("paused");


        document.querySelector("#mushroom").addEventListener("click", scaleDown1);
        document.querySelector("#egg").addEventListener("click", scaleDown2);
        document.querySelector("#fish").addEventListener("click", scaleDown3);
        document.querySelector("#poison").addEventListener("click", scaleDown4);


        document.querySelector("#candy").addEventListener("click", scaleDown5);
        gameIsPaused = false;

        startTimer();
    }
}

function gameOver() {
    console.log("function gameOver()");


    document.querySelector("#mushroom_container").classList.add("paused");
    document.querySelector("#egg_container").classList.add("paused");
    document.querySelector("#fish_container").classList.add("paused");
    document.querySelector("#poison_container").classList.add("paused");

    document.querySelector("#candy_container").classList.add("paused");

    document.querySelector("#mushroom").classList.add("paused");
    document.querySelector("#egg").classList.add("paused");
    document.querySelector("#fish").classList.add("paused");
    document.querySelector("#poison").classList.add("paused");
    document.querySelector("#candy").classList.add("paused");

    document.querySelector("#mushroom").removeEventListener("click", scaleDown1);
    document.querySelector("#egg").removeEventListener("click", scaleDown2);
    document.querySelector("#fish").removeEventListener("click", scaleDown3);
    document.querySelector("#poison").removeEventListener("click", scaleDown4);

    document.querySelector("#candy").removeEventListener("click", scaleDown5);

    document.querySelector("#mushroom").offsetHeight;

    document.querySelector("#game_over").classList.remove("hidden");


    gameHasEnded = true;
}



function startTimer() {
    console.log("function startTimer()");
    if (gameIsPaused == false) {
        if (timeLeft == 0) {
            gameOver();
        } else {
            setTimeout(showTime, 1000);
        }
    }
}

function showTime() {
    console.log("function showTime()");
    if (timeLeft > 0) {
        timeLeft--;
        console.log("Time left")

        startTimer();
        document.querySelector("#time_left").textContent = timeLeft;
    } else {
        gameOver();
    }

    if (points > 30) {
        levelComplete();
    }

}

function levelComplete() {
    console.log("function levelComplete()");
    if (gameHasEnded == false) {
        document.querySelector("#mushroom_container").classList.add("paused");
        document.querySelector("#egg_container").classList.add("paused");
        document.querySelector("#fish_container").classList.add("paused");
        document.querySelector("#poison_container").classList.add("paused");

        document.querySelector("#candy_container").classList.add("paused");

        document.querySelector("#mushroom").classList.add("paused");
        document.querySelector("#egg").classList.add("paused");
        document.querySelector("#fish").classList.add("paused");
        document.querySelector("#poison").classList.add("paused");
        document.querySelector("#candy").classList.add("paused");
        document.querySelector("#mushroom").removeEventListener("click", scaleDown1);
        document.querySelector("#egg").removeEventListener("click", scaleDown2);
        document.querySelector("#fish").removeEventListener("click", scaleDown3);
        document.querySelector("#poison").removeEventListener("click", scaleDown4);
        document.querySelector("#candy").removeEventListener("click", scaleDown5);

        document.querySelector("#mushroom").offsetHeight;

        // Remove all eventListeners
        document.querySelector("#mushroom").removeEventListener("click", scaleDown1);
        document.querySelector("#egg").removeEventListener("click", scaleDown2);
        document.querySelector("#fish").removeEventListener("click", scaleDown3);
        document.querySelector("#poison").removeEventListener("click", scaleDown4);
        document.querySelector("#candy").removeEventListener("click", scaleDown5);

        document.querySelector("#mushroom").offsetHeight;

        // Show gameOverScreen
        document.querySelector("#level_complete").classList.remove("hidden");
        // Adding a "Restart Game" button

        // changing the game running status
        gameHasEnded = true;
    }
}


function loseLife() {
    console.log("loseLife");

    document.querySelector("#life" + lives).classList.remove("ramen-red");
    document.querySelector("#life" + lives).classList.add("ramen-grey");
    lives--;

    if (lives < 1) {
        gameOver();
    }



}



function getPoint() {
    points++;
    console.log(points);
    document.querySelector("#score_board").textContent = points;


}

function losePoint() {
    points--;
    console.log(points);
    document.querySelector("#score_board").textContent = points;

}




function scaleDown1() {
    console.log("function scaleDown1()");
    document.querySelector("#mushroom").classList.add("scaleDown1");
    document.querySelector("#mushroom_container").classList.add("stop1");
    document.querySelector("#mushroom").addEventListener("animationend", restart1);

}

function restart1() {
    console.log("function restart1()");
    document.querySelector("#mushroom_container").classList.remove("stop1");
    document.querySelector("#mushroom").classList.remove("scaleDown1");
    document.querySelector("#mushroom_container").classList.remove("pos1");
    document.querySelector("#mushroom_container").classList.remove("fall1");
    document.querySelector("#mushroom_container").offsetHeight;
    document.querySelector("#mushroom_container").classList.add("pos1");
    document.querySelector("#mushroom_container").classList.add("fall1");
    document.querySelector("#mushroom").addEventListener("click", scaleDown1);

}




function scaleDown2() {
    console.log("function scaleDown2()");
    document.querySelector("#egg").classList.add("scaleDown2");
    document.querySelector("#egg_container").classList.add("stop2");
    document.querySelector("#egg").addEventListener("animationend", restart2);

}

function restart2() {
    console.log("function restart2()");
    document.querySelector("#egg_container").classList.remove("stop2");
    document.querySelector("#egg").classList.remove("scaleDown2");
    document.querySelector("#egg_container").classList.remove("pos2");
    document.querySelector("#egg_container").classList.remove("fall2");
    document.querySelector("#egg_container").offsetHeight;
    document.querySelector("#egg_container").classList.add("pos2");
    document.querySelector("#egg_container").classList.add("fall2");
    document.querySelector("#egg").addEventListener("click", scaleDown2);

}




function scaleDown3() {
    console.log("function scaleDown3()");
    document.querySelector("#fish").classList.add("scaleDown3");
    document.querySelector("#fish_container").classList.add("stop3");
    document.querySelector("#fish").addEventListener("animationend", restart3);

}

function restart3() {
    console.log("function restart3()");
    document.querySelector("#fish_container").classList.remove("stop3");
    document.querySelector("#fish").classList.remove("scaleDown3");
    document.querySelector("#fish_container").classList.remove("pos3");
    document.querySelector("#fish_container").classList.remove("fall3");
    document.querySelector("#fish_container").offsetHeight;
    document.querySelector("#fish_container").classList.add("pos3");
    document.querySelector("#fish_container").classList.add("fall3");
    document.querySelector("#fish").addEventListener("click", scaleDown3);

}




function scaleDown4() {
    console.log("function scaleDown4()");
    document.querySelector("#poison").classList.add("scaleDown4");
    document.querySelector("#poison_container").classList.add("stop4");
    document.querySelector("#poison").addEventListener("animationend", restart4);

}

function restart4() {
    console.log("function restart4()");
    document.querySelector("#poison_container").classList.remove("stop4");
    document.querySelector("#poison").classList.remove("scaleDown4");
    document.querySelector("#poison_container").classList.remove("pos4");
    document.querySelector("#poison_container").classList.remove("fall4");
    document.querySelector("#poison_container").offsetHeight;
    document.querySelector("#poison_container").classList.add("pos4");
    document.querySelector("#poison_container").classList.add("fall4");
    document.querySelector("#poison").addEventListener("click", scaleDown4);

}



function scaleDown5() {
    console.log("function scaleDown5()");
    document.querySelector("#candy").classList.add("scaleDown5");
    document.querySelector("#candy_container").classList.add("stop5");
    document.querySelector("#candy").addEventListener("animationend", restart5);

}

function restart5() {
    console.log("function restart5()");
    document.querySelector("#candy_container").classList.remove("stop5");
    document.querySelector("#candy").classList.remove("scaleDown5");
    document.querySelector("#candy_container").classList.remove("pos5");
    document.querySelector("#candy_container").classList.remove("fall5");
    document.querySelector("#candy_container").offsetHeight;
    document.querySelector("#candy_container").classList.add("pos5");
    document.querySelector("#candy_container").classList.add("fall5");
    document.querySelector("#candy").addEventListener("click", scaleDown5);

}
