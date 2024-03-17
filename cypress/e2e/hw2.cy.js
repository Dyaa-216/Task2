describe('hw2', () => {
    // before(() => {
    //     cy.visit('/')
    //     cy.login("admin@yourstore.com","admin")
    //     cy.wait(6000)
    //     cy.get('.fa.fa-bars').click()
    //     cy.get('p').contains('Catalog').click()
    //     cy.get("p").contains("Products").click()
    //     cy.get('h1').contains('Products')
    //     cy.get('.fas.fa-plus-square').click()   
    //     cy.get('[name="Name"]').type("PS")
    //     cy.get('[aria-describedby="SelectedCategoryIds_taglist"]').click()
    //     cy.get('li').contains("Electronics >> Others").click()
    //     cy.get('[title="0.0000 USD"]').eq(0).click() 
    //     cy.get('[name="Price"]').type("5000")
    //     cy.get('[name="save"]').click()
    //     cy.get('div').contains("The new product has been added successfully.") 

    //   });
    it('login', () => {
        cy.visit('/')
        cy.login("admin@yourstore.com","admin")
    });
    it.only('addProduct', () => {
        cy.visit('/')
        cy.login("admin@yourstore.com","admin")
        cy.wait(6000)
        cy.get('.fa.fa-bars').click()
        cy.get('p').contains('Catalog').click()
        cy.get("p").contains("Products").click()
        cy.get('h1').contains('Products')
        cy.get('.fas.fa-plus-square').click()   
        cy.get('[name="Name"]').type("Laptop123")
        cy.screenshot('product-name-added')
        cy.get('[aria-describedby="SelectedCategoryIds_taglist"]').click()
        cy.get('li').contains("Electronics >> Others").click()
        cy.get('[title="0.0000 USD"]').eq(0).click() 
        cy.get('[name="Price"]').type("3000")
        cy.get('[name="save"]').click()
        cy.get('div').contains("The new product has been added successfully.")       

    });
    it('searchProduct', () => {
        cy.visit('/')
        cy.login("admin@yourstore.com","admin")
        cy.wait(6000)
        cy.get('.fa.fa-bars').click()
        cy.get('p').contains('Catalog').click()
        cy.get("p").contains("Products").click()
        cy.get('h1').contains('Products')
        cy.wait(6000)
        cy.get(".search-text").click()
        cy.wait(1000)
        cy.get('#SearchProductName').type("Laptop123")
        cy.get("#search-products").click()
        cy.wait(6000)
        cy.get('.odd').should('be.visible')
    });

    it('deleteAftersearchProduct', () => {
      
        cy.wait(6000)
        
        // cy.get('.fa.fa-bars').click()
        // cy.get("p").contains("Products").click()
        // cy.get('h1').contains('Products')
        
    
        cy.wait(6000)
        cy.get(".search-text").click()
        cy.wait(1000)
        cy.get('#SearchProductName').type("PS")
        cy.get("#search-products").click()
        cy.wait(6000)
        cy.get('.odd').should('be.visible')
        cy.get('input.mastercheckbox').eq(0).check({ force: true });

        cy.get('#delete-selected').click()
        cy.get('#delete-selected-action-confirmation-submit-button').click()
        cy.contains("No data available in table")
    });
    it('', () => {
        cy.visit('/')
        cy.login("admin@yourstore.com","admin")
        cy.wait(6000)
        cy.get('.fa.fa-bars').click()
        cy.get('p').contains('Catalog').click()
        cy.get("p").contains("Products").click()
        cy.get('h1').contains('Products')
        
    });
});