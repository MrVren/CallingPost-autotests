// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
// ...
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import 'cypress-mochawesome-reporter/register';

import registerCypressGrep from '@cypress/grep';
registerCypressGrep()
// Alternatively you can use CommonJS syntax:
// require('./commands')
