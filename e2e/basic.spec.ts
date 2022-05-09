import { expect, test } from "@playwright/test";

/** Configured through playwright [config](../playwright.config.ts) `webServer` attribute. */
const LOCAL_SERVER = "http://localhost:3000/";

test("Basic app check", async ({ page }) => {
  await page.goto(LOCAL_SERVER);
  const title = await page.title();
  await expect(title).toEqual("Metronome App");
});

test("Basic pulse check", async ({ page }) => {
  await page.goto(LOCAL_SERVER);
  const pulse = await page.locator("data-test-id=pulse-text");
  const initialPulseText = await pulse.textContent();

  await expect(initialPulseText).toEqual("0");

  await page.locator("[data-test-id=select-bpm] button").first().click();

  const newPulseText = await pulse.textContent();
  await expect(newPulseText).not.toEqual("0");
});
