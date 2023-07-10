import { Route, Routes } from 'react-router-dom'
import MemoPage from './pages/MemoPage'
import CallbackPage from './pages/CalbackPage'
import ReducerPage from './pages/ReducerPage'
import ReducerPage2 from './pages/ReducerPageWithReducer'


function App() {

  return (
    <>
      <Routes>
        <Route path='memo' element={<MemoPage />} />
        <Route path='callback' element={<CallbackPage />} />
        <Route path='reducer' element={<ReducerPage />} />
        <Route path='reducer-starter' element={<ReducerPage2 />} />
      </Routes>
    </>
  )
}

export default App
