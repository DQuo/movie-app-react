import { Button, HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'



export default function SearchBar({ handleSubmit, query, setQuery}) {
 
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <HStack as='header' d='flex' justifyContent='center' p={4} mx={4} mb={4}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input 
            w='500px'
            color='white'
            type='text'
            value={query}
            onChange={handleChange} 
            placeholder="Please search for movies.."
            _placeholder={{ color: 'gray.300' }}
            borderColor='blackAlpha.500'
          />
      
          <InputRightElement width="4.5rem" mr={1} ml={2}>
            <Button h="1.75rem" size="sm" type='submit'>
              Search
            </Button>
          </InputRightElement>

        </InputGroup>
      </form>
    </HStack>
  )
}