/* =========================================
   THE WITCH'S 500 TRIALS
   CORE GAME ENGINE
   ========================================= */

const TOTAL_LEVELS = 500;
const LEVELS_PER_REGION = 25;
const TOTAL_REGIONS = 20;


/* =========================================
   REGION DATA
   ========================================= */

const REGIONS = [
    { id: 1, name: "Kingdom of Aurelia", start: 1, end: 25 },
    { id: 2, name: "Scorched Desert", start: 26, end: 50 },
    { id: 3, name: "Enchanted Forest", start: 51, end: 75 },
    { id: 4, name: "Frozen Peaks", start: 76, end: 100 },
    { id: 5, name: "Lost Ruins", start: 101, end: 125 },
    { id: 6, name: "Firelands", start: 126, end: 150 },
    { id: 7, name: "Shadow Realm", start: 151, end: 175 },
    { id: 8, name: "Dragonlands", start: 176, end: 200 },
    { id: 9, name: "Sky Kingdom", start: 201, end: 225 },
    { id: 10, name: "Sunken Kingdom", start: 226, end: 250 },
    { id: 11, name: "Mystic Marshes", start: 251, end: 275 },
    { id: 12, name: "Warrior's Wastes", start: 276, end: 300 },
    { id: 13, name: "Haunted Catacombs", start: 301, end: 325 },
    { id: 14, name: "Crystal Caverns", start: 326, end: 350 },
    { id: 15, name: "Astral Realm", start: 351, end: 375 },
    { id: 16, name: "Time-Lost Kingdom", start: 376, end: 400 },
    { id: 17, name: "Realm of Illusions", start: 401, end: 425 },
    { id: 18, name: "Forbidden Citadel", start: 426, end: 450 },
    { id: 19, name: "Witch's Domain", start: 451, end: 475 },
    { id: 20, name: "Witch's Castle", start: 476, end: 500 }
];

/* =================================
   STORY REVEALS
   ================================= */

const STORY_REVEALS = {

    25: {
        title:
            "THE FIRST TRIAL COMPLETE",

        text:
            "The King has survived the first great trial. " +
            "But the Witch's path is only beginning...",

        image:
            "assets/comics/story-region-01.png"
    },

    50: {
        title:
            "THE SECOND TRIAL COMPLETE",

        text:
            "A new mystery awaits beyond the next realm.",

        image:
            "assets/comics/story-region-02.png"
    }

};

/* =========================================
   PROGRESS
   ========================================= */

let currentLevel =
    Number(localStorage.getItem("witchCurrentLevel")) || 1;
let activeLevel = currentLevel;

let completedLevels =
    JSON.parse(
        localStorage.getItem("witchCompletedLevels")
    ) || [];


/* =========================================
   SCREENS
   ========================================= */

const titleScreen =
    document.getElementById("title-screen");

const comicScreen =
    document.getElementById("comic-screen");

const levelMapScreen =
    document.getElementById("level-map-screen");

const riddleScreen =
    document.getElementById("riddle-screen");


/* =========================================
   TITLE
   ========================================= */

const startButton =
    document.getElementById("start-button");


/* =========================================
   COMIC
   ========================================= */

const comicNextButton =
    document.getElementById("comic-next-button");

const comicImage =
    document.getElementById("comic-image");

let currentComicPage = 1;


/* =========================================
   LEVEL MAP
   ========================================= */

const regionNumber =
    document.getElementById("region-number");

const regionName =
    document.getElementById("region-name");

const levelPath =
    document.getElementById("level-path");

const levelScroll =
    document.getElementById("level-scroll");

const currentLevelButton =
    document.getElementById("current-level-button");


/* =========================================
   RIDDLE
   ========================================= */

const riddleLevel =
    document.getElementById("riddle-level");

const questionText =
    document.getElementById("question-text");

const answerInput =
    document.getElementById("answer-input");

const submitAnswer =
    document.getElementById("submit-answer");

const resultMessage =
    document.getElementById("result-message");

const nextLevelButton =
    document.getElementById("next-level-button");

const backToMapButton =
    document.getElementById("back-to-map-button");

const witchMessage =
    document.getElementById("witch-message");

/* =================================
   STORY REVEAL ELEMENTS
   ================================= */

const storyScreen =
    document.getElementById("story-screen");

const storyImage =
    document.getElementById("story-image");

const storyTitle =
    document.getElementById("story-title");

const storyText =
    document.getElementById("story-text");

const storyContinueButton =
    document.getElementById(
        "story-continue-button"
    );


/* =========================================
   HELPERS
   ========================================= */

function getRegionForLevel(level) {

    return Math.ceil(
        level / LEVELS_PER_REGION
    );

}


function getRegionData(level) {

    return REGIONS[
        getRegionForLevel(level) - 1
    ];

}


function isBossLevel(level) {

    return level % LEVELS_PER_REGION === 0;

}


function isLevelCompleted(level) {

    return completedLevels.includes(level);

}


