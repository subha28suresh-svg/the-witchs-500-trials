/* =========================================
   THE WITCH'S 500 TRIALS
   CORE GAME ENGINE (SINGLE-SCREEN GRID MAP)
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
        title: "THE FIRST TRIAL COMPLETE",
        text: "The King has survived the first great trial. But the Witch's path is only beginning...",
        image: "assets/comics/story-region-01.png"
    },
    50: {
        title: "THE SECOND TRIAL COMPLETE",
        text: "A new mystery awaits beyond the next realm.",
        image: "assets/comics/story-region-02.png"
    }
};

/* =========================================
   PROGRESS
   ========================================= */

let currentLevel = Number(localStorage.getItem("witchCurrentLevel")) || 1;
let activeLevel = currentLevel;

let completedLevels = JSON.parse(
    localStorage.getItem("witchCompletedLevels")
) || [];

// Tracks which region the user is currently looking at on the map screen
let viewedRegionId = getRegionForLevel(currentLevel);


/* =========================================
   SCREENS
   ========================================= */

const titleScreen = document.getElementById("title-screen");
const comicScreen = document.getElementById("comic-screen");
const levelMapScreen = document.getElementById("level-map-screen");
const riddleScreen = document.getElementById("riddle-screen");
const storyScreen = document.getElementById("story-screen");


/* =========================================
   DOM ELEMENTS
   ========================================= */

const startButton = document.getElementById("start-button");

const comicNextButton = document.getElementById("comic-next-button");
const comicImage = document.getElementById("comic-image");
let currentComicPage = 1;

const regionNumber = document.getElementById("region-number");
const regionName = document.getElementById("region-name");
const levelPath = document.getElementById("level-path");
const levelScroll = document.getElementById("level-scroll");
const currentLevelButton = document.getElementById("current-level-button");
const prevRegionButton = document.getElementById("prev-region-button");
const nextRegionButton = document.getElementById("next-region-button");

const riddleLevel = document.getElementById("riddle-level");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitAnswer = document.getElementById("submit-answer");
const resultMessage = document.getElementById("result-message");
const nextLevelButton = document.getElementById("next-level-button");
const backToMapButton = document.getElementById("back-to-map-button");
const witchMessage = document.getElementById("witch-message");

const storyImage = document.getElementById("story-image");
const storyTitle = document.getElementById("story-title");
const storyText = document.getElementById("story-text");
const storyContinueButton = document.getElementById("story-continue-button");


/* =========================================
   HELPERS
   ========================================= */

function getRegionForLevel(level) {
    return Math.ceil(level / LEVELS_PER_REGION);
}

function getRegionData(level) {
    return REGIONS[getRegionForLevel(level) - 1];
}

function isBossLevel(level) {
    return level % LEVELS_PER_REGION === 0;
}

function isLevelCompleted(level) {
    return completedLevels.includes(level);
}

function markLevelCompleted(level) {
    if (!completedLevels.includes(level)) {
        completedLevels.push(level);
        saveProgress();
    }
}

function saveProgress() {
    localStorage.setItem("witchCurrentLevel", currentLevel);
    localStorage.setItem("witchCompletedLevels", JSON.stringify(completedLevels));
}


/* =========================================
   SCREEN MANAGEMENT
   ========================================= */

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach((element) => {
        element.classList.remove("active");
    });
    screen.classList.add("active");
}


/* =========================================
   EVENT LISTENERS: START & COMIC
   ========================================= */

startButton.addEventListener("click", () => {
    showScreen(comicScreen);
});

comicNextButton.addEventListener("click", () => {
    if (currentComicPage === 1) {
        currentComicPage = 2;
        comicImage.src = "assets/comics/intro-page-02.png";
        return;
    }
    if (currentComicPage === 2) {
        currentComicPage = 3;
        comicImage.src = "assets/comics/intro-page-03.png";
        return;
    }
    openLevelMap();
});

storyContinueButton.addEventListener("click", () => {
    if (activeLevel < 500) {
        currentLevel = activeLevel + 1;
        saveProgress();
    }
    storyScreen.classList.remove("active");
    openLevelMap();
});


