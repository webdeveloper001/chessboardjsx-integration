import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../../../store/wizard/actions'
import ChoiceSelect from '..//../../components/choice-select'
import ForFun from '../../../components/icons/ForFun'
import ForDonation from '../../../components/icons/ForDonation'
import ForGlory from '../../../components/icons/ForGlory'

const items = [
  {
    value: 'fun',
    title: 'Fun',
    subtitle: 'You all have fun',
    icon: ForFun
  },
  {
    value: 'donation',
    title: 'Donation',
    subtitle: 'You donate all',
    icon: ForDonation
  },
  {
    value: 'glory',
    title: 'Glory',
    subtitle: 'You win all',
    icon: ForGlory
  }
]

const SelectPlayFor = ({
  playFor,
  setPlayFor,
  setWager,
  gotoPrevStep,
  gotoNextStep
}) => {
  const [valueSelected, setValueSelected] = useState(false)

  const valueSelect = (value) => {
    setPlayFor(value)
    setValueSelected(true)
  }

  if (valueSelected) {
    return (
      <div className="step-wrapper">
        <label className="step-title">Put a wager</label>
        <p className="step-description">If you don’t play for free, you have to put a wager. The opponent will be waging the same. The winner gets all. If you selected for a donation, the money will go to one of the partner foundations</p>
        <div className="wager-input">
          <input type="number" onChange={ev => {
            setWager(ev.target.value)
          }} />
        </div>
        <button
          className="btn btn-primary btn-block"
          onClick={gotoNextStep}
        >
          Next
        </button>
        <button
          className="btn btn-link btn-block"
          onClick={gotoPrevStep}
        >
          <i className="fa fa-prev" />
          Back
        </button>
      </div>
    )
  }

  return (
    <div className="step-wrapper">
      <label className="step-title">For</label>
      <p className="step-description">If you don’t play for free, you have to put a wager. The opponent will be waging the same. The winner gets all. If you selected for a donation, the money will go to one of the partner foundations</p>
      <ChoiceSelect
        value={playFor}
        onChange={valueSelect}
        items={items}
      />
    </div>
  )
}

export default connect(state => ({
  playFor: state.Wizard.playFor
}), {
  setPlayFor: actions.setPlayFor,
  setWager: actions.setWager,
  gotoNextStep: actions.gotoNextStep,
  gotoPrevStep: actions.gotoPrevStep
})(SelectPlayFor)
