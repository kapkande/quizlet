import axios, { AxiosError } from "axios";
import { config } from "../config";


export async function postChangePermission(userID:number, permission:string) {
    if (!Boolean(userID) && !Boolean(permission)){return}
    const link: string = `${config.linkInBack}/edit/userPermission`;
    try { 
        await axios.post(link, {}, {
            headers: {
                id: userID,
                permission: permission
            }
        })
    } catch (e: unknown) {
        const error = e as AxiosError
        console.error(error.message);
        return error.message
    }
}