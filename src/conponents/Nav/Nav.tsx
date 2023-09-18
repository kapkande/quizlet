import { Link } from "react-router-dom";
import styles from './Nav.module.css'
export default function Nav () {
    return (
        <nav>
            <ul className={styles.items}>
                <li>
                    <Link to="/" className={styles.item}> Home </Link>
                </li>
            </ul>
        </nav>
    )
}