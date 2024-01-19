import axios, { AxiosError } from "axios";
import { config } from "../config";

export async function postCreateLesson(data: string[][]) {
    const link: string = `${config.linkInBack}/edit/createLesson`
    const tocen = document.cookie.split('=')[1];
    if (data.length < 3) { console.log(data.length + ' must be 4'); return }
    try {
        const respons = await axios.post(link, {}, {
            headers: {
                data: JSON.stringify(data),
                tocen:tocen
            }
        });
        // if (respons.data == 'Lesson created successfully') {
        //     console.log(1);
        //   }
    } catch (e: unknown) {
        const error = e as AxiosError
        return error
    }
}