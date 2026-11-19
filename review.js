window.ZY = window.ZY || { writing: {} };
ZY.writing.review = {
  id: "review",
  name: "Review",
  icon: "⭐",
  tagline: "Descriptive and evaluative — show what worked, what didn't, and give a clear verdict.",
  voice: "Semi-formal, engaging, evaluative",
  words: "Usually 120–160 or 150–200 words (always check your paper)",
  overview: [
    "A review evaluates a place, product, event, course, book, film, magazine or experience for readers who are deciding whether to try it. It is not a story of your day — it is a judgement supported by specific details.",
    "Strong reviews describe only the most relevant features, explain strengths AND weaknesses with examples, and end with a clear recommendation saying who would (or wouldn't) enjoy it."
  ],
  format: [
    ["Title", "Catchy and connected to the subject (e.g. 'Sky Zone: A Thrill-Seeker's Paradise')"],
    ["Introduction", "Hook + name the subject + overall first impression"],
    ["Description", "Key features: location, facilities, staff, variety, price"],
    ["Strengths", "What impressed you most, with specific examples"],
    ["Weaknesses", "One or two drawbacks, explained fairly"],
    ["Verdict", "Recommendation: who it suits + final judgement"]
  ],
  dos: [
    "Give it a title and name the subject early.",
    "Evaluate, don't just describe: say WHY something was good or bad.",
    "Include at least one weakness — balance makes you credible.",
    "Use vivid evaluative adjectives (captivating, impeccable, underwhelming).",
    "Address the reader ('If you're looking for…', 'I must warn you…').",
    "Finish with a clear verdict and recommendation."
  ],
  donts: [
    "Don't retell the whole plot or every minute of your visit.",
    "Don't make it 100% positive with no evaluation.",
    "Don't forget the content points / speech-bubble ideas in the task.",
    "Don't use 'good', 'nice', 'bad' repeatedly — upgrade them.",
    "Don't end without a recommendation."
  ],
  intros: [
    { title: "Direct recommendation hook", use: "Places: cinemas, parks, restaurants, attractions.",
      text: "Are you [doing something / searching for something]? If so, look no further: [name] has it all! Having recently [visited / tried / watched] it myself, I can confidently say that it has plenty to offer, although a few aspects could certainly be improved." },
    { title: "Anticipation / hype", use: "New products, magazines, films, books, trending things.",
      text: "We've all heard the recent buzz about [name]. Having heard so much about it, I was particularly eager to experience it for myself — but I was curious to discover whether it would genuinely live up to the hype. Here's my honest verdict." },
    { title: "Bold opening / personal experience", use: "Courses, events, performances, workshops.",
      text: "Every once in a while, something comes along that completely changes our expectations. [Name] proved to be precisely that. I [enrolled in / attended] it during [time], and it turned out to be both remarkably engaging and truly memorable." }
  ],
  endings: [
    { title: "Strong recommendation", use: "Mostly positive experiences.",
      text: "All things considered, [name] is an experience well worth having. I would wholeheartedly recommend it to anyone [who enjoys … / looking for …] — it's definitely worth every penny!" },
    { title: "Mixed verdict", use: "Good but with clear weaknesses.",
      text: "Despite a few shortcomings, the overall experience was thoroughly enjoyable. If the [organisers / management] address [weakness], [name] could easily become exceptional. Until then, it's still worth a visit — just [practical tip, e.g. book your tickets early]!" },
    { title: "Targeted / disappointing verdict", use: "When it suits only some people, or was disappointing.",
      text: "Ultimately, although [name] had considerable potential, it fell short of my expectations. I would recommend it to [specific audience], but if you're looking for something more [in-depth / exciting / affordable], it's probably not for you." }
  ],
  vocab: [
    ["exceptional", "extremely good", "The service was exceptional."],
    ["remarkable", "worthy of attention", "A remarkable range of attractions."],
    ["captivating", "holding your attention", "A captivating performance."],
    ["impeccable", "perfect, without faults", "Impeccable organisation."],
    ["exquisite", "extremely beautiful or delicate", "An exquisitely designed building."],
    ["immersive", "making you feel fully involved", "An immersive cinema experience."],
    ["enthralling", "fascinating, holding attention completely", "The finale was enthralling."],
    ["exhilarating", "very exciting", "Exhilarating rides that make your hair stand on end."],
    ["state-of-the-art", "the most modern", "State-of-the-art sound system."],
    ["top-notch", "excellent quality", "A top-notch cinema."],
    ["amiable", "friendly", "Welcomed by amiable staff."],
    ["courteous", "polite and respectful", "Remarkably courteous staff."],
    ["attentive", "paying close attention to needs", "Attentive waiters."],
    ["well-maintained", "kept in good condition", "Well-maintained facilities."],
    ["easily accessible", "easy to reach", "Located in the heart of the city, it's easily accessible."],
    ["value for money", "worth the price", "The tickets are excellent value for money."],
    ["worth every penny", "worth the money spent", "It's definitely worth every penny."],
    ["overpriced", "too expensive", "The snacks were rather overpriced."],
    ["underwhelming", "less impressive than expected", "The ending was underwhelming."],
    ["mediocre", "only average", "The food was mediocre at best."],
    ["monotonous", "repetitive and boring", "The classes became monotonous."],
    ["overcrowded", "too full of people", "Overcrowded waiting areas."],
    ["a hive of activity", "a very busy place", "The park is a hive of activity at weekends."],
    ["left much to be desired", "was not good enough", "The service left much to be desired."],
    ["fell short of expectations", "was disappointing", "The sequel fell short of expectations."],
    ["lived up to the hype", "was as good as people said", "It truly lived up to the hype."],
    ["far exceeded my expectations", "was much better than expected", "The show far exceeded my expectations."],
    ["nothing short of", "completely; truly", "The visuals were nothing short of spectacular."],
    ["a must-see", "something you should definitely see", "Sky Zone is a must-see."],
    ["gripping", "very exciting and holding attention", "A gripping storyline."],
    ["thought-provoking", "making you think", "A thought-provoking interview."],
    ["well-rounded", "covering a wide variety", "A well-rounded magazine."],
    ["in-depth", "detailed and thorough", "Topics lack in-depth analysis."],
    ["unleash your potential", "show what you're really capable of", "Help you unleash your untapped potential."],
    ["hands-on", "involving active practice", "A hands-on experience on stage."],
    ["one-of-a-kind", "unique", "This one-of-a-kind cinema."],
    ["lifelike", "looking real", "Crystal-clear, lifelike images."],
    ["eye-catching", "attracting attention", "An eye-catching building."],
    ["mind-blowing", "extremely impressive", "Mind-blowing contemporary decor."],
    ["unforgettable", "impossible to forget", "An unforgettable experience."]
  ],
  themes: [
    { name: "Films & TV", words: [["storyline", "the plot"], ["compelling", "very interesting; convincing"], ["predictable", "easy to guess"], ["convincing performances", "believable acting"], ["breathtaking visuals", "stunning images"], ["soundtrack", "the music of a film"], ["plot twist", "an unexpected change in the story"], ["well-developed characters", "characters with depth"]] },
    { name: "Restaurants & food", words: [["delectable", "delicious"], ["flavoursome", "full of flavour"], ["generous portions", "large servings"], ["ambience", "atmosphere of a place"], ["extensive menu", "a menu with many choices"], ["reasonably priced", "not too expensive"], ["beautifully presented", "looking attractive on the plate"], ["authentic", "genuine, traditional"]] },
    { name: "Books & magazines", words: [["page-turner", "a very exciting book"], ["eloquent", "well-expressed"], ["slow-paced", "moving slowly"], ["imaginative", "creative"], ["glossy", "shiny, high-quality (paper/photos)"], ["informative", "giving useful information"], ["touched upon", "mentioned briefly"], ["outdated", "no longer current"]] },
    { name: "Places & attractions", words: [["picturesque surroundings", "pretty scenery"], ["convenient location", "easy-to-reach place"], ["facilities", "buildings and equipment for a purpose"], ["adrenaline-inducing", "causing excitement and fear"], ["safety standards", "rules to keep people safe"], ["queues", "lines of people waiting"], ["signposted", "having signs showing the way"], ["spacious", "having lots of space"]] },
    { name: "Courses & events", words: [["instructor", "a teacher of a practical skill"], ["approachable", "easy to talk to"], ["individual attention", "focus on each person"], ["well-organised", "planned efficiently"], ["interactive", "involving participation"], ["showcase", "show off skills"], ["electrifying atmosphere", "very exciting mood"], ["seamless", "smooth, without problems"]] }
  ],
  phrases: [
    { group: "Highlighting strengths", items: ["What impressed me most was…", "What truly sets it apart is…", "One of its greatest strengths is…", "The first thing that will grab your attention is…", "I was especially fascinated by…", "This was particularly effective because…"] },
    { group: "Pointing out weaknesses", items: ["However, I must warn you: …", "Its only notable drawback is…", "Unfortunately, not everything lived up to expectations.", "One aspect that could be improved is…", "It left much to be desired.", "While the … is commendable, …"] },
    { group: "Recommending", items: ["I couldn't recommend it highly enough.", "I would wholeheartedly recommend it to…", "It's definitely worth a visit.", "It's a must-see for…", "If you want something more…, it's not for you.", "My verdict? Absolutely worth it!"] },
    { group: "Describing experience", items: ["From the moment you walk in, …", "As you enter, you're welcomed by…", "Located right in the heart of…", "ranging from … to …", "There is something for everyone."] }
  ],
  connectives: [
    { group: "Adding", items: ["In addition", "What's more", "On top of that", "Moreover", "Alongside this"] },
    { group: "Contrast", items: ["However", "Nevertheless", "On the other hand", "Despite this", "While", "Even so"] },
    { group: "Concession", items: ["Although", "Despite this minor drawback", "Admittedly", "Even though"] },
    { group: "Conclusion", items: ["Overall", "All things considered", "On the whole", "My verdict?", "To sum up"] }
  ],
  samples: [
    {
      title: "Discover Your Talent — A Course Review", src: "Your materials",
      task: "In your school holidays, you attended a course to learn singing, dancing and acting. Write a review of the course for the school magazine.",
      bubbles: ["It was brilliant! We all learned new things.", "I started to get bored after a few classes."],
      text: `# Discover Your Talent — A Course Review

Are you looking for a course that'll act as your gateway to the world of singing, dancing and acting and help you unleash your untapped potential? If so, then look no further; the Discover Your Talent Course has it all. I enrolled in it during the last school holidays, and it was truly life-changing.

The course is taught by professional instructors who are not only experts in their fields but also friendly and approachable. They gave individual attention to each attendee; consequently, each student could learn at their own pace and gain confidence.

In addition, the course covers a wide range of topics, including different genres of music, various dance forms and acting techniques. What I loved most was the final show, where you showcase your new skills in front of friends and family. Personally, performing on stage and seeing how far I had come in just a few weeks was beyond amazing.

Admittedly, a few warm-up sessions became repetitive, so some participants lost interest.

I highly recommend this course to anyone looking to dive into the world of singing, dancing and acting who doesn't know where to start. It's definitely worth every penny.`,
      notes: ["'not only … but also' structure used naturally.", "The 'Admittedly…' paragraph addresses the second speech bubble ('I started to get bored') — always cover both comments."]
    },
    {
      title: "IMAX Cinema", src: "Your materials (corrected)",
      task: "A new cinema has recently opened in your town. Write a review of the cinema for your school magazine.",
      bubbles: ["There's a great range of films to see.", "The staff aren't very friendly."],
      text: `# IMAX Cinema — Reviewed by [Your name]

Are you wandering around the bustling streets of the city, searching for a top-notch cinema? If so, look no further: the new IMAX Cinema is exactly what you're looking for.

Located right in the heart of the city, inside the popular shopping walk, it's easily accessible to local people. Its exquisitely designed building is definitely eye-catching, and as you enter, you're greeted by mind-blowing contemporary decor.

This fascinating cinema boasts crystal-clear, lifelike images displayed on a vast curved screen, together with heart-pounding digital audio, which guarantee you'll be drawn into something as close to reality as you've ever experienced. Moreover, you get an incredible feeling of immersion and a perfect viewing angle no matter where you're sitting. The place is air-conditioned, and the atmosphere is relaxing, in addition to the extremely comfortable, spacious seats. There's also a great range of films, from action blockbusters to family animations.

However, I must warn you: the tickets sell out in the blink of an eye, so get yours as early as possible through the online booking system. A few visitors have also found the staff rather unhelpful at busy times.

I strongly recommend visiting this one-of-a-kind cinema to anyone chasing an unforgettable experience.`,
      notes: ["Teacher feedback on the original: include more relevant details such as the types of films and the booking system — both are now added.", "'However, I must warn you:' is a great way to introduce a drawback."]
    },
    {
      title: "Sky Zone Amusement Park", src: "Your materials",
      task: "You and your friends recently visited an amusement park where people can do lots of different outdoor activities. Write a review for your school magazine.",
      bubbles: ["It was really good value for money.", "We couldn't find the amusement park at first."],
      text: `# Sky Zone Amusement Park

Do you love superfast roller coasters and other exhilarating rides that make your hair stand on end? If so, then Sky Zone is a must-see. My friends and I visited it recently, and we were blown away!

Located in the bustling streets of the city centre, it is easily accessible by public transport — although, admittedly, the entrance is poorly signposted, so we walked past it twice before finding it! The first thing that will grab your attention is its enormous size. As you enter, you'll be warmly welcomed by the amiable staff, who are polite and informative; they'll make you fall in love with the place immediately.

My friends and I were especially fascinated by the wide variety of rides the park offers: from common ones such as roller coasters and carousels to bizarre ones such as infinity falls, there is a ride for everyone. All the rides meet the highest safety standards, and food stalls serving mouth-watering snacks are everywhere. Best of all, the all-day ticket is excellent value for money.

However, I must warn you: the place is a hive of activity! It's extremely crowded, especially at weekends.

I strongly recommend Sky Zone Park to anyone who wants an unforgettable experience, whether alone, with friends or with family. It's absolutely worth a visit.`,
      notes: ["Colon to introduce a list: 'the wide variety of rides the park offers: from … to …'.", "Both speech bubbles (value for money; hard to find) are now covered."]
    },
    {
      title: "Teen Times Magazine: Is It Worth the Hype?", src: "Your materials",
      task: "You recently bought a copy of a new magazine aimed at teenagers. Write a review to post on your school website.",
      bubbles: ["It's quite expensive.", "I'd prefer longer articles.", "There are some interesting topics.", "I love the photos!"],
      text: `# Teen Times Magazine: Is It Worth the Hype?

We've all heard the recent buzz about Teen Times. It has become the fastest-growing and most talked-about teenage magazine in recent months. I decided to grab a copy to review here and tell you whether it's worth buying.

On the one hand, Teen Times covers a wide variety of topics, ranging from beauty and fashion to mental well-being and social interactions. This makes it a well-rounded magazine. What's more, it includes fun quizzes, thought-provoking interviews and fascinating visuals that are sure to grip even the most jaded teens.

While the scope of subjects is commendable, some crucial topics are only touched upon and lack in-depth analysis. Alongside this, there's an overemphasis on trends and pop culture, making the magazine prone to becoming outdated quickly. At its current price, many readers may also find it rather expensive.

Overall, I would highly recommend this magazine to teenagers who want to keep up with the latest trends and stay entertained in an informative way. If you want something more in-depth and detailed, though, it's not for you.`,
      notes: ["'While the scope of subjects is commendable, …' — a sophisticated concession.", "Targeted verdict: says exactly who it is (and isn't) for."]
    },
    {
      title: "An Adventure Worth Remembering!", src: "Language bank",
      task: "Write a review of a newly opened adventure park for your school magazine.",
      text: `# An Adventure Worth Remembering!

If you're searching for an exhilarating weekend experience, look no further than Adventure World! Having recently visited this newly opened attraction, I can confidently say that it has plenty to offer.

The park boasts an impressive variety of activities, ranging from thrilling roller-coaster rides to immersive virtual-reality experiences. What impressed me most was the impeccable organisation and the remarkably courteous staff. The facilities were well maintained, and the atmosphere was absolutely electrifying!

Nevertheless, the experience was not entirely flawless. The excessive queues for popular attractions were rather frustrating, considerably reducing the time available to enjoy the activities.

Despite this minor drawback, the park certainly lived up to expectations. It offers an excellent combination of excitement and entertainment, making it particularly suitable for families and groups of friends.

My verdict? Absolutely worth visiting!`,
      notes: ["Reusable expressions: lived up to expectations; what impressed me most; despite this minor drawback; my verdict.", "Short punchy verdict as the final line."]
    },
    {
      title: "Adventure World: A Day to Remember", src: "Language bank",
      task: "Write a balanced review of a theme park.",
      text: `# Adventure World: A Day to Remember

If you are searching for an exciting day out, Adventure World is well worth considering. I visited last weekend, and it proved to be an entertaining experience, although it was not without a few flaws.

The park offers an impressive range of attractions, from thrilling rides to quieter family activities. The staff were welcoming and the grounds were generally well maintained. What stood out most was the variety: visitors of different ages could find something enjoyable.

However, the long queues were frustrating, particularly during the afternoon. Some food outlets were also rather expensive, and a few visitors may find the waiting areas overcrowded.

Despite these drawbacks, the park provides a memorable day out. I would recommend it to families and groups of friends, especially those who enjoy energetic activities. If the management improves queue organisation and reviews food prices, Adventure World could be even better.`,
      notes: ["Shows how to be balanced without sounding negative.", "Ends with a practical improvement — a mature touch."]
    },
    {
      title: "The Green Fork Café", src: "Zyvar original",
      task: "A new café has opened near your school. Write a review for the school magazine.",
      bubbles: ["The smoothies are amazing!", "It takes ages to get served."],
      text: `# The Green Fork: Fresh, Friendly… but Slow

Tucked away on a quiet corner just two minutes from our school gates, The Green Fork has quickly become the talk of the playground. Having finally squeezed in a visit last Friday, I can see why — although it is not quite perfect.

The first thing you notice is the inviting atmosphere: hanging plants, soft lighting and large windows make it the ideal spot to unwind after a long day of lessons. The menu is surprisingly extensive, ranging from crispy halloumi wraps to hearty lentil soup, and everything is freshly prepared. What truly sets it apart, however, are the smoothies. My mango-and-mint creation was nothing short of delicious, and at three dollars, it is excellent value for money.

Unfortunately, the service left much to be desired. With only two members of staff on duty, we waited almost twenty minutes for our order, which is far from ideal if you only have a short break.

All things considered, The Green Fork is a welcome addition to the neighbourhood. If the owners hire extra staff, it could easily become exceptional. Until then, go when you're not in a hurry — your taste buds will thank you!`,
      notes: ["Specific details (prices, dishes, minutes) make the evaluation convincing.", "Witty final line gives personality."]
    },
    {
      title: "Book Review: The Last Lighthouse", src: "Zyvar original",
      task: "Write a review of a book you have read recently for your school's website.",
      text: `# The Last Lighthouse — A Gripping Page-Turner

Every once in a while, a novel comes along that you simply cannot put down. For me, The Last Lighthouse was precisely that — I finished all 300 pages in a single weekend!

Set on a remote island battered by winter storms, the story follows fifteen-year-old Nadia, who discovers that her late grandfather's lighthouse hides a secret that could save — or destroy — her village. The plot is intricately developed and full of unexpected twists, while the vivid descriptions of crashing waves and howling winds make the setting feel incredibly real.

What impressed me most, however, was Nadia herself. She is brave yet flawed, and her struggle to trust the people around her is both relatable and thought-provoking, especially for teenage readers.

That said, the opening chapters are rather slow-paced, and a few readers might be tempted to give up before the story really takes off. The ending, though satisfying, also felt slightly rushed.

Overall, I would wholeheartedly recommend this novel to anyone who enjoys mystery and adventure. Be patient with the first few chapters — the reward is well worth it!`,
      notes: ["Book-review vocabulary: intricately developed, twists, relatable, slow-paced.", "No plot spoilers — reviews give a taste, not the whole story."]
    }
  ],
  checklist: [
    "Does my review have a catchy title?",
    "Did I name the subject and give a first impression in the introduction?",
    "Did I evaluate (WHY it was good/bad) rather than just describe?",
    "Did I include at least one weakness?",
    "Did I cover the speech-bubble comments?",
    "Did I use upgraded evaluative adjectives instead of good/nice/bad?",
    "Does my conclusion give a clear recommendation and say who it suits?"
  ]
};
