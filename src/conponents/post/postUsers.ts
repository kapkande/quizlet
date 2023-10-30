import axios from "axios";
import { linkInBack } from "../linkInBack";

interface Idata {
    dateIn: string
    email: string
    id: number
    ownLessons: {}
    permission: string
    userName: string
    userPassword: string
}

export async function postUsers(setData: React.Dispatch<React.SetStateAction<Idata[]>>) {
    const tocen = document.cookie.split('=')[1];
    if (!tocen || tocen == 'undefined') { return }
    const link: string = ` ${linkInBack}/auth/users`

    await axios.post(link, {}, {
        headers: {
            tocen: tocen
        }
    })
        .then(res => {
            // console.log(res.data);
            setData(res.data)
            // setData(data);
        })
        .catch(error => {
            const e:string = String(error.response.data)
            console.error(e);
        });
}
