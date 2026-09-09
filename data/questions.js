/* =========================================
   THE WITCH'S 500 TRIALS
   QUESTIONS, RIDDLES & HINTS DATABASE
   (Strictly Single-Word Answers)
   ========================================= */

const QUESTIONS = {
    // --- REGION: Kingdom of Aurelia (Levels 1 - 25) ---
    1: { 
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", 
        answer: "echo", 
        hints: [
            "It only exists when another sound awakens it.",
            "You hear it bounce off high canyon walls or empty stone halls.",
            "4 letters, starts with E."
        ] 
    },
    2: { 
        question: "The more of me you take, the more you leave behind. What am I?", 
        answer: "footstep", 
        hints: [
            "They mark the journey you have completed.",
            "You press them into sand, snow, or mud as you walk.",
            "8 letters, starts with F."
        ] 
    },
    3: { 
        question: "I have branches, but no fruit, trunk, or leaves. What am I?", 
        answer: "bank", 
        hints: [
            "It deals with valuable exchanges rather than forest soil.",
            "You visit it to store or borrow money.",
            "4 letters, starts with B."
        ] 
    },
    4: { 
        question: "What can travel all around the world while remaining in the exact same corner?", 
        answer: "stamp", 
        hints: [
            "It clings to paper through rain and long journeys.",
            "Post offices press ink onto it before sending mail across the sea.",
            "5 letters, starts with S."
        ] 
    },
    5: { 
        question: "I am not alive, but I grow. I don't have lungs, but I need air. I don't have a mouth, but water kills me. What am I?", 
        answer: "fire", 
        hints: [
            "It gives off heat and dances with yellow tongues.",
            "Feeding it dry wood makes it larger, while a single bucket drowns it.",
            "4 letters, starts with F."
        ] 
    },
    6: { 
        question: "What has a thumb and four fingers, but is not alive?", 
        answer: "glove", 
        hints: [
            "It is tailored from leather, wool, or cloth.",
            "You slide your hand into it to keep warm in winter.",
            "5 letters, starts with G."
        ] 
    },
    7: { 
        question: "What has many keys, but cannot open a single lock?", 
        answer: "piano", 
        hints: [
            "Its keys are made of black and white ivories.",
            "Striking them produces melodies and musical chords.",
            "5 letters, starts with P."
        ] 
    },
    8: { 
        question: "What belongs completely to you, yet is spoken far more by other people?", 
        answer: "name", 
        hints: [
            "It was chosen for you before you could speak.",
            "Friends use it to call out to you across a crowded room.",
            "4 letters, starts with N."
        ] 
    },
    9: { 
        question: "What has a neck, but no head, arms, or legs?", 
        answer: "bottle", 
        hints: [
            "It holds vintage wine, refreshing water, or potions.",
            "A cork or threaded cap seals the very top of its opening.",
            "6 letters, starts with B."
        ] 
    },
    10: { 
        question: "What gets wetter and wetter the more it dries?", 
        answer: "towel", 
        hints: [
            "You hang it up in the bathhouse after washing.",
            "It absorbs moisture straight from your skin.",
            "5 letters, starts with T."
        ] 
    },
    11: { 
        question: "I have a single eye, yet I cannot see a thing. What am I?", 
        answer: "needle", 
        hints: [
            "Tailors keep it stuck in velvet cushions.",
            "Colored thread passes directly through its tiny metallic loop.",
            "6 letters, starts with N."
        ] 
    },
    12: { 
        question: "What can fill an entire room without taking up a single inch of physical space?", 
        answer: "light", 
        hints: [
            "It dispels pitch darkness in an instant.",
            "It streams in through glass windows or burns on a candle's wick.",
            "5 letters, starts with L."
        ] 
    },
    13: { 
        question: "What is so fragile that if you simply speak its name, you shatter it?", 
        answer: "silence", 
        hints: [
            "It exists only when there is absolute peace and quiet.",
            "Even a quiet whisper or footstep destroys it instantly.",
            "7 letters, starts with S."
        ] 
    },
    14: { 
        question: "If you have me, you want to share me. If you share me, you haven't kept me. What am I?", 
        answer: "secret", 
        hints: [
            "It is whispered between trusted companions.",
            "Telling it to the entire court means it no longer exists.",
            "6 letters, starts with S."
        ] 
    },
    15: { 
        question: "What has hands, but cannot hold a sword, clap, or wave?", 
        answer: "clock", 
        hints: [
            "It hangs on a wall or stands tall in a grand hallway.",
            "Its indicators tick steadily in a circle to track the passing hours.",
            "5 letters, starts with C."
        ] 
    },
    16: { 
        question: "What runs continuously across valleys, but never walks, has a bed but never sleeps, and has a mouth but never speaks?", 
        answer: "river", 
        hints: [
            "It flows downhill toward a lake or an ocean.",
            "Fishermen cast lines and boats float upon its rushing currents.",
            "5 letters, starts with R."
        ] 
    },
    17: { 
        question: "What has a head and a tail, but no body or legs?", 
        answer: "coin", 
        hints: [
            "It rattles inside a merchant's leather purse.",
            "You flip it into the air to decide between two choices.",
            "4 letters, starts with C."
        ] 
    },
    18: { 
        question: "I follow you by day and vanish by night. I mimic your form, yet feel no warmth. Who am I?", 
        answer: "shadow", 
        hints: [
            "It stretches across cobblestones on a sunny afternoon.",
            "It moves when you move, but disappears the moment the torch goes out.",
            "6 letters, starts with S."
        ] 
    },
    19: { 
        question: "What can you catch, but never throw?", 
        answer: "cold", 
        hints: [
            "It brings sneezes, chills, and fever during damp weather.",
            "Rest, warm broth, and blankets are the best remedy.",
            "4 letters, starts with C."
        ] 
    },
    20: { 
        question: "What has an eye that never closes, yet is completely blind, and only roars during the fiercest storms?", 
        answer: "hurricane", 
        hints: [
            "A violent, spinning tropical tempest born over warm seas.",
            "Its circular center is eerily calm while gale-force winds swirl around it.",
            "9 letters, starts with H."
        ] 
    },
    21: { 
        question: "What loses its head in the morning, only to get it back at night?", 
        answer: "pillow", 
        hints: [
            "It rests on your bed wrapped in soft linen.",
            "You lay your weary head upon it when you fall asleep.",
            "6 letters, starts with P."
        ] 
    },
    22: { 
        question: "What has cities with no houses, mountains with no trees, and oceans without a single drop of water?", 
        answer: "map", 
        hints: [
            "Navigators unroll it across a wooden table to chart their voyages.",
            "It uses ink, compass roses, and contours to depict land and sea.",
            "3 letters, starts with M."
        ] 
    },
    23: { 
        question: "I am light as a feather, yet even the strongest knight cannot hold me for much more than a few minutes. What am I?", 
        answer: "breath", 
        hints: [
            "You inhale and exhale it every second of your life.",
            "Plunging underwater tests how long your chest can go without it.",
            "6 letters, starts with B."
        ] 
    },
    24: { 
        question: "What has many teeth, but cannot bite or eat a single morsel of bread?", 
        answer: "comb", 
        hints: [
            "It rests beside a morning mirror on a vanity table.",
            "You pull its plastic or wooden rows through tangled hair to neaten it.",
            "4 letters, starts with C."
        ] 
    },
    25: { 
        question: "The first region draws to a close. The Witch demands: The person who makes it has no need for it; the person who buys it has no use for it. The person who uses it can neither see nor feel it. What is it?", 
        answer: "coffin", 
        hints: [
            "Carpenters build it from oak or pine for a solemn purpose.",
            "It rests six feet beneath the earth in a quiet graveyard.",
            "6 letters, starts with C."
        ] 
    },
    
    // --- REGION: Scorched Desert (Levels 26 - 50) ---
    26: { 
        question: "What has to be broken before you can use it?", 
        answer: "egg", 
        hints: [
            "It comes packaged in a fragile shell[cite: 10].",
            "A breakfast staple, scrambled, boiled, or baked into cakes[cite: 10].",
            "3 letters, starts with E."
        ] 
    },
    27: { 
        question: "What is full of holes, yet holds water without spilling a drop?", 
        answer: "sponge", 
        hints: [
            "A soft, porous tool found in kitchens and bathhouses[cite: 10].",
            "It swells and holds many times its weight in liquid[cite: 9, 10].",
            "6 letters, starts with S."
        ] 
    },
    28: { 
        question: "What runs all around a backyard or pasture, but never moves an inch?", 
        answer: "fence", 
        hints: [
            "It defines the border of an estate or garden[cite: 10].",
            "Constructed of timber posts, stone rails, or wire[cite: 10].",
            "5 letters, starts with F."
        ] 
    },
    29: { 
        question: "What has an endless supply of letters, but starts its day completely empty?", 
        answer: "mailbox", 
        hints: [
            "Couriers and post carriers visit it daily[cite: 10].",
            "It sits at the gate or doorway waiting for parchment and letters[cite: 10].",
            "7 letters, starts with M."
        ] 
    },
    30: { 
        question: "What kind of coat is always put on completely wet, yet dries into a solid shield?", 
        answer: "paint", 
        hints: [
            "Artists and decorators spread it with wide bristle brushes[cite: 10].",
            "It changes the color of palace walls, canvas, and woodwork[cite: 10].",
            "5 letters, starts with P."
        ] 
    },
    31: { 
        question: "What tree can you always carry in your own hand?", 
        answer: "palm", 
        hints: [
            "A tropical tree bearing sweet dates and coconuts[cite: 10].",
            "Also the inner surface of your hand between wrist and fingers[cite: 10].",
            "4 letters, starts with P."
        ] 
    },
    32: { 
        question: "What comes down from the grey clouds, but can never climb back up?", 
        answer: "rain", 
        hints: [
            "It patters across roof shingles and swells rivers after storms[cite: 9, 10].",
            "Farmers pray for it to nourish their dry crops[cite: 9, 10].",
            "4 letters, starts with R."
        ] 
    },
    33: { 
        question: "What word is spelled incorrectly in every single dictionary across the world?", 
        answer: "incorrectly", 
        hints: [
            "A clever linguistic trick hidden in plain sight[cite: 10].",
            "The riddle states the literal spelling within the question itself[cite: 10].",
            "11 letters, starts with I."
        ] 
    },
    34: { 
        question: "What has eyes that never see, and a tongue that never speaks or tastes?", 
        answer: "shoe", 
        hints: [
            "You lace it tight before walking across rocky roads[cite: 9, 10].",
            "The leather flap beneath the laces bears this anatomical name[cite: 9, 10].",
            "4 letters, starts with S."
        ] 
    },
    35: { 
        question: "What gets sharper and sharper the more you put it to use?", 
        answer: "brain", 
        hints: [
            "It resides inside your skull, working tirelessly behind your eyes[cite: 10].",
            "Solving logic trials, chess, and riddles keeps it in prime condition[cite: 9, 10].",
            "5 letters, starts with B."
        ] 
    },
    36: { 
        question: "What has a spine and covers, but no bones, flesh, or heartbeat?", 
        answer: "book", 
        hints: [
            "Scholars keep thousands lined upon wooden library shelves[cite: 9, 10].",
            "You turn its paper leaves to read tales of adventure and lore[cite: 9, 10].",
            "4 letters, starts with B."
        ] 
    },
    37: { 
        question: "What has a hard protective shell, but is neither insect, reptile, nor mollusk?", 
        answer: "nut", 
        hints: [
            "Foliage yields walnuts, chestnuts, acorns, and pecans[cite: 10].",
            "Woodland squirrels gather and bury them before winter arrives[cite: 10].",
            "3 letters, starts with N."
        ] 
    },
    38: { 
        question: "What can you break without ever lifting a finger or making a physical sound?", 
        answer: "promise", 
        hints: [
            "A solemn bond or verbal oath sealed between honorable people[cite: 9, 10].",
            "Failing to keep your word shatters it permanently[cite: 9, 10].",
            "7 letters, starts with P."
        ] 
    },
    39: { 
        question: "What is bought by the long yard, but worn solely by the foot?", 
        answer: "carpet", 
        hints: [
            "Merchants weave and sell it in rolled bolts of fabric[cite: 10].",
            "It blankets stone floors, stairs, and halls to keep feet warm[cite: 10].",
            "6 letters, starts with C."
        ] 
    },
    40: { 
        question: "The more you take away from it, the larger and deeper it grows. What is it?", 
        answer: "hole", 
        hints: [
            "Created when a spade digs into soft earth or fabric tears[cite: 9, 10].",
            "Removing soil only expands the empty space left behind[cite: 9, 10].",
            "4 letters, starts with H."
        ] 
    },
    41: { 
        question: "What has a nose, wings, and belly, but neither smells, flaps, nor eats?", 
        answer: "airplane", 
        hints: [
            "A metallic flying transport built to carry travelers above the clouds[cite: 10].",
            "Pilots navigate it along air currents between distant cities[cite: 10].",
            "8 letters, starts with A."
        ] 
    },
    42: { 
        question: "What can you clearly hear, but never see, touch, or hold in your hand?", 
        answer: "voice", 
        hints: [
            "It carries song, speech, whispers, and shouts from the throat[cite: 10].",
            "Chambers capture its acoustic resonance without keeping its form[cite: 9, 10].",
            "5 letters, starts with V."
        ] 
    },
    43: { 
        question: "Forward I am heavy, but backward I am not. What am I?", 
        answer: "ton", 
        hints: [
            "A massive imperial unit of weight equal to two thousand pounds[cite: 10].",
            "Read its three letters in reverse to reveal the word 'not'[cite: 10].",
            "3 letters, starts with T."
        ] 
    },
    44: { 
        question: "What has legs and a flat top, but cannot walk a single step?", 
        answer: "table", 
        hints: [
            "Found in banqueting halls, dining rooms, and council chambers[cite: 10].",
            "Feasts, parchment, and chessboards are spread across its surface[cite: 10].",
            "5 letters, starts with T."
        ] 
    },
    45: { 
        question: "What kind of room has no doors, no windows, no floor, and no ceiling?", 
        answer: "mushroom", 
        hints: [
            "A forest fungus with a stem and an umbrella-like cap[cite: 9, 10].",
            "Look closely at the final four letters of its common name[cite: 10].",
            "8 letters, starts with M."
        ] 
    },
    46: { 
        question: "What has an eye of white storm and a long tail of stardust blazing across space?", 
        answer: "comet", 
        hints: [
            "An icy celestial traveler orbiting the sun across centuries[cite: 9, 10].",
            "Halley's is among the most celebrated to streak across night skies[cite: 10].",
            "5 letters, starts with C."
        ] 
    },
    47: { 
        question: "What has keys, space, and letters, opens digital gates, but has no locks or rooms?", 
        answer: "keyboard", 
        hints: [
            "Typists press its QWERTY array to write manuscripts and code[cite: 10].",
            "It features an enter key, backspace, and a long central spacebar[cite: 10].",
            "8 letters, starts with K."
        ] 
    },
    48: { 
        question: "What carries ancient tales of kings and wars, yet cannot utter a single syllable?", 
        answer: "scroll", 
        hints: [
            "Scribes roll this parchment or papyrus document tight with ribbon[cite: 9].",
            "Unrolling it reveals handwritten decrees, maps, or arcane lore[cite: 9].",
            "6 letters, starts with S."
        ] 
    },
    49: { 
        question: "What is born in white fire, lives in boiling water, and vanishes the instant it cools?", 
        answer: "steam", 
        hints: [
            "Scalding vapor rising off kettles and boiling cauldrons[cite: 9, 10].",
            "Cool glass condenses it back into drops of liquid water[cite: 9, 10].",
            "5 letters, starts with S."
        ] 
    },
    50: { 
        question: "The second region trial concludes. The Witch demands: What is taken from a mine, shut in a wooden case, never released, yet used by every student?", 
        answer: "pencil", 
        hints: [
            "It holds a rod of dark graphite encased in cedar wood.",
            "Sharpening its tip allows writers and artists to sketch on paper.",
            "6 letters, starts with P."
        ] 
    },

    // --- REGION: Enchanted Forest (Levels 51 - 75) ---
    51: { 
        question: "What can pierce the hardest armor and break steel, yet leaves no wound and carries no blade?", 
        answer: "rust", 
        hints: [
            "It eats silently at neglected iron left in damp cellars.",
            "Flakes of brittle reddish-orange coat the metal as it corrodes.",
            "4 letters, starts with R."
        ] 
    },
    52: { 
        question: "What has a head in the evening, but wakes up headless in the morning?", 
        answer: "bed", 
        hints: [
            "You rest upon its mattress after a long journey.",
            "Its headboard stands tall against the chamber wall.",
            "3 letters, starts with B."
        ] 
    },
    53: { 
        question: "I have no flesh, feathers, scales, or bone, yet I have four fingers and a thumb. What am I?", 
        answer: "mitten", 
        hints: [
            "Knitted from thick wool to keep your hands warm in winter.",
            "Unlike a glove, it bundles four fingers together in a single pouch.",
            "6 letters, starts with M."
        ] 
    },
    54: { 
        question: "What goes up white and comes down yellow and gold?", 
        answer: "popcorn", 
        hints: [
            "Dry kernels heated over an open hearth or hot pan.",
            "It bursts with a loud snap and is tossed with melted butter.",
            "7 letters, starts with P."
        ] 
    },
    55: { 
        question: "I am always hungry and must be fed, but if you give me water I immediately die. What am I?", 
        answer: "fireplace", 
        hints: [
            "Built of brick or stone inside the hall to warm the castle.",
            "Logs are stacked inside its grate and burned down to embers.",
            "9 letters, starts with F."
        ] 
    },
    56: { 
        question: "What has a bark, but no bite, and stands firm in every tempest?", 
        answer: "tree", 
        hints: [
            "It grows tall from an acorn planted in the earth.",
            "Its rough wooden skin shields its trunk from the elements.",
            "4 letters, starts with T."
        ] 
    },
    57: { 
        question: "I have lakes with no water, mountains with no stone, and paths with no dirt. What am I?", 
        answer: "globe", 
        hints: [
            "A spherical model of the world resting on a scholar's desk.",
            "You spin it with a finger to survey continents and oceans.",
            "5 letters, starts with G."
        ] 
    },
    58: { 
        question: "What has a foot on each side and one right down the middle?", 
        answer: "yardstick", 
        hints: [
            "Carpenters and tailors use it to measure lengths of wood and cloth.",
            "It measures exactly three feet or thirty-six inches.",
            "9 letters, starts with Y."
        ] 
    },
    59: { 
        question: "What can you catch outside, but never throw back?", 
        answer: "sunburn", 
        hints: [
            "The price of standing too long under the blazing summer heat.",
            "It turns fair skin bright red and stings to the touch.",
            "7 letters, starts with S."
        ] 
    },
    60: { 
        question: "What has four legs in the morning, two legs at noon, and three legs in the evening?", 
        answer: "man", 
        hints: [
            "The ancient riddle posed to travelers by the Sphinx.",
            "Crawls as an infant, walks upright as an adult, and leans on a cane in old age.",
            "3 letters, starts with M."
        ] 
    },
    61: { 
        question: "What kind of band never plays a note of music or sings a tune?", 
        answer: "rubberband", 
        hints: [
            "An elastic loop used to bind rolls of parchment or bundles of coin.",
            "You stretch it around items to snap them securely together.",
            "10 letters, starts with R."
        ] 
    },
    62: { 
        question: "I shave every single day, yet my beard stays the exact same length. What am I?", 
        answer: "barber", 
        hints: [
            "A town craftsman wielding scissors, razors, and hot towels.",
            "He trims the hair and whiskers of other men all day long.",
            "6 letters, starts with B."
        ] 
    },
    63: { 
        question: "What has eighty-eight keys, but cannot open a single dungeon gate?", 
        answer: "harpsichord", 
        hints: [
            "An ancient plucked musical instrument played in royal courts.",
            "Predecessor to the modern piano, featuring ivory and ebony keys.",
            "11 letters, starts with H."
        ] 
    },
    64: { 
        question: "What flies without wings, cries without eyes, and howls without a mouth?", 
        answer: "cloud", 
        hints: [
            "It drifts across the azure sky, pushed by high-altitude gales.",
            "Dark thunderous masses drop heavy rain across the kingdom.",
            "5 letters, starts with C."
        ] 
    },
    65: { 
        question: "What has a single horn, but gives no milk and carries no knight?", 
        answer: "anvil", 
        hints: [
            "A heavy iron forging block resting inside a blacksmith's shop.",
            "The tapered, curved cone at its end is called its horn.",
            "5 letters, starts with A."
        ] 
    },
    66: { 
        question: "What has teeth, but cannot chew, and parts what was once joined?", 
        answer: "zipper", 
        hints: [
            "Interlocking metal or plastic teeth on coats and pouches.",
            "Pulling its slider up or down fastens or opens the fabric.",
            "6 letters, starts with Z."
        ] 
    },
    67: { 
        question: "I am light enough to float on water, but so heavy that the largest army cannot lift me. What am I?", 
        answer: "fog", 
        hints: [
            "A thick blanket of vapor hanging over lakes and marshlands at dawn.",
            "It obscures ships and castles alike without weighing a physical ounce.",
            "3 letters, starts with F."
        ] 
    },
    68: { 
        question: "What can you hold in your right hand, but never in your left?", 
        answer: "left-hand", 
        hints: [
            "Look down at your own two hands and try to grasp one with itself.",
            "Your left fingers cannot grasp the very limb they are attached to.",
            "9 letters (often typed LEFTHAND), starts with L."
        ] 
    },
    69: { 
        question: "What can run, but never walks, murmurs, but never talks, has a bed, but never sleeps?", 
        answer: "brook", 
        hints: [
            "A small, babbling stream of freshwater cutting through forest moss.",
            "Pebbles clatter along its bed as cold water rushes past.",
            "5 letters, starts with B."
        ] 
    },
    70: { 
        question: "What begins with T, ends with T, and has T in it all day long?", 
        answer: "teapot", 
        hints: [
            "Ceramic or iron vessel brewing dried leaves in boiling water.",
            "Look at the word itself: T-E-A-P-O-T.",
            "6 letters, starts with T."
        ] 
    },
    71: { 
        question: "What has a golden heart that never beats, surrounded by white petals?", 
        answer: "daisy", 
        hints: [
            "A common meadow wildflower blooming across sunny pastures.",
            "Lovers pluck its petals one by one to test their fortune.",
            "5 letters, starts with D."
        ] 
    },
    72: { 
        question: "What has a head that changes color when scratched?", 
        answer: "match", 
        hints: [
            "A slender splinter of wood tipped with sulfur and phosphorus.",
            "Striking it against a rough strip ignites a tiny flame.",
            "5 letters, starts with M."
        ] 
    },
    73: { 
        question: "I have no voice, but I can tell you all the wisdom of the world. What am I?", 
        answer: "library", 
        hints: [
            "A grand sanctuary filled with shelves, scrolls, and manuscripts.",
            "Scholars and mages study in silent halls under its vaulted arches.",
            "7 letters, starts with L."
        ] 
    },
    74: { 
        question: "What has a ring, but no finger, and chimes when someone arrives?", 
        answer: "doorbell", 
        hints: [
            "Mounted beside the front entrance of a manor or town home.",
            "Guests press or pull it to announce their presence to the host.",
            "8 letters, starts with D."
        ] 
    },
    75: { 
        question: "The third region gate demands: What is full when the sun is at its height, hollow at dusk, and vanishes entirely when you close your eyes?", 
        answer: "sight", 
        hints: [
            "One of the five fundamental senses granted to mortal beings.",
            "Without light, your eyes cannot grant you this perception.",
            "5 letters, starts with S."
        ] 
    },

    // --- REGION: Frozen Peaks (Levels 76 - 100) ---
    76: { 
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?", 
        answer: "m", 
        hints: [
            "Examine the spelling of the words rather than the passage of time.",
            "Count how many times this specific character appears in each word.",
            "A single letter: M."
        ] 
    },
    77: { 
        question: "I have no feet, no hands, and no wings, yet I climb higher than the tallest castle tower. What am I?", 
        answer: "smoke", 
        hints: [
            "Born from burning coals, hearths, or dying campfires.",
            "It drifts upward through chimneys and disperses into the grey sky.",
            "5 letters, starts with S."
        ] 
    },
    78: { 
        question: "What can you serve to your guests, but must never eat yourself?", 
        answer: "tennisball", 
        hints: [
            "A fuzzy yellow sphere struck back and forth with stringed rackets.",
            "The opening hit to start a rally bears this culinary name.",
            "10 letters (often typed TENNISBALL), starts with T."
        ] 
    },
    79: { 
        question: "What can leap higher than a castle or mountain peak?", 
        answer: "flea", 
        hints: [
            "A tiny wingless insect known for incredible springing jumps.",
            "Castles and mountains cannot jump at all, making the comparison a clever trick.",
            "4 letters, starts with F."
        ] 
    },
    80: { 
        question: "What has a bark, four legs, and wags its tail when its master returns?", 
        answer: "dog", 
        hints: [
            "A faithful companion kept by shepherds, hunters, and kings.",
            "Known as humanity's most loyal four-legged friend.",
            "3 letters, starts with D."
        ] 
    },
    81: { 
        question: "What has a lock on every side, yet keeps no gold or prisoner inside?", 
        answer: "canal", 
        hints: [
            "An artificial waterway cut through land for barges and ships.",
            "Enclosed chambers with gates raise and lower boats between water levels.",
            "5 letters, starts with C."
        ] 
    },
    82: { 
        question: "I am taken from a mine and shut up in an iron cage, from which I am never let out, yet I am used by almost every person. What am I?", 
        answer: "coal", 
        hints: [
            "A dark, combustible black rock dug out of subterranean tunnels.",
            "Blacksmiths and locomotives burn it to produce scorching heat.",
            "4 letters, starts with C."
        ] 
    },
    83: { 
        question: "What can you hold without ever touching it with your physical hands?", 
        answer: "conversation", 
        hints: [
            "An exchange of thoughts, ideas, and words between two people.",
            "You engage in it across dinner tables or council chambers.",
            "12 letters, starts with C."
        ] 
    },
    84: { 
        question: "What kind of room can you eat that is filled with mushrooms, broth, and meats?", 
        answer: "stew", 
        hints: [
            "A hearty, savory dish simmered slowly over a low hearth fire.",
            "Eaten with a wooden spoon and crusty bread on a cold night.",
            "4 letters, starts with S."
        ] 
    },
    85: { 
        question: "What has a crown, but no kingdom, and scales, but no skin?", 
        answer: "pineapple", 
        hints: [
            "A sweet tropical fruit with spiky geometric skin.",
            "Its tuft of stiff leaves on top resembles a royal headdress.",
            "9 letters, starts with P."
        ] 
    },
    86: { 
        question: "What has sixty seconds inside its heart, yet never beats or breathes?", 
        answer: "minute", 
        hints: [
            "A fundamental unit of measured time.",
            "Sixty of them together make up a complete hour on the clock.",
            "6 letters, starts with M."
        ] 
    },
    87: { 
        question: "I have no voice, but I scream when you scald me with boiling water. What am I?", 
        answer: "kettle", 
        hints: [
            "A metal pot with a spout placed atop a stove or hearth.",
            "It whistles loudly when the water inside reaches a rolling boil.",
            "6 letters, starts with K."
        ] 
    },
    88: { 
        question: "What has a bridge of bone and two windows that open only to the world?", 
        answer: "nose", 
        hints: [
            "Prominent feature sitting directly between your eyes and mouth.",
            "Its nostrils allow you to inhale air and catch scents.",
            "4 letters, starts with N."
        ] 
    },
    89: { 
        question: "What has a mouth that never smiles, a bed that never warms, and banks with no coins?", 
        answer: "delta", 
        hints: [
            "A triangular tract of sediment deposited at the mouth of a river.",
            "Channels branch out into the sea like the Greek letter of its name.",
            "5 letters, starts with D."
        ] 
    },
    90: { 
        question: "What gets sharper the more you strike it against stone or steel?", 
        answer: "chisel", 
        hints: [
            "A long metal cutting tool with a beveled edge.",
            "Masons and sculptors hammer it to carve statues out of marble.",
            "6 letters, starts with C."
        ] 
    },
    91: { 
        question: "What can you make that no one—not even you—can ever see?", 
        answer: "noise", 
        hints: [
            "An audible sound that vibrates through the air into your ears.",
            "Banging a drum or dropping iron pots creates an unpleasant burst of it.",
            "5 letters, starts with N."
        ] 
    },
    92: { 
        question: "What is white when it is dirty, and dark black when it is clean?", 
        answer: "slate", 
        hints: [
            "A dark grey stone board used for writing lessons with chalk.",
            "Wiping away the chalk marks restores its clean dark surface.",
            "5 letters, starts with S."
        ] 
    },
    93: { 
        question: "What kind of cup cannot hold a single drop of liquid?", 
        answer: "cupcake", 
        hints: [
            "A sweet, individual pastry baked inside a corrugated paper liner.",
            "Frosted with sugary cream and eaten as a dessert treat.",
            "7 letters, starts with C."
        ] 
    },
    94: { 
        question: "What has a ring around its body, but is neither a finger, planet, nor bell?", 
        answer: "tree-ring", 
        hints: [
            "Found inside a sawed wooden stump or trunk.",
            "Foresters count them to determine how many years the oak has lived.",
            "Typed as RING or TREERING (8 letters, starts with T)."
        ] 
    },
    95: { 
        question: "What has a bow, but shoots no arrows, and wears seven vibrant ribbons?", 
        answer: "rainbow", 
        hints: [
            "An atmospheric arch appearing when sunlight meets passing rain showers.",
            "Its colorful bands span from crimson red down to deep violet.",
            "7 letters, starts with R."
        ] 
    },
    96: { 
        question: "I can be flipped, spent, saved, and earned, but if you drop me on edge I might roll away. What am I?", 
        answer: "nickel", 
        hints: [
            "A common metallic coin worth five cents in currency.",
            "Stamped with portraits and milled along its silver-colored rim.",
            "6 letters, starts with N."
        ] 
    },
    97: { 
        question: "What has four wheels and flies, yet is neither a chariot, carriage, nor bird?", 
        answer: "garbagetruck", 
        hints: [
            "A heavy utility vehicle rolling down municipal streets at dawn.",
            "It collects discarded rubbish, attracting buzzing houseflies.",
            "12 letters (often typed GARBAGETRUCK), starts with G."
        ] 
    },
    98: { 
        question: "What can fill a room with melody, but has no throat, lungs, or tongue?", 
        answer: "flute", 
        hints: [
            "A slender woodwind instrument held horizontally across the lips.",
            "Covering its finger holes shapes the pitch of flowing breath.",
            "5 letters, starts with F."
        ] 
    },
    99: { 
        question: "What has a face that never smiles, hands that never hold, and ticks without a heart?", 
        answer: "watch", 
        hints: [
            "A compact timepiece strapped to your wrist with leather or gold.",
            "You glance at its glass face to check if you are late for an appointment.",
            "5 letters, starts with W."
        ] 
    },
    100: { 
        question: "The fourth region reaches its climax. The Witch speaks: What is always coming, but never actually arrives today?", 
        answer: "tomorrow", 
        hints: [
            "The day that lies just beyond the stroke of midnight.",
            "When that dawn finally breaks, it is called today instead.",
            "8 letters, starts with T."
        ] 
    },

    // --- REGION: Lost Ruins (Levels 101 - 125) ---
    101: { 
        question: "What has a lock, but no door, and holds back a river until it is turned?", 
        answer: "dam", 
        hints: [
            "A massive civil engineering barrier built across a deep river canyon.",
            "Hydroelectric power stations and reservoirs depend entirely upon it.",
            "3 letters, starts with D."
        ] 
    },
    102: { 
        question: "What can you break without dropping, hitting, or touching it with your hands?", 
        answer: "trust", 
        hints: [
            "The foundation of friendship, loyalty, and honest oaths.",
            "Deceit, lies, and betrayal shatter it beyond repair.",
            "5 letters, starts with T."
        ] 
    },
    103: { 
        question: "What goes up and never, ever comes back down as birthdays pass?", 
        answer: "age", 
        hints: [
            "It measures the years you have lived upon this earth.",
            "With every candle blown out on your cake, this number climbs.",
            "3 letters, starts with A."
        ] 
    },
    104: { 
        question: "What has two hands and a round face, but no legs or arms?", 
        answer: "compass", 
        hints: [
            "Navigators rely on its magnetic needle to find true north at sea.",
            "Also the name of the two-legged drafting tool used to draw perfect circles.",
            "7 letters, starts with C."
        ] 
    },
    105: { 
        question: "What kind of coat can only be put on when dry, but keeps you warm in the howling snow?", 
        answer: "jacket", 
        hints: [
            "An everyday piece of outerwear buttoned or zipped up to your chin.",
            "Crafted with down, wool, or leather to fend off bitter frost.",
            "6 letters, starts with J."
        ] 
    },
    106: { 
        question: "What has a ring of iron and an anchor of stone, yet can never marry?", 
        answer: "well", 
        hints: [
            "A deep vertical shaft sunk into the earth to tap groundwater.",
            "Villagers lower a wooden bucket on a crank to draw fresh water.",
            "4 letters, starts with W."
        ] 
    },
    107: { 
        question: "What can travel through glass without breaking a single pane?", 
        answer: "sunbeam", 
        hints: [
            "A radiant ray of golden warmth passing directly through clean windows.",
            "Cast across the floorboards on bright, cloudless mornings.",
            "7 letters, starts with S."
        ] 
    },
    108: { 
        question: "What has a head that weeps wax tears when lit in the dark?", 
        answer: "taper", 
        hints: [
            "A slender, elegant wax candle set in a polished dining candelabra.",
            "Its dripping wax hardens as the wick burns down through dinner.",
            "5 letters, starts with T."
        ] 
    },
    109: { 
        question: "What gets smaller the more you wash your hands with it at the basin?", 
        answer: "soap", 
        hints: [
            "Lathers into aromatic white foam when rubbed with warm water.",
            "Gradually wears down to a thin sliver before disappearing completely.",
            "4 letters, starts with S."
        ] 
    },
    110: { 
        question: "What has a mouth that never speaks, but can swallow whole ships when the sea churns?", 
        answer: "whirlpool", 
        hints: [
            "A swirling maritime vortex born where clashing tidal currents collide.",
            "Mythical sailors feared Charybdis for dragging vessels down to the depths.",
            "9 letters, starts with W."
        ] 
    },
    111: { 
        question: "What can you catch in the woods without running, but can never carry home in a sack?", 
        answer: "splinter", 
        hints: [
            "A tiny, sharp fragment of wood that embeds itself deep beneath your skin.",
            "Extracted carefully with a pair of fine steel tweezers.",
            "8 letters, starts with S."
        ] 
    },
    112: { 
        question: "What has a golden tooth and bites through timber, but has no stomach or tongue?", 
        answer: "saw", 
        hints: [
            "Carpenters push and pull its serrated steel blade back and forth.",
            "Its sharp teeth turn sturdy oak logs into neat firewood and planks.",
            "3 letters, starts with S."
        ] 
    },
    113: { 
        question: "What can be swallowed by pride, yet tastes bitter on the tongue?", 
        answer: "defeat", 
        hints: [
            "The hard lesson learned when your strategy collapses on the field.",
            "The opposite of triumph and glorious victory.",
            "6 letters, starts with D."
        ] 
    },
    114: { 
        question: "What has a bridge of wood, six silver wires, and sings when stroked?", 
        answer: "guitar", 
        hints: [
            "A classic acoustic fretted instrument strummed by bards and musicians.",
            "Its soundhole resonates when metal or nylon strings vibrate.",
            "6 letters, starts with G."
        ] 
    },
    115: { 
        question: "What has an eye that never blinks, guiding ships away from jagged rocks?", 
        answer: "lighthouse", 
        hints: [
            "A towering stone beacon standing tall on a dangerous coastal headland.",
            "A revolving lens sends a powerful beam sweeping across dark waves.",
            "10 letters, starts with L."
        ] 
    },
    116: { 
        question: "What can you steal with your eyes that leaves the owner none the poorer?", 
        answer: "glance", 
        hints: [
            "A momentary, fleeting look cast in someone's direction.",
            "Much quicker than a prolonged stare or deep gaze.",
            "6 letters, starts with G."
        ] 
    },
    117: { 
        question: "What has an iron tongue that strikes a bell at every passing hour?", 
        answer: "clapper", 
        hints: [
            "The heavy metal rod suspended inside the mouth of a bronze bell.",
            "Swinging back and forth, it strikes the bell's lip to ring out tones.",
            "7 letters, starts with C."
        ] 
    },
    118: { 
        question: "What is lighter than a leaf, but cannot be picked up once dropped upon the ground?", 
        answer: "shadow", 
        hints: [
            "Cast across dirt and paving stones whenever an object blocks sunlight.",
            "No human hand can grasp or lift its flat dark outline.",
            "6 letters, starts with S."
        ] 
    },
    119: { 
        question: "What kind of paper never bears written ink, but covers every royal table?", 
        answer: "napkin", 
        hints: [
            "Tucked into a collar or folded neatly beside the banquet plate.",
            "Used to dab lips and wipe fingers clean between courses.",
            "6 letters, starts with N."
        ] 
    },
    120: { 
        question: "What has an emerald heart, a leafy crown, and can live for a thousand years?", 
        answer: "cedar", 
        hints: [
            "A fragrant evergreen conifer prized for its aromatic, durable wood.",
            "Its wood naturally repels moths inside storage chests and wardrobes.",
            "5 letters, starts with C."
        ] 
    },
    121: { 
        question: "What has a single leg, a canopy of green, and weeps in the autumn gale?", 
        answer: "willow", 
        hints: [
            "A graceful tree with long, drooping boughs that brush riverbanks.",
            "Known in folklore as the weeping variety beside quiet waters.",
            "6 letters, starts with W."
        ] 
    },
    122: { 
        question: "What has a chain of links, but is neither a prisoner, anchor, nor forge?", 
        answer: "necklace", 
        hints: [
            "Jewelry draped around the throat, fashioned from gold, silver, or pearls.",
            "Fastened with a tiny clasp behind the neck.",
            "8 letters, starts with N."
        ] 
    },
    123: { 
        question: "What can you crack with a single word, yet cannot fix with hammer and nails?", 
        answer: "joke", 
        hints: [
            "A humorous remark, pun, or witty story crafted to spark laughter.",
            "Jesters and bards tell them to amuse the royal court.",
            "4 letters, starts with J."
        ] 
    },
    124: { 
        question: "What has eight legs, spins gossamer bridges, and sleeps in the corner?", 
        answer: "spider", 
        hints: [
            "An eight-legged arachnid weaving sticky geometric webs in dark corners.",
            "It waits patiently for flies and mosquitoes to become ensnared.",
            "6 letters, starts with S."
        ] 
    },
    125: { 
        question: "The fifth region concludes. What has teeth of diamond, but eats no meat, carving paths through solid granite?", 
        answer: "drill", 
        hints: [
            "A rotary boring tool tipped with hard industrial gemstones.",
            "Miners and stonemasons use it to bore deep holes into bedrock.",
            "5 letters, starts with D."
        ] 
    },
    
    // --- REGION: Firelands (Levels 126 - 150) ---
    126: { 
        question: "What has a red mouth that swallows dry logs, yet chokes to death on pure water?", 
        answer: "bonfire", 
        hints: [
            "A large, roaring outdoor blaze built for celebrations or warmth.",
            "Campers and villagers gather around its crackling sparks at night.",
            "7 letters, starts with B."
        ] 
    },
    127: { 
        question: "What has a chimney for a hat and puffs white clouds across the iron rails?", 
        answer: "locomotive", 
        hints: [
            "A powerful steam-powered engine pulling wagons along a railway.",
            "Fueled by coal and water, whistling loudly across valleys.",
            "10 letters, starts with L."
        ] 
    },
    128: { 
        question: "What can you light without a spark, burn without a flame, and nurse until it heals?", 
        answer: "fever", 
        hints: [
            "An abnormal spike in body temperature when fighting sickness.",
            "Makes your forehead hot to the touch while you shiver under blankets.",
            "5 letters, starts with F."
        ] 
    },
    129: { 
        question: "What has a handle and bristles, but never sweeps the hearth or stone floors?", 
        answer: "paintbrush", 
        hints: [
            "An artist dips its fine hairs into colorful pigments.",
            "Used to stroke oil and watercolor across stretched canvas.",
            "10 letters, starts with P."
        ] 
    },
    130: { 
        question: "What has four legs, a single back, and invites you to rest your weary bones?", 
        answer: "chair", 
        hints: [
            "Every tavern, study, and dining hall is furnished with them.",
            "You pull it up to the table to sit down comfortably.",
            "5 letters, starts with C."
        ] 
    },
    131: { 
        question: "What has a tongue that tastes no honey, but laps water from a terracotta bowl?", 
        answer: "dog", 
        hints: [
            "A loyal hound guarding the gates and hunting in the woods.",
            "Wags its tail eagerly when its master returns home.",
            "3 letters, starts with D."
        ] 
    },
    132: { 
        question: "What falls down the mountain crag without getting hurt, yet shatters on stone?", 
        answer: "waterfall", 
        hints: [
            "A rushing cascade where a river leaps off a sheer rock ledge.",
            "Spray and foam rise like mist from the plunge pool below.",
            "9 letters, starts with W."
        ] 
    },
    133: { 
        question: "What kind of key turns in no lock, but opens every bottle of fine vintage?", 
        answer: "corkscrew", 
        hints: [
            "A spiral steel tool twisted down into the neck of a wine bottle.",
            "Pulling its lever draws out the wooden plug with a satisfying pop.",
            "9 letters, starts with C."
        ] 
    },
    134: { 
        question: "What has an eye that guides the thread, yet weeps no salty tears?", 
        answer: "bodkin", 
        hints: [
            "A blunt, thick needle with a large eye used by leatherworkers.",
            "Draws cords, ribbons, and leather thongs through heavy fabric.",
            "6 letters, starts with B."
        ] 
    },
    135: { 
        question: "What can be struck with fury, yet feels no pain and never bleeds?", 
        answer: "matchstick", 
        hints: [
            "A thin wooden sliver tipped with flammable sulfur paste.",
            "Rubbing it against the rough strip produces an instant flame.",
            "10 letters, starts with M."
        ] 
    },
    136: { 
        question: "What has two hands that meet twice a day, but never hold or greet each other?", 
        answer: "noon", 
        hints: [
            "The exact midpoint of the day when the sun reaches its zenith.",
            "Both hands of the clock align straight up at twelve.",
            "4 letters, starts with N."
        ] 
    },
    137: { 
        question: "What has an iron skin and eats charcoal, pressing smooth the wrinkles of cloth?", 
        answer: "flatiron", 
        hints: [
            "A heavy metal tool heated on a hearth or filled with glowing embers.",
            "Tailors glide its hot base over linen to flatten every crease.",
            "8 letters, starts with F."
        ] 
    },
    138: { 
        question: "What has a crust and a core, but is neither a pie, bread, nor fruit?", 
        answer: "earth", 
        hints: [
            "The third planet from the sun and home to all mortal kingdoms.",
            "Its rocky surface supports mountains, forests, and deep blue seas.",
            "5 letters, starts with E."
        ] 
    },
    139: { 
        question: "What has a crown of white froth and crashes along the golden shore?", 
        answer: "wave", 
        hints: [
            "A rolling swell of ocean water driven forward by sea gales.",
            "Surfers ride its crest as it breaks upon the sandy beach.",
            "4 letters, starts with W."
        ] 
    },
    140: { 
        question: "What can you tie with words, seal with a ring, and break with a deed?", 
        answer: "marriage", 
        hints: [
            "A sacred union celebrated with rings, vows, and grand banquets.",
            "Binds two hearts together under the laws of the realm.",
            "8 letters, starts with M."
        ] 
    },
    141: { 
        question: "What has a coat of spiky quills that guards it from the wolf's bite?", 
        answer: "porcupine", 
        hints: [
            "A slow-moving woodland rodent covered in sharp defensive armor.",
            "Rolls into a prickly ball when predators try to attack.",
            "9 letters, starts with P."
        ] 
    },
    142: { 
        question: "What has a golden yolk, but no chick inside, smiling in the summer sky?", 
        answer: "sun", 
        hints: [
            "The radiant yellow star that banishes night from the realm.",
            "Rises in the east to warm the fields and sets in the west.",
            "3 letters, starts with S."
        ] 
    },
    143: { 
        question: "What has an arch that spans the canyon, but was built without masonry or wood?", 
        answer: "caterpillar", 
        hints: [
            "A creeping larva that loops its fuzzy back as it inches along leaves.",
            "Spins a silken chrysalis before transforming into a butterfly.",
            "11 letters, starts with C."
        ] 
    },
    144: { 
        question: "What can you catch in your open palm, but melts away before you can close your fist?", 
        answer: "snowflake", 
        hints: [
            "A delicate hexagonal crystal of frozen water drifting from grey skies.",
            "Your body's warmth turns its fragile white lace to water in seconds.",
            "9 letters, starts with S."
        ] 
    },
    145: { 
        question: "What has a blade that cuts grass, but is neither a scythe, knife, nor sword?", 
        answer: "lawnmower", 
        hints: [
            "A wheeled machine pushed across courtyards to trim the green turf.",
            "Whirling blades shave the grass to an even, tidy height.",
            "9 letters, starts with L."
        ] 
    },
    146: { 
        question: "What has an ear that hears no sound, but yields sweet golden kernels to eat?", 
        answer: "corn", 
        hints: [
            "A tall cereal grass wrapped in pale green husks and golden silk.",
            "Roasted over hot embers or ground into flour for cornbread.",
            "4 letters, starts with C."
        ] 
    },
    147: { 
        question: "What has a handle and bowl, but feeds on soup rather than cooking it?", 
        answer: "ladle", 
        hints: [
            "A deep, long-handled spoon used by the castle cook.",
            "Dips into bubbling stew pots to fill the bowls of hungry knights.",
            "5 letters, starts with L."
        ] 
    },
    148: { 
        question: "What runs around the town without feet, and holds every house in its embrace?", 
        answer: "street", 
        hints: [
            "A paved thoroughfare lined with shops, cobblestones, and lampposts.",
            "Horses, carts, and townspeople travel along its route daily.",
            "6 letters, starts with S."
        ] 
    },
    149: { 
        question: "What can you lose in the dark that you never possessed with your fingers?", 
        answer: "temper", 
        hints: [
            "Your patience and calm emotional composure.",
            "When provoked by wicked tricks, a hasty person easily drops it.",
            "6 letters, starts with T."
        ] 
    },
    150: { 
        question: "The sixth region reaches its crest. The Witch questions: What can be measured, but has no length, breadth, or thickness?", 
        answer: "temperature", 
        hints: [
            "Gauged with a mercury thermometer tube of glass.",
            "Tells how blistering hot or freezing cold the weather has become.",
            "11 letters, starts with T."
        ] 
    },

    // --- REGION: Shadow Realm (Levels 151 - 175) ---
    151: { 
        question: "What has a head of golden foam, an amber body, and is poured into heavy glass steins?", 
        answer: "ale", 
        hints: [
            "A fermented malt beverage served in every bustling tavern.",
            "Tavern keepers tap wooden casks to fill mugs for celebrating patrons.",
            "3 letters, starts with A."
        ] 
    },
    152: { 
        question: "What has a silver tongue that unrolls across the road, measuring distance for the builder?", 
        answer: "tapemeasure", 
        hints: [
            "A spring-loaded steel ribbon coiled inside a small pocket case.",
            "Carpenters pull its marked yellow or metal strip to check lengths in inches and feet.",
            "11 letters, starts with T."
        ] 
    },
    153: { 
        question: "What has no lungs, but howls through the keyhole on a pitch-black stormy night?", 
        answer: "draft", 
        hints: [
            "A sneaky, cold current of air finding its way through tiny door gaps.",
            "It flickers the flame of a nearby candle and chills the room.",
            "5 letters, starts with D."
        ] 
    },
    154: { 
        question: "What can you crack open on a skillet, fry with butter, and flip with a spatula?", 
        answer: "omelet", 
        hints: [
            "A savory breakfast dish made by beating eggs and cooking them flat.",
            "Often folded in half over melted cheese, herbs, and diced vegetables.",
            "6 letters, starts with O."
        ] 
    },
    155: { 
        question: "What has an emerald shell, crawls with sluggish patience, and pulls its head inside when threatened?", 
        answer: "tortoise", 
        hints: [
            "A land-dwelling reptile famous in fables for defeating the boastful hare.",
            "Retreats inside its domed bony carapace for total protection.",
            "8 letters, starts with T."
        ] 
    },
    156: { 
        question: "What has a spine of twisted wax that drowns in its own golden tears?", 
        answer: "wick", 
        hints: [
            "The braided cotton cord running through the center of a tallow candle.",
            "Holding a flame to its tip keeps the lantern glowing in the dark.",
            "4 letters, starts with W."
        ] 
    },
    157: { 
        question: "What kind of dish has two wheels, handlebars, and takes you across town without a horse?", 
        answer: "bicycle", 
        hints: [
            "A pedal-driven two-wheeled transport with rubber tires and a chain.",
            "Riders balance upright and ring a little bell on the handlebars.",
            "7 letters, starts with B."
        ] 
    },
    158: { 
        question: "What has a hood of iron, an engine for a heart, and rolls on four rubber shoes?", 
        answer: "automobile", 
        hints: [
            "A motor carriage that displaced wagons on modern roads.",
            "Driven by a steering wheel, headlights, and an accelerator pedal.",
            "10 letters, starts with A."
        ] 
    },
    159: { 
        question: "What can you spill on the counter that ruins no cloth, but sparks wild castle gossip?", 
        answer: "beans", 
        hints: [
            "A common legume harvested from pods, dried, and simmered in pots.",
            "The idiom means to accidentally reveal hidden secrets or surprises.",
            "5 letters, starts with B."
        ] 
    },
    160: { 
        question: "What has two sharp steel blades joined at the waist that glide through silk and paper?", 
        answer: "scissors", 
        hints: [
            "A household cutting tool with two loop handles for your fingers.",
            "Tailors and seamstresses use it to cut patterns and trim thread.",
            "8 letters, starts with S."
        ] 
    },
    161: { 
        question: "What can you catch in the meadow that flutters with painted wings, but never sings a note?", 
        answer: "butterfly", 
        hints: [
            "An insect with colorful, powdery wings that drinks nectar from blossoms.",
            "Began its life creeping along twigs as a leaf-eating caterpillar.",
            "9 letters, starts with B."
        ] 
    },
    162: { 
        question: "What has a wooden handle, a heavy iron wedge, and splits logs with a single swing?", 
        answer: "axe", 
        hints: [
            "Woodcutters balance its handle to chop timber in the deep forest.",
            "A sharp steel edge drives directly into the grain of tree stumps.",
            "3 letters, starts with A."
        ] 
    },
    163: { 
        question: "What has a neck of carved maple, four steel strings, and rests under the player's chin?", 
        answer: "violin", 
        hints: [
            "A graceful classical wooden instrument played with a horsehair bow.",
            "Orchestras and folk fiddlers fill halls with its sweet high melodies.",
            "6 letters, starts with V."
        ] 
    },
    164: { 
        question: "What can you dig from the earth that looks like dirty stones, but boils into creamy mash?", 
        answer: "potato", 
        hints: [
            "A staple root vegetable grown under the soil with leafy stems above.",
            "Baked, roasted, or cut into thin fries with a pinch of salt.",
            "6 letters, starts with P."
        ] 
    },
    165: { 
        question: "What has a roof of shingles, four glass walls, and grows tomatoes in the dead of winter?", 
        answer: "greenhouse", 
        hints: [
            "A sunlit glass building that traps solar warmth for delicate plants.",
            "Botanists and gardeners cultivate rare seedlings inside its humid air.",
            "10 letters, starts with G."
        ] 
    },
    166: { 
        question: "What has an eye that peers through deep space, bringing distant galaxies into view?", 
        answer: "telescope", 
        hints: [
            "An optical tube fitted with curved glass lenses or reflective mirrors.",
            "Astronomers mount it on high observatory towers to gaze at planets.",
            "9 letters, starts with T."
        ] 
    },
    167: { 
        question: "What can you crack between your thumbs that hides sweet golden meat inside a woody shell?", 
        answer: "walnut", 
        hints: [
            "A craggy tree nut with a wrinkled shell that looks remarkably like a tiny brain.",
            "Cracked open beside winter fires and baked into holiday bread.",
            "6 letters, starts with W."
        ] 
    },
    168: { 
        question: "What has a brass horn that points upward, spinning black vinyl discs to play forgotten songs?", 
        answer: "phonograph", 
        hints: [
            "An antique sound reproduction player with a winding hand crank.",
            "A tiny needle traces groove lines to play acoustic recordings.",
            "10 letters, starts with P."
        ] 
    },
    169: { 
        question: "What has a leather saddle, pedal stirrups, and carries two travelers in tandem?", 
        answer: "tandem", 
        hints: [
            "A bicycle built for two riders pedaling together in unison.",
            "Features two sets of handlebars and pedals on a stretched frame.",
            "6 letters, starts with T."
        ] 
    },
    170: { 
        question: "What can you blow through a reed pipe that creates shimmering soap domes floating on air?", 
        answer: "bubble", 
        hints: [
            "A thin, fragile sphere of soapy liquid trapping a pocket of breath.",
            "Shimmers with swirling rainbow colors before popping against grass.",
            "6 letters, starts with B."
        ] 
    },
    171: { 
        question: "What has a handle of turned horn, five steel prongs, and tosses sweet meadow hay?", 
        answer: "pitchfork", 
        hints: [
            "A long wooden agricultural tool used in barns and stables.",
            "Farmers lift and stack dried bundles of straw with its long tines.",
            "9 letters, starts with P."
        ] 
    },
    172: { 
        question: "What has a dial that sets the heat, a glass door, and bakes golden loaves of sourdough?", 
        answer: "oven", 
        hints: [
            "An insulated cooking chamber in the castle kitchen or bakery.",
            "Bakers slide trays of dough inside to rise into crusty bread.",
            "4 letters, starts with O."
        ] 
    },
    173: { 
        question: "What can you thread through eyelet holes, pull tight across your boots, and knot with a bow?", 
        answer: "shoelace", 
        hints: [
            "A woven fabric cord with plastic aglet tips at both ends.",
            "Tying it neatly keeps your boots firmly on your feet during long marches.",
            "8 letters, starts with S."
        ] 
    },
    174: { 
        question: "What has a cage of bone and feathers, repeating every swear word overheard in the tavern?", 
        answer: "parrot", 
        hints: [
            "A brightly colored tropical bird with a curved hook bill.",
            "Famous for mimicking human speech and perching on a pirate's shoulder.",
            "6 letters, starts with P."
        ] 
    },
    175: { 
        question: "The seventh region closes. The Witch challenges: What has a face that tells the day of the month, but has no hands, gears, or bells?", 
        answer: "calendar", 
        hints: [
            "A printed grid of days, weeks, and months hung on the study wall.",
            "You cross off boxes with an ink quill as each day passes by.",
            "8 letters, starts with C."
        ] 
    },

    // --- REGION: Dragonlands (Levels 176 - 200) ---
    176: { 
        question: "What has a serrated steel tongue, chews through timber, and leaves a mound of sawdust behind?", 
        answer: "chainsaw", 
        hints: [
            "A motorized lumberjack tool powered by fuel or electric charge.",
            "Its whirling toothed chain bites through fallen forest trunks in seconds.",
            "8 letters, starts with C."
        ] 
    },
    177: { 
        question: "What has a head of brass, bristles of stiff wire, and cleans rusted pots until they shine?", 
        answer: "wirebrush", 
        hints: [
            "A sturdy scrubbing tool used in smithies and sculleries.",
            "Scrapes heavy carbon, paint, and crust from iron grates.",
            "9 letters, starts with W."
        ] 
    },
    178: { 
        question: "What can you tie around your waist that holds your trousers high without buckle or latch?", 
        answer: "sash", 
        hints: [
            "A wide strip of silken or embroidered cloth draped about the hips.",
            "Worn with ceremonial robes, pirate garb, and officer uniforms.",
            "4 letters, starts with S."
        ] 
    },
    179: { 
        question: "What has four wheels, a canvas hood, and rattled across the untamed frontier with pioneer families?", 
        answer: "wagon", 
        hints: [
            "A sturdy wooden cart hauled by teams of oxen or draft horses.",
            "Conestoga wagons traversed rocky prairie trails for months.",
            "5 letters, starts with W."
        ] 
    },
    180: { 
        question: "What has an ivory keyboard, pedal levers, and grand wings propped open for the maestro?", 
        answer: "grandpiano", 
        hints: [
            "The premier concert instrument featured in symphony auditoriums.",
            "Its long horizontal wooden lid reflects the stage footlights.",
            "10 letters, starts with G."
        ] 
    },
    181: { 
        question: "What has a neck of silver, a globe of blown glass, and keeps storms off the lantern flame?", 
        answer: "chimney", 
        hints: [
            "The clear cylindrical glass sleeve resting atop an oil lamp.",
            "Shields the burning wick from gales while channeling air upward.",
            "7 letters, starts with C."
        ] 
    },
    182: { 
        question: "What can you pop in the hot pan, toss with sea salt, and crunch by the handful at the theater?", 
        answer: "popcorn", 
        hints: [
            "Dried maize kernels exploding into white puffs under steady heat.",
            "Sold in paper buckets drenched with melted butter.",
            "7 letters, starts with P."
        ] 
    },
    183: { 
        question: "What has a single iron prong and an anchor hook, securing cattle inside the pasture pen?", 
        answer: "latch", 
        hints: [
            "A hinged metal bar dropped into a notch to keep gates closed.",
            "Lifting it with your thumb swings the paddock gate wide open.",
            "5 letters, starts with L."
        ] 
    },
    184: { 
        question: "What has a leather pouch, elastic bands, and launches pebbles whistling toward targets?", 
        answer: "slingshot", 
        hints: [
            "A Y-shaped wooden or steel fork held firmly in one hand.",
            "Children draw back its rubber strips to shoot river stones.",
            "9 letters, starts with S."
        ] 
    },
    185: { 
        question: "What can you roll across green felt that ricochets with a sharp clack into corner pockets?", 
        answer: "billiard", 
        hints: [
            "A hard resin sphere struck with cue sticks on a pool table.",
            "Numbered balls striped and solid rolling across velvet rails.",
            "8 letters, starts with B."
        ] 
    },
    186: { 
        question: "What has a handle of turned ash, a flat steel head, and pounds iron stakes into the earth?", 
        answer: "sledgehammer", 
        hints: [
            "A heavy two-handed demolition mallet swung with full body force.",
            "Used to drive railroad spikes and shatter stubborn masonry.",
            "12 letters, starts with S."
        ] 
    },
    187: { 
        question: "What has an eye of brass that fastens tight, holding cloaks together in the wind?", 
        answer: "hook", 
        hints: [
            "A curved fastener paired with a small matching wire loop.",
            "Tailors stitch it onto collars and corsets to keep seams shut.",
            "4 letters, starts with H."
        ] 
    },
    188: { 
        question: "What can you spread with a silver knife that melts over hot scones and morning toast?", 
        answer: "marmalade", 
        hints: [
            "A sweet, tangy fruit preserve made by boiling citrus rind and sugar.",
            "Features bitter orange peel bits suspended in amber jelly.",
            "9 letters, starts with M."
        ] 
    },
    189: { 
        question: "What has a steel barrel, spinning cylinder chambers, and smokes when the trigger snaps?", 
        answer: "revolver", 
        hints: [
            "A classic six-shooter sidearm carried in leather hip holsters.",
            "Its rotating wheel clicks into alignment before each hammer drop.",
            "8 letters, starts with R."
        ] 
    },
    190: { 
        question: "What has a handle of oak, brass wire teeth, and untangles the wool fleece before spinning?", 
        answer: "carder", 
        hints: [
            "A paddle brush used by weavers to comb raw sheep fleece.",
            "Aligns messy tangled fibers into smooth rolags ready for the wheel.",
            "6 letters, starts with C."
        ] 
    },
    191: { 
        question: "What can you carve from an orange gourd, hollow out with a spoon, and light with a candle?", 
        answer: "jackolantern", 
        hints: [
            "A grinning pumpkin face set on doorsteps for autumn festivals.",
            "Flickers with candlelight through cut eyes, nose, and jagged mouth.",
            "12 letters, starts with J."
        ] 
    },
    192: { 
        question: "What has an emerald coat, a crimson center, and seeds dotted across sweet summer slices?", 
        answer: "watermelon", 
        hints: [
            "A heavy striped melon sliced open at outdoor picnics.",
            "Its juicy, refreshing pink flesh quenches thirst in the sun.",
            "10 letters, starts with W."
        ] 
    },
    193: { 
        question: "What has a needle of bone, balls of spun wool, and knits warm scarves for winter?", 
        answer: "yarn", 
        hints: [
            "Continuous strands of spun wool or cotton wound into soft skeins.",
            "Knitters pull it through loops to craft sweaters and socks.",
            "4 letters, starts with Y."
        ] 
    },
    194: { 
        question: "What has a bronze rim that rings out warning when fog rolls thick into harbor lanes?", 
        answer: "foghorn", 
        hints: [
            "A deep-toned acoustic horn sounding over coastal waters.",
            "Warns approaching steamships when light beams cannot pierce the haze.",
            "7 letters, starts with F."
        ] 
    },
    195: { 
        question: "What can you crack open between two fingers that leaves salt on your lips and shells on the floor?", 
        answer: "pistachio", 
        hints: [
            "A pale green edible nut encased in a split tan shell.",
            "Roasted and salted, commonly served as a bar snack.",
            "9 letters, starts with P."
        ] 
    },
    196: { 
        question: "What has an ivory horn, curved ribs of ash, and glides across frozen ponds behind swift skates?", 
        answer: "sled", 
        hints: [
            "A low wooden runner frame built to slide down snowy slopes.",
            "Children steer it down hills or hitch it to running dogs.",
            "4 letters, starts with S."
        ] 
    },
    197: { 
        question: "What has a handle of turned cherry, a dome of waterproof silk, and opens when raindrops fall?", 
        answer: "parasol", 
        hints: [
            "A light canopy frame carried overhead to shield skin from sun and rain.",
            "Ladies spin its decorative ruffled edge while walking garden paths.",
            "7 letters, starts with P."
        ] 
    },
    198: { 
        question: "What can you toss into foaming surf that catches silver mackerel in its tangled mesh?", 
        answer: "net", 
        hints: [
            "A woven mesh of knotted nylon or hemp cords cast by fishermen.",
            "Weighted with lead sinkers along the bottom to trap schools of fish.",
            "3 letters, starts with N."
        ] 
    },
    199: { 
        question: "What has a copper flue, brass boilers, and distills mountain spring water into clear spirits?", 
        answer: "still", 
        hints: [
            "An apparatus used by distillers to vaporize and condense alcohol.",
            "Features coiled copper worm tubes cooled in barrels of water.",
            "5 letters, starts with S."
        ] 
    },
    200: { 
        question: "The eighth region gate closes. The Witch poses: What can travel across oceans on a whisper of wind, yet sinks under the weight of a single cannonball?", 
        answer: "galleon", 
        hints: [
            "A majestic multi-decked sailing warship of the age of sail.",
            "Spread square canvas sails from three tall wooden masts.",
            "7 letters, starts with G."
        ] 
    },
    
    // --- REGION: Sky Kingdom (Levels 201 - 225) ---
    201: { 
        question: "What can you lose in the morning, find in the afternoon, and walk across all evening?", 
        answer: "shadow", 
        hints: [
            "A dark silhouette tracking your steps when light hits your back.",
            "High midday sun shrinks it to your feet; dusk stretches it across the path.",
            "6 letters, starts with S."
        ] 
    },
    202: { 
        question: "What has a single bed in the hospital, but never closes its eyes to sleep?", 
        answer: "patient", 
        hints: [
            "A person under medical observation or receiving care.",
            "Also describes someone possessing endless calm and endurance.",
            "7 letters, starts with P."
        ] 
    },
    203: { 
        question: "What kind of room can you walk through without ever leaving your chair?", 
        answer: "chatroom", 
        hints: [
            "A digital salon where distant travelers exchange text and ideas.",
            "Messages scroll on screens across miles without footsteps.",
            "8 letters, starts with C."
        ] 
    },
    204: { 
        question: "What can you turn on its head to make a complete dozen vanish into nothing?", 
        answer: "hourglass", 
        hints: [
            "A dual glass bulb filled with measured quartz sand.",
            "Flipping its waist resets the passing grains from zero again.",
            "9 letters, starts with H."
        ] 
    },
    205: { 
        question: "What has an ivory gate that guards a pink serpent that never stops talking?", 
        answer: "mouth", 
        hints: [
            "An anatomical feature on your face containing teeth and tongue.",
            "Opens to savor feasts, whisper secrets, and laugh aloud.",
            "5 letters, starts with M."
        ] 
    },
    206: { 
        question: "What has a silver spine, hundred paper leaves, and costs pennies in the marketplace?", 
        answer: "notebook", 
        hints: [
            "Bound sheets used by students and scholars to record thoughts.",
            "Graphite pencils and ink quills fill its ruled margins.",
            "8 letters, starts with N."
        ] 
    },
    207: { 
        question: "What can you take from a man that leaves him with nothing, yet weighs less than breath?", 
        answer: "hope", 
        hints: [
            "The radiant light in the human spirit that dreams of better days.",
            "When despair snuffs it out, the soul surrenders the fight.",
            "4 letters, starts with H."
        ] 
    },
    208: { 
        question: "What kind of ring has no jewel, but circles the coldest reaches of the sun?", 
        answer: "orbit", 
        hints: [
            "The gravitational curved path traveled by celestial bodies.",
            "Planets trace it faithfully around their home star over eons.",
            "5 letters, starts with O."
        ] 
    },
    209: { 
        question: "What has a bronze face that turns green when the skies weep for years?", 
        answer: "statue", 
        hints: [
            "A sculpted monument of a king or hero standing in the courtyard.",
            "Oxidation blankets its copper alloy skin in a verdant patina.",
            "6 letters, starts with S."
        ] 
    },
    210: { 
        question: "What can you make on a snowy field that has arms and a head, but no pulse?", 
        answer: "snowman", 
        hints: [
            "Rolled spheres of packed white precipitation stacked in three tiers.",
            "Charcoal coals for eyes and a garden carrot for a nose.",
            "7 letters, starts with S."
        ] 
    },
    211: { 
        question: "What has a key that clicks in the dark, but holds no gold or iron bars shut?", 
        answer: "switch", 
        hints: [
            "A small lever mounted on a wall or lantern base.",
            "Toggling it breaks or completes the circuit to banish darkness.",
            "6 letters, starts with S."
        ] 
    },
    212: { 
        question: "What kind of pin carries no sharp point, but rolls strike after strike on polished lanes?", 
        answer: "bowlingpin", 
        hints: [
            "A wooden bottle-shaped target arranged in a triangle of ten.",
            "Heavy rolling balls crash into them with a thunderous clatter.",
            "10 letters, starts with B."
        ] 
    },
    213: { 
        question: "What can you break without dropping it, yet repair with a humble apology?", 
        answer: "friendship", 
        hints: [
            "A mutual bond of loyalty and affection shared between comrades.",
            "Careless words wound it; honesty and remorse heal it.",
            "10 letters, starts with F."
        ] 
    },
    214: { 
        question: "What has a mouth of brass and cries aloud only when pulled by a braided hemp rope?", 
        answer: "churchbell", 
        hints: [
            "A massive bronze instrument hung high in the cathedral spire.",
            "Tolls solemn notes across the village for weddings and funerals.",
            "10 letters, starts with C."
        ] 
    },
    215: { 
        question: "What has an eye that peers through the storm, but shuts tight when struck by hail?", 
        answer: "eyelid", 
        hints: [
            "A protective skin flap that blinks instinctively to shield your sight.",
            "Fringed with lashes that sweep away dust and windborne sand.",
            "6 letters, starts with E."
        ] 
    },
    216: { 
        question: "What can you spend with a lavish hand that you can never earn back at market?", 
        answer: "time", 
        hints: [
            "The relentless march of seconds, minutes, and passing years.",
            "Once an hour slips away, all the gold in the world cannot buy it back.",
            "4 letters, starts with T."
        ] 
    },
    217: { 
        question: "What has a pocket of leather, a weighted lead heart, and measures the depth of the sea?", 
        answer: "plumbline", 
        hints: [
            "A weighted line dropped from the bow of a ship.",
            "Mariners gauge how many fathoms remain beneath their wooden keel.",
            "9 letters, starts with P."
        ] 
    },
    218: { 
        question: "What has a golden crest, sleeps underground in winter, and blooms with the morning rays?", 
        answer: "dandelion", 
        hints: [
            "A common yellow meadow blossom with serrated leaves.",
            "Transforms into a delicate white globe of seeds you blow on the wind.",
            "9 letters, starts with D."
        ] 
    },
    219: { 
        question: "What kind of sheet covers no mattress, but catches the hurricane gale to speed you home?", 
        answer: "sail", 
        hints: [
            "Heavy canvas rigging hoisted upon tall wooden masts.",
            "Catches offshore trade winds to propel caravels across the ocean.",
            "4 letters, starts with S."
        ] 
    },
    220: { 
        question: "What has an ear for every whispered rumor, but cannot keep a secret to save its life?", 
        answer: "gossip", 
        hints: [
            "Idle chatter and hearsay traded over tavern counters and parlor teas.",
            "Spreads like wildfire through the kingdom without proof.",
            "6 letters, starts with G."
        ] 
    },
    221: { 
        question: "What has a coat of prickly thorns, guarding sweet red rubies along the garden wall?", 
        answer: "rosebush", 
        hints: [
            "A flowering briar bearing fragrant blossoms favored by lovers.",
            "Plucking its crimson petals without care results in sharp pricks.",
            "8 letters, starts with R."
        ] 
    },
    222: { 
        question: "What has an eye of glass that captures a moment forever without drawing a breath?", 
        answer: "camera", 
        hints: [
            "An optical apparatus fitted with shutter, lens, and film or sensor.",
            "Snaps portrait photographs preserved for future generations.",
            "6 letters, starts with C."
        ] 
    },
    223: { 
        question: "What has a tongue of ink, speaks across oceans, and folds flat into a square?", 
        answer: "letter", 
        hints: [
            "A written dispatch penned on parchment and sealed with wax.",
            "Couriers carry it across provinces to deliver personal news.",
            "6 letters, starts with L."
        ] 
    },
    224: { 
        question: "What has a heart of flint, strikes a spark in the dark, and fits inside a coat pocket?", 
        answer: "lighter", 
        hints: [
            "A small metal fuel canister sparked with a tiny friction wheel.",
            "Produces a pocket flame to kindle campfires and tavern pipes.",
            "7 letters, starts with L."
        ] 
    },
    225: { 
        question: "The ninth region summit is reached. The Witch tests your wit: What can be stolen with a smile, given freely without loss, and returned in the selfsame breath?", 
        answer: "kiss", 
        hints: [
            "A token of love, greeting, or deep affection pressed with the lips.",
            "Given on cheek or mouth between devoted lovers or cherished kin.",
            "4 letters, starts with K."
        ] 
    },
    
    // --- REGION: Sunken Kingdom (Levels 226 - 250) ---
    226: { 
        question: "What has an emerald shell, snaps at river reeds, and suns its back upon a mossy log?", 
        answer: "turtle", 
        hints: [
            "An aquatic reptile swimming gracefully through ponds and lakes.",
            "Pulls flippers and head inside its leathery shell when alarmed.",
            "6 letters, starts with T."
        ] 
    },
    227: { 
        question: "What can you hold in your hand that grows warmer the colder the winter winds blow?", 
        answer: "handwarmer", 
        hints: [
            "A small chemical pouch slipped into wool mittens on frosty mornings.",
            "Iron powder oxidizes inside to radiate soothing heat for hours.",
            "10 letters, starts with H."
        ] 
    },
    228: { 
        question: "What has a spine of flexible wire, bristles of nylon, and polishes your enamel each dawn?", 
        answer: "toothbrush", 
        hints: [
            "A grooming tool paired with minty cleansing paste over the basin.",
            "Scrubbed across your teeth twice daily to keep breath fresh.",
            "10 letters, starts with T."
        ] 
    },
    229: { 
        question: "What has a silver dial that points toward true north through fog and tempest?", 
        answer: "compassrose", 
        hints: [
            "The ornate star figure stamped upon navigational sea charts.",
            "Marks the cardinal bearings of north, south, east, and west.",
            "11 letters, starts with C."
        ] 
    },
    230: { 
        question: "What kind of head wears no helmet, but strikes sparks to ignite the hearth log?", 
        answer: "flint", 
        hints: [
            "A hard, dark sedimentary quartz rock found along riverbeds.",
            "Striking high-carbon steel against it showers tinder with embers.",
            "5 letters, starts with F."
        ] 
    },
    231: { 
        question: "What can you crack on the countertop that yields two halves of white chalk?", 
        answer: "chalkboard", 
        hints: [
            "The dark writing slate mounted across classroom and lecture hall walls.",
            "Dusty white sticks squeak across its surface to write equations.",
            "10 letters, starts with C."
        ] 
    },
    232: { 
        question: "What has four legs, carries a heavy burden across desert dunes, and drinks for ten days at once?", 
        answer: "camel", 
        hints: [
            "A hardy beast of burden featuring one or two fat-storing humps.",
            "Caravans march behind its steady stride across the arid sands.",
            "5 letters, starts with C."
        ] 
    },
    233: { 
        question: "What has a crown of red comb, crows at the crack of dawn, and spurs on its heels?", 
        answer: "rooster", 
        hints: [
            "The male barnyard fowl ruling the hen house with a shrill cry.",
            "Perches atop the fencepost to greet the very first morning light.",
            "7 letters, starts with R."
        ] 
    },
    234: { 
        question: "What kind of pipe carries no water or smoke, but blows sweet air through cathedral spires?", 
        answer: "organpipe", 
        hints: [
            "A vertical metal flue arrayed in massive rows behind the altar.",
            "Pressurized air rushes through its throat to sound thunderous chords.",
            "9 letters, starts with O."
        ] 
    },
    235: { 
        question: "What can you tie with a knot that floats in the breeze and pops with a pin?", 
        answer: "balloon", 
        hints: [
            "A stretchy latex sphere inflated with breath or light helium gas.",
            "Tethered to ribbons at children's carnivals and birthday feasts.",
            "7 letters, starts with B."
        ] 
    },
    236: { 
        question: "What has a mouth of bubbling clay that bakes round flatbreads against its curved walls?", 
        answer: "tandoor", 
        hints: [
            "A traditional cylindrical clay oven fired with charcoal or wood.",
            "Naan flatbreads and skewered spiced meats roast inside its intense heat.",
            "7 letters, starts with T."
        ] 
    },
    237: { 
        question: "What has a silver tongue that clicks into gear, counting every revolution of the carriage wheel?", 
        answer: "odometer", 
        hints: [
            "An instrument mounted on dashboards to measure total distance traveled.",
            "Numbers roll forward one by one with every mile covered on the road.",
            "8 letters, starts with O."
        ] 
    },
    238: { 
        question: "What has a wooden paddle, a canvas skirt, and cuts silently across mountain rapids?", 
        answer: "kayak", 
        hints: [
            "A narrow, double-bladed watercraft steered with quick hip rolls.",
            "Spelled the exact same forward and backward as a clean palindrome.",
            "5 letters, starts with K."
        ] 
    },
    239: { 
        question: "What has a handle of brass, a mesh of wire, and catches stray cinders from the fireplace?", 
        answer: "firescreen", 
        hints: [
            "A protective barrier set in front of an open burning hearth.",
            "Stops hot popping embers from rolling onto parlor rugs.",
            "10 letters, starts with F."
        ] 
    },
    240: { 
        question: "What kind of star shines with five points, but never climbs into the night sky?", 
        answer: "starfish", 
        hints: [
            "A marine echinoderm clinging to tidal rocks with hundreds of suction feet.",
            "Can regenerate severed arms if detached on the seabed.",
            "8 letters, starts with S."
        ] 
    },
    241: { 
        question: "What has a horn of polished silver, three valves, and sounds the cavalry charge across the field?", 
        answer: "trumpet", 
        hints: [
            "A brilliant brass wind instrument played with buzzed lips.",
            "Heralds blow fanfares from battlements to announce royal arrivals.",
            "7 letters, starts with T."
        ] 
    },
    242: { 
        question: "What can you make with wet flour and yeast that rises like a cushion under a damp cloth?", 
        answer: "dough", 
        hints: [
            "The malleable mixture kneaded by bakers before baking.",
            "Yeast bubbles fill it with air pockets to yield light, crusty bread.",
            "5 letters, starts with D."
        ] 
    },
    243: { 
        question: "What has an eye of crystal, a rim of tortoiseshell, and sharpens blurred print for the scholar?", 
        answer: "monocle", 
        hints: [
            "A single corrective glass lens held in place by squinting the eye muscles.",
            "Dangled from a fine silk ribbon over an aristocrat's waistcoat.",
            "7 letters, starts with M."
        ] 
    },
    244: { 
        question: "What has four wheels, a flat timber bed, and rolls behind oxen loaded with grain sacks?", 
        answer: "cart", 
        hints: [
            "A simple, open wooden vehicle pulled by horses or farm draft beasts.",
            "Used by peasant farmers to transport produce from field to granary.",
            "4 letters, starts with C."
        ] 
    },
    245: { 
        question: "What has an iron jaw that clamps tight on pipes, but has no teeth of flesh or bone?", 
        answer: "wrench", 
        hints: [
            "A levered metal hand tool with adjustable jaws.",
            "Plumbers and mechanics turn stubborn threaded nuts and bolts with it.",
            "6 letters, starts with W."
        ] 
    },
    246: { 
        question: "What can you shake from a cedar shaker that covers hot broth in a cloud of sneezing dust?", 
        answer: "pepper", 
        hints: [
            "A pungent black or white spice ground from dried tropical berries.",
            "Sits beside salt on every dining table to season roasted meats.",
            "6 letters, starts with P."
        ] 
    },
    247: { 
        question: "What has a needle of fine steel, a bobbin of thread, and stitches hems faster than ten tailors?", 
        answer: "sewingmachine", 
        hints: [
            "A mechanical apparatus driven by a foot treadle or electric motor.",
            "Pierces fabric in rapid succession with interlocking lockstitches.",
            "13 letters, starts with S."
        ] 
    },
    248: { 
        question: "What has a crown of golden foam, white sandy shores, and rules two-thirds of the planet?", 
        answer: "sea", 
        hints: [
            "The vast expanse of saline water connecting every continent.",
            "Tides ebb and flow under the gravitational pull of the moon.",
            "3 letters, starts with S."
        ] 
    },
    249: { 
        question: "What kind of well holds no fresh water, but yields black fuel that drives modern ships?", 
        answer: "oilwell", 
        hints: [
            "A deep derrick drill hole sunk into petroleum-bearing strata.",
            "Pumps crude petroleum to the surface to be refined into kerosene.",
            "7 letters, starts with O."
        ] 
    },
    250: { 
        question: "The tenth region milestone arrives. The Witch poses: What can travel through stone walls, leap across ocean voids, and leave the heart bleeding without a scratch?", 
        answer: "words", 
        hints: [
            "The building blocks of human speech, decrees, curses, and poetry.",
            "Spoken or penned on parchment, their sting outlasts physical blade wounds.",
            "5 letters, starts with W."
        ] 
    },

    // --- REGION: Mystic Marshes (Levels 251 - 275) ---
    251: { 
        question: "I look at you, you look at me. I raise my right, you raise your left. What am I?", 
        answer: "mirror", 
        hints: [
            "A silvered glass surface that returns your gaze instantly.",
            "It duplicates every movement you make in reverse reflection.",
            "6 letters, starts with M."
        ] 
    },
    252: { 
        question: "The farther you travel toward me, the farther I run away. You can see me clearly, but can never touch me. What am I?", 
        answer: "horizon", 
        hints: [
            "The visual boundary line where sky appears to meet land or sea.",
            "No matter how fast a ship sails, it never reaches this line.",
            "7 letters, starts with H."
        ] 
    },
    253: { 
        question: "The more of me you incur, the heavier you feel, yet I have no mass. When I am forgiven, I disappear entirely. What am I?", 
        answer: "debt", 
        hints: [
            "An obligation owed to another, either in coin, favor, or honor.",
            "Paying what is due dissolves it instantly into peace of mind.",
            "4 letters, starts with D."
        ] 
    },
    254: { 
        question: "I weep hot wax as my life slips away. Feed me air and I glow; starve me of breath and I perish. What am I?", 
        answer: "candle", 
        hints: [
            "A tallow cylinder with a central burning fiber.",
            "Lit in dark chambers, growing shorter the longer it shines.",
            "6 letters, starts with C."
        ] 
    },
    255: { 
        question: "Strip off my outer skin and I will not weep, but I make the strongest chef shed bitter tears. What am I?", 
        answer: "onion", 
        hints: [
            "A layered bulb harvested from root gardens and sliced for stews.",
            "Cutting into its pungent rings releases vapors that sting the eyes.",
            "5 letters, starts with O."
        ] 
    },
    256: { 
        question: "I leap from heaven to earth in a split second, splintering ancient oaks without an axe. What am I?", 
        answer: "lightning", 
        hints: [
            "A sudden electrical discharge born within violent storm clouds.",
            "A jagged flash across dark skies instantly followed by a rumble.",
            "9 letters, starts with L."
        ] 
    },
    257: { 
        question: "I rumble through the mountains without an engine, shake windowpanes without hands, and follow a blinding spark. What am I?", 
        answer: "thunder", 
        hints: [
            "The acoustic shockwave generated by superheated air during a storm.",
            "Heard seconds after a flash strikes the distant hills.",
            "7 letters, starts with T."
        ] 
    },
    258: { 
        question: "The more you turn on the lamps, the less of me remains. When the last spark dies, I conquer the entire hall. What am I?", 
        answer: "darkness", 
        hints: [
            "The absolute absence of visible light.",
            "Banished by the faintest match, yet returns when the flame dies.",
            "8 letters, starts with D."
        ] 
    },
    259: { 
        question: "You throw me out when you want to use me, and pull me back in when you are done. What am I?", 
        answer: "anchor", 
        hints: [
            "A heavy forged iron hook dropped from a ship's bow.",
            "Its flukes bite deep into the seabed to keep the vessel from drifting.",
            "6 letters, starts with A."
        ] 
    },
    260: { 
        question: "I am completely encircled by water, yet I am entirely composed of dry earth and stone. What am I?", 
        answer: "island", 
        hints: [
            "A sub-continental tract of land surrounded by ocean or lake tides.",
            "Castaways wash ashore upon its isolated sandy beaches.",
            "6 letters, starts with I."
        ] 
    },
    261: { 
        question: "I have no voice, but I copy your silhouette in pools, lakes, and polished steel. What am I?", 
        answer: "reflection", 
        hints: [
            "An optical twin cast on smooth glass or undisturbed water.",
            "Rippling the surface shatters it into a thousand liquid pieces.",
            "10 letters, starts with R."
        ] 
    },
    262: { 
        question: "I pass through a narrow hole to fasten your coat, yet I have no thread, needle, or seam. What am I?", 
        answer: "button", 
        hints: [
            "A small circular disk stitched to garments.",
            "Slipped through an eyelet slit to keep cloaks and shirts secure.",
            "6 letters, starts with B."
        ] 
    },
    263: { 
        question: "I cannot be held, but I can overturn ships. I cannot be seen, but you hear me whistle through the pines. What am I?", 
        answer: "wind", 
        hints: [
            "Moving currents of atmospheric air sweeping across the landscape.",
            "Spins windmills, fills merchant sails, and rattles shutters.",
            "4 letters, starts with W."
        ] 
    },
    264: { 
        question: "I can be harsh, unvarnished, or bitter to swallow, yet living in deception is far worse. What am I?", 
        answer: "truth", 
        hints: [
            "The factual reality of things as they actually happened.",
            "Courts swear oaths upon holy tomes to speak nothing less than this.",
            "5 letters, starts with T."
        ] 
    },
    265: { 
        question: "I have a thousand twisting paths and high stone hedges, where every turn looks like the last. What am I?", 
        answer: "maze", 
        hints: [
            "A complex network of confusing passages designed to disorient travelers.",
            "The mythical Minotaur paced the dead ends of the ancient Daedalian one.",
            "4 letters, starts with M."
        ] 
    },
    266: { 
        question: "I am a dark outline on bright paper or against the sunset, lacking all inner color and detail. What am I?", 
        answer: "silhouette", 
        hints: [
            "A profile likeness showing only the exterior contours in solid black.",
            "Artists snip them from black paper to capture facial profiles.",
            "10 letters, starts with S."
        ] 
    },
    267: { 
        question: "I have a curved horn of polished brass that slides into your heel to ease tight boots on. What am I?", 
        answer: "shoehorn", 
        hints: [
            "A smooth handheld lever used by gentlemen and shoe cobblers.",
            "Prevents the stiff leather back of footwear from collapsing when stepped into.",
            "8 letters, starts with S."
        ] 
    },
    268: { 
        question: "I cap your finger with armored dimples so sharp steel never pierces your skin while stitching. What am I?", 
        answer: "thimble", 
        hints: [
            "A small metal or leather cup fitted over the sewer's fingertip.",
            "Used to push needles through tough canvas and heavy cloth without pain.",
            "7 letters, starts with T."
        ] 
    },
    269: { 
        question: "I grow downward from eaves and branches, pointed like a crystalline spear, but perish in the spring sun. What am I?", 
        answer: "icicle", 
        hints: [
            "A hanging spike of frozen dripping water formed during frosty thaws.",
            "Snaps off roofs like glass daggers, melting as air warms.",
            "6 letters, starts with I."
        ] 
    },
    270: { 
        question: "Born in sadness or overwhelming joy, I roll silently down your cheek and drop into nothingness. What am I?", 
        answer: "teardrop", 
        hints: [
            "A single droplet of saline liquid secreted by lacrimal glands.",
            "Wiped away with a linen handkerchief during grief or laughter.",
            "8 letters, starts with T."
        ] 
    },
    271: { 
        question: "I am the tiny glowing seed born of friction that kindles a roaring fire in dry tinder. What am I?", 
        answer: "spark", 
        hints: [
            "A momentary incandescent ember struck from flint or steel.",
            "Blown upon gently with dry straw to birth a hearth fire.",
            "5 letters, starts with S."
        ] 
    },
    272: { 
        question: "I mark the hour without springs or pendulums, but a cloudy afternoon renders me utterly blind. What am I?", 
        answer: "sundial", 
        hints: [
            "An ancient chronometer with a central pointer called a gnomon.",
            "Casts a dark shadow upon carved Roman numerals on sunny days.",
            "7 letters, starts with S."
        ] 
    },
    273: { 
        question: "I am the gray, powdery ghost left behind on the hearth stones after the logs have finished burning. What am I?", 
        answer: "ash", 
        hints: [
            "The powdery residue remaining after organic material combustion.",
            "Scattered in winter soil or swept from cold hearths with a whisk.",
            "3 letters, starts with A."
        ] 
    },
    274: { 
        question: "Born in the sea as a gourd-like vine, I scrub away rough skin in the hot bath. What am I?", 
        answer: "loofah", 
        hints: [
            "A fibrous, dried plant sponge used for lathering soap and exfoliating.",
            "Hung on a cotton cord in bathhouses and washbasins.",
            "6 letters, starts with L."
        ] 
    },
    275: { 
        question: "The eleventh region boss challenges: I am born of missed choices and wasted days. Looking backward makes me heavy, but I cannot rewrite a single page. What am I?", 
        answer: "regret", 
        hints: [
            "A sorrowful emotion felt over past actions or opportunities ignored.",
            "Wisdom teaches to learn from it rather than carry it through life.",
            "6 letters, starts with R."
        ] 
    },

    // --- REGION: Warrior's Wastes (Levels 276 - 300) ---
    276: { 
        question: "Hurl me far across the clearing and I will circle through the sky to land back at your feet. What am I?", 
        answer: "boomerang", 
        hints: [
            "A curved wooden airfoil weapon originating in ancient hunting lore.",
            "Its aerodynamic wings cause it to loop back to the thrower if it misses.",
            "9 letters, starts with B."
        ] 
    },
    277: { 
        question: "I have a U-shaped shackle of hardened steel that snaps shut, guarding gates until a key frees me. What am I?", 
        answer: "padlock", 
        hints: [
            "A portable detached lock with a pivoting bar snapped into a metal body.",
            "Used to secure shed doors, treasure chests, and dungeon chains.",
            "7 letters, starts with P."
        ] 
    },
    278: { 
        question: "I plunge midday into eerie twilight as the black silhouette of the moon covers the fiery sun. What am I?", 
        answer: "eclipse", 
        hints: [
            "A celestial phenomenon where one planetary body obscures another.",
            "Birds fall silent and temperatures drop as the solar corona gleams.",
            "7 letters, starts with E."
        ] 
    },
    279: { 
        question: "I am a curved U-bar of hammered iron nailed to a steed's hoof, hung over doorways for good fortune. What am I?", 
        answer: "horseshoe", 
        hints: [
            "A blacksmith-forged rim protecting equines from rocky paths.",
            "Tradition says hanging it with open ends upward catches luck.",
            "9 letters, starts with H."
        ] 
    },
    280: { 
        question: "I stand alone in fields of corn with straw arms, wearing old clothes to terrify crows away. What am I?", 
        answer: "scarecrow", 
        hints: [
            "A crude decoy built of wooden posts, burlap sack heads, and dry hay.",
            "Guards farm fields from hungry flock birds without moving a step.",
            "9 letters, starts with S."
        ] 
    },
    281: { 
        question: "I use twin optical glass lenses to reveal monsters swimming in a single droplet of pond water. What am I?", 
        answer: "microscope", 
        hints: [
            "A laboratory scientific instrument for magnifying tiny specimens.",
            "Illuminates slides so naturalists can inspect microscopic cells.",
            "10 letters, starts with M."
        ] 
    },
    282: { 
        question: "I am a mountain with a burning throat of molten rock that sleeps for ages before erupting in fury. What am I?", 
        answer: "volcano", 
        hints: [
            "A geological rupture in planetary crust venting ash, gas, and lava.",
            "Vesuvius and Krakatoa are notorious historical examples.",
            "7 letters, starts with V."
        ] 
    },
    283: { 
        question: "I have a single tire in front, two wooden legs behind, and haul heavy dirt when lifted by two handles. What am I?", 
        answer: "wheelbarrow", 
        hints: [
            "A hand-propelled one-wheeled conveyance for gardens and stone quarries.",
            "Operates on simple lever mechanics to ease human burden.",
            "11 letters, starts with W."
        ] 
    },
    284: { 
        question: "I count a full one hundred years of empires, battles, and inventions from dawn to close. What am I?", 
        answer: "century", 
        hints: [
            "A temporal span of ten decades.",
            "Historians divide eras by these hundred-year blocks of time.",
            "7 letters, starts with C."
        ] 
    },
    285: { 
        question: "Peer into my optical cylinder, rotate my ring, and watch colored glass shards form infinite symmetrical patterns. What am I?", 
        answer: "kaleidoscope", 
        hints: [
            "A handheld optical toy containing angled interior mirrors.",
            "Produces mesmerizing repeating mandalas of reflected glass beads.",
            "12 letters, starts with K."
        ] 
    },
    286: { 
        question: "I contain every single word known to scholars from A to Z, yet I can never utter a single thought of my own. What am I?", 
        answer: "dictionary", 
        hints: [
            "A massive bound lexicon defining words in alphabetical order.",
            "Turned to by scribes and scholars to verify definitions and spellings.",
            "10 letters, starts with D."
        ] 
    },
    287: { 
        question: "I am made of soft felt or rubber, and my sole purpose is to rub away the scribbles and mistakes of students. What am I?", 
        answer: "eraser", 
        hints: [
            "Friction tool mounted on pencil tips or held in drafting blocks.",
            "Sweeps away graphite and chalk markings from clean pages.",
            "6 letters, starts with E."
        ] 
    },
    288: { 
        question: "I am the bony helmet protecting your thoughts, with empty eye sockets that grin long after flesh is gone. What am I?", 
        answer: "skull", 
        hints: [
            "The skeletal framework of the head housing the human brain.",
            "Crossed over twin bones beneath the black flag of pirates.",
            "5 letters, starts with S."
        ] 
    },
    289: { 
        question: "I am the brick or stone floor at the base of the chimney where crackling fires warm the great hall. What am I?", 
        answer: "hearth", 
        hints: [
            "The paved base area surrounding an open fireplace.",
            "Symbol of home, hospitality, and domestic warmth in folklore.",
            "6 letters, starts with H."
        ] 
    },
    290: { 
        question: "I look like solid wet ground, but the moment you step upon me, my loose grains swallow your boots whole. What am I?", 
        answer: "quicksand", 
        hints: [
            "A colloid hydrogel of loose sand saturated with water.",
            "Struggling violently causes trapped travelers to sink deeper.",
            "9 letters, starts with Q."
        ] 
    },
    291: { 
        question: "I swing in a steady rhythm from side to side inside a grandfather clock, marking every second with gravity. What am I?", 
        answer: "pendulum", 
        hints: [
            "A weighted bob suspended from a pivot to swing back and forth freely.",
            "Used by horologists to regulate clockwork gear escapements.",
            "8 letters, starts with P."
        ] 
    },
    292: { 
        question: "Click my button to freeze the sprint of a stallion down to the hundredth fraction of a second. What am I?", 
        answer: "stopwatch", 
        hints: [
            "A handheld precision timer used by race stewards and athletes.",
            "Started and halted with top push-buttons to clock lap times.",
            "9 letters, starts with S."
        ] 
    },
    293: { 
        question: "I raise my mirrored tube above the foaming waves so submarine captains can spy on enemy galleons from the deep. What am I?", 
        answer: "periscope", 
        hints: [
            "An optical instrument featuring angled prisms at both ends of an extendable tube.",
            "Enables an observer to look over high walls or above water while hidden.",
            "9 letters, starts with P."
        ] 
    },
    294: { 
        question: "I am a thin ribbon of leather or silk slipped between printed pages so you never lose your place. What am I?", 
        answer: "bookmark", 
        hints: [
            "A placeholder card or tassel set inside heavy novels and grimoires.",
            "Prevents readers from folding down the delicate corners of book leaves.",
            "8 letters, starts with B."
        ] 
    },
    295: { 
        question: "I am the passage in your neck that swallows bread, carries speech, and tightens in moments of raw fear. What am I?", 
        answer: "throat", 
        hints: [
            "The anterior anatomy of the neck housing the pharynx and voice box.",
            "Clearing it announces your presence before making a formal speech.",
            "6 letters, starts with T."
        ] 
    },
    296: { 
        question: "Press my spring button and I bloom like a fabric flower above your head to keep the cloudburst off your collar. What am I?", 
        answer: "umbrella", 
        hints: [
            "A collapsible waterproof canopy supported by metal ribs on a stick.",
            "Carried by pedestrians to stay dry during heavy autumn showers.",
            "8 letters, starts with U."
        ] 
    },
    297: { 
        question: "I am an upright slab of carved granite in the graveyard, bearing a name, two dates, and an epitaph. What am I?", 
        answer: "tombstone", 
        hints: [
            "A permanent funerary monument erected at the head of a grave.",
            "Inscribed with commemorative words honoring those who have passed.",
            "9 letters, starts with T."
        ] 
    },
    298: { 
        question: "I am a rotating spiraling column of air or water pulling debris relentlessly into my center. What am I?", 
        answer: "vortex", 
        hints: [
            "A fluid mass rotating swiftly about an axis forming a deep funnel.",
            "Seen in bath drains, spinning water spouts, and tornadoes.",
            "6 letters, starts with V."
        ] 
    },
    299: { 
        question: "I wear a gummed flap on my paper brow, guarding royal letters until my seal is sliced open with a silver knife. What am I?", 
        answer: "envelope", 
        hints: [
            "A flat paper packet enclosing correspondence sent through postal couriers.",
            "Bearing recipient addresses on front and postage stamps in the corner.",
            "8 letters, starts with E."
        ] 
    },
    300: { 
        question: "The warrior's wastes are crossed. The Witch asks: I cannot be bought with gold, inherited from parents, or learned overnight, but age and bitter trials forge me in the mind. What am I?", 
        answer: "wisdom", 
        hints: [
            "The deep sound judgment gained through long life experience and truth.",
            "Princes value it above shining armor when ruling over troubled realms.",
            "6 letters, starts with W."
        ] 
    },

    // --- REGION: Haunted Catacombs (Levels 301 - 325) ---
    301: { 
        question: "I have a spine of cold iron and ribs of timber, yet I cannot breathe until the sea fills my hollow belly. What am I?", 
        answer: "shipwreck", 
        hints: [
            "A shattered wooden hull resting on the dark seabed.",
            "Once a proud vessel of war or trade, now covered in barnacles and sea silt.",
            "9 letters, starts with S."
        ] 
    },
    302: { 
        question: "I have no teeth, but I bite through stone cliffs over centuries with steady drops. What am I?", 
        answer: "erosion", 
        hints: [
            "The slow wearing down of bedrock and coastline by relentless waves.",
            "Carves sheer sea cliffs, arches, and gorges without a hammer.",
            "7 letters, starts with E."
        ] 
    },
    303: { 
        question: "I run in circles inside a small glass cage, yet my needle never draws blood or sews a seam. What am I?", 
        answer: "galvanometer", 
        hints: [
            "A laboratory gauge measuring minute electric currents.",
            "Its balanced pointer deflects along a dial when voltage flows.",
            "13 letters, starts with G."
        ] 
    },
    304: { 
        question: "I am a bridge built without stone, mortar, or wood, formed overnight from bank to bank by the bitter north wind. What am I?", 
        answer: "ice", 
        hints: [
            "Frozen surface water forming a slick solid crust over winter lakes.",
            "Thick enough for travelers and sleds to cross safely until spring thaws.",
            "3 letters, starts with I."
        ] 
    },
    305: { 
        question: "I am passed from hand to hand during times of fear, but taking full possession of me is the mark of a true commander. What am I?", 
        answer: "blame", 
        hints: [
            "Responsibility pinned on someone for a failure or disastrous defeat.",
            "Cowards shift it to others; brave leaders accept it squarely.",
            "5 letters, starts with B."
        ] 
    },
    306: { 
        question: "I wear a crimson cap in dark cellars, tasting every barrel of vintage before a drop touches the king's lips. What am I?", 
        answer: "sommelier", 
        hints: [
            "A trained wine steward in charge of royal cellars and goblets.",
            "Pairs vintages with banquets and guards against spoiled casks.",
            "9 letters, starts with S."
        ] 
    },
    307: { 
        question: "I am a golden wheel that has no axle or spokes, yet I turn all night long across the heavens. What am I?", 
        answer: "moon", 
        hints: [
            "The pale natural satellite revolving in orbit around the earth.",
            "Waxes from a slender silver crescent to a gleaming full orb.",
            "4 letters, starts with M."
        ] 
    },
    308: { 
        question: "I can be forged in five minutes of panic, but unweaving me takes fifty honest deeds. What am I?", 
        answer: "lie", 
        hints: [
            "A deliberate falsehood spoken to mislead or protect oneself.",
            "One deceit inevitably requires a dozen more to conceal.",
            "3 letters, starts with L."
        ] 
    },
    309: { 
        question: "I have no lungs or throat, but I blow air through molten glass tubes to fashion delicate crystal vases. What am I?", 
        answer: "blowpipe", 
        hints: [
            "A long hollow iron tube used in artisan furnace workshops.",
            "The craftsman exhales down its bore to inflate glowing molten bubbles.",
            "8 letters, starts with B."
        ] 
    },
    310: { 
        question: "I have a flat stone bed, a heavy roller of granite, and crush dried golden wheat into pale baking flour. What am I?", 
        answer: "millstone", 
        hints: [
            "A pair of massive circular stones turned by river wheels or wind sails.",
            "Grain is fed between their grooved faces to be ground to powder.",
            "9 letters, starts with M."
        ] 
    },
    311: { 
        question: "I am a curtain that hangs across the mountain pass, yet no hand can draw me aside or tie me back with rope. What am I?", 
        answer: "avalanche", 
        hints: [
            "A thunderous rush of compacted snow and rock plunging down alpine cliffs.",
            "Sweeps away pine forests and blocks highland routes in seconds.",
            "9 letters, starts with A."
        ] 
    },
    312: { 
        question: "I have two arms that never embrace, swinging heavy iron weights to weigh grain bushels in balance. What am I?", 
        answer: "steelyard", 
        hints: [
            "An ancient straight-beam balance scale used in open markets.",
            "A counterpoise weight slides along its notched arm to show mass.",
            "9 letters, starts with S."
        ] 
    },
    313: { 
        question: "I am a ring that fastens around no finger, dropped into the ocean abyss to haul up brimming buckets of water. What am I?", 
        answer: "wellcurb", 
        hints: [
            "The circular protective stone rim encircling the opening of a deep water shaft.",
            "Prevents dirt and travelers from tumbling into the dark reservoir below.",
            "8 letters, starts with W."
        ] 
    },
    314: { 
        question: "I am the invisible shield that bends iron needles toward the pole star across uncharted oceans. What am I?", 
        answer: "magnetism", 
        hints: [
            "A fundamental force of attraction created by the earth's molten iron core.",
            "Guides magnetic compasses reliably through pitch darkness and fog.",
            "9 letters, starts with M."
        ] 
    },
    315: { 
        question: "I have teeth of serrated steel set in a revolving circle, cutting planks of pine with a deafening screech. What am I?", 
        answer: "buzzsaw", 
        hints: [
            "A circular power blade mounted in commercial lumber sawmills.",
            "Spins at blinding speeds to slice thick tree trunks into lumber.",
            "7 letters, starts with B."
        ] 
    },
    316: { 
        question: "I am a traveler who enters the hall without knocking, leaves without footfalls, and turns hair silver over decades. What am I?", 
        answer: "oldage", 
        hints: [
            "The twilight phase of mortal life characterized by wrinkled skin and fading vigor.",
            "Brings physical frailty alongside the hard-earned gifts of experience.",
            "6 letters (typed OLDAGE), starts with O."
        ] 
    },
    317: { 
        question: "I have an eye of polished glass and three legs of ash, standing still while artists paint surveying charts. What am I?", 
        answer: "theodolite", 
        hints: [
            "A precision surveying instrument mounted on a sturdy tripod.",
            "Measures horizontal and vertical angles across hills and roads.",
            "10 letters, starts with T."
        ] 
    },
    318: { 
        question: "I can be spent before I am earned, promised before I exist, and once squandered, all of nature cannot buy me back. What am I?", 
        answer: "youth", 
        hints: [
            "The brief, vigorous springtime period of human life and vitality.",
            "Characterized by boundless energy, bold dreams, and few gray hairs.",
            "5 letters, starts with Y."
        ] 
    },
    319: { 
        question: "I have a tongue of leather that licks no sugar, clamping your boot firmly against the iron stirrup. What am I?", 
        answer: "buckle", 
        hints: [
            "A metal frame with a hinged prong used to fasten straps and belts securely.",
            "Pushed through leather holes to cinch saddles and waistbands tight.",
            "6 letters, starts with B."
        ] 
    },
    320: { 
        question: "I am a winding serpent of stone carved into high cliffs, carrying freshwater into royal fountains from miles away. What am I?", 
        answer: "aqueduct", 
        hints: [
            "A magnificent arched masonry canal engineered by ancient builders.",
            "Transports mountain water across valleys on elevated stone bridges.",
            "8 letters, starts with A."
        ] 
    },
    321: { 
        question: "I have a heart of sulfur and charcoal packed in an iron tube, roaring like a dragon when ignited. What am I?", 
        answer: "cannon", 
        hints: [
            "A heavy artillery siege gun mounted on wooden carriage wheels.",
            "Hurls heavy iron balls through stone fortress ramparts with smoke.",
            "6 letters, starts with C."
        ] 
    },
    322: { 
        question: "I am a golden cup that has no handles, drinking moisture from the air while rooted deep in forest earth. What am I?", 
        answer: "acorn", 
        hints: [
            "The smooth oval nut of the oak tree resting in a cupule cap.",
            "A tiny seed that sprouts into a colossal hundred-foot hardwood.",
            "5 letters, starts with A."
        ] 
    },
    323: { 
        question: "I am an invisible chain that binds you to the floor, yet you never feel its iron links upon your ankles. What am I?", 
        answer: "gravity", 
        hints: [
            "The natural force drawing all physical mass toward the planet's center.",
            "Ensures tossed stones drop back to earth and oceans do not fly into space.",
            "7 letters, starts with G."
        ] 
    },
    324: { 
        question: "I have four wings of lattice cloth that spin with every breeze, turning corn into meal for the entire village. What am I?", 
        answer: "windmill", 
        hints: [
            "A tall tower with large outdoor sails driven by atmospheric wind.",
            "Its revolving wooden gears drive heavy grinding stones inside.",
            "8 letters, starts with W."
        ] 
    },
    325: { 
        question: "The catacombs crumble. The Witch whispers: What can be broken without a hammer, mended without needles, yet leaves the sufferer weeping in the dark?", 
        answer: "heart", 
        hints: [
            "The emotional seat of human love, compassion, and grief in folklore.",
            "Suffers deep anguish when lovers depart or dear companions pass away.",
            "5 letters, starts with H."
        ] 
    },

    // --- REGION: Crystal Caverns (Levels 326 - 350) ---
    326: { 
        question: "I am a plain, rough boulder on the outside, but crack me open to reveal a hollow heart glittering with purple quartz. What am I?", 
        answer: "geode", 
        hints: [
            "A spherical rock cavity lined with internal crystal formations.",
            "Looks like ordinary granite until split with a lapidary hammer.",
            "5 letters, starts with G."
        ] 
    },
    327: { 
        question: "I am an optical block of glass with polished angled faces that splinters white sunbeams into seven vibrant hues. What am I?", 
        answer: "prism", 
        hints: [
            "A geometric glass tool that refracts and bends passing light.",
            "Creates an indoor tabletop rainbow when hit by a sunbeam.",
            "5 letters, starts with P."
        ] 
    },
    328: { 
        question: "I hang like a rocky dagger from the cave ceiling, grown drop by mineral drop over centuries. What am I?", 
        answer: "stalactite", 
        hints: [
            "A tapered limestone spear clinging tightly to subterranean vaults.",
            "Remember: it holds 'tight' to the ceiling above your head.",
            "10 letters, starts with S."
        ] 
    },
    329: { 
        question: "I climb slowly from the cavern floor to meet my dripping partner hanging directly overhead. What am I?", 
        answer: "stalagmite", 
        hints: [
            "A mineral mound rising upward from limestone floor pools.",
            "Formed by mineral deposits splashing from roof droplets over millennia.",
            "10 letters, starts with S."
        ] 
    },
    330: { 
        question: "I am the hardest natural shield known to man, cut from deep volcanic pipe rock to crown royal rings. What am I?", 
        answer: "diamond", 
        hints: [
            "Pure crystallized carbon forged under subterranean heat and pressure.",
            "Ranks highest at ten on the mineral hardness scale.",
            "7 letters, starts with D."
        ] 
    },
    331: { 
        question: "I am a precious green stone hidden in mica schist, prized above gold by ancient desert queens. What am I?", 
        answer: "emerald", 
        hints: [
            "A brilliant verdant beryl gemstone cut for royal diadems.",
            "Famous for its lush green color and natural interior inclusions.",
            "7 letters, starts with E."
        ] 
    },
    332: { 
        question: "I burn with a pigeon-blood crimson glow inside marble veins, outshining all other stones of fire. What am I?", 
        answer: "ruby", 
        hints: [
            "A blood-red variety of the mineral corundum.",
            "Set into royal crowns, brooches, and scepters of power.",
            "4 letters, starts with R."
        ] 
    },
    333: { 
        question: "I am a golden honey gemstone that sparkles in pegmatite veins, named for an island of ancient mist. What am I?", 
        answer: "topaz", 
        hints: [
            "A hard silicate mineral traditionally celebrated for its warm amber hues.",
            "Flashes with golden fire when faceted by the master gemcutter.",
            "5 letters, starts with T."
        ] 
    },
    334: { 
        question: "I am an azure gemstone reflecting the deep midnight sky, second only to diamond in enduring strength. What am I?", 
        answer: "sapphire", 
        hints: [
            "A deep celestial blue variety of the corundum mineral family.",
            "Worn on the fingers of kings and high pontiffs.",
            "8 letters, starts with S."
        ] 
    },
    335: { 
        question: "I am an organic jewel plucked from ocean depths, formed when a grain of sand irritates a silent mollusk. What am I?", 
        answer: "pearl", 
        hints: [
            "A lustrous, iridescent white sphere formed inside oyster shells.",
            "Strung onto silk threads to form classic choker necklaces.",
            "5 letters, starts with P."
        ] 
    },
    336: { 
        question: "I am golden fossilized resin wept by prehistoric pines, trapping ancient winged insects for millions of years. What am I?", 
        answer: "amber", 
        hints: [
            "Warm, honey-colored petrified tree sap washed ashore on northern beaches.",
            "Glows translucent orange and can generate static electricity when rubbed.",
            "5 letters, starts with A."
        ] 
    },
    337: { 
        question: "I am a deep violet quartz crystal clustering in dark cavern pockets like bunches of royal grapes. What am I?", 
        answer: "amethyst", 
        hints: [
            "A purple variety of quartz once believed to prevent intoxication.",
            "Lines the glittering purple inner hollows of massive geodes.",
            "8 letters, starts with A."
        ] 
    },
    338: { 
        question: "I am a shimmering iridescent stone that displays every color of the spectrum when tilted in sunlight. What am I?", 
        answer: "opal", 
        hints: [
            "A hydrated amorphous silica mineral famous for its play of rainbow light.",
            "Mined from subterranean sandstone deposits across desert outbacks.",
            "4 letters, starts with O."
        ] 
    },
    339: { 
        question: "I am a pale green stone carved into sacred talismans and imperial seals across Eastern dynasties. What am I?", 
        answer: "jade", 
        hints: [
            "An ornamental mineral prized for musical resonance and silky green luster.",
            "Sculpted into ornamental bangles, dragons, and royal ceremonial blades.",
            "4 letters, starts with J."
        ] 
    },
    340: { 
        question: "I am an azure stone speckled with golden pyrite flecks, ground to powder to paint the cloaks of angels. What am I?", 
        answer: "lapislazuli", 
        hints: [
            "A deep celestial blue metamorphic rock mined in remote mountains.",
            "Ground by Renaissance masters to create the precious pigment ultramarine.",
            "11 letters (typed LAPISLAZULI), starts with L."
        ] 
    },
    341: { 
        question: "I am a glassy black volcanic mirror forged when liquid lava chills instantly upon contact with icy mountain air. What am I?", 
        answer: "obsidian", 
        hints: [
            "A dark volcanic glass with sharp, conchoidal fracture lines.",
            "Flaked by ancient hunters to produce surgical scalpels and razor arrowheads.",
            "8 letters, starts with O."
        ] 
    },
    342: { 
        question: "I am a pale sky-blue stone veined with black web lines, guarding desert travelers from ill fortune. What am I?", 
        answer: "turquoise", 
        hints: [
            "A copper-based phosphate mineral prized by artisans of the arid Southwest.",
            "Set into sterling silver belt buckles, amulets, and rings.",
            "9 letters, starts with T."
        ] 
    },
    343: { 
        question: "I am banded chalcedony carved with concentric rings of color, decorating signet rings and ornamental bowls. What am I?", 
        answer: "agate", 
        hints: [
            "A microcrystalline variety of silica featuring striped and layered bands.",
            "Sliced into polished coasters and translucent ornamental medallions.",
            "5 letters, starts with A."
        ] 
    },
    344: { 
        question: "I am an orange-red variety of chalcedony that ancient scribes pressed into hot wax to seal private decrees. What am I?", 
        answer: "carnelian", 
        hints: [
            "A brownish-red gemstone associated with courage and vitality in antiquity.",
            "Its smooth waxy luster made it ideal for signet seals because wax never stuck to it.",
            "9 letters, starts with C."
        ] 
    },
    345: { 
        question: "I am a deep garnet red stone found in metamorphic schists, resembling the crimson seeds of the pomegranate. What am I?", 
        answer: "garnet", 
        hints: [
            "A group of silicate minerals celebrated since the Bronze Age for blood-red crystals.",
            "Used as an abrasive cutting medium and as the traditional January birthstone.",
            "6 letters, starts with G."
        ] 
    },
    346: { 
        question: "I am a pale olive-green crystal born in the mantle of the earth and brought to the surface in volcanic basalt. What am I?", 
        answer: "peridot", 
        hints: [
            "The gem-quality variety of the mineral olivine.",
            "Found inside both volcanic lava flows and stony meteorite fragments from deep space.",
            "7 letters, starts with P."
        ] 
    },
    347: { 
        question: "I am fibrous white gypsum that gleams like silky satin, named after the ancient moon goddess. What am I?", 
        answer: "selenite", 
        hints: [
            "A translucent crystalline variety of gypsum forming colossal underground swords.",
            "Easily scratched with a fingernail due to its soft crystalline structure.",
            "8 letters, starts with S."
        ] 
    },
    348: { 
        question: "I am a soft white mineral that writes on schoolhouse slates and coats athletic hands to maintain an iron grip. What am I?", 
        answer: "chalk", 
        hints: [
            "A soft, porous white limestone composed of microscopic marine fossils.",
            "Leaves dusty white traces across boards, walls, and gymnastic bars.",
            "5 letters, starts with C."
        ] 
    },
    349: { 
        question: "I am a brittle yellow mineral born around volcanic fuming vents, smelling of brimstone when ignited with a match. What am I?", 
        answer: "sulfur", 
        hints: [
            "A bright lemon-yellow nonmetal element found across volcanic craters.",
            "A historic ingredient in the alchemist's black powder and match head paste.",
            "6 letters, starts with S."
        ] 
    },
    350: { 
        question: "The crystal caverns echo. The Witch tests your vision: What tool uses twin convex glass spheres to sharpen the sight of weary eyes?", 
        answer: "spectacles", 
        hints: [
            "A wire or tortoiseshell frame perched upon the bridge of your nose.",
            "Fitted with corrective ground lenses to help scholars read small print.",
            "10 letters, starts with S."
        ] 
    },

    // --- REGION: Astral Realm (Levels 351 - 375) ---
    351: { 
        question: "I am a boundless ocean where islands of spiraling suns drift in complete silence, having neither shore nor surface. What am I?", 
        answer: "cosmos", 
        hints: [
            "The entire ordered universe viewed as an immense system.",
            "It holds all matter, dark void, galaxies, and passing time.",
            "6 letters, starts with C."
        ] 
    },
    352: { 
        question: "I burn with nuclear fury across billions of miles, yet a child can block my face with a single raised thumb. What am I?", 
        answer: "star", 
        hints: [
            "A luminous celestial sphere of burning plasma held by gravity.",
            "Punctures the midnight sky with tiny twinkling points of silver.",
            "4 letters, starts with S."
        ] 
    },
    353: { 
        question: "I am a stellar river of white milk and dust streaming across the night, cradling hundreds of billions of solar worlds. What am I?", 
        answer: "galaxy", 
        hints: [
            "A massive gravitationally bound system of solar systems.",
            "Our home island in deep space is known as the Milky Way.",
            "6 letters, starts with G."
        ] 
    },
    354: { 
        question: "My grasp is so absolute that not even a beam of racing light can leap free from my shadowy horizon. What am I?", 
        answer: "blackhole", 
        hints: [
            "A region of spacetime where gravity collapses matter infinitely.",
            "Born from the deathly implosion of a supermassive giant star.",
            "9 letters, starts with B."
        ] 
    },
    355: { 
        question: "I wear a frozen mane of dust and vapor that trails behind me like hair as I sweep close to the sun once a century. What am I?", 
        answer: "comet", 
        hints: [
            "An icy celestial body orbiting from the dark outer belts.",
            "Develops a glowing coma and twin tails when solar winds melt its ice.",
            "5 letters, starts with C."
        ] 
    },
    356: { 
        question: "I am a gas giant crowned with magnificent spinning halo disks made of billions of rock boulders and chunks of ice. What am I?", 
        answer: "saturn", 
        hints: [
            "The sixth planet out from the warm center of our solar system.",
            "Famous for its wide, breathtaking planetary ring system.",
            "6 letters, starts with S."
        ] 
    },
    357: { 
        question: "I am a stony stray from the void that burns into a streak of fire the instant I enter your sky, dying in the upper air. What am I?", 
        answer: "meteor", 
        hints: [
            "A space pebble vaporizing in the atmosphere from intense friction.",
            "Often called a shooting star by hopeful stargazers making wishes.",
            "6 letters, starts with M."
        ] 
    },
    358: { 
        question: "I am an interstellar cloud of glowing hydrogen and stellar dust, serving as the nursery where newborn stars ignite. What am I?", 
        answer: "nebula", 
        hints: [
            "A vast glowing interstellar cloud painted in violet and pink gas.",
            "The Orion and Crab formations are famous celestial examples.",
            "6 letters, starts with N."
        ] 
    },
    359: { 
        question: "I am the violent cosmic explosion that outshines an entire galaxy for weeks as a massive star collapses in death. What am I?", 
        answer: "supernova", 
        hints: [
            "The catastrophic detonation marking the end of a heavy stellar life.",
            "Scatters heavy forged elements into the void to birth future planets.",
            "9 letters, starts with S."
        ] 
    },
    360: { 
        question: "I spin hundreds of times every single second in the dark, sweeping a lighthouse beam of radio pulses across the cosmos. What am I?", 
        answer: "pulsar", 
        hints: [
            "A highly magnetized, rapidly rotating neutron star remnant.",
            "Emits steady, rhythmic clock-like electromagnetic radiation beacons.",
            "6 letters, starts with P."
        ] 
    },
    361: { 
        question: "I am a river of charged particles streaming outward from the sun, buffeting planetary magnetic shields across millions of leagues. What am I?", 
        answer: "solarwind", 
        hints: [
            "The continuous supersonic plasma outflow escaping a star's corona.",
            "Ignites dancing green auroras when it collides with upper atmosphere gases.",
            "9 letters, starts with S."
        ] 
    },
    362: { 
        question: "I am the shimmering curtain of green and violet light dancing across polar midnight skies, woven from charged stellar storms. What am I?", 
        answer: "aurora", 
        hints: [
            "A natural atmospheric light display visible around high magnetic latitudes.",
            "Known as the Northern or Southern Lights in polar folklore.",
            "6 letters, starts with A."
        ] 
    },
    363: { 
        question: "I am a jagged rock drifting between Mars and Jupiter, too small to be a planet, yet massive enough to crater an empire. What am I?", 
        answer: "asteroid", 
        hints: [
            "A minor rocky body orbiting the sun inside a wide debris belt.",
            "Lacks an atmosphere and retains the raw composition of early solar creation.",
            "8 letters, starts with A."
        ] 
    },
    364: { 
        question: "I am the luminous engine at the edge of the known universe, powered by a hungry supermassive core outshining a thousand galaxies. What am I?", 
        answer: "quasar", 
        hints: [
            "An active galactic nucleus of unimaginable optical luminosity.",
            "Emits massive energy jets as surrounding matter falls toward its core.",
            "6 letters, starts with Q."
        ] 
    },
    365: { 
        question: "I am an astronomical yardstick spanning the gulf between worlds, equal to the distance racing light travels in three hundred and sixty-five days. What am I?", 
        answer: "lightyear", 
        hints: [
            "A unit of stellar measurement equal to nearly six trillion miles.",
            "Used by astronomers to gauge distances to distant stars and nebulae.",
            "9 letters, starts with L."
        ] 
    },
    366: { 
        question: "I am an invisible woven fabric of four dimensions that sags and bends under the heavy weight of suns and planets. What am I?", 
        answer: "spacetime", 
        hints: [
            "The merged continuum of three spatial dimensions with the dimension of time.",
            "Einstein showed that the curvature of this grid is what we feel as gravity.",
            "9 letters, starts with S."
        ] 
    },
    367: { 
        question: "I am the dying ember core left behind when a medium star expels its outer clouds, cooling slowly across trillions of years. What am I?", 
        answer: "whitedwarf", 
        hints: [
            "A compact, earth-sized stellar remnant composed of degenerate matter.",
            "Lacks nuclear fusion fuel and glows solely from leftover thermal heat.",
            "10 letters, starts with W."
        ] 
    },
    368: { 
        question: "I am an imaginary sphere surrounding a black hole beyond which no escape is possible, marking the point of no return. What am I?", 
        answer: "eventhorizon", 
        hints: [
            "The boundary threshold where the escape velocity exceeds the speed of light.",
            "Anything crossing this perimeter is pulled into the central crushing void.",
            "12 letters, starts with E."
        ] 
    },
    369: { 
        question: "I am the faint acoustic and microwave hiss filling every corner of the sky, serving as the leftover echo from the birth of the cosmos. What am I?", 
        answer: "afterglow", 
        hints: [
            "The cosmic microwave background radiation left behind by the Big Bang.",
            "Pervades all empty space at roughly 2.7 degrees above absolute zero.",
            "9 letters, starts with A."
        ] 
    },
    370: { 
        question: "I am an optical glass tube pointed toward the sky, using parabolic mirrors to gather dim starlight from millions of lightyears away. What am I?", 
        answer: "reflector", 
        hints: [
            "A telescope design invented by Isaac Newton using curved mirrors instead of lenses.",
            "Eliminates color distortion when magnifying distant galaxies and star clusters.",
            "9 letters, starts with R."
        ] 
    },
    371: { 
        question: "I am a twin star system bound in a gravitational waltz, orbiting around a common center of balance in the dark. What am I?", 
        answer: "binary", 
        hints: [
            "A celestial system where two companion stars circle one another.",
            "Most star systems in our galaxy share this two-fold partnership.",
            "6 letters, starts with B."
        ] 
    },
    372: { 
        question: "I am the red planet of rust and basalt canyons, bearing the solar system's tallest volcano beneath a thin carbon sky. What am I?", 
        answer: "mars", 
        hints: [
            "The fourth planet from the sun, famous for its reddish oxidized soil.",
            "Home to Olympus Mons and dry river channels probed by robotic rovers.",
            "4 letters, starts with M."
        ] 
    },
    373: { 
        question: "I am a pattern of stars tracing mythical heroes, beasts, and crowns across the night sky, guiding sailors through darkness. What am I?", 
        answer: "constellation", 
        hints: [
            "An officially recognized grouping of stars forming a familiar celestial picture.",
            "Ursa Major, Orion, and Cassiopeia are celebrated examples.",
            "13 letters, starts with C."
        ] 
    },
    374: { 
        question: "I am the colossal gas king of the solar system, holding seventy moons in my thrall while a Great Red Spot storm churns my clouds. What am I?", 
        answer: "jupiter", 
        hints: [
            "The fifth and most massive planet orbiting our home sun.",
            "Features distinct colorful ammonia cloud stripes and powerful magnetic belts.",
            "7 letters, starts with J."
        ] 
    },
    375: { 
        question: "The astral realm is charted. The Witch tests your cosmic reason: What term describes the exact distance of 3.26 lightyears, measured by stellar parallax?", 
        answer: "parsec", 
        hints: [
            "A fundamental interstellar distance unit used by deep space astronomers.",
            "Derived from a parallax angle of one arcsecond across earth's orbital radius.",
            "6 letters, starts with P."
        ] 
    },

    // --- REGION: Time-Lost Kingdom (Levels 376 - 400) ---
    376: { 
        question: "I have no beginning, middle, or end. In my grasp, empires fall in the blink of an eye while a single second stretches forever. What am I?", 
        answer: "eternity", 
        hints: [
            "The state of infinite, boundless time without commencement or closure.",
            "Philosophers consider it beyond the temporal limits of mortal life.",
            "8 letters, starts with E."
        ] 
    },
    377: { 
        question: "I am a grandfather timekeeper whose heavy weights sink slowly in an oak cabinet, chiming solemn bells upon the hour. What am I?", 
        answer: "tallclock", 
        hints: [
            "A freestanding, weight-driven pendulum clock housed in a tall wooden tower case.",
            "A classic parlor furniture piece ticking rhythmically across decades.",
            "9 letters, starts with T."
        ] 
    },
    378: { 
        question: "I am an hourglass whose fine silica flows from bulb to bulb, yet when flipped upside down, the lost hour begins anew. What am I?", 
        answer: "sandglass", 
        hints: [
            "An ancient timing apparatus utilizing two blown glass bulbs connected by a narrow neck.",
            "Used by mariners on night watches to time thirty-minute intervals.",
            "9 letters, starts with S."
        ] 
    },
    379: { 
        question: "I am the acoustic ghost of a word that bounced off canyon stone, returning to your ear after the speaker has fallen silent. What am I?", 
        answer: "reverberation", 
        hints: [
            "The persistence of sound waves in an enclosed space after the original source stops.",
            "Heard echoing down cathedral naves and hollow underground vaults.",
            "13 letters, starts with R."
        ] 
    },
    380: { 
        question: "I am a chart of twelve paper leaves recording the moons, solstices, and passing feasts of a single revolving year. What am I?", 
        answer: "almanac", 
        hints: [
            "An annual publication containing astronomical charts, tide tables, and planting calendars.",
            "Farmers consult its pages to anticipate frosts and seasonal weather.",
            "7 letters, starts with A."
        ] 
    },
    381: { 
        question: "I am a logical knot where a traveler journeys into the past and removes their own forebear, making their own existence impossible. What am I?", 
        answer: "paradox", 
        hints: [
            "A self-contradictory proposition or scenario that defies logical resolution.",
            "The grandfather paradox is the classic thought experiment of chronological travel.",
            "7 letters, starts with P."
        ] 
    },
    382: { 
        question: "I am the ancient petrified impression of a prehistoric fern preserved in shale, freezing a moment from two hundred million years ago. What am I?", 
        answer: "fossil", 
        hints: [
            "The preserved remains or mineral trace of an organism from a past geological age.",
            "Chiseled out of sedimentary rock strata by paleontologists.",
            "6 letters, starts with F."
        ] 
    },
    383: { 
        question: "I am a precision marine clockwork instrument built with balance springs, keeping Greenwich time across rolling stormy seas. What am I?", 
        answer: "chronometer", 
        hints: [
            "A timekeeping device designed to remain accurate despite ship rolling and temperature shifts.",
            "Allowed eighteenth-century navigators to calculate longitude at sea for the first time.",
            "11 letters, starts with C."
        ] 
    },
    384: { 
        question: "I am an ancient era buried deep beneath the dirt of centuries, surviving only through broken pillars and forgotten inscriptions. What am I?", 
        answer: "antiquity", 
        hints: [
            "The ancient past, especially the classical civilizations before the Middle Ages.",
            "Archaeologists uncover its terracotta pottery and marble mosaics in ruined cities.",
            "9 letters, starts with A."
        ] 
    },
    385: { 
        question: "I am a closed temporal circuit where the same tragic morning repeats over and over without escape until broken by truth. What am I?", 
        answer: "timeloop", 
        hints: [
            "A chronological anomaly where a span of time resets back to its starting point.",
            "Traps people in an unending cycle of identical repeating events.",
            "8 letters, starts with T."
        ] 
    },
    386: { 
        question: "I am the reddish-brown decay of oxidation that eats slowly away at the gears of steel, turning strong machines to dust over time. What am I?", 
        answer: "corrosion", 
        hints: [
            "The gradual chemical destruction of metals by reaction with oxygen and moisture.",
            "Weakens neglected bridges, iron locks, and sunken armor plates over centuries.",
            "9 letters, starts with C."
        ] 
    },
    387: { 
        question: "I am a vast geological chapter of planetary history spanning millions of years, divided into epochs and periods. What am I?", 
        answer: "era", 
        hints: [
            "A major division of geological or historical time of long, indefinite duration.",
            "The Mesozoic and Cenozoic are prominent examples in earth's stone record.",
            "3 letters, starts with E."
        ] 
    },
    388: { 
        question: "I am the inescapable future decreed for every mortal man, woven by three mythological sisters spinning threads of fate. What am I?", 
        answer: "destiny", 
        hints: [
            "The predetermined course of events regarded as beyond human control.",
            "Heroes in epic poems either fight against it or fulfill its prophecies.",
            "7 letters, starts with D."
        ] 
    },
    389: { 
        question: "I am the dim, enchanting hour when the day dies but the night is not yet fully born, wrapping fields in purple twilight. What am I?", 
        answer: "dusk", 
        hints: [
            "The darkest stage of twilight occurring just before total nightfall settles.",
            "Street lamps flicker on and nocturnal owls begin their hunt during this transition.",
            "4 letters, starts with D."
        ] 
    },
    390: { 
        question: "I am the written memory of an empire, recorded year by year in monastic scripts so future generations never forget. What am I?", 
        answer: "chronicle", 
        hints: [
            "A continuous historical account of facts and events arranged in order of time.",
            "Monks and court scribes penned them on animal vellum to record reigns and wars.",
            "9 letters, starts with C."
        ] 
    },
    391: { 
        question: "I am a clockwork spring mechanism that counts down thirty minutes before ringing an alarm bell upon the kitchen hearth. What am I?", 
        answer: "timer", 
        hints: [
            "A small device set to measure a specific interval of passing time.",
            "Alerts bakers when cakes have finished rising inside hot ovens.",
            "5 letters, starts with T."
        ] 
    },
    392: { 
        question: "I am a fleeting fragment of a second that passes before an eyelid can blink, yet a decision made within me alters history. What am I?", 
        answer: "instant", 
        hints: [
            "An exceedingly brief period or pinpoint moment of passing time.",
            "Lightning flashes and arrows strike home within this narrow boundary.",
            "7 letters, starts with I."
        ] 
    },
    393: { 
        question: "I am a monumental stone pillar carved with glyphs and erected by ancient kings to mark the passing of thirty-year jubilees. What am I?", 
        answer: "obelisk", 
        hints: [
            "A tall, four-sided narrow tapering monument ending in a pyramid-like top.",
            "Carved from single blocks of red granite in ancient river empires.",
            "7 letters, starts with O."
        ] 
    },
    394: { 
        question: "I am a rhythmic mechanical metronome ticking steadily on top of a piano, training musicians to keep unyielding time. What am I?", 
        answer: "metronome", 
        hints: [
            "An inverted pendulum device that produces regular, repetitive acoustic clicks.",
            "Composers set its sliding weight to match beats per minute.",
            "9 letters, starts with M."
        ] 
    },
    395: { 
        question: "I am the continuous irreversible flow of events from the past through the present into the future, measured by gears and stars. What am I?", 
        answer: "time", 
        hints: [
            "The non-spatial continuum in which events occur in apparently irreversible succession.",
            "Waits for no man, ages kings to dust, and heals all grief.",
            "4 letters, starts with T."
        ] 
    },
    396: { 
        question: "I am a copper weathercock turning on top of a church steeple, showing which quarter the changing wind blows from. What am I?", 
        answer: "weathervane", 
        hints: [
            "A pivoting metal pointer mounted on high roofs to indicate wind direction.",
            "Often fashioned in the silhouette of a crowing rooster or soaring arrow.",
            "11 letters, starts with W."
        ] 
    },
    397: { 
        question: "I am a temporal unit spanning ten full circuits of the sun around the zodiac, marking a decade of growth and reform. What am I?", 
        answer: "decade", 
        hints: [
            "A period of ten consecutive years.",
            "Cultural styles, musical trends, and architectural movements are categorized by them.",
            "6 letters, starts with D."
        ] 
    },
    398: { 
        question: "I am a subterranean chamber buried with gold, sealed with a hundred-year delay lock that swings open only for future generations. What am I?", 
        answer: "timecapsule", 
        hints: [
            "A secure historic cache of goods or information buried for future discovery.",
            "Filled with newspapers, artifacts, and letters to show posterity how ancestors lived.",
            "11 letters, starts with T."
        ] 
    },
    399: { 
        question: "I am the steady rhythmic pulse of a healthy heart, measuring sixty to eighty beats per minute inside your breast. What am I?", 
        answer: "heartbeat", 
        hints: [
            "The pulsation of the cardiac muscle pumping crimson life through your veins.",
            "Heard through a physician's ear trumpet or felt with two fingers upon the wrist.",
            "9 letters, starts with H."
        ] 
    },
    400: { 
        question: "The time-lost kingdom is restored. The Witch demands: Name the physical dimension of duration that joins with height, width, and depth to shape reality.", 
        answer: "fourth", 
        hints: [
            "The numerical ranking given to the dimension of time in relativistic physics.",
            "Follows the three classic spatial dimensions of height, length, and breadth.",
            "6 letters, starts with F."
        ] 
    },

    // --- REGION: Realm of Illusions (Levels 401 - 425) ---
    401: { 
        question: "I show you an oasis of shimmering water across dry sand, but when you drop to your knees to drink, you swallow only dust. What am I?", 
        answer: "mirage", 
        hints: [
            "An optical illusion born from bending light over baking earth.",
            "Deceives weary desert travelers into chasing phantom pools.",
            "6 letters, starts with M."
        ] 
    },
    402: { 
        question: "I have no face of my own, but I wear the likeness of kings, fools, and beasts to hide who stands behind me. What am I?", 
        answer: "mask", 
        hints: [
            "A carved or molded disguise strapped across the brow.",
            "Worn at Venetian carnivals, masquerades, and theater stages.",
            "4 letters, starts with M."
        ] 
    },
    403: { 
        question: "I exist only while your eyes remain closed in deep slumber, spinning castles of mist that vanish with morning light. What am I?", 
        answer: "dream", 
        hints: [
            "A sequence of visions and subconscious tales during sleep.",
            "Feels completely real until the tolling alarm wakes the mind.",
            "5 letters, starts with D."
        ] 
    },
    404: { 
        question: "I turn a straight timber shaft into a crooked broken stick the moment it dips beneath clear water. What am I?", 
        answer: "refraction", 
        hints: [
            "The physical bending of light rays passing between air and fluid.",
            "Makes submerged fish appear where they are not.",
            "10 letters, starts with R."
        ] 
    },
    405: { 
        question: "I am a riddle wrapped in mist, sealed inside a puzzle box that baffles the sharpest minds in the court. What am I?", 
        answer: "enigma", 
        hints: [
            "A deeply perplexing or mysterious riddle that defies easy reason.",
            "Also the name of the celebrated historical cipher apparatus.",
            "6 letters, starts with E."
        ] 
    },
    406: { 
        question: "I deceive the eye through nimble fingers and hidden pockets, making silver coins vanish into empty air. What am I?", 
        answer: "sleight", 
        hints: [
            "Manual dexterity and cunning hand craft displayed by illusionists.",
            "Often paired with the phrase 'of hand' during magical performances.",
            "7 letters, starts with S."
        ] 
    },
    407: { 
        question: "I paint oil colors upon linen canvas so lifelike that my painted eyes seem to track your steps across the gallery. What am I?", 
        answer: "portrait", 
        hints: [
            "A painted or drawn likeness of an individual person's face.",
            "Hangings of ancient monarchs lining grand palace stairwells.",
            "8 letters, starts with P."
        ] 
    },
    408: { 
        question: "I am a mischievous spirit of folklore who rearranges trail signs in the dark to lead pilgrims astray. What am I?", 
        answer: "trickster", 
        hints: [
            "A mythological figure or deity famous for cunning and mischief.",
            "Loki and Anansi are famous folkloric archetypes.",
            "9 letters, starts with T."
        ] 
    },
    409: { 
        question: "I have no physical weight, but I sit upon the mind like lead until the true facts shatter my deceptive web. What am I?", 
        answer: "delusion", 
        hints: [
            "A false belief tenaciously held despite contrary factual proof.",
            "Befuddles mad emperors who believe they command the tides.",
            "8 letters, starts with D."
        ] 
    },
    410: { 
        question: "I speak without vocal cords, ventriloquizing words from the shadows to make you believe another stands beside you. What am I?", 
        answer: "mimicry", 
        hints: [
            "The art or evolutionary trait of copying sounds and appearances.",
            "Parrots and mockingbirds utilize this talent with uncanny skill.",
            "7 letters, starts with M."
        ] 
    },
    411: { 
        question: "I project dancing moving images upon a white wall of smoke, making shadows appear alive in the dark. What am I?", 
        answer: "phantasm", 
        hints: [
            "An illusory likeness or spectral apparition produced by imagination.",
            "Magic lanterns projected these ghostly displays in old parlors.",
            "9 letters, starts with P."
        ] 
    },
    412: { 
        question: "I am an optical hall with mirrors tilted on every angle, where one traveler looks like an army of a thousand strangers. What am I?", 
        answer: "funhouse", 
        hints: [
            "A carnival attraction filled with distorted mirrors and trick floors.",
            "Stretches, squashes, and multiplies your reflection into monsters.",
            "8 letters, starts with F."
        ] 
    },
    413: { 
        question: "I can be spun from empty words to hide an ugly deed, dressing up betrayal in the fine garments of honor. What am I?", 
        answer: "pretense", 
        hints: [
            "An attempt to make something that is not true appear genuine.",
            "A false display or insincere front put on for public show.",
            "8 letters, starts with P."
        ] 
    },
    414: { 
        question: "I create a twin image of myself upon cold glass, mimicking every movement until someone draws the velvet curtain. What am I?", 
        answer: "doppelganger", 
        hints: [
            "A ghostly double or living counterpart of a living mortal.",
            "Seeing your own in Germanic folklore was considered a grim omen.",
            "12 letters, starts with D."
        ] 
    },
    415: { 
        question: "I slip into your thoughts when reason sleeps, making shadows on the bedpost look like grasping skeletal claws. What am I?", 
        answer: "paranoia", 
        hints: [
            "Unfounded suspicion and chronic mistrust of unseen lurking threats.",
            "Causes sleepless monarchs to suspect poison in every silver cup.",
            "8 letters, starts with P."
        ] 
    },
    416: { 
        question: "I appear to be a solid staircase ascending into the rafters, but your boot passes straight through my holographic light. What am I?", 
        answer: "hologram", 
        hints: [
            "A three-dimensional image formed by interference of light beams.",
            "Shimmers in mid-air with complete depth without physical mass.",
            "8 letters, starts with H."
        ] 
    },
    417: { 
        question: "I am an elaborate labyrinth of half-truths and forged seals designed to throw prosecutors off the conspirator's trail. What am I?", 
        answer: "subterfuge", 
        hints: [
            "Deceit used in order to achieve one's goal or escape blame.",
            "Spies and court conspirators rely on it to navigate treacherous courts.",
            "10 letters, starts with S."
        ] 
    },
    418: { 
        question: "I am an optical lens that stretches short men into giants and shrinks tall towers into pebbles when inverted. What am I?", 
        answer: "lens", 
        hints: [
            "A piece of transparent curved glass that concentrates or disperses light.",
            "Found in spectacles, spyglasses, and camera apertures.",
            "4 letters, starts with L."
        ] 
    },
    419: { 
        question: "I play with ambient light and velvet backdrop to make a floating lady seem severed in twin halves upon the stage. What am I?", 
        answer: "illusion", 
        hints: [
            "A deceptive impression produced by cleverly manipulated sensory cues.",
            "Stage magicians master it to make elephants and cabinets vanish.",
            "8 letters, starts with I."
        ] 
    },
    420: { 
        question: "I am a coin that looks like pure imperial gold, but scrape my edge with a steel file to reveal cheap lead beneath. What am I?", 
        answer: "counterfeit", 
        hints: [
            "A fraudulent imitation forged with intent to deceive and defraud.",
            "Treasury clerks weigh and bite coins to detect its base metal core.",
            "11 letters, starts with C."
        ] 
    },
    421: { 
        question: "I look like an unbroken wall of solid masonry, but press the carved stone lion to reveal a hidden passage. What am I?", 
        answer: "secretdoor", 
        hints: [
            "A concealed portal disguised to match adjoining paneling or stone.",
            "Castle architects built them for monarchs escaping sudden sieges.",
            "10 letters (typed SECRETDOOR), starts with S."
        ] 
    },
    422: { 
        question: "I am a riddle with two conflicting faces, seeming impossible until a subtle shift in perspective reveals the truth. What am I?", 
        answer: "conundrum", 
        hints: [
            "A confusing and difficult problem, question, or word puzzle.",
            "Features tricky double meanings that tease the analytical mind.",
            "9 letters, starts with C."
        ] 
    },
    423: { 
        question: "I paint patterns of light on dark fog at night, tricking sailors into believing an island fortress looms ahead. What am I?", 
        answer: "fata-morgana", 
        hints: [
            "A complex superior mirage seen in a narrow band above the horizon.",
            "Distorts distant ships into floating castles and vertical cliffs.",
            "11 letters (often typed FATAMORGANA), starts with F."
        ] 
    },
    424: { 
        question: "I am an actor upon the grand stage reciting solemn oaths, wearing tears of grief that cost my heart not a single sorrow. What am I?", 
        answer: "charlatan", 
        hints: [
            "A person falsely claiming to have special knowledge, skill, or sorrow.",
            "A mountebank selling bottled snake oil cures in the village square.",
            "9 letters, starts with C."
        ] 
    },
    425: { 
        question: "The realm of illusions dissolves into smoke. The Witch challenges: What is the scientific study of sensory deception and mental perception?", 
        answer: "psychology", 
        hints: [
            "The academic discipline analyzing the human mind, behavior, and senses.",
            "Examines how optical tricks fool the visual cortex into false beliefs.",
            "10 letters, starts with P."
        ] 
    },

    // --- REGION: Forbidden Citadel (Levels 426 - 450) ---
    426: { 
        question: "I am a heavy iron or wooden grating suspended above the castle portal, dropped instantly to sever invading lines. What am I?", 
        answer: "portcullis", 
        hints: [
            "A vertically sliding defensive gate with pointed iron-shod bottom stakes.",
            "Chains on winches release it from above to seal the gatehouse arch.",
            "10 letters, starts with P."
        ] 
    },
    427: { 
        question: "I am a deep, wide ditch circling the outer fortress walls, filled with rushing water or sharp wooden stakes. What am I?", 
        answer: "moat", 
        hints: [
            "A defensive perimeter channel preventing siege towers from touching walls.",
            "Crossed solely by a hinged drawbridge lowered from the gatehouse.",
            "4 letters, starts with M."
        ] 
    },
    428: { 
        question: "I am an overhanging stone gallery atop castle walls, featuring floor holes to drop boulders directly upon sappers below. What am I?", 
        answer: "machicolation", 
        hints: [
            "Projecting battlements supported by corbels along medieval parapets.",
            "Floor openings allowed archers to pour boiling oil on enemies beneath.",
            "13 letters, starts with M."
        ] 
    },
    429: { 
        question: "I am a narrow vertical slit cut through three feet of solid rampart stone, letting castle bowmen shoot without exposure. What am I?", 
        answer: "arrowslit", 
        hints: [
            "A cruciform or narrow vertical aperture pierced through masonry.",
            "Widened on the inner side to grant archers a broad angle of fire.",
            "9 letters, starts with A."
        ] 
    },
    430: { 
        question: "I am a heavy siege engine using a massive counterweight on a swinging pivot arm to fling hundred-pound stones over towers. What am I?", 
        answer: "trebuchet", 
        hints: [
            "The supreme gravity-powered catapult of the Middle Ages.",
            "Hurled dead horses, firepots, and carved boulders across castle walls.",
            "9 letters, starts with T."
        ] 
    },
    431: { 
        question: "I am a massive oak trunk tipped with a bronze ram's head, swung on chains inside an armored shed to crush gate hinges. What am I?", 
        answer: "batteringram", 
        hints: [
            "A heavy siege instrument swung back and forth against wooden fortress gates.",
            "Sheltered under a wheeled wet-hide roof to protect soldiers from flaming pitch.",
            "12 letters, starts with B."
        ] 
    },
    432: { 
        question: "I am the innermost, heavily fortified stone tower of a medieval castle, serving as the lord's last stronghold in defeat. What am I?", 
        answer: "keep", 
        hints: [
            "The great central tower and residential citadel within castle walls.",
            "Defenders retreated here when outer ramparts were breached.",
            "4 letters, starts with K."
        ] 
    },
    433: { 
        question: "I am an outer defensive earthwork or fortified outpost built before the main gatehouse to break the momentum of charges. What am I?", 
        answer: "barbican", 
        hints: [
            "A fortified forward entrance portal protecting a bridge or primary gate.",
            "Forces attackers into a narrow lethal corridor flanked by crossbow loops.",
            "8 letters, starts with B."
        ] 
    },
    434: { 
        question: "I am an armored wheeled tower covered in wet rawhide, rolled up against fortress ramparts to disgorge storming infantry. What am I?", 
        answer: "siegetower", 
        hints: [
            "A multi-story timber assault engine pushed across filled moats.",
            "Dropped an upper assault bridge directly onto the parapet battlements.",
            "10 letters, starts with S."
        ] 
    },
    435: { 
        question: "I am a defensive ditch or low embankment built around the foot of the outer curtain wall to prevent sappers from digging. What am I?", 
        answer: "berm", 
        hints: [
            "A narrow horizontal shelf of earth between a ditch and the parapet wall.",
            "Stops dislodged rubble from sliding down and filling defensive moats.",
            "4 letters, starts with B."
        ] 
    },
    436: { 
        question: "I am an indented, notched parapet crest where solid stone merlons alternate with open embrasure gaps for defenders. What am I?", 
        answer: "battlement", 
        hints: [
            "The tooth-like defensive crest lining the top walkway of a fortress wall.",
            "Crossbowmen stepped into the notches to shoot and behind merlons to reload.",
            "10 letters, starts with B."
        ] 
    },
    437: { 
        question: "I am a hidden tunnel dug under castle foundations, propped with timber beams that miners set ablaze to collapse stone towers. What am I?", 
        answer: "sap", 
        hints: [
            "A subterranean siege trench or mine gallery excavated toward an enemy wall.",
            "Burning the prop logs caused outer bastion walls to crash downward.",
            "3 letters, starts with S."
        ] 
    },
    438: { 
        question: "I am an ancient four-pronged iron caltrop scattered across grass, engineered so one lethal needle spike always points upward. What am I?", 
        answer: "caltrop", 
        hints: [
            "An area-denial antipersonnel weapon forged with four radiating spikes.",
            "Crippled charging warhorses and armored infantry marching in formation.",
            "7 letters, starts with C."
        ] 
    },
    439: { 
        question: "I am an incendiary liquid weapon composed of naphtha and sulfur, projected from bronze siphons to burn even on foaming seawater. What am I?", 
        answer: "greekfire", 
        hints: [
            "A closely guarded state chemical secret used by Byzantine naval fleets.",
            "Could not be quenched with water and destroyed wooden galleys in sheets of flame.",
            "9 letters, starts with G."
        ] 
    },
    440: { 
        question: "I am an armored mechanical torsion engine resembling a colossal steel crossbow, firing five-foot iron-tipped bolts across valleys. What am I?", 
        answer: "ballista", 
        hints: [
            "An ancient missile siege weapon powered by twin skeins of twisted sinew.",
            "Sniped commanders off battlements with flat-trajectory sniper accuracy.",
            "8 letters, starts with B."
        ] 
    },
    441: { 
        question: "I am the fortified curtain perimeter enclosing a castle courtyard, linking round flanking towers together in a stone ring. What am I?", 
        answer: "bailey", 
        hints: [
            "The open grassy ward or courtyard situated within outer castle walls.",
            "Housed blacksmith forges, barracks, stables, and grain storehouses.",
            "6 letters, starts with B."
        ] 
    },
    442: { 
        question: "I am a small, discrete rear escape door built into a secluded corner of the ramparts, used for sorties and secret messengers. What am I?", 
        answer: "postern", 
        hints: [
            "A secondary gate or concealed back door in a fortified fortification.",
            "Allowed garrison captains to slip out scouts under the cover of dusk.",
            "7 letters, starts with P."
        ] 
    },
    443: { 
        question: "I am a heavy reinforced wooden walkway built along the inner upper edge of a fortress wall, allowing sentries to patrol the perimeter. What am I?", 
        answer: "allure", 
        hints: [
            "The wall-walk or patrol passage behind the protective stone battlements.",
            "Sentries paced its stone slabs in heavy boots through freezing night watches.",
            "6 letters, starts with A."
        ] 
    },
    444: { 
        question: "I am an armored wooden gallery projecting from the top of the ramparts, built when siege began to eliminate blind spots at the wall's base. What am I?", 
        answer: "hoarding", 
        hints: [
            "A temporary covered wooden parapet cantilevered out from masonry walls.",
            "Covered in green animal hides to fend off enemy fire arrows and flaming pitch.",
            "8 letters, starts with H."
        ] 
    },
    445: { 
        question: "I am a massive circular artillery tower projecting forward from the wall angle, allowing cannons to rake besiegers from the flank. What am I?", 
        answer: "bastion", 
        hints: [
            "A pentagonal or round structure projecting outward from a curtain wall.",
            "Designed so defenders could fire along the faces of adjoining ramparts.",
            "7 letters, starts with B."
        ] 
    },
    446: { 
        question: "I am a low defensive masonry parapet with sloping earth ramparts behind, absorbing cannon fire rather than shattering like high walls. What am I?", 
        answer: "glacis", 
        hints: [
            "An artificial slope extending outward from a fortress embankment.",
            "Kept attackers completely exposed to fire from the defensive parapet.",
            "6 letters, starts with G."
        ] 
    },
    447: { 
        question: "I am a coiled barrier of sharpened wooden branches pointing outward toward the enemy, slowing charging infantry under archer fire. What am I?", 
        answer: "abatis", 
        hints: [
            "A field defense formed by felling trees with sharpened boughs facing outward.",
            "Served as the medieval predecessor to modern barbed-wire entanglements.",
            "6 letters, starts with A."
        ] 
    },
    448: { 
        question: "I am a stone channel through the floor of a gatehouse arch where defenders poured murder liquids directly onto intruders' helms. What am I?", 
        answer: "murderhole", 
        hints: [
            "A ceiling aperture in gatehouse vaults between outer and inner gates.",
            "Defenders dropped scalding water, stones, and arrows upon trapped foes.",
            "10 letters, starts with M."
        ] 
    },
    449: { 
        question: "I am an armored iron spike driven into a cannon's touch-hole with a hammer to render the captured artillery barrel useless. What am I?", 
        answer: "spikegun", 
        hints: [
            "The military action or tool used to disable artillery before retreating.",
            "Breaking off an iron file in the vent prevents the enemy from firing it.",
            "8 letters (often typed SPIKEGUN), starts with S."
        ] 
    },
    450: { 
        question: "The forbidden citadel is breached. The Witch poses: Name the specialized historical science of siege warfare and fortress defense.", 
        answer: "poliorcetics", 
        hints: [
            "The classical military science dedicated to the art of besieging and defending towns.",
            "Codified by ancient engineers studying catapult trajectories and wall angles.",
            "12 letters, starts with P."
        ] 
    },

    // --- REGION: Witch's Domain (Levels 451 - 475) ---
    451: { 
        question: "I am a heavy black cast-iron pot bubbling over open flame, brewing aromatic roots and venomous herbs. What am I?", 
        answer: "cauldron", 
        hints: [
            "A deep, footed vessel traditionally placed over hearth embers.",
            "Witches stir boiling restorative brews or hexes inside its belly.",
            "8 letters, starts with C."
        ] 
    },
    452: { 
        question: "I am bundled birch twigs lashed to a long ash pole, swept across flagstones by day and ridden across clouds by dusk. What am I?", 
        answer: "besom", 
        hints: [
            "A traditional rustic broom crafted from woodland twigs tied to a staff.",
            "Used in folklore rituals to sweep hearths or fly beneath full moons.",
            "5 letters, starts with B."
        ] 
    },
    453: { 
        question: "I am an ancient leather-bound grimoire whose yellowed parchment pages hold five hundred forgotten hexes. What am I?", 
        answer: "spellbook", 
        hints: [
            "A sorcerer's heavy manual filled with incantations and sigils.",
            "Kept under heavy lock, chained to stone library pedestals.",
            "9 letters, starts with S."
        ] 
    },
    454: { 
        question: "I am a heavy granite bowl paired with a stone pestle, crushing dried nightshade leaves into fine powder. What am I?", 
        answer: "mortar", 
        hints: [
            "An apothecary's grinding cup used to pulverize minerals and dry herbs.",
            "Paired with a club-shaped pestle to grind medicinal remedies.",
            "6 letters, starts with M."
        ] 
    },
    455: { 
        question: "I am an enchanted glass flask containing an emerald draught that renders the drinker completely invisible to mortal eyes. What am I?", 
        answer: "elixir", 
        hints: [
            "A magical liquid prepared through secretive alchemical distillation.",
            "Swallowed by heroes to cure venom or slip past dungeon guards unseen.",
            "6 letters, starts with E."
        ] 
    },
    456: { 
        question: "I am an ebony wood rod tipped with a glowing moonstone, channeling arcane willpower into dancing sparks. What am I?", 
        answer: "wand", 
        hints: [
            "A slender rod flicked by magicians to cast enchantments.",
            "Carved from elder, yew, or willow to focus spellcraft.",
            "4 letters, starts with W."
        ] 
    },
    457: { 
        question: "I am sweet-smelling dried resin burned over glowing coals, filling the sanctuary with thick hypnotic smoke. What am I?", 
        answer: "incense", 
        hints: [
            "A fragrant botanical substance burned during rituals and meditations.",
            "Smolders in hanging censers, leaving behind a perfumed haze.",
            "7 letters, starts with I."
        ] 
    },
    458: { 
        question: "I am an ancient forked root resembling a tiny human figure, said in folklore to shriek lethally when pulled from earth. What am I?", 
        answer: "mandrake", 
        hints: [
            "A mythical nightshade plant whose craggy root looks like a body.",
            "Herbalists historically plugged their ears with wax when unearthing it.",
            "8 letters, starts with M."
        ] 
    },
    459: { 
        question: "I am a protective perimeter drawn upon stone floor with consecrated salt, keeping summoned entities at bay. What am I?", 
        answer: "pentacle", 
        hints: [
            "A geometric five-pointed star figure inscribed within a circle.",
            "Drawn on floor flagstones as a talisman of magical defense.",
            "8 letters, starts with P."
        ] 
    },
    460: { 
        question: "I am an animal companion sharing an arcane mental bond with a spellcaster, spying from rooftops in bird or feline form. What am I?", 
        answer: "familiar", 
        hints: [
            "A witch's supernatural animal guide, often a black cat, toad, or raven.",
            "Aids its magical master with supernatural cunning and stealth.",
            "8 letters, starts with F."
        ] 
    },
    461: { 
        question: "I am a carved protective charm of amber or bone, worn upon a leather cord around the throat to deflect dark hexes. What am I?", 
        answer: "talisman", 
        hints: [
            "An inscribed amulet believed to radiate good fortune and spiritual warding.",
            "Touches the wearer's chest to ward off evil spirits and illness.",
            "8 letters, starts with T."
        ] 
    },
    462: { 
        question: "I am a poisonous scarlet forest toadstool flecked with white warts, associated in fairy tales with witch dwellings. What am I?", 
        answer: "flyagaric", 
        hints: [
            "The iconic bright red mushroom featured in folklore and garden sculptures.",
            "Produces potent psychoactive toxins and hallucinogenic delirium.",
            "9 letters, starts with F."
        ] 
    },
    463: { 
        question: "I am an alchemical glass vessel with a long downturned neck, distilling essential oils and spirits over steady heat. What am I?", 
        answer: "retort", 
        hints: [
            "A classic laboratory flask with a bulbous body and long tapering neck.",
            "Used by medieval alchemists to vaporize and condense volatile liquids.",
            "6 letters, starts with R."
        ] 
    },
    464: { 
        question: "I am a dried aromatic plant hung in bundles from cottage rafters, said in legend to ward off vampires and werewolves. What am I?", 
        answer: "wolfsbane", 
        hints: [
            "A poisonous perennial herb also known as aconite or monkshood.",
            "Bears hooded purple flowers containing lethal neurotoxins.",
            "9 letters, starts with W."
        ] 
    },
    465: { 
        question: "I am a small cloth or wax effigy pierced with steel pins to inflict phantom ailments upon distant enemies in folklore. What am I?", 
        answer: "poppet", 
        hints: [
            "A handmade humanoid doll used in historic sympathetic folk magic.",
            "Stuffed with herbs and cloth scraps to represent a target.",
            "6 letters, starts with P."
        ] 
    },
    466: { 
        question: "I am a polished dish of black obsidian or still dark water, gazed into by seers to divine shadowy glimpses of the future. What am I?", 
        answer: "scryingglass", 
        hints: [
            "A reflective divination surface used by seers to induce visions.",
            "Practitioners stare into its dark depths to perceive distant events.",
            "12 letters, starts with S."
        ] 
    },
    467: { 
        question: "I am a sacred knife with a black handle and double-edged steel blade, used solely to cast circles and direct ritual force. What am I?", 
        answer: "athame", 
        hints: [
            "A ceremonial ceremonial blade featured in modern witchcraft traditions.",
            "Never used for physical cutting, but for drawing energetic boundaries.",
            "6 letters, starts with A."
        ] 
    },
    468: { 
        question: "I am the poisonous berry of belladonna, once dropped into eyes by court ladies to dilate pupils at mortal cost. What am I?", 
        answer: "nightshade", 
        hints: [
            "A toxic plant family yielding dark purple, glossy lethal berries.",
            "Contains dangerous atropine alkaloids that paralyze muscles.",
            "10 letters, starts with N."
        ] 
    },
    469: { 
        question: "I am a small leather pouch packed with dried graveyard earth, herbs, and bones, carried in pockets for occult mojo. What am I?", 
        answer: "gris-gris", 
        hints: [
            "A traditional folk magic talisman amulet bag originating in folklore.",
            "Contains a tailored mix of protective herbs, feathers, and inscribed prayers.",
            "7 letters (often typed GRISGRIS), starts with G."
        ] 
    },
    470: { 
        question: "I am a mythical stone pursued by alchemists for centuries, said to transmute base lead into pure gold and confer eternal life. What am I?", 
        answer: "philosophers", 
        hints: [
            "The legendary crown jewel of alchemy, known with 'stone' appended.",
            "Also called the magnum opus or elixir vitae of medieval science.",
            "12 letters, starts with P."
        ] 
    },
    471: { 
        question: "I am a silver bell rung in ritual halls to clear lingering malice and awaken the spirits of the compass quarters. What am I?", 
        answer: "chime", 
        hints: [
            "A high-pitched percussion instrument struck to produce a pure lingering tone.",
            "Its acoustic ring cleanses ritual spaces before incantations begin.",
            "5 letters, starts with C."
        ] 
    },
    472: { 
        question: "I am a dried four-leaf clover pressed between parchment leaves, sought in grassy meadows to bring uncanny fortune. What am I?", 
        answer: "shamrock", 
        hints: [
            "A rare botanical anomaly of the common trifolium clover plant.",
            "Folklore promises supreme luck and the ability to see woodland fairies.",
            "8 letters, starts with S."
        ] 
    },
    473: { 
        question: "I am an ornate chalice carved from ram horn or silver, brimming with honeyed mead during midnight coven assemblies. What am I?", 
        answer: "goblet", 
        hints: [
            "A drinking vessel featuring a bowl perched upon a stemmed base.",
            "Raised high in toasts by rulers, knights, and coven leaders.",
            "6 letters, starts with G."
        ] 
    },
    474: { 
        question: "I am a knotted cord of red silk used by maritime witches in folklore, untying one knot to unleash a breeze and three for a gale. What am I?", 
        answer: "windknot", 
        hints: [
            "A legendary maritime talisman sold to sailors to control ocean weather.",
            "Loosening the tied cords released trapped atmospheric storms.",
            "8 letters, starts with W."
        ] 
    },
    475: { 
        question: "The Witch's domain yields its secrets. Name the historical proto-science that pursued the transmutation of elements and eternal youth.", 
        answer: "alchemy", 
        hints: [
            "The medieval predecessor of chemistry blending metallurgy with philosophy.",
            "Practitioners sought the philosopher's stone and universal panacea.",
            "7 letters, starts with A."
        ] 
    },

    // --- REGION: Witch's Castle (Levels 476 - 500) ---
    476: { 
        question: "I am the innermost sanctuary of the fortress where the Queen languishes within a crystal cage. What am I?", 
        answer: "sanctum", 
        hints: [
            "A sacred, heavily fortified private retreat at the castle's core.",
            "The ultimate hall where the final confrontation takes place.",
            "7 letters, starts with S."
        ] 
    },
    477: { 
        question: "I am a throne carved from jagged black obsidian, resting beneath a vault of frozen lightning bolts. What am I?", 
        answer: "throne", 
        hints: [
            "The imposing ceremonial seat occupied by the dark sorceress.",
            "Kings sit upon it to dispense justice or tyranny across the land.",
            "6 letters, starts with T."
        ] 
    },
    478: { 
        question: "I am a diadem of beaten gold set with starry diamonds, stolen from Aurelia's rightful Queen. What am I?", 
        answer: "coronet", 
        hints: [
            "A small royal crown or jeweled circlet denoting sovereign authority.",
            "Worn upon the brow of royal ladies during formal court banquets.",
            "7 letters, starts with C."
        ] 
    },
    479: { 
        question: "I am a crystalline seal that has bound the Queen's speech, shatterable only by a word spoken without deceit. What am I?", 
        answer: "silence", 
        hints: [
            "The absence of all sound, speech, or audible vibration.",
            "A single honest syllable breaks its hold upon the air.",
            "7 letters, starts with S."
        ] 
    },
    480: { 
        question: "I am an iron key with three wards shaped like crowns, turning the lock that drops the crystal portcullis. What am I?", 
        answer: "skeletonkey", 
        hints: [
            "A master key whose bit has been filed down to open many different doors.",
            "Turns in heavy antique mortise locks where ordinary keys fail.",
            "11 letters, starts with S."
        ] 
    },
    481: { 
        question: "I am an ancient tapestry woven with threads of silver, depicting the rescue of the kingdom before the quest began. What am I?", 
        answer: "prophecy", 
        hints: [
            "A divinely inspired foretelling of future monumental events.",
            "Spoken by ancient oracles and preserved in historical chronicles.",
            "8 letters, starts with P."
        ] 
    },
    482: { 
        question: "I am the radiant blade forged from truth and patience, wielded not to slay but to sever dark bindings. What am I?", 
        answer: "broadsword", 
        hints: [
            "A heavy two-edged cutting blade fitted with a crossguard.",
            "The classic weapon of heroic knights marching on perilous quests.",
            "10 letters, starts with B."
        ] 
    },
    483: { 
        question: "I am the single spark of unwavering courage that survives inside the darkest cell when all lamps are dark. What am I?", 
        answer: "valor", 
        hints: [
            "Heroic bravery and bold courage in the face of imminent peril.",
            "The defining noble quality that distinguishes champions from cowards.",
            "5 letters, starts with V."
        ] 
    },
    484: { 
        question: "I am a shattered stone gargoyle that collapses from the castle roof as the dark enchantments begin to crumble. What am I?", 
        answer: "gargoyle", 
        hints: [
            "A carved grotesque stone beast perched on high cathedral gutters.",
            "Designed to spout rainwater away from masonry walls in historic fortresses.",
            "8 letters, starts with G."
        ] 
    },
    485: { 
        question: "I am the sound of heavy iron chains snapping link by link as five hundred wicked trials unravel. What am I?", 
        answer: "liberation", 
        hints: [
            "The release from captivity, servitude, or oppressive imprisonment.",
            "Celebrated by rescued captives stepping back out into the sun.",
            "10 letters, starts with L."
        ] 
    },
    486: { 
        question: "I am a golden tear shed upon the stone floor that turns into a fragrant white lily where it falls. What am I?", 
        answer: "miracle", 
        hints: [
            "An extraordinary, wonderful event attributed to supernatural grace.",
            "Defies scientific reason to bring healing and joy to the suffering.",
            "7 letters, starts with M."
        ] 
    },
    487: { 
        question: "I am the sudden rush of clear morning sunlight breaking through shattered stained-glass rose windows. What am I?", 
        answer: "daybreak", 
        hints: [
            "The very first appearance of light in the morning sky at dawn.",
            "Banishes shadows, cold mist, and the terrors of the dark night.",
            "8 letters, starts with D."
        ] 
    },
    488: { 
        question: "I am the loving embrace between King and Queen after months of perilous trials, melting sorrow into memory. What am I?", 
        answer: "reunion", 
        hints: [
            "The joyful gathering together of people after a long separation.",
            "Brings long-parted companions back into each other's arms.",
            "7 letters, starts with R."
        ] 
    },
    489: { 
        question: "I am the royal herald blowing a silver horn from the battlements, announcing the Witch's defeat to the realm. What am I?", 
        answer: "herald", 
        hints: [
            "An official royal messenger carrying proclamations and state news.",
            "Wears embroidered tabards displaying the royal arms of the king.",
            "6 letters, starts with H."
        ] 
    },
    490: { 
        question: "I am a magnificent gilded carriage pulled by four white stallions, bearing the restored monarchs home. What am I?", 
        answer: "chariot", 
        hints: [
            "A two-wheeled horse-drawn vehicle used in ancient pageantry and warfare.",
            "Races across roads bearing victorious rulers draped in laurel wreaths.",
            "7 letters, starts with C."
        ] 
    },
    491: { 
        question: "I am the roaring cheer echoing from tens of thousands of Aurelian citizens lining the capital boulevard. What am I?", 
        answer: "acclamation", 
        hints: [
            "Loud, enthusiastic praise or collective approval shouted by a crowd.",
            "Greets triumphant generals and returning monarchs with cheers.",
            "11 letters, starts with A."
        ] 
    },
    492: { 
        question: "I am a towering laurel wreath woven from fragrant bay leaves, placed upon the brow of the victorious ruler. What am I?", 
        answer: "garland", 
        hints: [
            "A circular decorative wreath of flowers, leaves, or ribbon.",
            "Worn around the head or hung on banquet walls during celebrations.",
            "7 letters, starts with G."
        ] 
    },
    493: { 
        question: "I am a lavish multi-course feast spread across oak tables in the Great Hall, celebrating the kingdom's restoration. What am I?", 
        answer: "banquet", 
        hints: [
            "A grand ceremonial public meal served with vintage wine and roasts.",
            "Minstrels play lutes while lords and commoners feast together in peace.",
            "7 letters, starts with B."
        ] 
    },
    494: { 
        question: "I am the lasting state of harmony and safety that settles over Aurelia, free from terror forevermore. What am I?", 
        answer: "peace", 
        hints: [
            "Freedom from civil disturbance, conflict, or the ravages of war.",
            "Farmers plow fields in security and trade routes flourish without fear.",
            "5 letters, starts with P."
        ] 
    },
    495: { 
        question: "I am a golden medal struck by the Royal Mint, inscribed with 'Victor of the Five Hundred Trials'. What am I?", 
        answer: "medallion", 
        hints: [
            "A large decorative coin or disc awarded to honor an extraordinary feat.",
            "Worn on a silk sash across the breast of the realm's champion.",
            "9 letters, starts with M."
        ] 
    },
    496: { 
        question: "I am the ancient oak throne room of Aurelia, restored to light with clean banners and singing fountains. What am I?", 
        answer: "palace", 
        hints: [
            "The grand official residence of the sovereign monarch and court.",
            "Contains state apartments, council chambers, and royal ballrooms.",
            "6 letters, starts with P."
        ] 
    },
    497: { 
        question: "I am the illuminated parchment chronicle preserving every trial and answer so posterity never forgets the quest. What am I?", 
        answer: "manuscript", 
        hints: [
            "A handwritten historical document penned before modern printing presses.",
            "Adorned with gold leaf, painted calligraphy, and fine illustrations.",
            "10 letters, starts with M."
        ] 
    },
    498: { 
        question: "I am the enduring fame earned through wit and resolve, passed down in bardic songs across generations. What am I?", 
        answer: "renown", 
        hints: [
            "Widespread honor, distinction, and celebratory fame.",
            "Accompanies great champions whose deeds are celebrated by future eras.",
            "6 letters, starts with R."
        ] 
    },
    499: { 
        question: "I am the final line inked on the last page of the great chronicle, marking the close of this five-hundred-trial journey. What am I?", 
        answer: "epilogue", 
        hints: [
            "A concluding section or poem that rounds out a finished literary tale.",
            "Reveals the peaceful future of the heroes after the primary adventure ends.",
            "8 letters, starts with E."
        ] 
    },
    500: { 
        question: "The five hundred trials are about to be conquered. The Witch bows before you. Name the supreme virtue that outsmarted every hex and freed the realm.", 
        answer: "love", 
        hints: [
            "The profound devotion and selfless affection that drove the King to cross twenty perilous realms[cite: 6].",
            "Stronger than steel armor, deeper than ancient sorcery, and triumphant over all darkness[cite: 5].",
            "4 letters, starts with L."
        ] 
    },
    };