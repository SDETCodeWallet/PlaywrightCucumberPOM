import { expect, request } from "@playwright/test";
import { playwrightPage } from "./TestHooks";

export class APIDriver{

    public static async getRequest(baseURL: string, endpoint: string) {
        const apiRequestContext = await request.newContext();
        const response = await apiRequestContext.get(`${baseURL}${endpoint}`);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log(responseBody);
        return responseBody;
    }

    public static async postRequest(baseURL: string, endpoint: string, data: any) {
        const apiRequestContext = await request.newContext();
        const response = await apiRequestContext.post(`${baseURL}${endpoint}`, {
            data: data
        });
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        console.log(responseBody);
        return responseBody;
    }

    
    
}