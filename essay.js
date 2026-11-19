window.ZY = window.ZY || { writing: {} };
ZY.writing.essay = {
  id: "essay",
  name: "Essay",
  icon: "🖋️",
  tagline: "Clear, logical, persuasive — build an argument and reach a decisive judgement.",
  voice: "Formal / semi-formal, argumentative",
  words: "Usually 120–160 or 150–200 words (always check your paper)",
  overview: [
    "An essay presents a developed argument or discussion on a question, usually for your teacher. It is the most formal of the 'opinion' tasks, so avoid contractions, slang and exclamation marks.",
    "The key to an A* essay is structure: a clear introduction that frames the debate, body paragraphs that each develop one argument (Point → Explain → Example → Link), a fair treatment of the opposing view, and a decisive conclusion."
  ],
  format: [
    ["Introduction", "Introduce the issue; outline both sides or state your position"],
    ["Body 1", "First argument + explanation + example / consequence"],
    ["Body 2", "Opposing viewpoint or second argument + explanation"],
    ["Body 3 (optional)", "Counter-argument + rebuttal, or balanced judgement"],
    ["Conclusion", "Summarise reasoning and give a clear, decisive final answer"]
  ],
  dos: [
    "Answer the exact question asked — refer back to it in the conclusion.",
    "Use formal linkers: Firstly, Furthermore, Conversely, Nevertheless, Ultimately.",
    "Develop every point: Point → Explain → Example → Link.",
    "Present the other side fairly, then rebut it.",
    "Keep your opinion consistent from introduction to conclusion.",
    "Use impersonal structures: 'It is widely believed that…', 'It could be argued that…'"
  ],
  donts: [
    "Don't use contractions (don't, can't) or slang.",
    "Don't use exclamation marks or chatty questions like 'Guess what?'.",
    "Don't introduce a brand-new argument in the conclusion.",
    "Don't contradict yourself between paragraphs.",
    "Don't list points without explaining them."
  ],
  intros: [
    { title: "Discuss both sides", use: "'Discuss…' / 'Some people think… others think…' questions.",
      text: "The debate regarding [topic] is a perennial topic of discussion. While some argue that [view A], others contend that [view B]. Both perspectives deserve careful consideration before reaching a balanced conclusion." },
    { title: "Agree / disagree (clear position)", use: "'To what extent do you agree?' / opinion questions.",
      text: "In an era of [rapid change / technological progress], the question of whether [statement] has become increasingly significant. While there are valid arguments on both sides, I firmly believe that [your position], for several compelling reasons." },
    { title: "Problem & responsibility", use: "Environment, health, society — 'Who is responsible…?' / 'How can we solve…?'",
      text: "[Issue] has become a pressing concern in many communities, sparking an intense debate regarding who bears the primary responsibility for addressing it. To tackle it effectively, we must first understand its causes and then consider the most practical solutions." }
  ],
  endings: [
    { title: "Compromise conclusion", use: "When both sides have merit.",
      text: "In conclusion, I believe a compromise is ideal: [solution combining both sides]. In my opinion, this approach would successfully balance [value A] with [value B], ensuring that [positive long-term result]." },
    { title: "Firm position", use: "When you clearly agree or disagree.",
      text: "Ultimately, while I recognise that [opposing point], I am convinced that [your view]. [Topic] should be viewed as [a supplement to / an essential part of], rather than [a substitute for / an optional extra to], [the alternative]." },
    { title: "Shared responsibility / call for action", use: "Problem-solution and environment essays.",
      text: "Taking all factors into account, [issue] is a shared duty in which [group A] is just as important as [group B]. Sustainable progress can only be achieved when [action 1] is supported by [action 2]; only then can we hope to secure a better future for the next generation." }
  ],
  vocab: [
    ["perennial", "lasting for a long time; constantly recurring", "A perennial topic of discussion."],
    ["contend", "argue or claim", "Others contend that shorter holidays are necessary."],
    ["proponents", "supporters of an idea", "Proponents argue that it saves time."],
    ["sceptics", "people who doubt an idea", "Sceptics argue that it lacks nuance."],
    ["point of contention", "a subject of disagreement", "It remains a significant point of contention."],
    ["rejuvenation", "making someone feel fresh again", "Breaks are essential for mental rejuvenation."],
    ["mitigate", "make less severe", "This mitigates the stress of rigorous schedules."],
    ["rigorous", "very thorough and demanding", "A rigorous academic schedule."],
    ["renewed", "restored, fresh", "Students return with renewed motivation."],
    ["advantageous", "beneficial", "Particularly advantageous for complex subjects."],
    ["sporadic", "happening irregularly", "A continuous rather than sporadic process."],
    ["revolutionise", "change completely", "Social media has revolutionised communication."],
    ["instantaneous", "happening immediately", "Instantaneous contact across the globe."],
    ["foster", "encourage the growth of", "It fosters a sense of community."],
    ["nuance", "a subtle difference in meaning", "Digital interactions lack nuance."],
    ["superficial", "shallow; not deep", "This can lead to superficial connections."],
    ["over-reliance", "depending too much", "An over-reliance on screens."],
    ["prioritise", "treat as most important", "People prioritise digital engagement."],
    ["invaluable", "extremely useful", "An invaluable tool for long-distance ties."],
    ["degradation", "the process of becoming worse", "Environmental degradation is a global crisis."],
    ["bear responsibility", "be responsible", "Who bears the primary responsibility?"],
    ["systemic change", "change to a whole system", "Governments can implement systemic change."],
    ["enact", "make into law", "Enacting strict regulations."],
    ["legislation", "laws", "Without legislative action…"],
    ["stringent", "strict", "More stringent environmental laws."],
    ["catalyst", "something that causes change", "Advocacy serves as a catalyst."],
    ["advocacy", "public support for a cause", "Individual advocacy prompts governments."],
    ["collectively", "together as a group", "Choices collectively shift demand."],
    ["detrimental", "harmful", "A detrimental effect on health."],
    ["beneficial", "helpful", "Beneficial to students' development."],
    ["implication", "a possible effect", "The long-term implications of this policy."],
    ["undeniable", "certainly true", "Its impact is undeniable."],
    ["inevitably", "certainly; unavoidably", "This inevitably leads to stress."],
    ["consequently", "as a result", "Consequently, students perform better."],
    ["conversely", "in the opposite way", "Conversely, shorter holidays prevent learning loss."],
    ["admittedly", "it must be accepted that", "Admittedly, sport takes time."],
    ["outweigh", "be greater than", "The advantages outweigh the drawbacks."],
    ["well-rounded", "having a wide range of skills", "A more well-rounded education."],
    ["holistic", "considering the whole person/situation", "A holistic approach to learning."],
    ["take into account", "consider", "Taking all factors into account…"]
  ],
  themes: [
    { name: "Education", words: [["curriculum", "subjects taught at school"], ["academic attainment", "level of achievement in study"], ["extracurricular", "outside normal lessons"], ["learning loss", "forgetting knowledge during breaks"], ["vocational", "related to job skills"], ["standardised testing", "the same exams for everyone"], ["mixed-ability", "students of different levels together"], ["pedagogy", "methods of teaching"]] },
    { name: "Technology & society", words: [["digital literacy", "skills to use technology well"], ["automation", "machines doing human jobs"], ["privacy concerns", "worries about personal data"], ["digital divide", "gap between those with/without tech"], ["artificial intelligence", "computers that imitate thinking"], ["surveillance", "close watching of people"], ["echo chamber", "place where you hear only similar views"], ["innovation", "new ideas or methods"]] },
    { name: "Environment", words: [["carbon emissions", "CO₂ released into air"], ["carbon tax", "tax on pollution"], ["renewable", "naturally replenished"], ["consumption patterns", "how people buy and use goods"], ["ecological footprint", "impact on the planet"], ["climate crisis", "serious climate change problem"], ["green initiatives", "eco-friendly projects"], ["conservation", "protecting resources"]] },
    { name: "Health & lifestyle", words: [["sedentary lifestyle", "lifestyle with little exercise"], ["mental well-being", "psychological health"], ["preventive measures", "actions to stop problems early"], ["life expectancy", "how long people live"], ["obesity epidemic", "widespread obesity"], ["public health", "health of the population"], ["physical fitness", "good body condition"], ["stress management", "controlling stress"]] },
    { name: "Government & community", words: [["policy", "a plan of action by government"], ["regulation", "an official rule"], ["funding", "money provided"], ["infrastructure", "basic systems: roads, power, etc."], ["civic duty", "responsibility as a citizen"], ["welfare", "health and happiness; state support"], ["social cohesion", "unity in society"], ["grassroots", "ordinary people, local level"]] },
    { name: "Work & economy", words: [["employability", "skills that help get a job"], ["unemployment", "not having a job"], ["globalisation", "world becoming connected"], ["remote working", "working from home"], ["entrepreneurship", "starting businesses"], ["economic growth", "increase in wealth"], ["income inequality", "unequal earnings"], ["workforce", "all workers"]] }
  ],
  phrases: [
    { group: "Introducing arguments", items: ["One significant reason is…", "The strongest argument in favour of … is…", "It is widely believed that…", "It could be argued that…", "Proponents maintain that…", "To begin with, …"] },
    { group: "Explaining & developing", items: ["This is largely because…", "In other words, …", "This means that…", "Beyond the immediate benefits, …", "This can have long-term consequences for…", "As a direct result, …"] },
    { group: "Giving examples", items: ["For instance, …", "A clear example can be seen in…", "This is evident in…", "To illustrate this point, …", "such as…"] },
    { group: "Counter-argument & rebuttal", items: ["Admittedly, …", "It is true that…; however, …", "Those who oppose this view may argue that…", "Nevertheless, this argument overlooks…", "While this concern is valid, …", "This does not necessarily mean that…"] },
    { group: "Concluding", items: ["For these reasons, …", "On balance, …", "Taking all factors into account, …", "Ultimately, …", "All in all, it is clear that…"] }
  ],
  connectives: [
    { group: "Sequencing", items: ["Firstly", "To begin with", "Secondly", "Furthermore", "Finally", "Last but not least"] },
    { group: "Contrasting", items: ["On the one hand", "On the other hand", "Conversely", "In contrast", "Nevertheless", "Nonetheless", "Whereas"] },
    { group: "Cause & effect", items: ["Consequently", "Therefore", "Thus", "Hence", "As a result", "Owing to", "This stems from"] },
    { group: "Emphasis", items: ["Indeed", "Undoubtedly", "Above all", "Significantly", "Crucially", "In particular"] },
    { group: "Concluding", items: ["In conclusion", "Ultimately", "On balance", "All things considered", "To conclude"] }
  ],
  samples: [
    {
      title: "Long or short school holidays?", src: "Your materials",
      task: "Some people think school holidays should be shorter; others think long holidays are important. Discuss both views and give your opinion.",
      text: `# The Length of School Holidays

The debate regarding the duration of school holidays is a perennial topic of discussion. While some argue that extended breaks are essential for mental rejuvenation, others contend that shorter holidays are necessary for academic progress.

On the one hand, long holidays offer students the valuable opportunity to pursue extracurricular interests, travel or participate in internships, which mitigates the stress of rigorous academic schedules. Consequently, students often return to the classroom with renewed motivation and a broader perspective on the world.

Conversely, shorter holidays could prevent the significant 'learning loss' that frequently occurs during long absences. Furthermore, shorter breaks allow for a more consistent pace of instruction, which is particularly advantageous for complex subjects like Mathematics.

In conclusion, I believe a compromise is ideal: slightly shorter summer holidays combined with more frequent, shorter breaks throughout the year. In my opinion, this structure would successfully balance student well-being with consistent academic growth, ensuring that learning remains a continuous and engaging process rather than a sporadic one.`,
      notes: ["'On the one hand… Conversely…' creates a clear two-sided structure.", "Compromise conclusion with a colon introducing the solution."]
    },
    {
      title: "Has social media improved communication?", src: "Your materials",
      task: "Has social media enhanced or damaged human communication? Give your views.",
      text: `# Social Media and Human Communication

In the digital age, social media has revolutionised how we connect. While its impact is undeniable, whether it has truly enhanced or diminished human communication remains a significant point of contention.

On the one hand, proponents argue that social media platforms enable instantaneous contact across the globe, allowing people to maintain relationships that would otherwise fade due to distance. This constant connectivity fosters a sense of community, enabling users to share their life experiences in real time.

Conversely, sceptics argue that digital interactions often lack the nuance of face-to-face conversation, which can lead to superficial connections. Moreover, an over-reliance on screens may reduce the quality of physical social interactions, as individuals may prioritise digital engagement over genuine presence.

Ultimately, while I recognise that social media is an invaluable tool for maintaining long-distance ties, I am convinced that it should never replace the depth and sincerity of in-person communication. Digital tools should be viewed as a supplement to, rather than a substitute for, genuine human connection.`,
      notes: ["'a supplement to, rather than a substitute for,' — an elegant parallel structure.", "Formal vocabulary throughout: proponents, sceptics, nuance, prioritise."]
    },
    {
      title: "Who is responsible for protecting the environment?", src: "Your materials",
      task: "Is protecting the environment the responsibility of governments or individuals? Give your views.",
      text: `# Protecting the Environment: Whose Responsibility?

Environmental degradation is a pressing global crisis, which has sparked an intense debate regarding who bears the primary responsibility for environmental restoration. While it is clear that governments hold the power to implement systemic change, individuals also possess the power to influence daily consumption patterns.

To begin with, governments are essential for enacting policies, such as strict industrial regulations and carbon taxes, which have the most significant impact on emission reduction. These top-down initiatives are crucial because they provide the framework necessary for large-scale environmental protection. Without such legislative action, individual efforts may remain largely insignificant when compared to industrial-scale pollution.

In contrast, individual choices — such as reducing single-use plastic, opting for public transport and conserving energy — collectively create a shift in market demand. By consistently making eco-friendly decisions, consumers force corporations to adapt their practices to meet the expectations of a more sustainable market. Furthermore, individual advocacy often serves as the catalyst that prompts governments to consider more stringent environmental laws.

In conclusion, I believe that environmental protection is a shared duty in which the individual is just as important as the state. Sustainable progress can only be achieved when strong government policies are supported by the conscious, eco-friendly habits of every citizen. In my opinion, we must all take personal ownership of our environmental footprint if we truly wish to see a greener, more sustainable future for the next generation.`,
      notes: ["Dashes used to insert examples mid-sentence.", "Strong cause-and-effect chain: choices → demand → corporations → laws."]
    },
    {
      title: "Should schools encourage sport?", src: "Language bank",
      task: "Should schools encourage students to take part in sport? Give your views.",
      text: `# Should Schools Encourage Students to Take Part in Sport?

The role of sport in education is widely discussed. Although academic achievement is important, I firmly believe that schools should actively encourage students to participate in sporting activities.

To begin with, sport promotes cooperation and discipline. When students play as part of a team, they learn to communicate, respect others and work towards a shared goal. These skills are valuable far beyond the playing field.

Furthermore, regular physical activity can improve concentration and help students manage the pressures of school life. A well-planned sports programme also gives students an opportunity to discover interests that may not emerge in ordinary lessons.

Admittedly, some argue that additional sporting activities take time away from academic study. This concern is understandable; however, sport does not need to replace lessons. Instead, schools can offer balanced programmes that fit around students' learning.

Overall, sport should be treated as an important part of school life rather than an optional extra. By providing inclusive opportunities, schools can support students' development in a more rounded way.`,
      notes: ["Concession + rebuttal paragraph ('Admittedly… This concern is understandable; however…').", "Clear position in both the introduction and conclusion."]
    },
    {
      title: "Should students wear school uniforms?", src: "Zyvar original",
      task: "'School uniforms should be compulsory.' Do you agree? Give reasons for your opinion.",
      text: `# Are School Uniforms Necessary?

Few school rules generate as much debate as compulsory uniforms. While critics claim that uniforms restrict self-expression, I firmly believe that their benefits for equality and discipline far outweigh their drawbacks.

Firstly, uniforms create a sense of equality among students. When everyone dresses identically, differences in family income become far less visible, which reduces the risk of bullying and peer pressure related to expensive brands. Consequently, students can focus on their learning rather than on their appearance.

Furthermore, uniforms foster a sense of belonging and discipline. Wearing the same clothes as one's classmates reinforces the idea of being part of a community, and many teachers report that students behave more responsibly when dressed formally.

Admittedly, opponents argue that uniforms stifle individuality and can be costly for parents. Nevertheless, schools can address these concerns by allowing personal accessories and offering second-hand uniform schemes at reduced prices.

In conclusion, although uniforms are not without their limitations, I am convinced that they create a fairer and more focused learning environment. Rather than abolishing them, schools should make them more affordable and flexible.`,
      notes: ["Every body paragraph follows Point → Explain → Result.", "Rebuttal offers practical solutions instead of simply dismissing the other side."]
    },
    {
      title: "Is technology making young people less active?", src: "Zyvar original",
      task: "Some people say technology is making young people lazy and unhealthy. To what extent do you agree?",
      text: `# Technology and Youth Health

Over the past two decades, smartphones, games consoles and streaming services have transformed the way teenagers spend their free time. It is often claimed that these devices have made young people less active; while there is considerable truth in this view, I believe the picture is more complex.

On the one hand, it is undeniable that excessive screen time encourages a sedentary lifestyle. Many teenagers now spend several hours a day sitting in front of screens, time that previous generations might have spent playing outdoors. This lack of physical activity can contribute to weight gain, poor posture and disrupted sleep patterns.

On the other hand, technology can also be a powerful motivator for exercise. Fitness apps, step counters and online workout videos make physical activity more accessible and enjoyable, while active video games encourage movement at home. In fact, many young people use social media to share their sporting achievements and inspire their peers.

Ultimately, technology itself is not the problem; the way it is used is. If parents and schools promote a healthy balance between screen time and physical activity, technology could become an ally rather than an enemy of youth health.`,
      notes: ["Partially agree position — shows mature, nuanced thinking.", "Final sentence uses a memorable 'ally rather than an enemy' contrast."]
    }
  ],
  checklist: [
    "Does my introduction clearly frame the debate or state my position?",
    "Does each body paragraph develop ONE argument with explanation and example?",
    "Have I presented the opposing view fairly AND rebutted it?",
    "Have I used formal connectives (no contractions, no slang)?",
    "Is my opinion consistent throughout?",
    "Does my conclusion answer the exact question decisively?",
    "Have I avoided new arguments in the conclusion?"
  ]
};
