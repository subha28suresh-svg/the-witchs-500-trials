const titleScreen = document.getElementById("title-screen");
const comicScreen = document.getElementById("comic-screen");

const startButton = document.getElementById("start-button");
const comicNextButton = document.getElementById("comic-next-button");


/* =================================
   START THE STORY
   ================================= */

startButton.addEventListener("click", () => {
    titleScreen.classList.remove("active");
    comicScreen.classList.add("active");
});


/* =================================
   COMIC NEXT BUTTON
   ================================= */

comicNextButton.addEventListener("click", () => {
    alert("Page 2 will continue the King's story.");
});