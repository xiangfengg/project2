import {useContext} from 'react';
import { useState, useEffect ,} from 'react';
import { PopularContext } from './App';
import './cards.css';
import MovieCard from './MovieCard';



const Trending = () => {

  const [TrendingShows , setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isOpen, setIsOpen]=useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchTrending = async () => {
      try {
        const TrendingRes = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=9dd396610432e22dfc92a06618330872');
        const TrendingData = await TrendingRes.json();
        setTrending(TrendingData.results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchTrending();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }


return ( 
  <div className="cardContainer">
    {TrendingShows.map((movie) => (
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
);
};
  
  export default Trending;