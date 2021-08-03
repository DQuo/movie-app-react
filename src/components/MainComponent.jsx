import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import MovieContainer from './MovieContainer';
import SearchBar from './SearchBar';
import RecentSearch from './RecentSearch';
import DrawerExample from './Drawer';


const API_URL = process.env.REACT_APP_API_URL;
const IMG_PATH = process.env.REACT_APP_IMG_PATH;
const SEARCH_URL = process.env.REACT_APP_SEARCH_URL;


export default function MainComponent() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [ query, setQuery ] = useState('');
  const [ queryList, setQueryList ] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( query && query !== '') {
      fetchMovies(SEARCH_URL + query);
      setQueryList((prev) => [...prev, query]);
      console.log(queryList);
      setQuery('');
    }
    else {
      window.location.reload();
    }
  }

  useEffect(() => {
      fetchMovies(API_URL);
  }, []);


  return (
    <Box bgColor='red.600'>
      <SearchBar handleSubmit={handleSubmit} query={query} setQuery={setQuery} setQueryList={setQueryList}/>
      <RecentSearch queryList={queryList} setQueryList={setQueryList} />
      <MovieContainer movies={movies} loading={loading} imgPath={IMG_PATH}/>
      <DrawerExample />
    </Box>
  );
}