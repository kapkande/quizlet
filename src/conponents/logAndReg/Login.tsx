import { useState } from "react";
import { postLog } from "../post/postLog";

export function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [log, setLog] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        postLog({ name, password });
    }

    return (
        <div>
            {!log && <form onSubmit={handleSubmit}>
                <label>name
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>password
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">
                    Sign in
                </button>
            </form>}
            {log && <h2>Нou have already logged in as {name}</h2>}
        </div>

    )
}