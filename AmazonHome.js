import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import {auth } from './FireBase'
import {onAuthStateChanged} from 'firebase/auth'
import {useStateValue} from './StateProvider';
import Payment  from "./Payment";
const AmazonHome = () => {
    const[{user},dispatch] = useStateValue();
    useEffect(() => {
        
        onAuthStateChanged(auth,(currentUser) => {
            console.log(currentUser)
            if(currentUser){
                dispatch({
                    type: 'SET_USER',
                    user:currentUser,
                })
            }
            else{
                dispatch({
                    type: 'SET_USER',
                    user:null,
                })
            }
        })
    }, [])
    return(
        <Router>
            <Routes > 
                <Route exact path="/login" element={<>
                    <Login/>
                </>}  /> 
           
            <Route exact path="/" element={<>
                <Header/>
                <Home/>
            </>} />  
            <Route exact path="/checkout" element={
                <>
                <Header/>
                <Checkout />
                </>
            } />
            <Route exact path='/paymentPage' element={<>
                <Header />
                <Payment/>
            </>} />
            </Routes>
            
            
        </Router>
        
    )
}
export default AmazonHome;