import React from 'react';
import styled from 'styled-components'
import Header from '../shared/Components/navbar/Header';
import { Container, Row, Col } from 'react-bootstrap';
import GameList from '../shared/Components/card_game/GameList';
import Slider from '../shared/Components/carousel/Slider';



function Home() {

  const TitleSection = styled.h1`
  color: #ffff;
  padding: 10px;
  margin: 27px;
  text-shadow: 16px 16px 16px #000;

`

const Section = styled.div`
  margin: 30px 10px 10px 30px;
  padding: 34px;
`

  return (
    <Container fluid>
      <Header />
      <br />
      <Slider />


     <Section>
      <TitleSection>🚀 Lançamentos</TitleSection>

      <GameList/>
     </Section>

    
    </Container>
  );
}

/**
 * 
 * 
 *  <Row>
          <Col>
            <h2>Card Games em Destaque</h2>
          </Col>
        </Row>
        
          <Col md={6}>
            <CardGame
              title="A Date With Natsuki"
              src="https://dokimods.me/_nuxt/img/thumbnail.27e0f4c.jpg"
              description="Vá a um encontro com Natsuki e descubra os segredos dela e de sua família."
              category="Romance, Comédia"
            />
          </Col> 
 */

export default Home;
