// Returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(selectedLicense) {
  if (selectedLicense === "Apache 2.0 License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (selectedLicense === "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (selectedLicense === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (selectedLicense === "BSD 2-Clause Simplified License") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (selectedLicense === "BSD 3-Clause New or Revised License") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (selectedLicense === "Boost Software License 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (selectedLicense === "Eclipse Public License 2.0") {
    return `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;
  } else if (selectedLicense === "GNU Affero General Public License v3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (selectedLicense === "GNU General Public License v2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (selectedLicense === "GNU Lesser General Public License v3.0") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (selectedLicense === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (selectedLicense === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    return ``;
  }
}

// Returns the license link
// If there is no license, return an empty string

function renderLicenseLink(selectedLicense) {
  if (selectedLicense === "Apache 2.0 License") {
    return `[This application is licensed under Apache](https://opensource.org/licenses/Apache-2.0)`;
  } else if (selectedLicense === "GNU General Public License v3.0") {
    return `[This application is licensed under Free Software Foundation](https://opensource.org/licenses/GPL-3.0)`;
  } else if (selectedLicense === "MIT License") {
    return `[This application is licensed under MIT](https://opensource.org/licenses/MIT)`;
  } else if (selectedLicense === "BSD 2-Clause Simplified License") {
    return `[This application is licensed under BSD](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (selectedLicense === "BSD 3-Clause New or Revised License") {
    return `[This application is licensed under BSD](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (selectedLicense === "Boost Software License 1.0") {
    return `[This application is licensed under Boost](https://opensource.org/licenses/BSL-1.0)`;
  } else if (selectedLicense === "Eclipse Public License 2.0") {
    return `[This application is licensed under Eclipse](https://opensource.org/licenses/EPL-2.0)`;
  } else if (selectedLicense === "GNU Affero General Public License v3.0") {
    return `[This application is licensed under Free Software Foundation](https://opensource.org/licenses/AGPL-3.0)`;
  } else if (selectedLicense === "GNU General Public License v2.0") {
    return `[This application is licensed under Free Software Foundation](https://opensource.org/licenses/GPL-2.0)`;
  } else if (selectedLicense === "GNU Lesser General Public License v3.0") {
    return `[This application is licensed under Free Software Foundation](https://opensource.org/licenses/GPL-3.0)`;
  } else if (selectedLicense === "Mozilla Public License 2.0") {
    return `[This application is licensed under Mozilla](https://opensource.org/licenses/MPL-2.0)`;
  } else if (selectedLicense === "The Unlicense") {
    return `[This application is licensed by Unlicense](https://opensource.org/licenses/unlicense)`;
  } else {
    return ``;
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(selectedLicense) {
  if (selectedLicense == "none") {
    return ``;
  } else {
    return `## License `;
  }
}

// Generates markdown for README
function generateMarkdown(selectedLicense) {
  return `${renderLicenseSection(selectedLicense)}
  ${renderLicenseBadge(selectedLicense)}
  ${renderLicenseLink(selectedLicense)}`;
}

module.exports = generateMarkdown;
