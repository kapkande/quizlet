
import { useLesson } from "../../hucsk/useLesson";
import styles from './card.module.css'
import { useState } from 'react'
import Range from "../range/Range";
import { RotateBlock } from "../rotateBlock/RotateBlock";

export default function Card() {
    const { lesson, loading, error } = useLesson()
    const [termActive, setTermActive] = useState(true);
    const [indexActive, setindexActive] = useState(0);

    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!lesson?.id) { return }

    const arreyQuiz = lesson.lesson.data;

    function handlerClick(i: number) {
        setindexActive((p) => {
            if (p + i > arreyQuiz.length - 1 || p + i < 0) { return p }
            return p + i
        })
    }
    return (
        <div className={styles.card}>
            <Range arreyQuiz={arreyQuiz} indexActive={indexActive}></Range>
            <div className={styles.wrap}>
                <h1 className={styles.title}>{lesson.lesson.name}</h1>
                <div className={styles.gameblock}>
                    <button
                        onClick={
                            () => { setTermActive(true), handlerClick(-1) }
                        }
                        className={`${styles.button} ${styles.buttonBack}`}>
                    </button>
                    <RotateBlock isCardGame={true} setTermActive={setTermActive} termActive={termActive} indexActive={indexActive} arreyQuiz={arreyQuiz}></RotateBlock>
                    <button
                        onClick={
                            () => { setTermActive(true), handlerClick(+1) }
                        }
                        className={`${styles.button} ${styles.buttonForward}`}>
                    </button>
                </div>
            </div>
        </div>
    )
}