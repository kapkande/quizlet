import axios, { AxiosError } from "axios";
import { linkInBack } from "../linkInBack";
import { useNavigate } from "react-router-dom";
interface iReg {
    password: string
    name: string
}
interface NavProps {
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
export async function postLog(data: iReg, { setLogin }: NavProps) {
    const link: string = `${linkInBack}/log`;
    

    if (data.name == '') { return }
    try {
        const respons = await axios.post(link, {}, {
            headers: {
                name: data.name,
                password: data.password
            }
        });
         
        console.log(respons.data);
        if (respons.data == 'Login successful') {
           
            console.log(1);
            setLogin(true);
            let navigate  = useNavigate();
            navigate("/");
           }

    } catch (e: unknown) {
        const error = e as AxiosError
        return error
    }
}