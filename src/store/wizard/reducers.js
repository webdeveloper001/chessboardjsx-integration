import actions from './actions'

const initialState = {
  stepsCompleted: [false, false, false, false],
  type: '',
  playFor: '',
  length: '',
  piece: '',
  wager: 0,
  playerMinutes: 0,
  moveSeconds: 0,
  currentStep: 0
}

const wizardpReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_STEPS_COMPLETED:
      return {
        ...state,
        stepsCompleted: action.value
      }
    case actions.SET_TYPE:
      return {
        ...state,
        type: action.value
      }
    case actions.SET_PLAY_FOR:
      return {
        ...state,
        playFor: action.value
      }
    case actions.SET_LENGTH:
      return {
        ...state,
        length: action.value
      }
    case actions.SET_PIECE:
      return {
        ...state,
        piece: action.value
      }
    case actions.SET_CURRENTSTEP:
      return {
        ...state,
        currentStep: action.value
      }
    case actions.SET_WAGER:
      return {
        ...state,
        wager: action.value
      }
    case actions.SET_PLAYERMINUTES:
      return {
        ...state,
        playerMinutes: action.value
      }
    case actions.SET_MOVESECONDS:
      return {
        ...state,
        moveSeconds: action.value
      }
    case actions.GO_TO_NEXTSTEP:
      const completedSteps = Object.assign([], state.stepsCompleted)
      completedSteps[state.currentStep] = true
      completedSteps[state.currentStep + 1] = true
      return {
        ...state,
        currentStep: Math.min(3, state.currentStep + 1),
        stepsCompleted: completedSteps
      }
    case actions.GO_TO_PREVSTEP:
      return {
        ...state,
        currentStep: Math.max(0, state.currentStep - 1)
      }
    default:
      return state
  }
}

export default wizardpReducer
