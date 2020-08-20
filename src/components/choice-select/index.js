import React, { useState } from 'react'

import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

fontawesome.library.add(faCheckCircle);

const ChoiceSelect = ({ value, items, onChange, showChecker }) => {
  const [hover, setHover] = useState({})

  return (
    <div className="choice-select row">
      {items.map(item => {
        const active = item.value === value || hover[item.value]
        const selected = item.value === value
        const Icon = item.icon
        return (
          <div
            key={item.value}
            className="col"
          >
            <div
              className={`choice-item ${active ? 'active': ''}`}
              onClick={() => {
                onChange(item.value)
              }}
              onMouseOver = {() => {
                setHover({ [item.value]: true })
              }}
              onMouseLeave = {() => {
                setHover({ })
              }}
            >
              {showChecker && selected && (
                <FontAwesomeIcon className="selected-check" icon="check-circle" />
              )}
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="icon-wrapper d-flex align-items-center">
                  <Icon active={active} />
                </div>
                <label className="mt-3">
                  {item.title}
                </label>
                <span>
                  {item.subtitle}
                </span>
              </div>
  `         </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChoiceSelect
