// FUNCTION TO GENERATE HERO DATA

let heroData = function () {

    // function to establish adjective for hero
    {
        let heroAdj = document.querySelector("#hero-adj")
        let randomIndex = Math.floor(Math.random() * heroAdjSet.length)
        heroAdj.textContent = heroAdjSet[randomIndex];
    };

    // function to establish hero race
    let apiRace = "https://www.dnd5eapi.co/api/races/"
    let race = document.querySelectorAll(".race");

    fetch(apiRace)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * (data.results.length + 1))
            console.log(data.results[randomIndex]?.index)
            switch (data.results[randomIndex]?.index) {
                case "dragonborn":
                case "half-elf":
                case "half-orc":
                case "human":
                case "tiefling":
                    race.forEach(node => {
                        node.textContent = data.results[randomIndex].index;
                    })
                    break;
                case "elf":
                    race.forEach(node => {
                        subRaceIndex = Math.floor(Math.random() * elfSubrace.length);
                        node.textContent = elfSubrace[subRaceIndex] + " " + data.results[randomIndex].index;
                    })
                    break;
                case "dwarf":
                    race.forEach(node => {
                        subRaceIndex = Math.floor(Math.random() * dwarfSubrace.length);
                        node.textContent = dwarfSubrace[subRaceIndex] + " " + data.results[randomIndex].index;
                    })
                    break;
                case "gnome":
                    race.forEach(node => {
                        subRaceIndex = Math.floor(Math.random() * gnomeSubrace.length);
                        node.textContent = gnomeSubrace[subRaceIndex] + " " + data.results[randomIndex].index;
                    })
                    break;
                case "halfling":
                    race.forEach(node => {
                        subRaceIndex = Math.floor(Math.random() * halflingSubrace.length);
                        node.textContent = halflingSubrace[subRaceIndex] + " " + data.results[randomIndex].index;
                    })
                    break;
                default:
                    race.forEach(node => {
                        let uncommonRaceIndex = Math.floor(Math.random() * uncommonRaces.length)
                        node.textContent = uncommonRaces[uncommonRaceIndex];
                        console.log(uncommonRaces[uncommonRaceIndex]);
                    })
                    break;
            }
        })

    // function to establish hero class
    let apiClass = "https://www.dnd5eapi.co/api/classes/"
    let heroClass = document.querySelectorAll(".class")

    fetch(apiClass)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * (data.results.length + 1))
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
    let value = document.querySelector("#value")
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
};

// FUNCTION TO SELECT VERB

let verbChoice = function () {
    let verb = document.querySelector("#verb")
    let randomIndex = Math.floor(Math.random() * verbSet.length)
    verb.textContent = verbSet[randomIndex];
};

// FUNCTION TO GENERATE MONSTER DATA

let monsterData = function () {
    // function to establish adjective for monster
    {
        // let monsterAdjSelect = Match.ceil(Math.random() * monsterAdjSet.length)
        let monsterAdj = document.querySelector("#monster-adj")
        let randomIndex = Math.floor(Math.random() * monsterAdjSet.length)
        console.log(randomIndex)
        monsterAdj.textContent = monsterAdjSet[randomIndex];
    };
    // function to establish monster
    let apiMonster = "https://www.dnd5eapi.co/api/monsters/"
    let monster = document.querySelector("#monster")

    fetch(apiMonster)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length)
            let monsterText = data.results[randomIndex].name.toLowerCase()
            console.log(monsterText)
            if (monsterText.includes(",")) {
                monster.textContent = monsterText.split(',')[0]
            } else {
                monster.textContent = monsterText
            }
        })
};

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
let yarnsyShake = function () {
    $("#container-yarnsy").effect("shake", { times: 1 }, 500)
}

let talesShake = function () {
    $("#tale-intro").effect("puff")
    $("#tale-intro").show("fast");
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
});

// RUNNING OF FUNCTIONS

taleInvisibility();
heroData();
verbChoice();
monsterData();
delayFunction();