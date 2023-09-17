import { useState } from 'react'
import Lasons from './conponents/lessons/lessons'
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (

    <main>
      <Routes>
        <Route path="/" element={<Lasons></Lasons>} />
        <Route path="/" element={<Lasons></Lasons>} />

      </Routes>
    </main>

  )
}


