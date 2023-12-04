import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const games = [
  { id: 1, title: 'A Date With Natsuki', description: 'Vá a um encontro com Natsuki e descubra seus segredos e de sua família', src: 'https://cdn.discordapp.com/attachments/995485098336067675/1175274024251691058/natsuki.jpg?ex=656aa23a&is=65582d3a&hm=976a05261461d044f56910f5053f68dc8e0bc7893c43772394d4c097d5924150&', category: "Romance, Comédia", link: 'https://www.mediafire.com/file/b1dx2quc8szduem/A_Date_With_Natsuki.zip/file' },
  { id: 2, title: 'Game 2', description: 'Description for Game 2', src: 'https://cdn.discordapp.com/attachments/995485098336067675/1175239739855613992/Traduzimos_vns_para_vocE.png?ex=656a824c&is=65580d4c&hm=a3c626c8609062bb7dcb21f4cbe04947bbf3a426c78a3306557ac96a53bedcc6&', category: "Romance, Comédia", link: 'https://www.mediafire.com/file/b1dx2quc8szduem/A_Date_With_Natsuki.zip/file' },
  { id: 3, title: 'Game 3', description: 'Description for Game 3', src: 'https://cdn.discordapp.com/attachments/995485098336067675/1175239739855613992/Traduzimos_vns_para_vocE.png?ex=656a824c&is=65580d4c&hm=a3c626c8609062bb7dcb21f4cbe04947bbf3a426c78a3306557ac96a53bedcc6&', category: "Romance, Comédia", link: 'https://www.mediafire.com/file/b1dx2quc8szduem/A_Date_With_Natsuki.zip/file' },
];

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: space-around; 
  max-width: 1350px;
  margin: 0 auto; 
`;

const GameList = () => {
  return (
    <ListContainer>
      {games.map((game) => (
        <CardItem key={game.id} title={game.title} description={game.description} src={game.src} category={game.category} link={game.link} />
      ))}
    </ListContainer>
  );
};

export default GameList;
