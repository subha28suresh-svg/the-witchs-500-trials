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
       { id: 1, name: "Kingdom of Valoria", start: 1, end: 25 },
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

   /* =========================================
   PRELOAD REGION BACKGROUNDS INSTANTLY
   ========================================= */
const regionImages = [
    "assets/regions/Kingdom_of_Aurelia.jpeg",
    "assets/regions/Scorched_Desert.jpeg",
    "assets/regions/Enchanted_Forest.jpeg",
    "assets/regions/Frozen_Peaks.jpeg",
    "assets/regions/Lost_Ruins.jpeg",
    "assets/regions/Firelands.jpeg",
    "assets/regions/Shadow_Realm.jpeg",
    "assets/regions/Dragonlands.jpeg",
    "assets/regions/Sky_Kingdom.jpeg",
    "assets/regions/Sunken_Kingdom.jpeg",
    "assets/regions/Mystic_Marshes.jpeg",
    "assets/regions/Warriors_Wastes.jpeg",
    "assets/regions/Haunted_Catacombs.jpeg",
    "assets/regions/Crystal_Caverns.jpeg",
    "assets/regions/Astral_Realm.jpeg",
    "assets/regions/Time_Lost_Kingdom.jpeg",
    "assets/regions/Realm_Of_Illusions.jpeg",
    "assets/regions/Forbidden_Citadel.jpeg",
    "assets/regions/Witchs_Domain.jpeg",
    "assets/regions/Witchs_Castle.jpeg"
];

// Silently load and cache every background image into browser memory immediately
regionImages.forEach(src => {
    const img = new Image();
    img.src = src;
});
   
   /* =================================
      STORY REVEALS
      ================================= */
   
   const STORY_REVEALS = {
       25: {image: "assets/comics/story-region-01.png"},
       50: {image: "assets/comics/story-region-02.png"},
       75: {image: "assets/comics/story-region-03.png"},
       100: {image: "assets/comics/story-region-04.png"},
       125: {image: "assets/comics/story-region-05.png"},
       150: {image: "assets/comics/story-region-06.png"},
       175: {image: "assets/comics/story-region-07.png"},
       200: {image: "assets/comics/story-region-08.png"},
       225: {image: "assets/comics/story-region-09.png"},
       250: {image: "assets/comics/story-region-10.png"},
       275: {image: "assets/comics/story-region-11.png"},
       300: {image: "assets/comics/story-region-12.png"},
       325: {image: "assets/comics/story-region-13.png"},
       350: {image: "assets/comics/story-region-14.png"},
       375: {image: "assets/comics/story-region-15.png"},
       400: {image: "assets/comics/story-region-16.png"},
       425: {image: "assets/comics/story-region-17.png"},
       450: {image: "assets/comics/story-region-18.png"},
       475: {image: "assets/comics/story-region-19.png"},
       500: {image: "assets/comics/story-region-20.png"}
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
   
   let playerGems = Number(localStorage.getItem("witchPlayerGems")) || 100;
   let unlockedHintLevels = JSON.parse(localStorage.getItem("witchUnlockedHints")) || {};
   
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
       if (activeLevel < 500 && (activeLevel + 1) > currentLevel) {
           currentLevel = activeLevel + 1;
           saveProgress();
       }
       storyScreen.classList.remove("active");
       viewedRegionId = getRegionForLevel(currentLevel);
       openLevelMap();
   });
   
   /* =========================================
      OPEN LEVEL MAP
      ========================================= */
   
   function openLevelMap() {
       viewedRegionId = getRegionForLevel(currentLevel);
       showScreen(levelMapScreen);
       updateGemDisplays();
       renderCurrentRegion();
   }
   
  
   /* =========================================
   RENDER CURRENT REGION
   ========================================= */

