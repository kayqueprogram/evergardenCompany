import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';


const games = [
  { id: 1, title: 'Doki Doki My Escape', description: 'Uma história sombria focada na tsundere de cabelo rosa favorita de todos, Natsuki. A história é um passeio emocionante e emocionante do começo ao fim. Junto com a própria Natsuki...', src: 'https://dokimods.me/_nuxt/img/thumbnail.e3d2184.jpg', category: "Romance, Drama" },
];

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: space-around; 
  max-width: 1350px; 
  margin: 0 auto; 
`;

const TranslateList = () => {
  return (
    <ListContainer>
      {games.map((game) => (
        <CardItem key={game.id} title={game.title} description={game.description} src={game.src} category={game.category} />
      ))}
    </ListContainer>
  );
};

export default TranslateList;
