import { Given, Then, When } from "@cucumber/cucumber";
import { APIDriver } from "../Utils/APIDriver";

When('I make a {string} request to {string}', async function (MethodType: string, endPoint: string) {
   let baseURL = 'https://fake-json-api.mock.beeceptor.com';
    let response;
   switch (MethodType) {
    case "GET":
        response = await APIDriver.getRequest(baseURL, endPoint);
        break;
    case "POST":
        response = await APIDriver.postRequest(baseURL, endPoint, "data"); 
        break;
    default:
        console.error("Invalid Method Type"+ MethodType);
        break;
   }

   console.log(response)
});

