import React from 'react'
import './header.css'
import amazon_logo from './AmazonImages/amazon_PNG11.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from './StateProvider'
function Header() {
    const[{basket,user},dispatch] = useStateValue();
    const signOut = (e) => {
        e.preventDefault();
        dispatch({
            type:'SET_USER',
            user:null,
        })
    }
    return (
        <div className = "header">
          <Link to='/'      >
            <img className = " header_logo"src={amazon_logo} alt="Amazon" />
            </Link>
            <div className="header_search">
                <input  className ="header_searchInput" type="text" name="" id="Search" />
                {/* <SearchIcon className="header_searchIcon" /> */}
            </div>
            <div className="header_nav">
                <div className="header_option">
                    
                    <span className="header_optionLineOne">Hello {user?user.email.slice(0,Array.from(user.email).findIndex((ch)=>ch==='@')):'Guest'}</span>
                    {user? <button className='header_signOut' onClick={signOut}>Sign-out</button> :
                        <Link  to="/login">
                        <button className="header_signOut">Sign-in</button>
                        </Link>
                    }
                    
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">&Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
