import { registerPage } from "../../pages/registerPage";
import registerData from "../../fixtures/registerData.json";

const registerObject = new registerPage();
describe("Test Automation", () => {
  it("Registeration Flow", () => {
    registerObject.openURL();
    registerObject.enterFirstName(registerData.firstName);
    registerObject.enterlastName(registerData.lastName);
    registerObject.enterEmail(registerData.email);
    registerObject.enterTelephone(registerData.telephone);
    registerObject.enterPassword(registerData.password);
    registerObject.selectCheckbox();
    registerObject.clickOnContinue();
  });
});
