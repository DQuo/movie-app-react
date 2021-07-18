
import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'



export default function SearchBar({ handleSubmit, query, setQuery}) {
 
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <HStack as='header' d='flex' justifyContent='center' p={4} m={4}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement />
          <Input 
            type='text'
            value={query}
            onChange={handleChange} 
            placeholder="Search for movies.."
            _placeholder={{ color: 'gray.300' }}
            borderColor='blackAlpha.500'
          />
        </InputGroup>
      </form>
    </HStack>
  )
}