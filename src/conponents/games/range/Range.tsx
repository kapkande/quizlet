import styles from './Range.module.css'
export default function Range({ arreyQuiz, indexActive }: any) {
    if (!arreyQuiz || arreyQuiz.length < indexActive) { return }
    const newArray = [];
    for (let i = 0; i < arreyQuiz.length; i++) {
        newArray.push(i)
    }

    return (
        <div className={styles.range}>
            {newArray.map((e: number) => {
                return (
                    <div
                        key={e}
                        className={`${styles.stick} ${indexActive + 1 > e && styles.stickActive}`}>
                    </div>
                )
            })}
        </div>
    )
}