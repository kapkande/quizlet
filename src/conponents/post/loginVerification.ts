import axios from "axios";
import { linkInBack } from "../linkInBack";

interface Idata {
    name: string,
    id: number,
    email: string,
    role: string,
    icon: string
}

export async function loginVerification(setData: React.Dispatch<React.SetStateAction<Idata>>) {
    const tocen = document.cookie.split('=')[1];
    if (!tocen || tocen == 'undefined') { return }
    const link: string = ` ${linkInBack}/auth/user`

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
                icon: res.data.icon
            }
            setData(data);
        })
        .catch(error => {
            console.error(error.response.data);
        });
}
