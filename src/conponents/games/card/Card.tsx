
import { useLesson } from "../../hucsk/useLesson";
import styles from './card.module.css'
import { useState } from 'react'
import Range from "../range/Range";


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
    if (!lesson.data) { return }
    const arreyQuiz = lesson.data.data;

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
                <h1 className={styles.title}>{lesson.data.name}</h1>
                <div className={styles.gameblock}>
                    <button
                        onClick={
                            () => { setTermActive(true), handlerClick(-1) }
                        }
                        className={`${styles.button} ${styles.buttonBack}`}>
                    </button>
                    <div onClick={() => setTermActive(pr => !pr)} className={`${styles.cardBlock} `}>
                        <div className={`${styles.item} ${!termActive ? styles.itemActive : ''}`}>
                            <div className={`${styles.term}`}>{arreyQuiz[indexActive][0]}</div>
                            <div className={`${styles.description}`}>{arreyQuiz[indexActive][1]}</div>
                        </div>
                    </div>
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