import React from "react";

const Display = ({ movie }) => {
  return (
    <div>
      {movie.map(item => (
        <div key={item.id}>
          <img src={item.imgUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Display