import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const IOS_SPECS = "iOS";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "list",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    // video: "retain-on-failure"
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      grepInvert: new RegExp(String.raw`${IOS_SPECS}`),
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      grepInvert: new RegExp(String.raw`${IOS_SPECS}`),
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      grepInvert: new RegExp(String.raw`${IOS_SPECS}`),
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 13"] },
      grep: new RegExp(String.raw`${IOS_SPECS}`),
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "STORYBOOK_E2E=1 npm run storybook",
    url: "http://127.0.0.1:6006",
    reuseExistingServer: !process.env.CI,
  },
});
