import { useLesson } from "../../hucsk/useLesson";
import styles from './learning.module.css';
import { useState } from 'react';
import Range from "../range/Range";
import { RotateBlock } from "../rotateBlock/RotateBlock";
import { OvalButton } from "../../buttons/ovalButton/OvalButton";

export default function Learning() {
    const [inputValue, setInputValue] = useState("");
    const { lesson, loading, error } = useLesson();
    const [termActive, setTermActive] = useState(true);
    const [indexActive, setindexActive] = useState(0);
    const [carentValue, setCarentValue] = useState('');
    // const [arreyQuiz, setArreyQuiz] = useState<string[][]>([]);
   

    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }


 
    if (!lesson?.id) { return }
    const arreyQuiz = lesson.lesson.data


    function handlerClick(i: number) {
        setindexActive((p) => {
            if (p + i > arreyQuiz.length - 1 || p + i < 0) { return p }
            return p + i
        })
    }

    function handleInputChange(e: any) {
        console.log(1);
        e.preventDefault();
        setCarentValue(arreyQuiz[indexActive][0]);
        console.log(inputValue, carentValue);
        if (carentValue === inputValue) { alert('ok') }
        setInputValue('')
    }
    // function handleInputChange(e: any) {
    //     e.preventDefault();
    //     if (!arreyQuiz || arreyQuiz.length === 0 || !arreyQuiz[indexActive]) {
    //         return; // Выход из функции, если arreyQuiz не определен, пуст или нет элемента с индексом indexActive
    //     }
    
    //     setCarentValue(arreyQuiz[indexActive][0]);
    //     console.log(inputValue, carentValue);
    //     if (carentValue === inputValue) { alert('ok') }
    //     setInputValue('')
    // }
    function moveBlock(value: number): void {
        setTermActive(true);
        handlerClick(value);
        // setCarentValue(arreyQuiz[indexActive][0]);
    }

    return (
        <div className={styles.learning}>
            <Range arreyQuiz={arreyQuiz} indexActive={indexActive}></Range>
            <div className={styles.wrap}>
                <h1 className={styles.title}>{lesson?.lesson.name}</h1>
                <div className={styles.gameblock}>
                    <button
                        onClick={() => moveBlock(-1)}
                        className={`${styles.button} ${styles.buttonBack}`}>
                    </button>
                    <RotateBlock setTermActive={setTermActive} termActive={termActive} indexActive={indexActive} arreyQuiz={arreyQuiz}></RotateBlock>
                    <button
                        onClick={() => moveBlock(1)}
                        className={`${styles.button} ${styles.buttonForward}`}>
                    </button>
                </div>
                <form onSubmit={handleInputChange}>
                    <input className={styles.input} type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                    <OvalButton>Submit</OvalButton>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </div>
    )
}