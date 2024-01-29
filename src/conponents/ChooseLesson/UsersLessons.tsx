
import { Link } from 'react-router-dom';
import styles from './ChooseLesson.module.css'
import { useUsersLessons } from '../hucsk/useUsersLessons';

interface IUserData {
    name: string;
    id: number;
    email: string;
    role: string;
}
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
        <div className={styles.items}>
            <div className={styles.line}>Your lessons</div>
            {usersLessons.map((e: any, i: number) => {
                return (
                    <Link
                        to={{
                            pathname: `/item/${userData.name}`,
                            search: `id=${e.id}`
                        }}
                        className={styles.item}
                        key={i}
                    >
                        <h1 className={styles.name}>{e.lesson.name}</h1>
                    </Link>
                )
            })}
            {isUser &&
                <Link
                    to="/createLesson" className={styles.item}>
                    <h1 className={styles.name}>Create lessons</h1>
                </Link>
            }
        </div >
    )
}