import { buttonHandler, dateFieldHandler, tableHandler, chooselistHandler, textFieldHandler, infoboxHandler } from "../elements/handlers"
import { testData } from "../elements/testData"
import { createRandomId } from '../elements/utils'

const dayjs = require('dayjs')

const searchButton = buttonHandler('submit')
const countryField = chooselistHandler('country')
const cityField = chooselistHandler('city')
const modelField = textFieldHandler('model')

const pickupDateField = dateFieldHandler('pickup')
const dropOffDateField = dateFieldHandler('dropoff')
const resultsTable = tableHandler('search-results')
const contentView = infoboxHandler('content')

const nameField = textFieldHandler ('name')
const lastNameField = textFieldHandler('last_name')
const cardNumberField = textFieldHandler('card_number')
const emailField = textFieldHandler('email')

const todaysDate = dayjs().format('YYYY-MM-DD')
const tomorrowDate = dayjs().add(1, 'days').format('YYYY-MM-DD')

describe('03 - rent functionality test', () => {
    let randomId

  before(() => {
    cy.visit(Cypress.config().baseUrl)
    randomId = createRandomId(5)
  })

  it('Enter data, search and check model', () => {
    countryField.selectOption(testData.countries[1].value)
    cityField.selectOption(testData.cities[1].value)
    modelField.type(testData.models[1])
    pickupDateField.type(todaysDate)
    dropOffDateField.type(tomorrowDate)
    searchButton.clickButton()
    resultsTable.clickButtonInTable(0, 5)

    // TODO - bug with countries must be fixed
    // contentView.checkIfContains(testData.countries[1].text)
    // contentView.checkIfContains(testData.cities[1].text)

    contentView.checkIfContains(todaysDate)
    contentView.checkIfContains(tomorrowDate)
    contentView.clickButtonInBox()

    nameField.type('first' + randomId)
    lastNameField.type('last' + randomId)
    cardNumberField.type(testData.cardNumber)
    emailField.type(randomId + '@test.te')
    contentView.clickButtonInBox()
  })
})