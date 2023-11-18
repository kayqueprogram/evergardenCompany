import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  text-align: center;

  

`;

function Slider() {
  return (
    <Container fluid >
      <StyledContainer>
        <Carousel>
          <Carousel.Item interval={1000}>
            <Image src="https://cdn.discordapp.com/attachments/995485098336067675/1175239739855613992/Traduzimos_vns_para_vocE.png?ex=656a824c&is=65580d4c&hm=a3c626c8609062bb7dcb21f4cbe04947bbf3a426c78a3306557ac96a53bedcc6&" fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image src='https://cdn.discordapp.com/attachments/995485098336067675/1175236831621697628/A_Date_With_Natsuki_2_2.png?ex=656a7f97&is=65580a97&hm=de8205360ae304820b34e08404c1a49f69a3e837dfcfc0c24953e4813c011881&' fluid />
          </Carousel.Item>

        </Carousel>
      </StyledContainer>
    </Container>
  );
}

/**para  mostrar texto:
 * 
 *  <Carousel.Item interval={500}>
          <Image src="https://dokimods.me/_nuxt/img/thumbnail.27e0f4c.jpg" fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://dokimods.me/_nuxt/img/thumbnail.27e0f4c.jpg" fluid />
        </Carousel.Item>
 * 
 *           <Carousel.Caption>
            <h3>texto</h3>
            <p>texto</p>
          </Carousel.Caption>
 * **/

export default Slider;
