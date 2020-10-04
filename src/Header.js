import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
import { auth } from 'firebase';
function Header() { 
    const [{basket,user},dispatch] = useStateValue();
    console.log({basket})
    const login = () =>{
        if(user){
            auth().signOut();
        }    
    }
    return (
        <nav className="header">
        {/* Logo on the left */}
        <Link to="/">
        <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
        </Link>
        {/* searchbox in the middle */}
        <div className='Header_box'>
            <input  type="text" className="Header_search_input" />
            <SearchIcon class="Search_icon"/>
        </div>
   
        {/* three links */}
        <div className="Header_nav">
            {/* First link  */}
            <Link to={!user && "/login"} className="Header_link">
            <div onClick={login} className="Option_link">
            <span className="Header_optionlineone">Hello {user?.email}</span>
                <span  className="Header_optionlinetwo">{user ? 'Sign out' : 'Sign In'} </span>
            </div>
           
            </Link>
            {/* Second link  */}
            <Link className="Header_link">
            <div className="Option_link">
                <span className="Header_optionlineone">Returns</span>
                <span className="Header_optionlinetwo">& Orders </span>
            </div>
           
            </Link >
            {/* Third link  */}
            <Link className="Header_link">
            <div className="Option_link">
                <span className="Header_optionlineone">Your</span>
                <span className="Header_optionlinetwo">Prime </span>
            </div>
           
            </Link >
            {/* basket items with a no  */}           
            <Link to="/checkout" className="Header_link">
            <div className="Header_optionBasket">
                {/* Shopping basket icon  */}
                <ShoppingBasketIcon/>
                {/* No of items in the basket */}
            <span className="Header_basket_Items Header_optionlinetwo">{basket?.length}</span>
            </div>
            </Link>

        </div>


        
        
        </nav>
    )
}

export default Header
