window.ZY = window.ZY || { writing: {} };

/* Universal A* vocabulary: [word, meaning, example] */
ZY.universal = [
  { group: "Positive description", items: [
    ["exceptional", "extremely good; unusually high quality", "Exceptional quality or performance."],
    ["remarkable", "worthy of attention; unusual", "A remarkable achievement."],
    ["exquisite", "extremely beautiful or delicate", "Exquisite design."],
    ["captivating", "attracting and holding attention", "A captivating experience."],
    ["impeccable", "without noticeable flaws", "Impeccable service."],
    ["commendable", "worthy of praise", "A commendable initiative."],
    ["exemplary", "serving as an excellent example", "Exemplary behaviour."],
    ["phenomenal", "exceptionally impressive", "Phenomenal progress."],
    ["enriching", "providing valuable experience or knowledge", "An enriching trip abroad."],
    ["innovative", "introducing new ideas or methods", "An innovative approach to learning."],
    ["immersive", "creating a deeply engaging experience", "An immersive museum exhibit."],
    ["versatile", "suitable for many different uses", "A versatile skill set."],
    ["invaluable", "extremely useful", "Invaluable advice."],
    ["exhilarating", "making you feel very excited and happy", "An exhilarating ride."],
    ["awe-inspiring", "causing a feeling of wonder", "Awe-inspiring mountain views."]
  ]},
  { group: "Negative description", items: [
    ["underwhelming", "less impressive than expected", "An underwhelming ending."],
    ["detrimental", "causing harm", "Detrimental effects on health."],
    ["inadequate", "not sufficient", "Inadequate facilities."],
    ["monotonous", "repetitive and uninteresting", "A monotonous routine."],
    ["inconvenient", "causing difficulty or disruption", "An inconvenient location."],
    ["inefficient", "not functioning effectively", "An inefficient booking system."],
    ["unappealing", "not attractive or interesting", "An unappealing menu."],
    ["overwhelming", "excessively intense or numerous", "An overwhelming workload."],
    ["superficial", "lacking depth", "Superficial friendships."],
    ["flawed", "having weaknesses or defects", "A flawed argument."],
    ["unreliable", "not consistently dependable", "Unreliable public transport."],
    ["restrictive", "limiting choice or opportunity", "Restrictive rules."],
    ["mediocre", "only average; not very good", "A mediocre performance."],
    ["tedious", "long and boring", "A tedious lecture."],
    ["counterproductive", "having the opposite effect to what is wanted", "Punishment can be counterproductive."]
  ]},
  { group: "Impact & importance", items: [
    ["significant", "large or important enough to be noticed", "A significant improvement."],
    ["substantial", "large in size or value", "Substantial benefits."],
    ["profound", "very great or intense", "A profound influence."],
    ["far-reaching", "having a wide range of effects", "Far-reaching consequences."],
    ["crucial", "extremely important", "A crucial factor."],
    ["indispensable", "absolutely necessary", "An indispensable tool."],
    ["transformative", "causing a major positive change", "A transformative experience."],
    ["sustainable", "able to continue without exhausting resources", "Sustainable energy."],
    ["pivotal", "of central importance", "A pivotal moment in my life."],
    ["paramount", "more important than anything else", "Safety is paramount."]
  ]},
  { group: "People & personality", items: [
    ["resilient", "able to recover from difficulty", "A resilient student."],
    ["resourceful", "good at finding practical solutions", "A resourceful team leader."],
    ["considerate", "thoughtful towards other people", "A considerate neighbour."],
    ["reluctant", "unwilling or hesitant", "Reluctant to change."],
    ["meticulous", "very careful and precise", "Meticulous planning."],
    ["conscientious", "careful to do work well", "A conscientious worker."],
    ["approachable", "friendly and easy to talk to", "Approachable teachers."],
    ["compassionate", "showing sympathy and concern", "A compassionate nurse."],
    ["ambitious", "having a strong desire to succeed", "Ambitious goals."],
    ["open-minded", "willing to consider new ideas", "Open-minded travellers."]
  ]},
  { group: "Improvement verbs", items: [
    ["enhance", "improve the quality of", "Enhance the experience."],
    ["strengthen", "make stronger", "Strengthen family bonds."],
    ["promote", "help something develop", "Promote healthy habits."],
    ["address", "deal with a problem", "Address the issue."],
    ["resolve", "solve", "Resolve the difficulty."],
    ["minimise", "reduce to the smallest amount", "Minimise waste."],
    ["prioritise", "treat as most important", "Prioritise well-being."],
    ["alleviate", "make less severe", "Alleviate stress."],
    ["facilitate", "make easier", "Facilitate learning."],
    ["cultivate", "develop over time", "Cultivate good habits."]
  ]}
];

