
import { useState } from 'react';
import styles from '../learning.module.css';
export default function CardBlock({ arreyItem, indexActive, setTermActive, termActive, setIndexExsept }: any) {

    function handlerClick(e: any) {
        if (termActive) { return }
        const target = e.target
        if (target.className != `${styles.term} ${styles.item}`) { return }
        if (target.textContent == arreyItem[indexActive][0]) {
            setIndexExsept((p:string[])=> [...p, indexActive])  
        }
        setTermActive(true)
        // setIndexActive((p: number) =>{
        //     if ( p == 0){return p}
        //     return p -1
        // })
    }

    return (
        <div onClick={handlerClick} className={styles.cardBlock}>
            <div className={`${styles.description} ${styles.item}`}>
                {arreyItem[indexActive][1]}
            </div>
            <div className={`${styles.term} ${styles.item}`}>
                {arreyItem[indexActive][0]}
            </div>
            <div className={`${styles.term} ${styles.item}`}>
                {arreyItem[3][0]}
            </div>
            <div className={`${styles.term} ${styles.item}`}>
                {arreyItem[4][0]}
            </div>
            <div className={`${styles.term} ${styles.item}`}>
                {arreyItem[5][0]}
            </div>
        </div>
    )
}