import { useEffect, useState } from "react";
import { loginVerification } from "../post/postLoginVerification";
import UploadIcon from "./UploadIcon";


export default function Settings() {
    // const [isAdmin, setAdmin] = useState(false);
    // const [isUser, setUser] = useState(false);
    
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


    return (
        <>
        <UploadIcon></UploadIcon>
        <h2>{userData.name}</h2>
        </>

    )
}