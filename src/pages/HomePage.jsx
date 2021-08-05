import SearchBar from "../components/SearchBar";
import RecentSearch from "../components/RecentSearch";
import MovieContainer from "../components/MovieContainer";


const HomePage = (props) => {
  const {
    handleSubmit, 
    handleBadgeClick,
    movies,
    query,
    setQuery,
    queryList,
    setQueryList,
    loading,
    imgPath } = props;

  return (
    <>
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
      <MovieContainer 
        movies={movies} 
        loading={loading} 
        imgPath={imgPath}
      />
    </>
  )
}

export default HomePage;
