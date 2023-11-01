import { useState } from "react";
import { postLog } from "../post/postLog";
import InfoPopup from "../InfoPopup/InfoPopup";
import { useNavigate } from 'react-router-dom';
export function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('');
    const [log, setLog] = useState(false);
    const [loading, setLoading] = useState(false);

    const [color, setColor] = useState('');
    const [textEvent, setTextEvent] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true)
        setColor('')
        postLog({ name, password }).then((e: any) => {
            // setTextEvent(e)
            if (e === 'Login successful') {
                setColor('green')
                setTextEvent(`You have already logged in as ${name}`)
                navigate('/');
                return
            }
            setColor('red');
            setTextEvent(e);
        })

        setLoading(false)
    }
    if (loading) { return <h1>loading...</h1> }
    return (
        <div>
            <InfoPopup color={color} text={textEvent}></InfoPopup>
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
        </div>

    )
}