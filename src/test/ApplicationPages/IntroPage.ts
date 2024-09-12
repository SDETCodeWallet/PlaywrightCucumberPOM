import { expect } from "@playwright/test";
import { BaseTest } from "../Utils/UIDriver";
import { playwrightPage } from "../Utils/TestHooks";

const installationLink: string=  "//a[text()='Installation']";

export class IntroPage{

    public static async verifyIntroPageURL(){
        await expect(playwrightPage).toHaveURL("https://playwright.dev/docs/intro")
    }

    public static async verifyInstallationText(){
        const actualText = await playwrightPage.locator(installationLink).textContent();
        if (actualText !== null) {
            await BaseTest.toHaveText(actualText, "Installation");
            await BaseTest.expectTextLengthIsGreaterThanOrEqualTo(actualText, 4);
        }
    }
}