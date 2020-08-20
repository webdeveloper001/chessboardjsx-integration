import React, { useState } from 'react'
import { connect } from 'react-redux'
import CurrencyInput from 'react-currency-input';

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import actions from '../../../store/wizard/actions'
import ChoiceSelect from '..//../../components/choice-select'
import ForFun from '../../../components/icons/ForFun'
import ForDonation from '../../../components/icons/ForDonation'
import ForGlory from '../../../components/icons/ForGlory'

fontawesome.library.add(faChevronUp, faChevronDown, faArrowLeft);

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
  wager,
  playFor,
  setPlayFor,
  setWager,
  gotoPrevStep,
  gotoNextStep
}) => {
  const [valueSelected, setValueSelected] = useState(false)

  const valueSelect = (value) => {
    setPlayFor(value)
    if (value === 'fun') {
      gotoNextStep()
    }
    setValueSelected(true)
  }

  if (valueSelected) {
    return (
      <div className="step-wrapper">
        <label className="step-title">Put a wager</label>
        <p className="step-description">If you don’t play for free, you have to put a wager. The opponent will be waging the same. The winner gets all. If you selected for a donation, the money will go to one of the partner foundations</p>
        <div className="wager-input">
          <div className="input-wrapper">
            <CurrencyInput
              value={wager}
              onChangeEvent={(ev, mv, fv) => {
                setWager(fv)
              }}
            />
            <div className="spin-handle py-3">
              <FontAwesomeIcon
                icon="chevron-up"
                onClick={() => {
                  setWager(wager + 1)
                }}
              />
              <FontAwesomeIcon
                icon="chevron-down"
                onClick={() => {
                  setWager(Math.max(wager - 1, 0))
                }}
              />
            </div>
          </div>
          <button
            className="btn btn-primary btn-block"
            onClick={gotoNextStep}
          >
            Next
          </button>
          <button
            className="btn btn-link btn-block text-dark"
            onClick={gotoPrevStep}
          >
            <FontAwesomeIcon icon="arrow-left" className="mr-2" />
            Back
          </button>
        </div>
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
  playFor: state.Wizard.playFor,
  wager: state.Wizard.wager
}), {
  setPlayFor: actions.setPlayFor,
  setWager: actions.setWager,
  gotoNextStep: actions.gotoNextStep,
  gotoPrevStep: actions.gotoPrevStep
})(SelectPlayFor)
