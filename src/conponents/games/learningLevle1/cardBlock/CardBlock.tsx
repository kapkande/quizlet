import React, { useEffect, useState } from 'react';
import styles from '../learning.module.css';
import { generateRandomNumbers } from './generateRandomNumbers';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
    arreyQuiz: any;
    setActiveButtonNextLevle: Dispatch<SetStateAction<boolean>>;
    setCarentIndexOfArrey: Dispatch<SetStateAction<number>>;
    carentIndexOfArrey: number
    arreyQuizFalse: any;
    setArreyQuizFalse: React.Dispatch<React.SetStateAction<any[]>>;
    setActiveButton: Dispatch<SetStateAction<boolean>>;
    isActiveButton: boolean;
}

const CardBlock: React.FC<IProps> = ({ setActiveButton, isActiveButton, arreyQuizFalse, setArreyQuizFalse, arreyQuiz, setActiveButtonNextLevle, carentIndexOfArrey, setCarentIndexOfArrey }: IProps) => {
    const [activeButtonNext, setActiveButtonNext] = useState(false);
    const [arreyIndexsOfAnswers, setArreyIndexsOfAnswers] = useState<number[]>([]);


    // const [carentIndexOfArrey, setCarentIndexOfArrey] = useState(0);

    useEffect(() => {
        createAnswerList();
    }, [carentIndexOfArrey]);

    const handlerClick = (e: React.MouseEvent<HTMLLIElement>): void => {
        const target = e.target as HTMLLIElement;
        const rightAnswer = target.textContent;

        if (rightAnswer !== arreyQuiz[carentIndexOfArrey][0]) {
            setArreyQuizFalse(arreyQuizFalse => [...arreyQuizFalse, arreyQuiz[carentIndexOfArrey]])
        }

        setActiveButton(true);
        // if (arreyQuiz.length < carentIndexOfArrey + 2 && arreyQuizClone.length) {
        //     console.log(arreyQuiz.splice(0, arreyQuiz.length));
        // setArreyQuizFalse([])
        //     arreyQuiz.push(...arreyQuizClone)
        //     console.log(arreyQuizClone);
        //     return
        // }

        if (arreyQuiz.length < carentIndexOfArrey + 2) {
            setActiveButtonNextLevle(true)
            return
        }
        setActiveButtonNext(true)
    };

    const createAnswerList = (): void => {
        const answerList = generateRandomNumbers(carentIndexOfArrey, arreyQuiz.length - 1);
        setArreyIndexsOfAnswers(answerList);
    };

    const handlerButtonClickNext = (): void => {
        setActiveButton(false)
        setActiveButtonNext(false)
        setCarentIndexOfArrey(carentIndexOfArrey + 1)
    };


    return (
        <>
            <h3 className={styles.subtitle}>{arreyQuiz[carentIndexOfArrey][1]}</h3>
            <ul className={styles.answerList}>
                {arreyIndexsOfAnswers.map((e: number, i: number) => (
                    <li
                        onClick={handlerClick}
                        className={`${styles.answersItem} ${isActiveButton && styles.activeButton}
                                     ${isActiveButton && carentIndexOfArrey === e ? styles.rightAnswer : ''}`}
                        key={i}
                    >
                        {arreyQuiz[e][0]}
                    </li>
                ))}
            </ul>
            {activeButtonNext && <button className={styles.button} onClick={handlerButtonClickNext}>next</button>}
        </>
    );
};

export default CardBlock;
