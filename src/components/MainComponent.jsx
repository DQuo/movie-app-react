import { Box } from '@chakra-ui/react';
import MovieContainer from './MovieContainer';
import SearchBar from './SearchBar';


export default function MainComponent() {
  return (
    <Box>
      <SearchBar />
      <MovieContainer />
    </Box>
  );
}