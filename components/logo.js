import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { BellIcon } from '@chakra-ui/icons'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <BellIcon />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='monospace'
            fontWeight="bold"
            ml={3}
          >
            Prashanth Mittakola
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
