import { useState,useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import {CreateJobTable} from './pages/CreateJobTable'
import { EditJobTable } from './pages/EditJobTable'
function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/CreateJob' element={<CreateJobTable/>}/>
          <Route path='/EditJob' element={<EditJobTable/>}/>
      </Routes>
    </>
  )
}

export default App
