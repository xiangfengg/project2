import { useState, useEffect } from 'react';
import './cards.css';
import MovieCard from './MovieCard';
import LoadMore from './LoadMore';


const Search = ({ value}) => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isOpen, setIsOpen]=useState(false)


 
  console.log(value);
  useEffect(() => {
    setIsLoading(true);

    const fetchSearchResults = async () => {
      try {
        const movieURL=`https://api.themoviedb.org/3/search/movie?api_key=9dd396610432e22dfc92a06618330872&language=en-US&query=${value}&page=1&include_adult=false`
        const res = await fetch(movieURL);

        const data = await res.json();
        setSearchTerm(data.results);
        setIsLoading(false);
                  console.log(movieURL)
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }  
    };

    fetchSearchResults();
  }, [value]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }



  return ( 
    <> <div className='hello'>
      <div className="cardContainer">
      {searchTerm.map((movie) => (
         <MovieCard key={movie.id}
        movie={movie} 
        // selectedMovie={selectedMovie}
        // isOpen={isOpen}
        // setSelectedMovie={setSelectedMovie}
        // setIsOpen={setIsOpen}
         />
      )
      )}
     </div>
</div>
    </> 
  );
};

export default Search;
