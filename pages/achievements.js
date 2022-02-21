import { 
  Container, 
  // Heading, 
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import certPython from '../public/images/achievements/certificate-google-ads-fundamentals.png'
import certGoogleAdsFundamentals from '../public/images/achievements/certificate-python.png'

const Achievements = () => {
  return (
    <Layout title="Achievements">
      <Container>
        {/* <Heading as="h3" fontSize={20} mb={4}>
          My Achievements
        </Heading> */}

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            url="#"
            title="Python certificate"
            thumbnail={certPython}
          >
            Python programming language certificate.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            url="#"
            title="Google ads fundamentals"
            thumbnail={certGoogleAdsFundamentals}
          >
            Google ads fundamentals certificate.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Achievements
