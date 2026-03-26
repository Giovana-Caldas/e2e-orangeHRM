import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Test', () => {
  
  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginInitUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccesInvalid()
  })

  it('Login - Success', () => { 
    loginPage.acessLoginPage()
    loginPage.loginInitUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage
    
  })
})