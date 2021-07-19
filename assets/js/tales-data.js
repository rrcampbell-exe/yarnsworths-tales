// adjective sets
const masterAdjSet = 
["aback","abaft","abandoned","abashed","aberrant","abhorrent","abiding","abject","ablaze","able","abnormal","aboard","aboriginal","abortive","abounding","abrasive","abrupt","absent","absorbed","absorbing","abstracted","absurd","abundant","abusive","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","acrid","actually","ad","hoc","adamant","adaptable","addicted","adhesive","adjoining","adorable","adventurous","afraid","aggressive","agonizing","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","alluring","aloof","amazing","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","annoying","anxious","apathetic","aquatic","aromatic","arrogant","ashamed","aspiring","assorted","astonishing","attractive","auspicious","automatic","available","average","awake","aware","awesome","awful","axiomatic",
"bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","bright","broad","broken","brown","bumpy","burly","bustling","busy",
"cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical",
"daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dynamic","dysfunctional",
"eager","early","earsplitting","earthy","easy","edible","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even", "excellent", "excited", "exciting", "exclusive", "exotic", "expensive", "extra-large", "extra-small", "exuberant", "exultant", 
"fabulous", "faded", "faint", "fair", "faithful", "fallacious", "false", "familiar", "famous", "fanatical", "fancy", "fantastic", "far"," far-flung","fascinated", "fast", "fat", "faulty", "fearful",  "fearless", "feeble", "feigned", "female", "fertile", "festive", "few", "fierce", "filthy", "fine", "finicky", "first", "five", "fixed", "flagrant", "flaky"," flashy", "flat", "flawless", "flimsy", "flippant", "flowery", "fluffy", "fluttering", "foamy", "foolish", "foregoing", "forgetful", "fortunate", "four", "frail", "fragile", "frantic", "free", "freezing", "frequent", "fresh", "fretful", "friendly", "frightened", "frightening", "full",  "fumbling", "functional", "funny", "furry", "furtive", "future", "futuristic", "fuzzy", 
"gabby", "gainful", "gamy", "gaping", "garrulous", "gaudy", "general", "gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening",  "glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful", "gratis", "gray", "greasy", "great", "greedy", "green", "grey", "grieving", "groovy", "grotesque", "grouchy", "grubby", "gruesome", "grumpy", "guarded", "guiltless", "gullible", "gusty", "guttural", 
"habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly", "heavy", "hellish", "helpful", "helpless", "hesitant", "hideous", "high", "highfalutin", "high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot",  "huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical",
"icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy",
"jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile",
"kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known",
"labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical",
"macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious",
"naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty",
"oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought",
"painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling",
"quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical",
"rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless",
"sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous",
"taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical",
"ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost",
"vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar",
"wacky","waggish","waiting","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","walthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry",
"xenophobic",
"yellow","yielding","young","youthful","yummy",
"zany","zealous","zesty","zippy","zonked"
]

const masterAdjIndefSet = 
["bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","bright","broad","broken","brown","bumpy","burly","bustling","busy",
"cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical",
"daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dynamic","dysfunctional",
"fabulous", "fair", "faithful", "fallacious", "false", "familiar", "famous", "fanatical", "fancy", "fantastic", "far"," far-flung","fascinated", "fast", "fat", "faulty", "fearful",  "fearless", "feeble", "feigned", "female", "fertile", "festive", "few", "fierce", "filthy", "fine", "finicky", "first", "five", "fixed", "flagrant", "flaky"," flashy", "flat", "flawless", "flimsy", "flippant", "flowery", "fluffy", "fluttering", "foamy", "foolish", "foregoing", "forgetful", "fortunate", "four", "frail", "fragile", "frantic", "free", "freezing", "frequent", "fresh", "fretful", "friendly", "frightened", "frightening", "full",  "fumbling", "functional", "funny", "furry", "furtive", "future", "futuristic", "fuzzy", 
"gabby", "gainful", "gamy", "gaping", "garrulous", "gaudy", "general", "gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening",  "glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful", "gratis", "gray", "greasy", "great", "greedy", "green", "grey", "grieving", "groovy", "grotesque", "grouchy", "grubby", "gruesome", "grumpy", "guarded", "guiltless", "gullible", "gusty", "guttural", 
"habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly", "heavy", "hellish", "helpful", "helpless", "hesitant", "hideous", "high", "highfalutin", "high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot","huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical",
"jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile",
"kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known",
"labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical",
"macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious",
"naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty",
"painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling",
"quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical",
"rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless",
"sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous",
"taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical",
"ubiquitous","unique","used","useful","useless","utopian",
"vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar",
"wacky","waggish","waiting","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","walthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry",
"xenophobic",
"yellow","yielding","young","youthful","yummy",
"zany","zealous","zesty","zippy","zonked"
]

