import axios, { AxiosError } from "axios";
import { config } from "../config";


export async function postChangePermission(userID:number, permission:string) {
    if (!Boolean(userID) && !Boolean(permission)){return}
    console.log(1);
    let text = '';
    const link: string = `${config.linkInBack}/edit/userPermission`;
    try { 
        await axios.post(link, {}, {
            headers: {
                id: userID,
                permission: permission
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