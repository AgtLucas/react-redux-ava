import test from 'ava'
import { action } from 'actions' // import from 'src/actions/index.js'

test('Returns payload.', t => {
  t.deepEqual(
    action('FOO', 'bar'),
    { type: 'FOO', payload: 'bar' }
  )
})

test('Skips payload if it\'s not defined.', t => {
  t.deepEqual(
    action('FOO'),
    { type: 'FOO' }
  )
})

test('Doesn\'t skip a falsy, but defined payload.', t => {
  t.deepEqual(
    action('FOO', false),
    { type: 'FOO', payload: false }
  )
})
