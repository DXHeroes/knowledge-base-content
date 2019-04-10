# Contributing to DX Knowledge Base

We welcome contributions to our [open source project on Github](http://github.com/DXHeroes/knowledge-base).

## Issues

Feel free to submit issues and enhancement requests.

## Contributing

Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull Request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request.

### Feeling and Grammar

- Use active voice whenever possible
- Establish a clear structure and try to be precise
- Be brief, clear and direct
  - For example If ... => to avoid...
  - Important information in the main clause
- Simplify your language
  - Use fewer words and get to the point
- Avoid jargon and abbrevations
  - Define acronyms and initialisms on their first use - give the abbreviation in parentheses after the full terminology
- Grammar check possibilities
  - [Grammarly](https://www.grammarly.com)
  - [Microsoft Word Spelling and Grammar with the Readability Measurement](https://support.office.com/en-us/article/check-spelling-and-grammar-in-office-5cdeced7-d81d-47de-9096-efd0ee909227)

Source: [How to Become a Technical Writer: A Beginner’s Guide](https://www.instructionalsolutions.com/blog/become-a-technical-writer)


### Content Composition

**Repository folders**
- There are 3 important folders in the root of the repository:
  - [**files**](https://github.com/DXHeroes/knowledge-base/tree/master/files) - stores all images and other files necessary for articles (issue/practice)
  - [**issues**](https://github.com/DXHeroes/knowledge-base/tree/master/issues) - stores all DX issues
  - [**practices**](https://github.com/DXHeroes/knowledge-base/tree/master/practices) - stores all DX practices

**File Format**
- Articles are written in [markdown](https://guides.github.com/features/mastering-markdown/)
- Names of the file should be [snake_cased](https://en.wikipedia.org/wiki/Snake_case) (`lower_case_with_underscores`)
- Put your file to correct folder based on the type of your article ([issue](https://github.com/DXHeroes/knowledge-base/tree/master/issues)/[practice](https://github.com/DXHeroes/knowledge-base/tree/master/practices)). E.g. practice pull request [on the Knowledge Base](https://developerexperience.io/practices/pull-requests) and [in the repository](https://github.com/DXHeroes/knowledge-base/blob/master/practices/pull_requests.md)

**Content Format**

Example article: [pull request](https://github.com/DXHeroes/knowledge-base/blob/master/practices/pull_requests.md) ([raw](https://raw.githubusercontent.com/DXHeroes/knowledge-base/master/practices/pull_requests.md))
- **meta informations**
  - starting with `---` and ending with second `---`
  - contains meta info of the article
  - **slug** - friendly ID of the article visible in the URL on the Knowledge base (e.g.: `https://developerexperience.io/practices/pull-requests`
  - **aspect** - Categorizes the article to some [aspect](https://developerexperience.io/aspects#explore) of the development process. Valid values are: 
    - `architecture`
    - `processes`
    - `tooling`
    - `culture`
  - **stages** - Categorizes the article to some [stages](https://developerexperience.io/stages#explore) of the project. Valid values are:
    - `research`
    - `building_team`
    - `development`
    - `launch`
    - `maintenance`
    - `phase_out`
  - **short_description** - description of the article used for [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)
    - max. 250 characters long
  - **tags** 
    - visible for use in the Article detail
    - used to connect issues and practices with other similar areas than aspect or stage
    - each tag has it's own detail (e.g. [tag design](https://developerexperience.io/tags/desing))
    - amount of tags for the article is not limited
  - **keywords**
    - invisible in the KB
    - used for [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)
    - max. 10 keywords
- **markdown content**
  - everything behind the second `---`
  - **headlines**
    - first H1 is recognized as the name of the article
    - We want to keep similar structure of all articles informing about the practice or issue. So we require to keep only few specific H2 headings:
      - `What Is a %{name}`
      - `Why You Might Want the %{name}`
      - `Issues the %{name} Helps to Solve`
      - `How to Implement the %{name}?`
      - `Common Pitfalls of the %{name}`
      - `Resources for the %{name}`
    - [The Chicago Manual of Style on Headlines](#the-chicago-manual-of-style-on-headlines)
    
### The Chicago Manual of Style on Headlines    
**Principles of headline-style capitalization.** The conventions of headline style are governed mainly by emphasis and grammar. The following rules, though occasionally arbitrary, are intended primarily to facilitate the consistent styling of titles mentioned or cited in text and notes:
  1. Capitalize the first and last words in titles and subtitles (but see rule 7), and capitalize all other major words (nouns, pronouns, verbs, adjectives, adverbs, and some conjunctions–but see rule 4).
  2. Lowercase the articles the, a, and an.
  3. Lowercase prepositions, regardless of length, except when they are used adverbially or adjectivally (up in Look Up, down in Turn Down, on in The On Button, to in Come To, etc.) or when they compose part of a Latin expression used adjectivally or adverbially (De Facto, In Vitro, etc.).
  4. Lowercase the conjunctions and, but, for, or, and nor.
  5. Lowercase to not only as a preposition (rule 3) but also as part of an infinitive (to Run, to Hide, etc.) and lowercase as in any grammatical function.
  6. Lowercase the part of a proper name that would be lowercased in the text, such as de or von.
  7. Lowercase the second part of a species name, such as fulvescens in Acipenser fulvescens, even if is the last word in a title or subtitle.

**Examples of headline-style capitalization.** The following examples illustrate the numbered rules in 8.157. All of them illustrate the first rule; the numbers in parentheses refer to rules 2-7.
- Mnemonics That Work Are Better Than Rules That Do Not
- Singing While You Work
- A Little Learning Is a Dangerous Thing (2)
- Four Theories concerning the Gospel according to Matthew (2, 3)
- Taking Down Names, Spelling Them Out, and Typing Them Up (3, 4)
- Tired but Happy (4)
- The Editor as Anonymous Assistant (5)
- From Homo erectus to Homo sapiens: A Brief History (3, 7)
- Defenders of da Vinci Fail the Test: The Name Is Leonardo (2, 3, 6)
- Sitting on the Floor in an Empty Room (2, 3), but Turn On, Tune In, and Enjoy (3, 4)
- Ten Hectares per Capita, but Landownership and Per Capita Income (3)
- Progress in In Vitro Fertilization (3)

## Copyright and Licensing

The DX Knowledge Base open source project is licensed under the [Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).


## [FAQ](https://github.com/DXHeroes/knowledge-base/issues?q=label%3Afaq+sort%3Aupdated-desc+is%3Aclosed)
