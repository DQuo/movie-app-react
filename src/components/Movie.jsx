import { Heading, HStack, Image, Text, VStack, Flex } from '@chakra-ui/react';


export default function Movie(props) {
  const { src, title, description, rating, alt, ratingColor } = props;

  return (
    <VStack
      as='main'
      w='300px'
      maxH='450px'
      m='1rem'
      bgColor='blackAlpha.900'
      boxShadow='5px 5px 20px 7px #000000'
      border='1px'
      position='relative'
      overflow='hidden'
      borderRadius='xl'
      _hover={{ 
        transform: 'scale3d(1.3, 1.3, 1.3)', 
        zIndex: '1',
        '.overview': {
          transform: 'translateY(0)'
        }
      }}
    >

      <Image 
        w='100%'
        h='89%' 
        src={src}
        alt={alt}
      />

      <HStack 
        p={2}
        letterSpacing='0.5px'
      >
        <Heading 
          as='h3' 
          fontSize='medium'
          mr={2}
          lineHeight={1}
          color='whiteAlpha.900'
        >
          {title}
        </Heading>

        <Text 
          as='span'
          px={0.5}
          py={0.1}
          fontSize='small'
          fontWeight='bold'
          borderRadius='sm'
          color='blackAlpha.900'
          bgColor={ratingColor}
        >
          {rating}
        </Text>
      </HStack>

      
        <VStack 
          px={4} 
          py={2} 
          spacing={3} 
          overflowY='scroll'
          className='overview'
          position='absolute'
          left={0}
          bottom={0}
          right={0}
          maxH='200px'
          transform='translateY(101%)'
          transition='transform 0.3s ease-in'
          bgColor='#201c1c'
        >
          <Heading 
            as='h3' 
            fontSize='xl'
            color='#eee6e6'
          >Overview
          </Heading>

          <Text color='#eee6e6' lineHeight={1}>
            {description}
          </Text>
        </VStack>
   

    </VStack>
  )
}