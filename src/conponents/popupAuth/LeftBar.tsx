import { OvalButton } from "../buttons/ovalButton/OvalButton";
import styles from './PopupAuth.module.css'
interface ILeftBar{
    swopPopup?: () => void;
    isSignUp: boolean;
}
export function LeftBar({isSignUp, swopPopup}: ILeftBar) {
    return (
        isSignUp ?
            <div className={styles.leftBar}>
                {/* <h2>Quizlet</h2> */}
                <p>Already a member?</p>
                <OvalButton fun={swopPopup}>Sign in</OvalButton>
            </div>
        :
            <div className={styles.leftBar}>
                <p>Create Account</p>
                <OvalButton fun={swopPopup}>Sign up</OvalButton>
            </div>
    )
}