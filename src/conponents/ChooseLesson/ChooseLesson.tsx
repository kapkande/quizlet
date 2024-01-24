
import { Link } from 'react-router-dom';
import styles from './ChooseLesson.module.css'
import { useCheckVerification } from "../hucsk/useCheckVerification";
import Lessons from './Lessons';
import UsersLessons from './usersLessons';


export default function ChooseLesson() {
    const { userData, isUser } = useCheckVerification();
    return (
        <>
            <Lessons></Lessons>
            {isUser &&
                <Link
                    to="/createLesson" className={styles.item}>
                    <h1 className={styles.name}>Create lessons</h1>
                </Link>}
            {isUser && <UsersLessons userData={userData}></UsersLessons>}
        </>
    )
}