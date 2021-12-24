import { createFailure, createStart, createSuccess, deleteFailure, deleteStart,deleteSuccess, MovieFailure, MoviesStart, MovieSuccess } from "./MovieAction";
import axios from "axios";
export const MoviesLogin = async (dispatch) => {
    dispatch(MoviesStart())
    try{
        const moviesData = await axios.get("http://localhost:8080/api/movies",{
            headers:{
                token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            }
        })
        dispatch(MovieSuccess(moviesData.data))
    }catch{
        dispatch(MovieFailure())
    }
}

export const deleteMovie = async (id,dispatch) => {
    dispatch(deleteStart())
    try{
        await axios.delete("http://localhost:8080/api/movies/" + id,{
            headers:{
                token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteSuccess(id))
    }catch(err){
        dispatch(deleteFailure())
    }
}

export const createMovie = async (movie,dispatch) => {
    dispatch(createStart())
    try{
        const res = await axios.post("http://localhost:8080/api/movies/" , movie,{
            headers:{
                token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createSuccess(res.data))
    }catch(err){
        dispatch(createFailure())
    }
}
