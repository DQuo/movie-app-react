import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Movie from './Movie';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5cbeb8e73123b9231be4a1aa85695c97';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


export default function MovieContainer() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchMovies(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  };

  useEffect(() => {
      fetchMovies(API_URL);
  }, []);

  return (
    <Flex wrap='wrap' justify='center' m={4}>
      { loading === true ? <div>Loading Movies...</div> : (
          movies.map((movie) => (
            <Movie 
              key={movie.id}
              src={`${IMG_PATH}${movie.poster_path}`}
              alt={movie.title}
              title={movie.original_title}
              description={movie.overview}
              rating={movie.vote_average}
            />
          ))
      )}
    </Flex>
  )
}