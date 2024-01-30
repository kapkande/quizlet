import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { config } from "../config";
import styles from './PopupAuth.module.css'
import { PopupAuthInputs } from "./PopupAuthInputs";

interface IPopupAuth {
    isPopup: boolean,
    setPopup: React.Dispatch<React.SetStateAction<boolean>>,
    isSignIn: boolean,
    isSignUp: boolean,
    setPopupSignIn: React.Dispatch<React.SetStateAction<boolean>>,
    setPopupSignUp: React.Dispatch<React.SetStateAction<boolean>>,
}

export function PopupAuth({ setPopupSignIn, setPopupSignUp, isPopup, setPopup, isSignIn, isSignUp }: IPopupAuth) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isReady, setReady] = useState(false);


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();
        if (!isReady) { alert(); return }
        // postReg({ name, password, email })
    }
    function handleClosePopup(e: any) {
        if (e.target != e.currentTarget) { return }
        setPopup(false);
        setPopupSignIn(false);
        setPopupSignUp(false);
    }
    return (
        <div className={isPopup ? `${styles.wrapper} ${styles.wrapperActive}` : `${styles.wrapper}`} onClickCapture={handleClosePopup}>
            <div className={isPopup ? `${styles.popupAuth} ${styles.popupAuthActive} ` : `${styles.popupAuth}`}>
                {/* <button onClickCapture={handleClosePopup}>XXX</button> */}
                <div className={styles.imegeBlock}>
                    {isSignUp &&
                        <div className={styles.imegeText}>
                            {/* <h2>Quizlet</h2> */}
                            <p>Already a member?</p>
                            <button className={styles.imegebutton} onClick={() => { setPopupSignUp(false), setPopupSignIn(true) }}>Signin</button>
                        </div>
                    }
                    {isSignIn &&
                        <div className={styles.imegeText}>
                            <p>Create Account</p>
                            <button className={styles.imegebutton} onClick={() => { setPopupSignUp(true), setPopupSignIn(false) }}>Signup</button>
                        </div>
                    }
                    <div className={styles.formBlock} >
                        <form onSubmit={handleSubmit}>
                            <PopupAuthInputs name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail} isSignUp={isSignUp}></PopupAuthInputs>
                            <ReCAPTCHA className={styles.ReCAPTCHA}
                                sitekey={config.recaptcha}
                                onChange={() => { setReady(true) }}
                            />
                            {isSignUp &&
                                <>
                                    <button className={styles.button} type="submit">Sing up</button>
                                    <button className={styles.buttonBotton} onClick={() => { setPopupSignUp(false), setPopupSignIn(true) }}>Sign In</button>
                                </>
                            }
                            {isSignIn &&
                                <>
                                    <button className={styles.button} type="submit">Sing in</button>
                                    <button className={styles.buttonBotton} onClick={() => { setPopupSignUp(true), setPopupSignIn(false) }}>Sign Up</button>
                                </>
                            }
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}