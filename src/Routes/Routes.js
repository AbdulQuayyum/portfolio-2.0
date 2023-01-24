import React from 'react'
import { Routes, Route } from "react-router-dom";

import Index from '../Views/Index';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Index/>} />
    </Routes>
  )
}

export default MainRoutes