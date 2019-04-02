import { message, warn, fail, markdown, danger } from "danger";
import fetch from "node-fetch";
import path from "path";
import fs from "fs";

const validate = async () => {
  const validateArticle = async (article_path: any) => {
    const body = fs.readFileSync(path.resolve(__dirname, article_path));

    try {
      const response = await fetch(
        process.env.KB_VALIDATION_URL || "setTheUrl",
        {
          method: "post",
          body: JSON.stringify({
            repo_path: article_path,
            content: body.toString()
          }),
          headers: {
            "Content-Type": "application/json",
            "X-DX-Auth": `${process.env.X_DX_AUTH_HEADER}`,
            Authorization: `${process.env.AUTH_BASE64}`
          }
        }
      );
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const changedMds = [
    ...danger.git.created_files,
    ...danger.git.modified_files
  ].filter(path => path.endsWith("md"));

  for (const mdFile of changedMds) {
    const validationResult: ValidationResult = await validateArticle(mdFile);

    for (const info of validationResult.infos) {
      message(info, mdFile);
    }
    for (const warning of validationResult.warns) {
      warn(warning, mdFile);
    }
    for (const failure of validationResult.fails) {
      fail(failure, mdFile);
    }
  }
};

validate()
  .then(res => {
    res;
  })
  .catch(error => {
    console.error(error);
    throw error;
  });

interface ValidationResult {
  infos: string[];
  warns: string[];
  fails: string[];
}
