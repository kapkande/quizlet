import { Route, Routes } from "react-router-dom";
import Lesson from './conponents/main/lesson/lesson'
import ChooseLessons from './conponents/main/ChooseLesson/ChooseLesson';
import CreateLesson from './conponents/main/CreateLesson/CreateLesson';
import Nav from './conponents/Nav/Nav';
import LearningLevle2 from './conponents/games/learningLevle2/learningLevle2';
import LearningLevle1 from './conponents/games/learningLevle1/learningLevle1';
import Card from './conponents/games/card/Card';
import { Register } from "./conponents/logAndReg/Register";
import { Login } from "./conponents/logAndReg/Login";
import { ListOfUsers } from "./conponents/main/listOfUsers/listOfUsers";
import Settings from "./conponents/Settings/Settings";
import { PopupAuth } from "./conponents/popupAuth/PopupAuth";
import { useState } from "react";
import { PopupGpt } from "./conponents/Gpt/PopupGpt";

export default function App() {
  const [isSignIn, setPopupSignIn] = useState(false);
  const [isSignUp, setPopupSignUp] = useState(false);

  return (
    <div className="wrapper">
      <Nav setPopupSignIn={setPopupSignIn} setPopupSignUp={setPopupSignUp}></Nav>
      <main>
        <PopupAuth setPopupSignIn={setPopupSignIn} setPopupSignUp={setPopupSignUp} isSignIn={isSignIn} isSignUp={isSignUp}></PopupAuth>
        <PopupGpt></PopupGpt>
        <Routes>
          <Route path="/" element={<ChooseLessons></ChooseLessons>} />
          <Route path="/item/*" element={<Lesson></Lesson>} />
          <Route path="/card/*" element={<Card></Card>} />
          <Route path="/learningL1/*" element={<LearningLevle1></LearningLevle1>} />
          <Route path="/learningL2/*" element={<LearningLevle2></LearningLevle2>} />
          <Route path="/createLesson" element={<CreateLesson></CreateLesson>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/users" element={<ListOfUsers></ListOfUsers>} />
          <Route path="/settings" element={<Settings></Settings>} />
        </Routes>
      </main>
    </div>
  )
}