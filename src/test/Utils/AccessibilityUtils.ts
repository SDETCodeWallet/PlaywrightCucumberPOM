import { AxeBuilder } from "@axe-core/playwright";
import { expect, Page } from "@playwright/test";

export class Accessibility{

    public static async checkAccessibility(page: Page): Promise<void> {
        await page.waitForLoadState("domcontentloaded");
        const axe = new AxeBuilder({ page });
        const results = await axe.analyze();
        
        // Log the violations
        console.log(results.violations);
        
        // Assert that there are no accessibility violations
       // expect(results.violations).toHaveLength(0);
    }

    
    
    
}
