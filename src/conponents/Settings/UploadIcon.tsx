import { useEffect, useRef, useState } from "react";
import { loginVerification } from "../post/loginVerification";
import styles from "./Settings.module.css"
import axios from "axios";
import { linkInBack } from "../linkInBack";

export default function UploadIcon() {
    const [isLoad, setLoad] = useState(false);

    const [isHover, setHover] = useState(false);
    const [isBackgroundHover, setBackgroundHover] = useState(false);
    const [isBackgroundImageHover, setBackgroundImageHover] = useState(false);
    const [isImg, setImg] = useState(false);

    const ref = useRef(null)
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const link: string = `${linkInBack}/load/uploadIcon`;
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
        const config = {
            onUploadProgress: function (progressEvent: any) {
                setLoad(true)
                const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(percentCompleted);
                if (percentCompleted === 100) {
                    location.reload();
                    setLoad(false)
                }
            },
        };

        try {
            const response = await axios.post(link, formData, {
                headers: {
                    tocen: tocen,
                    userName: userData.name,
                },
                onUploadProgress: config.onUploadProgress,
            });

            console.log('Upload Successful', response);
        } catch (error) {
            console.error('Upload Failed', error);
        }
    }

    const setHovers = (value: boolean) => {
        setHover(value);
        setBackgroundHover(value);
        setBackgroundImageHover(value);
        setImg(value);
    }

    const dragOverEnterLeav = (e: React.DragEvent) => {
        e.preventDefault();
        setHovers(true);
    }


    const fileDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setHovers(false);
        const file = (e.dataTransfer.files && e.dataTransfer.files[0]) as File;
        if (['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'].includes(file.type)) {
            console.log('Valid image file:', file);
            setSelectedImage(file);
        } else {
            console.log('Invalid file type. Please select a valid image file.');
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = (e.target.files && e.target.files[0]) as File;
        console.log(file);
        setSelectedImage(file);

    }

    return (
        <div>
            <div>
                <label className={isHover ? `${styles.usersImageHover} ${styles.usersImage}` : styles.usersImage} htmlFor="userImage"
                    onDragOver={dragOverEnterLeav}
                    onDragEnter={dragOverEnterLeav}
                    onDragLeave={dragOverEnterLeav}
                    onDrop={fileDrop}
                >
                    <input
                        className={styles.input}
                        ref={ref}
                        id="userImage"
                        type="file"
                        accept="image/*,.png,.jpg,.gif"
                        onChange={onChange}
                    />  <img
                        className={isImg ? `${styles.imgHover} ${styles.img}` : styles.img}
                        alt="icon"
                        width={"250px"}
                        src={`${linkInBack}/load/icon/${userData.name}`}
                    />
                    <div className={isBackgroundHover ? `${styles.backgroundHover} ${styles.background}` : styles.background}>
                        <div className={isBackgroundImageHover ? `${styles.backgroundImageHover} ${styles.backgroundImage}` : styles.backgroundImage}></div>
                        <p>Drop & drag files here</p>
                        <p>or</p>
                        <p className={styles.text}>Browse Files</p>
                    </div>

                </label>

                {selectedImage &&
                    <>
                        <button className={styles.button} onClick={() => setSelectedImage(null)}>Remove</button>
                        <button className={styles.button} onClick={hendlerUpLoad}>Upload</button>
                    </>
                }
            </div>

        </div>
    )
}