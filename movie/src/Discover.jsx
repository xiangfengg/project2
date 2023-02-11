import { useState, useEffect } from 'react';
import './cards.css';
import MovieCard from './MovieCard';
import LoadMore from './LoadMore';


const Discover = () => {
  //fetching APi, Error and
  const [DiscoverMovies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isOpen, setIsOpen]=useState(false)

  //to store the Page no.
  const [initialPages, setInitialPages] = useState(1);
 

  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9dd396610432e22dfc92a06618330872&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${initialPages}&with_watch_monetization_types=flatrate`);
        const data = await res.json();
        setMovies([...DiscoverMovies,...data.results]);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [initialPages]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }



  return ( 
    <> 

     <div className="cardContainer">
      {DiscoverMovies.map((movie) => (
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

    <LoadMore initialPages={initialPages} setInitialPages={setInitialPages} /> 





     </>
  );
};

export default Discover;