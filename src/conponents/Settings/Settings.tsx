import { useEffect, useState } from "react";
import { loginVerification } from "../post/loginVerification";
import styles from "./Settings.module.css"
import axios from "axios";
import { linkInBack } from "../linkInBack";

export default function Settings() {
    const [isAdmin, setAdmin] = useState(false);
    const [isUser, setUser] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const link: string = `${linkInBack}/load/uploadIcon`;
    const [userData, setUserData] = useState({
        name: '',
        id: -1,
        email: '',
        role: '',
        icon: '',
    })

    useEffect(() => {
        loginVerification(setUserData)
    }, []);

    useEffect(() => {
        userData.role === 'admin' ? setAdmin(true) : setAdmin(false);
        userData.role ? setUser(true) : setUser(false);
    }, [userData]);

    if (!isUser || !isAdmin) { return <h1>First you need to sign in</h1> }

    async function hendlerUpLoad() {
        if (!selectedImage) { alert("Please select a file"); return }

        const formData = new FormData()
        formData.append('icon', selectedImage)
        const tocen = document.cookie.split('=')[1];

       await fetch(link, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                tocen: tocen,
                body: formData
               
            },
            
        })

            // await axios.post(link, {body:formData}, {headers: {
            //     tocen: tocen
            // }})

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
                    // console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    )
}