/* =========================================
   OPEN LEVEL MAP
   ========================================= */

function openLevelMap() {
    // Always snap back to the user's current progress region when opening the map
    viewedRegionId = getRegionForLevel(currentLevel);
    showScreen(levelMapScreen);
    renderCurrentRegion();
}


/* =========================================
   RENDER CURRENT REGION (SINGLE-SCREEN GRID MAP)
   ========================================= */

function renderCurrentRegion() {
    // Use viewedRegionId to support browsing different regions via arrows
    const region = REGIONS[viewedRegionId - 1];

    regionNumber.textContent = `REGION ${region.id}`;
    regionName.textContent = region.name;

    // Control visibility of previous/next region arrows
    const maxUnlockedRegion = getRegionForLevel(currentLevel);
    if (prevRegionButton) {
        prevRegionButton.style.visibility = viewedRegionId > 1 ? "visible" : "hidden";
    }
    if (nextRegionButton) {
        nextRegionButton.style.visibility = viewedRegionId < maxUnlockedRegion ? "visible" : "hidden";
    }

    levelPath.innerHTML = "";

    // 5x5 Grid Coordinate Mapping: Level 1 at top-left (row 1, col 1), ending at Level 25 at bottom-right (row 5, col 5)
    const gridCoords = [
        {col: 1, row: 1}, {col: 2, row: 1}, {col: 3, row: 1}, {col: 4, row: 1}, {col: 5, row: 1}, // Level 1-5 (Top row, left to right)
        {col: 5, row: 2}, {col: 4, row: 2}, {col: 3, row: 2}, {col: 2, row: 2}, {col: 1, row: 2}, // Level 6-10 (Row 2, right to left)
        {col: 1, row: 3}, {col: 2, row: 3}, {col: 3, row: 3}, {col: 4, row: 3}, {col: 5, row: 3}, // Level 11-15 (Row 3, left to right)
        {col: 5, row: 4}, {col: 4, row: 4}, {col: 3, row: 4}, {col: 2, row: 4}, {col: 1, row: 4}, // Level 16-20 (Row 4, right to left)
        {col: 1, row: 5}, {col: 2, row: 5}, {col: 3, row: 5}, {col: 4, row: 5}, {col: 5, row: 5}  // Level 21-25 (Bottom row, left to right, Boss at 25 bottom-right)
    ];

    const nodeCoords = gridCoords.map((pos) => {
        let leftPercent = 12 + (pos.col - 1) * 19;
        let topPercent = 12 + (pos.row - 1) * 19;
        return { left: leftPercent, top: topPercent };
    });

    // Draw glowing SVG connecting lines behind nodes
    let svgHTML = `<svg style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:1;">`;
    for (let i = 0; i < nodeCoords.length - 1; i++) {
        let p1 = nodeCoords[i];
        let p2 = nodeCoords[i+1];
        svgHTML += `<line x1="${p1.left}%" y1="${p1.top}%" x2="${p2.left}%" y2="${p2.top}%" stroke="rgba(230, 197, 107, 0.45)" stroke-width="3" stroke-dasharray="4 2" />`;
    }
    svgHTML += `</svg>`;
    levelPath.innerHTML += svgHTML;

    // Render all 25 3D gemstone nodes
    nodeCoords.forEach((coord, index) => {
        const levelNum = region.start + index;
        const isCompleted = isLevelCompleted(levelNum);
        const isCurrent = levelNum === currentLevel;
        const isLocked = levelNum > currentLevel;
        const isBoss = isBossLevel(levelNum);

        const node = document.createElement('div');
        node.className = `level-node`;
        node.style.left = `${coord.left}%`;
        node.style.top = `${coord.top}%`;

        if (isCompleted) node.classList.add('completed');
        if (isCurrent) node.classList.add('current');
        if (isLocked) node.classList.add('locked');
        if (isBoss) node.classList.add('boss');

        let content = `<span>${levelNum}</span>`;
        if (isCompleted) {
            content += `<div class="level-check">✓</div>`;
        }
        if (isBoss) {
            content += `<div class="boss-symbol">👑</div>`;
        }
        if (isCurrent) {
            content += `<div class="king-marker">👑</div>`;
        }

        node.innerHTML = content;

        if (!isLocked) {
            node.addEventListener('click', () => {
                openRiddle(levelNum);
            });
        }

        levelPath.appendChild(node);
    });

    if (currentLevelButton) {
        currentLevelButton.classList.remove("visible");
    }
}


