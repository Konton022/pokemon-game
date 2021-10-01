import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState()

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleClick = () => {
        onSubmit && onSubmit({ email })

    }
    return (

        <div>
            <div><input type='text' name='email' onChange={handleEmailChange} /></div>
            <div><input type='password' name='password' onChange={handleEmailChange} /></div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default LoginForm