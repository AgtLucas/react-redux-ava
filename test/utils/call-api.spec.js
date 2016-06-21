import test from 'ava'
import callApi, { API_URL } from 'utils/call-api'
import nock from 'nock'

test('Method defaults to GET', t => {
  const reply = { foo: 'bar' }

  nock(API_URL)
    .get('/foo')
    .reply(200, reply)

  return callApi('foo').then(({ response, error }) => {
    t.ifError(error)

    t.deepEqual(response, reply)
  })
})

test('Sends the body', t => {
  const body = { id: 5 }
  const reply = { foo: 'bar' }

  nock(API_URL)
    .post('/foo', body)
    .reply(200, reply)

  return callApi('foo', 'post', body).then(({ response, error }) => {
    t.ifError(error)
    t.deepEqual(response, reply)
  })
})
