window.addEventListener("load", titleScreen);
let points = 0;
let lives = 3;
let gameIsPaused = false;
let gameHasEnded = false;
let durationOfGame = 30;
let timeLeft;
let happySound = document.querySelector("#happySound");
let sadSound = document.querySelector("#sadSound");
let sadSound2 = document.querySelector("#sadSound2");
let buttonSound = document.querySelector("#buttonSound");
let levelCompleteSound = document.querySelector("#levelCompleteSound");
let gameOverSound = document.querySelector("#gameOverSound");
let bgMusic = document.querySelector("#bgSound");



function titleScreen() {
    console.log("function titleScreen()");
    document.querySelector("#settings_board").classList.add("hidden");
    document.querySelector("#exit").classList.add("hidden");
    document.querySelector("#home").classList.add("hidden");
    document.querySelector("#replay").classList.add("hidden");
    document.querySelector("#homebutton").classList.add("hidden");
    document.querySelector("#tryagain").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#tryagain2").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#sound").classList.add("hidden");

    document.querySelector("#title_screen").classList.remove("hidden");
    document.querySelector("#startbutton").classList.remove("hidden");
    document.querySelector("#howtoplay").classList.remove("hidden");
    document.querySelector("#startbutton").addEventListener("click", playButtonSound);
    document.querySelector("#startbutton").addEventListener("click", restartGame);
    document.querySelector("#howtoplay").addEventListener("click", playButtonSound);
    document.querySelector("#howtoplay").addEventListener("click", showInstructions);


}

function startGame() {
    console.log("function startGame()");

    timeLeft = durationOfGame;

    //    deciSeconds = durationOfGame * 10;


    startTimer();
    console.log(timeLeft);

    playBackgroundMusic();
    bgMusic.addEventListener("ended", playBackgroundMusic);
    document.querySelector("#score_board").textContent = points;
    document.querySelector("#time_left").textContent = timeLeft;


    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#startbutton").classList.add("hidden");
    document.querySelector("#howtoplay").classList.add("hidden");
    document.querySelector("#sound").classList.add("hidden");


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

    document.querySelector("#poison1_container").classList.add("pos6");
    document.querySelector("#poison1_container").classList.add("fall6");
    document.querySelector("#poison1").addEventListener("click", scaleDown6);

    document.querySelector("#poison1_container").addEventListener("animationiteration", loseLife);

    document.querySelector("#candy1_container").classList.add("pos7");
    document.querySelector("#candy1_container").classList.add("fall7");

    document.querySelector("#candy1").addEventListener("click", scaleDown7);
    document.querySelector("#candy1_container").addEventListener("animationiteration", loseLife);

    document.querySelector("#poison").addEventListener("click", getPoint);
    document.querySelector("#candy").addEventListener("click", getPoint);
    document.querySelector("#poison1").addEventListener("click", getPoint);
    document.querySelector("#candy1").addEventListener("click", getPoint);

    document.querySelector("#mushroom").addEventListener("click", losePoint);
    document.querySelector("#egg").addEventListener("click", losePoint);
    document.querySelector("#fish").addEventListener("click", losePoint);
    document.querySelector("#settings").addEventListener("click", playButtonSound);
    document.querySelector("#settings").addEventListener("click", showSettings);




}

