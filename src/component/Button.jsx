import React from 'react'

const Button = ({text, onClick, className}) => {
  return (
    <div className='w-full p-3 px-2'>
      <button className={className} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
