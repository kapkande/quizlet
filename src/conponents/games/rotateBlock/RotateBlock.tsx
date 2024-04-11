import styles from './rotateBlock.module.css';

interface IRotateBlock {
    setTermActive: React.Dispatch<React.SetStateAction<boolean>>;
    termActive: boolean;
    indexActive: number;
    arreyQuiz: string[][];
    isCardGame?: boolean;
}
export function RotateBlock({ setTermActive, termActive, indexActive = 0, arreyQuiz, isCardGame = false }: IRotateBlock) {
    return (
        <div onClick={ isCardGame ? () => setTermActive(pr => !pr) : undefined} className={`${styles.cardBlock} `}>
            <div className={`${styles.item} ${!termActive ? styles.itemActive : ''}`}>
                <div className={`${styles.term}`}>{arreyQuiz[indexActive][0]}</div>
                <div className={`${styles.description}`}>{arreyQuiz[indexActive][1]}</div>
            </div>
        </div>
    )
}