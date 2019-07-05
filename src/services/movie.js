import React from 'react'
const BASE_URL = "https://reactjs-cdp.herokuapp.com/movies/"
const MovieApi =(id) =>{    
    return fetch(`${BASE_URL}${id}`)
       .then(res => res.json())       
    }    
export default MovieApi;


