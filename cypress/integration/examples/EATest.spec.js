require('cypress-xpath')
describe('open ea site', () => {

    it('open ea site', () => {
        cy.visit("https://www.gassaferegister.co.uk/");
    
        cy.get('input[id=Postcode]').type("London");// need to write css 

        cy.xpath("//input[@id='Postcode']/following-sibling::span").click();

        // cy.get("css of element").select("drop down option name");
        //cy.get('#Postcode').type("London");

    }
    )
})