// POSITIVE ADJECTIVE SETS

const posAdjSet = 
["absorbing","adorable","alluring","amazing","astonishing","attractive","auspicious","awesome",
"beautiful","beneficial",
"charming","cheerful","chivalrous","clever","courageous","cuddly","cultured","cute",
"dashing","dazzling","decorous","delicious","delightful",
"educated","efficacious","efficient","elegant","elite","eminent","enchanting","excellent", "exciting", "exclusive","exultant", 
"fabulous", "fair", "faithful", "fantastic","fascinating","fearless","fine","flashy", "flawless", "fortunate", "fresh", "friendly", 
"gainful", "gifted","glamorous","gleaming","glistening","glorious","godly","good","gorgeous","graceful","grateful", "great", 
"hallowed","handsome","handsomely","handy","happy","harmonious","healthy","heavenly", "helpful", "hilarious","honorable","humorous","hysterical",
"illustrious","industrious","incredible","intelligent","interesting","invincible",
"jolly","joyous","judicious",
"keen","kind","kindhearted","kindly","knowledgeable",
"lavish","learned","level","likeable","lively","lovely","loving","lush","luxuriant","lyrical",
"magnificent","majestic","marvelous","mighty","momentous",
"neat","necessary","neighborly","nice","nifty","nutritious",
"optimal","outstanding","overjoyed",
"peaceful","perfect","piquant","pleasant","plucky","poised","polite","precious","premium","pretty",
"remarkable","responsible","righteous","rightful",
"safe","satisfying","savory","scintillating","seemly","silky","skillful","smart","smiling","spectacular","spiffy","splendid","spotless","steadfast","stimulating","strong","stupendous","substantial","successful","super","superb","supreme","swanky",
"talented","tasteful","tasty","terrific","thankful","thoughtful","tidy","toothsome","tremendous","truthful",
"unbiased","unequaled","upbeat","useful","utopian",
"valuable","versed","victorious","vigorous","vivacious",
"waggish","warm","well-groomed","well-made","well-off","well-to-do","wise","witty","wonderful",
"yummy",
]

const posAdjSetPeople = 
[
// "absorbing","adorable","alluring","amazing","astonishing","attractive","auspicious","awesome",
"beautiful",
"charming","cheerful","chivalrous","clever","courageous","cuddly","cultured","cute",
"dashing","dazzling","decorous","delightful",
// "educated","efficient","elegant","elite","eminent","enchanting","excellent","exciting","exultant", 
"fabulous", "fair", "faithful", "fantastic","fascinating","fearless","fine","flashy", "flawless","fortunate","friendly", 
"gifted","glamorous","glorious","godly","good","gorgeous","graceful","grateful", "great", 
"hallowed","handsome","handy","happy","healthy","heavenly","helpful","hilarious","honorable","humorous","hysterical",
// "illustrious","industrious","incredible","intelligent","interesting","invincible",
"jolly","joyous","judicious",
"keen","kind","kindhearted","kindly","knowledgeable",
"lavish","learned","level-headed","likeable","lively","lovely","loving","lush","luxuriant","lyrical",
"magnificent","majestic","marvelous","mighty",
"neat","neighborly","nice","nifty",
// "outstanding","overjoyed",
"peaceful","perfect","pleasant","plucky","poised","polite","precious","pretty",
"remarkable","responsible","righteous",
"savory","seemly","skillful","smart","smiling","spectacular","spiffy","splendid","steadfast","stimulating","strong","stupendous","successful","super","superb","swanky",
"talented","tasteful","terrific","thankful","thoughtful","tidy","toothsome","tremendous","truthful",
// "unbiased","unequaled","upbeat","utopian",
"victorious","vigorous","vivacious",
"waggish","warm","well-groomed","well-made","well-off","well-to-do","wise","witty","wonderful",
]

const posAdjSetPlaces = 
["alluring","amazing","astonishing","attractive","auspicious","awesome",
"beautiful",
"charming","cheerful","cute",
"dazzling","delightful",
"elegant","elite","enchanting","excellent","exciting","exclusive",
"fabulous", "fair", "fantastic","fascinating","fine","flashy", "flawless",
"glamorous","gleaming","glistening","glorious","good","gorgeous","great", 
"hallowed","handsome","heavenly",
"incredible","interesting",
"lavish","lively","lovely","lush","luxuriant",
"magnificent","majestic","marvelous","mighty",
"neat","nice","nifty",
"outstanding",
"peaceful","perfect","pleasant","precious","pretty",
"remarkable",
"safe","satisfying","savory","scintillating","seemly","spectacular","spiffy","splendid","spotless","stimulating","stupendous","super","superb","swanky",
"tasteful","terrific","tidy","tremendous",
"unequaled","utopian",
"vivacious",
"warm","well-made","wonderful",
]

