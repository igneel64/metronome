import { expect, test } from "@playwright/test";

/** Configured through playwright [config](../playwright.config.ts) `webServer` attribute. */
const LOCAL_SERVER = "http://localhost:3000/";

test("Basic network error check", async ({ page, context }) => {
  await page.goto(LOCAL_SERVER);
  await context.setOffline(true);
  await page.locator("data-test-id=spotify-refresh").click();
  const errorMessage = await page.locator("data-test-id=error").textContent();
  await expect(errorMessage).toMatch("error");
});
