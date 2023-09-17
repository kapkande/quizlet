import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Lesson {
    term: string;
    definition: string;
  }
interface LessonSet {
    [key: string]: Lesson[];
  }

export function useLesson() {
    const [lasons, setLasons] = useState<LessonSet>({});
    const [loading , setLoading ] = useState(false);
    const [error, setError] = useState('');

    async function fetchProduct() {
        try {
            setError('')
            setLoading (true)
            const respons = await axios.get<LessonSet>(`http://localhost:3000/lessons`)
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