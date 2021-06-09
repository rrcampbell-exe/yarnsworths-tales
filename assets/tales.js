// D&D 5e API = https://www.dnd5eapi.co

// function to establish character race

let raceSelect = Math.ceil(Math.random() * 9)
let apiRace = "https://www.dnd5eapi.co/api/races/"
let race = document.querySelector("#race")

fetch(apiRace)
    .then(res => res.json())
    .then(data => {
        let randomIndex = Math.floor(Math.random()*data.results.length)
        race.textContent = data.results[randomIndex].index;
        console.log(data);
    })

// function to establish character class

let classSelect = Math.ceil(Math.random() * 12)
let apiClass = "https://www.dnd5eapi.co/api/classes/"
let heroClass = document.querySelector("#class")

fetch(apiClass)
    .then(res => res.json())
    .then(data => {
        let randomIndex = Math.floor(Math.random()*data.results.length)
        heroClass.textContent = data.results[randomIndex].index;
        console.log(data)
    })

// function to establish monster

let monsterSelect = Math.ceil(Math.random() * 332)
let apiMonster = "https://www.dnd5eapi.co/api/monsters/"
let monster = document.querySelector("#monster")

fetch(apiMonster)
    .then(res => res.json())
    .then(data => {
        let randomIndex = Math.floor(Math.random()*data.results.length)
        monster.textContent = data.results[randomIndex].name.toLowerCase();
        console.log(data)
    })

// function to establish value

let valueSet = ["honor", "love", "untold riches", "fame", "the truth", "faith", "adventure", "beauty", "balance", "justice", "virtue", "friendship", "liberty", "the pursuit of happiness", "fun", "influence", "knowledge", "general mischief", "loyalty", "pleasure", "recognition", "peace", "security", "self-respect", "stability", "family", "status", "wisdom", "vengeance"]
let valueSelect = Math.ceil(Math.random() * valueSet.length)
let value = document.querySelector("#value")

let randomIndex = Math.floor(Math.random() * valueSet.length)
console.log(randomIndex)
value.textContent = valueSet[randomIndex];
console.log(valueSet[randomIndex])