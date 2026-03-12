import userData from "../fixtures/users/userData.json"


describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField : '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboradGrid: '.orangehrm-dashboard-grid',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericInputField: '[data-v-1f99f73c]',
    dateCloseButton: '.--close',
    buttonSave: '[type="submit"]'
  }

  it('User Info Update - Success', () => { //Entrar na aba My Info
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboradGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Giovana')
    cy.get(selectorsList.middleNameField).clear().type('Almeida')
    cy.get(selectorsList.lastNameField).clear().type('de Caldas')
    cy.get(selectorsList.genericInputField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericInputField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericInputField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericInputField).eq(7).clear().type('2026-03-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericInputField).eq(8).clear().type('2000-03-15')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericInputField).eq(9).clear().type('TestFiel')
    cy.get(selectorsList.buttonSave).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })
})