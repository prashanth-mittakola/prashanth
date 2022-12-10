import { Container } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Link from 'next/link'

const projectsData = [
  {
    title: 'file explorer',
    link: '/projects/file-explorer',
    description: 'A simple file explorer using react.js (custom hooks).',
    newTab: false
  },
  {
    title: 'Apple earphones scroll effect',
    link: 'https://codepen.io/prashant-mittakola/full/XWjBvZq',
    description: 'Apple earphones scroll effect.',
    newTab: true
  },
  {
    title: 'Movies landing page',
    link: 'https://prashanth-mittakola.github.io/movie-website',
    description: 'Movies landing page.',
    newTab: true
  },
  {
    title: 'Covid-19',
    link: 'https://codepen.io/prashant-mittakola/full/LYRzPPa',
    description: 'Covid-19 tracker.',
    newTab: true
  },
  {
    title: 'corona tracker + search filter',
    link: '/projects/covid/search',
    description: `Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.`,
    newTab: false
  }
]

const Projects = () => (
  <Layout title="Projects">
    <Container marginTop={'50px'}>
      {projectsData.map((item, index) => {
        return (
          <Section key={index}>
            <Link href={item.link} passHref>
              <a target={item.newTab ? '_blank' : ''}>
                <div
                  style={{
                    background: '#ffffff',
                    textAlign: 'center',
                    padding: '30px 25px',
                    cursor: 'pointer'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '42px',
                      fontWeight: 'bold',
                      color: 'red'
                    }}
                  >
                    {index + 1}
                  </h3>
                  <h3
                    style={{
                      fontWeight: 700,
                      color: 'black',
                      fontSize: '28px',
                      marginBottom: '10px'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#a7a7a7' }}>
                    {item.description}
                  </p>
                </div>
              </a>
            </Link>
          </Section>
        )
      })}
    </Container>
  </Layout>
)

export default Projects
