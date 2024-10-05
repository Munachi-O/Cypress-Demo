import { loginPage
 } from "./pages/loginPage";

describe('testing the create course functionality spec', () => {
  it('verify user can create courses on the quales edu library app',() =>{
    loginPage.openQualesApp();
    loginPage.typeCorrectEmailAddressAndPassword();
    loginPage.clickLoginBtn();
    loginPage.confirmLoginSuccessful();
    loginPage.createCourse1();
    loginPage.createCourse2();
  });

});