
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const LoadMore = ({initialPages, setInitialPages, handleLoadMore}) => {


  return (
<>

<div className=" bg-dark">
      <Button className="w-100"
       variant="outline-warning" 
       size="<Stack gap={9}>}" 
      onClick={() => 
        {setInitialPages(initialPages + 1)
      }}>
      loadmore
      </Button>
</div>

</>

  );
};



export default LoadMore;

