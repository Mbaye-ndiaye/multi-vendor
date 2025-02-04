import React from 'react'

const SidebarItem = ({ icon, text, isOpen}) => {
  return (
    <div className='flex items-center space-x-0 p-3  hover:bg-gray-700 rounded cursor-pointer'>
      {icon}{isOpen && <span>{text}</span>}
    </div>
  )
}

export default SidebarItem

