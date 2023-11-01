import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import { useEffect, useState } from "react";

import { loginVerification } from "../post/loginVerification";

export default function Nav() {
    const [isAdmin, setAdmin] = useState(false);
    const [isUser, setUser] = useState(false);

    const [userData, setUserData] = useState({
        name: '',
        id: -1,
        email: '',
        role: '',
    })
    useEffect(() => {
        loginVerification(setUserData)
        console.log(1);
    }, [userData]);

    useEffect(() => {
        userData.role === 'admin' ? setAdmin(true) : setAdmin(false);
        userData.role ? setUser(true) : setUser(false);
        console.log(2);
    }, [userData]);


    return (
        <nav>
            <ul className={styles.items}>
                <li>
                    <Link to="/" className={styles.item}> Home </Link>
                </li>
                {!isUser && <ul className={styles.items}>
                    <li>
                        <Link to="/login" className={styles.item}> Sign in </Link>
                    </li>
                    <li>
                        <Link to="/register" className={styles.item}> Sign up </Link>
                    </li>
                </ul>}
                {isUser && <li>
                    <div>{userData.name}</div>
                    <a className={styles.item} onClick={() => { document.cookie = "tocen="; }} href="/">Sing out</a>
                    {/* <Link to="/" className={styles.item} onClick={() => { document.cookie = "tocen="; }}> Sing out </Link> */}
                </li>}
                {isAdmin && <li>
                    <Link to="/users" className={styles.item}> List of users </Link>
                </li>}
            </ul>
        </nav>
    )
}