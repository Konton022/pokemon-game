import { useEffect, useState } from "react";
import Input from "../Input";
import s from "./style.module.css";

const LoginForm = ({ isResetField = false, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(true);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isResetField]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit &&
      onSubmit({ type: isLogin ? "login" : "singup", email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email" value={email} name="email" setChange={setEmail} />
      <Input
        type="password"
        label="Password"
        name="password"
        value={password}
        setChange={setPassword}
      />
      <div className={s.flex}>
        <button>{isLogin ? "Login" : "SingUP"}</button>
        <div
          onClick={() => {
            setLogin(!isLogin);
          }}
          className={s.link}
        >
          {isLogin ? "Register" : "Login"}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
