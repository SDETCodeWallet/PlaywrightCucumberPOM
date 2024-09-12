import { expect } from "@playwright/test";
import { playwrightPage } from "./TestHooks";

export class BaseTest{

    public static async openApplication(url: string){
        await playwrightPage.goto(url)
    }   

    public static async toHaveURL(titleToHaveURL: string){
        await expect(playwrightPage).toHaveURL(titleToHaveURL)
    }

    public static async toHaveText(actualText: string , textToVerify: string){
        await expect(actualText).toContain(textToVerify)
    }

    public static async expectTextLengthIsGreaterThanOrEqualTo(actualText: string , length: number){
        expect(Number(actualText?.length)).toBeGreaterThanOrEqual(length)
    }
}