import React from 'react'
import { connect } from 'react-redux'
import actions from '../../../../store/wizard/actions'

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

fontawesome.library.add(faCheck);

const Stepper = ({
  stepsCompleted,
  currentStep,
  setCurrentStep
}) => {
  return (
    <div className="d-flex stepper">
      {stepsCompleted.map((completed, sidx) => {
        const current = currentStep === sidx
        return (
          <div
            key={sidx}
            className={`step py-3 ${completed?'completed':''} ${current?'current':''}`}
            onClick={() => {
              if (completed) {
                setCurrentStep(sidx)
              }
            }}
          >
            <span className={`step-icon mr-2 ${completed||current?'completed':''}`}>
              {completed && currentStep !== sidx
                ? <FontAwesomeIcon icon="check" />
                : sidx + 1
              }
            </span>
            step
          </div>
        )
      })}
    </div>
  )
}

export default connect(state => ({
  stepsCompleted: state.Wizard.stepsCompleted,
  currentStep: state.Wizard.currentStep
}), {
  setCurrentStep: actions.setCurrentStep
})(Stepper)
