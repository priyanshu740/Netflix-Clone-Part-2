import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link } from 'react-router-dom';

function Navbar() {
    const [scrolled,setscrolled] = useState(false)
   
    window.onscroll = () => {
        setscrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    return (     
        <div className={scrolled?'navbar scrolled': 'navbar'}>
            <div className='container'>
                <div className='left'>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link className="link" to="/">
                       <span>Home</span>
                    </Link>
                    <Link className="link" to="/series">
                    <span>Series</span>           
                    </Link>
                    <Link className="link" to="/movies">
                    <span>Movies</span>
                       
                    </Link>
                    <span>New and Popular</span>
                    <span>My Watchlist</span>
                </div>
                <div className='right'>
                    <Search className='icon'/>
                    <span>Kid's</span>
                    <Notifications className='icon'/>
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Navbar
