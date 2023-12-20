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
        icon: '',
    })

    useEffect(() => {
        loginVerification(setUserData)
    }, []);

    useEffect(() => {
        userData.role === 'admin' ? setAdmin(true) : setAdmin(false);
        userData.role ? setUser(true) : setUser(false);
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
                {isAdmin && <li>
                    <Link to="/users" className={styles.item}> List of users </Link>
                </li>}
                {isUser &&
                    <li className={styles.userBlock}>
                        <Link to="/settings" className={styles.settings}>
                            <div className={styles.icon} >
                                <div style={{
                                    backgroundImage: `url('${userData.icon}')`
                                }} className={styles.svg}>
                                </div>
                                <div style={{
                                    backgroundImage: `url('./public/nav/settings.svg')`
                                }} className={styles.svg}>
                                </div>
                            </div>
                            <div>{userData.name}</div>
                        </Link>
                        <a className={`${styles.item} ${styles.buttonOut}`} onClick={() => { document.cookie = "tocen="; }} href="/">Sing out</a>
                        {/* <Link to="/" className={styles.item} onClick={() => { document.cookie = "tocen="; }}> Sing out </Link> */}
                    </li>}
            </ul>
        </nav>
    )
}