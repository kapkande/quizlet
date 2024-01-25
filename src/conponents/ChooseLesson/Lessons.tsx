
import { Link } from 'react-router-dom';
import { useLessons } from '../hucsk/useLessons'
import styles from './ChooseLesson.module.css'

export default function Lessons() {
    const { lessons, loading, error } = useLessons();
    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!lessons.length) { return }

    return (
        <div className={styles.items}>
            {lessons.map((e: any, i: number) => {
                return (
                    <Link
                        to={{
                            pathname: "/item",
                            search: `id=${e.id}`
                        }}
                        className={styles.item}
                        key={i}
                    >
                        <h1 className={styles.name}>{e.lesson.name}</h1>
                    </Link>)
            })}
        </div >
    )
}