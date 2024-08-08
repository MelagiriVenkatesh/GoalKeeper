import React from 'react'

import delete_icon from '../assets/delete.png'
import not_tick from '../assets/not_tick.png'
import tick from '../assets/tick.png'

const TodoItems = ({text, id, status, deleteItem, toggleStatus}) => {

    const toggle = () => {
        toggleStatus(id);
    }
    
  return (
    <div className='flex item-center my-3 gap-2'>
        <div onClick = {toggle} className="flex flex-1 items-center cursor-pointer">
            
            <img src={status ? tick : not_tick} className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${status ? 'line-through' : ''}`}>{text}</p>
        </div>

        <img onClick = {() => deleteItem(id)} src={delete_icon} alt="" className='w-3.5 py-1.5 cursor-pointer'/>

    </div>
  )
}

export default TodoItems