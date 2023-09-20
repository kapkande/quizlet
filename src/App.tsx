
import { Route, Routes } from "react-router-dom";
import Lasons from './conponents/lessons/lessons'
import Lason from './conponents/lesson/lesson'
import Nav from './conponents/Nav/Nav';
import LearningLevle2 from './conponents/games/learningLevle2/learningLevle2';
import LearningLevle1 from './conponents/games/learningLevle1/learningLevle1';

import Card from './conponents/games/card/Card';

export default function App() {
  return (

    <main>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Lasons></Lasons>} />
        <Route path="/item" element={<Lason></Lason>} />
        <Route path="/card" element={<Card></Card>} />
        <Route path="/learningL1" element={<LearningLevle1></LearningLevle1>} />
        <Route path="/learningL2" element={<LearningLevle2></LearningLevle2>} />
      </Routes>
    </main>

  )
}


