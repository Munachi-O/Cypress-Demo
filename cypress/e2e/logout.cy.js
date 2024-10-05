import { loginPage
 } from "./pages/loginPage";

describe('testing the logout functionality spec', () => {
  it('verify that user can log out successfully', () => {
    loginPage.openQualesApp();
    loginPage.typeCorrectEmailAddressAndPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmLogOutSuccessful();
  });

});