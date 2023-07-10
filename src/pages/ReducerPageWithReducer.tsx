import { useReducer } from 'react'

interface User {
   name: string
   id: string
   age: number
}

interface Action {
   type: string
   payload?: {
      name: string
   }
}

const reducer = (state: User, action: Action) => {
   switch (action.type) {

      default:
         return state
   }
}

export default function ReducerPage2() {
   const [state, dispatch] = useReducer(reducer, { name: 'avi', age: 32, id: "990" })

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      //@ts-ignore
      const name = e.currentTarget.name.value
      // TODO - dispatch - change name
   }

   return (
      <div className="w-full h-screen p-4 bg-slate-300 flex flex-col items-center">
         <div className='bg-gray-400 p-4 w-80 shadow'>
            <h1><span className='font-bold mr-4'>name: </span>{state.name}</h1>
            <h2><span className='font-bold mr-4'>id: </span>{state.id}</h2>
            <p><span className='font-bold mr-4'>age: </span>{state.age}</p>
         </div>

         <div className='mt-3 w-80 bg-gray-400 p-4 flex gap-3 flex-wrap shadow-lg'>
            <button
               className='rounded-md bg-slate-950 text-white py-1 px-4'
               onClick={() => {
                  // dispatch add one to age
               }}
            >
               Add to age
            </button>
            <button
               className='rounded-md bg-slate-950 text-white py-1 px-4'
               onClick={() => {
                  // dispatch reduce one to age
               }}
            >
               Reduce to age
            </button>
            <form onSubmit={onSubmit} className='flex gap-3 p-2'>
               <input className='p-1' type="text" name='name' defaultValue={state.name} />
               <button className='rounded-md bg-slate-950 text-white py-1 px-4'>Change</button>
            </form>
         </div>

         {/* bonus - add button that add a radom letter to the name  */}
         {/* bonus - add button that add a radom number to the age  */}
         {/* bonus - add button that reduce a radom number to the age  */}
      </div>
   )
}
