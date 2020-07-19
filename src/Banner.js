import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

export default function Banner() {
  const [movie, setMovie] = useState([]); // to get a random movie everytime you refresh the page

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
  }, []);

  return (
    <header>
      {/* title */}
      {/* title */}
      {/* title */}
    </header>
  );
}
