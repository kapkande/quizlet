import ReCAPTCHA from "react-google-recaptcha"
import { PopupAuthInputs } from "./PopupAuthInputs"
import styles from './PopupAuth.module.css'
import { IConfig } from "../basicIntesfaces/config";
import { postReg } from "../post/postReg";
import { postLog } from "../post/postLog";
import { SquareButton } from "../buttons/squareButton/SquareButton";
interface IFormBlock {
    children: React.ReactNode;
    isReady: boolean;
    swopPopup?: () => void;
    setReady: React.Dispatch<React.SetStateAction<boolean>>;
    config: IConfig;
    popupRefTerm: React.MutableRefObject<any>;
    name: string;
    password: string;
    email: string;
    isSignUp: boolean;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;

}
export function FormBlock({ swopPopup, isReady, setReady, config, popupRefTerm, name, password, email, isSignUp, setName, setPassword, setEmail

}: IFormBlock) {
    function transitionEnd() {
        popupRefTerm.current.style.right = '0%'
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isReady) { alert(); return }
        if (isSignUp) {
            await postReg({ name, password, email }).then(() => {
                window.location.reload();
            })
        } else {
            await postLog({ name, password }).then(() => {
                window.location.reload();
            })
        }
    }
    return (
        <div
            onTransitionEnd={transitionEnd}
            ref={popupRefTerm}
            className={styles.formBlock} >
            <form className={styles.form} onSubmit={handleSubmit}>
                <PopupAuthInputs
                    name={name}
                    setName={setName}
                    password={password}
                    setPassword={setPassword}
                    email={email}
                    setEmail={setEmail}
                    isSignUp={isSignUp}
                >
                </PopupAuthInputs>
                <ReCAPTCHA className={styles.ReCAPTCHA}
                    sitekey={config.recaptcha}
                    onChange={() => { setReady(true) }}
                />
                <div className={styles.buttonBlock}>
                    <SquareButton>{isSignUp ? "Sing up" : "Sing in"}</SquareButton>
                    <button className={styles.buttonBotton} type="button" onClick={swopPopup}>{isSignUp ? "Sign In" : "Sign Up"}</button>
                </div>
            </form>
        </div>
    )

}