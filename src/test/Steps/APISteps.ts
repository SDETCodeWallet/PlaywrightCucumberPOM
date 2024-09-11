import { Given } from "@cucumber/cucumber";
import { APIDriver } from "./APIDriver";

let url = 'https://dummy.restapiexample.com';
let endpoint = "/api/v1/employees";

Given('GET request test', async function () {
    const response = await APIDriver.getRequest(url, endpoint);
    console.log(response)
});
