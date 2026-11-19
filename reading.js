window.ZY = window.ZY || { writing: {} };
/*
  Question types:
   mcq   : { type, q, options:[...], answer: index, explain }
   tf    : { type, q, answer: "True" | "False" | "Not Given", explain }
   short : { type, q, accept: [[alt, alt], [alt]] (every group must match), answer: model, marks }
*/
ZY.reading = [
  {
    id: "urban-bees",
    title: "The Rooftop Beekeepers",
    level: "Core → Extended",
    time: "15 min",
    skills: ["Detail", "Inference", "Vocabulary in context"],
    paragraphs: [
      "On the roof of a twelve-storey office block in the centre of the city, Amira Haddad lifts the lid of a wooden box and smiles. Inside, around forty thousand bees are going about their business, apparently undisturbed by the traffic roaring below. 'People are always amazed that bees can survive up here,' she says. 'But in many ways, the city is a better home for them than the countryside.'",
      "It sounds unlikely, but Amira's claim is supported by several studies. Modern farmland is often dominated by a single crop, which flowers for only a few weeks each year. Once those flowers have gone, bees can struggle to find food. Cities, by contrast, are full of parks, gardens, balconies and roadside trees, which flower at different times. This variety means that urban bees can often feed from early spring until late autumn. What is more, city gardens tend to be treated with fewer chemical pesticides than large farms.",
      "Amira started keeping bees six years ago, after reading about the dramatic decline in bee populations across the world. 'I felt helpless,' she admits. 'Then I realised I could do something small myself.' Her first hive was on the balcony of her flat, much to the alarm of her neighbours. Today, she looks after twenty-two hives on rooftops across the city, and local businesses pay her to install and maintain them.",
      "Not everyone is convinced that urban beekeeping is a good idea, however. Some scientists warn that if too many hives are placed in one area, honeybees may compete with wild bees for the same flowers. Wild bees, which include hundreds of species, are often more important for pollinating local plants. 'Adding honeybees is not the same as protecting nature,' explains Dr Leon Marsh, an ecologist at the city university. 'If we really want to help, we should be planting more flowers, not just adding more hives.'",
      "Amira agrees with him more than you might expect. Every business that hires her must also agree to plant wildflowers on its roof or in nearby green spaces. 'The honey is a lovely bonus,' she says, 'but it's not the point. The point is to make the city a place where all kinds of insects can thrive.' Last year, her hives produced over four hundred jars of honey, which were sold at a local market. All the profits went towards a school programme that teaches children how to create bee-friendly gardens.",
      "As the sun begins to set, Amira gently closes the hive. 'When I started, people thought I was slightly crazy,' she laughs. 'Now I get emails every week from people asking how they can start. That tells me attitudes are changing.'"
    ],
    questions: [
      { type: "mcq", q: "Why are people surprised by Amira's bees?", options: ["They are kept in a very noisy area.", "They are kept high up in the city.", "They produce more honey than country bees.", "They are not frightened of people."], answer: 1, explain: "Para 1: 'People are always amazed that bees can survive up here' — i.e. on a high roof in the city." },
      { type: "short", q: "Give TWO reasons why cities can be good places for bees.", accept: [["different times", "variety", "parks", "gardens", "early spring", "late autumn", "all year", "longer"], ["pesticide", "chemical"]], answer: "Plants flower at different times / there is food from early spring to late autumn; fewer chemical pesticides are used.", marks: 2 },
      { type: "mcq", q: "What problem do bees face on modern farmland?", options: ["There are too many pesticides and too few farmers.", "There is plenty of food but nowhere to build hives.", "The single crop flowers only briefly, so food runs out.", "Farmers do not want bees near their crops."], answer: 2, explain: "Para 2: farmland is dominated by a single crop which flowers for only a few weeks." },
      { type: "short", q: "What made Amira decide to start keeping bees?", accept: [["decline", "falling", "reading", "fewer bees", "populations"]], answer: "She read about the dramatic decline in bee populations around the world.", marks: 1 },
      { type: "tf", q: "Amira's neighbours were worried when she put her first hive on her balcony.", answer: "True", explain: "'much to the alarm of her neighbours'." },
      { type: "tf", q: "Amira now earns more money from beekeeping than from any other job.", answer: "Not Given", explain: "The text says businesses pay her, but never compares her income to other jobs." },
      { type: "short", q: "According to Dr Marsh, what is the risk of placing too many hives in one area?", accept: [["compete", "competition"], ["wild bee", "wild"]], answer: "Honeybees may compete with wild bees for the same flowers.", marks: 1 },
      { type: "mcq", q: "How does Amira respond to Dr Marsh's concern?", options: ["She ignores it and continues adding hives.", "She requires clients to plant wildflowers.", "She sells her honey to fund research.", "She only places hives in the countryside."], answer: 1, explain: "Para 5: 'Every business that hires her must also agree to plant wildflowers'." },
      { type: "mcq", q: "In paragraph 5, the word 'thrive' is closest in meaning to…", options: ["survive with difficulty", "grow and do well", "move freely", "be protected by law"], answer: 1, explain: "'thrive' = grow, develop and be successful." },
      { type: "short", q: "What happened to the money from selling the honey?", accept: [["school", "children"]], answer: "It funded a school programme teaching children to create bee-friendly gardens.", marks: 1 },
      { type: "mcq", q: "What does the final paragraph suggest?", options: ["Amira regrets starting beekeeping.", "Public attitudes towards urban bees are becoming more positive.", "Amira plans to stop giving advice.", "Most people still think Amira is crazy."], answer: 1, explain: "'Now I get emails every week… That tells me attitudes are changing.'" }
    ]
  },
  {
    id: "sleep-teens",
    title: "Why Teenagers Can't Get Up",
    level: "Extended",
    time: "15 min",
    skills: ["Detail", "Opinion vs fact", "Summary"],
    paragraphs: [
      "Every school morning, in homes around the world, a familiar battle takes place. Parents call, alarms ring, and teenagers pull the covers over their heads. It is easy to dismiss this as laziness. However, sleep scientists now believe that the problem is largely biological rather than a matter of willpower.",
      "During adolescence, the body's internal clock — known as the circadian rhythm — shifts later by up to two hours. The hormone melatonin, which makes us feel sleepy, is released later in the evening than it is in children or adults. As a result, many teenagers simply do not feel tired until eleven o'clock at night or even later. If they then have to wake at six-thirty for school, they are left with far less than the eight to ten hours of sleep that experts recommend for their age group.",
      "The consequences of this sleep debt can be serious. Tired students find it harder to concentrate, remember information and control their emotions. Some studies have linked a lack of sleep to lower grades, a greater risk of accidents among young drivers and higher levels of anxiety. 'A sleepy teenager is not a bad student,' says Professor Ruth Okafor, who has studied adolescent sleep for over twenty years. 'They are a student who is being asked to learn at the wrong time of day.'",
      "In response, a number of schools have experimented with later start times. In one well-known trial, a group of secondary schools moved their first lesson from 8:00 to 8:50. Over the following year, attendance improved, fewer students reported feeling sleepy in class, and exam results rose slightly. Teachers also noticed that students seemed calmer and more willing to participate.",
      "Yet changing the school day is not straightforward. Later start times can mean later finishing times, which may clash with after-school sports, part-time jobs and family routines. Bus timetables may need to be redesigned, and some parents worry about who will look after younger children in the morning. Critics also argue that teenagers would simply stay up even later if school started later.",
      "Professor Okafor accepts that there is no perfect solution, but she insists that teenagers themselves can help. Her advice is simple: avoid screens for at least an hour before bed, keep the bedroom cool and dark, and try to wake at roughly the same time every day — even at weekends. 'We can't change biology,' she says, 'but we can stop working against it.'"
    ],
    questions: [
      { type: "mcq", q: "What is the main idea of the first paragraph?", options: ["Teenagers are naturally lazy.", "Parents are too strict about mornings.", "Teenagers' difficulty waking up may have a biological cause.", "Alarms are not effective for teenagers."], answer: 2, explain: "'the problem is largely biological rather than a matter of willpower'." },
      { type: "short", q: "What happens to melatonin during adolescence?", accept: [["later"]], answer: "It is released later in the evening than in children or adults.", marks: 1 },
      { type: "short", q: "How many hours of sleep do experts recommend for teenagers?", accept: [["eight", "8"], ["ten", "10"]], answer: "Eight to ten hours.", marks: 1 },
      { type: "short", q: "Name TWO effects of a lack of sleep mentioned in paragraph 3.", accept: [["concentrat", "remember", "memory", "emotion", "grade", "accident", "anxiety"], ["concentrat", "remember", "memory", "emotion", "grade", "accident", "anxiety"]], answer: "Any two: harder to concentrate / remember / control emotions; lower grades; more accidents among young drivers; higher anxiety.", marks: 2 },
      { type: "mcq", q: "What does Professor Okafor mean by 'being asked to learn at the wrong time of day'?", options: ["Lessons are too long.", "Teenagers' bodies are not ready to learn early in the morning.", "Teachers should give homework in the evening.", "Students should choose their own timetable."], answer: 1, explain: "Her point links to the shifted body clock described in paragraph 2." },
      { type: "tf", q: "In the trial, schools started their first lesson almost an hour later.", answer: "True", explain: "From 8:00 to 8:50 — fifty minutes later." },
      { type: "tf", q: "Exam results improved dramatically after the change.", answer: "False", explain: "The text says results 'rose slightly'." },
      { type: "short", q: "Give TWO practical problems with later school start times.", accept: [["sport", "job", "family", "bus", "timetable", "younger children", "look after", "stay up"], ["sport", "job", "family", "bus", "timetable", "younger children", "look after", "stay up"]], answer: "Any two: clashes with sports / part-time jobs / family routines; bus timetables need redesigning; childcare for younger children; teenagers might stay up later.", marks: 2 },
      { type: "mcq", q: "Which word in paragraph 5 means 'conflict with'?", options: ["straightforward", "clash", "redesigned", "argue"], answer: 1, explain: "'clash with after-school sports' = conflict with." },
      { type: "short", q: "List THREE pieces of advice Professor Okafor gives teenagers.", accept: [["screen"], ["cool", "dark"], ["same time", "weekend", "wake"]], answer: "Avoid screens for an hour before bed; keep the bedroom cool and dark; wake at the same time every day, even at weekends.", marks: 3 }
    ]
  },
  {
    id: "repair-cafe",
    title: "Don't Throw It Away — Fix It!",
    level: "Core",
    time: "12 min",
    skills: ["Skimming", "Detail", "Vocabulary"],
    paragraphs: [
      "On the first Saturday of every month, the community hall in Brookfield becomes a very unusual café. Instead of coffee machines and cake stands, the tables are covered with broken toasters, torn jeans, wobbly chairs and bicycles with flat tyres. This is the Brookfield Repair Café, and everything here is free.",
      "The idea is simple. Local people bring items that are broken, and volunteers with practical skills — electricians, tailors, carpenters and bike mechanics — help them to fix them. Visitors are not expected to sit and wait; they are encouraged to watch, ask questions and even try the repair themselves. 'We don't just fix things for people,' explains organiser Tom Reyes, a retired engineer. 'We fix things with people. That way, next time they might not need us.'",
      "The first Repair Café opened in Amsterdam in 2009, and there are now thousands around the world. Their popularity is partly a reaction to what many people call our 'throwaway culture'. Products are often designed to be cheap rather than long-lasting, and it is frequently easier to buy a new kettle than to find someone who can mend the old one. As a result, huge amounts of electrical waste end up in landfill each year.",
      "In its first year, the Brookfield café repaired more than six hundred items, from lamps to laptops. Not every repair is successful — around one in four objects cannot be saved — but even then, volunteers explain what went wrong and give advice about what to buy next time.",
      "For many visitors, however, the café is about more than repairs. Sixteen-year-old Priya first came with a broken headphone cable and now volunteers every month, helping with simple sewing jobs. 'I've learnt so many skills, and I've met people I'd never normally talk to,' she says. 'An eighty-year-old man taught me how to sew on a button properly. Now I'm teaching my friends.'"
    ],
    questions: [
      { type: "mcq", q: "What is unusual about the Brookfield Repair Café?", options: ["It only sells cake.", "It is a place where broken things are fixed for free.", "It only opens once a year.", "It is run by a large company."], answer: 1, explain: "Para 1: tables are covered with broken items, and everything is free." },
      { type: "short", q: "Name TWO types of volunteer who work at the café.", accept: [["electrician", "tailor", "carpenter", "mechanic"], ["electrician", "tailor", "carpenter", "mechanic"]], answer: "Any two: electricians, tailors, carpenters, bike mechanics.", marks: 2 },
      { type: "mcq", q: "What does Tom mean by 'We fix things with people'?", options: ["Visitors must pay for repairs.", "Visitors help and learn so they can repair things themselves later.", "Only people with skills may come.", "Repairs take a very long time."], answer: 1, explain: "'That way, next time they might not need us.'" },
      { type: "short", q: "When and where did the first Repair Café open?", accept: [["2009"], ["amsterdam"]], answer: "In Amsterdam in 2009.", marks: 1 },
      { type: "mcq", q: "The phrase 'throwaway culture' refers to…", options: ["a habit of recycling everything", "a society that throws things away instead of repairing them", "people who throw parties", "a culture of saving money"], answer: 1, explain: "It describes replacing items rather than mending them." },
      { type: "tf", q: "About 25% of items brought to the café cannot be repaired.", answer: "True", explain: "'around one in four objects cannot be saved'." },
      { type: "tf", q: "Priya was paid to volunteer at the café.", answer: "False", explain: "She volunteers — no payment is mentioned, and volunteers are unpaid by definition." },
      { type: "short", q: "Give TWO benefits Priya has gained from the café.", accept: [["skill", "sew", "learn"], ["people", "met", "friend", "teach"]], answer: "She has learnt new skills (e.g. sewing) and met people she would never normally talk to / now teaches her friends.", marks: 2 }
    ]
  },
  {
    id: "night-market",
    title: "A Night at the Lantern Market",
    level: "Core → Extended",
    time: "12 min",
    skills: ["Descriptive language", "Inference", "Writer's attitude"],
    paragraphs: [
      "I had been warned that the Lantern Market would be busy, but nothing could have prepared me for the sheer wall of noise and colour that greeted me as I stepped off the tram. Hundreds of paper lanterns, in every shade from deep crimson to soft gold, swayed above a maze of narrow stalls, and the air was thick with the scent of grilled corn, cinnamon and charcoal.",
      "The market only opens on Friday and Saturday nights, from sunset until well after midnight. It began fifteen years ago with just a dozen food carts in an empty car park; today, more than two hundred vendors compete for space, and the local council estimates that it attracts around ten thousand visitors every weekend.",
      "My first stop was a tiny stall run by an elderly couple who have been making the same sesame pancakes for over forty years. There was no menu and no sign — just a queue that snaked around the corner. Twenty minutes later, I understood why. The pancake was crisp on the outside, soft and sweet inside, and gone in about four bites.",
      "Not everything was so delightful. As the evening wore on, the crowds became so dense that walking felt more like being carried along by a slow river of people. Several stallholders complained that rising rents had forced long-standing traders out, replaced by stalls selling identical phone cases and plastic souvenirs. 'It used to be about food and families,' one woman told me sadly as she packed away her hand-painted bowls. 'Now it's about selfies.'",
      "Still, as I left — sticky-fingered and slightly overwhelmed — I found myself already planning a return visit. Go early, go hungry, and seek out the stalls without signs. They are, almost always, the best."
    ],
    questions: [
      { type: "mcq", q: "How did the writer feel on arriving at the market?", options: ["Bored", "Overwhelmed by the noise and colour", "Disappointed by the size", "Worried about safety"], answer: 1, explain: "'nothing could have prepared me for the sheer wall of noise and colour'." },
      { type: "short", q: "Name TWO smells the writer noticed.", accept: [["corn", "cinnamon", "charcoal"], ["corn", "cinnamon", "charcoal"]], answer: "Any two: grilled corn, cinnamon, charcoal.", marks: 2 },
      { type: "short", q: "How has the market changed since it began?", accept: [["dozen", "12", "car park"], ["two hundred", "200"]], answer: "It started with about a dozen food carts in a car park; now there are more than two hundred vendors.", marks: 2 },
      { type: "mcq", q: "Why did the writer 'understand why' after twenty minutes?", options: ["The queue was moving fast.", "The pancake was delicious, which explained the long queue.", "The couple explained their history.", "The stall finally put up a sign."], answer: 1, explain: "The writer tasted the pancake and realised why so many people queued." },
      { type: "mcq", q: "'carried along by a slow river of people' is an example of…", options: ["a simile", "a metaphor", "alliteration", "a rhetorical question"], answer: 1, explain: "It describes the crowd AS a river without using 'like/as' — a metaphor." },
      { type: "short", q: "According to stallholders, why have long-standing traders left?", accept: [["rent"]], answer: "Rising rents forced them out.", marks: 1 },
      { type: "tf", q: "The woman selling bowls thinks the market has improved.", answer: "False", explain: "She says it 'used to be about food and families… Now it's about selfies' — said sadly." },
      { type: "mcq", q: "What is the writer's overall attitude towards the market?", options: ["Entirely negative", "Positive, despite some criticisms", "Neutral and uninterested", "Angry about the prices"], answer: 1, explain: "Despite the crowds and changes, the writer is 'already planning a return visit'." },
      { type: "short", q: "What THREE pieces of advice does the writer give at the end?", accept: [["early"], ["hungry"], ["sign"]], answer: "Go early, go hungry, and look for the stalls without signs.", marks: 3 }
    ]
  }
];
