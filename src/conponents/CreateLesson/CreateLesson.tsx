import CreateInputs from "./CreateInputs";
import { useState } from "react"

export default function CreateLesson() {
    const isAdmin = true
    var err = new Error('Not found');
    if (!isAdmin) { return err }
    const [showCode, setShowCode] = useState([<CreateInputs i={0}></CreateInputs>]);

    const handleButtonClick = (e: any) => {
        e.preventDefault();
        setShowCode([...showCode, <CreateInputs i={showCode.length} />]);
    };

    return (
        <form>
            <label>Lesson name
                <input type="text" />
            </label>
            {showCode.map((code: any) => code)}
            <button onClick={handleButtonClick}>Create card</button>
        </form>
    )
}