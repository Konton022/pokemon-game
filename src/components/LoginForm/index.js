import { useState } from "react";
import Input from "../Input";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("test");
  const [password, setPassword] = useState("test");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    onSubmit && onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email" name="email" setChange={setEmail} />
      <Input
        label="Password"
        name="password"
        value={password}
        setChange={setPassword}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
