import React, {useState} from 'react'

const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login successful!");
        console.log(`Email: ${email}, Password: ${password}`);
      };
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='email'>Email:</label>
            <input type="email" name="email" id ="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input type="password" name="password" id ="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <button type="submit">Login</button>
    </form>
  )
}
export default LoginForm;