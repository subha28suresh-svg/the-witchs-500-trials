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

/* =========================================
   STORY REVEALS (BOSS COMIC PLACEHOLDERS)
   ========================================= */

   const STORY_REVEALS = {
        25: {
            title: "TRIAL OF AURELIA COMPLETE",
            text: "The King has conquered the first realm. But the Witch's domain stretches far beyond...",
            image: "assets/comics/story-region-01.png"
        },
        50: {
            title: "SCORCHED DESERT CONQUERED",
            text: "The blistering sands fall silent. A cooler, darker mystery awaits ahead.",
            image: "assets/comics/story-region-02.png"
        },
        75: {
            title: "ENCHANTED FOREST CLEARED",
            text: "The whispering trees part to reveal harsh new heights to climb.",
            image: "assets/comics/story-region-03.png"
        },
        100: {
            title: "FROZEN PEAKS SURVIVED",
            text: "The icy winds quiet down as ancient, forgotten stones emerge from the mist.",
            image: "assets/comics/story-region-04.png"
        },
        125: {
            title: "LOST RUINS UNLOCKED",
            text: "Secrets of the ancients are laid bare, but the heat of the next trial rises.",
            image: "assets/comics/story-region-05.png"
        },
        150: {
            title: "FIRELANDS TAMED",
            text: "The rivers of lava are crossed. Now, shadows claim the path ahead.",
            image: "assets/comics/story-region-06.png"
        },
        175: {
            title: "SHADOW REALM PIERCED",
            text: "The darkness retreats before the crown's light, revealing the domain of dragons.",
            image: "assets/comics/story-region-07.png"
        },
        200: {
            title: "DRAGONLANDS CONQUERED",
            text: "Beasts of old bow to intellect. The skies above call out next.",
            image: "assets/comics/story-region-08.png"
        },
        225: {
            title: "SKY KINGDOM ASCENDED",
            text: "Floating islands are left behind as the trials sink beneath the waves.",
            image: "assets/comics/story-region-09.png"
        },
        250: {
            title: "SUNKEN KINGDOM DRAINED",
            text: "Deep sea mysteries solved, the muddy bogs of the marshland approach.",
            image: "assets/comics/story-region-10.png"
        },
        275: {
            title: "MYSTIC MARSHES NAVIGATED",
            text: "The toxic fogs clear, leading to the harsh grounds of the warriors.",
            image: "assets/comics/story-region-11.png"
        },
        300: {
            title: "WARRIOR'S WASTES VICTORIOUS",
            text: "Might and mind prevail. The cold stone of catacombs echoes ahead.",
            image: "assets/comics/story-region-12.png"
        },
        325: {
            title: "HAUNTED CATACOMBS ESCAPED",
            text: "Spirits are put to rest as brilliant crystal lights guide the way.",
            image: "assets/comics/story-region-13.png"
        },
        350: {
            title: "CRYSTAL CAVERNS SHINED",
            text: "Refracted light opens portals to the stars themselves.",
            image: "assets/comics/story-region-14.png"
        },
        375: {
            title: "ASTRAL REALM TRANSCENDED",
            text: "Time bends and loops, pulling the King into a historical labyrinth.",
            image: "assets/comics/story-region-15.png"
        },
        400: {
            title: "TIME-LOST KINGDOM RECLAIMED",
            text: "History is rewritten, but reality warps into pure illusion.",
            image: "assets/comics/story-region-16.png"
        },
        425: {
            title: "REALM OF ILLUSIONS SEEN THROUGH",
            text: "Tricks and phantoms fade. Only the Forbidden Citadel remains.",
            image: "assets/comics/story-region-17.png"
        },
        450: {
            title: "FORBIDDEN CITADEL BREACHED",
            text: "The Witch's outer defenses fall. Her private domain lies open.",
            image: "assets/comics/story-region-18.png"
        },
        475: {
            title: "WITCH'S DOMAIN ENTERED",
            text: "The final gate stands before you. The ultimate trial awaits at the Castle.",
            image: "assets/comics/story-region-19.png"
        },
        500: {
            title: "THE WITCH'S 500 TRIALS COMPLETE",
            text: "The crown triumphs over all! The Witch is defeated, and peace is restored.",
            image: "assets/comics/story-region-20.png"
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

/* =========================================
   GEMS & HINTS ECONOMY
   ========================================= */

let playerGems = Number(localStorage.getItem("witchPlayerGems")) || 100; // Defaults to 100 on first install
let unlockedHintLevels = JSON.parse(localStorage.getItem("witchUnlockedHints")) || {}; // Track unlocked hints per level

function saveGems() {
    localStorage.setItem("witchPlayerGems", playerGems);
    localStorage.setItem("witchUnlockedHints", JSON.stringify(unlockedHintLevels));
}

function updateGemDisplays() {
    const mapBadge = document.getElementById("gem-count-map");
    const riddleBadge = document.getElementById("gem-count-riddle");
    if (mapBadge) mapBadge.textContent = playerGems;
    if (riddleBadge) riddleBadge.textContent = playerGems;
}

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
    
    // Automatically switch the viewed region to the new region
    viewedRegionId = getRegionForLevel(currentLevel);
    
    openLevelMap();
});


