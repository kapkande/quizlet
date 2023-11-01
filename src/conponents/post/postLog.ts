import axios, { AxiosError } from "axios";
import { linkInBack } from "../linkInBack";

interface iReg {
    password: string
    name: string
}
export async function postLog(data: iReg) {
    let text = '';
    const link: string = `${linkInBack}/auth/login`;
    if (data.name == '') { return }
    try { 
        await axios.post(link, {}, {
            headers: {
                name: data.name,
                password: data.password
            }
        }).then((r) => {
            document.cookie = `tocen=${r.data.token}`
            text = r.data.text
        })

        return text;
    } catch (e: unknown) {
        const error = e as AxiosError
        console.error(error.message);
        return error.message
    }
}