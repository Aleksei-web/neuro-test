import React from 'react'
import './App.css'

import {Route, Routes} from 'react-router-dom'
import {ClientListPage} from "./pages/ClientListPage";
import {DataPage} from "./pages/DataPage";
import {AllTestPage} from "./pages/AllTestPage";
import {EmployeePage} from "./pages/EmployeePage";
import {PaymentPage} from "./pages/PaymentPage";
import {BuilderTestPage} from "./pages/BuilderTestPage";
import {ClientPage} from "./pages/ClientPage";


export function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientListPage/>}/>
      <Route path="/data" element={<DataPage/>}/>
      <Route path="/all-test" element={<AllTestPage/>}/>
      <Route path="/employee" element={<EmployeePage/>}/>
      <Route path="payment" element={<PaymentPage/>}/>
      <Route path="test-page" element={<BuilderTestPage/>}/>
      <Route path="/:id" element={<ClientPage/>}/>
    </Routes>
  )
}

export default App
