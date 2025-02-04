import React from 'react'

const Card = ({title, value, icon: Icon}) => {
  return (
    <div className="p-4 flex items-center justify-between shadow-lg rounded-2xl bg-white w-80 gap-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      {Icon && <Icon className="text-blue-500 text-4xl" />}
    </div>
  )
}

export default Card
