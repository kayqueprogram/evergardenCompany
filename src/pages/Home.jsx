import React from 'react';
import styled from 'styled-components'
import './Home.css'
import TranslateList from '../shared/Components/card_game/TranslateList';
import { Container, Row, Col } from 'react-bootstrap';
import GameList from '../shared/Components/card_game/GameList';
import Slider from '../shared/Components/carousel/Slider';



function Home() {

  const TitleSection = styled.h1`
  color: #ffff;
  padding: 10px;
  font-size: 30px;
  margin: 31px;
  text-shadow: 16px 16px 16px #000;
  


  @media(430px) {
    font-size: 16px;
  }

`

  const Section = styled.div`
  margin: 10px 10px 10px 10px;
  padding: 24px;
`

  return (
    <Container fluid>

        <br/>
        <Container>
          <Slider />
        </Container>

        <Section>
          <TitleSection className='title-section'>🚀 Lançamentos</TitleSection>

          <GameList />
        </Section>
        <Section>
          <TitleSection className='title-section'> 🕗 Traduções Pendentes !</TitleSection>
          <TranslateList />
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
