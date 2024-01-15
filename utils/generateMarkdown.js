const formatMarkDownList=(userInput)=>{
  const list=userInput.split(",").map(element=>element.trim()).map(element=>`- ${element}`);
  return list.join('\n');
}

const badge=(license) => {
switch (license){
  case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Apache-2.0':
    return  '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'GPL-3.0':
      return
    case 'BSD-2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    case 'BSD-3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    default:
  return ''
  } 
  
} 

const licenceInfo=(license) => {
  if (license.toLowerCase() !== "none") {
    return `This application is covered by the ${license} license.`
  } else{
  return `This product isn't protected by any licence.`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
---
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
