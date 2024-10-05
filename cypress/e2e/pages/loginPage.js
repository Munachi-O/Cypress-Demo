class LoginPage{
    pageElements = {
        loadApp : () => cy.visit('https://academy.quales.tech/login'),
        logintext : ()=> cy.contains('Login'),
        emailText : ()=> cy.get('#EmailAddress'),
        passwordText : ()=> cy.get('#Password'),
        landingPageLogo : ()=> cy.get('.css-iagpto'),
        emailAddressInputField : ()=> cy.get('[data-testid="EmailAddress"]'),
        passwordInputField : ()=> cy.get('[data-testid="Password"]'),
        loginBtn : ()=> cy.get('.MuiButton-contained'),
        ayobamiTxt : ()=> cy.contains('Ayobami'),
        loginSuccesssfulMsg : ()=> cy.contains('Login Successful'),
        loginSuccessPromt : ()=> cy.get('.Toastify__toast-body > :nth-child(2)'),
        logoutBtn : ()=> cy.get('.MuiToolbar-root > .MuiButton-root'),
        logoutSuccessfulMsg : ()=> cy.contains('Logged out successfully'),
        loginUnsuccessful : ()=> cy.contains('Invalid Login Credential'),
        addCourseTxt: ()=> cy.contains('Add Course'),
        addCourseBtn : ()=> cy.get('.MuiGrid-root > .MuiButtonBase-root'),
        addNewCourseTxt : ()=> cy.contains('Add New Course'),
        titleTxt :()=> cy.contains('Title'),
        titleField : ()=> cy.get('[data-testid="Title*"]'),
        descriptionTxt : ()=> cy.contains('Description'),
        descriptionField : ()=> cy.get('[data-testid="Description*"]'),
        catergoryBtn : ()=> cy.get('#demo-simple-select'),
        qualityAssuranceBtn : ()=> cy.get('[data-value="1"]'),
        premiumCourseBtn : ()=> cy.get('[data-testid="isPremium"]'),
        onlineBtn : ()=> cy.get('[data-testid="online"]'),
        courseUrl : ()=> cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),
        AddCourseBtn : ()=> cy.get('.css-tzsjye > .MuiButton-root'),
        courseCreatedSuccessfulTxt : ()=> cy.contains('Course created successfully'),
        muna101CourseTxt: ()=> cy.contains('Muna101'),
        muna101CourseBtn : ()=> cy.get(':nth-child(3) > .MuiCardContent-root > .MuiTypography-body1'),
        muna101CourseDetails : ()=> cy.get(':nth-child(1) > .MuiPaper-root'),
        deleteCourseBtn : ()=> cy.get('.css-wvpqgg'),
        deleteConfirmationTxt :()=> cy.get('#modal-modal-title'),
        deleteConfirmationBtn : ()=> cy.get('.MuiBox-root > .MuiButton-contained'),
        deletedSuccessfully : ()=> cy.contains('Course deleted successfully'),
        muna101Course : ()=> cy.contains('Muna101'),
        editCourse : ()=> cy.contains('Edit'),
        productDesignBtn : ()=> cy.get('.Mui-selected'),
        updatedCourseBtn : ()=> cy.get('.css-tzsjye > .MuiButton-root'),
        courseUpdateSuccess : ()=> cy.contains('Course updated successfully'),
    };
    

    openQualesApp(){
        this.pageElements.loadApp();
    }

    confirmTheLoginInformationDisplays(){
        this.pageElements.logintext().should("be.visible");
        this.pageElements.emailText().should("be.visible");
        this.pageElements.passwordText().should('be.visible');
        this.pageElements.landingPageLogo().should('be.visible');
    }

    typeCorrectEmailAddressAndPassword(){
        const correctEmailAddress = "ay@mail.com";
        const correctPassword = 'pass1234';
        this.pageElements.emailAddressInputField().type(correctEmailAddress);
        this.pageElements.passwordInputField().type(correctPassword);
    }

    clickLoginBtn(){
        this.pageElements.loginBtn().click();
    }

    confirmLoginSuccessful (){
        this.pageElements.ayobamiTxt().should('be.visible');
        this.pageElements.loginSuccesssfulMsg().should('be.visible'); 
    }

    confirmLogOutSuccessful (){
        this.pageElements.loginSuccessPromt().click();
        this.pageElements.logoutBtn().click();
        this.pageElements.logoutSuccessfulMsg().should('be.visible');
    }

    typeInCorrectEmailAddressAndCorrectPassword(){
        const inCorrectEmailAddress = "ayo@mail.com";
        const correctPassword = 'pass1234';
        this.pageElements.emailAddressInputField().type(inCorrectEmailAddress);
        this.pageElements.passwordInputField().type(correctPassword);
        this.pageElements.loginBtn().click();
    }
    confirmLoginUnsuccessful (){
        this.pageElements.loginUnsuccessful().should('be.visible');
         
    }
    
    typeCorrectEmailAddressAndIncorrectPassword(){
        const CorrectEmailAddress = "ay@mail.com";
        const inCorrectPassword = 'pass123456';
        this.pageElements.emailAddressInputField().type(CorrectEmailAddress);
        this.pageElements.passwordInputField().type(inCorrectPassword);
        this.pageElements.loginBtn().click();
    }
    confirmLoginUnsuccessful (){
        this.pageElements.loginUnsuccessful().should('be.visible');
    }

    typeincorrectEmailAddressAndIncorrectPassword(){
        const incorrectEmailAddress = "ayorrr@mail.com";
        const incorrectPassword = 'pass123456ddd';
        this.pageElements.emailAddressInputField().type(incorrectEmailAddress);
        this.pageElements.passwordInputField().type(incorrectPassword);
        this.pageElements.loginBtn().click();
    }
    confirmLoginUnsuccessful (){
        this.pageElements.loginUnsuccessful().should('be.visible');
    }

    createCourse1 (){
        // this.pageElements.addCourseTxt().should('be.visible');
        this.pageElements.addCourseBtn().click();
        // this.pageElements.addNewCourseTxt().should('be.visible');
        // this.pageElements.titleTxt().should('be.visible');  
        cy.viewport('macbook-16')  
        this.pageElements.titleField().click();
        const Title = 'Muna101';
        this.pageElements.titleField().type(Title);
        // this.pageElements.descriptionTxt().should('be.visible');
        this.pageElements.descriptionField().click();
        const Description = "Quales Practice";
        this.pageElements.descriptionField().type(Description);
        this.pageElements.catergoryBtn().click();
        this.pageElements.qualityAssuranceBtn().click();
        // this.pageElements.premiumCourseBtn().click();
        this.pageElements.onlineBtn().click();
        const CourseUrl = 'https://www.youtube.com/watch?v=81_GG0fFUFg'
        this.pageElements.courseUrl().click();
        this.pageElements.courseUrl().type(CourseUrl);
        this.pageElements.AddCourseBtn().click();
        this.pageElements.courseCreatedSuccessfulTxt().should('be.visible');
    }

    createCourse2 (){
        this.pageElements.addCourseBtn().click();
        cy.viewport('macbook-16')  
        this.pageElements.titleField().click();
        const Title = 'Muna102';
        this.pageElements.titleField().type(Title);
        this.pageElements.descriptionField().click();
        const Description = "Quales Practice 2";
        this.pageElements.descriptionField().type(Description);
        this.pageElements.catergoryBtn().click();
        this.pageElements.qualityAssuranceBtn().click();
        this.pageElements.onlineBtn().click();
        const CourseUrl = 'https://www.youtube.com/watch?v=81_GG0fFUFg'
        this.pageElements.courseUrl().click();
        this.pageElements.courseUrl().type(CourseUrl);
        this.pageElements.AddCourseBtn().click();
        this.pageElements.courseCreatedSuccessfulTxt().should('be.visible');
    }

    deleteCourse101 (){
        this.pageElements.muna101CourseBtn().click({force:true});
        this.pageElements.muna101CourseDetails().should('be.visible');
        this.pageElements.deleteCourseBtn().click();
        this.pageElements.deleteConfirmationTxt().should('be.visible');
        this.pageElements.deleteConfirmationBtn().click();
        this.pageElements.deletedSuccessfully().should('be.visible');
    }

    updateCourse101 (){
        this.pageElements.muna101Course().click({force:true});
        this.pageElements.editCourse().click({force:true});
        this.pageElements.titleField().click({force:true}).clear();
        const updatedTitle = 'Muna101 Updated';
        this.pageElements.titleField().type(updatedTitle);
        this.pageElements.descriptionField().click({force:true}).clear();
        const updatedDescription = "Quales Practice Updated";
        this.pageElements.descriptionField().type(updatedDescription);
        this.pageElements.catergoryBtn().click();
        this.pageElements.productDesignBtn().click({force:true});
        this.pageElements.onlineBtn().click();
        const updatedCourseUrl = "https://youtu.be/xet3WDk5cQo?si=k_9OHR_j3lBI1QC3";
        this.pageElements.courseUrl().click().clear();
        this.pageElements.courseUrl().type(updatedCourseUrl);
        this.pageElements.updatedCourseBtn().click();
        this.pageElements.courseUpdateSuccess().should('be.visible');   
    }
     
}

export const loginPage = new LoginPage ();