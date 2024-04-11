import styles from './squareButton.module.css';
interface ISquareButton {
    children: React.ReactNode;
    fun?: () => void;
}
export function SquareButton({ children, fun  }: ISquareButton): JSX.Element {
    return (
        <button type="submit" className={styles.squareButton} onClick={fun}>{children}</button>
    )
}