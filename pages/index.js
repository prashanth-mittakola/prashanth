import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'


const Home = () => (
  <Layout>
    <Container maxW='container.xl'>
      <Box display={{ md: 'flex' }} my={12}>
        <Box flexGrow={1} display={'flex'} alignItems={"center"}>
          <Box>
          <Heading as="h2" variant="page-title">
            Prashanth Mittakola
          </Heading>
          <p>Skills: HTML, CSS, JS, jQuery, React.js, Next.js</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="150px"
            display="inline-block"
            borderRadius="full"
            src="/images/prashanth.jpg"
            alt="Profile image"
            transition={"all 0.5s"}
            _hover={{transform:"scale(1.3)"}}
          />
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        my={12}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a web developer!
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>
          I'm a freelance and a full-stack developer based in India with a
          passion for building digital services/stuff.
          from planning, designing and launching products all the
          way to solving real-life problems with code.
          {/* <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink> */}
        </p>
        <Box my={4}>
          <strong>Dynamic Dreamz : </strong> 
          <span>Udhna, Surat- Trianee (2020 July - 2021 Feb)</span>
        <p style={{color:'#787878'}}>(Shopify Front-End Web Developer) </p>
            <p>
              Learned Shopify, Web Development (HTML, CSS, Javascript, JQuery, Liquid Template Language).
            </p>
        </Box>
        <Box my={4}>
          <strong>Quarantine (lockdown) 2020 : </strong> 
          <span>Python Programming Language</span>
          <p style={{color:'#787878'}}></p>
          <p>
          Utilized My Time To Learn Python Programming Language As My First Programming Language.
          </p>
          <p>
          <a href='https://codewithmosh.com/p/python-programming-course-beginners' target="_blank" style={{textDecoration:"underline"}}> from : CodeWithMosh Python </a>
           &amp; Then Started Leaning Web Developing (HTML, CSS, Javascript)
          </p>
        </Box>
        <Box my={4}>
          <strong>Siya Fashion : Udhna, Surat- (2019 - 2020)</strong> 
          <span> (Digital Marketing)</span>
          <p style={{color:'#787878'}}></p>
          <p>
          Worked As A Digital Marketing Manager. SEO, SMO, Google Analytics, Solving Website Optimization, Email Marketing, Etc..
          </p>
        </Box>
        <Box my={4}>
          <strong>Hashrail : Udhna, Surat - SEO Executive (2018 - 2019)</strong> 
          <p style={{color:'#787878'}}></p>
          <p>
          Worked On Clients Websites. E-Commerce Projects Learned How An E-Commerce Website Works. (WordPress Websites, Shopify)
          </p>
        </Box>
        <Box my={4}>
          <strong>Satya IT Couching Center : Ameerpet, Hyderabad (2018)</strong> 
          <p style={{color:'#787878'}}>(Learned Digital Marketing &amp; Python Basics)</p>
          <span>
          Got Trained In Digital Marketing. Worked On Theire Projects. &amp; Learned To Develop Websites Using WordPress.
          </span>
        </Box>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education :
        </Heading>
        <BioSection my={2}>
          <BioYear>College : </BioYear>
          S.R.K Institute Of Computer Science. Surat, Gujarat
          <p>B.Sc Computer Science</p>
        </BioSection>
        <BioSection my={2}>
          <BioYear>Secondary : </BioYear>
          Samrat Vidyala. Surat, Gujarat
        </BioSection>
        <BioSection my={2}>
          <BioYear>Primary : </BioYear>
          S.V.V High School. Kesamudram, Warangal, Telangana
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥ :
        </Heading>
        <p>
          Playing Chess, Music, Swimming, Learning new things...
        </p>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact :
        </Heading>
        <p><strong>Email</strong> : mittakolaprashanth@gmail.Com</p>
        <p><strong>Mob</strong> : +91 88662 38837</p>
      </Section>
    </Container>
  </Layout>
)

export default Home
