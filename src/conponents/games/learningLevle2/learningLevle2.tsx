import { useLocation } from "react-router-dom";
import { useLesson } from "../../hucsk/useLesson";
import styles from './learning.module.css';
import { useState } from 'react';
import Range from "../range/Range";


export default function Learning() {
    const [inputValue, setInputValue] = useState("");
    const search = useLocation().search.split('?')[1];
    const { lesson, loading, error } = useLesson(search);
    const [termActive, setTermActive] = useState(true);
    const [indexActive, setindexActive] = useState(0);
    const [carentValue, setCarentValue] = useState("");

    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!lesson.data) { return }
    const arreyItem = lesson.data;

    function handlerClick(i: number) {
        setindexActive((p) => {
            if (p + i > arreyItem.length - 1 || p + i < 0) { return p }
            return p + i
        })
    }

    function handleInputChange(e: any) {
        e.preventDefault();
        setInputValue('')
        // console.log(inputValue +'   '+ carentValue);
        if (carentValue === inputValue){alert('ok')}
      }

    return (
        <div className={styles.learning}>
            <Range arreyItem={arreyItem} indexActive={indexActive}></Range>
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
                            {!termActive &&
                                <div className={`${styles.term} `}>{arreyItem[indexActive][0]}</div>
                            }
                            {termActive &&
                                <div className={`${styles.description}`}>{arreyItem[indexActive][1]}</div>
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
                <form onSubmit={handleInputChange}>
                    <input type="text" value={inputValue} onChange={(e) => { setCarentValue(arreyItem[indexActive][0]) , setInputValue(e.target.value)  }} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}