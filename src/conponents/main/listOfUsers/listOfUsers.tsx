import { useEffect, useState } from "react";
import { postUsers } from "../../post/postUsers"
import styles from "./listOfUsers.module.css"
import { postChangePermission } from "./postChangePermission";

export function ListOfUsers() {

    const [isUserID, setUserID] = useState(NaN)
    const [isEdit, setEdit] = useState(NaN)
    const [isValuePermission, setValuePermission] = useState('')
    const permissionList = ['admin', 'user']
    const [error, setError] = useState('')
    const [data, setData] = useState([{
        dateIn: '',
        email: '',
        id: -1,
        ownLessons: {},
        permission: '',
        userName: '',
        userPassword: '',
    },])

    useEffect(() => {
        postUsers(setData)
        setError('')
    }, []);


    const handleInputChange = (e: any) => {
        e.preventDefault();
        postChangePermission(isUserID, isValuePermission);
        setEdit(NaN);
        setValuePermission('')
        setUserID(NaN)
    };


    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
    return (
        <div>
            <h1>List Of Users</h1>
            {error && <h1>{error}</h1>}
            {data[0].dateIn &&
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>id</th>
                            <th>userName</th>
                            <th>permission</th>
                            <th>dateIn</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) => {
                            if (isEdit === i) {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.id}</td>
                                        <td>{e.userName}</td>
                                        <td>
                                            <select onChange={(event) => { setUserID(e.id), setValuePermission(event.target.value) }} id="permissionInput">
                                                <optgroup label="permission">
                                                    {permissionList.map((e, i) => <option key={i}>{e}</option>)}
                                                </optgroup>
                                            </select>
                                        </td>
                                        <td>{formatDate(e.dateIn)}</td>
                                        <td>{e.email}</td>
                                        <td>
                                            <button className={`${styles.buttonActive} ${styles.button}`} onClick={handleInputChange}></button>
                                        </td>
                                    </tr>
                                )
                            }
                            return (<tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.id}</td>
                                <td>{e.userName}</td>
                                <td>{e.permission}</td>
                                <td>{formatDate(e.dateIn)}</td>
                                <td>{e.email}</td>
                                <td>
                                    <button className={styles.button} onClick={() => { console.log(); setEdit(i) }}></button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}