import { Button, HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useRef } from 'react';



export default function SearchBar({ handleSubmit, query, setQuery}) {
 
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const inputRef = useRef();


  return (
    <HStack as='header' d='flex' justifyContent='center' p={4} mx={4} mb={4}>

      <form onSubmit={(e) => handleSubmit(e, inputRef)}>
        <InputGroup>
          <Input
            ref={inputRef}
            w='70vw'
            color='white'
            type='text'
            value={query}
            onChange={handleChange} 
            placeholder="Search Movies..."
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