function renderCurrentRegion() {
    const region = REGIONS[viewedRegionId - 1];

    regionNumber.textContent = `REGION ${region.id}`;
    regionName.textContent = region.name;

    // Dynamically apply region background image based on Region ID
    const levelMapScreenEl = document.getElementById("level-map-screen");
    if (viewedRegionId === 1) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Kingdom_of_Aurelia.jpeg')";
    } else if (viewedRegionId === 2) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Scorched_Desert.jpeg')";
    } else if (viewedRegionId === 3) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Enchanted_Forest.jpeg')";
    } else if (viewedRegionId === 4) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Frozen_Peaks.jpeg')";
    } else if (viewedRegionId === 5) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Lost_Ruins.jpeg')";
    } else if (viewedRegionId === 6) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Firelands.jpeg')";
    } else if (viewedRegionId === 7) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Shadow_Realm.jpeg')";
    } else if (viewedRegionId === 8) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Dragonlands.jpeg')";
    } else if (viewedRegionId === 9) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Sky_Kingdom.jpeg')";
    } else if (viewedRegionId === 10) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Sunken_Kingdom.jpeg')";
    } else if (viewedRegionId === 11) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Mystic_Marshes.jpeg')";
    } else if (viewedRegionId === 12) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Warriors_Wastes.jpeg')";
    } else if (viewedRegionId === 13) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Haunted_Catacombs.jpeg')";
    } else if (viewedRegionId === 14) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Crystal_Caverns.jpeg')";
    } else if (viewedRegionId === 15) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Astral_Realm.jpeg')";
    } else if (viewedRegionId === 16) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Time_Lost_Kingdom.jpeg')";
    } else if (viewedRegionId === 17) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Realm_Of_Illusions.jpeg')";
    } else if (viewedRegionId === 18) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Forbidden_Citadel.jpeg')";
    } else if (viewedRegionId === 19) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Witchs_Domain.jpeg')";
    } else if (viewedRegionId === 20) {
        levelMapScreenEl.style.backgroundImage = "url('assets/regions/Witchs_Castle.jpeg')";
    } else {
        levelMapScreenEl.style.backgroundImage = "none";
    }

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
   
       // Professional zigzag serpentine grid mapping (every alternate row reverses)
       const gridCoords = [];
       for (let row = 1; row <= 5; row++) {
           for (let col = 1; col <= 5; col++) {
               // If it's an even row (2 or 4), reverse the column order for a winding S-curve
               let actualCol = (row % 2 === 0) ? (6 - col) : col;
               gridCoords.push({ col: actualCol, row: row });
           }
       }
   
       // Perfectly centered and proportioned scaling for a single screen
       const nodeCoords = gridCoords.map((pos) => {
           let leftPercent = 18 + (pos.col - 1) * 16;
           let topPercent = 18 + (pos.row - 1) * 14;
           return { left: leftPercent, top: topPercent };
       });
   
       let svgHTML = `<svg style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:1;">`;
       for (let i = 0; i < nodeCoords.length - 1; i++) {
           let p1 = nodeCoords[i];
           let p2 = nodeCoords[i+1];
           svgHTML += `<line x1="${p1.left}%" y1="${p1.top}%" x2="${p2.left}%" y2="${p2.top}%" stroke="rgba(230, 197, 107, 0.45)" stroke-width="3" stroke-dasharray="4 2" />`;
       }
       svgHTML += `</svg>`;
       levelPath.innerHTML += svgHTML;
   
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
               content += `<div class="boss-symbol"></div>`;
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
    
    // Check if it's a boss level and show the interactive transition popup
    if (isBossLevel(activeLevel)) {
        const bossOverlay = document.getElementById("boss-transition-overlay");
        const bossTitle = document.getElementById("boss-transition-title");
        const bossSubtitle = document.getElementById("boss-transition-subtitle");
        const bossContinueBtn = document.getElementById("boss-continue-btn");
        const bossAdBtn = document.getElementById("boss-ad-btn");

        bossTitle.textContent = `⚠️ BOSS LEVEL ${activeLevel} ⚠️`;
        bossSubtitle.textContent = `Region Guardian approaches. Prepare your mind!`;

        if (bossOverlay) {
            bossOverlay.classList.add("active");

            // Define clean event handlers for the popup buttons
            const handleContinue = () => {
                bossOverlay.classList.remove("active");
                cleanupBossListeners();
                proceedToRiddleScreen(level);
            };

            const handleWatchAd = () => {
                triggerAdReward(() => {
                    // Optional: Give instant feedback or let them stay on screen to click continue
                });
            };

            const cleanupBossListeners = () => {
                bossContinueBtn.removeEventListener("click", handleContinue);
                bossAdBtn.removeEventListener("click", handleWatchAd);
            };

            // Attach listeners fresh to prevent multi-trigger stacking
            bossContinueBtn.onclick = handleContinue;
            bossAdBtn.onclick = handleWatchAd;

            return;
        }
    }

    proceedToRiddleScreen(level);
}

