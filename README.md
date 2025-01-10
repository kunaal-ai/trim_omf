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

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.
