import { useEffect, useRef, useState } from "react";
import { loginVerification } from "../post/postLoginVerification";
import styles from "./Settings.module.css"
import { config } from "../config";

export default function LabelSetting({setSelectedImage}: { setSelectedImage: (file: File | null) => void }) {
    const [isHover, setHover] = useState(false);
    const [isBackgroundHover, setBackgroundHover] = useState(false);
    const [isBackgroundImageHover, setBackgroundImageHover] = useState(false);
    const [isImg, setImg] = useState(false);
    const ref = useRef(null)

    const [userData, setUserData] = useState({
        name: '',
        id: -1,
        email: '',
        role: '',
    })

    useEffect(() => {
        loginVerification(setUserData)
    }, []);


    const setHovers = (value: boolean) => {
        setHover(value);
        setBackgroundHover(value);
        setBackgroundImageHover(value);
        setImg(value);
    }

    const dragOverEnter = (e: React.DragEvent) => {
        e.preventDefault();
        setHovers(true);
    }
    const dragLeaveEnd = (e: React.DragEvent) => {
        e.preventDefault();
        setHovers(false);
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
        setSelectedImage(file);
    }

    return (
        <label className={isHover ? `${styles.usersImageHover} ${styles.usersImage}` : styles.usersImage} htmlFor="userImage"
            onDragOver={dragOverEnter}
            onDragEnter={dragOverEnter}
            onDragLeave={dragLeaveEnd}
            onDragEnd={dragLeaveEnd}
            onDrop={fileDrop}
        >
            <input
                className={styles.input}
                ref={ref}
                id="userImage"
                type="file"
                accept="image/*,.png,.jpg,.gif"
                onChange={onChange}
            />
            <img
                className={isImg ? `${styles.imgHover} ${styles.img}` : styles.img}
                alt="icon"
                width={"250px"}
                src={`${config.linkInBack}/load/icon/${userData.name}`}
            />
            <div className={isBackgroundHover ? `${styles.backgroundHover} ${styles.background}` : styles.background}>
                <div className={isBackgroundImageHover ? `${styles.backgroundImageHover} ${styles.backgroundImage}` : styles.backgroundImage}></div>
                <p>Drop & drag files here</p>
                <p>or</p>
                <p className={styles.text}>Browse Files</p>
            </div>
        </label>
    )
}