# Cypress Project

This project is a set of tests for CallingPost progressive web application.

## Installation and Running

To install Cypress, follow these steps:

1. Install Node.js.
2. Install Cypress with the command `npm install cypress`.

To run the tests, follow these steps:

Navigate to the project directory.
Run the command cypress run.

To run from the command line: 

Navigate to the proejct directory 
Run the command: `npx cypress run` to run all tests.

To run from the cypress interface: 

Navigate to the project directory 
Run the command: `npx cypress open`

If the tests are failing from the start when running from the command line cancel them using crtl+c.
If the tests are failing from the start when running from the Cypress interface - close it and try again.
## Description
- Custom commands for interacting with third-party services can be found in the `./cypress/support/commands.js` file.
- Tests are located in the `./cypress/e2e/` directory.