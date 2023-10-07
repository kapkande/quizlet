
import { Link } from 'react-router-dom';
import { useLessonsNames } from '../hucsk/useLessonsNames'
import styles from './ChooseLesson.module.css'
import { useState } from 'react'

export default function ChooseLesson() {
    const { lessonsNames, loading, error } = useLessonsNames();
    const isAdmin = true
    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    return (
        <div className={styles.items}>
            {lessonsNames.map((e, i: number) => {
                return (
                    <Link
                        to={{
                            pathname: "/item",
                            search: `id=${String(e.id)}`
                        }}
                        className={styles.item}
                        key={i}
                    >
                        <h1 className={styles.name}>{e.name}</h1>
                    </Link>)
            })}
            {isAdmin && <Link
                to="/createLessen" className={styles.item}>
                <h1 className={styles.name}>Create lessons</h1>
            </Link>}
        </div >
    )
}