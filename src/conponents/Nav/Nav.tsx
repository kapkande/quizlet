import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import { config } from "../config";
import { IUserData } from "../basicIntesfaces/userData";


interface INav {
    setPopupSignIn: React.Dispatch<React.SetStateAction<boolean>>,
    setPopupSignUp: React.Dispatch<React.SetStateAction<boolean>>,
    userData: IUserData,
    isAdmin: boolean,
    isUser: boolean
}

export default function Nav({ setPopupSignIn, setPopupSignUp, userData, isAdmin, isUser }: INav) {
    function handleOpenPopup() {
        setPopupSignUp(true);
    }

    function handleOpenPopin() {
        setPopupSignIn(true);
    }

    return (
        <nav>
            <div className="wrapper">
                <ul className={styles.items}>
                    <li>
                        <Link to="/" className={styles.item}> Home </Link>
                    </li>
                    {!isUser && <ul className={styles.items}>
                        <li>
                            <button className={styles.item} onClick={handleOpenPopin}>Sign in</button>
                        </li>
                        <li>
                            <button className={styles.item} onClick={handleOpenPopup}>Sign up</button>
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
                                        backgroundImage: `url('${config.linkInBack}/load/icon/${userData.name}')`
                                    }} className={styles.svg}>
                                    </div>
                                    <div style={{
                                        backgroundImage: `url('${config.linkInBack}/load/settingSvg')`
                                    }} className={`${styles.svg} ${styles.settingSvg}`}>
                                    </div>
                                </div>
                                <div>{userData.name}</div>
                            </Link>
                            <a className={`${styles.item} ${styles.buttonOut}`} onClick={() => { document.cookie = "tocen="; }} href="/">Sing out</a>
                        </li>}
                </ul>
            </div>
        </nav >
    )
}