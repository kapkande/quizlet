import axios, { AxiosError } from "axios";
import { config } from "../config";

interface iReg {
    password: string
    name: string
}
export async function postLog(data: iReg) {
    let text = '';
    const link: string = `${config.linkInBack}/auth/login`;
    if (data.name == '') { return }
    try { 
        await axios.post(link, {}, {
            headers: {
                name: data.name,
                password: data.password
            }
        }).then((r) => {
            console.log(`tocen=${r.data.token}`);
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