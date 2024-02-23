// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  Radio,
  HStack,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Textarea 
} from "@chakra-ui/react";

import {
  Select,
} from "chakra-react-select";
// Assets


// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
  FaPencilAlt,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

// Form 
import { Formik, Field, Form } from "formik";

function AddClient() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "transparent");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");
  const employeeRoles = [
    { value: "Partner", label: "Partner" },
    { value: "Management", label: "Management" },
    { value: "Accountant", label: "Accountant" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Driver", label: "Driver" },
    { value: "TL", label: "TL" },
    { value: "ATL", label: "ATL" },
    { value: "Cleaning Machine Operator", label: "Cleaning Machine Operator" },
    { value: "Cleaner", label: "Cleaner" },
  ]
  const advanceReasons = [
    { value: "Advance", label: "Advance" },
    { value: "Deduction", label: "Deduction" },
    { value: "Loan", label: "Loan" },
  ]
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>

      <Card p='16px' mt='24px'>
        <CardHeader>
          <Flex
            justify='space-between'
            align='center'
            minHeight='60px'
            w='100%'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Client Details
            </Text>
            <Button variant={colorMode === "dark" ? "primary" : "dark"}>
              All Clients
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>
          <Formik>
            <Form>
              <Flex
                direction={{ sm: "column", md: "row" }}
                align='center'
                w='100%'
                justify='center'
                py='1rem'
                borderRadius='15px'
                border='1px solid'
                borderColor={borderColor}>

                <Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}

                  width='100%'

                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Name" />
                  </FormControl>

                  <FormControl isRequired  me={{ sm: "0px", md: "24px" }}>
                    <FormLabel>TRN</FormLabel>
                    <Input placeholder="TRN"  />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Upload</FormLabel>
                    <Input type="file"  />
                  </FormControl>
                  

                </Flex>

              </Flex>
              
              <Flex
                direction={{ sm: "column", md: "row" }}
                align='center'
                w='100%'
                justify='center'
                py='1rem'
                borderRadius='15px'
                border='1px solid'
                borderColor={borderColor}
                mt={5}>

                
                <Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}
                  width='100%'
                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>
                        
                      
                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Phone No</FormLabel>
                    <Input placeholder="Phone Number" />
                  </FormControl>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" type="email" />
                  </FormControl>
                  
                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Address</FormLabel>
                    <Textarea placeholder='Address' />
                  </FormControl>

                  


                </Flex>
              </Flex>
              <Flex
                  direction={{ sm: "column", md: "row" }}
                  mt={5}
                >

                  <Spacer />
                  <Box p='4' >
                    <Button colorScheme="teal" size="md">
                      Save
                    </Button>
                  </Box>

                </Flex>
            </Form>
          </Formik>

          <Tabs>
            <TabList>
              <Tab>Contract Details</Tab>
              <Tab>Payment</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>

                <Flex
                  direction={{ sm: "column", md: "row" }}
                  align='center'
                  w='100%'
                  justify='center'
                  py='1rem'
                  borderRadius='15px'
                  border='1px solid'

                  borderColor={borderColor}
                >

                  <Flex
                    p='1rem'
                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                    width='100%'
                    align='center'
                    mb={{ sm: "24px", md: "0px" }}
                    me={{ sm: "0px", md: "24px" }}>


                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Date From</FormLabel>
                      <Input placeholder="Date from" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Date To</FormLabel>
                      <Input placeholder="Date to" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Amount <Text fontSize="xs" as="span">(yrs)</Text></FormLabel>
                      <Input placeholder="Amount" type="number" />
                    </FormControl>


                  </Flex>
                </Flex>

                <Flex
                  direction={{ sm: "column", md: "row" }}
                  mt={10}
                  align='center'
                  w='100%'
                  justify='center'
                  py='1rem'
                  borderRadius='15px'
                  border='1px solid'

                  borderColor={borderColor}
                >

                  <Flex
                    p='1rem'
                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                    width='100%'
                    align='center'
                    mb={{ sm: "24px", md: "0px" }}
                    me={{ sm: "0px", md: "24px" }}>

                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Supervisor</FormLabel>
                      <Input placeholder="Supervisor number" type="number" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Supervisor Price</FormLabel>
                      <Input placeholder="Supervisor Price" type="number" />
                    </FormControl>


                  </Flex>
                </Flex>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  mt={10}
                  align='center'
                  w='100%'
                  justify='center'
                  py='1rem'
                  borderRadius='15px'
                  border='1px solid'

                  borderColor={borderColor}
                >

                  <Flex
                    p='1rem'
                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                    width='100%'
                    align='center'
                    mb={{ sm: "24px", md: "0px" }}
                    me={{ sm: "0px", md: "24px" }}>

                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Male Employee</FormLabel>
                      <Input placeholder="Male Employee number" type="number" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Male Employee Price</FormLabel>
                      <Input placeholder="Female Employee Price" type="number" />
                    </FormControl>


                  </Flex>
                </Flex>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  mt={10}
                  align='center'
                  w='100%'
                  justify='center'
                  py='1rem'
                  borderRadius='15px'
                  border='1px solid'

                  borderColor={borderColor}
                >

                  <Flex
                    p='1rem'
                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                    width='100%'
                    align='center'
                    mb={{ sm: "24px", md: "0px" }}
                    me={{ sm: "0px", md: "24px" }}>

                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Female Employee</FormLabel>
                      <Input placeholder="Female Employee number" type="number" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Female Employee Price</FormLabel>
                      <Input placeholder="Female Employee Price" type="number" />
                    </FormControl>


                  </Flex>
                </Flex>

                
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  mt={10}
                >

                  <Spacer />
                  <Box p='4' >
                    <Button colorScheme="teal" size="md">
                      Save
                    </Button>
                  </Box>

                </Flex>

              </TabPanel>
              <TabPanel>

                <Flex
                  direction={{ sm: "column", md: "row" }}
                  align='center'
                  w='100%'
                  justify='center'
                  py='1rem'
                  borderRadius='15px'
                  border='1px solid'

                  borderColor={borderColor}
                >

                  <Flex
                    p='1rem'
                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                    width='100%'
                    align='center'
                    mb={{ sm: "24px", md: "0px" }}
                    me={{ sm: "0px", md: "24px" }}>


                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Date</FormLabel>
                      <Input type="date" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Amount</FormLabel>
                      <Input type="number" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Receipt Upload</FormLabel>
                      <Input placeholder="Passport" type="file" />
                    </FormControl>
                  </Flex>

                </Flex>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  mt={10}
                >

                  <Spacer />
                  <Box p='4' >
                    <Button colorScheme="teal" size="md">
                      Save
                    </Button>
                  </Box>

                </Flex>
              </TabPanel>
              
            </TabPanels>
          </Tabs>





        </CardBody>
      </Card>
    </Flex>
  );
}

export default AddClient;
