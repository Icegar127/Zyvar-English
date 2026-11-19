# Zyvar-English

A free study website for **Cambridge IGCSE English as a Second Language (0510)**, built to help students write A* emails, articles, reviews, essays and reports.

It's a static site: plain HTML, CSS and JavaScript with no build step, no framework and no server. It runs on GitHub Pages or straight from your computer.

## Features

- **Writing guides** for Email, Article, Review, Essay and Report. Each guide has:
  - an overview, structure, and do's and don'ts
  - **3 fixed introductions** and **3 fixed endings** for different kinds of question
  - a vocabulary list with meanings and examples, plus theme vocabulary
  - phrases and connectives
  - **A\* sample answers** with tasks, annotations, word-count badges and an optional highlight of A* language
  - exam-style **practice prompts**
  - a checklist
- **Writing Lab**: timed writing with live feedback on:
  - word count and paragraphs
  - register (formal vs informal)
  - missing greetings, titles or headings
  - weak words, connectives and A* vocabulary used

  Drafts save automatically and can be downloaded.
- **Vocabulary bank**: universal A* words, 20+ topic themes, word upgrades and a saved-words list.
- **Phrases & connectives**: formal vs informal linkers, idioms and advanced grammar structures.
- **Grammar & accuracy**: common errors, confused words, punctuation, a spelling list and test, and a grammar quiz.
- **Flashcards**:
  - a fixed set of 10 new words every day, with a daily streak
  - a meaning quiz and a fill-the-gap quiz
  - decks for words you're still learning, saved words and categories
- **Reading exercises**: original passages with multiple-choice, True/False/Not Given and short-answer questions, all marked automatically.
- **Exam guide**: marking criteria, a timing plan, mark bands and common mistakes.
- **Four themes**: Forest (dark green), Ocean (blue), Midnight and Light. Scrollbars match the theme.
- Site-wide search (press `/`), a mobile-friendly layout and print-friendly samples.

All progress is stored in the visitor's own browser (`localStorage`). There are no accounts and no tracking.

## Run it locally

Download the repository and double-click `index.html`. That's all.

You can also serve it locally:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Publish with GitHub Pages

1. Create a new repository on GitHub, for example `zyvar-english`.
2. Upload every file and folder in this project, including the `.github` folder, to the repository's main branch.
3. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/pages.yml` deploys the site automatically. After a minute or two it will be live at `https://<your-username>.github.io/zyvar-english/`.

(Instead of step 3, you can choose **Deploy from a branch → main → / (root)**. The site works either way.)

## Project structure

```
index.html              App shell
css/style.css           Styles and the four colour themes
js/app.js               Routing, pages, Writing Lab, flashcards, quizzes
js/data/
  email.js, article.js, review.js, essay.js, report.js   Writing guides and samples
  more-samples.js, more-content.js                        Extra samples, prompts, reading and grammar
  vocab.js              Universal vocabulary, themes, connectives, idioms, grammar
  accuracy.js           Common errors, confused words, punctuation, spelling, quiz, exam guide
  reading.js, reading2.js                                 Reading passages and questions
```

## Adding content

All content lives in plain JavaScript data files under `js/data/`:

- **New sample:** push an object `{ title, task, points or bubbles, text, notes }` into `ZY.writing.<type>.samples`. In `text`, lines starting with `# ` are titles and lines starting with `## ` are headings.
- **New reading exercise:** push an object into `ZY.reading`. See `reading.js` for the question formats.

## Disclaimer

The model answers are practice examples, not official Cambridge mark-scheme responses. Always follow the current syllabus and the instructions and word limits on your own question paper. Cambridge IGCSE is a trademark of Cambridge University Press & Assessment, which is not affiliated with this project.

## License

The code is released under the MIT License (see `LICENSE`). Some sample answers come from the project owner's own study materials.
