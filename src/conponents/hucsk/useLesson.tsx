import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Lesson {
    id: string;
    data: string[][];
}


export function useLesson(search: string) {
    const [lesson, setLason] = useState<Lesson>(Object);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const link: string = `http://localhost:3000/lessons/${search}`


    async function fetchProduct() {
        try {
            setError('')
            setLoading(true)
            const respons = await axios.get<Lesson>(link)
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