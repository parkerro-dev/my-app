import React from 'react'
import Layout from '../Components/Layout'
import {Code, Container, Heading,HStack,Text, useColorModeValue} from "@chakra-ui/react"

function About() {
  return (
    <Layout>
      <Container align="center" mt={5}>
        <Heading>Welcome to Physoc!</Heading>        
      </Container>

      <Container border="1px" bg ={useColorModeValue('white','#3a3a3a')} borderRadius={10} mt={7} pt={3} pb={3}>
        <Code r={2} pl={2}>Who are we?</Code>

        <Text >We are the DU physics society, our society's main goal is to get everyone who's interested in physics together. 
          We hold events, talks, trips and quizzes! If you study physics you can meet students from your year and above who can lend a hand to problems you might have, or if you don't study physics you can meet like minded people who share your love of the subject!
        </Text>
      </Container>

      <Container align="center" mt={5}>
        <Heading size="md">Meet the committee:</Heading>
         
         <Text>Mark</Text>
         <Container side="md" border={1} borderRadius={15}>
          <HStack>
            <Image src="" alt="mark" boxSize="small" borderRadius={50}/>
          </HStack>
         </Container>
      </Container>
    </Layout>
  )
}

export default About