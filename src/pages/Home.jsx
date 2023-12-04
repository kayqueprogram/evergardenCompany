import React from 'react';
import styled from 'styled-components'
import Header from '../shared/Components/navbar/Header';
import TranslateList from '../shared/Components/card_game/TranslateList';
import { Container, Row, Col } from 'react-bootstrap';
import GameList from '../shared/Components/card_game/GameList';
import Slider from '../shared/Components/carousel/Slider';



function Home() {

  const TitleSection = styled.h1`
  color: #ffff;
  padding: 10px;
  font-size: 36px;
  margin: 27px;
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
          <TitleSection>🚀 Lançamentos</TitleSection>

          <GameList />
        </Section>
        <Section>
          <TitleSection> 🕗 Traduções Pendentes !</TitleSection>
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
