import { postGpt } from '../post/postGpt';
import styles from './PopupGpt.module.css'
import { useState } from 'react';



export function PopupGpt() {
    const [request, setRequest] = useState("");
    const [response, setResponse] = useState("ask me a question");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const res = await postGpt(request) as any;
            console.log(res);
            // if ( "data" in res){
            //     setResponse(res.data)
            // }
        } catch (error) {
            console.error("Error while fetching data:", error);
        }


    }
    return (
        <div className={styles.wrap}>
            <div className={styles.responseBlock}>
                <h4>{response}</h4>
            </div>
            <form onSubmit={handleSubmit} className={styles.requestForm}>
                <input value={request} onChange={(e) => setRequest(e.target.value)} type="text" />
                <button type="submit">Send</button>
            </form>

        </div>
    )
}