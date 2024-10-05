import { loginPage
 } from "./pages/loginPage";

describe('testing the delete course functionality spec', () => {
  it('verify user can delete a course successfully', () => {
    loginPage.openQualesApp();
    loginPage.typeCorrectEmailAddressAndPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmLoginSuccessful();
    loginPage.deleteCourse101();
  });

});