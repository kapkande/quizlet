import { useEffect, useState } from "react"
import styles from "./InfoPopup.module.css"

export default function InfoPopup({text, color}:any) {
    // const [isRed, setRed] = useState(false)
    const [isOpacity, setOpacity] = useState(false)
    const [info, setInfo] = useState('')
    
    useEffect(() => {
        startInfo()
    }, [text,color ])

    function startInfo() {
        setInfo(text)
        setOpacity(true)
        setTimeout(() => {
            setOpacity(false)
        }, 2000);
    }

    return (
        <div className={styles.wrap}>
            {isOpacity && <div style={{ backgroundColor: color }} className={styles.block}>
                <h1>{info}</h1>
            </div>}
        </div>

    )

}  