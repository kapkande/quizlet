import { useRef, useState } from "react";
import { config } from "../config";
import styles from './PopupAuth.module.css'


import { LeftBar } from "./LeftBar";
import { FormBlock } from "./FormBlock";

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
        setPopupSignUp((p) => !p);
        setPopupSignIn((p) => !p);
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
                    <LeftBar swopPopup={swopPopup} isSignUp={isSignUp}></LeftBar>
                    <FormBlock
                        swopPopup={swopPopup}
                        isSignUp={isSignUp}
                        name={name}
                        password={password}
                        setName={setName}
                        isReady={isReady}
                        setReady={setReady}
                        config={config}
                        setPassword={setPassword}
                        email={email}
                        setEmail={setEmail}
                        popupRefTerm={popupRefTerm}
                    >
                    </FormBlock>
                </div>
            </div>
        </div>
    )
}