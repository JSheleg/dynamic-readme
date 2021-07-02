// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{if (license !== 'None') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== 'None') {
  return `\n* [License](#license)\n`;
}
return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}  

  ## Table of Contents:
    * 

 
  ## Installation:
    * ${data.step}

  ## Usage:
    


  ## License:
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}

  ## Contributing: 

  ## Tests:

  ## Questions:
    ### For questions in regards to my generated readme, please reach out at:
      * ${data.name}
      * Email:  ${data.email}
      * Github Link: https://github.com/${data.username} 
  
  
`;
}

module.exports = generateMarkdown;
