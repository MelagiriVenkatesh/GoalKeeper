import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems.jsx'

const Todo = () => {
    const inputRef = useRef(null);
    const [todoList, setTodoList] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []);

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(todoList));
    }, [todoList]);

    const toggleStatus = (id) => {

        setTodoList((prev)=>{
            return prev.map(item => {
                if(item.id === id)
                    return {...item, status: !item.status};
                return item;
            })
        })
    }

    const deleteItem = (id) => {
        const temp = todoList.filter(item => item.id !== id);
        setTodoList(prev => [...temp]);
    }

    const add = () => {
        const data = inputRef.current.value.trim();

        if(!data)
            return ;

        const newTodo = {
            id: Date.now(),
            data : data,
            status : false
        }

        console.log(newTodo);
        setTodoList((prev)=>[...prev, newTodo]); 
        inputRef.current.value = '';
    }
  return ( 
    <div className = 'bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
{/*------------------title----------------*/}

        <div className="flex items-center mt-7 gap-2">
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

{/*------------------input box----------------*/}

        <div className='flex item-center my-7 bg-gray-200 rounded-full'>
            <input ref = {inputRef} className = 'bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder = 'Add your task' />
            <button onClick = {add} className='border-none rounded-full bg-maincolor w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
        </div>


{/*------------------todo list----------------*/}

        <div className="">

            {todoList.map((item, index) => {
                return <TodoItems key = {index} id = {item.id} text={item.data} status = {item.status} deleteItem = {deleteItem} toggleStatus = {toggleStatus} />
            })}

        </div>
    </div>
  )
}

export default Todo
 