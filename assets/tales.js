// D&D 5e API = https://www.dnd5eapi.co

// function to establish character race

let raceSelect = Math.ceil(Math.random() * 9)
let uri = "https://www.dnd5eapi.co/api/races/"
let race = document.querySelector("#randomRace")

fetch(uri)
    .then(res => res.json())
    .then(data => {
        race.setAttribute("src", data.results.index)
        console.log(raceSelect);
    })

// function to establish character class

// function to establish monster

// function to establish value