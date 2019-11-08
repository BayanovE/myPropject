import { SAMPLE_ACTIONS } from 'constants/actions'

export default function sample(state = {}, action) {
  switch (action.type) {
    case SAMPLE_ACTIONS.HELLO:
      return {
        ...state,
        name: action.payload.name
      }
      default:
  }
  return state
}
