import UploadIcon from "./UploadIcon";
import styles from "./Settings.module.css"
import { IUserData } from "../basicIntesfaces/userData";
interface ISettings {
    userData: IUserData;
    isUser: boolean;
}
export default function Settings({ userData, isUser }: ISettings) {
    if (!isUser) { return <h1>First you need to sign in</h1> }
    return (
        <div className={styles.settings}>
            <div className={styles.wrap}>
                <UploadIcon userName={userData.name}></UploadIcon>
                <div className={styles.textBlock}>
                    <h2>Name: {userData.name}</h2>
                    <h2>Email: {userData.email}</h2>
                </div>
            </div>
        </div>
    )
}