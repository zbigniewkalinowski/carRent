export const buttonHandler = (buttonType) => {
    const selector = '[type="' + buttonType + '"]'

    return {
        checkIfEnabled: () => {
            cy.get(selector)
                .should('be.enabled')
        },
        clickButton: () => {
            cy.get(selector)
                .click()
        }
    }
}

export const alertHandler = (alertType) => {
    const selector = '[class="alert ' + alertType + '"]'

    return {
        checkIfVisible: () => {
            cy.get(selector)
                .should('be.visible')
        },
        checkMessage: (text) => {
            cy.get(selector)
                .should('contain', text)
        }
    }
}

export const dateFieldHandler = (fieldId) => {
    const selector = '[id="' + fieldId + '"]'

    return {
        type: (date) => {
            cy.get(selector)
                .type(date)
        },
        clear: () => {
            cy.get(selector)
                .clear()
        }
    }
}

export const tableHandler = (tableId) => {
    const selector = '[id="' + tableId + '"]'

    return {
        checkIfVisible: () => {
            cy.get(selector)
            .should('be.visible')
        },
        checkColumnsNames: (columnsNames) => {
            columnsNames.forEach((name) => {
                cy.get(selector)
                    .find('thead th')
                    .should('contain', name)
            })
        }
    }
}