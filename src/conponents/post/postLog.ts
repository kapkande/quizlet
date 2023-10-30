import axios, { AxiosError } from "axios";
import { linkInBack } from "../linkInBack";

interface iReg {
    password: string
    name: string
}
export async function postLog(data: iReg) {
    const link: string = `${linkInBack}/auth/login`;
    
    if (data.name == '') { return }
    try {
        await axios.post(link, {}, {
            headers: {
                name: data.name,
                password: data.password
            }
        }).then((r)=>{
            document.cookie = `tocen=${r.data.token}`
        })
      
        // console.log(respons.data.token);
        // if (respons.data == 'Login successful') {
           
        //     console.log(1);
        //     setLogin(true);
            
        //    }
        return true
       
    } catch (e: unknown) {
        const error = e as AxiosError
        console.error(error);
        return error
    }
}