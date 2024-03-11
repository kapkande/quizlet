import { useRef } from 'react';

interface InputBlockProps {
    id: number;
    term: string;
    description: string;
    onRemove: (id: number) => void;
    onInputChange: (id: number, term:string, description: string) => void;
}

export function InputBlock({ id, term, description, onRemove, onInputChange }: InputBlockProps) {
    const handleRemove = () => {
        onRemove(id);
    };

    const handleInputChange = () => {
        onInputChange(id, String(inputRefTerm.current?.value), String(inputRefDescription.current?.value));
      };
      
      const inputRefTerm = useRef<HTMLInputElement>(null);
      const inputRefDescription = useRef<HTMLInputElement>(null);
    return (
        <div>
            <label>term
                <input ref={inputRefTerm} type="text" value={term} onChange={handleInputChange} />
            </label>
            <label>description
                <input ref={inputRefDescription} type="text" value={description} onChange={handleInputChange} />
            </label>
            <button type="button" onClick={handleRemove}>
                Remove
            </button>
        </div>
    );
} 