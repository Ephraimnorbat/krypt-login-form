import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return(
        <div className="auth-form-container">
        
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} name= "name" id="name" placeholder="full name"/>
        <label htmlFor="email">email</label>
        <input value={email} onChange ={(e) => setEmail(e.target.value)}type= "email" placeholder='Youremail@gmail.com' id="email" name="email"/>
        <label htmlFor="password"></label>
        <input value={pass} onChange ={(e) => setPass(e.target.value)} type= "password" placeholder='********' id="password" name="password"/>
        <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>ALready have an account? Login.</button>
        </div>
    )
}