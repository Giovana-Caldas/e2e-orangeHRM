class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            genericInputField: '[data-v-1f99f73c]',
            dateCloseButton: '.--close',
            buttonSave: '[type="submit"]',
            selectFields: '.oxd-select-text',
            selectOptions: '.oxd-select-text-input',
        }

        return selectors
    }
    
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate ) {
        cy.get(this.selectorsList().genericInputField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericInputField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericInputField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericInputField).eq(7).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillAdditionalPersonalInfo(dateOfBirth) {
        cy.get(this.selectorsList().selectFields).eq(0).click()
        cy.contains('Brazilian').click()
        cy.get(this.selectorsList().selectFields).eq(1).click()
        cy.contains('Married').click()
        cy.get(this.selectorsList().genericInputField).eq(8).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillCustomFields(testField) {
        cy.get(this.selectorsList().selectFields).eq(2).click()
        cy.contains('O+').click()
        cy.get(this.selectorsList().genericInputField).eq(9).clear().type(testField)
    }

    saveFormButton() {
        cy.get(this.selectorsList().buttonSave).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('#oxd-toaster_1')
    }

    }

export default MyInfoPage