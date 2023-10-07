
import { Route, Routes } from "react-router-dom";
import ChooseLessons from './conponents/ChooseLesson/ChooseLesson'
import Lason from './conponents/lesson/lesson'
import Nav from './conponents/Nav/Nav';
import LearningLevle2 from './conponents/games/learningLevle2/learningLevle2';
import LearningLevle1 from './conponents/games/learningLevle1/learningLevle1';
import Card from './conponents/games/card/Card';
import CreateLesson from "./conponents/CreateLesson/CreateLesson";


export default function App() {
  return (

    <main>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<ChooseLessons></ChooseLessons>} />
        <Route path="/item" element={<Lason></Lason>} />
        <Route path="/card" element={<Card></Card>} />
        <Route path="/learningL1" element={<LearningLevle1></LearningLevle1>} />
        <Route path="/learningL2" element={<LearningLevle2></LearningLevle2>} />
        <Route path="/createLessen" element={<CreateLesson></CreateLesson>} />
      </Routes>
    </main>

  )
}


