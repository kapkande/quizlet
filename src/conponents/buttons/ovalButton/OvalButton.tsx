import styles from './ovalButton.module.css';
interface IOvalButton {
    // className: string;
    children: React.ReactNode;
    fun?: () => void;
    // text: string;
}
export function OvalButton({ children, fun  }: IOvalButton): JSX.Element {
    return (
        <button className={styles.ovalButton} onClick={fun}>{children}</button>
    )
}