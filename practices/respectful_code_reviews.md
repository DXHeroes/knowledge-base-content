


| Element | Description | Type | Required | Notes |
|---- | ---- |  ------------ | ----| --- |
| recordTV| Top level| TV program data  | Required |
| &nbsp;&nbsp;&nbsp; date| Date of TV program | string| Optional | format YYYY-DD-MM.If not included, it will use today's date |
| &nbsp;&nbsp;&nbsp; time| time of TV program | string| Required | Attribute :format on time can be either "24" or "12" for 24 or 12 hour formats. (12 hour formats are like "6:00 PM") |
| &nbsp;&nbsp;&nbsp; duration| duration of TV program/recording | string| Required | in hours  |
| &nbsp;&nbsp;&nbsp; channel| TV program channel number | string| Required |  |

# Respectful Code Reviews

**TL;DR**
The basis for a fruitful and positive collaboration is respectful and constructive feedback.


## Why You Might Want Respectful Code Reviews

While code review is recognized as a valuable tool for improving the quality of software projects, code review comments that are perceived as being unclear or harsh can have unfavorable consequences.

The right style of communication not only helps to build relationships and healthy work environments but also helps to achieve the final goal of delivering a quality product. It improves the overall health of the system and code.



## Problems Respectful Code Reviews Helps to Solve

-  **Biased solutions**   People are often biased towards their own solutions .The reviewer may suggest new ways of solving a particular problem while reading through the code or asking questions. A constructive and positive feedback encourages a person to be more receptive towards feedback.
-   **Unhealthy work environment**  A positive feedback attracts better attention .It allows others to look at suggestions in accepting manner and be respectful towards other people’s views. This prompts a healthy work environment .
-   **Knowledge Stagnation**   Code reviews are also a great means of project- and company-specific knowledge exchange. Respectful code reviews encourage open discussions between the reviewer and developer and help in knowledge sharing.
- **Time wastage**  A lot of time is saved when the reviewer and developer share a common goal of delivering a quality product and work together for it.
-   **Poor code quality** No developer is perfect, but everyone is different and has a unique perspective. Code reviews enable us to discover possible bugs or architectural flaws early on, before even manually testing and delivering the app.

## **How to Implement Respectful Code Reviews**

**Agreed-upon best practices**

Resolve conflicts by following the agreed-upon best practices in the style guide and coding standards documents as well as seeking the advice and suggestion of others who have more knowledge and experience in the area of the product.

**Make sure to understand the code that you are reviewing**.

If you don’t, then clarify it or ask for a code walkthrough/explanation. If there is a part of the code that you are not qualified to review, then make sure that there are other qualified developers who could review those parts of the code.

**Explain your code review comments and keep scope in mind**

Whenever the code review comment suggests an alternative approach or flags something up, it’s crucial to explain why and provide an example based on your knowledge and experience, to help the developer understand how your suggestion is going to help improve the quality of the code.

When suggesting fixes or changes, find the right balance on how to guide the author to fix the code. For example, I appreciate the guidance, explanation, and some tips or suggestions, and never the entire solution.

**Be mindful, respectful, kind, and clear in your code review**

It’s crucial that during the code review, you are kind, clear, courteous, and respectful while also being very clear and helpful to the author. When reviewing the code, make sure to make the review comment about the code and not the developer.

**Recognize and encourage good work during code review**

If you see something good in the change list, don’t forget to shout out the author for good work and encourage them. The aim of the code review should not only be to find mistakes but also to encourage and mentor developers for the great work they do.

 **Address issues with calm mind**

Address the feedback with a calm mind and in a compassionate way. Remember that most of the time, people have good intentions. Try to understand the intent of the feedback and incorporate or explain it keeping the code in mind.

 **Common Pitfalls**

-   In written communication, the receiver of the message must interpret the message without any natural clues, such as body language, facial expression, or tone. Misinterpretations happen frequently and are, in addition, hard to detect on the sender’s side.
-  Comment discussion may take longer time if comments are unclear.
-  Developers are biased towards own solution and may not be receptive of review comments.

## Resources 
- [Code review](https://en.wikipedia.org/wiki/Code_review)
- [Code Health: Respectful Reviews == Useful Reviews](https://testing.googleblog.com/2019/11/code-health-respectful-reviews-useful.html)
- [How to Give Respectful and Constructive Code Review Feedback](https://www.michaelagreiler.com/respectful-constructive-code-review-feedback/)
- [13 Code Review Standards Inspired by Google](https://medium.com/better-programming/13-code-review-standards-inspired-by-google-6b8f99f7fd67)
- [Respectful Code Reviews](https://chromium.googlesource.com/chromium/src/+/master/docs/cr_respect.md)
- [Code Reviews Done Right: Your Missing Guideline](https://quickbirdstudios.com/blog/code-review-best-practices-guidelines/)