
import { Link } from 'react-router-dom';
import { useLessons } from '../hucsk/useLessons'
import styles from './Lessons.module.css'

export default function Lessons() {
    const { lasons, loading, error } = useLessons();

    // function handlerClick(key: string) {
    //     console.log(key);
    // }
    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    return (
        <div className={styles.items}>
            {Object.keys(lasons).map((key: string, i: number) => {
                return (
                    <Link
                        to={{
                            pathname: "/item",
                            search: key
                        }}
                        className={styles.item}
                        key={i}
                    >
                        <h1 className={styles.name}>{key}</h1>
                    </Link>)
            })}
        </div >
    )
}