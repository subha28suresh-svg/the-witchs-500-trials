const titleScreen = document.getElementById("title-screen");
const comicScreen = document.getElementById("comic-screen");

const startButton = document.getElementById("start-button");
const comicNextButton = document.getElementById("comic-next-button");

const comicImage = document.getElementById("comic-image");

let currentPage = 1;


/* ================================
   START THE STORY
   ================================ */

startButton.addEventListener("click", () => {
    titleScreen.classList.remove("active");
    comicScreen.classList.add("active");
});


/* ================================
   COMIC PAGE NAVIGATION
   ================================ */

comicNextButton.addEventListener("click", () => {

    if (currentPage === 1) {

        currentPage = 2;

        comicImage.src = "assets/comics/intro-page-02.png";

    } else if (currentPage === 2) {

        currentPage = 3;

        comicImage.src = "assets/comics/intro-page-03.png";

    } else {

        alert("WORLD MAP COMING NEXT");

    }

});