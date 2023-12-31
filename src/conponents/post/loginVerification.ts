import axios from "axios";
import { config } from "../config";

interface Idata {
    name: string,
    id: number,
    email: string,
    role: string,
}

export async function loginVerification(setData: React.Dispatch<React.SetStateAction<Idata>>) {
    const tocen = document.cookie.split('=')[1];
    if (!tocen || tocen == 'undefined') { return }
    const link: string = ` ${config.linkInBack}/auth/user`

    await axios.post(link, {}, {
        headers: {
            tocen: tocen
        }
    })
        .then(res => {
            const data: Idata = {
                name: res.data.userName,
                id: res.data.id,
                email: res.data.email,
                role: res.data.permission,
            }
            setData(data);
        })
        .catch(error => {
            console.error(error.response.data);
        });
}
