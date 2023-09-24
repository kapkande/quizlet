import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { linkInBack } from "../linkInBack";

interface Lesson {
    id: string;
    data: string[][];
    name: string
}

export function useLesson() {
    const [lesson, setLason] = useState<Lesson>(Object);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const search = useLocation().search.split('?id=')[1];
    const link: string = `${linkInBack}/data/${search}`

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