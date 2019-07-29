# Contributing to DX Knowledge Base

We welcome contributions to our [open source project on Github](http://github.com/DXHeroes/knowledge-base).

## Issues

Feel free to submit issues and enhancement requests.

## Contributing

Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  Submit a **Pull Request** so that we can review your changes

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
    - Use "The Chicago Manual of Style on Headlines". Go to [https://capitalizemytitle.com](https://capitalizemytitle.com) and choose "Chicago".

## Copyright and Licensing

The DX Knowledge Base open source project is licensed under the [Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

## [FAQ](https://github.com/DXHeroes/knowledge-base/issues?q=label%3Afaq+sort%3Aupdated-desc+is%3Aclosed)
