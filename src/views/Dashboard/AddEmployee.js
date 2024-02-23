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
  Tabs, TabList, TabPanels, Tab, TabPanel
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

function AddEmployee() {
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
              Employee Details
            </Text>
            <Button variant={colorMode === "dark" ? "primary" : "dark"}>
              All Employees
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

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>DOB</FormLabel>
                    <Input type="date" />
                  </FormControl>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup defaultValue="Itachi">
                      <HStack spacing="24px">
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input placeholder="Country" />
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
                mt={5}
              >
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
                    <FormLabel>Photo</FormLabel>
                    <Input type="file" />
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


                  <FormControl isRequired>
                    <FormLabel>Employee Type</FormLabel>
                    <RadioGroup defaultValue="Itachi">
                      <HStack spacing="24px">
                        <Radio value="Own">Own</Radio>
                        <Radio value="Outsource">Out Source</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>


                </Flex>
                <Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}
                  width='100%'
                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>


                  <FormControl isRequired>
                    <FormLabel>Employee Role</FormLabel>
                    <Select
                      options={employeeRoles}
                      placeholder="Select Role"
                    />
                  </FormControl>


                </Flex><Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}
                  width='100%'
                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>


                  <FormControl isRequired>
                    <FormLabel>Salary</FormLabel>
                    <Input placeholder="salary" type="number" />
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
              <Tab>Basic Details</Tab>
              <Tab>Advance</Tab>
              <Tab>Over Time</Tab>
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
                      <FormLabel>Passport</FormLabel>
                      <Input placeholder="Passport" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Passport Upload</FormLabel>
                      <Input placeholder="Passport" type="file" />
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
                      <FormLabel>Visa Expiry</FormLabel>
                      <Input placeholder="Visa Expiry" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Visa Upload</FormLabel>
                      <Input placeholder="Passport" type="file" />
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
                      <FormLabel>Eid Expiry</FormLabel>
                      <Input placeholder="Visa" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>EID Upload</FormLabel>
                      <Input type="file" />
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
                      <FormLabel>Work Permit</FormLabel>
                      <Input placeholder="Work Permit No" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Personal Number</FormLabel>
                      <Input placeholder="Personal Number" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Personal Account Number</FormLabel>
                      <Input placeholder="Personal Account Number" />
                    </FormControl>
                    <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                      <FormLabel>Labour Card Upload</FormLabel>
                      <Input type="file" />
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
                      <FormLabel>Reason</FormLabel>
                      <Select
                        options={advanceReasons}
                        placeholder="Select Reason"
                      />
                    </FormControl>
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
                      <FormLabel>Hours</FormLabel>
                      <Input type="number" placeholder="hours" />
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

export default AddEmployee;
