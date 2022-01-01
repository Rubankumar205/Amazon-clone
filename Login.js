import React,{useState} from 'react'
import './login.css'
import amazon_logo from './AmazonImages/amazon_logo_RGB.jpg'
import {Link,useNavigate} from 'react-router-dom'
import {auth} from './FireBase.js'
import {createUserWithEmailAndPassword,onAuthStateChanged,
        signInWithCredential,signInWithEmailAndPassword
} from 'firebase/auth'
function Login() {
    const navigate = useNavigate();
    const[email,setEmail] = useState('');
    const[password,setpassword] = useState('');
    const[user,setUser] = useState({});
    const signIn = async (e) => {
        e.preventDefault();
        try{
            const oldUser = await signInWithEmailAndPassword(auth,email,password);
            if(oldUser){
                navigate('/');
            }   
        }
        catch(err){
            alert(err.message);
        }
    }
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
    })
    const register = async (e) => {
        e.preventDefault();
        try{

        
        const newUser = await createUserWithEmailAndPassword(auth,email,password);
        if(newUser){
            navigate('/');
        }
        }
        catch(err){
            alert(err.message);
        }
        
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login_logo'
                src={amazon_logo}
            />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => setpassword(e.target.value)}/>

                    <button type='submit' className='login_signInButton' onClick={signIn}>Sign in</button>
                </form>
                <button onClick={register} className='login_registerButton'>Create your Account</button>
            </div>
        </div>
    )
}

export default Login
