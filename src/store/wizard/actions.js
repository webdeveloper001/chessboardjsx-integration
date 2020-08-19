const actions = {
  SET_STEPS_COMPLETED: 'SET_STEPS_COMPLETED',
  SET_TYPE: 'SET_TYPE',
  SET_PLAY_FOR: 'SET_PLAY_FOR',
  SET_LENGTH: 'SET_LENGTH',
  SET_PIECE: 'SET_PIECE',
  SET_CURRENTSTEP: 'SET_CURRENTSTEP',
  GO_TO_NEXTSTEP: 'GO_TO_NEXTSTEP',
  GO_TO_PREVSTEP: 'GO_TO_PREVSTEP',
  SET_WAGER: 'SET_WAGER',
  SET_PLAYERMINUTES: 'SET_PLAYERMINUTES',
  SET_MOVESECONDS: 'SET_MOVESECONDS',

  setStepsCompleted: (value) => (dispatch) => {
    dispatch({ type: actions.SET_STEPS_COMPLETED, value})
  },
  setType: (value) => (dispatch) => {
    dispatch({ type: actions.SET_TYPE, value})
  },
  setPlayFor: (value) => (dispatch) => {
    dispatch({ type: actions.SET_PLAY_FOR, value})
  },
  setLength: (value) => (dispatch) => {
    dispatch({ type: actions.SET_LENGTH, value})
  },
  setPiece: (value) => (dispatch) => {
    dispatch({ type: actions.SET_PIECE, value})
  },
  setCurrentStep: (value) => (dispatch) => {
    dispatch({ type: actions.SET_CURRENTSTEP, value})
  },
  setWager: (value) => (dispatch) => {
    dispatch({ type: actions.SET_WAGER, value })
  },
  setPlayerMinutes: (value) => (dispatch) => {
    dispatch({ type: actions.SET_PLAYERMINUTES, value })
  },
  setMoveSeconds: (value) => (dispatch) => {
    dispatch({ type: actions.SET_MOVESECONDS, value })
  },
  gotoNextStep: () => (dispatch) => {
    dispatch({ type: actions.GO_TO_NEXTSTEP })
  },
  gotoPrevStep: () => (dispatch) => {
    dispatch({ type: actions.GO_TO_PREVSTEP })
  }
}

export default actions
