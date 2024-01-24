
import { Link } from 'react-router-dom';
import styles from './ChooseLesson.module.css'
import { useUsersLessons } from '../hucsk/useUsersLessons';

interface IUserData {
    name: string;
    id: number;
    email: string;
    role: string;
}
export default function UsersLessons({ userData }: { userData: IUserData }) {
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
                        <h1 className={styles.name}>{e.lessons.name}</h1>
                    </Link>)
            })}
        </div >
    )
}