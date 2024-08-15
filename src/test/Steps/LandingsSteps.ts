import { Given, Then, When } from "@cucumber/cucumber";
import { landingPage } from "./TestHooks";
import { expect } from "@playwright/test";

Given('I launch the application', async function () {
    await landingPage.goto("https://playwright.dev/")
});


When('I Search {string}', async function (string) {
    await landingPage.getByRole("link", {name: "Get started"}).click()
    await landingPage.waitForTimeout(1500)
    await expect(landingPage).toHaveTitle("Installation | Playwright")
    await expect(landingPage).toHaveURL("https://playwright.dev/docs/intro")
    const actualText = await landingPage.locator('//h1[text()="Installation"]').textContent();
    expect(actualText).toContain("Installation")
    expect(Number(actualText?.length)).toBeGreaterThanOrEqual(4)
    const actualText1 = await landingPage.locator('//p//parent::div/p[1]').textContent();
    expect(actualText1).toContain("Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.")
    await landingPage.locator('//div[@class="navbar__item dropdown dropdown--hoverable"]').hover();
    await landingPage.waitForTimeout(1000)
    await landingPage.locator('//div[@class="navbar__item dropdown dropdown--hoverable"]//a[text()="Java"]').click();
    await landingPage.waitForTimeout(1000)
    await expect(landingPage).toHaveTitle("1Installation | Playwright Java")
    await expect(landingPage).toHaveURL("https://playwright.dev/java/docs/intro")
    await landingPage.locator('//p//parent::div/p[1]').scrollIntoViewIfNeeded()
});


Then('Starting of the Test', async function () {
    });

Then('I validate Search page is open', function () {
  });