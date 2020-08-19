import React from 'react'
import { connect } from 'react-redux'
import actions from '../../store/wizard/actions'
import RankList from './components/rank-list'
import Stepper from './components/stepper'
import SelectTypes from './steps/types'
import SelectPlayFor from './steps/playFor'
import SelectLength from './steps/length'
import SelectPiece from './steps/piece'
import './style.scss'

const setps = [
  SelectTypes,
  SelectPlayFor,
  SelectLength,
  SelectPiece
]

const Wizard = ({
  currentStep
}) => {
  const Step = setps[currentStep]
  return (
    <div className="row wizard">
      <div className="col-8">
        <Stepper />
        <Step />
      </div>
      <div className="col-4">
        <RankList />
      </div>
    </div>
  )
}

export default connect(state => state.Wizard, actions)(Wizard)
