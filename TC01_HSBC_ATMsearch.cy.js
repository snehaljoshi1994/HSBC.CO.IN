describe('This spec will be used to test ATM search functionality', () => 
{
 
  beforeEach(() => {
    cy.visit('https://www.hsbc.co.in/')
  })
 
    it('Validated the ATM search', () => {
    // 1. Open https://www.hsbc.co.in/
   
    //2. Click on Find your nearest branch or ATM link in footer section
    cy.xpath("//footer//a[contains(text(),'Find your')]").click()
    

   //3. Validate in new page the URL has String = ‘/ways-to-bank/branches/’
   cy.url().should('include', '/ways-to-bank/branches/')

   //Click on Branch & ATM Locator
   cy.xpath("//a[@class='A-BTNP-RW-ALL']").click()
   cy.wait(2000)

   //Tpe into Search bar and select relevent Option
   cy.xpath("//input[@role='combobox']").type("Hadapsar").type('{downarrow}').type('{enter}')

  //Locate to the address.
   cy.xpath("//h2[contains(text(),'Amar Avinash Corporate City')]").click()
  
  })
  
})


