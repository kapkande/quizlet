import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { config } from "../config";

interface IData {
    data: string[][];
    name: string
}
interface Lesson {
    id: string;
    data: IData;
}

export function useLesson(userName:string) {
    const [lesson, setLason] = useState<Lesson>(Object);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const search = useLocation().search.split('?id=')[1]; //заменить
    console.log(userName);
  let data1 = `${userName === '/card' ? '' : 'user/' + userName}`

    
    const link: string = `${config.linkInBack}/data/${data1}/${search}`
console.log(link);
    async function fetchProduct() {
        try {
            setError('')
            setLoading(true)
            const respons = await axios.get<Lesson>(link)
            console.log(respons);
            setLason(respons.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return { lesson, loading, error }
}