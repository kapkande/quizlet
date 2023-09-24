import { Link } from "react-router-dom";
import { useLesson } from "../../hucsk/useLesson";
import styles from './learning.module.css';
import { useState } from "react";
import Range from "../range/Range";
import CardBlock from "./cardBlock/CardBlock";


export default function Learning() {

    const { lesson, loading, error } = useLesson();
    const [termActive, setTermActive] = useState(false);
    const [indexActive, setIndexActive] = useState(0);
    const [indexExsept, setIndexExsept] = useState([-1])
    const [activeButtonNext, setActiveButtonNext] = useState(false);

    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!lesson.data) { return }
    const arreyItem = lesson.data;

    function handlerButtonClick() {
        console.log(indexExsept  );
        if (indexExsept.length - 1  === arreyItem.length) { setActiveButtonNext(true); return };
        const corectIndex = getCeack(indexActive);
        setIndexActive(corectIndex)
        setTermActive(false)
    }

    let flag = true;
    function getCeack(index: number) {
        if (index > indexExsept.length - 1) { return getCeack(0) }
        if (indexExsept.includes(index)) {
            flag = false;
            return getCeack(index + 1);
        }
        if (flag) { flag = false; return index + 1 }
        else { return index }
    }
  
    return (
        <div className={styles.learning}>
            <Range arreyItem={arreyItem} indexActive={indexActive}></Range>
            <div className={styles.wrap}>
                <h1 className={styles.title}>{lesson.name}</h1>
                <div className={styles.gameblock}>
                    <CardBlock
                        arreyItem={arreyItem}
                        indexActive={indexActive}
                        setTermActive={setTermActive}
                        termActive={termActive}
                        setIndexActive={setIndexActive}
                        setIndexExsept={setIndexExsept}
                    ></CardBlock>
                    {termActive && <button className={styles.button} onClick={handlerButtonClick}></button>}
                    {activeButtonNext &&
                        <Link to={{
                            pathname: "/learningL2",
                            search: `id=${String(lesson.id)}`
                        }}
                            className={styles.button}>
                            <h1 className={styles.name}>next leavel</h1>
                        </Link>}
                </div>
            </div>
        </div>
    )
}