// useCheckVerification.js
import { useEffect, useState } from "react";
import { loginVerification } from "../post/postLoginVerification";

export function useCheckVerification() {
    const [isAdmin, setAdmin] = useState(false);
    const [isUser, setUser] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        id: -1,
        email: '',
        role: '',
    });
    useEffect(() => {
        loginVerification(setUserData, setAdmin, setUser);
     }, []);
    return { userData, isUser, isAdmin };
}
