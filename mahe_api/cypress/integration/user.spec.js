
describe('USER API', () => {
    const body =  [
        {
          "id": 0,
          "username": "mahendra_p_y",
          "firstName": "mahendra",
          "lastName": "hapsara",
          "email": "mahendra.@mail.com",
          "password": "1234",
          "phone": "08666",
          "userStatus": 0
        }
    ];

    const postUserCreateWithList = item => cy.request('POST', `user/createWithList`, item);
    const getUser = username => cy.request('GET', `user/${username}`);
    const deleteUser = username => cy.request('DELETE', `user/${username}`);
    // const getLogin = () =>cy.request('GET', 'user/login');
    it('POST User success', () => {
      postUserCreateWithList(body).then((res) => {
        expect(res.status).to.equal(200);
      })
    })
    it('GET User by id', () => {
        getUser(body[0].username).then((res) => {
          expect(res.status).to.equal(200);
        })
    })
    it('DELETE User by id', () => {
        deleteUser(body[0].username).then((res) => {
          expect(res.status).to.equal(200);
        })
    })
});
  