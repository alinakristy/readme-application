const formatMarkDownList = (userInput) =>
  userInput // "feature1, feature2 ,  feature 3 , and so on, "
    .split(",") // ["feature1", " feature2", "  feature 3 ", " and so on", " "]
    .map(element => element.trim()) // ["feature1", "feature2", "feature 3", "and so on", ""]
    .filter(element => element != '') // ["feature1", "feature2", "feature 3", "and so on"]
    .map(element => `- ${element}`) // ["- feature1", "- feature2", "- feature 3", "- and so on"]
    .join('\n'); // "- feature1\n- feature2\n- feature 3\n- and so on"

//licenses badges https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const badge = (license) => {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Apache-2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'GPL-3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'BSD-2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    case 'BSD-3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    default:
      return ''
  }

}

//license generator
const licenceInfo = (license) => {
  if (license.toLowerCase() !== "none") {
    return `This application is covered by the ${license} license.`
  } else {
    return `This product isn't protected by any licence.`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
${badge(data.license)}

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation 
${formatMarkDownList(data.instalation)}

## Usage 
${formatMarkDownList(data.usageInformation)}

## Contributing 
${data.contribution}

## Tests
\`\`\`${data.tests}\`\`\`

## Questions 
For mre information contact me via [GitHub profile](https://github.com/${data.git}) or email address <${data.email}>
  
## License 
${licenceInfo(data.license)}
`;
}

module.exports = generateMarkdown;
