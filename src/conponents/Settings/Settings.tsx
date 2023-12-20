import { useEffect, useState } from "react";
import { loginVerification } from "../post/loginVerification";

export default function Settings() {
    const [isAdmin, setAdmin] = useState(false);
    const [isUser, setUser] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
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

    return (
        <div>
            <h1>Upload and Display Image usign React Hook's</h1>

            {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}

            <input
                type="file"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                 
                }}
            />
        </div>
    )
}