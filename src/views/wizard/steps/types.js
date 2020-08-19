import React from 'react'
import { connect } from 'react-redux'
import actions from '../../../store/wizard/actions'
import ChoiceSelect from '..//../../components/choice-select'
import TypeFun from '../../../components/icons/TypeFun'
import TypeRated from '../../../components/icons/TypeRated'

const items = [
  {
    value: 'fun',
    title: 'Fun',
    icon: TypeFun
  },
  {
    value: 'rated',
    title: 'Rated',
    icon: TypeRated
  }
]

const SelectTypes = ({
  type,
  setType,
  gotoNextStep
}) => {
  const handleSelect = (value) => {
    setType(value)
    gotoNextStep()
  }

  return (
    <div className="step-wrapper">
      <label className="step-title">Type</label>
      <p className="step-description">Select whether you are playing a rated game or not. This will have an effect on your ratihg</p>
      <ChoiceSelect
        value={type}
        onChange={handleSelect}
        items={items}
      />
    </div>
  )
}

export default connect(state => ({
  type: state.Wizard.type
}), {
  setType: actions.setType,
  gotoNextStep: actions.gotoNextStep
})(SelectTypes)
