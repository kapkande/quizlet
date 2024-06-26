import styles from './PopupAuth.module.css'
interface IPopupAuthInputs {
    children: React.ReactNode;
    name: string
    password: string
    email: string
    isSignUp: boolean
    setName: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
}
export function PopupAuthInputs({ name, password, email, isSignUp, setName, setPassword, setEmail }: IPopupAuthInputs) {
    return (
        <>
            <label>
                name
                <input
                    // placeholder="enter your name"
                    className={styles.input}
                    type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                password
                <input
                    // placeholder="enter your password" 
                    className={styles.input}
                    type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </label>
            {isSignUp &&
                <label>
                    email
                    <input
                        // placeholder="enter your email"
                        className={styles.input}
                        type="text" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
            }
        </>
    )
}