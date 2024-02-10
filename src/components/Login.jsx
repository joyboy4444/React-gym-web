import React ,{ useState }from 'react'
import './Register.css'
import { Link , useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

function Login() {

  const [email,setEmail] = useState("");
  const [error,setError] = useState("");
  const [password,setPassword] = useState("");
  const { logIn } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        await logIn(email, password);
        navigate('/All');
    }catch(err) {
      setError(err.message);
      console.log(err);
    }
  };
  
  return (
    <div className='regis'>
      <div className='re-con'>
      <h2 className='regis-h'>Login</h2>
      {error && <div className='error'>{error}</div>}
      <form >
          <div className = 'form-g' >
          <h2>Email</h2>
            <input 
              type = 'email'
              placeholder = 'Email address'
              onChange = {(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className = 'form-g' >
            <h2>Password</h2>
            <input 
              type = 'password'
              placeholder = 'Password'
              onChange = {(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className='and-p'>
            <p>and</p>
          </div>
          <div className='btn-r'>
              <button onClick={handleSubmit}>Log In</button>
          </div>
      </form>
      <div className='already'>
          Don't have an account? <Link to ='/register'>Sign Up</Link> 
      </div>
      </div>
    </div>
  )
}

export default Login