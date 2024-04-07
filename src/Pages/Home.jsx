import { Box, Container, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import Login from '../components/Authentication/Login'
import SignUp from '../components/Authentication/SignUp'

function Home() {
  return (
    <Container maxW="xl" centerContent>
      <Box d="flex" justifyContent="center" p={3} bg="white" borderRadius="lg" borderWidth="1px" w="100%" m="40px 0 15px 0">
        <Text fontSize="4xl" fontFamily="Poppins" textAlign="center">Have-A-Chat</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded'>
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">SignU Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Home
