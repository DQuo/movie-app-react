import { useState } from 'react';
import { Heading, HStack, Image, Text, VStack, Button } from '@chakra-ui/react';


export default function Movie(props) {
  const { src, title, description, rating, alt } = props;
  const [ show, setShow ] = useState(false);

  const onMouseOver = () => setShow(true);
  const onMouseLeave = () => setShow(false);

  return (
    <VStack
      w='300px'
      maxH='450px'
      m='1rem'
      bgColor='blue.50'
      boxShadow='5px 5px 20px 7px #a3a3a3'
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
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >

      <Image 
        w='100%' 
        src={src}
        alt={alt}
      />

      <HStack 
        alignItems='center'
        justifyContent='center' 
        p={2}
        letterSpacing='0.5px'
      >
        <Heading 
          as='h3' 
          fontSize='medium'
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
          bgColor='gray.300'
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
          maxH='100%'
          transform='translateY(101%)'
          transition='transform 0.3s ease-in'
          bgColor='#fff'
        >
          <Heading as='h3' fontSize='xl'>Overview</Heading>
          <Text>
            {description}
          </Text>
        </VStack>
   

    </VStack>
  )
}