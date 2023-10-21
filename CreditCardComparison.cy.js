
describe('This spec will be used to test Compare Credit Cards functionality', () => 
{
 
  beforeEach(() => {
    cy.visit('https://www.hsbc.co.in/')
  })
  it('Validated the ATM search', () => {
    // 1. Open https://www.hsbc.co.in/
   
//2.click on Banking menu.
cy.xpath('//*[@id="sidebar"]/div/ul/li[1]/div[1]/span[2]').click({force:true});
cy.wait(2000);

cy.xpath('//*[@id="sidebar"]/div/ul/li[1]/div[2]/div/div[1]/div/div[1]/div/div[1]/a/h2').click({force:true});

cy.xpath('//a[@id="listing_main_button_1"]').click();
cy.wait(2000);
cy.xpath('//div[@role="checkbox"]').click({multiple:true})

cy.xpath('//button[@class="A-BTNP-RW-ALL"]').click();


})
})
