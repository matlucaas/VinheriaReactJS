import React from 'react';
import styled from 'styled-components';
import HeaderPag from './componente/header/Header';
import AsidePag from './componente/aside/Aside';
import FooterPag from './componente/footer/Footer';
// import './App.css';

const Body = styled.body`
  background-color: white;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`

const Section = styled.section`
  display: flex;
  flex-direction: row;
`

const Main = styled.main`
  background-color: white;
  height: 820px;
  flex: 1;
`

function App() {
  return (
    <Body>
      <HeaderPag/>
      <Section>
        <Main/>
        <AsidePag/>
      </Section>
      <FooterPag/>
    </Body>
  );
}

export default App;