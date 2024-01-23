import { Link } from "react-router-dom";
import { useLesson } from "../../hucsk/useLesson";
import styles from './learning.module.css';
import { useEffect, useState } from "react";
import Range from "../range/Range";
import CardBlock from "./cardBlock/CardBlock";


export default function Learning() {
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
    if (!lesson.data) { return }

    const arreyQuiz: any = lesson.data.data;

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
                <h1 className={styles.title}>{lesson.data.name}</h1>
                <div className={styles.gameblock}>
                    <CardBlock
                        arreyQuiz={arreyQuiz}
                        setActiveButtonNextLevle={setActiveButtonNextLevle}
                        carentIndexOfArrey={carentIndexOfArrey}
                        setCarentIndexOfArrey={setCarentIndexOfArrey}
                        arreyQuizFalse={arreyQuizFalse}
                        setArreyQuizFalse={setArreyQuizFalse}
                        isActiveButton={isActiveButton}
                        setActiveButton={setActiveButton}
                    ></CardBlock>
                    {activeButtonNextLevle &&
                        <div>
                            <h3>You have made {arreyQuizFalse.length} {arreyQuizFalse.length === 0 ? 'mistake' : 'mistakes'}. You can see them from below.</h3>
                            <ul>
                                {arreyQuizFalse.map((arr: string[], i: number) => (
                                    <li key={i}>
                                        {arr[0]} - {arr[1]}
                                    </li>
                                ))}
                            </ul>
                            <h4>You can do it again or go to the next level.</h4>
                        </div>
                    }
                    {activeButtonNextLevle && <button className={styles.button} onClick={handlerButtonClickAgain}>again</button>}
                    {activeButtonNextLevle &&
                        <Link to={{
                            pathname: "/learningL2",
                            search: `id=${String(lesson.id)}`
                        }}
                            className={styles.button}>
                            next leavel
                        </Link>}
                </div>
            </div>
        </div>
    )
}