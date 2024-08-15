import { After, Before, BeforeAll, BeforeStep, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let testBrowser: Browser
let browserContext: BrowserContext
let landingPage: Page

setDefaultTimeout(30000)

BeforeAll(async function(){
    testBrowser = await chromium.launch({headless: false})
})

Before(async function(){
    browserContext= await testBrowser.newContext();
    landingPage = await browserContext.newPage();
})

After(async function({result}) {
    if(result?.status== Status.FAILED){
        const image= await landingPage.screenshot({path: "./image.png", type: "png"})
        await this.attach(image, "image/png")
    }
})

export {testBrowser, landingPage}