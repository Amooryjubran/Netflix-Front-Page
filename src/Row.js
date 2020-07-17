import React, {useState, useEffect} from 'react';
import axios from './axios';

export default function Row({title, fetchURL}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific confition/variable
    useEffect(() => {           // when the title shows, we want to show the images of the shows
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);     // whenever we use a variable outside of the block we put it here "fetchURL"

    console.log(movies);

    return (
        <div className="row">

            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img src={movie.poster_path} alt={movie.name}/>
                ))}
            </div>
            {/* */}
        </div>
    )
}
