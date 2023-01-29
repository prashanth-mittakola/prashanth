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
    title: 'Next.js + Framer Motion',
    link: 'https://next-js-13-movies-demo-app.vercel.app/',
    description: `Next.js V.13 + <a href="https://www.framer.com/motion/" target="_blank" style="text-decoration:underline; color:blue;">Framer Motion</a> + <a href="https://www.themoviedb.org/" target="_blank" style="text-decoration:underline; color:blue;">TheMovieDB API.</a>`,
    newTab: true
  },
  {
    title: 'corona tracker + search filter',
    link: '/projects/covid/search',
    description: `COVID-19 tracker.`,
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
                      color: '#88ccca'
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
                    {item.description.indexOf('<a href=') === -1 ? (
                      item.description
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
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
