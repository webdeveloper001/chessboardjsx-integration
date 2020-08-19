import React from 'react'
import { connect } from 'react-redux'
import actions from '../../../store/wizard/actions'
import ChoiceSelect from '..//../../components/choice-select'
import LengthBullet from '../../../components/icons/LengthBullet'
import LengthFast from '../../../components/icons/LengthFast'
import LengthCustom from '../../../components/icons/LengthCustom'

const items = [
  {
    value: 'bullet',
    title: 'Bullet',
    subtitle: '1+0',
    icon: LengthBullet
  },
  {
    value: 'fast',
    title: 'Fast',
    subtitle: '3+1',
    icon: LengthFast
  },
  {
    value: 'custom',
    title: 'Custom',
    subtitle: '5+3',
    icon: LengthCustom
  }
]

const SelectLength = ({
  length,
  setLength,
  gotoNextStep
}) => {
  const handleSelect = (value) => {
    setLength(value)
    gotoNextStep()
  }

  return (
    <div className="step-wrapper">
      <label className="step-title">Length</label>
      <p className="step-description">Select the game type based on the amount of time you will be allowed to play. If you don’t enjoy the pre-selected types, you can customize to your liking</p>
      <ChoiceSelect
        value={length}
        onChange={handleSelect}
        items={items}
      />
    </div>
  )
}

export default connect(state => ({
  length: state.Wizard.length
}), {
  setLength: actions.setLength,
  gotoNextStep: actions.gotoNextStep
})(SelectLength)
