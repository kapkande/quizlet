import { useState } from "react";
import styles from "./Settings.module.css"
import axios from "axios";
import { config } from "../config";
import LabelSetting from "./labelSetting";

interface IUserName{
    userName:string
}

export default function UploadIcon({userName}:IUserName) {
    const [isLoad, setLoad] = useState(false);

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const link: string = `${config.linkInBack}/load/uploadIcon`;

    async function hendlerUpLoad() {
        if (!selectedImage) { alert("Please select a file"); return }
        const tocen = document.cookie.split('=')[1];

        const formData = new FormData()
        formData.append('file', selectedImage)
        function onUploadProgress(progressEvent: any) {
            setLoad(true);
            const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            console.log(percentCompleted);
            if (percentCompleted === 100) {
                location.reload();
                setLoad(false);
            }
            console.log(isLoad);
        }
        try {
            const response = await axios.post(link, formData, {
                headers: {
                    tocen: tocen,
                    userName: userName,
                },
                onUploadProgress: onUploadProgress,
            });

            console.log('Upload Successful', response);
        } catch (error) {
            console.error('Upload Failed', error);
        }
    }

    return (
        <div className={styles.setting}>
            <LabelSetting setSelectedImage={setSelectedImage} userName={userName} ></LabelSetting>
            {selectedImage &&
                <>
                    <button className={styles.button} onClick={() => setSelectedImage(null)}>Remove</button>
                    <button className={styles.button} onClick={hendlerUpLoad}>Upload</button>
                </>
            }
        </div>
    )
}