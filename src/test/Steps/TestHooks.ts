import { After, AfterAll, Before, BeforeAll, BeforeStep, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let testBrowser: Browser
let browserContext: BrowserContext
let playwrightPage: Page

BeforeAll(async function(){
    testBrowser = await chromium.launch({headless: false})
})

Before(async function(){
    browserContext= await testBrowser.newContext();
    playwrightPage = await browserContext.newPage();
    
})


After(async function({result}) {
    if(result?.status== Status.FAILED){
        const image= await playwrightPage.screenshot({path: "./image.png", type: "png"})
        this.attach(image, "image/png")
    }
})

AfterAll(async function (){
    await playwrightPage.close()
    await browserContext.close()
    await testBrowser.close()
    
})
export {testBrowser, playwrightPage}