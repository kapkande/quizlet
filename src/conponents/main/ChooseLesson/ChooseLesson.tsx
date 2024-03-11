
import { useCheckVerification } from "../../hucsk/useCheckVerification";
import Lessons from './Lessons';
import UsersLessons from './UsersLessons';


export default function ChooseLesson() {
    const { userData, isUser } = useCheckVerification();
    return (
        <>
            <Lessons></Lessons>
            {isUser && <UsersLessons userData={userData} isUser={isUser}></UsersLessons>}
        </>
    )
}