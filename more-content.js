/* Content pack 2: more samples, prompts, reading, idioms, grammar and themes */
(function () {
  const W = ZY.writing;
  const add = (id, arr) => arr.forEach(s => W[id].samples.push(Object.assign({ src: "Zyvar original" }, s)));
  const prompts = (id, arr) => { W[id].prompts = (W[id].prompts || []).concat(arr); };

  /* ---------------- samples ---------------- */
  add("email", [
    {
      title: "Recommending a film to a friend", task: "You recently watched a film you think your friend would enjoy. Write an email to your friend.",
      points: ["say what the film is about", "explain why you enjoyed it", "suggest when you could watch it together"],
      text: `Hi Leo,

How's revision going? I hope you're not drowning in notes! I just had to write because I watched the most incredible film last night, and I immediately thought of you.

It's called The Silent Coast, and it's about a young lighthouse keeper who discovers a stranded whale during a terrible storm. Without giving too much away, she has to convince a whole village to help her before the tide turns. It sounds simple, but trust me, it's absolutely gripping.

What I loved most was the photography — some of the ocean scenes were so breathtaking that I actually forgot to eat my popcorn! The soundtrack is brilliant too, and the ending had me in tears (don't laugh!). You know how much you love nature documentaries, so I'm sure you'd be hooked.

It's still showing at the cinema in town until the end of the month. Why don't we go next Saturday afternoon after football? My treat — I still owe you for last time!

Let me know if you're free.

Speak soon,
Nadia`,
      notes: ["Teases the plot without spoilers ('Without giving too much away').", "Personal connection to the reader: 'You know how much you love…'."]
    },
    {
      title: "Starting at a new school", task: "You have just started at a new school. Write an email to a friend from your old school.",
      points: ["describe your new school", "explain how you feel about the change", "say what you miss about your old school"],
      text: `Dear Aisha,

I can't believe it's already been three weeks since I moved! Sorry I haven't written sooner — everything has been such a whirlwind.

My new school is enormous compared to ours. There are over a thousand students, a brand-new science block and even a swimming pool. On my first day, I got completely lost and walked into the wrong classroom twice. Talk about embarrassing!

To be honest, I was really nervous at first because I didn't know a single person. Luckily, a girl called Sara took me under her wing and introduced me to her friends, so I'm settling in much better now. Still, it's strange starting all over again.

What I miss most is you, of course! I also miss our lunchtime chats under the old olive tree and Mr Karim's terrible jokes in maths. Nobody here understands my sense of humour yet!

Please write back and tell me all the gossip. I want to know everything!

Lots of love,
Mira`,
      notes: ["Idioms: such a whirlwind, took me under her wing, settling in.", "Mixes positive and negative feelings — realistic and engaging."]
    }
  ]);

  add("article", [
    {
      title: "Should Students Have Part-Time Jobs?", task: "Your class has been discussing whether teenagers should have part-time jobs. Write an article for the school magazine.",
      bubbles: ["You learn to manage money.", "School work suffers."],
      text: `# Earning While Learning: Worth It?

Every weekend, thousands of teenagers swap their schoolbooks for aprons, name badges and cash registers. But is a part-time job a valuable lesson in independence, or a dangerous distraction from studying?

There is no doubt that working teaches skills that classrooms cannot. Teenagers with jobs learn to manage their own money, arrive on time and deal politely with difficult customers. These experiences build confidence and look impressive on future job and university applications.

On the other hand, the risks are real. A student who works long evening shifts may arrive at school exhausted, with homework unfinished. Over time, grades can suffer — and grades, after all, open far more doors than a weekend wage.

The answer, I believe, lies in balance. A few hours at the weekend can be hugely rewarding, provided that schoolwork remains the priority. Parents and employers should agree clear limits, especially during exam periods.

So, if you are thinking about getting a job, go for it — just make sure it fits around your education, not the other way round.`,
      notes: ["Concrete images in the hook (aprons, name badges, cash registers).", "Clear personal position: balance with conditions."]
    },
    {
      title: "Is Fast Fashion Costing the Earth?", task: "Write an article for a youth website about the environmental impact of cheap clothing.",
      text: `# Cheap Clothes, Hidden Costs

That T-shirt you bought for the price of a sandwich might seem like a bargain. But have you ever wondered who really pays for it?

"Fast fashion" — cheap, trendy clothing produced at lightning speed — has transformed the way we shop. New collections arrive in stores almost every week, encouraging us to buy more and wear items only a handful of times before throwing them away.

The environmental consequences are alarming. Producing clothes requires vast amounts of water and energy, and synthetic fabrics release tiny plastic fibres every time they are washed. Meanwhile, mountains of unwanted garments end up in landfill, where they may take decades to break down.

Fortunately, there is plenty we can do. Buying fewer but better-quality clothes, shopping second-hand and swapping outfits with friends are simple, affordable alternatives. Repairing a torn seam instead of replacing the whole item makes a difference too.

Fashion should be fun — but not at the planet's expense. The next time you are tempted by a bargain, ask yourself one question: do I really need it?`,
      notes: ["Hedged, general facts — no invented statistics.", "Ends with a direct question to the reader."]
    }
  ]);

  add("review", [
    {
      title: "Review of a Local Football Academy", task: "You recently attended a football academy during the holidays. Write a review for your school magazine.",
      bubbles: ["The coaches were brilliant.", "The training sessions were too early."],
      text: `# Kick Off Academy: Worth the Early Mornings?

If you have ever dreamed of improving your football skills during the holidays, Kick Off Academy might be exactly what you need. I spent two weeks there this summer, and it was a demanding but rewarding experience.

The academy's greatest strength is undoubtedly its coaching team. All the coaches are former professional players, and their feedback was precise, encouraging and genuinely useful. Within days, my passing accuracy had noticeably improved. The facilities were equally impressive, with well-maintained pitches and a modern gym.

However, the schedule was not ideal. Training began at 7 a.m. every day, which was tough for many participants, especially during the holidays. Lunch options were also rather limited, so I would advise bringing your own food.

On the whole, Kick Off Academy offers excellent value for anyone serious about football. If you can cope with the early starts, I would wholeheartedly recommend it — just remember to set several alarms!`,
      notes: ["Evidence of improvement ('my passing accuracy had noticeably improved').", "Practical tips make the review useful to readers."]
    },
    {
      title: "Review of a Science Documentary", task: "Write a review of a documentary you have watched for your school's website.",
      text: `# Ocean Giants: A Documentary That Makes Waves

Few documentaries manage to be both educational and genuinely thrilling, but Ocean Giants achieves exactly that. Over three episodes, it follows scientists tracking whales across the world's oceans.

What sets this series apart is its stunning cinematography. Using drones and underwater cameras, the filmmakers capture moments that feel almost impossible — a mother whale teaching her calf to breathe, or a pod hunting together in perfect coordination. The calm, thoughtful narration explains complex science clearly without ever becoming dull.

That said, the series is not flawless. The third episode spends rather too long on the researchers' personal stories, which slows the pace considerably. Some viewers may also find a few hunting scenes distressing.

Overall, Ocean Giants is a captivating and thought-provoking watch. I would highly recommend it to anyone interested in nature or science — and especially to students studying ecosystems, who will find it both inspiring and informative.`,
      notes: ["'What sets this series apart is…' — strong evaluative structure.", "Fair warning for sensitive viewers shows audience awareness."]
    }
  ]);

  add("essay", [
    {
      title: "Should children be given pocket money?", task: "Should parents give their children pocket money? Give your views.",
      text: `# Should Children Receive Pocket Money?

Whether children should receive regular pocket money is a question many families debate. While some parents fear it encourages materialism, I believe that, if managed carefully, pocket money teaches valuable lessons.

Firstly, pocket money helps children understand the value of money. When they must save for something they want, they learn patience and the importance of budgeting. These financial skills are essential in adult life, yet they are rarely taught at school.

Furthermore, receiving a small, regular amount encourages independence and responsibility. Children who make their own spending decisions — and occasionally their own mistakes — gain confidence in their judgement.

Admittedly, critics argue that pocket money can make children demanding or wasteful. However, this risk can be reduced if parents link pocket money to household chores and discuss spending choices with their children.

In conclusion, pocket money is not simply a treat but a practical educational tool. Provided that parents set clear limits, it can prepare children for a financially responsible future.`,
      notes: ["'Provided that…' — a conditional linker that shows nuance.", "Rebuttal offers a practical solution."]
    },
    {
      title: "Are celebrities good role models?", task: "'Celebrities are poor role models for young people.' Do you agree?",
      text: `# Celebrities as Role Models

In an age of social media, young people follow the lives of celebrities more closely than ever before. Whether these famous figures are positive role models, however, is far from clear.

On the one hand, some celebrities set an inspiring example. Many athletes demonstrate discipline, perseverance and teamwork, while others use their fame to raise awareness of important causes such as education or mental health. For young fans, these figures can be a powerful source of motivation.

On the other hand, the celebrity world often promotes unrealistic values. Carefully edited images can create pressure to look perfect, and stories of extravagant spending may suggest that wealth and fame are the keys to happiness. When celebrities behave irresponsibly, their influence can be genuinely harmful.

Ultimately, I believe it is unfair to judge all celebrities in the same way. Rather than rejecting them entirely, young people should be encouraged to think critically about whom they admire — and why. The best role models, after all, are often found much closer to home.`,
      notes: ["Partial-agreement position avoids oversimplifying.", "Final sentence offers a fresh perspective."]
    }
  ]);

  add("report", [
    {
      title: "Report on a Charity Bake Sale", task: "Your class organised a bake sale for charity. Write a report for your teacher saying what was successful and how it could be improved.",
      bubbles: ["Everything sold out in an hour!", "Some people couldn't pay by card."],
      text: `# Report on the Year 10 Charity Bake Sale

## Introduction
This report evaluates the charity bake sale held by Year 10 last Friday to raise money for a local children's hospital. It highlights the event's successes and recommends improvements for future fundraising.

## Successful Aspects
The event was extremely popular. A wide variety of homemade cakes, biscuits and savoury snacks were available, and almost all items sold out within the first hour. Students worked efficiently in teams, and the colourful posters displayed around the school attracted considerable attention in the days beforehand.

## Problems Identified
However, two issues limited the amount raised. Firstly, several potential customers were unable to buy anything because only cash payments were accepted. Secondly, as stock ran out so quickly, many students who arrived later were disappointed.

## Recommendations
It is recommended that a card reader be borrowed from the school office for future events. Furthermore, organisers should prepare a larger quantity of food or hold the sale over two lunchtimes.

## Conclusion
Overall, the bake sale was a commendable initiative. With these improvements, future events could raise significantly more for the charity.`,
      notes: ["Each problem is matched with a recommendation.", "Formal subjunctive: 'It is recommended that a card reader be borrowed'."]
    },
    {
      title: "Report on Online Learning Week", task: "Your school tried a week of online lessons. Write a report for your head teacher on how successful it was.",
      text: `# Report on the Online Learning Trial Week

## Introduction
The purpose of this report is to evaluate the online learning week trialled by the school last month. It is based on feedback from students and teachers collected through a short questionnaire.

## Advantages
The majority of students appreciated the flexibility of online lessons, particularly the ability to replay recorded explanations when revising. Many also reported that they felt more comfortable asking questions through the chat function than in a crowded classroom.

## Disadvantages
Nevertheless, a number of difficulties emerged. Several students experienced unreliable internet connections, which caused them to miss parts of lessons. In addition, a noticeable proportion found it harder to stay focused at home, and practical subjects such as science and art were considerably less effective online.

## Recommendations
It is therefore advisable that online learning be used only occasionally, for example during severe weather. The school should also consider lending devices to students without reliable equipment, and recording all lessons so that no one falls behind.

## Conclusion
In conclusion, online learning offers useful flexibility but cannot fully replace classroom teaching.`,
      notes: ["Balanced Advantages / Disadvantages headings.", "Recommendations are realistic and specific."]
    }
  ]);

  /* ---------------- more prompts ---------------- */
  prompts("email", [
    { q: "You recently got a pet. Write an email to a friend.", points: ["describe your new pet", "explain why your family chose it", "say what problems you have had"] },
    { q: "You went to a concert by your favourite band. Write an email to a friend.", points: ["describe where it took place", "explain what was special about it", "invite your friend to the next one"] },
    { q: "You have been chosen to represent your school in a competition. Write an email to your grandparent.", points: ["describe the competition", "explain how you were chosen", "say how you are preparing"] },
    { q: "You had a disappointing day out. Write an email to a friend.", points: ["say where you went", "explain what went wrong", "describe what you will do differently next time"] }
  ]);
  prompts("article", [
    { q: "Should schools teach students how to manage money? Write an article for your school magazine.", bubbles: ["Nobody teaches us about budgets.", "Parents should teach this."] },
    { q: "Are libraries still important in the digital age? Write an article for your school magazine.", bubbles: ["Everything is online now.", "Libraries are quiet places to study."] },
    { q: "Should young people spend more time outdoors? Write an article for a youth website.", bubbles: ["Nature makes me feel calm.", "There's nothing to do outside."] },
    { q: "Is it better to travel abroad or explore your own country? Write an article for your school magazine.", bubbles: ["Other cultures are fascinating.", "There's so much to see near home."] }
  ]);
  prompts("review", [
    { q: "Write a review of a video game you have played recently for a youth website.", bubbles: ["The graphics are stunning.", "It's far too easy."] },
    { q: "A new shopping centre has opened in your town. Write a review for the school magazine.", bubbles: ["There's a great food court.", "Parking is a nightmare."] },
    { q: "Write a review of a school club you have joined for the school website.", bubbles: ["I've learned so much.", "Meetings are always cancelled."] },
    { q: "Write a review of a hotel or holiday resort you stayed at for a travel website.", bubbles: ["The staff were so helpful.", "The rooms were tiny."] }
  ]);
  prompts("essay", [
    { q: "'Learning a foreign language should be compulsory for all students.' Do you agree?" },
    { q: "Some people believe that sport at school is a waste of time. Discuss both views and give your opinion." },
    { q: "Should governments spend more money on public transport than on roads?" },
    { q: "'Young people today have an easier life than their parents did.' To what extent do you agree?" }
  ]);
  prompts("report", [
    { q: "Your school held an international food day. Write a report for your head teacher.", points: ["say what was successful", "suggest how it could be improved"] },
    { q: "Write a report on how students use the school's outdoor spaces at break time.", points: ["describe the current situation", "recommend improvements"] },
    { q: "Your class took part in a community volunteering project. Write a report for your teacher.", points: ["explain what students learned", "suggest how the project could continue"] },
    { q: "Write a report on the school's lunchtime clubs for the parents' newsletter.", points: ["describe the most popular clubs", "suggest new clubs for next year"] }
  ]);

  /* ---------------- reading ---------------- */
  ZY.reading.push(
    {
      id: "chess-champion",
      title: "The Village Chess Champion",
      level: "Core",
      time: "12 min",
      skills: ["Detail", "Sequencing", "Vocabulary"],
      paragraphs: [
        "When twelve-year-old Tariq Benali first saw a chessboard, it was being used as a doorstop in his grandfather's shop. The pieces were scattered in a dusty box, and two of the pawns had been replaced with bottle tops. Curious, Tariq asked his grandfather how to play. By the end of the afternoon, he was hooked.",
        "There was no chess club in Tariq's small village, so he taught himself using free videos on his mother's old phone. Every evening after finishing his homework, he replayed famous games move by move, writing notes in a battered exercise book. Within a year, he could beat every adult in the village — including his grandfather, who claimed, rather unconvincingly, that he had let him win.",
        "His big break came when a teacher entered him into a regional schools tournament. Tariq had never played against a clock before, and he lost his first game simply because he ran out of time. 'I was so nervous I forgot to press the button,' he laughs. But he learned quickly, winning his next six games and finishing second overall.",
        "Since then, Tariq has competed in national competitions and now coaches younger children at a club he helped to set up in the village hall. Around twenty children attend every Saturday morning, and the club has received donated boards and clocks from a city chess association.",
        "Tariq believes chess has taught him more than strategy. 'It teaches you patience,' he says. 'You learn that every decision has consequences, and that losing is just a chance to improve.'"
      ],
      questions: [
        { type: "mcq", q: "How was the chessboard being used when Tariq first saw it?", options: ["As a table", "As a doorstop", "As a decoration", "As a game for customers"], answer: 1, explain: "'it was being used as a doorstop'." },
        { type: "short", q: "What had replaced two of the pawns?", accept: [["bottle"]], answer: "Bottle tops.", marks: 1 },
        { type: "short", q: "How did Tariq learn to play chess well? Give TWO ways.", accept: [["video", "phone", "replay", "famous games", "notes"], ["video", "phone", "replay", "famous games", "notes"]], answer: "Any two: watching free videos; replaying famous games; writing notes.", marks: 2 },
        { type: "tf", q: "Tariq's grandfather admitted honestly that Tariq was better than him.", answer: "False", explain: "He claimed 'rather unconvincingly' that he had let Tariq win." },
        { type: "short", q: "Why did Tariq lose his first tournament game?", accept: [["time", "clock", "button"]], answer: "He ran out of time / forgot to press the clock button.", marks: 1 },
        { type: "short", q: "What position did Tariq finish in at the regional tournament?", accept: [["second", "2nd", "2"]], answer: "Second overall.", marks: 1 },
        { type: "mcq", q: "Who provided equipment for the village club?", options: ["Tariq's school", "A city chess association", "The village council", "Tariq's grandfather"], answer: 1, explain: "'donated boards and clocks from a city chess association'." },
        { type: "short", q: "According to Tariq, what has chess taught him? Give TWO things.", accept: [["patience", "patient"], ["decision", "consequence", "losing", "improve"]], answer: "Patience; every decision has consequences; losing is a chance to improve.", marks: 2 }
      ]
    },
    {
      id: "ancient-roads",
      title: "Walking the Ancient Incense Route",
      level: "Extended",
      time: "15 min",
      skills: ["Inference", "Writer's purpose", "Summary"],
      paragraphs: [
        "For more than a thousand years, camel caravans carried frankincense and myrrh along a network of desert trails stretching from southern Arabia to the Mediterranean. These precious resins, burned in temples and used in medicine, were once worth more than their weight in gold. Today, the Incense Route is largely forgotten — except by a small but growing number of walkers determined to follow in the caravans' footsteps.",
        "Hannah Okoye, a history teacher, spent three weeks walking a 300-kilometre section of the route last spring. 'I wanted to understand what the journey actually felt like,' she explains. 'You can read about trade routes in a textbook, but you can't feel the heat or understand why a well was worth fighting over.'",
        "The walk was far from comfortable. Daytime temperatures regularly exceeded thirty-five degrees, so Hannah and her guide set off before dawn and rested in the shade during the hottest hours. Water was carefully rationed, and on two occasions they had to change their plans because a well they had relied on had dried up.",
        "Yet the hardships were outweighed by extraordinary moments. Hannah describes sleeping beneath a sky 'so full of stars it looked like spilled sugar', and discovering ancient carvings of camels and travellers on rock faces that few modern visitors have seen. In one remote village, an elderly man shared stories passed down from his great-grandfather, who had worked on the caravans.",
        "Hannah now uses her experience in the classroom, showing students photographs, maps and the small piece of frankincense she brought home. She also hopes that more responsible tourism could bring income to remote communities along the route. 'These places hold stories that belong to all of us,' she says. 'If we don't walk these paths, we risk forgetting them entirely.'"
      ],
      questions: [
        { type: "short", q: "Give TWO uses of frankincense and myrrh in the past.", accept: [["temple", "burn"], ["medicine", "medical"]], answer: "Burned in temples; used in medicine.", marks: 2 },
        { type: "mcq", q: "Why did Hannah decide to walk the route?", options: ["To write a guidebook", "To experience what the journey was really like", "To find frankincense to sell", "To train for a race"], answer: 1, explain: "'I wanted to understand what the journey actually felt like'." },
        { type: "short", q: "How did Hannah cope with the heat?", accept: [["dawn", "early"], ["shade", "rest"]], answer: "They set off before dawn and rested in the shade during the hottest hours.", marks: 2 },
        { type: "tf", q: "Hannah had to change her plans twice because of dry wells.", answer: "True", explain: "'on two occasions they had to change their plans'." },
        { type: "mcq", q: "'so full of stars it looked like spilled sugar' is an example of…", options: ["a simile", "a rhetorical question", "an exaggeration only", "a statistic"], answer: 0, explain: "A comparison using 'like' — a simile." },
        { type: "short", q: "What did the elderly man share with Hannah?", accept: [["stor"]], answer: "Stories passed down from his great-grandfather, who had worked on the caravans.", marks: 1 },
        { type: "short", q: "How does Hannah use her experience in her teaching? Give TWO examples.", accept: [["photo", "map", "frankincense"], ["photo", "map", "frankincense"]], answer: "Any two: photographs, maps, the piece of frankincense.", marks: 2 },
        { type: "mcq", q: "What is Hannah's main message in the final paragraph?", options: ["Tourism damages remote areas.", "The route's history should be remembered and shared.", "Students should not travel.", "Frankincense is valuable today."], answer: 1, explain: "'If we don't walk these paths, we risk forgetting them entirely.'" }
      ]
    }
  );

  /* ---------------- idioms, grammar, accuracy ---------------- */
  ZY.idioms.push(
    ["the icing on the cake", "something that makes a good thing even better", "Email / Review"],
    ["a far cry from", "very different from", "Article / Review"],
    ["call it a day", "stop working on something", "Email"],
    ["cost an arm and a leg", "be very expensive", "Email / Review"],
    ["hit the nail on the head", "describe something exactly right", "Article / Email"],
    ["learn the ropes", "learn how to do a job", "Email / Report (sparingly)"],
    ["light at the end of the tunnel", "signs that a hard time is ending", "Article / Email"],
    ["miss the boat", "lose an opportunity", "Email / Article"],
    ["out of this world", "extremely good", "Email / Review"],
    ["pull your weight", "do your fair share of work", "Email / Article"],
    ["take something with a pinch of salt", "not fully believe it", "Article"],
    ["the last straw", "the final problem that makes you lose patience", "Email / Article"],
    ["under the weather", "slightly ill", "Email"],
    ["up in the air", "uncertain, not decided", "Email"],
    ["word of mouth", "people telling each other", "Review / Article"],
    ["a drop in the ocean", "a very small amount compared to what is needed", "Article / Essay"],
    ["bite off more than you can chew", "try to do too much", "Email / Article"],
    ["get the ball rolling", "start something", "Email / Report (sparingly)"],
    ["keep your fingers crossed", "hope for good luck", "Email"],
    ["think outside the box", "think creatively", "Article"]
  );
  ZY.grammarQuiz.push(
    ["Neither the teacher nor the students ___ aware of the change.", ["was", "were", "is", "has been"], 1, "With 'neither… nor', the verb agrees with the nearer subject (students)."],
    ["She has lived here ___ she was a child.", ["for", "since", "from", "during"], 1, "since + a point in time."],
    ["I'd rather you ___ your phone in class.", ["don't use", "didn't use", "not use", "won't use"], 1, "would rather + subject + past simple."],
    ["The concert, ___ lasted three hours, was fantastic.", ["that", "which", "who", "what"], 1, "Non-defining relative clauses use 'which', never 'that'."],
    ["We were made ___ the whole exercise again.", ["do", "to do", "doing", "done"], 1, "Passive 'make' takes 'to' + infinitive."],
    ["Hardly ___ arrived when it started to rain.", ["we had", "had we", "we have", "did we"], 1, "Hardly + inversion with past perfect."],
    ["It's time we ___ home.", ["go", "went", "will go", "going"], 1, "It's time + subject + past simple."],
    ["If it hadn't rained, we ___ the match.", ["would win", "will win", "would have won", "had won"], 2, "Third conditional."],
    ["She asked me where ___.", ["did I live", "I lived", "do I live", "I am living"], 1, "Reported questions use statement word order."],
    ["The museum is worth ___.", ["to visit", "visiting", "visit", "visited"], 1, "'worth' + -ing."],
    ["You ___ have told me — I would have helped!", ["must", "should", "can", "will"], 1, "should have + pp for past advice/regret."],
    ["There's no point ___ about it now.", ["to worry", "worrying", "worry", "in worry"], 1, "no point (in) + -ing."],
    ["He apologised ___ late.", ["to be", "for being", "being", "of being"], 1, "apologise for + -ing."],
    ["By next June, I ___ my exams.", ["will finish", "will have finished", "finish", "am finishing"], 1, "Future perfect for completion before a future time."],
    ["Such ___ that everyone stayed indoors.", ["was the storm", "the storm was", "storm was", "was storm"], 0, "Such + be + subject (inversion) for emphasis."]
  );
  ZY.errors.push(
    ["I am interesting in science.", "I am interested in science.", "-ed for feelings: interested in."],
    ["She made me to laugh.", "She made me laugh.", "make + object + base verb."],
    ["I have been to Paris two years ago.", "I went to Paris two years ago.", "'ago' needs the past simple."],
    ["He is good in football.", "He is good at football.", "good at + activity."],
    ["We had a lot of fun yesterday, it was great.", "We had a lot of fun yesterday; it was great.", "Avoid comma splices — use a semicolon or full stop."],
    ["Can you give me an advice?", "Can you give me some advice / a piece of advice?", "'Advice' is uncountable."],
    ["I prefer tea than coffee.", "I prefer tea to coffee.", "prefer X to Y."],
    ["My brother is more older than me.", "My brother is older than me.", "No 'more' with -er comparatives."],
    ["Although it was raining, but we went out.", "Although it was raining, we went out.", "Don't use 'although' and 'but' together."],
    ["Everybody were excited.", "Everybody was excited.", "Everybody/everyone take singular verbs."]
  );
  ZY.confused.push(
    ["lead / led", "lead = present tense / a metal; led = past tense", "She led the team. Today she will lead it again."],
    ["passed / past", "passed = verb (went by); past = time before / beyond", "We passed the museum. It was in the past."],
    ["breath / breathe", "breath = noun; breathe = verb", "Take a deep breath and breathe slowly."],
    ["desert / dessert", "desert = dry land; dessert = sweet course", "We ate dessert in the desert."],
    ["personal / personnel", "personal = private; personnel = staff", "A personal opinion. Hospital personnel."],
    ["who's / whose", "who's = who is; whose = belonging to whom", "Who's coming? Whose bag is this?"],
    ["affect / afflict", "affect = influence; afflict = cause suffering", "The drought afflicted the region."],
    ["imply / infer", "imply = suggest; infer = conclude", "The writer implies…; the reader infers…"],
    ["continual / continuous", "continual = repeated; continuous = without stopping", "Continual interruptions. A continuous noise."],
    ["eligible / illegible", "eligible = allowed/qualified; illegible = unreadable", "Eligible to vote. Illegible handwriting."]
  );
  ZY.spelling.push("acquire", "assessment", "conscientious", "convenience", "embarrassment", "enthusiastic", "exhilarating", "humorous", "maintenance", "mischievous", "occasionally", "perseverance", "questionnaire", "recommendation", "sincerely", "temperature");

  ZY.themes.push(
    { name: "Crime & safety", words: [["vandalism", "deliberate damage to property"], ["shoplifting", "stealing from shops"], ["deterrent", "something that discourages crime"], ["community policing", "police working closely with residents"], ["surveillance cameras", "CCTV"], ["rehabilitation", "helping offenders return to normal life"], ["juvenile", "relating to young people"], ["law-abiding", "obeying the law"], ["penalty", "a punishment"], ["witness", "a person who sees an event"], ["anti-social behaviour", "behaviour that disturbs others"], ["prevention", "stopping something before it happens"]] },
    { name: "Housing & home", words: [["spacious", "having plenty of room"], ["cramped", "uncomfortably small"], ["neighbourhood", "the area around your home"], ["suburb", "residential area outside a city centre"], ["affordable housing", "homes people on low incomes can buy/rent"], ["renovate", "repair and improve a building"], ["landlord", "a person who rents out property"], ["household chores", "regular jobs at home"], ["cosy", "warm and comfortable"], ["high-rise", "a very tall building"], ["amenities", "useful facilities nearby"], ["sense of community", "feeling of belonging to a local group"]] }
  );
})();
