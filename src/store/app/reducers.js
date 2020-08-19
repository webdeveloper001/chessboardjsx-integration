const initialState = {
  user: {
    name: 'James William',
    logo: '',
    stars: 1452,
    amount: 5000,
  },
  loading: false,
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default appReducer
