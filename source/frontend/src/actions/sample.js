import { SAMPLE_ACTIONS } from 'constants/actions'

function action(type, payload = {}) {
  return { type, payload }
}

export const sample = {
  hello: name => action(SAMPLE_ACTIONS.HELLO, { name })
}
