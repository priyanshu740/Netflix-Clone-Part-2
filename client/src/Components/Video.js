import React from 'react'
import '../Styles/video.css'
import { ArrowBackOutlined } from "@material-ui/icons";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function Video() {
    const uselocation = useLocation()
    // console.log(uselocation);
    const movie = uselocation.movie
    return (
        
        <div className='video'>
            <Link to={{pathname:"/"}}>
            <div className='back'>
                <ArrowBackOutlined />            
                home
            </div>
            </Link>
            <video
             autoPlay  
             progress
             controls
             src={movie.video}
             />
        </div>
          
    )
}

export default Video
