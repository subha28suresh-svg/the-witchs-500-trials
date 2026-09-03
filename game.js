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
    "assets/regions/Landing_Page.png",
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
      PROGRESS OF THE GAME
      ========================================= */
   
    let currentLevel = Number(localStorage.getItem("witchCurrentLevel")) || 1;
    let activeLevel = currentLevel;
   
    let completedLevels = JSON.parse(
    localStorage.getItem("witchCompletedLevels")
    ) || [];

    let skippedLevels = JSON.parse(
        localStorage.getItem("witchSkippedLevels")
    ) || [];

    function isLevelSkipped(level) {
        return skippedLevels.includes(level);
    }

    function markLevelSkipped(level) {
        if (!skippedLevels.includes(level)) {
            skippedLevels.push(level);
            localStorage.setItem("witchSkippedLevels", JSON.stringify(skippedLevels));
        }
    }
   
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
      AUDIO MANAGER (BGM & MUTE)
      ========================================= */

      const bgmNormal = document.getElementById("bgm-normal");
      const bgmBoss = document.getElementById("bgm-boss");
      const globalMuteBtn = document.getElementById("global-mute-btn");
      let isMuted = localStorage.getItem("witchIsMuted") === "true";
   
      function applyMuteState() {
          if (bgmNormal) bgmNormal.muted = isMuted;
          if (bgmBoss) bgmBoss.muted = isMuted;
          if (globalMuteBtn) {
              globalMuteBtn.textContent = isMuted ? "🔇" : "🔊";
              globalMuteBtn.classList.toggle("muted", isMuted);
          }
      }
   
      function toggleMute() {
          isMuted = !isMuted;
          localStorage.setItem("witchIsMuted", isMuted);
          applyMuteState();
      }
   
      if (globalMuteBtn) {
          globalMuteBtn.addEventListener("click", toggleMute);
      }
   
      function playBGM(trackType) {
          if (!bgmNormal || !bgmBoss) return;
   
          applyMuteState();
   
          if (trackType === "boss") {
              if (!bgmNormal.paused) bgmNormal.pause();
              bgmNormal.currentTime = 0;
              if (bgmBoss.paused) {
                  bgmBoss.play().catch(() => {});
              }
          } else if (trackType === "normal") {
              if (!bgmBoss.paused) bgmBoss.pause();
              bgmBoss.currentTime = 0;
              if (bgmNormal.paused) {
                  bgmNormal.play().catch(() => {});
              }
          }
      }

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
        // If player previously skipped this level, remove it from skipped so it turns gold
        if (skippedLevels.includes(level)) {
            skippedLevels = skippedLevels.filter(lvl => lvl !== level);
            localStorage.setItem("witchSkippedLevels", JSON.stringify(skippedLevels));
        }
        if (!completedLevels.includes(level)) {
            completedLevels.push(level);
            saveProgress();
        }
    }

    function saveProgress() {
        localStorage.setItem("witchCurrentLevel", currentLevel);
        localStorage.setItem("witchCompletedLevels", JSON.stringify(completedLevels));
        localStorage.setItem("witchSkippedLevels", JSON.stringify(skippedLevels));
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
        if (globalMuteBtn) {
            globalMuteBtn.classList.add("active");
        }
        playBGM("normal");
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
        playBGM("normal");
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

        // SVG path with straight segments within rows and smooth curved loops at the row ends
        let pathD = `M ${nodeCoords[0].left} ${nodeCoords[0].top}`;

        for (let i = 0; i < nodeCoords.length - 1; i++) {
            let p1 = nodeCoords[i];
            let p2 = nodeCoords[i + 1];

            // Check if next node is on the same row (top percentages match)
            let isSameRow = Math.abs(p1.top - p2.top) < 2;

            if (isSameRow) {
                // Direct straight line across row
                pathD += ` L ${p2.left} ${p2.top}`;
            } else {
                // Loop around the edge: arc outward toward the margin before swinging back into the next row
                let loopDirection = (p1.left > 50) ? 9 : -9; // loop outward to the right or left
                let controlX1 = p1.left + loopDirection;
                let controlY1 = p1.top + 2;
                let controlX2 = p2.left + loopDirection;
                let controlY2 = p2.top - 2;

                pathD += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${p2.left} ${p2.top}`;
            }
        }

        let svgHTML = `
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:1;">
               <!-- Soft ambient glow -->
               <path d="${pathD}" fill="none" stroke="rgba(217, 119, 6, 0.3)" stroke-width="1.4" stroke-linecap="round" />
               <!-- Refined golden dashed trail -->
               <path d="${pathD}" fill="none" stroke="rgba(252, 211, 77, 0.6)" stroke-width="0.7" stroke-dasharray="2 1.5" stroke-linecap="round" />
           </svg>
       `;
        levelPath.innerHTML += svgHTML;

        nodeCoords.forEach((coord, index) => {
            const levelNum = region.start + index;
            const isCompleted = isLevelCompleted(levelNum);
            const isSkipped = isLevelSkipped(levelNum);
            const isCurrent = levelNum === currentLevel;
            const isLocked = levelNum > currentLevel;
            const isBoss = isBossLevel(levelNum);

            const node = document.createElement('div');
            node.className = `level-node`;
            node.style.left = `${coord.left}%`;
            node.style.top = `${coord.top}%`;

            if (isCompleted) {
                node.classList.add('completed');
            } else if (isSkipped) {
                node.classList.add('skipped'); // Enabled, but not golden
            }

            if (isCurrent) node.classList.add('current');
            if (isLocked) node.classList.add('locked');
            if (isBoss) node.classList.add('boss');

            let content = `<span>${levelNum}</span>`;
            if (isCompleted) {
                content += `<div class="level-check">✓</div>`;
            } else if (isSkipped) {
                content += `<div class="level-skip-icon">↷</div>`;
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

    // Trigger Boss Music during Boss Levels, otherwise keep Normal BGM
    if (isBossLevel(activeLevel)) {
        playBGM("boss");
    } else {
        playBGM("normal");
    }
    
    const riddleScreenElement = document.getElementById("riddle-screen");

    // 1. Determine which region this level belongs to
    const regionId = getRegionForLevel(level);

    // 2. Set the background image dynamically based on the region ID
    if (regionId === 1) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Kingdom_of_Aurelia.jpeg')";
    } else if (regionId === 2) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Scorched_Desert.jpeg')";
    } else if (regionId === 3) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Enchanted_Forest.jpeg')";
    } else if (regionId === 4) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Frozen_Peaks.jpeg')";
    } else if (regionId === 5) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Lost_Ruins.jpeg')";
    } else if (regionId === 6) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Firelands.jpeg')";
    } else if (regionId === 7) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Shadow_Realm.jpeg')";
    } else if (regionId === 8) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Dragonlands.jpeg')";
    } else if (regionId === 9) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Sky_Kingdom.jpeg')";
    } else if (regionId === 10) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Sunken_Kingdom.jpeg')";
    } else if (regionId === 11) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Mystic_Marshes.jpeg')";
    } else if (regionId === 12) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Warriors_Wastes.jpeg')";
    } else if (regionId === 13) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Haunted_Catacombs.jpeg')";
    } else if (regionId === 14) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Crystal_Caverns.jpeg')";
    } else if (regionId === 15) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Astral_Realm.jpeg')";
    } else if (regionId === 16) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Time_Lost_Kingdom.jpeg')";
    } else if (regionId === 17) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Realm_Of_Illusions.jpeg')";
    } else if (regionId === 18) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Forbidden_Citadel.jpeg')";
    } else if (regionId === 19) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Witchs_Domain.jpeg')";
    } else if (regionId === 20) {
        riddleScreenElement.style.backgroundImage = "url('assets/regions/Witchs_Castle.jpeg')";
    } else {
        riddleScreenElement.style.backgroundImage = "none";
    }

    // Ensure background styles cover the screen nicely
    riddleScreenElement.style.backgroundSize = "cover";
    riddleScreenElement.style.backgroundPosition = "center";

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
   
      if (submitAnswer) {
        submitAnswer.addEventListener("click", () => {
            checkAnswer();
        });
    }
   
   answerInput.addEventListener("keydown", (event) => {
       if (event.key === "Enter") {
           event.preventDefault();
           checkAnswer();
       }
   });
   
   function checkAnswer() {
       const riddle = QUESTIONS[activeLevel];
       if (!riddle) {
           return;
       }
   
       const playerAnswer = answerInput.value.trim().replace(/\s+/g, " ").toLowerCase();
       if (!playerAnswer) {
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
      CORRECT & WRONG ANSWERS OVERLAY
      ========================================= */
      let wisdomMessageIndex = Number(localStorage.getItem("witchWisdomIndex")) || 0;

      function showTrialPassedEffect(isFirstTime) {
        const overlay = document.createElement('div');
        overlay.className = 'victory-overlay';
    
        const wisdomPhrases = [
            "Your wisdom pierces the shadows...",                  // 1
            "A triumph of keen intellect and wit...",              // 2
            "True wisdom unlocks the path ahead...",               // 3
            "Your mind outshines the ancient dark...",             // 4
            "Wit and wisdom shatter the seal...",                  // 5
            "A brilliant deduction echoes through the realm...",   // 6
            "The ancient trial yields to you...",                  // 7
            "The riddle surrenders its secrets...",                // 8
            "Another seal breaks...",                              // 9
            "Trial conquered by pure wit..."                       // 10
        ];
    
        const currentPhrase = wisdomPhrases[wisdomMessageIndex];
        wisdomMessageIndex = (wisdomMessageIndex + 1) % wisdomPhrases.length;
        localStorage.setItem("witchWisdomIndex", wisdomMessageIndex);
    
        // Create the Victory Banner in the center with the rotating phrase
        const banner = document.createElement('div');
        banner.className = 'victory-banner';
        
        let bannerHTML = `
            <h2>Trial Conquered!</h2>
            <p>${currentPhrase}</p>
        `;
 
        // Append +10 gems notice only on the first completion
        if (isFirstTime) {
            bannerHTML += `<div style="margin-top: 12px; color: #fde047; font-weight: bold; font-size: 1.1rem; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">+10 Gems Awarded! 💎</div>`;
        }
 
        banner.innerHTML = bannerHTML;
        overlay.appendChild(banner);
    
        // Spawn a massive shower of floating runes and symbols across the entire screen
        const runeSymbols = ['✨', '🔮', '⚡', '🌟', '📜', '💫', '⭐', '👁️', '⚗️', '🕯️', '🪄', '🌙'];
        
        for (let i = 0; i < 30; i++) {
            const rune = document.createElement('div');
            rune.className = 'magical-rune';
            rune.innerText = runeSymbols[Math.floor(Math.random() * runeSymbols.length)];
            
            rune.style.left = `${2 + Math.random() * 96}%`;
            rune.style.top = `${5 + Math.random() * 90}%`;
            rune.style.fontSize = `${1.2 + Math.random() * 2}rem`;
            rune.style.animationDelay = `${Math.random() * 0.4}s`;
            
            overlay.appendChild(rune);
        }
    
        document.body.appendChild(overlay);
    
        setTimeout(() => {
            overlay.remove();
        }, 2500);
    }
 
    function handleCorrectAnswer() {
        const alreadyCompleted = isLevelCompleted(activeLevel);
        const isFirstTime = !alreadyCompleted;
    
        markLevelCompleted(activeLevel);
        showTrialPassedEffect(isFirstTime);
 
        // Only award gems and run first-time rewards if not a replay
        if (isFirstTime) {
            playerGems += 10;
            saveGems();
            updateGemDisplays();
        }
    
        nextLevelButton.classList.remove("hidden");
    
        if (activeLevel < 500 && (activeLevel + 1) > currentLevel) {
            currentLevel = activeLevel + 1;
            saveProgress();
        }
    }
   
   function showDefeatEffect() {
        const overlay = document.createElement('div');
        overlay.className = 'defeat-overlay';

        const banner = document.createElement('div');
        banner.className = 'defeat-banner';
        banner.innerHTML = `
            <h2>Trial Failed</h2>
            <p>The Witch mocks your attempt...</p>
        `;
        overlay.appendChild(banner);
        document.body.appendChild(overlay);

        // Remove the pop-up overlay automatically after 1.8 seconds
        setTimeout(() => {
            overlay.remove();
        }, 1800);
    }

   function handleWrongAnswer() {
       showDefeatEffect();
       witchMessage.textContent = "Oh dear... that wasn't quite clever enough.";
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
       playBGM("normal");
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
    const isCompleted = isLevelCompleted(activeLevel); // Checks if active trial was already solved

    for (let i = 0; i < 3; i++) {
        const hintNum = i + 1;
        // If solved, all 3 hints are unlocked automatically; otherwise follow sequential unlock count
        const isUnlocked = isCompleted || (hintNum <= unlockedCount);
        const canUnlockNow = !isCompleted && ((hintNum === 1) || (hintNum === unlockedCount + 1));

        const itemDiv = document.createElement("div");
        itemDiv.className = `mythical-hint-item ${isUnlocked ? 'unlocked' : ''}`;

        let innerHTML = `
            <div class="hint-row-header">
                <span class="hint-row-title">Hint ${hintNum} ${isCompleted ? '' : '(30 💎)'}</span>
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

        // 4th Row: Only show Skip Level if NOT completed AND NOT skipped
        const isAlreadyPassedOrSkipped = isLevelCompleted(activeLevel) || isLevelSkipped(activeLevel);
        if (!isAlreadyPassedOrSkipped) {
            const skipDiv = document.createElement("div");
            skipDiv.className = "mythical-hint-item skip-row";
            skipDiv.innerHTML = `
                <div class="hint-row-header" style="align-items: center;">
                    <span class="hint-row-title" style="color: #fde047;">⚡ Skip Trial</span>
                    <button class="unlock-hint-btn" onclick="trySkipLevel()" style="background: linear-gradient(135deg, #d97706, #b45309); border-color: #fde047;">100 💎</button>
                </div>
                <div class="hint-row-content" style="color: #cbd5e1;">Bypass this trial. You can replay it later for gems and glory.</div>
            `;
            hintsListContainer.appendChild(skipDiv);
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

    window.trySkipLevel = function() {
        if (playerGems >= 100) {
            playerGems -= 100;
            saveGems();
            updateGemDisplays();
            executeSkipLevel();
        } else {
            // Insufficient gems for skip: route to the ad prompt modal
            hintsModal.classList.remove("active");
            adPromptModal.classList.add("active");
        }
    };

    function executeSkipLevel() {
        hintsModal.classList.remove("active");
    
        // Mark as skipped (turns slate on map, no victory gems)
        markLevelSkipped(activeLevel);
    
        // Show the Witch's skip mocking popup
        const skipModal = document.getElementById("witch-skip-modal");
        const proceedBtn = document.getElementById("skip-proceed-btn");
    
        if (skipModal) {
            skipModal.classList.add("active");
    
            proceedBtn.onclick = () => {
                skipModal.classList.remove("active");
    
                // Advance to story comic if it was a boss, otherwise next riddle
                if (isBossLevel(activeLevel)) {
                    showStoryReveal(activeLevel);
                    return;
                }
    
                if (activeLevel < 500 && (activeLevel + 1) > currentLevel) {
                    currentLevel = activeLevel + 1;
                    saveProgress();
                }
    
                if (activeLevel < 500) {
                    openRiddle(activeLevel + 1);
                } else {
                    showScreen(levelMapScreen);
                    renderCurrentRegion();
                }
            };
        }
    }

    // "Yes" opens the in-app purchase and watch ad shop modal
    if (adYesBtn) {
        adYesBtn.addEventListener("click", () => {
            adPromptModal.classList.remove("active");
            if (shopModal) {
                shopModal.classList.add("active");
            }
        });
    }

    // "No" returns the player back to the hints window
    if (adNoBtn) {
        adNoBtn.addEventListener("click", () => {
            adPromptModal.classList.remove("active");
            if (hintsModal) {
                hintsModal.classList.add("active");
            }
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

   // =========================================
// CUSTOM MAGICAL VIRTUAL KEYBOARD CONTROLLER
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const keyboard = document.getElementById("custom-keyboard");
    if (!keyboard) return;

    keyboard.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;

        const answerInput = document.getElementById("answer-input");
        if (!answerInput || answerInput.disabled) return;

        const letterKey = btn.getAttribute("data-key");
        const action = btn.getAttribute("data-action");

        if (letterKey) {
            // Append letter in UPPERCASE automatically
            answerInput.value += letterKey;
            answerInput.focus();
        } else if (action === "backspace") {
            // Remove last character
            answerInput.value = answerInput.value.slice(0, -1);
            answerInput.focus();
        } else if (action === "clear") {
            // Clear entire input box
            answerInput.value = "";
            answerInput.focus();
        } else if (action === "enter") {
            // Trigger answer submission[cite: 1]
            checkAnswer();
        }
    });
});