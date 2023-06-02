import React,{useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input value={email} onChange ={(e) => setEmail(e.target.value)}type= "email" placeholder='Youremail@gmail.com' id="email" name="email"/>
        <label htmlFor="password"></label>
        <input value={pass} onChange ={(e) => setPass(e.target.value)} type= "password" placeholder='********' id="password" name="password"/>
        <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register Here.</button>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"> </script>  
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js"> </script>  
         <script>
            
            $(document).ready(function(){
                $(".background-image").ripples('show');
            });
        </script>
        </div>
    )
}