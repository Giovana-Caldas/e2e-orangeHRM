class HeaderPage {
    selectorsList() {
        const selectors = {
            userMenu: '.oxd-userdropdown-tab',
            menu: '[role="menu"]'
        }

        return selectors
    }

    clickLogout() {
        cy.get(this.selectorsList().userMenu).click()
        cy.get(this.selectorsList().menu).contains('Logout').click()
    }
}

export default HeaderPage