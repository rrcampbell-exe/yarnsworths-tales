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

// SELECT TIME EXPRESSION, PLURAL
function timeExpPluralChoice() {
    let timeExpPlural = document.querySelector("#time-exp-plural")
    let randomIndex = Math.floor(Math.random() * timeExpPluralSet.length)
    timeExpPlural.textContent = timeExpPluralSet[randomIndex]
}

// SELECT TIME EXPRESSION, SINGULAR

function timeExpSingularChoice() {
    let timeExpSingular = document.querySelector("#time-exp-singular");
    let randomIndex = Math.floor(Math.random() * timeExpSingularSet.length);
    timeExpSingular.textContent = timeExpSingularSet[randomIndex]
}

// SELECT REGION OF FAERUN

function faerunRegionChoice() {
    let faerunRegion = document.querySelector(".faerun-location");
    let randomIndex = Math.floor(Math.random() * faerunRegionSet.length);
    faerunRegion.textContent = faerunRegionSet[randomIndex]
}

// SELECT INCITING TRANSITION

function incitingTransitionChoice() {
    let incitingTransition = document.querySelector(".inciting-transition");
    let randomIndex = Math.floor(Math.random() * incitingTransitionSet.length);
    incitingTransition.textContent = incitingTransitionSet[randomIndex];
}

// SELECT INCITING VERB

function incitingVerbChoice() {
    let incitingVerb = document.querySelector(".inciting-verb");
    let randomIndex = Math.floor(Math.random() * incitingVerbSet.length);
    incitingVerb.textContent = incitingVerbSet[randomIndex];
}

// SELECT AFFECTED PARTY, INCITING INCIDENT

function affectedPartyChoice() {
    let affectedParty = document.querySelector(".inciting-affected-party");
    let randomIndex = Math.floor(Math.random() * affectedPartySet.length);
    affectedParty.textContent = affectedPartySet[randomIndex];
}

// SELECT VERB

let verbChoice = function () {
    let verb = document.querySelector("#verb")
    let randomIndex = Math.floor(Math.random() * verbSet.length)
    verb.textContent = verbSet[randomIndex]
    countObj.verbCount = verbSet.length
    talesCount(countObj.verbCount)
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
    timeExpPluralChoice();
    timeExpSingularChoice();
    faerunRegionChoice();
    incitingTransitionChoice();
    incitingVerbChoice()
    affectedPartyChoice()
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
timeExpPluralChoice();
timeExpSingularChoice();
faerunRegionChoice();
incitingTransitionChoice()
incitingVerbChoice()
affectedPartyChoice()
heroData();
verbChoice();
monsterData();
displayCount();
setTimeout(heroIndefArtAssign, 200)
setTimeout(monsterIndefArtAssign, 200)
delayFunction();