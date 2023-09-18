import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Lesson {
    id: string;
    data: string[][];
  }

export function useLessons () {
    const [lasons, setLasons] = useState<Lesson[]>([]);
    const [loading , setLoading ] = useState(false);
    const [error, setError] = useState('');


    const link:string = `http://localhost:3000/lessons`


    async function fetchProduct() {
        try {
            setError('')
            setLoading (true)
            const respons = await axios.get<Lesson[]>(link)
            console.log(respons.data);
            setLasons(respons.data)
            setLoading (false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return {lasons, loading, error}
}