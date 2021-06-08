// D&D 5e API = https://www.dnd5eapi.co

// function to establish character race

let raceSelect = Math.ceil(Math.random() * 9)
let uri = "https://www.dnd5eapi.co/api/races/"
let race = document.querySelector("#race")

fetch(uri)
    .then(res => res.json())
    .then(data => {
        let randomIndex = Math.floor(Math.random()*data.results.length)
        race.textContent = data.results[randomIndex].index;
        console.log(data);
    })

// function to establish character class

// function to establish monster

// function to establish value