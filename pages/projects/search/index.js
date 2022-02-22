import React, { useState, useEffect } from 'react'
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const MainTable = ({ data, query }) => {
  return (
    <Table variant="simple">
      <TableCaption>Corona tracker</TableCaption>
      <Thead>
        <Tr>
          <Th fontSize={'1rem'}>Country</Th>
          <Th fontSize={'1rem'}>New Confirmed</Th>
          <Th fontSize={'1rem'} isNumeric>
            New Deaths
          </Th>
          <Th fontSize={'1rem'} isNumeric>
            Total Confirmed
          </Th>
          <Th fontSize={'1rem'} isNumeric>
            Total Deaths
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {data
          .filter(i => i.Country.toLowerCase().includes(query))
          .map(i => {
            return (
              <Tr key={i.ID}>
                <Td>{i.Country}</Td>
                <Th>{i.NewConfirmed}</Th>
                <Th isNumeric>{i.NewDeaths}</Th>
                <Th isNumeric>{i.TotalConfirmed}</Th>
                <Th isNumeric>{i.TotalDeaths}</Th>
              </Tr>
            )
          })}
      </Tbody>
    </Table>
  )
}

const Search = () => {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(data => data.json())
      .then(data => {
        console.log("data",data)
        const {Global,Countries} = data;
        Global.Country = "Global";
        Global.ID = "global";
        const worldWide = {...Global};
        worldWide.ID = "worldWide"
        worldWide.Country = "WorldWide";
        setCountries([...Countries,Global,worldWide])
      })
      .catch(e => alert(e))
  }, [])
  return (
    <Container maxW="container.xl" marginTop={'50px'} minHeight="85vh" overflowX={"scroll"}>
      {/* <Heading as="h3" fontSize={20} mb={4}>
        Search
      </Heading> */}

      <h2
        style={{
          textAlign: 'center',
          margin: '30px 0',
          fontWeight: 600,
          fontSize: '32px'
        }}
      >
        Corona tracker with search filters
      </h2>

      <div>
        <Input
          variant="filled"
          placeholder="Search.."
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '50px' }}>
        <MainTable data={countries} query={query.toLowerCase()} />
      </div>
    </Container>
  )
}

export default Search
