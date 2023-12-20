import axios, { AxiosError } from "axios";
import { linkInBack } from "../linkInBack";

interface iReg {
    email: string
    password: string
    name: string
}

export async function postReg(data: iReg) {
    const link: string = `${linkInBack}/auth/registration`
    if (data.name == '') { return }
    try {
        console.log(data);
        const respons = await axios.post(link, {}, {
            headers: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
        // console.log(respons.data);
        if (respons.data == 'Account created successfully') {
            console.log(1);
          }
    } catch (e: unknown) {
        const error = e as AxiosError
        return error
    }
}