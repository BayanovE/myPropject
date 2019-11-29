// import { SAMPLE_ACTIONS } from 'constants/actions'

// export default function sample(state = {}, action) {
//   switch (action.type) {
//     case SAMPLE_ACTIONS.HELLO:
//       return {
//         ...state,
//         name: action.payload.name
//       }
//       default:
//   }
//   return state
// }
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}