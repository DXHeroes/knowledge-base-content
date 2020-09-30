# Contributing to DX Knowledge Base

We welcome contributions to our [open source project on Github](http://github.com/DXHeroes/knowledge-base-content).

## Issues

Feel free to submit issues and enhancement requests.

## Contributing

Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

Follow these steps:

1. **Fork** the repo on GitHub.
2. **Clone** the project to your own machine.
3. **Commit** changes to your own branch.
4. **Push** your work back up to your fork.
5. Submit a **Pull Request** so that we can review your changes.

**NOTE: Ensure that you merge the latest changes from "upstream" before making a pull request.**

### Feeling and Grammar

- Use active voice whenever possible.
- Establish a clear structure and try to be precise.
- Be brief, clear, and direct.
  - Important information in the main clause.
- Simplify your language.
  - Use fewer words and get to the point.
- Avoid jargon and abbreviations.
  - Define acronyms and initialism on their first use - give the abbreviation in parentheses after the full terminology.
- Use a grammar check tool, for example:
  - [Grammarly](https://www.grammarly.com)
  - [Microsoft Word Spelling and Grammar with the Readability Measurement](https://support.office.com/en-us/article/check-spelling-and-grammar-in-office-5cdeced7-d81d-47de-9096-efd0ee909227)

Source: [How to Become a Technical Writer: A Beginner’s Guide](https://www.instructionalsolutions.com/blog/become-a-technical-writer)

### Content Composition

**Repository Folders**

- There are 3 important folders in the root of the repository:
  - [**files**](https://github.com/DXHeroes/knowledge-base/tree/master/files) - stores all the images and other files necessary for articles (problem/practice).
  - [**problems**](https://github.com/DXHeroes/knowledge-base/tree/master/problems) - stores all DX problems.
  - [**practices**](https://github.com/DXHeroes/knowledge-base/tree/master/practices) - stores all DX practices.

**File Format**

- Articles are written in [markdown](https://guides.github.com/features/mastering-markdown/)
- Names of the file should be [snake_cased](https://en.wikipedia.org/wiki/Snake_case) (`lower_case_with_underscores`)
- Put your file to correct folder based on the type of your article ([problem](https://github.com/DXHeroes/knowledge-base/tree/master/problems)/[practice](https://github.com/DXHeroes/knowledge-base/tree/master/practices)). E.g. practice pull request [on the Knowledge Base](https://developerexperience.io/practices/pull-requests) and [in the repository](https://github.com/DXHeroes/knowledge-base/blob/master/practices/pull_requests.md)

**Content Format**

Example article: [pull request](https://github.com/DXHeroes/knowledge-base/blob/master/practices/pull_requests.md) ([raw](https://raw.githubusercontent.com/DXHeroes/knowledge-base/master/practices/pull_requests.md))

- **meta informations**
  - Starting with `---` (a triple dash) and ending with a second `---` (triple dash)
  - Contains meta info of the article
  - **slug** - A friendly ID of the article visible in the URL of the Knowledge base (e.g.: `https://developerexperience.io/practices/pull-requests`
  - **stages** - Categorizes the article to some stages of the project. Valid values are:
    - `research`
    - `building_team`
    - `development`
    - `launch`
    - `maintenance`
    - `phase_out`
  - **short_description** - The description of the article used for [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)
    - Max. 250 characters long
  - **tags**
    - Visible to use in the Article's detail
    - Used to connect problems and practices with other similar areas than aspect or stage
    - Each tag has it's own detail (e.g. [tag design-sprint](https://developerexperience.io/tags/design-sprint))
    - Amount of tags for the article is not limited
  - **keywords**
    - Invisible in the KB
    - Used for [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)
    - Max. 10 keywords
- **markdown content**
  - Everything behind the second `---` (triple dash)
  - **headlines**
    - The first H1 is recognized as the name of the article
    - We want to keep similar structure of all articles informing about the practice or problem. So we require to keep only few specific H2 headings:
      - `What Is a %{name}`
      - `Why You Might Want the %{name}`
      - `Problems the %{name} Helps to Solve`
      - `How to Implement the %{name}?`
      - `Common Pitfalls of the %{name}`
      - `Resources for the %{name}`
    - Follow the "The Chicago Manual of Style" to capitalize your titles
      - You can use this tool for the title capitalization: [Capitaize My Title](https://capitalizemytitle.com). Write your title and select "Chicago".
    - **Links**
      - Links to another DX Knowledgebase practice `/practices/%{practice}`
      - Links to another DX Knowledgebase problem `/problems/%{problem}`
      - Links to another DX Knowledgebase tag `/tags/%{tag}`

## Copyright and Licensing

The DX Knowledge Base open source project is licensed under the [Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## [FAQ](https://github.com/DXHeroes/knowledge-base/issues?q=label%3Afaq+sort%3Aupdated-desc+is%3Aclosed)