const posAdjSetThings = 
["absorbing","adorable","alluring","amazing","astonishing","attractive","auspicious","awesome",
"beautiful","beneficial",
"charming","cute",
"delicious","delightful",
"efficacious","efficient","elegant","elite","enchanting","excellent","exciting", 
"fabulous", "fair", "fantastic","fascinating","fine","flashy","flawless", 
"gainful","glamorous","gleaming","glistening","glorious","good","gorgeous","great", 
"hallowed","handsome","handy","helpful",
"illustrious","incredible","interesting",
"lovely",
"magnificent","majestic","marvelous","mighty","momentous",
"neat","necessary","nice","nifty","nutritious",
"optimal","outstanding",
"perfect","piquant","pleasant","precious","premium","pretty",
"remarkable","righteous","rightful",
"safe","satisfying","savory","scintillating","seemly","silky","spectacular","spiffy","splendid","spotless","stimulating","strong","stupendous","substantial","super","superb","supreme",
"unequaled","useful",
"valuable",
"warm","well-made","wonderful",
"yummy",
]

// NEGATIVE ADJECTIVE SETS

const negAdjSet = 
["abhorrent","abject","abortive","abrasive","abusive","acrid","agonizing","annoying","arrogant","awful",
"bad","barbarous","bawdy","boorish","broken",
"calculating","callous","chilly","cold","combative","condemned","cowardly","crabby","craven","creepy","crooked","cruel","cumbersome","cynical",
"deranged","devilish","direful","dirty","disagreeable","disastrous","disgusting","draconian","dreary",
"envious",
"fallacious", "false","faulty","fearful","feeble", "feigned","filthy", "flagrant","flimsy", "flippant", "foolish", "frail","fretful","frightening","fumbling",  
"garrulous", "gaudy", "grandiose","greedy", "grotesque", "grouchy", "grubby", "gruesome", "grumpy", "guttural", 
"halting","hapless","harsh","hateful","heartbreaking","hellish", "hideous","highfalutin", "hissing","homely","horrible",
"icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","impolite","incompetent","infamous","insidious","irate","irritating","itchy",
"jaded","jealous","jumbled",
"kaput",
"labored","lackadaisical","lacking","lame","lamentable","languid","laughable","lazy","left","legal","lethal","lewd","loutish","low","lowly","ludicrous","lying",
"macabre","maddening","malicious","maniacal","mean","measly","meek","mere","messy","mindless","miscreant","moaning","moldy","muddled","mundane","murky",
"nasty","naughty","nauseating","needless","needy","nippy","nosy","noxious",
"oafish","obnoxious","obscene","obsequious","obsolete","onerous","outrageous","overconfident","overrated","overwrought",
"paltry","parsimonious","pathetic","picayune","pointless","possessive","prickly","psychotic",
"quack","quarrelsome","questionable","quick",
"rabid","ragged","rambunctious","rampant","ratty","repulsive","rotten","ruddy","rude","ruthless",
"scandalous","scary","screeching","selfish","shrill","sick","sloppy","smelly","snobbish","snotty","sordid","spiteful","spurious","squalid","stale","stingy","stupid","sulky","superficial",
"taboo","tacky","tasteless","tawdry","tedious","terrible","thoughtless","threatening","tightfisted","tiresome","torpid","trashy","trite","truculent","two","typical",
"ugly","unable","unaccountable","unadvised","unbecoming","undesirable","uneven","unhealthy","uninterested","unkempt","unruly","unsightly","unsuitable","untidy","unwieldy","uppity","upset","uptight","useless",
"vacuous","vengeful","venomous","violent","vulgar",
"warlike","wasteful","weary","wicked","wistful","woebegone","worthless","wrathful","wretched","wrong",
"xenophobic",
]

const negAdjSetPeople = 
[
// "abhorrent","abject","abrasive","abusive","acrid","agonizing","annoying","arrogant","awful",
"bad","barbarous","bawdy","boorish","broken",
"calculating","callous","chilly","cold","combative","condemned","cowardly","crabby","craven","creepy","crooked","cruel","cumbersome","cynical",
"deranged","devilish","direful","dirty","disagreeable","disastrous","disgusting","draconian","dreary",
// "envious",
"faulty","fearful","feeble","filthy","flippant","foolish","frail","fretful","frightening","fumbling",  
"garrulous","gaudy","grandiose","greedy","grotesque","grouchy","grubby","gruesome","grumpy",
"halting","hapless","harsh","hateful","heartbreaking","hellish","hideous","highfalutin","hissing","homely","horrible",
// "icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","impolite","incompetent","infamous","insidious","irate","irritating",
"jaded","jealous","jumbled",
"lackadaisical","lacking","lame","lamentable","languid","laughable","lazy","lethal","lewd","loutish","low","lowly","ludicrous","lying",
"macabre","maddening","malicious","maniacal","mean","meek","messy","mindless","miscreant","muddled","mundane",
"nasty","naughty","nauseating","needless","needy","nosy","noxious",
// "oafish","obnoxious","obscene","obsequious","onerous","outrageous","overconfident","overrated",
"parsimonious","pathetic","picayune","pointless","possessive","prickly","psychotic",
"quack","quarrelsome","questionable","quick",
"rabid","ragged","rambunctious","ratty","repulsive","rotten","ruddy","rude","ruthless",
"scandalous","scary","screeching","selfish","shrill","sick","sloppy","smelly","snobbish","snotty","sordid","spiteful","spurious","stingy","stupid","sulky","superficial",
"tacky","tasteless","tawdry","tedious","terrible","thoughtless","threatening","tightfisted","tiresome","torpid","trashy","truculent",
// "ugly","unable","unaccountable","unadvised","unbecoming","undesirable","uneven","unhealthy","uninterested","unkempt","unruly","unsightly","untidy","unwieldy","uppity","upset","uptight","useless",
"vacuous","vengeful","venomous","violent","vulgar",
"warlike","wasteful","weary","wicked","wistful","woebegone","worthless","wrathful","wretched",
]

