import { useState } from 'react'
import list from '../assets/todolist.json'
import { TodoListType } from '../types/Todolist'


// TODO - prevent the delay on change the state of the header

export default function MemoPage() {
   const [filterIsDone, setFilterIsDone] = useState<boolean>(false)
   const [showHeader, setShowHeader] = useState<boolean>(true)

   const filterDone = (): TodoListType[] => {
      for (let index = 0; index < 1000000000; index++) { }
      return list.filter(item => item.isDone === filterIsDone)
   }

   const filteredList: TodoListType[] = filterDone()

   return (
      <div className="w-full h-screen p-4 bg-slate-300 flex flex-col items-center">
         {showHeader && <header className='bg-black p-5 w-full text-white'>
            To Do List
         </header>}
         <div className='max-w-xl flex gap-3 items-center'>
            <label htmlFor="done">filter is done</label>
            <input type="checkbox" id='done' checked={filterIsDone} onChange={e => setFilterIsDone(e.target.checked)} />
            <label htmlFor="header">show header</label>
            <input type="checkbox" id='header' checked={showHeader} onChange={e => setShowHeader(e.target.checked)} />
         </div>
         <ul className='flex flex-col gap-2 mt-3'>
            {filteredList.map(item =>
               <li className='w-52 rounded-md shadow-md bg-slate-600 text-white p-2' key={item.id}>
                  {item.title}
               </li>
            )}
         </ul>
      </div>
   )
}
