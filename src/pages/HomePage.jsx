import React from 'react';
import MovieContainer from '../components/MovieContainer';
import SearchBar from '../components/SearchBar';
import RecentSearch from '../components/RecentSearch';

export default function HomePage() {
  return (
    <>
      <SearchBar handleSubmit={handleSubmit} query={query} setQuery={setQuery} setQueryList={setQueryList}/>
      <RecentSearch queryList={queryList} setQueryList={setQueryList} />
      <MovieContainer movies={movies} loading={loading} imgPath={IMG_PATH}/>
    </>
  )
}