const negAdjSetPlaces = 
[
"awful",
"bad","barbarous","bawdy",
"chilly","cold","condemned","creepy","crooked",
"direful","dirty","disgusting","dreary",
"faulty","filthy","flimsy","frail","frightening", 
"gaudy","grandiose","grotesque","grubby","gruesome", 
"hellish","hideous","homely","horrible",
"icky","icy","ill-fated","infamous",
"kaput",
"lacking","lame","lamentable","languid","laughable","lowly","ludicrous",
"macabre","maddening","meek","messy","moldy","mundane",
"nasty","nauseating","needless","noxious",
"obscene","outrageous","overrated","overwrought",
"pathetic",
"questionable",
"ragged","ratty","repulsive","rotten","ruddy",
"scary","sloppy","smelly","sordid","spurious","squalid",
"taboo","tacky","tasteless","tawdry","terrible","trashy",
"ugly","undesirable","unkempt","unsightly","untidy",
"vacuous","vulgar",
"wicked","wistful","woebegone","worthless","wretched",
]

const negAdjSetThings =
[
"abhorrent","abject","abortive","abrasive","acrid","agonizing","annoying","awful",
"bad","barbarous","bawdy","broken",
"chilly","cold","cumbersome",
"devilish","direful","dirty","disgusting",
"fallacious","faulty","feeble","feigned","filthy","flagrant","flimsy","frail","frightening",
"gaudy","grandiose","grotesque","grubby","gruesome","guttural", 
"hapless","harsh","heartbreaking","hellish","hideous","highfalutin","hissing","homely","horrible",
"icky","icy","illegal","ill-fated","infamous","insidious","itchy",
"jumbled",
"kaput",
"labored","lacking","lame","lamentable","laughable","lethal","lewd","loutish","lowly","ludicrous",
"macabre","maddening","malicious","measly","mere","messy","moldy","muddled","mundane","murky",
"nasty","nauseating","needless","nippy","noxious",
"obscene","obsolete","onerous","outrageous","overrated","overwrought",
"paltry","pathetic","picayune","pointless",
"questionable","quick",
"ragged","rampant","ratty","repulsive","rotten","ruddy",
"scandalous","scary","screeching","sick","sloppy","smelly","sordid","spurious","stale",
"taboo","tacky","tasteless","tawdry","tedious","terrible","threatening","tiresome","trashy","trite",
"ugly","undesirable","uneven","unhealthy","unkempt","unruly","unsightly","unsuitable","untidy","unwieldy","useless",
"venomous","violent","vulgar",
"wasteful","wicked","worthless","wretched","wrong",
]

// NEUTRAL ADJECTIVE SETS

