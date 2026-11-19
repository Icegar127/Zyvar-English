/* Extra A* samples + practice prompt bank for every writing type */
(function () {
  const W = ZY.writing;
  const add = (id, arr) => arr.forEach(s => W[id].samples.push(Object.assign({ src: "Zyvar original" }, s)));

  add("email", [
    {
      title: "Recommending a holiday job", task: "Your friend wants to find a holiday job. You had a holiday job last summer. Write an email to your friend.",
      points: ["describe the job you did", "explain what you learned from it", "give your friend advice about finding a job"],
      text: `Hi Omar,

Thanks for your message! I'm so glad you're thinking about getting a summer job — trust me, it's one of the best decisions I ever made.

Last July, I worked at a busy ice-cream parlour by the seafront. My shifts were five hours long, and I had to serve customers, keep the counter spotless and handle the till. The first week was absolutely exhausting, especially on scorching afternoons when the queue stretched out of the door!

Still, I learned far more than how to make the perfect milkshake. I became much more confident talking to strangers, and I realised how important teamwork is when everyone's under pressure. Plus, earning my own money made me think twice before wasting it!

My advice? Start looking now, because the best jobs go quickly. Ask in local cafés and shops in person rather than just applying online — managers love enthusiasm. Oh, and make sure you choose something that leaves you time to relax!

Let me know how it goes. Good luck!

Take care,
Yara`,
      notes: ["'trust me' and 'My advice?' sound natural and personal.", "Specific detail: seafront, five-hour shifts, the till, scorching afternoons."]
    },
    {
      title: "A neighbourhood clean-up day", task: "You recently took part in a clean-up day in your neighbourhood. Write an email to a friend.",
      points: ["explain why the clean-up day was organised", "describe what you did on the day", "say how the neighbourhood has changed since"],
      text: `Dear Hana,

How are things with you? Sorry for the slow reply — it's been a crazy couple of weeks, but I've got something really positive to tell you about!

You know the little park at the end of my street? Well, it had become a total eyesore, with litter everywhere and broken benches. A few of our neighbours were fed up with it, so they organised a clean-up day and invited everyone to lend a hand.

About forty of us turned up last Saturday, armed with gloves, bin bags and rakes. My job was to clear the rubbish from the pond, which was surprisingly disgusting — I even found an old bicycle wheel! Later on, we painted the benches and planted rows of colourful flowers along the path.

Honestly, you wouldn't recognise the place now. Families are actually using the park again, and little kids play there every evening. What's more, people seem much friendlier; I've chatted to neighbours I'd never even spoken to before.

Why don't you suggest something similar in your area? Write back soon!

Love,
Lina`,
      notes: ["Idioms used accurately: an eyesore, fed up with, lend a hand.", "'Honestly, you wouldn't recognise the place now' — a vivid result sentence."]
    },
    {
      title: "Apologising for missing a party", task: "You missed your friend's birthday party. Write an email to your friend.",
      points: ["apologise and explain why you couldn't come", "say what you did instead", "suggest how you can celebrate together"],
      text: `Hi Daniel,

I'm so, so sorry I missed your party on Friday. I feel terrible about it, especially after I'd promised you I'd be there early to help set up.

Here's what happened: just as I was getting ready, my little brother slipped on the stairs and hurt his wrist badly. Mum was at work, so I had to go with him and Dad to the hospital. We ended up waiting for nearly four hours in A&E! Luckily, it was only a sprain, but by the time we got home, it was almost midnight.

I spent most of the evening trying to keep my brother calm and distracted — we played about twenty games of cards in the waiting room. I kept checking my phone and seeing photos of everyone dancing, which made me even more gutted to miss it.

Anyway, I'd love to make it up to you. How about I take you out for pizza this weekend? My treat, of course — and I've got your present waiting!

Hope you can forgive me.

Your friend,
Sami`,
      notes: ["Sincere apology at the start, not buried at the end.", "'make it up to you' and 'My treat' — natural, warm informal language."]
    }
  ]);

  add("article", [
    {
      title: "Should Every Teenager Learn to Cook?", task: "Write an article for your school magazine on whether cooking should be a compulsory school subject.",
      bubbles: ["Cooking is a life skill.", "We already have too many subjects."],
      text: `# Recipe for Success: Should Cooking Be Compulsory?

How many of us could cook a proper meal for our family tonight without searching online for instructions? If you hesitated, you are not alone — and that is exactly why cooking deserves a place on the school timetable.

Cooking is far more than a hobby; it is a life skill. Students who know how to prepare simple, nutritious meals are less likely to rely on expensive takeaways and processed snacks when they leave home. In a world where obesity rates are rising, this knowledge could genuinely protect our health.

Moreover, cooking teaches skills that are useful in every subject. Following a recipe involves careful reading, measuring ingredients requires maths, and preparing a meal on time demands organisation and teamwork.

Of course, some students argue that the timetable is already overcrowded. This is a fair point, but cooking could easily replace one study period a week, or be combined with science lessons on nutrition.

Ultimately, schools exist to prepare us for life — and life, after all, involves eating three times a day.`,
      notes: ["Hook asks the reader directly, then answers it.", "Witty final line links back to the title."]
    },
    {
      title: "Are Exams the Best Way to Test Students?", task: "Your class has been discussing whether exams are a fair way to assess students. Write an article for the school magazine giving your views.",
      bubbles: ["Exams show what you really know.", "I always panic and forget everything."],
      text: `# Testing Times: Do Exams Tell the Whole Story?

For most students, the word "exam" brings to mind sleepless nights, sweaty palms and frantic last-minute revision. But are exams really the fairest way to measure what we have learned?

Supporters of exams make a strong case. Every student answers the same questions under the same conditions, which makes results objective and easy to compare. Exams also reward hard work: those who revise consistently usually perform well.

However, exams only capture a single moment. A student who panics or feels unwell on the day may underperform, even if they understand the subject perfectly. What is more, many valuable skills — creativity, teamwork, public speaking — simply cannot be tested in a silent hall in two hours.

So, should exams be scrapped? Not entirely. A fairer system would combine them with coursework, projects and presentations, giving every type of learner a chance to shine.

After all, students are not simply test scores — and our education system should reflect that.`,
      notes: ["Sensory opening (sleepless nights, sweaty palms) creates empathy.", "Balanced body paragraphs leading to a compromise."]
    },
    {
      title: "The Benefits of Learning a Second Language", task: "Write an article for a youth website explaining why young people should learn another language.",
      text: `# More Than Words: Why Learning a Language Changes Lives

Imagine ordering food in a busy market abroad, chatting with the stallholder and laughing at the same joke. That small moment is something no translation app can truly give you.

First and foremost, speaking another language opens doors. Employers increasingly value candidates who can communicate with international clients, and many universities offer exchange programmes to students with strong language skills.

Beyond career benefits, learning a language sharpens the mind. Research suggests that bilingual people are often better at problem-solving and switching between tasks, because their brains are constantly practising both.

Perhaps most importantly, a new language gives you a new perspective. Learning how people from another culture express emotions, humour and respect helps us become more tolerant and open-minded — qualities our world badly needs.

Admittedly, it takes time and patience. But even ten minutes a day can make a world of difference.

So why not start today? Your future self will thank you.`,
      notes: ["Scenario hook + a call to action ending.", "Hedged evidence: 'Research suggests that…' instead of invented statistics."]
    }
  ]);

  add("review", [
    {
      title: "A School Concert Review", task: "Your school recently held a concert. Write a review for the school magazine.",
      bubbles: ["The singers were amazing!", "The hall was far too hot."],
      text: `# Spring Concert: A Night of Hidden Talent

If anyone still believes our school is only about exams, last Thursday's Spring Concert proved them wrong. For two hours, the main hall was transformed into a concert venue, and the result was nothing short of impressive.

The evening opened with the school orchestra's energetic version of a well-known film theme, which instantly grabbed the audience's attention. However, what truly stole the show were the solo singers. Year 11 student Rania delivered a breathtaking ballad that left several parents reaching for tissues, while the Year 9 choir's lively medley had everyone clapping along.

Unfortunately, the venue let the performers down. With hundreds of people packed inside and no air conditioning, the hall became uncomfortably hot, and many younger children grew restless during the second half. A short interval would also have been welcome.

Overall, the concert was a resounding success and a wonderful showcase of student talent. I would strongly recommend attending next year — just bring a bottle of water and a fan!`,
      notes: ["'what truly stole the show' — a strong evaluative phrase.", "Humorous practical tip in the verdict."]
    },
    {
      title: "Review of a Mobile Learning App", task: "Write a review of a mobile app that helps students learn, for your school website.",
      text: `# StudySpark: Revision in Your Pocket?

With exams approaching, I decided to test StudySpark, the revision app everyone in my class seems to be talking about. After three weeks of daily use, here is my honest verdict.

The app's greatest strength is its design. It is clean, colourful and remarkably easy to navigate, and the short daily quizzes take only five minutes, making them ideal for bus journeys. What impressed me most was the "smart review" feature, which automatically repeats questions you previously got wrong — a genuinely effective way to fix weak areas.

That said, the app is far from perfect. The free version is packed with adverts that interrupt quizzes, and the premium subscription is rather expensive for students. Furthermore, some science explanations are too brief to be truly helpful.

On the whole, StudySpark is a useful revision companion, particularly for vocabulary and quick facts. I would recommend the free version to anyone who needs extra practice, but it should support — not replace — proper revision with notes and textbooks.`,
      notes: ["Shows experience-based evaluation ('After three weeks of daily use').", "Final verdict is precise about who it suits and its limits."]
    },
    {
      title: "Review of a Local Museum", task: "A museum in your town has reopened after renovation. Write a review for the local newspaper's youth page.",
      bubbles: ["The new interactive displays are brilliant.", "It's quite hard to find the entrance."],
      text: `# The City Museum: Old Treasures, New Tricks

After two years of renovation, the City Museum has finally reopened its doors — and it has certainly been worth the wait.

The most striking change is the new interactive gallery. Instead of simply reading labels, visitors can now use touch screens to explore ancient maps, dress up in replica costumes and even "dig" for artefacts in a virtual excavation. My younger cousins were completely captivated, and I learned more in an hour than I ever did on school trips here before.

The staff also deserve praise; they were knowledgeable, friendly and genuinely happy to answer questions. Best of all, entry is free for students.

However, the museum is not without its flaws. The new entrance is poorly signposted, and we wandered around the building for ten minutes before finding it. The café is also small and becomes overcrowded at lunchtime.

All things considered, the renovated museum is a fantastic day out for families and curious teenagers alike. Just follow the river path to find the entrance!`,
      notes: ["Both speech bubbles addressed.", "Tricolon (three examples) in the interactive gallery sentence."]
    }
  ]);

  add("essay", [
    {
      title: "Should young people do volunteer work?", task: "'All young people should do unpaid voluntary work in their community.' Do you agree?",
      text: `# Should Volunteering Be Expected of Young People?

Volunteering has become increasingly popular among teenagers in recent years. While there are clear advantages to encouraging it, I believe that making voluntary work compulsory would undermine its true value.

On the one hand, volunteering offers undeniable benefits. Helping at a care home or a food bank allows young people to develop empathy, responsibility and communication skills. It also strengthens communities, as charities rely heavily on the time and energy that volunteers provide.

On the other hand, forcing teenagers to volunteer may be counterproductive. Students already face heavy academic pressure, and many have part-time jobs or caring duties at home. If volunteering became mandatory, it could feel like another chore rather than an act of generosity, and the quality of the help provided might suffer.

In conclusion, I firmly believe that schools should actively promote and reward volunteering, but not require it. When young people choose to help others freely, they are far more likely to develop a lifelong commitment to their community.`,
      notes: ["Nuanced position: promote, don't require.", "'counterproductive' and 'mandatory' — precise formal vocabulary."]
    },
    {
      title: "Is it better to live in a city or the countryside?", task: "Some people prefer to live in cities; others prefer the countryside. Discuss both views and give your opinion.",
      text: `# City or Countryside?

Choosing where to live is one of the most significant decisions a family can make. While cities offer convenience and opportunity, the countryside provides space and tranquillity; each lifestyle has its own merits.

Supporters of city life point to its unrivalled convenience. Schools, hospitals, shops and entertainment are usually within easy reach, and public transport reduces the need for a car. Moreover, cities offer a far wider range of jobs, which is particularly attractive to young adults starting their careers.

Conversely, the countryside offers a healthier and calmer environment. Cleaner air, less traffic and access to nature can reduce stress and encourage an active lifestyle. Rural communities are also often close-knit, providing a strong sense of belonging that many city dwellers lack.

On balance, I believe that the ideal choice depends on one's stage of life. Cities suit ambitious young people seeking opportunities, whereas the countryside is better for families who value peace and space. Ultimately, the best place to live is the one that best supports a person's priorities.`,
      notes: ["Semicolon in the introduction balances two clauses.", "Conclusion distinguishes by 'stage of life' — a sophisticated judgement."]
    },
    {
      title: "Should zoos be closed?", task: "'Zoos are cruel and should be closed.' Do you agree?",
      text: `# Do Zoos Still Have a Place Today?

Zoos have existed for centuries, yet their role in modern society is increasingly questioned. Although critics argue that keeping animals in captivity is cruel, I believe that well-run zoos play a vital role in conservation and education.

Firstly, many modern zoos are at the forefront of protecting endangered species. Through carefully managed breeding programmes, animals such as the Arabian oryx have been saved from extinction and successfully returned to the wild. Without such efforts, numerous species could disappear entirely.

Furthermore, zoos educate millions of visitors each year. Seeing animals up close can inspire children to care about wildlife and the environment in a way that documentaries rarely achieve.

Admittedly, some zoos keep animals in small, unsuitable enclosures, which causes genuine suffering. However, this is an argument for stricter regulation, not for closing every zoo.

In conclusion, zoos should not be abolished but reformed. If governments enforce high welfare standards, zoos can continue to protect animals while inspiring future generations.`,
      notes: ["A real, verifiable example (Arabian oryx) strengthens the argument.", "Rebuttal reframes the problem: 'an argument for stricter regulation, not for closing'."]
    }
  ]);

  add("report", [
    {
      title: "Report on the School Library", task: "Your head teacher wants to know how students use the school library. Write a report describing its strengths and weaknesses and making recommendations.",
      bubbles: ["It's the only quiet place to study.", "Most of the books are really old."],
      text: `# Report on the School Library

## Introduction
The purpose of this report is to assess how effectively the school library meets students' needs and to suggest improvements. It is based on a questionnaire completed by students in Years 9 to 11.

## Strengths
The library is highly valued as a quiet study space. Most respondents stated that it is the only place in school where they can concentrate during break times. The librarian was also praised for being helpful and approachable.

## Weaknesses
However, a recurring concern was the outdated book collection. Several students reported that many fiction titles are over twenty years old and that there are few books by contemporary authors. In addition, the library has only six computers, which are insufficient during exam periods.

## Recommendations
It is recommended that part of next year's budget be allocated to new fiction, chosen with input from a student book committee. Consideration should also be given to installing additional computers or allowing students to borrow laptops.

## Conclusion
Overall, the library is a valuable resource. These measures would make it more appealing and useful for all students.`,
      notes: ["Evidence language: 'Most respondents stated', 'Several students reported'.", "Student book committee = a specific, creative recommendation."]
    },
    {
      title: "Report on a Sports Day", task: "Your school recently held a sports day. Write a report for your teacher saying what went well and what could be improved.",
      bubbles: ["There was a great atmosphere.", "We waited ages between events."],
      text: `# Report on the Annual Sports Day

## Introduction
This report evaluates the annual sports day held on 14th May, highlighting its successful aspects and proposing improvements for next year. It draws on my own observations and conversations with participants.

## Successful Aspects
The event was widely regarded as a great success. The atmosphere was lively and supportive, with students cheering enthusiastically for their house teams. A wide range of events, from sprints to tug-of-war, ensured that students of all abilities could take part. Furthermore, the first-aid team was well prepared and dealt efficiently with minor injuries.

## Areas for Improvement
Nevertheless, the timetable was poorly coordinated. Many students reported waiting up to forty minutes between events, during which they became bored and sunburnt. There was also limited shaded seating for spectators.

## Recommendations
It is strongly recommended that events run simultaneously on different parts of the field to reduce waiting times. In addition, tents should be provided to protect students from the sun.

Overall, with better organisation, next year's sports day could be even more enjoyable.`,
      notes: ["Clear headings that match the task's two parts.", "Recommendations directly solve the problems identified."]
    },
    {
      title: "Report on Mobile Phone Use in School", task: "Your school is considering banning mobile phones. Your head teacher has asked for a report on how students currently use their phones.",
      text: `# Report on Mobile Phone Use at School

## Introduction
As requested, this report examines how students currently use mobile phones during the school day and considers whether a complete ban would be appropriate. The findings are based on a survey of 120 students and discussions with teachers.

## Findings
The survey revealed that phones are used for both positive and negative purposes. A large number of students use them to check timetables, access online homework platforms and contact parents about travel arrangements.

However, teachers reported that phones are a significant distraction in lessons, and a noticeable proportion of students admitted to using social media during class. Some cases of cyberbullying during break times were also mentioned.

## Recommendations
A complete ban is not recommended, as it would remove several genuine benefits. Instead, it is advisable that phones be switched off and stored in lockers during lessons, while remaining available at break and lunch times. Teachers could also permit their use for specific learning activities.

## Conclusion
This balanced approach would minimise distractions while preserving the practical advantages of mobile phones.`,
      notes: ["Uses a number only because the writer invented the survey context in the introduction; keep figures realistic.", "Balanced recommendation instead of an all-or-nothing answer."]
    }
  ]);

  /* ---------- Practice prompt bank ---------- */
  const P = (id, arr) => { W[id].prompts = (W[id].prompts || []).concat(arr); };
  P("email", [
    { q: "You recently moved to a new house. Write an email to a friend.", points: ["describe your new home", "explain why your family moved", "invite your friend to visit"] },
    { q: "You have just started learning a new skill. Write an email to your cousin.", points: ["say what the skill is", "explain why you chose it", "describe a problem you have had"] },
    { q: "You went to a wedding or family celebration. Write an email to a friend.", points: ["describe where it took place", "explain what you enjoyed most", "say what you would do differently"] },
    { q: "Your friend is visiting your country for the first time. Write an email to them.", points: ["suggest places to visit", "give advice about the weather and clothes", "explain what food they should try"] },
    { q: "You lost something important recently. Write an email to a friend.", points: ["describe what you lost and how", "explain what you did to find it", "say how you felt afterwards"] },
    { q: "You took part in a competition. Write an email to your friend.", points: ["describe the competition", "explain how you prepared", "say what happened in the end"] },
    { q: "Your class is planning an end-of-year trip. Write an email to a friend in another school.", points: ["describe the destination", "explain what you will do there", "ask for your friend's advice"] },
    { q: "You have been helping an elderly neighbour. Write an email to a friend.", points: ["explain how you started helping", "describe what you do", "say what you have learned from it"] }
  ]);
  P("article", [
    { q: "Should students be allowed to use phones in class? Write an article for your school magazine.", bubbles: ["Phones help us research quickly.", "They are a huge distraction."] },
    { q: "Is it better to study alone or in a group? Write an article for your school magazine.", bubbles: ["I concentrate better alone.", "Friends explain things I don't understand."] },
    { q: "Should schools start later in the morning? Write an article for the school website.", bubbles: ["Teenagers need more sleep.", "We'd finish school too late."] },
    { q: "Are video games good or bad for young people? Write an article for a youth magazine.", bubbles: ["Games improve problem-solving.", "Some people play for too long."] },
    { q: "Should fast-food advertising be banned? Write an article for your school newspaper.", bubbles: ["Adverts make children want junk food.", "People can make their own choices."] },
    { q: "Is it important to have a gap year before university? Write an article for your school magazine.", bubbles: ["You gain real-world experience.", "You might lose the habit of studying."] },
    { q: "Should everyone learn to play a musical instrument? Write an article for your school magazine.", bubbles: ["Music helps you relax.", "Instruments are very expensive."] },
    { q: "Does social media make teenagers less confident? Write an article for a youth website.", bubbles: ["Everyone looks perfect online.", "It helps me find people like me."] }
  ]);
  P("review", [
    { q: "Write a review of a restaurant or café you visited recently for your school magazine.", bubbles: ["The food was delicious.", "It was quite expensive."] },
    { q: "Write a review of a film you watched recently for a youth website.", bubbles: ["The special effects were incredible.", "The story was too predictable."] },
    { q: "Your school went to see a play. Write a review for the school magazine.", bubbles: ["The actors were brilliant.", "It was too long."] },
    { q: "A new sports centre has opened in your area. Write a review for the local newspaper.", bubbles: ["The equipment is brand new.", "It's always so crowded."] },
    { q: "Write a review of a book you have read for the school library website.", bubbles: ["I couldn't put it down!", "The ending was disappointing."] },
    { q: "You attended a summer camp. Write a review for other students considering it.", bubbles: ["I made lots of new friends.", "The food wasn't great."] },
    { q: "Write a review of a TV series popular with teenagers.", bubbles: ["The characters are so realistic.", "Later episodes got repetitive."] },
    { q: "Write a review of a school trip destination for students planning next year's trip.", bubbles: ["We learned so much.", "There wasn't enough free time."] }
  ]);
  P("essay", [
    { q: "'Homework should be banned.' Do you agree? Give reasons." },
    { q: "Some people believe that technology has made our lives more stressful. Discuss both views and give your opinion." },
    { q: "Should private cars be banned from city centres? Give your views." },
    { q: "'Famous sports stars are paid too much.' Do you agree?" },
    { q: "Is it the responsibility of parents or schools to teach children about healthy eating?" },
    { q: "Should school uniforms be abolished? Discuss the advantages and disadvantages." },
    { q: "'Online learning is just as effective as classroom learning.' To what extent do you agree?" },
    { q: "Should young people be encouraged to start their own businesses?" }
  ]);
  P("report", [
    { q: "Your school held a charity event. Write a report for your head teacher.", points: ["say what was successful", "suggest how it could raise more money next time"] },
    { q: "Your teacher wants to improve the school's recycling. Write a report.", points: ["describe the current situation", "recommend practical improvements"] },
    { q: "You attended a careers fair. Write a report for your teacher.", points: ["say what students found useful", "suggest how the fair could be improved"] },
    { q: "Write a report on the after-school clubs offered at your school.", points: ["describe which clubs are popular and why", "suggest new clubs or changes"] },
    { q: "Your class went on a field trip to a nature reserve. Write a report.", points: ["say what you learned", "suggest improvements for future trips"] },
    { q: "Your school is planning to improve its playground. Write a report for the head teacher.", points: ["describe the current problems", "recommend specific changes"] },
    { q: "A guest speaker visited your school. Write a report for your teacher.", points: ["summarise what students learned", "suggest future speakers or topics"] },
    { q: "Write a report on how students travel to school.", points: ["describe the main ways students travel", "suggest how travel could be made safer or greener"] }
  ]);
})();