/* =========================================
   REGION ARROW EVENT LISTENERS
   ========================================= */

if (prevRegionButton) {
    prevRegionButton.addEventListener("click", () => {
        if (viewedRegionId > 1) {
            viewedRegionId--;
            renderCurrentRegion();
        }
    });
}

if (nextRegionButton) {
    nextRegionButton.addEventListener("click", () => {
        const maxUnlockedRegion = getRegionForLevel(currentLevel);
        if (viewedRegionId < maxUnlockedRegion) {
            viewedRegionId++;
            renderCurrentRegion();
        }
    });
}


/* =========================================
   OPEN RIDDLE
   ========================================= */

function openRiddle(level) {
    if (level > currentLevel) {
        return;
    }

    activeLevel = level;
    showScreen(riddleScreen);

    riddleLevel.textContent = `LEVEL ${level}`;

    const riddle = QUESTIONS[activeLevel];
    if (!riddle) {
        questionText.textContent = "This trial is being prepared...";
    } else {
        questionText.textContent = riddle.question;
    }

    answerInput.value = "";
    answerInput.disabled = false;
    submitAnswer.disabled = false;
    resultMessage.textContent = "";
    nextLevelButton.classList.add("hidden");
    witchMessage.textContent = "The Witch awaits your answer...";

    setTimeout(() => {
        answerInput.focus();
    }, 100);
}


/* =========================================
   CHECK ANSWER
   ========================================= */

submitAnswer.addEventListener("click", () => {
    checkAnswer();
});

answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();
    }
});

function checkAnswer() {
    const riddle = QUESTIONS[activeLevel];
    if (!riddle) {
        resultMessage.textContent = "This trial is not ready yet.";
        return;
    }

    const playerAnswer = answerInput.value.trim().replace(/\s+/g, " ").toLowerCase();
    if (!playerAnswer) {
        resultMessage.textContent = "The Witch is waiting for an answer...";
        answerInput.focus();
        return;
    }

    const correctAnswer = riddle.answer.trim().replace(/\s+/g, " ").toLowerCase();

    if (playerAnswer === correctAnswer) {
        handleCorrectAnswer();
    } else {
        handleWrongAnswer();
    }
}


/* =========================================
   CORRECT & WRONG ANSWERS
   ========================================= */

function handleCorrectAnswer() {
    markLevelCompleted(activeLevel);

    resultMessage.textContent = "TRIAL CLEARED!";
    nextLevelButton.classList.remove("hidden");

    if (isBossLevel(activeLevel)) {
        showStoryReveal(activeLevel);
        return;
    }

    if (activeLevel < 500) {
        currentLevel = activeLevel + 1;
        saveProgress();
    }
}

function handleWrongAnswer() {
    witchMessage.textContent = "Oh dear... that wasn't quite clever enough.";
    resultMessage.textContent = "Not quite. Try again.";
    resultMessage.style.color = "#e9a3a3";
    answerInput.focus();
    answerInput.select();
}


/* =========================================
   STORY REVEAL
   ========================================= */

function showStoryReveal(level) {
    const story = STORY_REVEALS[level];
    if (!story) return;

    storyImage.src = story.image;
    storyTitle.textContent = story.title;
    storyText.textContent = story.text;

    riddleScreen.classList.remove("active");
    storyScreen.classList.add("active");
}


/* =========================================
   NAVIGATION BUTTONS
   ========================================= */

nextLevelButton.addEventListener("click", () => {
    showScreen(levelMapScreen);
    renderCurrentRegion();
});

backToMapButton.addEventListener("click", () => {
    showScreen(levelMapScreen);
    renderCurrentRegion();
});

if (currentLevelButton) {
    currentLevelButton.addEventListener("click", () => {
        openLevelMap();
    });
}


/* =========================================
   INITIAL SAVE
   ========================================= */

saveProgress();