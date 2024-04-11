
import { Link } from 'react-router-dom';
import styles from './ChooseLesson.module.css'
import { useUsersLessons } from '../../hucsk/useUsersLessons';
import { IUserData } from '../../basicIntesfaces/userData';


interface IUsersLessons {
    userData: IUserData
    isUser: boolean
}
export default function UsersLessons({ userData, isUser }: IUsersLessons) {
    const { usersLessons, loading, error } = useUsersLessons(userData.name);
    if (loading) {
        return (<h1>loading...</h1>)
    }
    if (error) {
        return (<h1>{error}</h1>)
    }
    if (!usersLessons.length) { return }

    return (
        <div className={styles.ownItems}>
            <div className={styles.line}>Your lessons</div>
            {usersLessons.map((e: any, i: number) => {
                return (
                    <div className={styles.item} key={i}>
                        <Link
                            to={{
                                pathname: `/item/${userData.name}`,
                                search: `id=${e.id}`
                            }}
                        >
                            <h1 className={styles.name}>{e.lesson.name ? e.lesson.name : "no name"}</h1>
                        </Link>
                        {/* <span></span> */}
                    </div>
                )
            })}
            {isUser &&
                <div className={styles.item}>
                    <Link
                        to="/createLesson"
                        className={styles.Item}
                    // onFocus={handle}
                    >
                        <h1 className={styles.name}>Create lessons</h1>
                    </Link>
                </div>
            }
        </div >
    )
}