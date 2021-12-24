import React from 'react'
import Featured from './Featured'
import List from './List'
import Navbar from './Navbar'
import axios from 'axios'
import { useEffect,useState } from 'react'
import '../Styles/home.css'

function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
  
    useEffect(() => {
      const getRandomLists = async () => {
        try {
          const res = await axios.get(
            `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
            {
              headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGFjMWE0MDVmMTM3NTY0ZjY4NTIzZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjI5MDczMywiZXhwIjoxNjMzMTU0NzMzfQ.A4ubaZrS_bzyGLFtxEcK3S1MJOFKjn4Yt38CIvjmonU",
              },
            }
          );
          console.log(res);
          setLists(res.data)
        } catch (err) {
          console.log(err);
        }
      };
      getRandomLists();
    }, [type, genre]);
    return (
        <div className='home'>
            <Navbar/>
            <Featured type={type}/>
            {lists.map((list) => (
              <List list={list}/>
            ))}      
        </div>
    )
}
export default Home