function saveProgress() {

    localStorage.setItem(
        "witchCurrentLevel",
        currentLevel
    );

    localStorage.setItem(
        "witchCompletedLevels",
        JSON.stringify(completedLevels)
    );

}


/* =========================================
   SCREEN MANAGEMENT
   ========================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach((element) => {

            element.classList.remove("active");

        });

    screen.classList.add("active");

}


/* =========================================
   START
   ========================================= */

startButton.addEventListener(
    "click",
    () => {

        showScreen(comicScreen);

    }
);


/* =========================================
   COMIC NAVIGATION
   ========================================= */

comicNextButton.addEventListener(
    "click",
    () => {

        if (currentComicPage === 1) {

            currentComicPage = 2;

            comicImage.src =
                "assets/comics/intro-page-02.png";

            return;
        }

        if (currentComicPage === 2) {

            currentComicPage = 3;

            comicImage.src =
                "assets/comics/intro-page-03.png";

            return;
        }

        openLevelMap();

    }
);

/* =================================
   STORY CONTINUE
   ================================= */

storyContinueButton.addEventListener("click", () => {

    /*
     * The boss has been defeated.
     * Move to the next level.
     */
    if (activeLevel < 500) {

        currentLevel =
            activeLevel + 1;

        saveProgress();
    }

    /*
     * Close the story screen.
     */
    storyScreen.classList.remove("active");

    /*
     * Return to the level map.
     */
    openLevelMap();

});

/* =========================================
   OPEN LEVEL MAP
   ========================================= */

function openLevelMap() {

    showScreen(levelMapScreen);

    renderCurrentRegion();

}


/* =========================================
   RENDER CURRENT REGION
   ========================================= */

function renderCurrentRegion() {

    const region =
        getRegionData(currentLevel);

    regionNumber.textContent =
        `REGION ${region.id}`;

    regionName.textContent =
        region.name;

    levelPath.innerHTML = "";


    /*
     * Create all 25 levels.
     */
    for (
        let level = region.start;
        level <= region.end;
        level++
    ) {

        createLevelNode(level);

    }


    /*
     * IMPORTANT:
     *
     * Level 1 is at the BOTTOM.
     * Level 25 is at the TOP.
     *
     * Start the player at the current
     * level rather than at the top.
     */
    requestAnimationFrame(() => {

        scrollToCurrentLevel(false);

        updateCurrentLevelShortcut();

    });

}


/* =========================================
   CREATE LEVEL NODE
   ========================================= */

function createLevelNode(level) {

    const node =
        document.createElement("button");

    node.className =
        "level-node";


    const region =
        getRegionData(currentLevel);

    const localIndex =
        level - region.start;


    const totalNodes =
        LEVELS_PER_REGION;


    /*
     * BOTTOM → TOP
     *
     * Level 1 = bottom
     * Level 25 = top
     */
    const rowHeight = 64;

    const reversedIndex =
        totalNodes - 1 - localIndex;

    const top =
        reversedIndex * rowHeight + 40;


    /*
     * Slight left/right winding.
     */
    let horizontalOffset = 0;

    if (localIndex % 4 === 1) {

        horizontalOffset = -72;

    } else if (localIndex % 4 === 3) {

        horizontalOffset = 72;

    }


    node.style.top =
        `${top}px`;

    node.style.marginLeft =
        `${horizontalOffset}px`;


    const completed =
        isLevelCompleted(level);

    const unlocked =
        level <= currentLevel;


    if (completed) {

        node.classList.add("completed");

    }

    if (!unlocked) {

        node.classList.add("locked");

    }

    if (level === currentLevel) {

        node.classList.add("current");

    }

    if (isBossLevel(level)) {

        node.classList.add("boss");

    }


    node.appendChild(
        document.createTextNode(level)
    );


    /*
     * Completed check.
     */
    if (completed) {

        const tick =
            document.createElement("span");

        tick.className =
            "level-check";

        tick.textContent =
            "✓";

        node.appendChild(tick);

    }


    /*
     * Boss marker.
     */
    if (isBossLevel(level)) {

        const bossSymbol =
            document.createElement("span");

        bossSymbol.className =
            "boss-symbol";

        bossSymbol.textContent =
            "♛";

        node.appendChild(bossSymbol);

    }


    /*
     * King is ALWAYS at the most recent
     * unsolved level.
     */
    if (level === currentLevel) {

        const king =
            document.createElement("span");

        king.className =
            "king-marker";

        king.textContent =
            "👑";

        node.appendChild(king);

    }


    /*
     * Only unlocked levels respond.
     */
    if (unlocked) {

        node.addEventListener(
            "click",
            () => {

                openRiddle(level);

            }
        );

    }


    levelPath.appendChild(node);

}


/* =========================================
   CURRENT LEVEL SHORTCUT
   ========================================= */

levelScroll.addEventListener(
    "scroll",
    updateCurrentLevelShortcut
);


