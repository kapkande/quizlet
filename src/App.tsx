
import { Route, Routes } from "react-router-dom";
import Lasons from './conponents/lessons/lessons'
import Lason from './conponents/lesson/lesson'
import Nav from './conponents/Nav/Nav';
import Learning from './conponents/games/learning/learning';
import Card from './conponents/games/card/Card';

export default function App() {
  return (

    <main>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Lasons></Lasons>} />
        <Route path="/item" element={<Lason></Lason>} />
        <Route path="/card" element={<Card></Card>} />
        <Route path="/learning" element={<Learning></Learning>} />
      </Routes>
    </main>

  )
}


