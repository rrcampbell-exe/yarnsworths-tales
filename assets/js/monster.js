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