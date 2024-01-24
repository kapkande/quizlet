import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import { useCheckVerification } from "./useCheckVerification";
interface Idata {
    data: string[],
    name: string,
}
interface lessonsName {
    data: Idata[],
    id: number,
}

export function useUsersLessons(userName: string) {
    const [usersLessons, setUsersLessons] = useState<lessonsName[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const link: string = `${config.linkInBack}/data/user/${userName}`
console.log(link);
    async function fetchProduct() {
        try {
            setError('')
            setLoading(true)
            const respons = await axios.get(link)
            setUsersLessons(respons.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return { usersLessons, loading, error }
}