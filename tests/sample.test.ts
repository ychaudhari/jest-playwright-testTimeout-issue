describe("Long running test", () => {
  beforeEach(async () => {
    await jestPlaywright.resetContext();
  });

  it("should fail with testTimeout of _18000_", async () => {
    // This test should take the jest testTimeout from jest.config.ts 
    // hence should fail with timetout of 18000 
    await page.goto("https://www.whatismybrowser.com/");
    await page.waitForTimeout(21000);
    await expect(true).toEqual(true);
  });
});
    