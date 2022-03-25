import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [jedi, setJedi] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setJedi(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  
  const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align:justify
    `
  
  return (
    <StyledDiv className="App">
      <h1 className="Header">Characters</h1>
      {jedi.map(jed => {
        return <Character name={jed.name} height={jed.height} mass={jed.mass} hair_color={jed.hair_color} skin_color={jed.skin_color} />
       })}
    </StyledDiv>
  );
}

export default App;
