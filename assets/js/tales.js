const countObj = {
    raceCount: "",
    classCount: "",
    verbCount: "",
    monsterCount: "",
    valueCount: "",
    talesTotal: "",
}

let heroAdjFinal = ""
let monsterAdjFinal = ""

// FUNCTION TO GENERATE HERO DATA

let heroData = function () {

    // function to establish adjective for hero
    {
        let heroAdj = document.querySelector("#hero-adj")
        let randomIndex = Math.floor(Math.random() * heroAdjSet.length)
        heroAdj.textContent = heroAdjSet[randomIndex];
        heroAdjFinal = heroAdj.textContent
    };

    // function to establish hero race
    let apiRace = "https://www.dnd5eapi.co/api/races/"
    let race = document.querySelectorAll(".hero-race");

    fetch(apiRace)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * (data.results.length + 1))
            countObj.raceCount = (data.results.length + uncommonRaces.length)
            talesCount(countObj.raceCount)
            race.forEach(node => {
                if (randomIndex < data.results.length) {
                    node.textContent = data.results[randomIndex].index;
                } else {
                    let uncommonRaceIndex = Math.floor(Math.random() * uncommonRaces.length)
                    race.forEach(node => {
                        node.textContent = uncommonRaces[uncommonRaceIndex]
                    })
                }
            });
        })

    // function to establish hero class
    let apiClass = "https://www.dnd5eapi.co/api/classes/"
    let heroClass = document.querySelectorAll(".hero-class")

    fetch(apiClass)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * (data.results.length +1))
            countObj.classCount = (data.results.length + uncommonClasses.length)
            talesCount(countObj.classCount)
            heroClass.forEach(node => {
                if (randomIndex < data.results.length) {
                    node.textContent = data.results[randomIndex].index;
                } else {
                    let uncommonClassIndex = Math.floor(Math.random() * uncommonClasses.length)
                    node.textContent = uncommonClasses[uncommonClassIndex]
                }
            });
        })

    // function to establish hero's value
    let value = document.querySelectorAll(".value")
    let randomIndex = Math.floor(Math.random() * valueSet.length)
    value.textContent = valueSet[randomIndex];

    // cascading logic if "vengeance" is chosen as hero's value
    if (valueSet[randomIndex] === "vengeance") {
        let randomIndex = Math.floor(Math.random() * venge.length)
        value.textContent += venge[randomIndex];
    };

    // cascading logic if "faith" is chosen as hero's value
    if (valueSet[randomIndex] === "faith") {
        let randomIndex = Math.floor(Math.random() * gods.length)
        value.textContent = gods[randomIndex];
    };

    // cascading logic if "loyalty" is chosen as hero's value
    if (valueSet[randomIndex] === "loyalty") {
        let randomIndex = Math.floor(Math.random() * loyalties.length)
        value.textContent += loyalties[randomIndex];
    };
    countObj.valueCount = (valueSet.length + venge.length + gods.length + loyalties.length)
    talesCount(countObj.valueCount)
};

// FUNCTION TO SELECT VERB

let verbChoice = function () {
    let verb = document.querySelector("#verb")
    let randomIndex = Math.floor(Math.random() * verbSet.length)
    verb.textContent = verbSet[randomIndex]
    countObj.verbCount = verbSet.length
    talesCount(countObj.verbCount)
};

// FUNCTION TO GENERATE MONSTER DATA

let monsterData = function () {
    // function to establish adjective for monster
    {
        let monsterAdj = document.querySelector("#monster-adj")
        let randomIndex = Math.floor(Math.random() * monsterAdjSet.length)
        monsterAdj.textContent = monsterAdjSet[randomIndex]
        monsterAdjFinal = monsterAdj.textContent
    };
    // function to establish monster
    let apiMonster = "https://www.dnd5eapi.co/api/monsters/"
    let monster = document.querySelector("#monster")

    fetch(apiMonster)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length)
            countObj.monsterCount = data.results.length
            talesCount(countObj.monsterCount)
            let monsterText = data.results[randomIndex].name.toLowerCase() 
            if (monsterText.includes(",")) {
                monster.textContent = monsterText.split(',')[0]
            } else {
                monster.textContent = monsterText
            }
        })
};

// FUNCTIONS TO DETERMINE INDEFINITE ARTICLES
function heroIndefArtAssign() {
    const heroLetter = heroAdjFinal.charAt(0).toLowerCase();
    let heroArticle = document.querySelectorAll(".hero-article")

    if (
        heroLetter === "a" ||
        heroLetter === "e" ||
        heroLetter === "i" ||
        heroLetter === "o" ||
        heroLetter === "u"
    ) {
        heroArticle.forEach(node => {
            node.textContent = "an"
        }) 
        return;
    } else {
        heroArticle.forEach(node => {
            node.textContent = "a"
        }) 
        return;
    }
}

function monsterIndefArtAssign() {
    const monsterLetter = monsterAdjFinal.charAt(0).toLowerCase();
    let monsterArticle = document.querySelectorAll(".monster-article")

    if (
        monsterLetter === "a" ||
        monsterLetter === "e" ||
        monsterLetter === "i" ||
        monsterLetter === "o" ||
        monsterLetter === "u"
    ) {
        monsterArticle.forEach(node => {
            node.textContent = "an"
        }) 
        return;
    } else {
        monsterArticle.forEach(node => {
            node.textContent = "a"
        }) 
        return;
    }
}

// functions to affect visibility of story content on page load and on button click
let taleVisibility = function () {
    let taleContent = document.querySelectorAll(".tale-intro p")
    taleContent.forEach(node => {
        $(taleContent).fadeIn(1000);
        node.style.visibility = "visible"
    })
};

let taleInvisibility = function () {
    let taleContent = document.querySelectorAll(".tale-intro p")
    taleContent.forEach(node => {
        $(taleContent).fadeOut(500);
        node.style.visibility = "hidden"
    })
};

// function to delay appearance of story text
let delayFunction = function () {
    setTimeout(taleVisibility, 500);
};

// function to slide Yarnsworth from sidebar and into tale content on button click (tablet and larger devices only)
let yarnsyShake = function() {
    $( "#container-yarnsy" ).effect( "shake", {times:1}, 500)
}

let talesShake = function () {
    $ ( "#tale-intro" ).effect( "puff" )
    $ ( "#tale-intro" ).show( "fast" );
}

// FUNCTION TO GET COUNT OF UNIQUE TALE COMBINATIONS

function talesCount() {
    var talesTotal = (posAdjSetPeople.length + neutAdjSetPeople.length) * countObj.raceCount * countObj.classCount * countObj.verbCount * (neutAdjSetPeople.length + negAdjSetPeople.length) * countObj.monsterCount * countObj.valueCount
    countObj.talesTotal = talesTotal.toLocaleString()
    displayCount(countObj.talesTotal)
}

function displayCount() {
    let countDisplay = document.querySelector("#tale-count")
    countDisplay.textContent = countObj.talesTotal
}

// function to generate new tale on button click
var tellMeAnotherYarnsyEl = document.getElementById("another-yarnsy")
tellMeAnotherYarnsyEl.addEventListener("click", () => {
    taleInvisibility();
    yarnsyShake();
    talesShake();
    delayFunction();
    heroData();
    verbChoice();
    monsterData();
    setTimeout(heroIndefArtAssign, 200)
    setTimeout(monsterIndefArtAssign, 200)
});

// RUNNING OF FUNCTIONS

taleInvisibility();
heroData();
verbChoice();
monsterData();
displayCount();
setTimeout(heroIndefArtAssign, 200)
setTimeout(monsterIndefArtAssign, 200)
delayFunction();