function restartGame() {
    gameIsPaused = false;
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#settings_board").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    document.querySelector("#tryagain").classList.add("hidden");
    document.querySelector("#tryagain2").classList.add("hidden");
    document.querySelector("#home").classList.add("hidden");
    document.querySelector("#replay").classList.add("hidden");
    document.querySelector("#exit").classList.add("hidden");
    document.querySelector("#tryagain").classList.add("hidden");
    document.querySelector("#homebutton").classList.add("hidden");
    document.querySelector("#sound").classList.add("hidden");

    document.querySelector("#mushroom_container").classList.value = "";
    document.querySelector("#egg_container").classList.value = "";
    document.querySelector("#fish_container").classList.value = "";
    document.querySelector("#poison_container").classList.value = "";
    document.querySelector("#candy_container").classList.value = "";
    document.querySelector("#poison1_container").classList.value = "";
    document.querySelector("#candy1_container").classList.value = "";
    document.querySelector("#mushroom").classList.value = "";
    document.querySelector("#egg").classList.value = "";
    document.querySelector("#fish").classList.value = "";
    document.querySelector("#poison").classList.value = "";
    document.querySelector("#candy").classList.value = "";
    document.querySelector("#poison1").classList.value = "";

    stopSounds();
    playBackgroundMusic();

    lives = 3;
    points = 0;

    document.querySelector("#score_board").textContent = points;
    document.querySelector("#time_left").textContent = timeLeft;


    document.querySelector("#life1").classList.remove("ramen-grey");
    document.querySelector("#life2").classList.remove("ramen-grey");
    document.querySelector("#life3").classList.remove("ramen-grey");
    document.querySelector("#life1").classList.add("ramen-red");
    document.querySelector("#life2").classList.add("ramen-red");
    document.querySelector("#life3").classList.add("ramen-red");


    document.querySelector("#mushroom_container").classList.remove("paused");
    document.querySelector("#egg_container").classList.remove("paused");
    document.querySelector("#fish_container").classList.remove("paused");
    document.querySelector("#poison_container").classList.remove("paused");
    document.querySelector("#poison1_container").classList.remove("paused");
    document.querySelector("#candy_container").classList.remove("paused");
    document.querySelector("#candy1_container").classList.remove("paused");
    document.querySelector("#mushroom").classList.remove("paused");
    document.querySelector("#egg").classList.remove("paused");

    document.querySelector("#fish").classList.remove("paused");
    document.querySelector("#poison").classList.remove("paused");
    document.querySelector("#poison1").classList.remove("paused");


    document.querySelector("#candy").classList.remove("paused");
    document.querySelector("#candy1").classList.remove("paused");
    //
    //    setTimeout(function () {
    //            startGame();
    //        }
    //        1);
    gameHasEnded = false;
    setTimeout(function () {
        startGame()
    }, 1);

}

function showInstructions() {
    console.log("function showInstructions()");
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#exit1").classList.remove("hidden");
    document.querySelector("#exit1").addEventListener("click", playButtonSound);
    document.querySelector("#exit1").addEventListener("click", hideInstructions);


}

function hideInstructions() {
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#exit1").classList.add("hidden");


}

function showSettings() {
    console.log("function showSettings()");
    pauseGame();
    document.querySelector("#settings_board").classList.remove("hidden");

    document.querySelector("#exit").classList.remove("hidden");
    document.querySelector("#home").classList.remove("hidden");
    document.querySelector("#home").addEventListener("click", playButtonSound);
    document.querySelector("#home").addEventListener("click", titleScreen);

    document.querySelector("#replay").classList.remove("hidden");
    document.querySelector("#sound").classList.remove("hidden");

    document.querySelector("#sound").addEventListener("click", muteSound);
    document.querySelector("#replay").addEventListener("click", playButtonSound);
    document.querySelector("#replay").addEventListener("click", restartGame);
    document.querySelector("#exit").addEventListener("click", playButtonSound);
    document.querySelector("#exit").addEventListener("click", hideSettings);



}

function hideSettings() {
    pauseGame();
    document.querySelector("#settings_board").classList.add("hidden");
    document.querySelector("#exit").classList.add("hidden");
    document.querySelector("#home").classList.add("hidden");
    document.querySelector("#replay").classList.add("hidden");
    document.querySelector("#sound").classList.add("hidden");

}



