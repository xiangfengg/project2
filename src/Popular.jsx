import { useState, useContext, useEffect } from 'react';
import { PopularContext } from './App';
// import './cards.css';
import MovieCard from './MovieCard';

 import LoadMore from './LoadMore';
import { API_KEY } from './config';


const Popular = () => {
  //  useState for API
  const [PopularMovies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isOpen, setIsOpen]=useState(false)

  const [PopularInitialPages, setPopularInitialPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);


    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${PopularInitialPages}`);
        const data = await res.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }


//movieCard is rendered for each movie 
//passing the prop called movie and onclick to movieconponment 

console.log(PopularMovies);

return ( 
<>
  <div className='cardContainer'>
    {PopularMovies.map((movie) => (
       <MovieCard key={movie.id}
      movie={movie} 
      // selectedMovie={selectedMovie}
      // isOpen={isOpen}
      // onClick={() => {
      // setSelectedMovie(movie);
      // setIsOpen(!isOpen);
      // }}
      />  
    ))}
  </div>

  <LoadMore PopularInitialPages={PopularInitialPages} setPopularInitialPages={setPopularInitialPages} /> 

</>
);
};
  
  export default Popular;