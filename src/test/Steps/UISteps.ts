import { Given, Then, When } from "@cucumber/cucumber";
import { BaseTest } from "../Utils/UIDriver";
import { HomePage } from "../ApplicationPages/HomePage";
import { IntroPage } from "../ApplicationPages/IntroPage";
import { playwrightPage } from "../Utils/TestHooks";
import { Accessibility } from "../Utils/AccessibilityUtils";


Given('I launch the application', async function () {
    await BaseTest.openApplication("https://playwright.dev/")
    await HomePage.verifyHomePageURL();
    await playwrightPage.waitForTimeout(2000)
});

When('I click on Get Started Link', async function () {
    await HomePage.clickOnGetStartedLink();
});


Then('I verify Installation page is displayed', async function () {
    await IntroPage.verifyIntroPageURL();
    await IntroPage.verifyInstallationText();
});

Then('I check the accessbility of the page', async function () {
    await Accessibility.checkAccessibility(playwrightPage)
});
