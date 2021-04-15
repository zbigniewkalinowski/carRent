import { buttonHandler, alertHandler, dateFieldHandler, tableHandler } from "../elements/handlers"
import { testData } from "../elements/testData"

const dayjs = require('dayjs')

const searchButton = buttonHandler('submit')
const alertDialog = alertHandler('alert-danger')
const pickupDateField = dateFieldHandler('pickup')
const dropOffDateField = dateFieldHandler('dropoff')
const resultsTable = tableHandler('search-results')

const todaysDate = dayjs().format('YYYY-MM-DD')
const tomorrowDate = dayjs().add(1, 'days').format('YYYY-MM-DD')

describe('01 - search page test', () => {
  before(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('Check if search button is enabled', () => {
    searchButton.checkIfEnabled()
  })

  it('Search without filling date fields and check alert', () => {
    searchButton.clickButton()
    alertDialog.checkIfVisible()
    alertDialog.checkMessage(testData.noDatesErrorMessage)
  })

  it("Search with only pickup date edited and check alert", () => {
    pickupDateField.type(todaysDate)
    searchButton.clickButton()
    alertDialog.checkMessage(testData.noDatesErrorMessage)
    pickupDateField.clear()
  })

  it("Search with only drop-off date edited and check alert", () => {
    dropOffDateField.type(todaysDate)
    searchButton.clickButton()
    alertDialog.checkMessage(testData.noDatesErrorMessage)
    dropOffDateField.clear()
  })

  it("Enter valid dates and check results", () => {
    pickupDateField.type(todaysDate)
    dropOffDateField.type(tomorrowDate)
    searchButton.clickButton()
    resultsTable.checkIfVisible()
    resultsTable.checkColumnsNames(testData.resultsTableColumnNames)
    resultsTable.checkContentForEachRow(5, 'Rent')
    pickupDateField.clear()
    dropOffDateField.clear()
  })
})