const neutAdjSet = 
[
"abandoned","abashed","aberrant","abiding","ablaze","able","abnormal","aboard","aboriginal","abounding","abrupt","absent","absorbed","abstracted","absurd","abundant","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","adamant","adaptable","addicted","adhesive","adjoining","adventurous","afraid","aggressive","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","aloof","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","anxious","apathetic","aquatic","aromatic","ashamed","aspiring","assorted","automatic","available","average","awake","aware","axiomatic",
"bashful","bent","berserk","befitting","belligerent","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","broad","brown","bumpy","burly","bustling","busy",
"cagey","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","cheap","chemical","chief","childlike","chubby","chunky","clammy","classy","clean","clear","cloistered","cloudy","closed","clumsy","cluttered","coherent","colorful","colossal","comfortable","common","complete","complex","concerned","confused","conscious","cooing","cool","cooperative","coordinated","crazy","crowded","curious","curly","curved","curvy","cut",
"daffy","damaged","damaging","damp","dangerous","dapper","dark","dead","deadpan","deafening","dear","debonair","decisive","deep","defeated","defective","defiant","delicate","demonic","delirious","dependent","depressed","descriptive","deserted","detailed","determined","didactic","different","difficult","diligent","discreet","disgusted","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","dramatic","drunk","dry","dull","dusty","dynamic","dysfunctional",
"eager","early","earsplitting","earthy","easy","easy-going","edible","economic","elastic","elated","elderly","electric","elfin","embarrassed","empty","enchanted","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","equable","equal","erect","erratic","ethereal","evanescent","evasive","even","excited", "exotic", "expensive", "extra-large", "extra-small", "exuberant",  
"faded", "faint", "familiar", "famous", "fanatical", "fancy", "far"," far-flung","fascinated", "fast", "fat", "female", "fertile", "festive", "few", "fierce", "finicky", "first", "five", "fixed","flaky","flat", "flowery", "fluffy", "fluttering", "foamy", "foregoing", "forgetful", "four", "fragile", "frantic", "free", "freezing", "frequent","frightened","full","functional", "funny", "furry", "furtive", "future", "futuristic", "fuzzy",     
"gabby", "gamy", "gaping", "general", "gentle","giant","giddy","glossy","gigantic","glib","goofy","gratis", "gray", "greasy", "green", "grey", "grieving", "groovy", "guarded", "guiltless", "gullible", "gusty", 
"habitual","half","hanging","hard","hard-to-find","heady","heavy", "helpless", "hesitant", "high", "high-pitched","historical","holistic","hollow","homeless","hospitable","hot","huge","hulking","humdrum","hungry","hurried","hurt","hushed","husky","hypnotic",
"imaginary","immense","imminent","impartial","imperfect","important","imported","impossible","incandescent","inconclusive","inexpensive","innate","innocent","inquisitive","instinctive","internal",
"jagged","jazzy","jittery","jobless","juicy","jumpy","juvenile",
"knotty","knowing","known",
"large","last","late","lean","legal","light","like","limping","literate","little","living","lonely","long","longing","long-term","loose","lopsided","loud","lucky","lumpy",
"macho","madly","magenta","magical","makeshift","male","mammoth","many","marked","massive","married","material","materialistic","mature","meaty","medical","mellow","melodic","melted","merciful","military","milky","miniature","minor","misty","mixed","modern","motionless","mountainous","mushy","mute","mysterious",
"naive","nappy","narrow","natural","near","nebulous","nervous","new","next","nimble","nine","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","null","numberless","numerous","nutty",
"obedient","obeisant","obese","observant","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","open","opposite","orange","ordinary","organic","ossified","outgoing","oval","overt",
"painful","painstaking","pale","panicky","panoramic","parallel","parched","past","pastoral","penitent","periodic","permissible","perpetual","petite","phobic","physical","pink","placid","plain","plant","plastic","plausible","political","poor","possible","powerful","present","previous","pricey","private","probable","productive","profuse","protective","proud","psychedelic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling",
"quaint","quiet","quirky","quixotic","quizzical",
"racial","rainy","rapid","rare","raspy","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","reminiscent","resolute","resonant","rhetorical","rich","right","ritzy","roasted","robust","romantic","roomy","rough","round","royal","rural","rustic","rigid","ripe",
"sable","sad","salty","same","sassy","scarce","scared","scattered","scientific","scrawny","second","second-hand","secret","secretive","sedate","selective","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shut","shy","silent","silly","simple","simplistic","sincere","six","skinny","sleepy","slim","slimy","slippery","slow","small","smoggy","smooth","sneaky","soft","soggy","solid","somber","sophisticated","sore","sour","sparkling","special","spicy","spiky","spiritual","spooky","spotted","spotty","square","squealing","squeamish","staking","standing","statuesque","steady","steep","stereotyped","sticky","stiff","stormy","straight","strange","striped","sturdy","subdued","subsequent","succinct","sudden","sweet","sweltering","swift","symptomatic","synonymous",
"tacit","tall","tame","tan","tangible","tangy","tart","tearful","teeny","teeny-tiny","telling","temporary","ten","tender","tense","tenuous","tested","testy","therapeutic","thick","thin","thinkable","third","thirsty","three","thundering","tight","tiny","tired","tough","towering","tranquil","tricky","troubled","true","typical",
"ubiquitous","ultra","unarmed","uncovered","understood","unique","unknown","unnatural","unused","unusual","unwritten","used","utter",
"vagabond","vague","various","vast","verdant","violet","voiceless","volatile","voracious",
"wacky","waiting","wakeful","wandering","wanting","wary","watery","weak","wealthy","wet","whimsical","whispering","white","whole","wholesale","wide","wide-eyed","wiggly","wild","willing","windy","wiry","womanly","wooden","woozy","workable","worried","wry",
"yellow","yielding","young","youthful",
"zany","zealous","zesty","zippy","zonked"]

