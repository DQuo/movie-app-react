import { Box, Heading, Flex, Badge, Button } from '@chakra-ui/react'


export default function RecentSearch({ queryList, setQueryList, onClick }) {

  const handleClick = (e) => {
    setQueryList([]);
  }

  

  return (
    <Box textAlign='center' m={5}>
      {queryList.length !== 0 && (
        <Heading as='h3' fontSize='large'>Recent Searches...</Heading>
      )}
      
      <Flex justify='center'>
        { queryList.map((searchTerm, idx) => (
          <Badge
            key={idx} 
            colorScheme='green'
            m={1}
            onClick={() => onClick(searchTerm)}
            cursor={'pointer'}
          >
            {searchTerm}
          </Badge>
        )) }
      </Flex>

      {queryList.length !== 0 && (
        <Button
          onClick={handleClick}
          w='100px' 
          h='20px' 
          color='whiteAlpha.800' 
          bgColor='blue.400'
        >
          Clear History
        </Button>
      )}
      
    </Box>
  )
}
