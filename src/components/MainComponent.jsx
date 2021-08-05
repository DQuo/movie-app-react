import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import HomePage from '../pages/HomePage';
import { Route, Switch } from 'react-router-dom';



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

  const handleSubmit = (e, ref) => {
    e.preventDefault();

    if ( query && query !== '') {
      fetchMovies(SEARCH_URL + query);
      setQueryList((prev) => [...prev, query]);
      setQuery('');
      ref.current.blur();
    }
    else {
      window.location.reload();
    }
  }

  const handleBadgeClick = async (term) => {
    await fetchMovies(SEARCH_URL + term);
    console.log(movies);
  };

  useEffect(() => {
      fetchMovies(API_URL);
  }, []);


  return (
    <Box bgColor='red.600'>
      <Switch>
        <Route exact path='/'>
          <HomePage 
            handleSubmit={handleSubmit}
            handleBadgeClick={handleBadgeClick}
            movies={movies}
            query={query}
            setQuery={setQuery}
            queryList={queryList}
            setQueryList={setQueryList}
            loading={loading}
            imgPath={IMG_PATH}
          />
        </Route>
      </Switch>
    </Box>
  );
}