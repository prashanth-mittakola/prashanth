import Link from "next/link";
import {
  Container,
  Heading as ChakraHeading,
  Box,
  Image,
  Button,
  useColorModeValue
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear as BioHeader } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { resumeData } from "../db/resumeData";

const Heading = ({ title, ...props }) => <ChakraHeading {...props}>{title}</ChakraHeading>;
const Para = ({ data, ...props }) => <p {...props}>{data}</p>;
const Strong = ({ data, ...props }) => <strong {...props}>{data}</strong>;

const Home = () => (
  <Layout>
    <Container maxW="container.xl">
      <Box display={{ md: "flex" }} my={12}>
        <Box flexGrow={1} display={"flex"} alignItems={"center"}>
          <Box>
            <Heading as="h2" variant="page-title" title="Prashanth Mittakola" />
            <Para data={`Skills: ${resumeData.skills.join(", ")}`} />
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
            src={resumeData.images.profileImage}
            alt={resumeData.images.altText}
            transition={"all 0.5s"}
            _hover={{ transform: "scale(1.3)" }}
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
        <Strong data={`Hello, I'm a web developer!`} />
      </Box>

      <Section delay={0.1}>
        <div className="work-block">
          <Heading as="h3" variant="section-title" title={"Work"} />
          {resumeData.work.map((item, index) => {
            const {company, address, year, technologies, heading, description, descriptionHtml} = item;
            return (
              <Box my={4} key={index}>
                <Strong data={company ?? heading} />
                <span>
                  {address ?? ""} {year ? ` (${year})`:""}
                </span>
                {technologies && <p className="mt-2">({technologies})</p>}
                {description && <p className="color-grey mt-2">{description}</p>}
                {descriptionHtml && <div className="color-grey mt-2" dangerouslySetInnerHTML={{__html:descriptionHtml}}/>}
              </Box>
            );
          })}
          <Box align="center" mt={8}>
            <Link href="/projects" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Box>
        </div>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" title={"Education :"} />
        <BioSection my={2}>
          <BioHeader>College : </BioHeader>
          S.R.K Institute Of Computer Science. Surat, Gujarat
          <p>B.Sc Computer Science</p>
        </BioSection>
        <BioSection my={2}>
          <BioHeader>Secondary : </BioHeader>
          Samrat Vidyala. Surat, Gujarat
        </BioSection>
        <BioSection my={2}>
          <BioHeader>Primary : </BioHeader>
          S.V.V High School. Kesamudram, Warangal, Telangana
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" title={"I ❤ :"} />
        <Para data={"Playing Chess, Music, Swimming, Learning new things..."}/>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" title={"Contact :"} />
        <p>
          <Strong data={"Email"} /> : mittakolaprashanth@gmail.Com
        </p>
        <p>
          <Strong data={"Mob"}/> : +91 88662 38837
        </p>
      </Section>
    </Container>
  </Layout>
);

export default Home;
