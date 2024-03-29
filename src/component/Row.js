import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  const base_url = "https://image.tmdb.org/t/p/original/"


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.table(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies)
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const handleClick=(movie)=>{
  if(trailerUrl){
    setTrailerUrl('')
  }
  else{
    movieTrailer( movie?.orignal_name||movie?.title || movie?.name ||"" )
    .then((url) =>{
      const urlParams =new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get('v'))
    })
    .catch((error)=>{alert(error.message)})
  }
}


  return (
    <div className='row'>
      <h2> {title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              onClick={()=> handleClick(movie)}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt={movie.name} />


          )

        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
   }
        </div>
  )
}

export default Row