function updateCurrentLevelShortcut() {

    const currentNode =
        levelPath.querySelector(
            ".level-node.current"
        );

    if (!currentNode) {

        return;

    }


    const nodeRect =
        currentNode.getBoundingClientRect();

    const scrollRect =
        levelScroll.getBoundingClientRect();


    const visible =
        nodeRect.top >= scrollRect.top + 90 &&
        nodeRect.bottom <= scrollRect.bottom - 20;


    if (visible) {

        currentLevelButton
            .classList
            .remove("visible");

    } else {

        currentLevelButton
            .classList
            .add("visible");

    }

}


/* =========================================
   SCROLL TO CURRENT LEVEL
   ========================================= */

function scrollToCurrentLevel(
    smooth = true
) {

    const currentNode =
        levelPath.querySelector(
            ".level-node.current"
        );

    if (!currentNode) {

        return;

    }


    /*
     * Put the current node near the
     * lower part of the visible area.
     *
     * This is important because progression
     * is bottom → top.
     */
    const target =
        currentNode.offsetTop -
        levelScroll.clientHeight +
        currentNode.offsetHeight +
        70;


    levelScroll.scrollTo({

        top: Math.max(0, target),

        behavior:
            smooth ? "smooth" : "auto"

    });

}


currentLevelButton.addEventListener(
    "click",
    () => {

        scrollToCurrentLevel(true);

    }
);


/* =========================================
   OPEN RIDDLE
   ========================================= */

function openRiddle(level) {

    if (level > currentLevel) {
        return;
    }

    activeLevel = level;

    showScreen(riddleScreen);

    riddleLevel.textContent =
        `LEVEL ${level}`;

    const riddle =
        QUESTIONS[activeLevel];

    if (!riddle) {

        questionText.textContent =
            "This trial is being prepared...";

    } else {

        questionText.textContent =
            riddle.question;

    }

    answerInput.value = "";

    answerInput.disabled = false;

    submitAnswer.disabled = false;

    resultMessage.textContent = "";

    nextLevelButton.classList.add(
        "hidden"
    );

    witchMessage.textContent =
        "The Witch awaits your answer...";

    setTimeout(() => {

        answerInput.focus();

    }, 100);
}


/* =================================
   ANSWER BUTTON
   ================================= */

submitAnswer.addEventListener(
    "click",
    () => {

        checkAnswer();

    }
);


/* =========================================
   ENTER KEY
   ========================================= */

answerInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            event.preventDefault();

            checkAnswer();

        }

    }
);


/* =========================================
   CHECK ANSWER
   ========================================= */

function checkAnswer() {

    const riddle =
        QUESTIONS[activeLevel];

    if (!riddle) {

        resultMessage.textContent =
            "This trial is not ready yet.";

        return;

    }

    const playerAnswer =
        answerInput.value
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase();

    if (!playerAnswer) {

        resultMessage.textContent =
            "The Witch is waiting for an answer...";

        answerInput.focus();

        return;

    }

    const correctAnswer =
        riddle.answer
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase();

    if (
        playerAnswer === correctAnswer
    ) {

        handleCorrectAnswer();

    } else {

        handleWrongAnswer();

    }
}


/* =========================================
   CORRECT ANSWER
   ========================================= */

function handleCorrectAnswer() {

    markLevelCompleted(activeLevel);

    resultMessage.textContent =
        "TRIAL CLEARED!";

    nextLevelButton.classList.remove("hidden");


    /*
     * Boss levels pause progression.
     *
     * Instead of immediately moving to the
     * next level, the story reveal will open.
     */
    if (isBossLevel(activeLevel)) {

        showStoryReveal(activeLevel);

        return;
    }


    /*
     * Normal level progression.
     */
    if (activeLevel < 500) {

        currentLevel =
            activeLevel + 1;

        saveProgress();

    }

}

/* =================================
   STORY REVEAL
   ================================= */

function showStoryReveal(level) {

    const story =
        STORY_REVEALS[level];

    if (!story) {

        console.warn(
            "No story reveal found for level:",
            level
        );

        return;
    }

    storyImage.src =
        story.image;

    storyTitle.textContent =
        story.title;

    storyText.textContent =
        story.text;

    riddleScreen.classList.remove("active");

    storyScreen.classList.add("active");

}

/* =========================================
   WRONG ANSWER
   ========================================= */

function handleWrongAnswer() {

    witchMessage.textContent =
        "Oh dear... that wasn't quite clever enough.";

    resultMessage.textContent =
        "Not quite. Try again.";

    resultMessage.style.color =
        "#e9a3a3";


    /*
     * Keep keyboard/input active.
     */
    answerInput.focus();

    answerInput.select();

}


/* =========================================
   CONTINUE
   ========================================= */

nextLevelButton.addEventListener(
    "click",
    () => {

        showScreen(levelMapScreen);

        renderCurrentRegion();

    }
);


/* =========================================
   BACK TO MAP
   ========================================= */

backToMapButton.addEventListener(
    "click",
    () => {

        showScreen(levelMapScreen);

        renderCurrentRegion();

    }
);


/* =========================================
   INITIAL SAVE
   ========================================= */

saveProgress();