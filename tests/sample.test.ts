import { JestPlaywrightConfig } from "jest-playwright-preset";

describe("sample test", () => {
  beforeEach(async () => {
    await jestPlaywright.resetContext();
  });

  it("should fail with testTimeout of 4000", async () => {
    await page.goto("http://www.google.com");
    await page.waitForTimeout(5000);
    await expect(true).toEqual(true);
  });
  
  const config: JestPlaywrightConfig = {
    browsers: ["chromium"],
    collectCoverage: false,
    exitOnPageError: false,
    contextOptions: {},
    launchOptions: {},
  };
  
  it.jestPlaywrightConfig(
    config,
    ", with custom config, should fail with testTimeout of 4000",
    async ({ page }) => {
      await page.goto("http://www.google.com");
      await page.waitForTimeout(5000);
      await expect(true).toEqual(true);
    }
  );
});
    