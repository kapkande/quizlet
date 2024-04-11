import styles from './PopupGpt.module.css'
import { postGpt } from '../post/postGpt';
import { setLocalStorage } from '../setOrGetLocalStorage/setLocalStorage';
import { getLocalStorage } from '../setOrGetLocalStorage/getLocalStorage';
interface IFormGpt {
    setRequest: React.Dispatch<React.SetStateAction<string>>;
    setResponse: React.Dispatch<React.SetStateAction<string[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    request: string;
}
export function FormGpt({ setRequest, setResponse, setLoading, loading, request }: IFormGpt) {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (loading) { return; }
        setLoading(true);
        try {
            if (request.trim() === "") {
                return;
            }
            const { data } = await postGpt(request)
            console.log(data);
            setLocalStorage(data, "gptResponse", request);
            setResponse(getLocalStorage("gptResponse"));
            setRequest("");
        } catch (error) {
            console.error("Error while fetching data:", error);
            setLocalStorage('Error', "gptResponse", request);
            setResponse(getLocalStorage("gptResponse"));
        } finally {
            setLoading(false);
        }
    }
    return (
        <form onSubmit={handleSubmit} className={styles.requestForm}>
            <input placeholder='Message'
                aria-label='Message'
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                type="text"
            />
            <button className={styles.sendButton} type="submit"></button>
        </form>
    )
}