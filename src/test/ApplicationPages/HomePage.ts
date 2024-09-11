import { BaseTest } from "../Steps/UIDriver";
import { playwrightPage } from "../Steps/TestHooks";


export class HomePage{
    public static async clickOnGetStartedLink(){
        await playwrightPage.getByRole("link", {name: "Get started"}).click()
    }

    public static async verifyHomePageURL(){
        await BaseTest.toHaveURL("https://playwright.dev/")
    }


}