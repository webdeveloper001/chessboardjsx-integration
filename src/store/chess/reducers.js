const initialState = {
  player1: {
    id: 1,
    country: 'US',
    name: 'Trump',
    length: 'bullet',
    faborite: true,
    stars: 1933,
    online: true
  },
  player2: {
    id: 2,
    country: 'US',
    name: 'Trump',
    length: 'bullet',
    faborite: true,
    stars: 1933,
    online: true
  },
  player1history: [{
    from: 'g5',
    to: 'c5'
  }, {
    from: 'e4',
    to: 'f6'
  }],
  player2history: [],
  currentPlayerId: 1
}

const chessReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default chessReducer
