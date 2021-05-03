'use strict';

const server = require('../src/ server.js');

const superTest = require('supertest');
const serverRequest = superTest(server.app);// this will be my fake server

describe('Testing Server Module', ()=> {
  it('404 on a bad route', async ()=> {
    let response = await serverRequest.get('/not-found-route');
    expect(response.status).toEqual(404);
  });
  it('404 bad method', async ()=> {
    let response = await serverRequest.put('/person');
    expect(response.status).toEqual(404);
  });

  it('500 no name', async ()=> {
    let response = await serverRequest.get('/person');
        
    expect(response.status).toEqual(500);
        
  });

  it('200 every thing good ', async ()=> {
    let response = await serverRequest.get('/person?name=abu-al3ees');
        
    expect(response.status).toEqual(200);
  });
  it('response object is correct', async ()=> {
    let response = await serverRequest.get('/person?name=mohammad');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      name: 'mohammad',
    });
  });
});