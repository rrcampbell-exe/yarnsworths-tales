// FUNCTION TO GENERATE HERO DATA

let heroData = function () {

    // function to establish adjective for hero
    {
        let heroAdjSet = ["bad", "barbarous", "bashful", "bawdy", "beautiful", "befitting", "belligerent", "beneficial", "bent", "berserk", "bewildered", "big", "billowy", "bite-sized", "bitter", "bizarre", "black", "black-and-white", "bloody", "blue", "blue-eyed", "blushing", "boiling", "boorish", "bored", "boring", "bouncy", "boundless", "brainy", "brash", "brave", "brawny", "breakable", "breezy", "brief", "bright", "bright", "broad", "broken", "brown", "bumpy", "burly", "bustling", "busy", "cagey", "calculating", "callous", "calm", "capable", "capricious", "careful", "careless", "caring", "cautious", "ceaseless", "certain", "changeable", "charming", "cheap", "cheerful", "chemical", "chief", "childlike", "chilly", "chivalrous", "chubby", "chunky", "clammy", "classy", "clean", "clear", "clever", "cloistered", "cloudy", "closed", "clumsy", "cluttered", "coherent", "cold", "colorful", "colossal", "combative", "comfortable", "common", "complete", "complex", "concerned", "condemned", "confused", "conscious", "cooing", "cool", "cooperative", "coordinated", "courageous", "cowardly", "crabby", "craven", "crazy", "creepy", "crooked", "crowded", "cruel", "cuddly", "cultured", "cumbersome", "curious", "curly", "curved", "curvy", "cut", "cute", "cute", "cynical", "daffy", "daily", "damaged", "damaging", "damp", "dangerous", "dapper", "dark", "dashing", "dazzling", "dead", "deadpan", "deafening", "dear", "debonair", "decisive", "decorous", "deep", "deeply", "defeated", "defective", "defiant", "delicate", "delicious", "delightful", "demonic", "delirious", "dependent", "depressed", "deranged", "descriptive", "deserted", "detailed", "determined", "devilish", "didactic", "different", "difficult", "diligent", "direful", "dirty", "disagreeable", "disastrous", "discreet", "disgusted", "disgusting", "disillusioned", "dispensable", "distinct", "disturbed", "divergent", "dizzy", "domineering", "doubtful", "drab", "draconian", "dramatic", "dreary", "drunk", "dry", "dull", "dusty", "dynamic", "dysfunctional", "fabulous", "faded", "faint fair", "faithful", "fallacious", "false","familiar", "famous", "fanatical", "fancy", "fantastic", "far", " far-flung", " fascinated", "fast", "fat faulty", "fearful fearless", "feeble feigned", "female fertile", "festive", "few fierce", "filthy", "fine", "finicky", "fixed", "flagrant", "flaky", "flashy", "flat", "flawless", "flimsy", " flippant", "flowery", "fluffy", "fluttering", " foamy", "foolish", "foregoing", "forgetful", "fortunate", "frail", "fragile", "frantic", "free", " freezing", " frequent", " fresh", " fretful", "friendly", "frightened", "frightening", "full", "fumbling", "functional", "funny", "furry", "furtive", "future futuristic", "fuzzy ", "gabby", "gainful", "gamy", "gaping", "garrulous", "gaudy", "general gentle", "giant", "giddy", "gifted", "gigantic", "glamorous", "gleaming", "glib", "glistening glorious", "glossy", "godly", "good", "goofy", "gorgeous", "graceful", "grandiose", "grateful", "gray", "greasy", "great", "greedy", "green","grey","grieving", "groovy", "grotesque", "grouchy", "grubby", "gruesome", "grumpy", "guarded", "guiltless", "gullible", "gusty", "guttural", "jaded", "jagged", "jazzy", "jealous", "jittery", "jobless", "jolly", "joyous", "judicious", "juicy", "jumbled", "jumpy", "juvenile", "kaput", "keen", "kind", "kindhearted", "kindly", "knotty", "knowing", "knowledgeable", "known", "labored", "lackadaisical", "lacking", "lame", "lamentable", "languid", "large", "last", "late", "laughable", "lavish", "lazy", "lean", "learned", "left", "legal", "lethal", "level", "lewd", "light", "like", "likeable", "limping", "literate", "little", "lively", "lively", "living", "lonely", "long", "longing", "long-term", "loose", "lopsided", "loud", "loutish", "lovely", "loving", "low", "lowly", "lucky", "ludicrous", "lumpy", "lush", "luxuriant", "lying", "lyrical", "macabre", "macho", "maddening", "madly", "magenta", "magical", "magnificent", "majestic", "makeshift", "male", "malicious", "mammoth", "maniacal", "many", "marked", "massive", "married", "marvelous", "material", "materialistic", "mature", "mean", "measly", "meaty", "medical", "meek", "mellow", "melodic", "melted", "merciful", "mere", "messy", "mighty", "military", "milky", "mindless", "miniature", "minor", "miscreant", "misty", "mixed", "moaning", "modern", "moldy", "momentous", "motionless", "mountainous", "muddled", "mundane", "murky", "mushy", "mute", "mysterious", "naive", "nappy", "narrow", "nasty", "natural", "naughty", "nauseating", "near", "neat", "nebulous", "necessary", "needless", "needy", "neighborly", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "noiseless", "noisy", "nonchalant", "nondescript", "nonstop", "normal", "nostalgic", "nosy", "noxious", "nutritious", "nutty", "painful", "painstaking", "pale", "paltry", "panicky", "panoramic", "parallel", "parched", "parsimonious", "past", "pastoral", "pathetic", "peaceful", "penitent", "perfect", "periodic", "permissible", "perpetual", "petite", "petite", "phobic", "physical", "picayune", "pink", "piquant", "placid", "plain", "plant", "plastic", "plausible", "pleasant", "plucky", "pointless", "poised", "polite", "political", "poor", "possessive", "possible", "powerful", "precious", "premium", "present", "pretty", "previous", "pricey", "prickly", "private", "probable", "productive", "profuse", "protective", "proud", "psychedelic", "psychotic", "public", "puffy", "pumped", "puny", "purple", "purring", "pushy", "puzzled", "puzzling", "quack", "quaint", "quarrelsome", "questionable", "quick", "quickest", "quiet", "quirky", "quixotic", "quizzical", "rabid", "racial", "ragged", "rainy", "rambunctious", "rampant", "rapid", "rare", "raspy", "ratty", "ready", "real", "rebel", "receptive", "recondite", "red", "redundant", "reflective", "regular", "relieved", "remarkable", "reminiscent", "repulsive", "resolute", "resonant", "responsible", "rhetorical", "rich", "right", "righteous", "rightful", "rigid", "ripe", "ritzy", "roasted", "robust", "romantic", "roomy", "rotten", "rough", "round", "royal", "ruddy", "rude", "rural", "rustic", "ruthless", "sable", "sad", "safe", "salty", "same", "sassy", "satisfying", "savory", "scandalous", "scarce", "scared", "scary", "scattered", "scientific", "scintillating", "scrawny", "screeching", "second-hand", "secret", "secretive", "sedate", "seemly", "selective", "selfish", "separate", "serious", "shaggy", "shaky", "shallow", "sharp", "shiny", "shivering", "shocking", "short", "shrill", "shut", "shy", "sick", "silent", "silent", "silky", "silly", "simple", "simplistic", "sincere", "skillful", "skinny", "sleepy", "slim", "slimy", "slippery", "sloppy", "slow", "small", "smart", "smelly", "smiling", "smoggy", "smooth", "sneaky", "snobbish", "snotty", "soft", "soggy", "solid", "somber", "sophisticated", "sordid", "sore", "sore", "sour", "sparkling", "special", "spectacular", "spicy", "spiffy", "spiky", "spiritual", "spiteful", "splendid", "spooky", "spotless", "spotted", "spotty", "spurious", "squalid", "square", "squealing", "squeamish", "staking", "stale", "standing", "statuesque", "steadfast", "steady", "steep", "stereotyped", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "striped", "strong", "stupendous", "stupid", "sturdy", "subdued", "subsequent", "substantial", "successful", "succinct", "sudden", "sulky", "super", "superb", "superficial", "supreme", "swanky", "sweet", "sweltering", "swift", "symptomatic", "synonymous", "taboo", "tacit", "tacky", "talented", "tall", "tame", "tan", "tangible", "tangy", "tart", "tasteful", "tasteless", "tasty", "tawdry", "tearful", "tedious", "teeny", "teeny-tiny", "telling", "temporary", "tender", "tense", "tenuous", "terrible", "terrific", "tested", "testy", "thankful", "therapeutic", "thick", "thin", "thinkable", "thirsty", "thoughtful", "thoughtless", "threatening", "thundering", "tidy", "tight", "tightfisted", "tiny", "tired", "tiresome", "toothsome", "torpid", "tough", "towering", "tranquil", "trashy", "tremendous", "tricky", "trite", "troubled", "truculent", "true", "truthful", "typical", "vacuous", "vagabond", "vague", "valuable", "various", "vast", "vengeful", "venomous", "verdant", "versed", "victorious", "vigorous", "violent", "violet", "vivacious", "voiceless", "volatile", "voracious", "vulgar", "wacky", "waggish", "waiting", "wakeful", "wandering", "wanting", "warlike", "warm", "wary", "wasteful", "watery", "weak", "wealthy", "weary", "well-groomed", "well-made", "well-off", "well-to-do", "wet", "whimsical", "whispering", "white", "whole", "wholesale", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "windy", "wiry", "wise", "wistful", "witty", "woebegone", "womanly", "wonderful", "wooden", "woozy", "worried", "worthless", "wrathful", "wretched", "wrong", "wry", "xenophobic", "yellow", "yielding", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zippy", "zonked"];
        let heroAdj = document.querySelector("#hero-adj")

        let randomIndex = Math.floor(Math.random() * heroAdjSet.length)
        console.log(randomIndex)
        heroAdj.textContent = heroAdjSet[randomIndex];
        console.log(heroAdjSet[randomIndex]);
    };

    // function to establish hero race

    let raceSelect = Math.ceil(Math.random() * 9)
    let apiRace = "https://www.dnd5eapi.co/api/races/"
    let race = document.querySelectorAll(".race")
    console.log(race);

    fetch(apiRace)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length)
            race.forEach(node => {
                node.textContent = data.results[randomIndex].index;
            });
            console.log(data);
        })

    // function to establish hero class

    let classSelect = Math.ceil(Math.random() * 12)
    let apiClass = "https://www.dnd5eapi.co/api/classes/"
    let heroClass = document.querySelectorAll(".class")

    fetch(apiClass)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length)
            heroClass.forEach(node => {
                node.textContent = data.results[randomIndex].index;
            });
            console.log(data)
        })

    // function to establish hero's value

    let valueSet = ["honor", "love", "untold riches", "fame", "the truth", "faith", "adventure", "beauty", "balance", "justice", "virtue", "friendship", "liberty", "the pursuit of happiness", "mercy", "fun", "influence", "knowledge", "general mischief", "loyalty", "pleasure", "recognition", "peace", "security", "self-respect", "stability", "family", "status", "wisdom", "vengeance"]
    // let valueSet = ["honor", "vengeance"]
    let value = document.querySelector("#value")

    let randomIndex = Math.floor(Math.random() * valueSet.length)
    console.log(randomIndex)
    value.textContent = valueSet[randomIndex];
    console.log(valueSet[randomIndex]);

    // if ((valueSet[randomIndex]) = "vengeance") {
    //     let venge = [" for their lover's death", " for their brother's murder"]
    //     let randomIndex = Math.ceil(Math.random() * venge.length)
    //     console.log(randomIndex);
    //     valueSet = valueSet[randomIndex] + venge[randomIndex]; 
    //     console.log(valueSet);
    // } 

    // monsterAdj.textContent = monsterAdjSet[randomIndex]
};

