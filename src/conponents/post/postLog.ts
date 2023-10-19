import axios, { AxiosError } from "axios";
import { linkInBack } from "../linkInBack";
import { useNavigate } from "react-router-dom";
interface iReg {
    password: string
    name: string
}
export async function postLog(data: iReg) {
    const link: string = `${linkInBack}/auth/login`;
    

    if (data.name == '') { return }
    try {
        const respons = await axios.post(link, {}, {
            headers: {
                name: data.name,
                password: data.password
            }
        })
        console.log(respons);
        document.cookie = `tocen=${respons.data.token}`
        
        // if (respons.data == 'Login successful') {
           
        //     console.log(1);
        //     setLogin(true);
            
        //    }

    } catch (e: unknown) {
        const error = e as AxiosError
        console.error(error);
        return error
    }
}