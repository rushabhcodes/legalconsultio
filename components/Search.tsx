import axios from 'axios';
import React, { useEffect } from 'react'

axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
    );

async function Search() {

   

      const result =  await axios.get('https://api.indiankanoon.org/search/?formInput=<query>&pagenum=<pagenum>')
        console.log(result)

  return (
    <div>Search</div>
  )
}

export default Search