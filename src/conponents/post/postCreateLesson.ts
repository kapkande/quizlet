import axios, { AxiosError } from "axios";
import { config } from "../config";

export async function postCreateLesson(array: string[][], isLessonName:string) {
    const link: string = `${config.linkInBack}/edit/createLesson`
    const tocen = document.cookie.split('=')[1];
    console.log(array);
    if (array.length < 4) { console.log(array.length + ' must be 4'); return }

    const data = {
        data: array,
        name: isLessonName
    }
    try {

        const respons = await axios.post(link, {}, {
            headers: {
                data: JSON.stringify(data),
                tocen:tocen
            }
        })
        // .then((e)=>{console.log(e);})
        // if (respons.data == 'Lesson created successfully') {
        //     console.log(1);
        //   }
    } catch (e: unknown) {
        const error = e as AxiosError
        return error
    }
}