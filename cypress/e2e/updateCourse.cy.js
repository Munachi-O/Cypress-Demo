import { loginPage
} from "./pages/loginPage";

describe('testing the update course functionality spec', () => {
 it('verify user can update a course successfully', () => {
   loginPage.openQualesApp();
   loginPage.typeCorrectEmailAddressAndPassword();
   loginPage.clickLoginBtn();
   loginPage.confirmLoginSuccessful();
   loginPage.updateCourse101();
 });

});