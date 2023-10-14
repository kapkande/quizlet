import { useState } from "react";
interface NavProps {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  }
export function Login({ setLogin }: NavProps) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLogin(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>name
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>password
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">
                Sign in
            </button>
        </form>
    )
}