/* Big theme vocabulary bank: [word, meaning] */
ZY.themes = [
  { name: "Technology", icon: "💻", words: [
    ["digital dependence", "relying too heavily on devices"], ["screen time", "time spent looking at screens"], ["cutting-edge", "the most advanced"], ["state-of-the-art", "very modern, using the latest technology"], ["user-friendly", "easy to use"], ["obsolete", "no longer used; out of date"], ["innovation", "a new idea or method"], ["artificial intelligence", "computer systems that imitate human thinking"], ["cyberbullying", "bullying using the internet"], ["data privacy", "keeping personal information safe"], ["misinformation", "false or inaccurate information"], ["connectivity", "being connected to networks or people"], ["automation", "using machines to do work"], ["virtual", "existing online / not physically"], ["streaming", "watching/listening online without downloading"], ["tech-savvy", "good at using technology"]
  ]},
  { name: "Environment", icon: "🌍", words: [
    ["sustainable", "able to continue without damaging the planet"], ["carbon footprint", "amount of CO₂ a person or activity produces"], ["biodiversity", "variety of plant and animal life"], ["deforestation", "cutting down large areas of forest"], ["renewable energy", "energy from sources that don't run out"], ["fossil fuels", "coal, oil and gas"], ["emissions", "gases released into the air"], ["conservation", "protection of nature"], ["habitat", "natural home of an animal or plant"], ["endangered", "at risk of extinction"], ["eco-friendly", "not harmful to the environment"], ["landfill", "place where rubbish is buried"], ["global warming", "rise in Earth's temperature"], ["drought", "long period without rain"], ["recycle", "process used materials to use again"], ["degradation", "the process of being damaged"]
  ]},
  { name: "Education & school", icon: "🎓", words: [
    ["curriculum", "subjects taught in a school"], ["extracurricular", "activities outside normal lessons"], ["academic pressure", "stress caused by schoolwork"], ["rote learning", "learning by repetition without understanding"], ["critical thinking", "analysing information carefully"], ["independent learning", "studying on your own"], ["tuition", "teaching, especially private"], ["assessment", "evaluation of ability"], ["literacy", "ability to read and write"], ["numeracy", "ability to use numbers"], ["scholarship", "money given to support education"], ["dropout", "someone who leaves school early"], ["well-rounded", "having a wide range of skills"], ["lifelong learning", "continuing to learn throughout life"], ["intellectual curiosity", "eagerness to learn"], ["peer tutoring", "students teaching other students"]
  ]},
  { name: "Health & fitness", icon: "🏃", words: [
    ["sedentary", "involving a lot of sitting"], ["nutritious", "containing nutrients good for health"], ["balanced diet", "a diet with the right variety of foods"], ["obesity", "the condition of being very overweight"], ["well-being", "state of being healthy and happy"], ["stamina", "physical or mental endurance"], ["immune system", "the body's defence against illness"], ["processed food", "food altered by industrial methods"], ["mental health", "psychological well-being"], ["burnout", "exhaustion from overwork or stress"], ["hydrated", "having enough water in the body"], ["moderation", "avoiding excess"], ["wholesome", "good for your health"], ["vitality", "energy and liveliness"], ["fatigue", "extreme tiredness"], ["preventive", "intended to stop something happening"]
  ]},
  { name: "Travel & tourism", icon: "✈️", words: [
    ["breathtaking", "extremely beautiful"], ["picturesque", "pretty, like a picture"], ["off the beaten track", "away from popular tourist places"], ["itinerary", "plan of a journey"], ["landmark", "a famous building or feature"], ["cultural heritage", "traditions and buildings passed down"], ["broaden your horizons", "expand your experience"], ["bustling", "full of busy activity"], ["secluded", "quiet and hidden away"], ["tourist trap", "overpriced place for tourists"], ["accommodation", "a place to stay"], ["excursion", "a short trip"], ["wanderlust", "a strong desire to travel"], ["jet lag", "tiredness after a long flight"], ["panoramic", "with a wide view"], ["exotic", "from a distant, foreign place"]
  ]},
  { name: "Society & community", icon: "🤝", words: [
    ["peer pressure", "influence from people of your age"], ["social responsibility", "duty to act for society's benefit"], ["community spirit", "feeling of togetherness"], ["volunteer", "work without pay to help others"], ["inequality", "unfairness in wealth or opportunity"], ["inclusive", "including everyone"], ["discrimination", "unfair treatment of people"], ["generation gap", "differences between young and old"], ["urbanisation", "growth of cities"], ["homelessness", "having no home"], ["charity", "organisation that helps people in need"], ["tolerance", "accepting differences"], ["civic duty", "responsibility as a citizen"], ["social cohesion", "unity in a society"], ["marginalised", "treated as unimportant"], ["empathy", "understanding others' feelings"]
  ]},
  { name: "Work & careers", icon: "💼", words: [
    ["work-life balance", "balance between job and personal life"], ["productivity", "rate of producing work"], ["employability", "skills that make you employable"], ["internship", "temporary work for experience"], ["remote work", "working away from the office"], ["promotion", "moving to a higher job"], ["colleague", "a person you work with"], ["deadline", "time limit for finishing work"], ["job satisfaction", "feeling happy with your job"], ["entrepreneur", "someone who starts a business"], ["workload", "amount of work to be done"], ["vocational", "related to practical job skills"], ["unemployment", "not having a job"], ["career path", "progression of jobs over time"], ["flexible hours", "working hours you can change"], ["teamwork", "working well together"]
  ]},
  { name: "Media & entertainment", icon: "🎬", words: [
    ["gripping", "very exciting"], ["thought-provoking", "making you think deeply"], ["blockbuster", "a very successful film"], ["plot twist", "unexpected change in a story"], ["binge-watch", "watch many episodes at once"], ["influencer", "person who affects followers' choices online"], ["viral", "spreading quickly online"], ["censorship", "suppression of content"], ["headline", "title of a news story"], ["documentary", "factual film"], ["sensationalism", "exaggerating news to excite"], ["captivating", "holding your attention"], ["critically acclaimed", "praised by critics"], ["soundtrack", "music of a film"], ["podcast", "audio programme online"], ["audience", "people watching or listening"]
  ]},
  { name: "Food & lifestyle", icon: "🍲", words: [
    ["delectable", "delicious"], ["mouth-watering", "looking or smelling delicious"], ["convenience food", "ready-made food"], ["home-cooked", "made at home"], ["staple", "a basic, main food"], ["vegetarian", "not eating meat"], ["vegan", "not eating any animal products"], ["portion", "amount of food for one person"], ["appetising", "making you want to eat"], ["bland", "lacking flavour"], ["cuisine", "style of cooking"], ["savoury", "salty, not sweet"], ["indulge", "allow yourself a treat"], ["takeaway", "food bought to eat elsewhere"], ["organic", "grown without chemicals"], ["junk food", "unhealthy food"]
  ]},
  { name: "Family & friendship", icon: "👨‍👩‍👧", words: [
    ["close-knit", "closely connected"], ["confide in", "share secrets with"], ["loyal", "faithfully supportive"], ["bond", "a close connection"], ["sibling", "brother or sister"], ["upbringing", "how you were raised"], ["role model", "person others admire and copy"], ["quality time", "meaningful time together"], ["drift apart", "gradually become less close"], ["get on well with", "have a good relationship with"], ["fall out with", "argue and stop being friendly"], ["trustworthy", "able to be trusted"], ["supportive", "giving help and encouragement"], ["companionship", "friendly company"], ["acquaintance", "someone you know slightly"], ["kindred spirit", "someone very similar to you"]
  ]},
  { name: "Sport & hobbies", icon: "⚽", words: [
    ["competitive", "wanting to win"], ["teamwork", "cooperation in a group"], ["sportsmanship", "fair and generous behaviour in sport"], ["endurance", "ability to keep going"], ["discipline", "self-control and training"], ["pastime", "a hobby"], ["amateur", "not professional"], ["spectator", "person watching an event"], ["tournament", "a series of competitions"], ["adrenaline rush", "sudden excitement"], ["take up", "start a hobby"], ["unwind", "relax"], ["extreme sports", "dangerous, exciting sports"], ["coach", "a sports trainer"], ["outdoor pursuits", "activities done outside"], ["hands-on", "involving practical activity"]
  ]},
  { name: "Feelings & emotions", icon: "💭", words: [
    ["ecstatic", "extremely happy"], ["elated", "very happy and proud"], ["apprehensive", "anxious about the future"], ["exasperated", "very annoyed"], ["devastated", "extremely upset"], ["overwhelmed", "affected by too many emotions"], ["nostalgic", "longing for the past"], ["content", "peacefully happy"], ["frustrated", "annoyed at being unable to do something"], ["relieved", "no longer anxious"], ["bewildered", "very confused"], ["grateful", "thankful"], ["anxious", "worried"], ["exhilarated", "very excited"], ["melancholy", "gently sad"], ["euphoric", "intensely happy"]
  ]}
];

