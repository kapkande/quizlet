import styles from './Create.module.css';
interface IKey {
    i: number
}

export default function CreateInputs({ i }: IKey) {
    function handleClick(e: any) {
        e.preventDefault();
        if (e.target.tagName != "BUTTON") { return }
        e.currentTarget.remove()
    }

    return (
        <div onClick={handleClick} key={i}>
            <label>term
                <input type="text" />
            </label>
            <label>description
                <input type="text" />
            </label>
            <button className={styles.button}>-</button>
        </div >
    )
}