const neutAdjSetPeople = 
[
// "abandoned","abashed","aberrant","abiding","able","abnormal","aboriginal","absurd","adamant","adaptable","addicted","adventurous","afraid","aggressive","agreeable","alcoholic","alert","alive","alleged","aloof","ambitious","amused","amusing","ancient","angry","animated","annoyed","anxious","apathetic","aquatic","aromatic","ashamed","aspiring","average","awake","aware",
"bashful","bent","berserk","belligerent","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","bored","boring","bouncy","brainy","brash","brave","brawny","bright","brown","bumpy","burly","bustling","busy",
"cagey","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","cheap","chief","childlike","chubby","chunky","clammy","classy","clean","cloistered","clumsy","cluttered","coherent","colorful","colossal","comfortable","common","complex","concerned","confused","conscious","cooing","cool","cooperative","coordinated","crazy","curious","curly","curved","curvy","cut",
"daffy","damaged","damaging","damp","dangerous","dapper","dark","dead","deadpan","deafening","dear","debonair","decisive","deep","defeated","defective","defiant","delicate","demonic","delirious","dependent","depressed","descriptive","deserted","detailed","determined","didactic","different","difficult","diligent","discreet","disgusted","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","dramatic","drunk","dry","dull","dusty","dynamic","dysfunctional",
// "eager","earthy","easy-going","elated","elderly","electric","elfin","embarrassed","enchanted","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","equable","erratic","ethereal","evanescent","evasive","excited","exotic","extra-large","extra-small","exuberant",  
"familiar", "famous", "fanatical", "fancy", "far-flung","fascinated", "fast", "fat", "female", "fertile", "festive", "fierce", "finicky", "flaky","flat", "flowery", "fluffy", "fluttering", "forgetful", "fragile", "frantic", "free", "freezing", "frightened","full","functional", "funny", "furry", "furtive", "futuristic", "fuzzy",     
"gabby", "gentle","giant","giddy","gigantic","glib","goofy","gray", "greasy", "green", "grey", "grieving", "groovy", "guarded", "guiltless", "gullible", "gusty", 
"hard-to-find","heady","heavy", "helpless", "hesitant", "high", "high-pitched","historic","holistic","hollow","homeless","hospitable","hot","huge","hulking","humdrum","hungry","hurried","hurt","hushed","husky","hypnotic",
// "imaginary","immense","impartial","imperfect","important","impossible","innocent","inquisitive","instinctive",
"jazzy","jittery","jobless","juicy","jumpy","juvenile",
"knowing","known",
"large","late","lean","legal","light","limping","literate","little","living","lonely","longing","long-term","loose","lopsided","loud","lucky","lumpy",
"macho","magenta","magical","male","mammoth","marked","massive","married","materialistic","mature","meaty","mellow","melodic","merciful","miniature","minor","mixed","modern","mountainous","mute","mysterious",
"naive","nebulous","nervous","nimble","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nutty",
// "obedient","obeisant","obese","observant","odd","offbeat","old","old-fashioned","omniscient","open","orange","ordinary","organic","outgoing",
"painful","painstaking","pale","panicky","parched","pastoral","penitent","petite","phobic","physical","pink","placid","plain","plastic","political","poor","powerful","present","pricey","private","productive","protective","proud","psychedelic","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling",
"quaint","quiet","quirky","quixotic","quizzical",
"rare","raspy","ready","real","rebel","receptive","recondite","red","reflective","regular","relieved","resolute","rich","ritzy","robust","romantic","rough","round","royal","rural","rustic","rigid","ripe",
"sable","sad","salty","sassy","scared","scattered","scientific","scrawny","secretive","sedate","selective","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shy","silent","silly","simple","sincere","skinny","sleepy","slim","slimy","slippery","slow","small","smooth","sneaky","soft","soggy","solid","somber","sophisticated","sore","sour","sparkling","special","spicy","spiky","spiritual","spooky","spotted","spotty","square","squealing","squeamish","statuesque","steady","steep","stereotyped","sticky","stiff","stormy","straight","strange","striped","sturdy","subdued","succinct","sweet","swift","symptomatic",
"tall","tame","tan","tangible","tearful","teeny","teeny-tiny","tender","tense","tested","testy","thick","thin","thirsty","thundering","tiny","tired","tough","towering","tranquil","tricky","troubled","typical",
// "ubiquitous","unarmed","uncovered","understood","unique","unknown","unnatural","unusual","used",
"vagabond","vague","vast","violet","voiceless","volatile","voracious",
"wacky","wakeful","wandering","wanting","wary","weak","wealthy","wet","whimsical","whispering","white","whole","wide","wide-eyed","wiggly","wild","willing","wiry","womanly","wooden","woozy","workable","worried","wry",
"yellow","yielding","young","youthful",
"zany","zealous","zesty","zippy","zonked"
]

