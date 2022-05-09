## End-to-End testing guide

### TLDR

Running the End-to-End tests:

- `npm run test:e2e`

### Playwright

This project uses [playwright](https://playwright.dev/) to run End-to-End tests in multiple browser environments.

The configuration can be found at [playwright.config.ts](../playwright.config.ts).

### Selecting Elements

The convention used for targeting sections and specific elements in this project is through the `data-test-id` attribute.

These attributes will be removed on production so there is no issue with using them during development.
