import { Box, Flex, Heading } from '@chakra-ui/react';


import Movie from './Movie';


export default function MovieContainer({ movies, loading, imgPath }) {
  return (
    <Box>
      <Box textAlign='center'>
        <Heading color='whiteAlpha.600'>Popular Movies</Heading>
      </Box>
      <Flex wrap='wrap' justify='center' m={4}>
        { loading === true ? <div>Loading Movies...</div> : (
            movies.map((movie) => {
              let ratingColor;

              if ( movie.vote_average >= 7 ) {
                ratingColor = 'green.400';
              } 
              else if ( movie.vote_average < 7 && movie.vote_average >= 6 ) {
                ratingColor = 'yellow.400'
              } 
              else {
                ratingColor = 'red.400'
              }

              return (
                <Movie 
                  key={movie.id}
                  src={`${imgPath}${movie.poster_path}`}
                  alt={movie.title}
                  title={movie.original_title}
                  description={movie.overview}
                  rating={movie.vote_average}
                  ratingColor={ratingColor}
                />
              )
            })
        )}
      </Flex>
    </Box>
  )
}