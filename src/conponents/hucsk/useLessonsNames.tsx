import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
interface Idata {
    data: string[],
    name: string,
}
interface lessonsName {
    data: Idata[],
    id: number,
}

export function useLessonsNames() {
    const [lessonsNames, setLessonsNames] = useState<lessonsName[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const link: string = `${config.linkInBack}/data`

    async function fetchProduct() {
        try {
            setError('')
            setLoading(true)
            const respons = await axios.get(link)
            setLessonsNames(respons.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return { lessonsNames, loading, error }
}