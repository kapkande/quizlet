
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
            {lasons.map((e, i: number) => {
                return (
                    <Link
                        to={{
                            pathname: "/item",
                            search: e.id
                        }}
                        className={styles.item}
                        key={i}
                    >
                        <h1 className={styles.name}>{e.id}</h1>
                    </Link>)
            })}
        </div >
    )
}