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
            let randomIndex = Math.floor(Math.random() * (data.results.length + 1))
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

    // function to establish character's name
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            let heroName = document.querySelectorAll(".hero-name")
            heroName.forEach(node => {
                node.textContent = data.results[0].name.first
            })
        }
    });

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