function pauseGame() {
    if (gameIsPaused == false) {
        console.log("Game is set to PAUSED");


        document.querySelector("#mushroom_container").classList.add("paused");
        document.querySelector("#egg_container").classList.add("paused");
        document.querySelector("#fish_container").classList.add("paused");
        document.querySelector("#poison_container").classList.add("paused");

        document.querySelector("#candy_container").classList.add("paused");
        document.querySelector("#poison1_container").classList.add("paused");
        document.querySelector("#candy1_container").classList.add("paused");


        document.querySelector("#mushroom").classList.add("paused");
        document.querySelector("#egg").classList.add("paused");
        document.querySelector("#fish").classList.add("paused");
        document.querySelector("#poison").classList.add("paused");

        document.querySelector("#candy").classList.add("paused");
        document.querySelector("#poison1").classList.add("paused");
        document.querySelector("#candy1").classList.add("paused");


        document.querySelector("#mushroom").removeEventListener("click", scaleDown1);
        document.querySelector("#egg").removeEventListener("click", scaleDown2);
        document.querySelector("#fish").removeEventListener("click", scaleDown3);
        document.querySelector("#poison").removeEventListener("click", scaleDown4);
        document.querySelector("#candy").removeEventListener("click", scaleDown5);
        document.querySelector("#poison1").removeEventListener("click", scaleDown6);
        document.querySelector("#candy1").removeEventListener("click", scaleDown7);

        document.querySelector("#mushroom").offsetHeight;



        gameIsPaused = true;
    } else {
        console.log("Game is set to NOT Paused");


        document.querySelector("#mushroom_container").classList.remove("paused");
        document.querySelector("#egg_container").classList.remove("paused");
        document.querySelector("#fish_container").classList.remove("paused");
        document.querySelector("#poison_container").classList.remove("paused");


        document.querySelector("#candy_container").classList.remove("paused");
        document.querySelector("#poison1_container").classList.remove("paused");
        document.querySelector("#candy1_container").classList.remove("paused");

        document.querySelector("#mushroom").classList.remove("paused");
        document.querySelector("#egg").classList.remove("paused");
        document.querySelector("#fish").classList.remove("paused");
        document.querySelector("#poison").classList.remove("paused");

        document.querySelector("#candy").classList.remove("paused");
        document.querySelector("#poison1").classList.remove("paused");
        document.querySelector("#candy1").classList.remove("paused");


        document.querySelector("#mushroom").addEventListener("click", scaleDown1);
        document.querySelector("#egg").addEventListener("click", scaleDown2);
        document.querySelector("#fish").addEventListener("click", scaleDown3);
        document.querySelector("#poison").addEventListener("click", scaleDown4);
        document.querySelector("#candy").addEventListener("click", scaleDown5);
        document.querySelector("#poison1").addEventListener("click", scaleDown6);
        document.querySelector("#candy1").addEventListener("click", scaleDown7);
        gameIsPaused = false;

        startTimer();
    }
}

function gameOver() {
    console.log("function gameOver()");

    stopSounds();
    gameOverSound.play();
    if (gameHasEnded == false) {

        document.querySelector("#settings").removeEventListener("click", showSettings);
        document.querySelector("#score_left1").textContent = points;

        document.querySelector("#mushroom_container").classList.value = "pos1";
        document.querySelector("#egg_container").classList.value = "pos2";
        document.querySelector("#fish_container").classList.value = "pos3";
        document.querySelector("#poison_container").classList.value = "pos4";
        document.querySelector("#candy_container").classList.value = "pos5";
        document.querySelector("#poison1_container").classList.value = "pos6";
        document.querySelector("#candy1_container").classList.value = "pos7";
        document.querySelector("#mushroom").classList.value = "";
        document.querySelector("#egg").classList.value = "";
        document.querySelector("#fish").classList.value = "";
        document.querySelector("#poison").classList.value = "";
        document.querySelector("#candy").classList.value = "";
        document.querySelector("#poison1").classList.value = "";

        document.querySelector("#mushroom").offsetHeight;

        document.querySelector("#game_over").classList.remove("hidden");
        document.querySelector("#tryagain").classList.remove("hidden");
        document.querySelector("#homebutton").classList.remove("hidden");
        document.querySelector("#homebutton").addEventListener("click", playButtonSound);
        document.querySelector("#homebutton").addEventListener("click", titleScreen);
        document.querySelector("#tryagain").addEventListener("click", playButtonSound);
        document.querySelector("#tryagain").addEventListener("click", restartGame);


        gameHasEnded = true;
    }
}

function levelComplete() {
    console.log("function levelComplete()");

    stopSounds();
    levelCompleteSound.play();
    if (gameHasEnded == false) {
        document.querySelector("#mushroom_container").classList.add("paused");
        document.querySelector("#egg_container").classList.add("paused");
        document.querySelector("#fish_container").classList.add("paused");
        document.querySelector("#poison_container").classList.add("paused");

        document.querySelector("#candy_container").classList.add("paused");
        document.querySelector("#poison1_container").classList.add("paused");
        document.querySelector("#candy1_container").classList.add("paused");

        document.querySelector("#mushroom").classList.add("paused");
        document.querySelector("#egg").classList.add("paused");
        document.querySelector("#fish").classList.add("paused");
        document.querySelector("#poison").classList.add("paused");
        document.querySelector("#candy").classList.add("paused");
        document.querySelector("#poison1").classList.add("paused");
        document.querySelector("#candy1").classList.add("paused");

        document.querySelector("#mushroom").removeEventListener("click", scaleDown1);
        document.querySelector("#egg").removeEventListener("click", scaleDown2);
        document.querySelector("#fish").removeEventListener("click", scaleDown3);
        document.querySelector("#poison").removeEventListener("click", scaleDown4);
        document.querySelector("#candy").removeEventListener("click", scaleDown5);
        document.querySelector("#poison1").removeEventListener("click", scaleDown6);
        document.querySelector("#candy1").removeEventListener("click", scaleDown7);

        document.querySelector("#mushroom").offsetHeight;

        document.querySelector("#tryagain").classList.add("hidden");
        document.querySelector("#homebutton").classList.add("hidden");
        document.querySelector("#level_complete").classList.remove("hidden");

        document.querySelector("#tryagain2").classList.remove("hidden");

        document.querySelector("#score_left2").textContent = points;
        document.querySelector("#tryagain2").addEventListener("click", playButtonSound);
        document.querySelector("#tryagain2").addEventListener("click", restartGame);

        gameHasEnded = true;
    }
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

    if (points > 29) {
        levelComplete();
    }

}

