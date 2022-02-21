import { Container } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Link from 'next/link'

const Projects = () => (
  <Layout title="Projects">
    <Container marginTop={'50px'}>
        <Section>
        <Link href="/projects/search">
          <div style={{ background: '#ffffff', textAlign:"center", padding:"30px 25px", cursor:"pointer"}}>
            <h3 style={{ fontSize: '42px', fontWeight: 'bold', color:"red" }}>1</h3>
            <h3 style={{fontWeight:700, color:"black",fontSize: '28px', marginBottom:"10px" }}>corona tracker + search filter</h3>
            <p style={{fontSize:"16px", color:"#a7a7a7" }}>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.</p>
          </div>
        </Link>
        </Section>
    </Container>
  </Layout>
)

export default Projects
