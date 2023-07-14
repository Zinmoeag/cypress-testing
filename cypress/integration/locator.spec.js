/// <reference types="cypress" />

context('locator using get', () => {
  beforeEach(() => {
    cy.visit('/elements')
  })


  it("get",() => {
  // get one and more components

    //get all elements by tag name
  	cy.get("button")

    //get all elements by class name
  	cy.get(".btn-with-class")

    //get all elements by attribute
    cy.get("[type=submit]")

    //get all element by tag and classname
  	cy.get("button.btn-with-class")

    //get all element by tag and classname and id
  	cy.get("button.Elements-btn#btn-with-id")

    //make it own command getByTestId
    cy.getByTestId("btn-id-1")

  })


  it("contains" , () => {

    //get one element

    // get element by text using regular expression
    cy.contains(/unique text/i)

    //get element by text and selector
    cy.contains("[type='submit']",/not unique text/i)

    //get elemnt by text and tag
    // get text from specific element
    cy.contains("form",/not unique text/i)
  })

  it("find",() => {
    // get element by find from parent element

    cy.get("form").find(".btn-2")
  })

})