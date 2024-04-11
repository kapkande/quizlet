import { useState } from "react";
import styles from "./Settings.module.css"
import axios from "axios";
import { config } from "../config";
import LabelSetting from "./labelSetting";
import { OvalButton } from "../buttons/ovalButton/OvalButton";

interface IUserName {
    userName: string
}

export default function UploadIcon({ userName }: IUserName) {
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
                setLoad(false);
                location.reload();
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
    function setNullSelectedImage() {
        setSelectedImage(null);
    }
    return (
        <div className={styles.setting}>
            <LabelSetting setSelectedImage={setSelectedImage} userName={userName}></LabelSetting>
            {selectedImage &&
                <>
                    <OvalButton fun={setNullSelectedImage}>Remove</OvalButton>
                    <OvalButton fun={hendlerUpLoad}>Upload</OvalButton>
                </>
            }
        </div>
    )
}