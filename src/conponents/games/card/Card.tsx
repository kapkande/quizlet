import { useLocation } from "react-router-dom";
import { useLesson } from "../../hucsk/useLesson";
import styles from './card.module.css'
import { useState } from 'react'


export default function Card() {

    const search = useLocation().search.split('?')[1];
    const { lesson, loading, error } = useLesson(search)
    const [termActive, setTermActive] = useState(true);
    const [elementActive, setelementActive] = useState(0);

    // if (Object.keys(lesson).length < 1){return}

    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!lesson.data) { return }
    const arreyItem = lesson.data;

    function handlerClick(i: number) {
        setelementActive((p) => {
            if (p + i > arreyItem.length - 1 || p + i < 0) { return p }
            return p + i
        })
    }
    return (
        <div className={styles.card}>
            <div className={styles.wrap}>
                <h1 className={styles.title}>{lesson.id}</h1>
                <div className={styles.gameblock}>
                    <button
                        onClick={
                            () => { setTermActive(true), handlerClick(-1) }
                        }
                        className={styles.button}>
                    </button>
                    <div onClick={() => setTermActive(pr => !pr)} className={styles.cardBlock}>
                        <div className={`${styles.item}`}>
                            {termActive &&
                                <div className={`${styles.term} `}>{arreyItem[elementActive][0]}</div>
                            }
                            {!termActive &&
                                <div className={`${styles.description}`}>{arreyItem[elementActive][1]}</div>
                            }
                        </div>
                    </div>
                    <button
                        onClick={
                            () => { setTermActive(true), handlerClick(+1) }
                        }
                        className={styles.button}>
                    </button>
                </div>
            </div>
        </div>
    )
}