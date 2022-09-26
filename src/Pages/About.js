import React from 'react'
import Layout from '../Components/Layout'
import {Code, Container, Heading,HStack, Image,Spacer,Text, useColorModeValue, VStack} from "@chakra-ui/react"

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
        <Heading size="md" mb={2}>Meet the committee:</Heading>
          <VStack spacing={5}>
         <Container size="md" border="2px" borderRadius={15} p={3} borderColor="#5a5a5a">
          <HStack>
          <Spacer/>
            <Image src="/Images/Committee/Auditor.jpg" alt="Auditor" boxSize={55} borderRadius={50}/>
            
            <Heading size="md">Auditor</Heading>
            <Spacer/>
            </HStack>
            <Text>Heya! I&#39;m Mark and I&#39;ll be your auditor this year. Looking forward to seeing you all at our
                  upcoming events! We have some great things planned for this year so keep an eye on this
                  page to stay updated! If there are any concerns you have, just send it my way and I&#39;ll do my
                  best!</Text>
            
         </Container>

         <Container size="md" border="2px" borderRadius={15} p={3} borderColor="#5a5a5a">
          <HStack>
          <Spacer/>
            <Image src="/Images/Committee/Librarian.jpg" alt="Librarian" boxSize={55} borderRadius={50}/>
            
            <Heading size="md">Librarian</Heading>
            <Spacer/>
            </HStack>
            <Text>Hi, my name is Sally, I&#39;m in third year physics. I&#39;ll be the Physoc librarian this year. If you&#39;re
                  looking to borrow a book, contact me at duphysoclibrarian@gmail.com.</Text>
         </Container>

         <Container size="md" border="2px" borderRadius={15} p={3} borderColor="#5a5a5a">
          <HStack>
          <Spacer/>
            <Image src="/Images/Committee/EventOfficer.jpg" alt="EventOfficer" boxSize={55} borderRadius={50}/>
            
            <Heading size="md">Events and Trips officer</Heading>
            <Spacer/>
            </HStack>
            <Text>Ciao, I’m Hannah! I’m a theoretical physics student and I will be the trips and events officer
                  for Physoc this year  I love problem solving, listening to smart people talk, old buildings
                  and public transport. As the first year back fully in person, I hope to smush as much fun into
                  the year as possible :)) Keep an eye out for our quizzes, talks, balls, problem solving
                  sessions, society collab events and reading week trip. I look forward to seeing you soon</Text>
         </Container>

         <Container size="md" border="2px" borderRadius={15} p={3} borderColor="#5a5a5a">
          <HStack>
          <Spacer/>
            <Image src="/Images/Committee/Webmaster.jpg" alt="Webmaster" boxSize={55} borderRadius={50}/>
            
            <Heading size="md">Webmaster</Heading>
            <Spacer/>
            </HStack>
            <Text>Hi! my name is Robert and I’m the webmaster for physoc. I’m in third year studying general physics and I love everything to do with technology and physics. My main hobbies include reading, coding and reading code. If you think wow that guy sounds like a nerd you’d be correct, and it was a little hurtful.</Text>
         </Container>
         
        <Container size="md" border="2px" borderRadius={15} p={3} borderColor="#5a5a5a">
          <HStack>
          <Spacer/>
            <Image src="/Images/Committee/Treasurer.jpg" alt="Treasurer" boxSize={55} borderRadius={50}/>
            
            <Heading size="md">Treasurer</Heading>
            <Spacer/>
            </HStack>
            <Text>Hey I’m Jack, a 3rd year nano student. My role as treasurer is to safeguard our fat stacks of
sweet, sweet gold.
My three favorite things are physics, sailing, and kittens (I fkn love kittens)
I think joining Physoc is the perfect way to get away from those long lectures, and to get
know other people with similar interests to you!</Text>
         </Container>
         </VStack>
      </Container>
    </Layout>
  )
}

export default About