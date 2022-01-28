import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box position={"absolute"} bottom={0} width={"100%"} >
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} developed with ♥ Prashanth Mittakola. inspired by Takuya Matsuyama.
    </Box>
    </Box>
  )
}

export default Footer
