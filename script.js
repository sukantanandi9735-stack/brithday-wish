const startScreen = document.getElementById("startScreen");
const photoScreen = document.getElementById("photoScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

const openBtn = document.getElementById("openBtn");
const birthdayBtn = document.getElementById("birthdayBtn");

const music = document.getElementById("music");


openBtn.addEventListener("click", function () {

    startScreen.classList.add("hidden");
    photoScreen.classList.remove("hidden");

    music.play().catch(function () {
        console.log("Music could not start automatically.");
    });

});


birthdayBtn.addEventListener("click", function () {

    photoScreen.classList.add("hidden");
    birthdayScreen.classList.remove("hidden");

});