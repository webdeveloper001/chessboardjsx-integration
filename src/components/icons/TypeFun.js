import React from 'react'
import { Green, White } from '../../colors'

const Icon = ({ active = false }) => {
  const color = active? White: Green
  return (
    <svg width="155" height="83" viewBox="0 0 155 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 6.28528C24.1755 45.2325 102.554 76.6805 149 6.28528" stroke={color} strokeWidth="12" strokeLinecap="round"/>
      <path d="M27.1926 31.1814L11.6104 51.9293" stroke={color} strokeWidth="12" strokeLinecap="round"/>
      <path d="M130.558 30.2593L146.14 51.0072" stroke={color} strokeWidth="12" strokeLinecap="round"/>
      <path d="M51.1854 43.6257L42.3948 68.8106" stroke={color} strokeWidth="12" strokeLinecap="round"/>
      <path d="M107.304 43.6257L116.094 68.8106" stroke={color} strokeWidth="12" strokeLinecap="round"/>
      <path d="M78.7738 49.3022L79.3637 76.3019" stroke={color} strokeWidth="12" strokeLinecap="round"/>
    </svg>
  )
}

export default Icon