/* Connectives for the Phrases page */
ZY.connectives = [
  { group: "Adding ideas", formal: ["Furthermore", "Moreover", "Additionally", "In addition", "Equally importantly", "Not only… but also"], informal: ["Also", "Plus", "What's more", "Besides", "On top of that"] },
  { group: "Contrasting", formal: ["However", "Nevertheless", "Nonetheless", "Conversely", "Whereas", "On the other hand", "In contrast"], informal: ["But", "Though", "Still", "Even so", "Having said that"] },
  { group: "Concession", formal: ["Although", "Even though", "Despite this", "Admittedly", "While it is true that"], informal: ["OK, so…", "I know that…, but"] },
  { group: "Cause", formal: ["Owing to", "Due to", "As a consequence of", "This stems from", "On account of"], informal: ["Because", "Since", "As"] },
  { group: "Effect / result", formal: ["Consequently", "Therefore", "Hence", "Thus", "As a result", "This, in turn, …"], informal: ["So", "That's why", "Which meant that"] },
  { group: "Examples", formal: ["For instance", "To illustrate", "A prime example is", "In particular", "Such as"], informal: ["Like", "For example", "Take … for example"] },
  { group: "Emphasis", formal: ["Indeed", "Undoubtedly", "Above all", "Significantly", "Crucially", "Most importantly"], informal: ["Honestly", "Seriously", "Believe it or not"] },
  { group: "Sequencing", formal: ["Firstly", "To begin with", "Subsequently", "Finally", "Last but not least"], informal: ["First of all", "Then", "After that", "In the end"] },
  { group: "Concluding", formal: ["Ultimately", "On balance", "All things considered", "In conclusion", "Taking everything into account"], informal: ["Anyway", "All in all", "So basically"] },
  { group: "Recommending", formal: ["It would be advisable to", "It is recommended that", "Consideration should be given to", "Greater emphasis should be placed on"], informal: ["Why don't you…?", "You should definitely…", "How about…?"] }
];

