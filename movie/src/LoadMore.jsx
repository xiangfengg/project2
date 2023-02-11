import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const LoadMore = ({ initialPages, setInitialPages,PopularInitialPages,setPopularInitialPages}) => {
  console.log(PopularInitialPages);
  return (
    <div className="bg-dark">
      <Button
        className="w-100"
        variant="outline-warning"
        onClick={() => {
          if (initialPages) {
            setInitialPages(initialPages + 1);
          }
          if (PopularInitialPages) {
            setPopularInitialPages(PopularInitialPages + 1);
          }
        }}
      >
        Load More
      </Button>
    </div>
  );
};

export default LoadMore;
