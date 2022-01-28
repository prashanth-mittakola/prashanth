import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

const NewLinkBox = ({children, id, title, thumbnail, url}) => (<LinkBox cursor="pointer">
<Image
  src={thumbnail}
  alt={title}
  className="grid-item-thumbnail"
  placeholder="blur"
/>
{url?(<a target="_blank" href={url}> <Text mt={2} fontSize={20}>
    {title}
  </Text></a>):null}
  {id?(<LinkOverlay href={`/works/${id}`}>
  <Text mt={2} fontSize={20}>
    {title}
  </Text>
</LinkOverlay>):null}
<Text fontSize={14}>{children}</Text>
</LinkBox>)


export const WorkGridItem = ({ children, id, title, thumbnail, url }) => (
  <Box w="100%" textAlign="center">
    {(id!=undefined) ? (
    <NextLink href={`/works/${id}`}> 
      <NewLinkBox children={children} id={id} title={title} thumbnail={thumbnail} url={url} />
    </NextLink>
    ) : null } 
    {(url!=undefined) ? (
    <a target="_blank" href={url}> 
      <NewLinkBox children={children} id={id} title={title} thumbnail={thumbnail} url={url} />
    </a>
    ) : null}
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
