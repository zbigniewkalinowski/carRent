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
        },
        checkContentForEachRow: (columnNumber, content) => {
            cy.get(selector)
                .find('tbody tr').each((row) => {
                    cy.wrap(row).find('td').eq(columnNumber).should('contain', content)
                })
        },
        clickButtonInTable: (rowNumber, columnNumber) => {
            cy.get(selector)
                .find('tbody tr').eq(rowNumber)
                .find('td').eq(columnNumber)
                .find('.btn').click()
        }
    }
}

export const chooselistHandler = (fieldId) => {
    const selector = '[id="' + fieldId + '"]'

    return {
        selectOption: (value) => {
            cy.get(selector)
                .select(value)
        },
        checkIfOptionChosen: (text) => {
            cy.get(selector)
                .should('contain', text)
        }
    }
}

export const textFieldHandler = (fieldId) => {
    const selector = '[id="' + fieldId + '"]'
    
    return {
        type: (value) => {
            cy.get(selector)
                .type(value)
        },
        clear: () => {
            cy.get(selector)
                .clear()
        },
        checkValue: (value) => {
            cy.get(selector)
                .should('have.value', value)
        }
    }
}

export const infoboxHandler = (boxId) => {
    const selector = '[id="' + boxId + '"]'

    return {
        checkIfContains: (value) => {
            cy.get(selector)
            .should('contain', value)
        },
        clickButtonInBox: () => {
            cy.get(selector)
                .find('.btn').click()
        }
    }
}