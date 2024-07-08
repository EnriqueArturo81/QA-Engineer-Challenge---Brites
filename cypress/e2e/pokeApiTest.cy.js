describe('PokeAPI Berry Endpoint Tests', () => {

    const validId     = 1;
    const invalidId   = 9999;  
    const validname   = "cheri";
    const invalidName = "pokeloco";
    const baseURL     = 'https://pokeapi.co/api/v2';
  
    it('should return expected response for a valid ID', () => {
      cy.request(`${baseURL}/berry/${validId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', validId);
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('growth_time');
        
      });
    });
  
    it('should return error response for an invalid ID', () => {
      cy.request({
        url: `${baseURL}/berry/${invalidId}`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.eq('Not Found');
      });
    });

    
    it('should return expected response for a valid NAME', () => {
        cy.request(`${baseURL}/berry/${validname}`).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('id', validId);
          expect(response.body).to.have.property('name');
          expect(response.body).to.have.property('growth_time');
          
        });
      });
    
      it('should return error response for an invalid NAME', () => {
        cy.request({
          url: `${baseURL}/berry/${invalidName}`,
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.eq('Not Found');
        });
      });
  
  });

  describe('PokeAPI Berry Flavor Endpoint Tests', () => {

    const validFlavorName = 'spicy';
    const baseURL = 'https://pokeapi.co/api/v2';
  
    it('should return expected response for a valid flavor name', () => {
      cy.request(`${baseURL}/berry-flavor/${validFlavorName}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', validFlavorName);
        expect(response.body).to.have.property('berries');
    
      });
    });
  
    it('should find the berry with the highest potency and validate its details', () => {
      cy.request(`${baseURL}/berry-flavor/${validFlavorName}`).then((response) => {
            const berries = response.body.berries;
    
            // Find the berry with the highest potency
            const highestPotencyBerry = berries.reduce((max, berry) => 
            berry.potency > max.potency ? berry : max, berries[0]);
    
            // Request details for the berry with the highest potency
            cy.request(`${baseURL}/berry/${highestPotencyBerry.berry.name}`).then((berryResponse) => {
                expect(berryResponse.status).to.eq(200);
                expect(berryResponse.body).to.have.property('name', highestPotencyBerry.berry.name);
                expect(berryResponse.body).to.have.property('id');
                expect(berryResponse.body).to.have.property('growth_time');
            
            });
      });
    });
  
  });
  
  