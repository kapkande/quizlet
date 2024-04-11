
import Lessons from './Lessons';
import UsersLessons from './UsersLessons';

export default function ChooseLesson({userData, isUser}: {userData: any, isUser: boolean}) {
    return (
        <>
            <Lessons></Lessons>
            {isUser && <UsersLessons userData={userData} isUser={isUser}></UsersLessons>}
        </>
    )
}