import HeaderPage from "../pages/headerPage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import userData from "../fixtures/users/userData.json"

const headerPage = new HeaderPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Logout Orange HRM Test', () => {

    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('response')) {
        return false
    }
    })

    it('Logout', () => {
        loginPage.acessLoginPage()
        loginPage.loginInitUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage
        headerPage.clickLogout()
        loginPage.checkLoginPage()
    })
})