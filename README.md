# trim_omf

**trim_omf** is a JavaScript project utilizing [Playwright](https://playwright.dev/) for end-to-end testing, with continuous integration managed through [CircleCI](https://circleci.com/).

## Features

- **End-to-End Testing**: Automated tests for comprehensive application coverage.
- **Playwright Integration**: Leveraging Playwright's capabilities for browser automation.
- **Continuous Integration**: Automated testing and deployment pipelines via CircleCI.

## Project Structure

```plaintext
.
├── README.md
├── global-setup.ts
├── package-lock.json
├── package.json
├── playwright-report
│   └── index.html
├── playwright.config.ts
├── state.json
├── test-results
└── tests
    ├── example.spec.ts
    └── home-page.spec.ts
```

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Playwright](https://playwright.dev/) (installed as a project dependency)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kunaal-ai/trim_omf.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd trim_omf
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

## Running Tests

To execute the test suite:

```bash
npx playwright test
```

For a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

## Continuous Integration

This project uses CircleCI for continuous integration. The configuration is located in the `.circleci/config.yml` file. Upon pushing changes to the repository, CircleCI will automatically run the test suite to ensure code quality and functionality.

## Configuration

- **Environment Variables**: Define necessary variables in the `.env` file.
- **Playwright Settings**: Adjust `playwright.config.ts` to modify browser settings, timeouts, and other test configurations.

## Helper commands
- ```npx playwright test```
    Runs the end-to-end tests.

- ```npx playwright test --ui```
    Starts the interactive UI mode.

- ```npx playwright test --project=chromium```
    Runs the tests only on Desktop Chrome.

- ```npx playwright test example```
    Runs the tests in a specific file.

- ```npx playwright test --debug```
    Runs the tests in debug mode.

- ```npx playwright codegen```
    Auto generate tests with Codegen.
