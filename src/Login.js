import React,{useState} from 'react';
import  './Login.css';
import {Link , useHistory} from 'react-router-dom';
import { register } from './serviceWorker';
import {db,auth} from './Firebase'
function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');
    const login = event =>{
        event.preventDefault();// this stops the refresh
        //do login stuff
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                //logged in succesfully and redirect
                history.push('/');
            })
            .catch(e => alert(e.maessage));
    }
    const Register = event =>{
        event.preventDefault();// this stops the refresh
        //do register stuff
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //create a user and loggin in 
            })
            .catch(e => alert(e.message))
        }
    return (
        <div className="Login"> 
         <Link to="/">
            <img className='Login_Logo' src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"/>
        </Link>
           <div     className="Login_Container" >
           <h1>Sign In</h1>
               <form action="" >
                    
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setpassword(event.target.value)} type="Password"/>
                    <button onClick={login} type='submit' className="Login_button"><strong>Sign In</strong></button>
                    <p>
                         By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                    <button onClick={Register} className="Register_button"><strong>Create Yout Amazon Account</strong></button>
               </form>
           </div>
        </div>
    )
}

export default Login
