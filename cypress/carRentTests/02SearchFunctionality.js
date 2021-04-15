import { buttonHandler, dateFieldHandler, tableHandler, chooselistHandler, textFieldHandler } from "../elements/handlers"
import { testData } from "../elements/testData"

const dayjs = require('dayjs')

const searchButton = buttonHandler('submit')
const countryField = chooselistHandler('country')
const cityField = chooselistHandler('city')
const modelField = textFieldHandler('model')

const pickupDateField = dateFieldHandler('pickup')
const dropOffDateField = dateFieldHandler('dropoff')
const resultsTable = tableHandler('search-results')

const todaysDate = dayjs().format('YYYY-MM-DD')
const tomorrowDate = dayjs().add(1, 'days').format('YYYY-MM-DD')

describe('02 - search functionality test', () => {
  before(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('Enter data, search and check model', () => {
    countryField.selectOption(testData.countries[0].value)
    countryField.checkIfOptionChosen(testData.countries[0].text)
    cityField.selectOption(testData.cities[0].value)
    cityField.checkIfOptionChosen(testData.cities[0].text)
    modelField.type(testData.models[0])
    modelField.checkValue(testData.models[0])
    pickupDateField.type(todaysDate)
    dropOffDateField.type(tomorrowDate)
    searchButton.clickButton()
    resultsTable.checkContentForEachRow(1, testData.models[0])
  })
})