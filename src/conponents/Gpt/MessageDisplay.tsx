import styles from './PopupGpt.module.css'
interface IMessageDisplay {
    response: string[]
}
export function MessageDisplay({ response }: IMessageDisplay) {
    return (
        response.map(({ user, bot }: any, i) => {
            return (<div key={i}>
                <div className={styles.user}>
                    <div className={styles.message}>{user}</div>
                </div>
                <div className={styles.bot}>
                    <div className={styles.message}>{bot}</div>
                </div>
            </div>)
        })
    )
}