function stopSounds() {
    happySound.pause();
    sadSound.pause();
    sadSound2.pause();
    buttonSound.pause();
    bgMusic.pause();
    bgMusic.currentTime = 0;
    bgMusic.removeEventListener("ended", playBackgroundMusic);
    levelCompleteSound.pause();
    levelCompleteSound.removeEventListener("ended", playLevelCompleteSound);
    gameOverSound.pause();
    gameOverSound.removeEventListener("ended", playGameOverSound);

}

function playBackgroundMusic() {
    console.log("function playBackgroundMusic()");
    bgMusic.play();
}

function playLevelCompleteSound() {
    console.log("function playLevelCompleteSound()");
    levelCompleteSound.play();
}

function playGameOverSound() {
    console.log("function playGameOverSound()");
    gameOverSound.play();
}

function playButtonSound() {
    console.log("function playButtonSound ()");

    buttonSound.play();
}

function loseLife() {
    console.log("loseLife");

    sadSound.currentTime = 0;
    sadSound.play();
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
    happySound.currentTime = 0;
    happySound.play();
}

function losePoint() {
    points--;
    console.log(points);
    document.querySelector("#score_board").textContent = points;
    sadSound2.currentTime = 0;
    sadSound2.play();


}


function muteSound() {
    console.log("function muteSound()");
    if (bgMusic.muted == false) {
        bgMusic.muted = true;
        gameOverSound.muted = true;
        sadSound.muted = true;
        sadSound2.muted = true;
        happySound.muted = true;
        buttonSound.muted = true;
        levelCompleteSound.muted = true;
        document.querySelector("#sound").classList.remove("sound-on");
        document.querySelector("#sound").classList.add("sound-off");

    } else {
        bgMusic.muted = false;
        gameOverSound.muted = false;
        levelCompleteSound.muted = false;
        sadSound.muted = false;
        sadSound2.muted = false;
        buttonSound.muted = false;
        happySound.muted = false;
        document.querySelector("#sound").classList.remove("sound-off");
        document.querySelector("#sound").classList.add("sound-on");
    }

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


function scaleDown6() {
    console.log("function scaleDown4()");
    document.querySelector("#poison1").classList.add("scaleDown6");
    document.querySelector("#poison1_container").classList.add("stop6");
    document.querySelector("#poison1").addEventListener("animationend", restart6);

}

function restart6() {
    console.log("function restart6()");
    document.querySelector("#poison1_container").classList.remove("stop6");
    document.querySelector("#poison1").classList.remove("scaleDown6");
    document.querySelector("#poison1_container").classList.remove("pos6");
    document.querySelector("#poison1_container").classList.remove("fall6");
    document.querySelector("#poison1_container").offsetHeight;
    document.querySelector("#poison1_container").classList.add("pos6");
    document.querySelector("#poison1_container").classList.add("fall6");
    document.querySelector("#poison1").addEventListener("click", scaleDown6);

}



function scaleDown7() {
    console.log("function scaleDown7()");
    document.querySelector("#candy1").classList.add("scaleDown7");
    document.querySelector("#candy1_container").classList.add("stop7");
    document.querySelector("#candy1").addEventListener("animationend", restart7);

}

function restart7() {
    console.log("function restart7()");
    document.querySelector("#candy1_container").classList.remove("stop7");
    document.querySelector("#candy1").classList.remove("scaleDown7");
    document.querySelector("#candy1_container").classList.remove("pos7");
    document.querySelector("#candy1_container").classList.remove("fall7");
    document.querySelector("#candy1_container").offsetHeight;
    document.querySelector("#candy1_container").classList.add("pos7");
    document.querySelector("#candy1_container").classList.add("fall7");
    document.querySelector("#candy1").addEventListener("click", scaleDown7);

}
