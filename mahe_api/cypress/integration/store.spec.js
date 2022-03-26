
describe('STORE API', () => {
    const body =  {
      "id": 0,
      "petId": 0,
      "quantity": 0,
      "shipDate": "2022-03-25T15:43:03.973Z",
      "status": "placed",
      "complete": true
    };

    const postOrder = item => cy.request('POST', `store/order`, item);
    const getOrder = id => cy.request('GET', `store/order/${id}`);
    const deleteOrder = id => cy.request('DELETE', `store/order/${id}`);
    const getInventory = () =>cy.request('GET', 'store/inventory');
    it('POST Order success', () => {
      postOrder(body).then((res) => {
        expect(res.status).to.equal(200);
      })
    })
    it('GET Order by id', () => {
        getOrder(body.id).then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body.id).to.equal(body.id);
        })
    })
    it('GET Order by false id', () => {
        getOrder(1).then((res) => {
          expect(res.status).to.equal(404);
          expect(res.body.id).to.equal(body.id);
        })
    })
    it('DELETE Order by id', () => {
        deleteOrder(body.id).then((res) => {
          expect(res.status).to.equal(200);
        })
    })
    it('GET Inventory', () => {
        getInventory().then((res) => {
          expect(res.status).to.equal(200);
        })
    })
});
  