const neutAdjSetPlaces =
[
"abandoned","ablaze","abnormal","absurd","acceptable","accessible","adaptable","addicted","adjoining","ajar","amusing","ancient","aquatic","available","average",
"bent","big","billowy","bite-sized","bizarre","black","black-and-white","blue","blue-eyed","boring","bouncy","boundless","breakable","breezy","bright","broad","brown","bustling",
"certain","cheap","childlike","clean","closed","cluttered","colorful","colossal","comfortable","common","complete","complex","cool","crowded","curious",
"damaged","damp","dangerous","dark","defective","delicate","demonic","deserted","detailed","different","discreet","dispensable","distinct","disturbed","divergent","drab","dry","dull","dusty",
"earsplitting","earthy","elastic","electric","elfin","empty","enchanted","enormous","ethereal","evanescent","exotic","expensive","extra-large","extra-small",
"faded", "familiar", "famous", "fancy", "far-flung","festive","fixed","flat", "flowery", "fragile", "frantic", "freezing", "full","functional", "futuristic",    
"gaping", "general", "giant","glossy","gigantic","goofy","gray", "greasy", "green", "grey", "groovy", "guarded", "gusty", 
"hard-to-find","historic","hollow","hospitable","hot","huge","hulking","humdrum",
"imaginary","immense","imperfect","important","incandescent","inexpensive",
"jagged","jazzy","juvenile",
"large","lean","little","long","lopsided","loud",
"magical","makeshift","mammoth","massive","miniature","minor","modern","mountainous","mysterious",
"narrow","natural","near","nebulous","new","noisy","nondescript","normal",
"odd","offbeat","old","old-fashioned","open","orange","ordinary","ossified","oval",
"pale","panoramic","pastoral","petite","pink","placid","plain","plastic","private","psychedelic","public","puny","purple","puzzling",
"quaint","quiet","quirky",
"rainy","rare","real","red","reflective","regular","ritzy","robust","romantic","roomy","rough","royal","rural","rustic","rigid",
"second-hand","secret","separate","shaky","shiny","shocking","short","shut","silly","simple","simplistic","slim","slimy","small","smoggy","smooth","soft","soggy","solid","somber","sophisticated","sparkling","special","spiky","spiritual","spooky","spotted","square","standing","sticky","stiff","strange","sturdy","subdued","sweltering",
"tan","tangible","teeny","teeny-tiny","temporary","tested","therapeutic","thick","thin","tight","tiny","tough","towering","typical",
"ubiquitous","uncovered","unique","unnatural","unused","unusual","used",
"vast","verdant","violet",
"wacky","weak","wet","whimsical","white","whole","wide","wooden","workable",
"yellow","zany"
]

const neutAdjSetThings = 
[
"abandoned","aberrant","ablaze","able","abnormal","aboriginal","absurd","abundant","acceptable","accurate","acid","acidic","acoustic","adaptable","adhesive","ancient","aquatic","aromatic","automatic","average",
"bashful","bent","berserk","befitting","belligerent","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","broad","brown","bumpy","burly","bustling","busy",
"capable","certain","changeable","cheap","chemical","chunky","classy","clean","clear","cloudy","closed","colorful","colossal","comfortable","common","complete","complex","conscious","cool","curious","curly","curved","curvy","cut",
"damaged","damaging","damp","dangerous","dark","deafening","defective","delicate","demonic","detailed","didactic","different","difficult","discreet","dispensable","distinct","drab","dry","dull","dusty","dynamic","dysfunctional",
"earthy","easy","edible","elastic","electric","elfin","empty","enchanted","energetic","enormous","equable","equal","erect","erratic","ethereal","evanescent","even","exotic","expensive","extra-large","extra-small",
"faded", "faint", "familiar", "famous", "fancy", "fixed","flat", "flowery", "fluffy", "fluttering", "foamy", "fragile", "free", "freezing", "full","functional", "funny", "furry", "futuristic", "fuzzy",     
"gamy", "gaping", "general", "giant","glossy","gigantic","goofy","gratis", "gray", "greasy", "green", "grey", "groovy", "guarded",  
"habitual","hanging","hard","hard-to-find","heavy","high-pitched","historic","hollow","hot","huge","hulking","humdrum","husky","hypnotic",
"imaginary","immense","imminent","imperfect","important","imported","impossible","incandescent","inconclusive","inexpensive","internal",
"jagged","jazzy","jittery","juicy",
"knotty",
"large","lean","legal","light","little","living","long","loose","lopsided","loud","lucky","lumpy",
"magenta","magical","makeshift","mammoth","marked","massive","material","medical","melodic","melted","milky","miniature","minor","misty","mixed","modern","motionless","mountainous","mushy","mysterious",
"natural","near","nebulous","new","noiseless","noisy","nondescript","normal",
"obtainable","oceanic","odd","offbeat","old","old-fashioned","orange","ordinary","organic","ossified","oval",
"painful","pale","permissible","perpetual","petite","physical","pink","plain","plastic","plausible","poor","powerful","present","pricey","psychedelic","puffy","puny","purple","puzzling",
"quaint","quirky",
"rainy","rapid","rare","real","red","redundant","reflective","regular","resonant","rhetorical","rich","ritzy","roasted","robust","romantic","rough","round","royal","rustic","rigid","ripe",
"sable","sad","salty","scarce","scientific","second-hand","secret","separate","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","silent","silly","simple","simplistic","skinny","slim","slimy","slippery","slow","small","smoggy","smooth","soft","soggy","solid","sophisticated","sour","sparkling","special","spicy","spiky","spiritual","spooky","spotted","spotty","square","squealing","squeamish","standing","steady","steep","sticky","stiff","stormy","straight","strange","striped","sturdy","sweet","swift",
"tacit","tan","tangible","tangy","tart","teeny","teeny-tiny","temporary","tender","tenuous","tested","therapeutic","thick","thin","thinkable","thundering","tight","tiny","tough","towering","tricky","true","typical",
"ubiquitous","uncovered","understood","unique","unknown","unnatural","unused","unusual","unwritten","used",
"vague","vast","violet","volatile",
"wacky","watery","weak","wet","whimsical","white","whole","wholesale","wide","wiggly","wild","windy","wiry","wooden","workable",
"yellow",
"zany","zesty","zippy"
]

