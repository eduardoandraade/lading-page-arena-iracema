import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://avatars.githubusercontent.com/u/109284750?v=4",
  },
  {
    name: "Segun Adebayo",
    url: "https://avatars.githubusercontent.com/u/109284750?v=4",
  },
  {
    name: "Kent Dodds",
    url: "https://avatars.githubusercontent.com/u/109284750?v=4",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://avatars.githubusercontent.com/u/109284750?v=4",
  },
  {
    name: "Christian Nwamba",
    url: "https://avatars.githubusercontent.com/u/109284750?v=4",
  },
];

export default function Forms() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
       
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            >
              Garanta Seu Convite
              <Text
                as={"span"}
                bgGradient="linear-gradient(to bottom left, #FF7F00, #FFD700, #00BFFF, #9901F6)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>
          <Stack spacing={{ base: 10, md: 20 }}>
   
   <Stack direction={"row"} spacing={4} align={"center"}>
     <AvatarGroup>
       {avatars.map((avatar) => (
         <Avatar
           key={avatar.name}
           name={avatar.name}
           src={avatar.url}
           size={{ base: "md", md: "lg" }}
           position={"relative"}
           zIndex={2}
           _before={{
             content: '""',
             width: "full",
             height: "full",
             rounded: "full",
             transform: "scale(1.125)",
             bgGradient: "linear-gradient(to bottom left, #FF7F00, #FFD700, #00BFFF, #9901F6)",
             position: "absolute",
             zIndex: -1,
             top: 0,
             left: 0,
           }}
         />
       ))}
     </AvatarGroup>
     <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
       +
     </Text>
     <Flex
       align={"center"}
       justify={"center"}
       fontFamily={"heading"}
       fontSize={{ base: "sm", md: "lg" }}
       bg={"gray.800"}
       color={"white"}
       rounded={"full"}
       minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
       minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
       position={"relative"}
       _before={{
         content: '""',
         width: "full",
         height: "full",
         rounded: "full",
         transform: "scale(1.125)",
         bgGradient: "linear-gradient(to bottom left, #FF7F00, #FFD700, #00BFFF, #9901F6)",
         position: "absolute",
         zIndex: -1,
         top: 0,
         left: 0,
       }}
     >
       Você
     </Flex>
   </Stack>
 </Stack>
          <Box as={"form"} mt={5}>
            <Stack spacing={4}>
              <Input
                placeholder="Firstname"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="firstname@lastname.io"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="+1 (___) __-___-___"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, #9901F6,yellow.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
     <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};