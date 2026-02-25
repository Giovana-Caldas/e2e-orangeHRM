describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField : '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongAlert: '.oxd-alert'
  }


  it('Login - Success', () => { //Login com sucesso
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click() 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => { //Login sem sucesso
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test123') 
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongAlert)
  })
})