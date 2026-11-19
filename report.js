window.ZY = window.ZY || { writing: {} };
ZY.writing.report = {
  id: "report",
  name: "Report",
  icon: "📋",
  tagline: "Formal and objective — clear headings, evidence-based findings, practical recommendations.",
  voice: "Formal / semi-formal, objective",
  words: "Usually 120–160 or 150–200 words (always check your paper)",
  overview: [
    "A report is written for a teacher, head teacher or organiser about an event, trip, club, facility or problem. It presents findings (what was good and what was not) and makes practical recommendations for the future.",
    "Use headings, a formal objective tone and evidence from 'students' or 'participants'. Recommendations must be specific: say exactly what should be done and why it would help."
  ],
  format: [
    ["Title", "Report on [event / trip / club / issue]"],
    ["Introduction", "Purpose of the report + what was examined (and how: observation, feedback)"],
    ["Findings / Positive points", "Strengths with evidence ('Most students stated…')"],
    ["Findings / Negative points", "Weaknesses and their effects"],
    ["Recommendations", "Specific, realistic improvements + expected benefits"],
    ["Conclusion", "Overall judgement (can be combined with recommendations)"]
  ],
  dos: [
    "Use clear headings — they show organisation instantly.",
    "Open with 'The purpose of this report is to…' or 'As requested, …'.",
    "Refer to evidence: 'According to feedback…', 'Several participants reported…'.",
    "Use passive and impersonal forms: 'It was observed that…', 'It is recommended that…'.",
    "Make every recommendation specific and explain its benefit.",
    "Cover both parts of the task (e.g. what was learned AND how to improve)."
  ],
  donts: [
    "Don't use contractions, slang, idioms or exclamation marks.",
    "Don't write emotionally ('I hated it') — stay objective.",
    "Don't invent precise statistics unless the task gives them.",
    "Don't write a story of the day in chronological order.",
    "Don't forget recommendations — they are essential content."
  ],
  intros: [
    { title: "Evaluation report (event / exhibition / club)", use: "Exhibitions, clubs, sports days, concerts, fairs.",
      text: "The purpose of this report is to provide a comprehensive evaluation of [event/activity], highlighting its principal strengths, identifying areas of concern and proposing recommendations for future improvement. The findings are based on my own observations and feedback from [participants]." },
    { title: "'As requested' trip / experience report", use: "School trips, work experience, activity weekends.",
      text: "As requested, I have prepared a report on [trip/experience], which took place on [date]. This report aims to outline what [students] gained from the experience and to offer practical suggestions for enhancing it should it be repeated next year." },
    { title: "Problem / investigation report", use: "Lateness, canteen, library, facilities, school issues.",
      text: "The following report examines [issue], which has become a growing concern at our school in recent [weeks/months]. It assesses the effects of this problem on [students/lessons] and outlines practical measures that could resolve the situation effectively." }
  ],
  endings: [
    { title: "Successful event + improvements", use: "Mostly positive events.",
      text: "Overall, [event] was a commendable initiative and a resounding success. By implementing the aforementioned recommendations, I am confident that it would be even more impactful next year, offering an enriched experience for all [participants]." },
    { title: "Recommendations-led conclusion", use: "Trips and experiences with clear problems.",
      text: "To conclude, while [event] was a valuable learning experience overall, it is strongly recommended that [recommendation 1]. Furthermore, consideration should be given to [recommendation 2]. These measures would significantly enhance [outcome] for future participants." },
    { title: "Problem-solving conclusion", use: "Issue/investigation reports.",
      text: "In conclusion, [problem] has a detrimental effect on [area]. It is therefore essential that appropriate measures be implemented without delay. I am confident that the course of action proposed above would resolve the issue and create a more [productive / positive] environment for everyone." }
  ],
  vocab: [
    ["comprehensive", "complete and detailed", "A comprehensive evaluation of the trip."],
    ["principal", "main, most important", "Its principal strengths."],
    ["findings", "information discovered by investigation", "The findings indicate that…"],
    ["indicate", "show or suggest", "Feedback indicates widespread satisfaction."],
    ["reveal", "make known", "The survey revealed several concerns."],
    ["assess", "judge or evaluate", "This report assesses the effectiveness of…"],
    ["feedback", "opinions given about something", "Feedback was largely positive."],
    ["articulate", "express clearly", "Students articulated that the tour was the highlight."],
    ["stringent", "strict", "Stringent safety procedures."],
    ["informative", "giving useful knowledge", "A highly informative talk."],
    ["insight", "deep understanding", "Students gained a valuable insight into the job."],
    ["showcase", "display, show off", "A platform for students to showcase their talents."],
    ["commendable", "deserving praise", "A commendable initiative."],
    ["convivial", "friendly and lively", "A welcoming and convivial atmosphere."],
    ["constructive feedback", "helpful criticism", "She provides constructive feedback."],
    ["shortcoming", "a fault or weakness", "There are some noticeable shortcomings."],
    ["drawback", "a disadvantage", "The limited duration was a significant drawback."],
    ["shortage", "not enough of something", "A shortage of vital instruments."],
    ["insufficient", "not enough", "Insufficient time to visit every section."],
    ["inadequate", "not good enough", "Inadequate facilities."],
    ["poorly maintained", "not kept in good condition", "Some rooms were poorly maintained."],
    ["tightly packed schedule", "a timetable with too many activities", "Due to the tightly packed schedule…"],
    ["detrimental effect", "a harmful effect", "This has a detrimental effect on learning."],
    ["implement", "put into action", "Measures should be implemented."],
    ["allocate", "give for a purpose", "Allocate more time to the visit."],
    ["enhance", "improve", "To enhance the educational experience."],
    ["maximise", "make as great as possible", "To maximise the learning experience."],
    ["incorporate", "include as part of something", "Incorporate more interactive activities."],
    ["prohibit", "officially forbid", "Prohibit the use of mobile phones."],
    ["initiative", "a new plan or project", "The exhibition was a worthwhile initiative."],
    ["endeavour", "a serious attempt", "A successful endeavour by the school."],
    ["amelioration", "improvement (very formal)", "An amelioration of communication skills."],
    ["accumulate", "collect over time", "Students accumulate points over the term."],
    ["incentive", "something that motivates", "A reward scheme as an incentive."],
    ["retention", "keeping knowledge in memory", "Long-term retention of concepts."],
    ["aforementioned", "mentioned before", "The aforementioned suggestions."],
    ["predominantly", "mainly", "Feedback was predominantly positive."],
    ["a considerable number of", "many", "A considerable number of students attended."],
    ["a recurring concern", "a problem mentioned many times", "A recurring concern was the lack of seating."],
    ["resounding success", "a very great success", "The concert was a resounding success."]
  ],
  themes: [
    { name: "Trips & visits", words: [["itinerary", "planned schedule"], ["guided tour", "a tour led by a guide"], ["exhibits / artefacts", "objects on display"], ["briefed", "given instructions"], ["educational value", "how much it teaches"], ["transport arrangements", "travel plans"], ["supervision", "watching over students"], ["duration", "length of time"]] },
    { name: "Clubs & activities", words: [["membership", "being a member"], ["attendance", "how many people attend"], ["facilities", "rooms and equipment"], ["equipment", "tools needed"], ["sessions", "meeting periods"], ["inclusive", "welcoming everyone"], ["sense of belonging", "feeling part of a group"], ["skill development", "improving abilities"]] },
    { name: "Events & exhibitions", words: [["venue", "location of an event"], ["turnout", "number of people who come"], ["refreshments", "light food and drinks"], ["signage", "signs giving directions"], ["logistics", "detailed organisation"], ["guest speaker", "an invited expert who talks"], ["well-organised", "planned efficiently"], ["publicity", "advertising an event"]] },
    { name: "School problems", words: [["punctuality", "being on time"], ["disruption", "interruption of normal activity"], ["overcrowding", "too many people in a space"], ["canteen", "school dining area"], ["timetable", "schedule of lessons"], ["reward scheme", "system giving prizes for good behaviour"], ["disciplinary measures", "punishments for breaking rules"], ["reputation", "how others see the school"]] },
    { name: "Work experience", words: [["placement", "a temporary job for training"], ["mentor", "an experienced adviser"], ["teamwork", "working together"], ["responsibility", "duty to deal with something"], ["workplace", "where people work"], ["professionalism", "behaving in a skilled, formal way"], ["career aspirations", "hopes for a future job"], ["practical skills", "real hands-on abilities"]] }
  ],
  phrases: [
    { group: "Introductions", items: ["The purpose of this report is to…", "This report aims to…", "As requested, I have prepared a report on…", "This report is based on observations and feedback from…", "The following report examines…"] },
    { group: "Presenting findings", items: ["The findings indicate that…", "According to the feedback, …", "Most students stated that…", "Several participants reported that…", "It was observed that…", "A noticeable proportion of students…", "One of the best aspects of … was…"] },
    { group: "Problems", items: ["One notable concern was…", "A recurring complaint was…", "The main limitation was…", "An issue that bothered many, however, was…", "This had a detrimental effect on…", "Nevertheless, there are some noticeable shortcomings."] },
    { group: "Recommendations", items: ["It is strongly recommended that…", "It would be advisable to…", "Consideration should be given to…", "Greater emphasis should be placed on…", "The introduction of … would be beneficial.", "I would also recommend…", "This would help to…"] },
    { group: "Concluding", items: ["Overall, the event was successful in terms of…", "On the whole, …", "By implementing these suggestions, …", "These measures would significantly enhance…", "To conclude, …"] }
  ],
  connectives: [
    { group: "Introducing findings", items: ["The findings indicate", "The assessment revealed", "The observations suggest", "Based on the feedback"] },
    { group: "Adding evidence", items: ["Furthermore", "In addition", "Moreover", "Additionally", "Alongside this"] },
    { group: "Contrasting", items: ["However", "Nevertheless", "Despite these advantages", "On the other hand"] },
    { group: "Recommending", items: ["Accordingly", "It is therefore recommended", "Consequently", "In light of this"] },
    { group: "Concluding", items: ["Overall", "On balance", "In conclusion", "To conclude", "All in all"] }
  ],
  samples: [
    {
      title: "School trip to the National Museum", src: "Your materials",
      task: "You recently went on a school trip. Your teacher has asked you to write a report about the trip and make suggestions for next year.",
      bubbles: ["I wish we hadn't had to do so many things.", "The people we met were really helpful."],
      text: `# Report: School Trip to the National Museum

## Introduction
Last week, our school had the opportunity to visit the National Museum of Egyptian Civilization (NMEC). The purpose of this report is to provide an account of our visit and offer suggestions for improvement based on my observations and feedback from students.

## Summary
Upon arrival, the manager welcomed us warmly, provided us with information packs and briefed us on the stringent rules that must be followed during the tour, such as not touching any artefact. From there, we continued with a guide who first gave us a highly informative talk about the importance of museums and how they preserve the history of civilisations. As we walked through the museum, the guide shared the story behind every exhibited relic in an intriguing way. Students stated that this part of the trip was the most interesting.

## Findings
An issue that bothered many, however, was that we were unable to visit every section of the museum due to the tightly packed schedule. Moreover, some students were so busy and distracted taking selfies and photos that they were not able to focus on the activities at hand.

## Conclusion
To conclude, the visit was an exceptional learning experience and a success overall; however, I recommend extending the duration of the visit and prohibiting the use of mobile phones to maximise the learning experience.`,
      notes: ["Both comments covered: helpful people (manager, guide) and too many things (packed schedule).", "Recommendations are specific: extend duration, prohibit phones."]
    },
    {
      title: "Work Experience Week", src: "Your materials (corrected)",
      task: "Your school organised a 'work experience week'. Write a report saying what you and your classmates learned during the week, and suggest how it could be improved.",
      bubbles: ["One week was too long.", "I really enjoyed working in a team."],
      text: `# Report on the Work Experience Week

## Introduction
As requested by my teacher, Mr Ali, I have compiled a detailed assessment of the work experience week that took place on 1st March. The purpose of this report is to outline what was learnt by students and to make suggestions to enhance the experience next time.

## Organisation
Firstly, each group of students who chose to work in the same local business was driven there by school bus. Each pupil was then paired with a member of staff, who showed them what was required and the proper way to do it. Subsequently, each student was allowed to perform the required tasks without any help from the staff.

## What students learnt
Based on my observations and discussions with participants, students' feedback was overwhelmingly positive. They learnt the importance of teamwork and responsibility, and the improvement in their communication skills and self-confidence was also worth noting. Most importantly, they gained a valuable insight into the nature of these jobs.

## Recommendations
In conclusion, the work experience week was undoubtedly a successful endeavour in which every student benefited. However, as several students felt that a full week was too long, I recommend reducing it to three days and conducting group discussions in school for students to share their knowledge.`,
      notes: ["Original handwritten sample corrected (e.g. 'were driven', 'feedback was').", "Covers both task parts: what was learned AND improvements."]
    },
    {
      title: "Students arriving late to class", src: "Your materials (corrected)",
      task: "Students have been arriving late to classes. Write a report explaining how this affects your lessons and suggesting what can be done.",
      bubbles: ["Our teacher has to repeat everything.", "It would be good if our lessons started later."],
      text: `# Report on Late Arrival to Classes

## Introduction
As requested by my teacher, I have compiled a detailed assessment of the recent increase in students arriving late to classes. This report contains relevant information regarding the detrimental consequences of this behaviour and suggestions for improving the situation.

## Effects on lessons
As an inevitable result of their delay, pupils miss out on important parts of lessons, which — over time — may create gaps in their understanding of the curriculum. When teachers repeat their explanations for late students, the rest of the class is disrupted and valuable learning time is lost.

Moreover, the school's organised and professional image is undermined, which may damage its reputation.

## Recommendations
To solve this issue, I suggest introducing a reward scheme in which punctual students earn points that accumulate over the term. At the end of the semester, those with the highest number of points could receive prizes and be honoured at a special assembly. This would motivate students to arrive on time. In addition, pupils with a very low number of points could be excluded from enjoyable activities such as trips or sports days. Starting lessons fifteen minutes later could also be trialled.

To conclude, I strongly believe that the course of action proposed above would resolve the issue completely.`,
      notes: ["Teacher feedback on the original: develop the 2nd problem more, stay within the word limit, and use advanced punctuation (colon, semicolon, dashes) — applied here.", "Reward scheme = a detailed, practical recommendation."]
    },
    {
      title: "A visit to the science exhibition", src: "Your materials",
      task: "You and your class spent the day at a science exhibition. Write a report saying what you learned and how the trip could be improved if repeated next year.",
      bubbles: ["I liked meeting a real scientist.", "It was a really long day!"],
      text: `# A Visit to the Science Exhibition

## Introduction
Last week, our class spent the day at a science exhibition in town. This report aims to detail what we learned from the visit and provide recommendations for improvement if it is repeated next year.

## The Learning Experience
Most students stated that they gained a deep insight into various scientific topics, such as human and plant biology. We were especially fascinated by the interactive simulations, which showed unusual natural phenomena such as volcanic eruptions. Additionally, we gained an in-depth knowledge of how they happen and their detrimental effects on people and the environment. Moreover, the interactive question-and-answer session with a marine biology expert proved to be extremely beneficial, as many students noted. We gained a great deal of new information that will significantly help us in our upcoming school projects. For example, despite occupying just 1% of the seabed, coral reefs support more than a quarter of all marine life!

## Conclusion
The trip was ultimately a success; however, as many students found it an exhausting day, I recommend splitting the visit over two days to enhance the educational experience. Consequently, pupils could explore more and satisfy their curiosity about science. In addition, I suggest incorporating a wider range of interactive experiences to make students more engaged, and thus contribute to the long-term retention of learned concepts.`,
      notes: ["A specific fact (coral reefs) gives convincing evidence of learning.", "Recommendation is linked to the 'long day' comment."]
    },
    {
      title: "School Art Exhibition", src: "Your materials",
      task: "Your school held an art exhibition. Write a report saying what was good about it and suggest how it could be improved next year.",
      bubbles: ["There were lots of different types of art.", "The exhibition should last more than one week."],
      text: `# Art Exhibition Report

## Introduction
On 1st June, our school held an art exhibition for one week to display students' artwork. This report aims to highlight the positive aspects of the exhibition and provide suggestions for improvement if it is repeated next year.

## Positive Points
Firstly, the exhibition provided a remarkable opportunity for students to showcase their talents and express their creativity, which was evident from the wide variety of artworks produced. Moreover, the event was very well organised: similar artworks were grouped together, guidance signs were well placed and overcrowding was avoided.

## Negative Points and Suggestions
One of the negative aspects that many visitors commented on was the lack of refreshments, which were necessary since the exhibition had so much to explore. Therefore, I suggest providing refreshments next time. Additionally, I suggest inviting a professional artist to give a talk and provide practical advice to aspiring artists; this would make the exhibition more educational and engaging. Extending the exhibition to two weeks would also allow more students to attend.

## Conclusion
On the whole, the exhibition was a success. By implementing the aforementioned suggestions, I believe it would be even more impactful, offering an enriched experience for all visitors.`,
      notes: ["Colon + list to give evidence of good organisation.", "'aforementioned suggestions' — a precise formal phrase."]
    },
    {
      title: "The After-School Music Club", src: "Your materials",
      task: "This year, you have been a member of the after-school music club. Write a report for your head teacher saying what you like about the club and suggesting how it could be improved.",
      bubbles: ["I'd like to meet more than once a month.", "Taking part in a concert was fun!"],
      text: `# The After-School Music Club

## Introduction
As requested, I have prepared a report about the after-school music club, which I joined this year. This report aims to highlight the positive aspects of the club and provide suggestions for improving it next year.

## Positive Points
One of the best aspects of the music club is its welcoming and convivial atmosphere. All students, even newly joined ones, immediately feel a sense of belonging because no one is ever judged by their abilities or mocked for their performance. Students also benefit immensely from the guidance of Mrs Sherry, our music teacher; she is very patient and provides the constructive feedback we need to improve our skills. Furthermore, the end-of-year concert was a highlight that members thoroughly enjoyed.

## Negative Points
Nevertheless, there are some noticeable shortcomings. For example, club meetings are infrequent, which limits practice opportunities. Moreover, there is a shortage of some vital instruments, which has a detrimental effect on the learning experience.

## Suggestions
I therefore suggest increasing the number of club meetings to twice a week to allow more time for practice. I would also recommend purchasing more clarinets and trumpets, as they are severely lacking.`,
      notes: ["Semicolon used accurately to add detail about the teacher.", "Every problem is matched with a clear suggestion."]
    },
    {
      title: "A Weekend at the Activity Centre", src: "Your materials",
      task: "Your class spent a weekend at an activity centre. Write a report saying what was enjoyable and suggest how it could be improved.",
      bubbles: ["It was great fun!", "We couldn't try all the sports.", "The meals were too small.", "I loved the accommodation."],
      text: `# Report: A Weekend at the Activity Centre

## Introduction
As requested, I have prepared a report about the activity centre my class and I visited last weekend. I have interviewed my classmates, and my findings are presented below.

## Positive Points
One of the best aspects of the visit, according to many students, was the wide variety of sports available at the activity centre. These included popular sports such as football and less common ones such as rock climbing. Additionally, most pupils found the instructors skilled and helpful. They also praised the stringent safety procedures, which gave them a sense of security, especially during extreme sports.

## Negative Points
However, while some students liked their rooms, others noted that the accommodation was not consistently up to standard: some rooms were untidy and poorly maintained. Moreover, several students felt that the duration of the visit was too short, so they could not try all the different sports, and that meal portions were rather small.

## Suggestions
To conclude, the visit to the activity centre was successful overall; nevertheless, I suggest that improvements be made to the cleanliness and maintenance of the rooms and that larger meal portions be provided. I would also recommend allocating more time to the visit in the future.`,
      notes: ["'I suggest that improvements be made' — the formal subjunctive, an A* structure.", "Evidence language: according to many students, most pupils found, several students felt."]
    },
    {
      title: "Report on the School Art Exhibition (model)", src: "Language bank",
      task: "Write a report on the recent school art exhibition for your head teacher.",
      text: `# Report on the School Art Exhibition

## Introduction
The purpose of this report is to provide a comprehensive evaluation of the recent school art exhibition, highlighting its principal strengths and identifying areas for improvement.

## Findings and Evaluation
The exhibition showcased an impressive diversity of artistic talent, ranging from intricate pencil sketches and vibrant watercolour paintings to contemporary digital illustrations and three-dimensional sculptures. The thoughtfully arranged displays created an aesthetically pleasing atmosphere, attracting considerable interest from students and teachers. Furthermore, the initiative provided an excellent platform for budding artists to demonstrate their creativity.

Despite its success, the exhibition's limited duration of just one week was a significant drawback, restricting opportunities for several students to attend.

## Recommendations and Conclusion
It is strongly recommended that next year's exhibition be extended to at least two weeks. Overall, the event was a commendable initiative that deserves to become an annual tradition.`,
      notes: ["Three universal headings: Introduction / Findings and Evaluation / Recommendations and Conclusion.", "'It is strongly recommended that … be extended' (subjunctive)."]
    },
    {
      title: "The School Canteen", src: "Zyvar original",
      task: "Your head teacher wants to improve the school canteen. Write a report describing the current situation and making recommendations.",
      bubbles: ["The queues are far too long.", "There's never anything healthy left."],
      text: `# Report on the School Canteen

## Introduction
The purpose of this report is to evaluate the current state of the school canteen and to propose practical measures that could improve students' lunchtime experience. The findings are based on a short survey of Year 10 students and my own observations over two weeks.

## Main Findings
On the positive side, the canteen staff were consistently described as friendly and efficient, and the hot meals were generally considered tasty and reasonably priced.

However, two recurring concerns emerged. Firstly, the queues are excessively long: a considerable number of students reported waiting over fifteen minutes, leaving them insufficient time to eat. Secondly, healthy options such as salads and fruit tend to sell out early, so students who arrive later are left with mainly fried food.

## Recommendations
It is strongly recommended that a second serving counter be opened during peak times, which would significantly reduce waiting times. In addition, consideration should be given to a pre-order system, allowing students to reserve healthy meals in the morning.

## Conclusion
Overall, the canteen provides a valuable service. If these measures were implemented, it would become a more efficient and healthier environment for all students.`,
      notes: ["Second conditional in the conclusion: 'If these measures were implemented, it would…'.", "Evidence is described without inventing exact percentages."]
    }
  ],
  checklist: [
    "Does my report have a title and clear headings?",
    "Does the introduction state the purpose?",
    "Have I covered BOTH parts of the task (e.g. good points AND improvements)?",
    "Have I used evidence language (according to feedback, most students stated)?",
    "Are my recommendations specific, with a reason or benefit?",
    "Is my tone formal and objective (no contractions, idioms or exclamations)?",
    "Have I used at least one passive or 'It is recommended that…' structure?"
  ]
};
