import { mount } from 'cypress/react'
import Landing from '../../components/landingPage/Landing'
describe('landing page',()=>{
  it('should launch landing page',()=>{
    cy.visit('http://localhost:3000')
    cy.get('[data-id=vp]').contains('Never have to worry about notes again')
    cy.get('[data-id=landing-description]')
    cy.get('[data-id=getStartedBtn').contains('Get started')
  })
  it('get started button should navigate to login page',()=>{
    cy.visit('http://localhost:3000')
      cy.get('[data-id=getStartedBtn]').click()
      cy.url().should('include','/auth/login')
  })
})