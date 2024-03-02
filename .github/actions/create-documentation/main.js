const core = require("@actions/core");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const axios = require("axios")

const excludedFolders = [".github"]; // Add more folders to exclude as needed

// Function to check if the file is in an excluded folder
const isInExcludedFolder = (filePath) => {
  return excludedFolders.some((folder) => filePath.startsWith(`${folder}/`));
};

async function generateReadmeContent(currentContent) {
  try {
    const content = `This is auto-generated documentation. \n`;
    // Use the input name defined in action.yml
    const mySecret = core.getInput("GPT_TOKEN", { required: true });

    const data = {
      model: "gpt-3.5-turbo-0125",
      messages: [
        {
          role: "user",
          content:
            "Can you please provide readme documentation for this code and return the output in the readme format " +
            currentContent,
        },
      ],
    };

    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + mySecret,
        },
      }
    );
    core.notice("Api Response", res.data.choices[0].message.content);
    content = content + res.data.choices[0].message.content;

    return content;
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`);
  }
}

async function run() {
  core.notice("This is the first custom action setup");

  // Get a list of modified files in the last commit, excluding those in excluded folders
  const modifiedFiles = execSync("git diff --name-only HEAD HEAD~1")
    .toString()
    .split("\n")
    .filter(Boolean) // Remove empty lines
    .filter((file) => !isInExcludedFolder(file)); // Exclude files in specific folders

    core.notice("Modified files", modifiedFiles);

  for (const file of modifiedFiles) {
    core.notice("Individual files", file);
    if (fs.existsSync(file)) {
      const dirName = path.dirname(file);
      const baseName = path.basename(file, path.extname(file));
      const readmePath = path.join(dirName, `${baseName}_README.md`);

      // Assuming generateReadmeContent is an async function that generates content based on the current file content
      const currentContent = fs.readFileSync(file, "utf8");
      const content = await generateReadmeContent(currentContent); // Make sure you define this function

      fs.writeFileSync(readmePath, content);
      core.notice(`Generated documentation for ${file} at ${readmePath}`);
    } else {
      core.notice(`Skipped deleted file: ${file}`);
    }
  }
}
run();
