import { useEffect, useState } from "react";
import { postUsers } from "../../post/postUsers"
import { Thead } from "./thead";
import { UserRow } from "./UserRow";
import { IUserExtended } from "./IUserExtended";
import styles from "./listOfUsers.module.css"
export function ListOfUsers() {
    const [edit, setEdit] = useState(NaN);
    const [error, setError] = useState('')
    const [data, setData] = useState<IUserExtended[]>([]);
    useEffect(() => {
        postUsers(setData);
        setError('');
    }, [edit]);

    return (
        <div className={styles.list}>
            <h1>List Of Users</h1>
            {error && <h1>{error}</h1>}
            {/* {data[0].dateIn && */}
                <table>
                    <Thead />
                    <UserRow data={data} setEdit={setEdit}></UserRow>
                </table>
            {/* } */}
        </div>
    )
}