/* Idioms & expressions: [idiom, meaning, register] */
ZY.idioms = [
  ["a blessing in disguise", "something bad that turns out well", "Article / Email / Review"],
  ["a double-edged sword", "something with advantages and disadvantages", "Article / Essay"],
  ["make a world of difference", "make a very significant improvement", "Article / Email"],
  ["easier said than done", "more difficult in practice than in theory", "Article / Email"],
  ["in the long run", "over an extended period", "All types"],
  ["a breath of fresh air", "something refreshingly different", "Review / Article"],
  ["the tip of the iceberg", "a small visible part of a bigger problem", "Article / Essay"],
  ["go the extra mile", "make extra effort", "Review / Email"],
  ["leave a lasting impression", "be memorable", "Review / Email"],
  ["strike a balance", "find a reasonable compromise", "Essay / Article"],
  ["worth every penny", "worth the money spent", "Review"],
  ["a step in the right direction", "a positive development", "Article / Report"],
  ["open up new possibilities", "create new opportunities", "All types"],
  ["beyond expectations", "better than anticipated", "Review"],
  ["thrilled to bits", "extremely happy", "Email"],
  ["over the moon", "delighted", "Email"],
  ["on cloud nine", "extremely happy", "Email"],
  ["on tenterhooks", "anxiously waiting", "Email"],
  ["break the ice", "make people relax on first meeting", "Email"],
  ["a feast for the eyes", "beautiful to look at", "Email / Review"],
  ["in the blink of an eye", "extremely quickly", "Email / Review"],
  ["a hive of activity", "a very busy place", "Review"],
  ["make your hair stand on end", "be very frightening/exciting", "Review"],
  ["blow off steam", "release stress", "Email"],
  ["recharge your batteries", "rest and regain energy", "Email / Article"],
  ["hit the road", "start a journey", "Email"],
  ["the hustle and bustle", "noisy busy activity", "Email / Article"],
  ["food for thought", "something worth thinking about", "Article"],
  ["in a nutshell", "in summary", "Article"],
  ["the bottom line", "the most important point", "Article"],
  ["a piece of cake", "very easy", "Email"],
  ["once in a blue moon", "very rarely", "Email / Article"],
  ["with flying colours", "with great success", "Email"],
  ["a golden opportunity", "an excellent chance", "Email / Article"],
  ["take the plunge", "decide to do something risky", "Email"],
  ["keep up with the times", "stay modern", "Article / Essay"],
  ["a vicious circle", "a problem that makes itself worse", "Essay / Article"],
  ["raise awareness", "make people know about an issue", "Essay / Article / Report"],
  ["at the end of the day", "ultimately", "Article"],
  ["get the most out of", "benefit as much as possible", "All types"]
];

