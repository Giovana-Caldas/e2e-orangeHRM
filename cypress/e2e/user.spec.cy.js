import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Test', () => {

  it('User Info Update - Success', () => { 
    loginPage.acessLoginPage()
    loginPage.loginInitUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('Employee', 'OtherIdTest', 'DriversLicenseTest', '2026-03-12')
    myInfoPage.fillAdditionalPersonalInfo('2000-15-03')
    myInfoPage.fillCustomFields('testField')
    myInfoPage.saveFormButton()
  })
  })