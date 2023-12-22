import { useEffect, useState } from "react";
import { postUsers } from "../post/postUsers"

export function ListOfUsers() {
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
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.id}</td>
                                <td>{e.userName}</td>
                                <td>{e.permission}</td>
                                <td>{formatDate(e.dateIn)}</td>
                                <td>{e.email}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}