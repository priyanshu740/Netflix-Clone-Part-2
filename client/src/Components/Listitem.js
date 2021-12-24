import React, { useEffect } from 'react'
import '../Styles/listitem.css'

import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function ListItem({index ,item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie,setMovie] = useState({})
  console.log(item);

  useEffect(() => {
    const getMovies = async () => {
      try{
        const res =await axios.get('/movies/find/' + item,{
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGFjMWE0MDVmMTM3NTY0ZjY4NTIzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjI5MDczMywiZXhwIjoxNjMzMTU0NzMzfQ.A4ubaZrS_bzyGLFtxEcK3S1MJOFKjn4Yt38CIvjmonU",
          },
        })
        setMovie(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getMovies()
  },[item])
  return (
    <Link to={{pathname:'/video',movie:movie}}>
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie?.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie?.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
            <PlayArrow  className='i' />
              <Add  className='i'/>
              <ThumbUpAltOutlined className='i' />
              <ThumbDownOutlined className='i' />
            </div>
            <div className="itemInfoTop">
    
              <span className='timeNDYear'>{movie?.duration}</span>
              <span className="limit">+{movie?.limit}</span>
              <span className='timeNDYear'>{movie?.year}</span>
            </div>
            <div className="desc">
            {movie?.desc}
            </div>
            <div className="genre">{movie?.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}