// Helper to handle standard riddle screen setup
function proceedToRiddleScreen(level) {
    showScreen(riddleScreen);
    updateGemDisplays();

    const riddleScreenElement = document.getElementById("riddle-screen");

    if (isBossLevel(activeLevel)) {
        riddleLevel.textContent = `⚠️ BOSS LEVEL ${activeLevel} ⚠️`;
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

    const riddleAdBonusBtn = document.getElementById("riddle-ad-bonus-btn");
    if (riddleAdBonusBtn) {
        riddleAdBonusBtn.style.display = "flex";
    }

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
       const alreadyCompleted = isLevelCompleted(activeLevel);
   
       markLevelCompleted(activeLevel);
   
       if (!alreadyCompleted) {
           playerGems += 10;
           saveGems();
           updateGemDisplays();
           resultMessage.textContent = "TRIAL CLEARED! (+10 💎)";
       } else {
           resultMessage.textContent = "TRIAL CLEARED!";
       }
   
       nextLevelButton.classList.remove("hidden");
   
       if (activeLevel < 500 && (activeLevel + 1) > currentLevel) {
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
       if (isBossLevel(activeLevel)) {
           showStoryReveal(activeLevel);
           return;
       }
   
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
       const hintsArr = riddle ? riddle.hints : [];
   
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
   
           if (isUnlocked && hintsArr && hintsArr[i]) {
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
   
   // =========================================
   // SHOP & IAP MODAL EVENT LISTENERS
   // =========================================
   
   const shopModal = document.getElementById("shop-modal");
   const closeShopModal = document.getElementById("close-shop-modal");
   const shopWatchAdBtn = document.getElementById("shop-watch-ad-btn");
   
   // Bind all elements matching shop triggers using a class selector to support multiple screens
   document.querySelectorAll(".open-shop-trigger").forEach(btn => {
       btn.addEventListener("click", () => {
           if (shopModal) shopModal.classList.add("active");
       });
   });
   
   if (closeShopModal && shopModal) {
       closeShopModal.addEventListener("click", () => {
           shopModal.classList.remove("active");
       });
   }
   
   if (shopModal) {
       shopModal.addEventListener("click", (e) => {
           if (e.target === shopModal) shopModal.classList.remove("active");
       });
   }
   
   function triggerAdReward(callback) {
       alert("Ad playing... (Placeholder integration)");
       playerGems += 30;
       saveGems();
       updateGemDisplays();
       if (callback) callback();
   }
   
   if (shopWatchAdBtn) {
       shopWatchAdBtn.addEventListener("click", () => {
           triggerAdReward(() => {
               shopModal.classList.remove("active");
           });
       });
   }
   
   window.buyIAP = function(packName, gemAmount) {
       alert(`Processing purchase for ${packName} (${gemAmount} Gems). Placeholder integration.`);
       playerGems += gemAmount;
       saveGems();
       updateGemDisplays();
       shopModal.classList.remove("active");
   };
   
   // Riddle Screen Watch Ad Bonus Button Listener
   const riddleAdBonusBtn = document.getElementById("riddle-ad-bonus-btn");
   
   if (riddleAdBonusBtn) {
       riddleAdBonusBtn.addEventListener("click", () => {
           triggerAdReward(() => {
               // Keep button visible so players can watch ads an unlimited number of times
               riddleAdBonusBtn.style.display = "flex"; 
           });
       });
   }