/* =========================================
   OPEN LEVEL MAP
   ========================================= */

function openLevelMap() {
    // Always snap back to the user's current progress region when opening the map
    viewedRegionId = getRegionForLevel(currentLevel);
    showScreen(levelMapScreen);
    updateGemDisplays(); // Added to refresh gem counter badge
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

    // Control visibility of floating mystic arrows across regions
    if (prevRegionButton) {
        if (viewedRegionId > 1) {
            prevRegionButton.classList.remove("hidden");
        } else {
            prevRegionButton.classList.add("hidden");
        }
    }
    
    if (nextRegionButton) {
        if (viewedRegionId < TOTAL_REGIONS) {
            nextRegionButton.classList.remove("hidden");
        } else {
            nextRegionButton.classList.add("hidden");
        }
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
            content += `<div class="boss-symbol"></div>`; // <--- Changed to empty container so CSS injects the skull (💀) instead of a crown
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
        if (viewedRegionId < TOTAL_REGIONS) {
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
    updateGemDisplays(); // Refresh gem counter badge

    const riddleScreenElement = document.getElementById("riddle-screen");

    // Check if it's a boss level and apply the distinct boss look, feel, and warning text
    if (isBossLevel(activeLevel)) {
        riddleLevel.textContent = "⚠️ BOSS LEVEL: BEAT IT IF YOU CAN! ⚠️";
        riddleScreenElement.classList.add("boss-screen-theme");
        witchMessage.textContent = "🔥 The Boss watches closely... Your intellect will be tested!";
        witchMessage.style.color = "#fda4af";
        witchMessage.style.fontWeight = "bold";
    } else {
        riddleLevel.textContent = `LEVEL ${level}`;
        riddleScreenElement.classList.remove("boss-screen-theme");
        witchMessage.textContent = "The Witch awaits your answer...";
        witchMessage.style.color = "#cbb4d4";
        witchMessage.style.fontWeight = "normal";
    }

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
    // Check if level was already completed *before* marking it completed
    const alreadyCompleted = isLevelCompleted(activeLevel);

    markLevelCompleted(activeLevel);

    // Only reward 10 gems if it's the *first* time clearing this level
    if (!alreadyCompleted) {
        playerGems += 10;
        saveGems();
        updateGemDisplays();
        resultMessage.textContent = "TRIAL CLEARED! (+10 💎)";
    } else {
        resultMessage.textContent = "TRIAL CLEARED!";
    }

    nextLevelButton.classList.remove("hidden");

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
        // Check if the level we JUST completed was a boss level
        if (isBossLevel(activeLevel)) {
            showStoryReveal(activeLevel);
            return;
        }

        // Auto-progress to the next level's riddle directly for regular levels!
        if (activeLevel < 500) {
            openRiddle(activeLevel + 1);
        } else {
            showScreen(levelMapScreen);
            renderCurrentRegion();
        }
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

/* =========================================
   MYTHICAL HINTS & AD PROMPT INTERACTION
   ========================================= */

const openHintsBtn = document.getElementById("open-hints-modal-btn");
const hintsModal = document.getElementById("hints-modal");
const closeHintsModal = document.getElementById("close-hints-modal");
const hintsListContainer = document.getElementById("hints-list-container");

const adPromptModal = document.getElementById("ad-prompt-modal");
const adYesBtn = document.getElementById("ad-yes-btn");
const adNoBtn = document.getElementById("ad-no-btn");

if (openHintsBtn && hintsModal) {
    openHintsBtn.addEventListener("click", () => {
        renderHintsModalContent();
        hintsModal.classList.add("active");
    });
} else {
    console.warn("Hint modal or button elements not found in DOM!");
}

if (closeHintsModal && hintsModal) {
    closeHintsModal.addEventListener("click", () => {
        hintsModal.classList.remove("active");
    });
}

if (hintsModal) {
    hintsModal.addEventListener("click", (e) => {
        if (e.target === hintsModal) hintsModal.classList.remove("active");
    });
}

function getUnlockedCountForActiveLevel() {
    return unlockedHintLevels[activeLevel] || 0;
}

function renderHintsModalContent() {
    if (!hintsListContainer) return;
    hintsListContainer.innerHTML = "";

    const riddle = QUESTIONS[activeLevel];
    const unlockedCount = getUnlockedCountForActiveLevel();

    const defaultHints = [
        "Think carefully about the core meaning of the riddle words.",
        "Consider metaphorical connections rather than literal objects.",
        "The answer starts with letter: " + (riddle && riddle.answer ? riddle.answer.charAt(0).toUpperCase() : "?")
    ];
    /*const hintsArr = (riddle && riddle.hints) ? riddle.hints : defaultHints;*/
    const hintsArr = riddle.hints;

    for (let i = 0; i < 3; i++) {
        const hintNum = i + 1;
        const isUnlocked = hintNum <= unlockedCount;
        const canUnlockNow = (hintNum === 1) || (hintNum === unlockedCount + 1);

        const itemDiv = document.createElement("div");
        itemDiv.className = `mythical-hint-item ${isUnlocked ? 'unlocked' : ''}`;

        let innerHTML = `
            <div class="hint-row-header">
                <span class="hint-row-title">Hint ${hintNum} (30 💎)</span>
        `;

        if (!isUnlocked) {
            innerHTML += `<button class="unlock-hint-btn" ${!canUnlockNow ? 'disabled' : ''} onclick="tryUnlockHint(${hintNum})">Reveal</button>`;
        } else {
            innerHTML += `<span style="color: #38bdf8; font-size: 0.8rem; font-weight: bold;">✓ Unlocked</span>`;
        }

        innerHTML += `</div>`;

        if (isUnlocked) {
            innerHTML += `<div class="hint-row-content">${hintsArr[i]}</div>`;
        }

        itemDiv.innerHTML = innerHTML;
        hintsListContainer.appendChild(itemDiv);
    }
}

window.tryUnlockHint = function(hintNum) {
    if (playerGems >= 30) {
        playerGems -= 30;
        unlockedHintLevels[activeLevel] = hintNum;
        saveGems();
        updateGemDisplays();
        renderHintsModalContent();
    } else {
        hintsModal.classList.remove("active");
        adPromptModal.classList.add("active");
    }
};

if (adNoBtn) {
    adNoBtn.addEventListener("click", () => {
        adPromptModal.classList.remove("active");
        hintsModal.classList.add("active");
    });
}

if (adYesBtn) {
    adYesBtn.addEventListener("click", () => {
        alert("Ad integration coming soon! 30 gems granted for testing.");
        playerGems += 30;
        saveGems();
        updateGemDisplays();
        adPromptModal.classList.remove("active");
        hintsModal.classList.add("active");
        renderHintsModalContent();
    });
}