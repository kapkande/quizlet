import { useState } from "react";
import { InputBlock } from "./CreateInputs";

export default function InputBlocks() {
  const [inputBlocks, setInputBlocks] = useState([{ id: 1, term: "", description:"" }]);

  const handleAddBlock = () => {
    setInputBlocks([...inputBlocks, { id: inputBlocks.length + 1, term: "", description:"" }]);
  };

  const handleRemoveBlock = (id: number) => {
    setInputBlocks(inputBlocks.filter((block) => block.id !== id));
  };

  const handleInputChange = (id: number, term:string, description:string) => {
    const updatedBlocks = inputBlocks.map((block) =>
      block.id === id ? { ...block, term, description } : block
    );
    setInputBlocks(updatedBlocks);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputBlocks);
  };

  return (
    <form onSubmit={handleSubmit}>
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