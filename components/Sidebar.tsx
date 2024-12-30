import React, { FC } from 'react'

interface SidebarProps{
    isOpen:boolean;
    onClose:() => void;
}

const Sidebar:FC<SidebarProps> = ({isOpen, onClose}) => {
  return (
    <div className='fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect w-full'>
      sidebar
    </div>
  )
}

export default Sidebar
