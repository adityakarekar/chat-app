import React,{useState} from 'react'
import {VStack,Button,FormLabel,FormControl,Input,InputGroup,InputRightElement} from "@chakra-ui/react"

function Login() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show,setShow]=useState(false)


    const handleClick=()=>{
        setShow(!show);
    }

    const submitHandler=()=>{}


    return (
        <VStack spacing="5px">
            <FormControl id="email" isRequired>
                <FormLabel>
                    Email   
                </FormLabel>
                <Input placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>
                    Password   
                </FormLabel>
                <InputGroup>
                    <Input type={show?"text":"password"} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show?"Hide":"Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
               
            </FormControl>

            <Button colorScheme="blue" width="100%" style={{marginTop:15}} onClick={submitHandler}>Login</Button>
            <Button variant="solid" colorScheme="red" width="100%"  onClick={()=>{
                setEmail("guest@example.com"); 
                setPassword("123456")}}>
                    Get Guest User Credentials
            </Button>
        </VStack>
    )
}

export default Login
