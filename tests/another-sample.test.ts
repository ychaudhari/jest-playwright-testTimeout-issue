import { JestPlaywrightConfig } from "jest-playwright-preset";

describe("Long running test", () => {
  const config: JestPlaywrightConfig = {
    browsers: ["chromium"],
    collectCoverage: false,
    exitOnPageError: false,
  };

  beforeEach(async () => {
    await jestPlaywright.resetContext();
  });

  it.jestPlaywrightConfig(
    config,
    "with CUSTOM CONFIG, should fail with testTimeout of _18000_ but fails with default jest testTimeout of _15000_",
    async ({ page }) => {
      // This test should take the jest testTimeout from jest.config.ts
      // hence should fail with timetout of 18000
      await page.goto("https://www.whatismybrowser.com/");
      await page.waitForTimeout(21000);
      await expect(true).toEqual(true);
    }
  );
});
