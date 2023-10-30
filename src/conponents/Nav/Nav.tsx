import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import { useEffect, useState } from "react";

import { loginVerification } from "../post/loginVerification";

export default function Nav() {
    const [userData, setUserData] = useState({
        name: '',
        id: -1,
        email: '',
        role: [''],
    })
    useEffect(() => {
        loginVerification(setUserData);
    }, []);

    return (
        <nav>
            <ul className={styles.items}>
                <li>
                    <Link to="/" className={styles.item}> Home </Link>
                </li>
                {!userData.name && <ul className={styles.items}>
                    <li>
                        <Link to="/login" className={styles.item}> Sign in </Link>
                    </li>
                    <li>
                        <Link to="/register" className={styles.item}> Sign up </Link>
                    </li>
                </ul>}
                {userData.name && <li>
                    <div>{userData.name}</div>
                    <a className={styles.item} onClick={() => { document.cookie = "tocen="; }} href="/">Sing out</a>
                    {/* <Link to="/" className={styles.item} onClick={() => { document.cookie = "tocen="; }}> Sing out </Link> */}
                </li>}
                <li>
                    <Link to="/users" className={styles.item}> List of users </Link>
                </li>
            </ul>
        </nav>
    )
}