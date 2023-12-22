import { useEffect, useState } from "react";
import { loginVerification } from "../post/loginVerification";
import styles from "./Settings.module.css"
import axios from "axios";
import { linkInBack } from "../linkInBack";

export default function Settings() {
    // const [isAdmin, setAdmin] = useState(false);
    // const [isUser, setUser] = useState(false);
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

    // useEffect(() => {
    //     userData.role.includes('user')
    //     userData.role === 'user' ? setUser(true) : setUser(false);
    // }, [userData]);

    if (userData.role.length < 1) { return <h1>First you need to sign in</h1> }

    async function hendlerUpLoad() {
        if (!selectedImage) { alert("Please select a file"); return }
        const tocen = document.cookie.split('=')[1];

        const formData = new FormData()
        formData.append('file', selectedImage)

        await axios.post(link, formData, {
            headers: {
                tocen: tocen,
                userName: userData.name
            },
        })
            .then((r) => {
                console.log(r);
            })
        console.log(selectedImage);
    }
    return (
        <div>
            <h1>Upload and Display Image usign React Hook's</h1>

            {selectedImage && (
                <div>
                    <img
                        alt="icon"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button className={styles.button} onClick={() => setSelectedImage(null)}>Remove</button>
                    <button className={styles.button} onClick={hendlerUpLoad}>Upload</button>
                </div>
            )}

            <input
                type="file"
                accept="image/*,.png,.jpg,.gif"
                onChange={(event) => {
                    const file = (event.target.files && event.target.files[0]) as File;
                    setSelectedImage(file);
                }}
            />
        </div>
    )
}