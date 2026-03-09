import userData from "../fixtures/users/userData.json"


describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField : '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboradGrid: '.orangehrm-dashboard-grid',
    wrongAlert: '.oxd-alert',
  }

  it('Login - Success', () => { //Login com sucesso
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboradGrid)
  })
  it('Login - Fail', () => { //Login sem sucesso
    cy.visit('/auth/login') 
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password) 
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongAlert)
  })
})