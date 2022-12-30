import { getModeForUsageLocation } from "typescript";

it('Google test', function(){

    cy.visit('https://google.com');
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('.gLFyf').type('Automation Step By Step').type('{enter}');
    cy.wait(3000);
    cy.get('[href="https://automationstepbystep.com/"] > .LC20lb').click();
})
