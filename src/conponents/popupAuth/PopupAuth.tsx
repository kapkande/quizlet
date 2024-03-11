import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { config } from "../config";
import styles from './PopupAuth.module.css'
import { PopupAuthInputs } from "./PopupAuthInputs";
import { postReg } from "../post/postReg";
import { postLog } from "../post/postLog";

interface IPopupAuth {
    isSignIn: boolean,
    isSignUp: boolean,
    setPopupSignIn: React.Dispatch<React.SetStateAction<boolean>>,
    setPopupSignUp: React.Dispatch<React.SetStateAction<boolean>>,
}

export function PopupAuth({ setPopupSignIn, setPopupSignUp, isSignIn, isSignUp }: IPopupAuth) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isReady, setReady] = useState(false);
    const popupRefTerm = useRef<any>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isReady) { alert(); return }
        if (isSignUp) {
            postReg({ name, password, email })
        } else {
            postLog({ name, password })
        }
    }
    function handleClosePopup(e: any) {
        if (e.target != e.currentTarget) { return }
        setPopupSignIn(false);
        setPopupSignUp(false);
    }
    function handleMouse(e: any) {
        Object.assign(e.currentTarget, {
            style: `
            --move-x:${(e.clientX - 450 / 2) * 0.05}deg;
            --move-y:${(e.clientY - 750 / 2) * 0.05}deg;
            `
        })
    }
    function swopPopup() {
        popupRefTerm.current.style.right = '-100%';
        setPopupSignUp((p)=>!p);
        setPopupSignIn((p)=>!p);
    }
    function transitionEnd() {
        popupRefTerm.current.style.right = '0%'
    }

    return (
        <div className={isSignIn || isSignUp ? `${styles.wrapper} ${styles.wrapperActive}` : `${styles.wrapper}`} onClickCapture={handleClosePopup}>
            <div
                onMouseMove={handleMouse}
                className={isSignIn || isSignUp ?
                    `${styles.popupAuth} ${styles.popupAuthActive} ` :
                    `${styles.popupAuth}`}>
                {/* <button onClickCapture={handleClosePopup}>XXX</button> */}
                <div className={styles.backgroundImage}>
                    <div className={styles.image1}></div>
                    <div className={styles.backgroundImage}></div>
                </div>
                <div className={styles.imegeBlock}>
                    {isSignUp &&
                        <div className={styles.imegeText}>
                            {/* <h2>Quizlet</h2> */}
                            <p>Already a member?</p>
                            <button className={styles.imegebutton} onClick={swopPopup}>Signin</button>
                        </div>
                    }
                    {isSignIn &&
                        <div className={styles.imegeText}>
                            <p>Create Account</p>
                            <button className={styles.imegebutton} onClick={swopPopup}>Signup</button>
                        </div>
                    }
                    <div
                        onTransitionEnd={transitionEnd}
                        ref={popupRefTerm}
                        className={styles.formBlock} >
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <PopupAuthInputs name={name} setName={setName} password={password} setPassword={setPassword} email={email} setEmail={setEmail} isSignUp={isSignUp}></PopupAuthInputs>
                            <ReCAPTCHA className={styles.ReCAPTCHA}
                                sitekey={config.recaptcha}
                                onChange={() => { setReady(true) }}
                            />
                            {isSignUp &&
                                <div className={styles.buttonBlock}>
                                    <button className={styles.button} type="submit">Sing up</button>
                                    <button className={styles.buttonBotton} onClick={swopPopup}>Sign In</button>
                                </div>
                            }
                            {isSignIn &&
                                <div className={styles.buttonBlock}>
                                    <button className={styles.button} type="submit">Sing in</button>
                                    <button className={styles.buttonBotton} onClick={swopPopup}>Sign Up</button>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}