/// <reference types="Cypress"/>


it('By ID', ()=>{
     cy.visit('https://facebook.com')
     cy.get('#email')
});

it('By Tag', ()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    //cy.get('span[class="DocSearch-Button-Placeholder"]').click()
    //cy.get('.DocSearch-Input')
    cy.get('nav')
});
it('By Different Tag', ()=>{
    cy.visit('https://facebook.com')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});

it.only('By Contains name', ()=>{
    cy.visit('https://next.privat24.ua')
    cy.get('*[class^="card"]')
});

comment

it('Using get with find and eq', ()=>{
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
});

it.only('Using get with find and eq', ()=>{
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('nav').find('ul').find('li').find('a').contains('Syntax')
});