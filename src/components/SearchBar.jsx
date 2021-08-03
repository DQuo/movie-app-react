import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import DrawerExample from './Drawer';

export default function SearchBar({ handleSubmit, query, setQuery}) {
 
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <HStack as='header' d='flex' justifyContent='center' p={4} mx={4} mb={4}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement />
          <Input 
            type='text'
            value={query}
            onChange={handleChange} 
            placeholder="Please search for movies.."
            _placeholder={{ color: 'gray.300' }}
            borderColor='blackAlpha.500'
          />
        </InputGroup>
      </form>
      <DrawerExample />
    </HStack>
  )
}