const superPosAdjSet = ["best","quickest","uttermost",]
const superNegAdjSet = ["ugliest","worst"]
const comparPosAdjSet = ["better",]
const comparNegAdjSet = ["worse",]

const heroAdjSet = [...posAdjSetPeople, ...neutAdjSetPeople]

const monsterAdjSet = [...negAdjSetPeople, ...neutAdjSetPeople]

// verb set
const verbSet = ["slay", "treat with", "investigate the murder of", "investigate the disappearance of", "investigate the kidnapping of", "interrogate", "parley with", "study", "forge an alliance with", "reach an understanding with", "destroy", "banish", "ruin the life of", "loot the den of", "domesticate", "bring to heel", "lay low", "chronicle the conquests of", "vanquish"];


// value set
const valueSet = ["honor", "love", "untold riches", "fame", "the truth", "faith", "adventure", "beauty", "balance", "justice", "virtue", "friendship", "liberty", "the pursuit of happiness", "mercy", "fun", "influence", "knowledge", "general mischief", "loyalty", "pleasure", "recognition", "peace", "security", "self-respect", "stability", "family", "status", "wisdom", "vengeance", "prophecy", "wish fulfillment"]

// CASCADING LOGIC

    // uncommon races logic    
    const uncommonRaces = ["leonin", "satyr", "aarakocra", "genasi", "goliath", "aasimar", "bugbear", "firbolg", "goblin", "hobgoblin", "kenku", "kobold", "lizardfolk", "orc", "tabaxi", "triton", "yuan-ti", "tortle"]

    // subraces logic
    const elfSubrace = ["high", "wood", "dark", ""]

    const dwarfSubrace = ["hill", "mountain", ""]

    const gnomeSubrace = ["deep", "forest", "rock", ""]

    const halflingSubrace = ["lightfoot", "stout"]
    
    // uncommon classes logic
    const uncommonClasses = ["artificer"]
    
    // vengeance cascading logic
    const venge = [" for their lover's death", " for their brother's murder", " for the disappearance of their beloved pet", " for a most grotesque public embarassment", " for the most salacious of gossipmongering", " for a betrayal of unspeakable devilry", " for an incurable curse bestowed upon their family", " for a most foul disrespect cast upon their liege lord", " for having sullied the virtue of their betrothed", " for a most disgusting act", " for a deceit of unfathomable consequence", " for an act of guile ill-conceived", ""]

    // gods cascading logic
    const gods = [" Auril, goddess of winter", "Azuth, god of wizards", "Bane, god of tyranny", "Beshaba, goddess of misfortune", "Bhaal, god of murder", "Chauntea, goddess of agriculture", "Cyric, god of lies", "Deneir, god of writing", "Eldath, goddess of peace", "Gond, god of craft", "Helm, god of protection", "Ilmater, god of endurance", "Kelemvor, god of the dead", "Lathander, god of birth and renewal", "Leira, goddess of illusion", "Lliira, goddess of joy", "Loviatar, goddess of pain", "Malar, god of the hunt", "Mask, god of thieves", "Mielikki, goddess of forests", "Milil, god of poetry and song", "Myrkul, god of death", "Mystra, goddess of magic", "Oghma, god of knowledge", "Savras, god of divination and fate", "Selûne, goddess of the moon", "Shar, goddess of darkness and loss", "Silvanus, god of wild nature", "Sune, goddess of love and beauty", "Talona, goddess of disease and poison", "Talos, god of storms", "Tempus, god of war", "Torm, god of courage and self-sacrifice", "Tymora, god of justice", "Umberlee, goddess of the sea", "Waukeen, goddess of trade"]

    // loyalties cascading logic
    const loyalties = [" to their father", " to their mother", " to their king", " to their queen", " to an archmage of dubious repute", " to a childhood friend", " to the custodian of the orphanage who raised them", " to an admiral of questionable integrity", " to the local constabulary", " to the order of the Emerald Enclave", " to their patron"]
