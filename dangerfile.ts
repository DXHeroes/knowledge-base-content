import { message, warn, fail, markdown, danger } from 'danger'; // Import necessary modules from 'danger'
import fetch from 'node-fetch'; // Import the 'fetch' module for making HTTP requests
import path from 'path'; // Import the 'path' module for working with file paths
import fs from 'fs'; // Import the 'fs' module for file system operations

// Define an asynchronous function named 'validate'
const validate = async () => {
  // Define an asynchronous function named 'validateArticle' that takes an 'article_path' parameter
  const validateArticle = async (article_path: any) => {
    // Read the content of the file specified by 'article_path'
    const body = fs.readFileSync(path.resolve(__dirname, article_path));

    try {
      // Send a POST request to the validation URL with the file content
      const response = await fetch(
        process.env.KB_VALIDATION_URL || 'setTheUrl',
        {
          method: 'post',
          body: JSON.stringify({
            repo_path: article_path,
            content: body.toString(),
          }),
          headers: {
            'Content-Type': 'application/json',
            'X-DX-Auth': `${process.env.X_DX_AUTH_HEADER}`,
            Authorization: `${process.env.AUTH_BASE64}`,
          },
        },
      );
      // Parse the JSON response from the server
      const json = await response.json();
      console.log(json); // Log the JSON response
      return json; // Return the JSON response
    } catch (error) {
      console.log(error); // Log any errors that occur during the request
      throw error; // Throw the error to indicate a failure
    }
  };

  // Determine which Markdown files have been created or modified
  const changedMds = [
    ...danger.git.created_files,
    ...danger.git.modified_files,
  ].filter(path => path.match(/(problems|practices)\/.*\.md/));

  // Iterate over the changed Markdown files
  for (const mdFile of changedMds) {
    // Validate each Markdown file and store the result in 'validationResult'
    const validationResult: ValidationResult = await validateArticle(mdFile);

    // Display messages, warnings, and failures based on the validation result
    for (const info of validationResult.infos) {
      message(info, mdFile);
    }
    for (const warning of validationResult.warns) {
      warn(warning, mdFile);
    }
    for (const failure of validationResult.fails) {
      fail(failure, mdFile);
    }

    // If there are no failures, display a message with a link
    if (validationResult.fails.length == 0) {
      message(
        'See preview of the article at [https://preview.developerexperience.io/](https://preview.developerexperience.io/)',
      );
    }
  }
};

// Call the 'validate' function and handle success or error
validate()
  .then(res => {
    res; // Do something with the result if needed
  })
  .catch(error => {
    console.error(error); // Log any errors that occur
    warn('Something is wrong. The validation failed with a server error.'); // Display a warning message
  });

// Define an interface for the validation result
interface ValidationResult {
  infos: string[];
  warns: string[];
  fails: string[];
}
