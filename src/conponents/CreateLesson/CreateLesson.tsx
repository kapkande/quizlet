// InputBlocks.tsx
import { useState } from "react";
import { InputBlock } from "./CreateInputs";
import { postCreateLesson } from "../post/postCreateLesson";

export default function InputBlocks() {
 
  const [inputBlocks, setInputBlocks] = useState([{ id: 1, term: "", description: "" }]);
  const [ isLessonName, setLessonName] = useState('');

  const handleAddBlock = () => {
    setInputBlocks([...inputBlocks, { id: inputBlocks.length + 1, term: "", description: "" }]);
  };

  const handleRemoveBlock = (id: number) => {
    setInputBlocks(inputBlocks.filter((block) => block.id !== id));
  };

  const handleInputChange = (id: number, term: string, description: string) => {
    const updatedBlocks = inputBlocks.map((block) =>
      block.id === id ? { ...block, term, description } : block
    );
    setInputBlocks(updatedBlocks);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const arr: string[][] = [];
    inputBlocks.forEach(element => {
      arr.push([element.term, element.description]);
    });
  postCreateLesson(arr, isLessonName);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Lesson's name
                <input type="text" value={isLessonName} onChange={(e)=>{setLessonName(e.currentTarget.value)}} />
            </label>
      {inputBlocks.map((block) => (
        <InputBlock
          key={block.id}
          id={block.id}
          term={block.term}
          description={block.description}
          onRemove={handleRemoveBlock}
          onInputChange={handleInputChange}
        />
      ))}
      <button type="button" onClick={handleAddBlock}>
        Add Block
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
