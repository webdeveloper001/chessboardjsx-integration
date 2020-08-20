import React from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { withRouter } from 'react-router'
import actions from '../../../store/wizard/actions'
import ChoiceSelect from '..//../../components/choice-select'
import PieceWhilte from '../../../components/icons/PieceWhilte'
import PieceRandom from '../../../components/icons/PieceRandom'
import PieceBlack from '../../../components/icons/PieceBlack'

const items = [
  {
    value: 'whilte',
    title: 'Whilte',
    icon: PieceWhilte
  },
  {
    value: 'random',
    title: 'Random',
    icon: PieceRandom
  },
  {
    value: 'black',
    title: 'Black',
    icon: PieceBlack
  }
]

const SelectPiece = ({
  piece,
  length,
  playerMinutes,
  moveSeconds,
  setPiece,
  setPlayerMinutes,
  setMoveSeconds,
  history
}) => {
  return (
    <div className="step-wrapper">
      <label className="step-title">How would you like it?</label>
      <ChoiceSelect
        value={piece}
        onChange={setPiece}
        items={items}
        showChecker
      />
      {length === 'custom' && (
        <div className="row mt-4">
          <div className="col">
            <p>How long per player (minutes): {playerMinutes}</p>
            <Form.Control
              type="range"
              custom
              value={playerMinutes}
              onChange={ev => setPlayerMinutes(ev.target.value)}
            />
          </div>
          <div className="col">
            <p>Additional seconds per move: {moveSeconds}</p>
            <Form.Control
              type="range"
              custom
              value={moveSeconds}
              onChange={ev => setMoveSeconds(ev.target.value)}
            />
          </div>
        </div>
      )}
      <button
        className="btn btn-primary btn-block mt-5"
        onClick={() => {
          history.push("/chessboard")
        }}
      >
        Start game
      </button>
    </div>
  )
}

export default withRouter(connect(state => ({
  length: state.Wizard.length,
  piece: state.Wizard.piece,
  playerMinutes: state.Wizard.playerMinutes,
  moveSeconds: state.Wizard.moveSeconds
}), {
  setPiece: actions.setPiece,
  gotoNextStep: actions.gotoNextStep,
  setPlayerMinutes: actions.setPlayerMinutes,
  setMoveSeconds: actions.setMoveSeconds
})(SelectPiece))
