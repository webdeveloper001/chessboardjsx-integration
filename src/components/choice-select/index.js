import React from 'react'
import './style.scss'

const ChoiceSelect = ({ value, items, onChange }) => {
  return (
    <div className="choice-select row">
      {items.map(item => {
        const selected = item.value === value
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
            >
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="icon-wrapper d-flex align-items-center">
                  <Icon active={selected} />
                </div>
                <label>
                  {item.title}
                </label>
                <small>
                  {item.subtitle}
                </small>
              </div>
  `         </div>
          </div>
        )
      })}
    </div>
  )
}

export default ChoiceSelect
