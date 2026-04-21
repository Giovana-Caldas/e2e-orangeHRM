class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField : '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            dashboradGrid: '.orangehrm-dashboard-grid',
            wrongAlert: '.oxd-alert',
            checkLoginPage: '[data-v-8a31f039]'
        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('/auth/login')
    }

    loginInitUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccesInvalid() {
        cy.get(this.selectorsList().wrongAlert)
    }

    checkLoginPage() {
        cy.get(this.selectorsList().checkLoginPage)
    }

}

export default LoginPage 