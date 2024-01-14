var formatMarkDownList=(userInput)=>{
  var list=userInput.split(",").map(element=>element.trim()).map(element=>`- ${element}`);
  return list.join('\n');
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

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
${data.git}
${data.email} 
  
## License 
${data.license}
`;
}

module.exports = generateMarkdown;
