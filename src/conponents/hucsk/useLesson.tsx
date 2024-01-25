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
    lesson: IData;
    userName: string;
}

export function useLesson() {
    const nameFromSearch = useLocation().pathname.split('/').reverse()[0];
    const [lesson, setLason] = useState<Lesson>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const search = useLocation().search.split('?id=')[1];
    let userName: string

    if (['card', 'learningL1', 'learningL2'].includes(nameFromSearch)) { userName = '' }
    else {
        userName = 'user/' + nameFromSearch + '/'
    };

    const link: string = `${config.linkInBack}/data/${userName}${search}`
    async function fetchProduct() {
        try {
            setError('')
            setLoading(true)
            const respons = await axios.get(link)
           
            if (userName) {
                setLason(respons.data[0])
            } else { setLason(respons.data) }

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