/* Grammar structures */
ZY.grammar = [
  ["Although + clause", "Although the experience was challenging, it proved immensely rewarding."],
  ["Not only … but also (inversion)", "Not only was the event entertaining, but it was also educational."],
  ["What makes … is …", "What makes this experience particularly memorable is its uniqueness."],
  ["Despite + noun / -ing", "Despite the initial difficulties, the initiative was successful."],
  ["Second conditional", "If greater attention were given to this issue, significant improvements could be achieved."],
  ["Third conditional inversion", "Had I known about the opportunity, I would have participated earlier."],
  ["Having + past participle", "Having explored the facilities, we reached a satisfactory conclusion."],
  ["Whereas", "Whereas some people favour traditional methods, others prefer modern alternatives."],
  ["…, which in turn …", "This improves concentration, which in turn enhances productivity."],
  ["Formal subjunctive", "It is essential that appropriate measures be implemented."],
  ["Non-defining relative clause", "The exhibition, which displayed work from several year groups, attracted a large audience."],
  ["Negative inversion", "Rarely does a school event bring together so many different talents."],
  ["Participle phrase", "Ben, looking haggard and covered in mud, had carried me all the way."],
  ["Cleft sentence (It was … that)", "It was the infectious energy of the crowd that won us over."],
  ["Passive for objectivity", "It was observed that several students arrived late."],
  ["The more … the more …", "The more time we spend online, the less we talk face to face."],
  ["Wish / If only", "I wish I had known how to cook for myself."],
  ["So … that / Such … that", "The views were so breathtaking that we forgot to take photos."],
  ["Not until …", "Not until we arrived did we realise how big the park was."],
  ["Rather than", "Digital tools should supplement, rather than replace, real connection."]
];

/* Upgrades */
ZY.upgrades = [
  ["very good", "brilliant, excellent, outstanding, exceptional, superb"],
  ["very bad", "dreadful, appalling, disappointing, inadequate"],
  ["very beautiful", "stunning, breathtaking, picturesque, exquisite"],
  ["very interesting", "fascinating, intriguing, captivating, engaging"],
  ["very boring", "monotonous, tedious, dull, uneventful"],
  ["very crowded", "packed, bustling, overcrowded, teeming with people"],
  ["very tired", "exhausted, worn out, drained, shattered"],
  ["very happy", "thrilled, delighted, ecstatic, over the moon"],
  ["very sad", "devastated, heartbroken, gutted, downcast"],
  ["very big", "enormous, colossal, vast, gigantic"],
  ["very important", "crucial, vital, essential, paramount"],
  ["I think", "I believe / In my view / It seems reasonable to suggest / I am convinced that"],
  ["good for people", "beneficial to participants / valuable for the community"],
  ["bad effect", "negative consequence / detrimental impact"],
  ["a lot of", "a considerable number of / a wide range of / numerous"],
  ["shows", "demonstrates / highlights / illustrates / reveals"],
  ["makes better", "improves / enhances / strengthens"],
  ["fix the problem", "address the issue / resolve the difficulty / tackle the problem"],
  ["in the end", "ultimately / overall / on balance"],
  ["get", "obtain / acquire / gain / receive"],
  ["help", "assist / support / facilitate"],
  ["start", "launch / initiate / commence / embark on"],
  ["nice", "pleasant / delightful / charming / welcoming"],
  ["say", "state / mention / point out / argue / claim"]
];

/* Opening voice per writing */
ZY.voices = [
  ["Email", "Warm, personal", "It was lovely to hear from you! I wanted to tell you about…"],
  ["Article", "Engaging", "Have you ever stopped to consider…?"],
  ["Review", "Evaluative", "If you are considering [name], here is what you should know."],
  ["Essay", "Argumentative", "There is growing debate about whether…"],
  ["Report", "Formal, objective", "The purpose of this report is to examine…"]
];

ZY.selfCheck = [
  "Have I answered every part of the task (all bullet points / both speech bubbles)?",
  "Is my register right for the audience (informal email vs formal report)?",
  "Does the opening suit the writing type?",
  "Does each paragraph have one clear focus?",
  "Have I developed points with explanations or examples (Point → Explain → Example → Link)?",
  "Have I used varied connectives without repeating them?",
  "Are my complex sentences accurate and easy to follow?",
  "Have I checked tenses, subject–verb agreement, articles, spelling and punctuation?",
  "Is my ending right: warm (email), memorable (article), evaluative (review), decisive (essay), practical (report)?",
  "Am I within the word limit?"
];
