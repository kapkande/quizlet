import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { linkInBack } from "../linkInBack";

export default function Nav() {
    const [login, setLogin] = useState(false)
    // console.log(document.cookie);

    useEffect(() => {
        const setSingOut = async () => {
            if (!document.cookie) { return }
            // console.log(document.cookie.split('='));
            const link: string = `${linkInBack}/auth/user`
            
            await axios.get(link)
            .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.error(error.response.data);
              });
        }
        setSingOut();
    }, []);

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
                    <Link to="#" className={styles.item} onClick={() => setLogin(false)}> Sing out </Link>
                </li>}

            </ul>
        </nav>
    )
}