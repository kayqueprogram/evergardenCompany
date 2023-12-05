import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 17.9rem;
  margin: 13px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: scale 0.3s ease-in-out; /* Adicionando a animação de transição */
 
  
  &:hover {
    scale: 1.07;
    opacity: 0.9; /* Alterando a opacidade ao passar o mouse */
    
    cursor: pointer;
  }
`;

function CardItem({ title, description, src, category, link }) {
  return (
    <StyledCard bg="dark">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title style={{ color: "#fff"}}>{title}</Card.Title>
        <Card.Text style={{ color: "#fff" }}>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>{category}</ListGroup.Item>
      </ListGroup>
      {link? (
        <Card.Body>
          <Card.Link href={link}>Download</Card.Link>
        </Card.Body>
      ): ''}
    </StyledCard>
  );
}

export default CardItem;
