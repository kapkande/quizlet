import styles from './Range.module.css'
export default function Range({ arreyItem, indexActive }: any) {
    // console.log(arreyItem.length +' ' +indexActive);
    if (arreyItem.length < indexActive) { return }
    return (
        <div className={styles.range}>
            {arreyItem.map((e: string[], i: number) => {
            console.log(e.length);
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