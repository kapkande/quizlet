import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { linkInBack } from "../linkInBack";

interface lessonsName {
    name: string,
    id:number
}

export function useLessonsNames () {
    const [lessonsNames, setLessonsNames] = useState<lessonsName[]>([]);
    const [loading , setLoading ] = useState(false);
    const [error, setError] = useState('');

    const link:string = `${linkInBack}/dataNames`

    async function fetchProduct() {
        try {
            setError('')
            setLoading (true)
            const respons = await axios.get(link)
            setLessonsNames(respons.data)
            setLoading (false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return {lessonsNames, loading, error}
}