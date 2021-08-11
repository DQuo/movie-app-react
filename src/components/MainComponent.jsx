import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import MovieContainer from "./MovieContainer";
import SearchBar from "./SearchBar";
import RecentSearch from "./RecentSearch";

const API_URL = process.env.REACT_APP_API_URL;
const IMG_PATH = process.env.REACT_APP_IMG_PATH;
const SEARCH_URL = process.env.REACT_APP_SEARCH_URL;

export default function MainComponent() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [queryList, setQueryList] = useState([]);

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
  }

  const handleSubmit = (e, ref) => {
    e.preventDefault();

    if (query && query !== "") {
      fetchMovies(SEARCH_URL + query);
      setQueryList((prev) => [...prev, query]);
      setQuery("");
      ref.current.blur();
    } else {
      window.location.reload();
    }
  };

  const handleBadgeClick = async (term) => {
    await fetchMovies(SEARCH_URL + term);
    console.log(movies);
  };

  useEffect(() => {
    fetchMovies(API_URL);
  }, []);

  return (
    <Box bgColor="red.600" minHeight="100vh">
      <SearchBar
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
        setQueryList={setQueryList}
      />
      <RecentSearch
        queryList={queryList}
        setQueryList={setQueryList}
        onClick={handleBadgeClick}
      />
      <MovieContainer movies={movies} loading={loading} imgPath={IMG_PATH} />
    </Box>
  );
}
