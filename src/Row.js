import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';

export default function Row({title, fetchURL}) {
    const [movies,setMovies] = useState([]);

    // A snippet of code which runs based on a specific confition/variable
    useEffect(() => {           // when the title shows, we want to show the images of the shows
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchURL);
            console.log(request);
            return request;
        }
        fetchData();
    }, []);


    return (
        <div>
            {/* title */}
            <h2>{title}</h2>
            {/* container -> posters */}

            {/* */}
        </div>
    )
}
