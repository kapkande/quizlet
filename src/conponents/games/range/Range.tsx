import styles from './Range.module.css'
export default function Range({ arreyQuiz, indexActive }: any) {
    if (!arreyQuiz || arreyQuiz.length < indexActive) { return }
    return (
        <div className={styles.range}>
            {arreyQuiz.map((e: string[], i: number) => {
                return (
                    <div
                        key={i}
                        className={`${styles.stick} ${indexActive + 1 > i && styles.stickActive}`}>
                    </div>
                )
            })}
        </div>
    )
}