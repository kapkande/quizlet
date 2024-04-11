import { useState } from "react";
import { IUserExtended } from "./IUserExtended";
import styles from "./listOfUsers.module.css"
import { postChangePermission } from "./postChangePermission";

interface IUserRow {
    data: IUserExtended[]
    setEdit: React.Dispatch<React.SetStateAction<number>>
};

export function UserRow({ data, setEdit }: IUserRow) {
    const [userId, setUserId] = useState(NaN);
    const [valuePermission, setValuePermission] = useState('');
    const permissionList: string[] = ['admin', 'user'];
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    };
    function handleSubmit() {
        if (!permissionList.includes(valuePermission)) {
            alert(`value is not correct. Can be only: ${permissionList.toString()}`)
            return;
        };
        postChangePermission(userId, valuePermission);
        setUserId(NaN);
        setValuePermission('');
        setEdit(Math.random());
    };

    function handleInputChange(id: number, permission: string) {
        if (id === userId) {
            handleSubmit();
        } else {
            setUserId(id);
            setValuePermission(permission);
        }
    }

    return (
        <tbody>
            {data.map((e, i) => {
                return (
                    <tr className={styles.tr} key={i}>
                        <td>{i + 1}</td>
                        <td>{e.id}</td>
                        <td>{e.userName}</td>
                        <td>
                            {userId === e.id ?
                                <>
                                    <label htmlFor="permission"></label>
                                    <select
                                        style={{ color: 'black' }}
                                        id="permission"
                                        onChange={(event) => setValuePermission(event.target.value)}
                                        value={valuePermission}
                                        className={styles.input}>
                                        {permissionList.map((e, i) => <option key={i} value={e}>{e}</option>)}
                                    </select>
                                </>
                                :
                                <p>{e.permission}</p>
                            }
                        </td>
                        <td>{formatDate(e.dateIn)}</td>
                        <td>{e.email}</td>
                        <td>
                            <button
                                className={userId === e.id ?
                                    `${styles.buttonActive} ${styles.button}` :
                                    `${styles.button}`}
                                onClick={() => handleInputChange(e.id, e.permission)}>
                            </button>
                        </td>
                    </tr>
                )
            })
            }
        </tbody>
    )
}
