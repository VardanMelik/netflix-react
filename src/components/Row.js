import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Row.css'

function Row({ title, fetchUrl, isLargerRow = false }) {

    const [movies, setMovie ] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    
    useEffect( () => {
        async function fetchData() {
            const request = await axios.get('https://api.themoviedb.org/3' + fetchUrl);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map( movie => 
                    (( isLargerRow && movie.poster_path ) ||
                    ( !isLargerRow && movie.backdrop_path)) && (
                        <img 
                        className={`row__poster ${isLargerRow && "row__posterLarge"}`} 
                        key={movie.id}
                        src={`${base_url}${
                        isLargerRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} />
                    )
                )}
            </div>
            
        </div>
    )
}

export default Row
