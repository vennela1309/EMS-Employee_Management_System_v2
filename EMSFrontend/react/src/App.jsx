import {BrowserRoute, Routes, Route } from 'react-router-dom'

import login from './pages/login';
import dashboard from './pages/dashboard';
import addEmployess from './pages/AddEmployees';
import EditEmployees from './pages/EditEmployees'



function App(){
  return (
<BrowserRoute>
<Routes>
  <Route path = "/" element={<login />}/>
  <Route path = "/dashboard" element={<dashboard/>}/>
  <Route path = "/add" element = {<addEmployess/>}/>
  <Route path = "/edit/:id" element={<EditEmployees/>}/>

</Routes>
</BrowserRoute>
  )

}

export default App