// FUNCTION TO SELECT VERB

let verbChoice = function() {
    let verbSet = ["slay", "treat with", "investigate the murder of", "investigate the disappearance of", "investigate the kidnapping of", "interrogate", "parley with", "study", "forge an alliance with", "reach an understanding with", "destroy", "banish", "ruin the life of", "loot the den of", "domesticate", "bring to heel", "lay low", "chronicle the conquests of", "vanquish"];
    let verb = document.querySelector("#verb")

    let randomIndex = Math.floor(Math.random() * verbSet.length)
    console.log(randomIndex)
    verb.textContent = verbSet[randomIndex];
    console.log(verbSet[randomIndex]);
};

// FUNCTION TO GENERATE MONSTER DATA

let monsterData = function () {
    // function to establish adjective for monster
    {
        let monsterAdjSet = ["bad", "barbarous", "bashful", "bawdy", "beautiful", "befitting", "belligerent", "beneficial", "bent", "berserk", "bewildered", "big", "billowy", "bite-sized", "bitter", "bizarre", "black", "black-and-white", "bloody", "blue", "blue-eyed", "blushing", "boiling", "boorish", "bored", "boring", "bouncy", "boundless", "brainy", "brash", "brave", "brawny", "breakable", "breezy", "brief", "bright", "bright", "broad", "broken", "brown", "bumpy", "burly", "bustling", "busy", "cagey", "calculating", "callous", "calm", "capable", "capricious", "careful", "careless", "caring", "cautious", "ceaseless", "certain", "changeable", "charming", "cheap", "cheerful", "chemical", "chief", "childlike", "chilly", "chivalrous", "chubby", "chunky", "clammy", "classy", "clean", "clear", "clever", "cloistered", "cloudy", "closed", "clumsy", "cluttered", "coherent", "cold", "colorful", "colossal", "combative", "comfortable", "common", "complete", "complex", "concerned", "condemned", "confused", "conscious", "cooing", "cool", "cooperative", "coordinated", "courageous", "cowardly", "crabby", "craven", "crazy", "creepy", "crooked", "crowded", "cruel", "cuddly", "cultured", "cumbersome", "curious", "curly", "curved", "curvy", "cut", "cute", "cute", "cynical", "daffy", "daily", "damaged", "damaging", "damp", "dangerous", "dapper", "dark", "dashing", "dazzling", "dead", "deadpan", "deafening", "dear", "debonair", "decisive", "decorous", "deep", "deeply", "defeated", "defective", "defiant", "delicate", "delicious", "delightful", "demonic", "delirious", "dependent", "depressed", "deranged", "descriptive", "deserted", "detailed", "determined", "devilish", "didactic", "different", "difficult", "diligent", "direful", "dirty", "disagreeable", "disastrous", "discreet", "disgusted", "disgusting", "disillusioned", "dispensable", "distinct", "disturbed", "divergent", "dizzy", "domineering", "doubtful", "drab", "draconian", "dramatic", "dreary", "drunk", "dry", "dull", "dusty", "dynamic", "dysfunctional", "fabulous", "faded", "faint fair", "faithful", "fallacious", "false","familiar", "famous", "fanatical", "fancy", "fantastic", "far", " far-flung", " fascinated", "fast", "fat faulty", "fearful fearless", "feeble feigned", "female fertile", "festive", "few fierce", "filthy", "fine", "finicky", "fixed", " flagrant", "flaky", "flashy", "flat", "flawless", "flimsy", " flippant", "flowery", "fluffy", "fluttering", " foamy", "foolish", "foregoing", "forgetful", "fortunate", "frail", "fragile", "frantic", "free", " freezing", " frequent", " fresh", " fretful", "friendly", "frightened", "frightening", "full", "fumbling", "functional", "funny", "furry", "furtive", "future futuristic", "fuzzy ", "gabby", "gainful", "gamy", "gaping", "garrulous", "gaudy", "general gentle", "giant", "giddy", "gifted", "gigantic", "glamorous", "gleaming", "glib", "glistening glorious", "glossy", "godly", "good", "goofy", "gorgeous", "graceful", "grandiose", "grateful", "gray", "greasy", "great", "greedy", "green","grey","grieving", "groovy", "grotesque", "grouchy", "grubby", "gruesome", "grumpy", "guarded", "guiltless", "gullible", "gusty", "guttural", "jaded", "jagged", "jazzy", "jealous", "jittery", "jobless", "jolly", "joyous", "judicious", "juicy", "jumbled", "jumpy", "juvenile", "kaput", "keen", "kind", "kindhearted", "kindly", "knotty", "knowing", "knowledgeable", "known", "labored", "lackadaisical", "lacking", "lame", "lamentable", "languid", "large", "last", "late", "laughable", "lavish", "lazy", "lean", "learned", "left", "legal", "lethal", "level", "lewd", "light", "like", "likeable", "limping", "literate", "little", "lively", "lively", "living", "lonely", "long", "longing", "long-term", "loose", "lopsided", "loud", "loutish", "lovely", "loving", "low", "lowly", "lucky", "ludicrous", "lumpy", "lush", "luxuriant", "lying", "lyrical", "macabre", "macho", "maddening", "madly", "magenta", "magical", "magnificent", "majestic", "makeshift", "male", "malicious", "mammoth", "maniacal", "many", "marked", "massive", "married", "marvelous", "material", "materialistic", "mature", "mean", "measly", "meaty", "medical", "meek", "mellow", "melodic", "melted", "merciful", "mere", "messy", "mighty", "military", "milky", "mindless", "miniature", "minor", "miscreant", "misty", "mixed", "moaning", "modern", "moldy", "momentous", "motionless", "mountainous", "muddled", "mundane", "murky", "mushy", "mute", "mysterious", "naive", "nappy", "narrow", "nasty", "natural", "naughty", "nauseating", "near", "neat", "nebulous", "necessary", "needless", "needy", "neighborly", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "noiseless", "noisy", "nonchalant", "nondescript", "nonstop", "normal", "nostalgic", "nosy", "noxious", "nutritious", "nutty", "painful", "painstaking", "pale", "paltry", "panicky", "panoramic", "parallel", "parched", "parsimonious", "past", "pastoral", "pathetic", "peaceful", "penitent", "perfect", "periodic", "permissible", "perpetual", "petite", "petite", "phobic", "physical", "picayune", "pink", "piquant", "placid", "plain", "plant", "plastic", "plausible", "pleasant", "plucky", "pointless", "poised", "polite", "political", "poor", "possessive", "possible", "powerful", "precious", "premium", "present", "pretty", "previous", "pricey", "prickly", "private", "probable", "productive", "profuse", "protective", "proud", "psychedelic", "psychotic", "public", "puffy", "pumped", "puny", "purple", "purring", "pushy", "puzzled", "puzzling", "quack", "quaint", "quarrelsome", "questionable", "quick", "quickest", "quiet", "quirky", "quixotic", "quizzical", "rabid", "racial", "ragged", "rainy", "rambunctious", "rampant", "rapid", "rare", "raspy", "ratty", "ready", "real", "rebel", "receptive", "recondite", "red", "redundant", "reflective", "regular", "relieved", "remarkable", "reminiscent", "repulsive", "resolute", "resonant", "responsible", "rhetorical", "rich", "right", "righteous", "rightful", "rigid", "ripe", "ritzy", "roasted", "robust", "romantic", "roomy", "rotten", "rough", "round", "royal", "ruddy", "rude", "rural", "rustic", "ruthless", "sable", "sad", "safe", "salty", "same", "sassy", "satisfying", "savory", "scandalous", "scarce", "scared", "scary", "scattered", "scientific", "scintillating", "scrawny", "screeching", "second-hand", "secret", "secretive", "sedate", "seemly", "selective", "selfish", "separate", "serious", "shaggy", "shaky", "shallow", "sharp", "shiny", "shivering", "shocking", "short", "shrill", "shut", "shy", "sick", "silent", "silent", "silky", "silly", "simple", "simplistic", "sincere", "skillful", "skinny", "sleepy", "slim", "slimy", "slippery", "sloppy", "slow", "small", "smart", "smelly", "smiling", "smoggy", "smooth", "sneaky", "snobbish", "snotty", "soft", "soggy", "solid", "somber", "sophisticated", "sordid", "sore", "sore", "sour", "sparkling", "special", "spectacular", "spicy", "spiffy", "spiky", "spiritual", "spiteful", "splendid", "spooky", "spotless", "spotted", "spotty", "spurious", "squalid", "square", "squealing", "squeamish", "staking", "stale", "standing", "statuesque", "steadfast", "steady", "steep", "stereotyped", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "striped", "strong", "stupendous", "stupid", "sturdy", "subdued", "subsequent", "substantial", "successful", "succinct", "sudden", "sulky", "super", "superb", "superficial", "supreme", "swanky", "sweet", "sweltering", "swift", "symptomatic", "synonymous", "taboo", "tacit", "tacky", "talented", "tall", "tame", "tan", "tangible", "tangy", "tart", "tasteful", "tasteless", "tasty", "tawdry", "tearful", "tedious", "teeny", "teeny-tiny", "telling", "temporary", "tender", "tense", "tenuous", "terrible", "terrific", "tested", "testy", "thankful", "therapeutic", "thick", "thin", "thinkable", "thirsty", "thoughtful", "thoughtless", "threatening", "thundering", "tidy", "tight", "tightfisted", "tiny", "tired", "tiresome", "toothsome", "torpid", "tough", "towering", "tranquil", "trashy", "tremendous", "tricky", "trite", "troubled", "truculent", "true", "truthful", "typical", "vacuous", "vagabond", "vague", "valuable", "various", "vast", "vengeful", "venomous", "verdant", "versed", "victorious", "vigorous", "violent", "violet", "vivacious", "voiceless", "volatile", "voracious", "vulgar", "wacky", "waggish", "waiting", "wakeful", "wandering", "wanting", "warlike", "warm", "wary", "wasteful", "watery", "weak", "wealthy", "weary", "well-groomed", "well-made", "well-off", "well-to-do", "wet", "whimsical", "whispering", "white", "whole", "wholesale", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "windy", "wiry", "wise", "wistful", "witty", "woebegone", "womanly", "wonderful", "wooden", "woozy", "worried", "worthless", "wrathful", "wretched", "wrong", "wry", "xenophobic", "yellow", "yielding", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zippy", "zonked"];
        // let monsterAdjSelect = Match.ceil(Math.random() * monsterAdjSet.length)
        let monsterAdj = document.querySelector("#monster-adj")

        let randomIndex = Math.floor(Math.random() * monsterAdjSet.length)
        console.log(randomIndex)
        monsterAdj.textContent = monsterAdjSet[randomIndex];
        console.log(monsterAdjSet[randomIndex]);
    };
    // function to establish monster

    let monsterSelect = Math.ceil(Math.random() * 332)
    let apiMonster = "https://www.dnd5eapi.co/api/monsters/"
    let monster = document.querySelector("#monster")

    fetch(apiMonster)
        .then(res => res.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.results.length)
            monster.textContent = data.results[randomIndex].name.toLowerCase();
            console.log(data)
        })
};


// Running of Functions

heroData();
verbChoice();
monsterData();