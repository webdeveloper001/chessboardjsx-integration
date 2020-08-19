import React, { useState } from 'react'
import './style.scss'

const ChoiceSelect = ({ value, items, onChange }) => {
  const [hover, setHover] = useState({})

  return (
    <div className="choice-select row">
      {items.map(item => {
        const selected = item.value === value || hover[item.value]
        const Icon = item.icon
        return (
          <div
            key={item.value}
            className="col"
          >
            <div
              className={`choice-item ${selected ? 'active': ''}`}
              onClick={() => {
                onChange(item.value)
              }}
              onMouseEnter = {() => {
                setHover({ [item.value]: true })
              }}
              onMouseLeave = {() => {
                setHover({ })
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="icon-wrapper d-flex align-items-center">
                  <Icon active={selected} />
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
