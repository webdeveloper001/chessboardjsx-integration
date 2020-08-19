import actions from './actions'

const initialState = {
  selectedLength: '',
  rankedUserIds: [1,2,3,4],
  users: {
    1: {
      id: 1,
      country: 'US',
      name: 'Trump',
      length: 'bullet',
      faborite: true,
      stars: 1933,
      online: true
    },
    2: {
      id: 2,
      country: 'US',
      name: 'Trump',
      length: 'bullet',
      faborite: true,
      stars: 1933,
      online: true
    },
    3: {
      id: 3,
      country: 'US',
      name: 'Trump',
      length: 'bullet',
      faborite: true,
      stars: 1933,
      online: true
    },
    4: {
      id: 4,
      country: 'US',
      name: 'Trump',
      length: 'bullet',
      faborite: true,
      stars: 1933,
      online: true
    },
  }
}

const rrankReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_SELECTED_LENGTH:
      return {
        ...state,
        selectedLength: action.value
      }
    default:
      return state
  }
}

export default rrankReducer
