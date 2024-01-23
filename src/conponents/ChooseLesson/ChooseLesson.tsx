
import { Link } from 'react-router-dom';
import { useLessonsNames } from '../hucsk/useLessonsNames'
import styles from './ChooseLesson.module.css'
import { useCheckVerification } from "../hucsk/useCheckVerification";

export default function ChooseLesson() {
    const { isUser } = useCheckVerification();
    const { lessonsNames, loading, error } = useLessonsNames();
    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!lessonsNames.length) { return }

    return (
        <div className={styles.items}>
            {lessonsNames.map((e: any, i: number) => {
                return (
                    <Link
                        to={{
                            pathname: "/item",
                            search: `id=${String(e.id)}`
                        }}
                        className={styles.item}
                        key={i}
                    >
                        <h1 className={styles.name}>{e.data.name}</h1>
                    </Link>)
            })}
            {isUser &&
                <>

                </>}
            {isUser &&
                <Link
                    to="/createLesson" className={styles.item}>
                    <h1 className={styles.name}>Create lessons</h1>
                </Link>}
        </div >
    )
}