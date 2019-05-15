import React from "react";
import './movies.css';
import Card from './card';
import Button from '../navigation/button';


const Movies = ({
  movies, 
  page,
  onPageIncrease, 
  onPageDecrease
}) => (
      <section>
        <ul className="movies">
      {movies.map( movie => (
        <Card key={movie.id} movie={movie} />
          ))}
        </ul>
    <div className="pagination">
      <Button onClick={onPageDecrease}>Previous</Button>
      <span>{`Page ${page}`}</span>
      <Button onClick={onPageIncrease}>Next</Button>
    </div>
      </section>
)


export default Movies;