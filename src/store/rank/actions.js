const actions = {
  SET_SELECTED_LENGTH : 'SET_SELECTED_LENGTH',
  setSelectedLength: (value) => (dispatch) => {
    dispatch({
      type: actions.SET_SELECTED_LENGTH,
      value
    })
  }
}

export default actions
