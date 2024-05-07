// Object to store counts
const countObj = {
    raceCount: "",
    classCount: "",
    verbCount: "",
    monsterCount: "",
    valueCount: "",
    talesTotal: "",
}

// Global variables for hero and monster adjectives
let heroAdjFinal = "";
let monsterAdjFinal = "";

// Function to generate hero data
let heroData = function () {
    // Function to get a random element from an array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    // Establish hero adjective
    {
        let heroAdj = document.querySelector("#hero-adj");
        let randomIndex = Math.floor(Math.random() * heroAdjSet.length);
        heroAdj.textContent = heroAdjSet[randomIndex];
        heroAdjFinal = heroAdj.textContent;
    }

    // Establish hero race
    let apiRace = "https://www.dnd5eapi.co/api/races/";
    let race = document.querySelectorAll(".race");

    fetch(apiRace)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * (data.results.length + 1));
            countObj.raceCount = (data.results.length + uncommonRaces.length);
            talesCount(countObj.raceCount);
            race.forEach(node => {
                if (randomIndex < data.results.length) {
                    node.textContent = data.results[randomIndex].index;
                } else {
                    let uncommonRaceIndex = Math.floor(Math.random() * uncommonRaces.length);
                    race.forEach(node => {
                        node.textContent = uncommonRaces[uncommonRaceIndex];
                    });
                }
            });
        });

    // Establish hero class
    let apiClass = "https://www.dnd5eapi.co/api/classes/";
    let heroClass = document.querySelectorAll(".class");

    fetch(apiClass)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * (data.results.length + 1));
            countObj.classCount = (data.results.length + uncommonClasses.length);
            talesCount(countObj.classCount);
            heroClass.forEach(node => {
                if (randomIndex < data.results.length) {
                    node.textContent = data.results[randomIndex].index;
                } else {
                    let uncommonClassIndex = Math.floor(Math.random() * uncommonClasses.length);
                    node.textContent = uncommonClasses[uncommonClassIndex];
                }
            });
        });

    // Establish hero value
    const value = document.querySelector("#value");
    const randomIndex = Math.floor(Math.random() * valueSet.length);
    value.textContent = valueSet[randomIndex];

    // Cascading logic based on hero's value
    switch (valueSet[randomIndex]) {
        case "vengeance":
            value.textContent += getRandomElement(venge);
            break;
        case "faith":
            value.textContent = getRandomElement(gods);
            break;
        case "loyalty":
            value.textContent += getRandomElement(loyalties);
            break;
        default:
            break;
    }
    countObj.valueCount = (valueSet.length + venge.length + gods.length + loyalties.length);
    talesCount(countObj.valueCount);
};

// Function to select verb
let verbChoice = function () {
    let verb = document.querySelector("#verb");
    let randomIndex = Math.floor(Math.random() * verbSet.length);
    verb.textContent = verbSet[randomIndex];
    countObj.verbCount = verbSet.length;
    talesCount(countObj.verbCount);
};

// Function to generate monster data
let monsterData = function () {
    // Establish monster adjective
    {
        let monsterAdj = document.querySelector("#monster-adj");
        let randomIndex = Math.floor(Math.random() * monsterAdjSet.length);
        monsterAdj.textContent = monsterAdjSet[randomIndex];
        monsterAdjFinal = monsterAdj.textContent;
    }

    // Establish monster
    let apiMonster = "https://www.dnd5eapi.co/api/monsters/";
    let monster = document.querySelector("#monster");

    fetch(apiMonster)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length);
            countObj.monsterCount = data.results.length;
            talesCount(countObj.monsterCount);
            let monsterText = data.results[randomIndex].name.toLowerCase();
            if (monsterText.includes(",")) {
                monster.textContent = monsterText.split(',')[0];
            } else {
                monster.textContent = monsterText;
            }
        });
};

// Function to assign indefinite article to hero
function heroIndefArtAssign() {
    const heroLetter = heroAdjFinal.charAt(0).toLowerCase();
    const heroArticle = document.querySelectorAll(".hero-article");
    const article = (["a", "e", "i", "o", "u"].includes(heroLetter)) ? "an" : "a";

    heroArticle.forEach(node => {
        node.textContent = article;
    });
}

// Function to assign indefinite article to monster
function monsterIndefArtAssign() {
    const monsterLetter = monsterAdjFinal.charAt(0).toLowerCase();
    const monsterArticle = document.querySelectorAll(".monster-article");
    const article = (["a", "e", "i", "o", "u"].includes(monsterLetter)) ? "an" : "a";

    monsterArticle.forEach(node => {
        node.textContent = article;
    });
}

// Function to affect visibility of story content on page load and on button click
let taleVisibility = function () {
    let taleContent = document.querySelectorAll(".tale-intro p");
    taleContent.forEach(node => {
        $(taleContent).fadeIn(1000);
        node.style.visibility = "visible";
    });
};

let taleInvisibility = function () {
    let taleContent = document.querySelectorAll(".tale-intro p");
    taleContent.forEach(node => {
        $(taleContent).fadeOut(500);
        node.style.visibility = "hidden";
    });
};

// Function to delay appearance of story text
let delayFunction = function () {
    setTimeout(taleVisibility, 500);
};

// Function to slide Yarnsworth from sidebar and into tale content on button click (tablet and larger devices only)
let yarnsyShake = function() {
    $( "#container-yarnsy" ).effect( "shake", {times:1}, 500);
};

let talesShake = function () {
    $ ( "#tale-intro" ).effect( "puff" );
    $ ( "#tale-intro" ).show( "fast" );
};

// Function to get count of unique tale combinations
function talesCount() {
    var talesTotal = (posAdjSetPeople.length + neutAdjSetPeople.length) * countObj.raceCount * countObj.classCount * countObj.verbCount * (neutAdjSetPeople.length + negAdjSetPeople.length) * countObj.monsterCount * countObj.valueCount;
    countObj.talesTotal = talesTotal.toLocaleString();
    displayCount(countObj.talesTotal);
}

// Function to display count
function displayCount() {
    let countDisplay = document.querySelector("#tale-count");
    countDisplay.textContent = countObj.talesTotal;
}

// Function to generate new tale on button click
var tellMeAnotherYarnsyEl = document.getElementById("another-yarnsy");
tellMeAnotherYarnsyEl.addEventListener("click", () => {
    taleInvisibility();
    yarnsyShake();
    talesShake();
    delayFunction();
    heroData();
    verbChoice();
    monsterData();
    setTimeout(heroIndefArtAssign, 200);
    setTimeout(monsterIndefArtAssign, 200);
});

// Running of functions
taleInvisibility();
heroData();
verbChoice();
monsterData();
displayCount();
setTimeout(heroIndefArtAssign, 200);
setTimeout(monsterIndefArtAssign, 200);
delayFunction();
