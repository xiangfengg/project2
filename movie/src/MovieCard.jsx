import React, { useState } from 'react';

const MovieCard = ({ movie }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
//  
    <div id="cards" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      {isHovered && movie.overview ?(
        <div id ="card">

          <h5>{movie.name||movie.title}</h5>
           <h6>{movie.overview }</h6> 
        </div>
      ) : (
        <img 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title} 
          />
      )}
    </div>
  );
};

export default MovieCard;
