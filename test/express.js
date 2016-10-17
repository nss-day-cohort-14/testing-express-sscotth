'use strict'

const { property } = require('chai').assert
const request = require('supertest')

const app = require('../server')

describe('express', () => {
  it('`GET /` should respond with JSON', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(done)
  })

  it('`POST /addresses` should respond with 201 and JSON with an id', (done) => {
    request(app)
      .post('/addresses')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(res => property(res.body, '_id'))
      .end(done)
  })

  it('`DELETE /addresses/123` should respond with 204', (done) => {
    request(app)
      .delete('/addresses/123')
      .expect(204)
      .end(done)
  })
})
