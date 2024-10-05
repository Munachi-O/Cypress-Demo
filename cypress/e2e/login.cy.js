import { loginPage
 } from "./pages/loginPage";

describe('testing the login functionality spec', () => {
  it('specify that the quales library app loads successfully', () => {
    loginPage.openQualesApp();
    loginPage.confirmTheLoginInformationDisplays()
  });

  it("verify that user can login successfully with correct username and password", ()=>{

    loginPage.openQualesApp();
    loginPage.typeCorrectEmailAddressAndPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmLoginSuccessful();
  });

  it("should fail login with incorrect username and correct password", () => {
    loginPage.openQualesApp();
    loginPage.typeInCorrectEmailAddressAndCorrectPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmLoginUnsuccessful();
  });

  it("should fail login with correct username and incorrect password", () => {
    loginPage.openQualesApp();
    loginPage.typeCorrectEmailAddressAndIncorrectPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmLoginUnsuccessful();
  });

  it("should fail login with incorrect username and incorrect password", () => {
    loginPage.openQualesApp();
    loginPage.typeincorrectEmailAddressAndIncorrectPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmLoginUnsuccessful();
  });

});