import { useEffect, useState } from "react";
import { loginVerification } from "../post/postLoginVerification";
import styles from "./Settings.module.css"
import axios from "axios";
import { config } from "../config";
import LabelSetting from "./labelSetting";

export default function UploadIcon() {
    const [isLoad, setLoad] = useState(false);

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const link: string = `${config.linkInBack}/load/uploadIcon`;
    const [userData, setUserData] = useState({
        name: '',
        id: -1,
        email: '',
        role: '',
    })

    useEffect(() => {
        loginVerification(setUserData)
    }, []);

    if (userData.role.length < 1) { return <h1>First you need to sign in</h1> }

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
                    userName: userData.name,
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
            <LabelSetting setSelectedImage={setSelectedImage} ></LabelSetting>
            {selectedImage &&
                <>
                    <button className={styles.button} onClick={() => setSelectedImage(null)}>Remove</button>
                    <button className={styles.button} onClick={hendlerUpLoad}>Upload</button>
                </>
            }
        </div>
    )
}