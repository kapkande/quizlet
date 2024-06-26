import { Link, useLocation } from "react-router-dom";
import { useLesson } from "../../hucsk/useLesson";
import styles from './learning.module.css';
import { useState } from "react";
import Range from "../range/Range";
import AnswerList from "./answerList/AnswerList";
import { OvalButton } from "../../buttons/ovalButton/OvalButton";


export default function Learning() {
    let userName: string = ''
    const nameFromSearch = useLocation().pathname.split('/').reverse()[0];
    if (['learningL2'].includes(nameFromSearch)) { userName = '' }
    else {
        userName = '/user/' + nameFromSearch
    };
    const { lesson, loading, error } = useLesson();
    const [carentIndexOfArrey, setCarentIndexOfArrey] = useState(0);
    const [arreyQuizFalse, setArreyQuizFalse] = useState<any[]>([]);
    const [activeButtonNextLevle, setActiveButtonNextLevle] = useState(false);
    const [isActiveButton, setActiveButton] = useState(false);
    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!lesson?.id) { return }

    const arreyQuiz: any = lesson.lesson.data;

    function handlerButtonClickAgain() {
        setCarentIndexOfArrey(0)
        setActiveButtonNextLevle(false)
        setActiveButton(false)
        setArreyQuizFalse([])
    }

    return (
        <div className={styles.learning}>
            <Range arreyQuiz={arreyQuiz} indexActive={carentIndexOfArrey}></Range>
            <div className={styles.wrap}>
                <h1 className={styles.title}>{lesson.lesson.name}</h1>
                <h3 className={styles.subtitle}>{arreyQuiz[carentIndexOfArrey][1]}</h3>
                <div className={styles.gameblock}>
                    <AnswerList
                        arreyQuiz={arreyQuiz}
                        setActiveButtonNextLevle={setActiveButtonNextLevle}
                        carentIndexOfArrey={carentIndexOfArrey}
                        setCarentIndexOfArrey={setCarentIndexOfArrey}
                        setArreyQuizFalse={setArreyQuizFalse}
                        isActiveButton={isActiveButton}
                        setActiveButton={setActiveButton}
                    ></AnswerList>
                    {activeButtonNextLevle &&
                        <>
                            <div>
                                <h3>You have made {arreyQuizFalse.length} {arreyQuizFalse.length === 0 ? 'mistake' : 'mistakes'}. You can see them from below:</h3>
                                <ul>
                                    {arreyQuizFalse.map((arr: string[], i: number) => (
                                        <li key={i}>
                                            {arr[0]} - {arr[1]}
                                        </li>
                                    ))}
                                </ul>
                                <h4>You can do it again or go to the next level.</h4>
                            </div>
                            <div className={styles.buttonBlock}>
                                <OvalButton fun={handlerButtonClickAgain}>again</OvalButton>
                                <OvalButton>
                                    <Link to={{
                                        pathname: `/learningL2${userName}`,
                                        search: `id=${String(lesson.id)}`
                                    }}
                                    >
                                        next leavel
                                    </Link>
                                </OvalButton>
                            </div>
                        </>}
                </div>
            </div>
        </div>
    )
}