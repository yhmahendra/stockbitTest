
describe('POST API', () => {
    const body =  {
       "id": 1,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available"
    };
    const postPet = item => cy.request('POST', 'pet', item);
    const getPet = id => cy.request('GET', `pet/${id}`);
    const deletePet = id => cy.request('DELETE', `pet/${id}`);
    it('POST Pet success', () => {
      postPet(body).then((res) => {
        expect(res.status).to.equal(200);
      })
    })
    it('GET Pet by id', () => {
        getPet(body.id).then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body.id).to.equal(body.id);
        })
    })
    it('DELETE Pet by id', () => {
        deletePet(body.id).then((res) => {
          expect(res.status).to.equal(200);
        })
    })
});
  