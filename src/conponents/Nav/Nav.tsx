import { Link } from "react-router-dom";
import styles from './Nav.module.css'

interface NavProps {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function Nav({ login, setLogin }: NavProps) {
    function setSingOut() {
        setLogin(false)
    }
    return (
        <nav>
            <ul className={styles.items}>
                <li>
                    <Link to="/" className={styles.item}> Home </Link>
                </li>
                {!login && <ul className={styles.items}>
                    <li>
                        <Link to="/login" className={styles.item}> Sign in </Link>
                    </li>
                    <li>
                        <Link to="/register" className={styles.item}> Sign up </Link>
                    </li>
                </ul>}
                {login && <li>
                    <Link to="#" className={styles.item} onClick={setSingOut}> Sing out </Link>
                </li>}

            </ul>
        </nav>
    )
}