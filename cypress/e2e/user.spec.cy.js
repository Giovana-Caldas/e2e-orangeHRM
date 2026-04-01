import userData from "../fixtures/users/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

const Chance = require('chance');

const chance = new Chance();
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

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string(),)
    myInfoPage.fillEmployeeDetails(chance.integer({ min: 0, max: 10 }), chance.integer(), chance.floating({ min: 0, max: 10 }), '2026-02-05')
    myInfoPage.fillAdditionalPersonalInfo('2000-15-03')
    myInfoPage.fillCustomFields(chance.integer({ min: 0, max: 10 }))
    myInfoPage.saveFormButton()
  })
  })