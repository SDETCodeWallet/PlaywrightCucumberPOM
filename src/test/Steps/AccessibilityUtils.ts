import { AxeBuilder } from "@axe-core/playwright";
import { expect, Page } from "@playwright/test";

export class Accessibility{

    public static async checkAccessibility(page: Page){
        const axe = new AxeBuilder({ page })
        const results = await axe.analyze();
        console.log(results.violations);

    }

    
    
    
}
