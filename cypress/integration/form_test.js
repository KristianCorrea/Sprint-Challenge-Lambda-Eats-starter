describe('My First Test', function(){
  beforeEach(function(){
      cy.visit('http://localhost:3000/');
  })
  it('Testing Text Input', function(){
      cy.get('button').click()
      cy.get(':nth-child(3) > input').type('Tyrone Williams').should('have.value', 'Tyrone Williams')
  })
  it('Testing Drop Select', function(){
      cy.get('button').click()
      cy.get('select').select('small').should('have.value', 'small')
        .select('medium').should('have.value', 'medium')
        .select('large').should('have.value', 'large')
  })
  it('Testing home button', function(){
    cy.get('button').click()
    cy.get('.active > p').click()
  })
  it('Test form and submit', function(){
    cy.get('button').click()
    cy.get(':nth-child(3) > input').type('Big Smoke').should('have.value', 'Big Smoke')
    cy.get('select').select('large').should('have.value', 'large')
    cy.get(':nth-child(6) > input').click()
    cy.get(':nth-child(10) > input').type('I WANT EXTRA CHEESE WITH EXTRA DIP').should('have.value', 'I WANT EXTRA CHEESE WITH EXTRA DIP')
    cy.get('button').click()
    //SECONDARY CUSTOMER
    cy.get(':nth-child(3) > input').type('Timmy Thick').should('have.value', 'Timmy Thick')
    cy.get('select').select('small').should('have.value', 'small')
    cy.get(':nth-child(7) > input').click()
    cy.get(':nth-child(8) > input').click()
    cy.get(':nth-child(9) > input').click()
    cy.get(':nth-child(10) > input').type('Extra THICC').should('have.value', 'Extra THICC')
    cy.get('button').click()
    //Third Customer
    cy.get(':nth-child(3) > input').type('Sonic').should('have.value', 'Sonic')
    cy.get('select').select('medium').should('have.value', 'medium')
    cy.get(':nth-child(6) > input').click()
    cy.get(':nth-child(7) > input').click()
    cy.get(':nth-child(8) > input').click()
    cy.get(':nth-child(10) > input').type('Make it Fast!').should('have.value', 'Make it Fast!')
    cy.get('button').click()
  })
  
})

// describe('Input and submission tests', function(){
//     beforeEach(function(){
//         cy.visit('http://localhost:3000/');
//     })
//     it('Testing Username, Email, Password, and Checkbox Input and Button Submission', function(){
//         cy.get(`input[name='name']`)
//           .type('Tyrone Williams')
//           .should('have.value', 'Tyrone Williams')
//         cy.get(`input[name='email']`)
//           .type('BigTyrone@swag.com')
//           .should('have.value', 'BigTyrone@swag.com')
//         cy.get(`input[name='password']`)
//           .type('Ubereatschickenwings')
//           .should('have.value', 'Ubereatschickenwings')
//         cy.get(`input[name='term']`)
//           .check()
//           .should('be.checked');
//         cy.get(`button`)
//           .click()
//     })
//     it('Test Blank Input Valid',function(){
//         cy.get(`input[name='name']`).type('h{backspace}')
//         cy.contains('Name cannot be blank')
//     })
//     //stretch
//     it('Test Min Characters Input Validation', function(){
//         cy.get(`input[name='name']`).type('hi').should('have.value', 'hi')
//         cy.contains('Name must be more than 2 characters long')
//     })
// })

