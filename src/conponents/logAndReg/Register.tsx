import { useState } from "react";
import { postReg } from "../post/postReg";



export function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postReg({ name, password, email })

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Sing up</button>
    </form>
  );
}