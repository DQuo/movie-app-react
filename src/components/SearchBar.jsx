import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

export default function SearchBar() {
  return (
    <HStack as='header' d='flex' justifyContent='center' p={4} m={4}>
      <form>
        <InputGroup>
          <InputLeftElement />
          <Input 
            type='text' 
            placeholder="Search for movies.."
            _placeholder={{ color: 'gray.300' }}
            borderColor='blackAlpha.500'
          />
        </InputGroup>
      </form>
    </HStack>
  )
}