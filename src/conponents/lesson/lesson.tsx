
import { useLesson } from '../hucsk/useLesson'
import styles from './Lesson.module.css'
import { Link, useLocation } from "react-router-dom";

export default function Lesson() {
    const search = useLocation().search;

    // const { lesson, loading, error } = useLesson(search);

    // if (loading) {
    //     return (<h1>loading...</h1>)
    // }
    // if (error) {
    //     return (<h1>{error}</h1>)
    // }
   return (
        <div className={styles.games}>
            <ul className={styles.gamesList}>
                <li>
                    <Link to={{
                        pathname: "/card",
                        search: search
                    }}
                        className={styles.item}>
                        <h1 className={styles.name}>Card</h1>
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/learningL1",
                        search: search
                    }}
                        className={styles.item}>
                        <h1 className={styles.name}>learning</h1>
                    </Link>
                </li>
            </ul>
        </div >
    )
}