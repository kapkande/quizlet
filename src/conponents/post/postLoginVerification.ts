import axios, { AxiosError } from "axios";
import { config } from "../config";

interface Idata {
    name: string,
    id: number,
    email: string,
    role: string,
}

export async function loginVerification(setData: React.Dispatch<React.SetStateAction<Idata>>, setAdmin: React.Dispatch<React.SetStateAction<boolean>>, setUser: React.Dispatch<React.SetStateAction<boolean>>) {
    const tocen = document.cookie.split(';').find(cookie => cookie.includes('tocen'))?.split('=')[1];
    if (!tocen || tocen == 'undefined') { return }
    const link: string = ` ${config.linkInBack}/auth/user`
    try {
        await axios.post(link, {}, {
            headers: {
                tocen: tocen
            }
        }).then(res => {
            const data: Idata = {
                name: res.data.userName,
                id: res.data.id,
                email: res.data.email,
                role: res.data.permission,
            }
            data.role === 'admin' ? setAdmin(true) : setAdmin(false);
            data.role ? setUser(true) : setUser(false);
            setData(data);
            return data
        })
    } catch (e: unknown) {
        document.cookie = `tocen=''`
        const error = e as AxiosError
        return error
    }
}
