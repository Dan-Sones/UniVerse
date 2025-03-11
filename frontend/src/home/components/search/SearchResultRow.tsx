import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { ChatRecepient } from '../../models/Chat';

const SearchResultRowWrapper = styled.div<{ hover?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  border-radius: 10px;
  // I know this is a weird way to do it, but :hover isn't working
  background-color: ${(p) => (p.hover ? 'rgba(236, 236, 236, 0.75)' : '')};
  cursor: ${(p) => (p.hover ? 'pointer' : '')};
`;

interface SearchResultProps {
  data: ChatRecepient;
  onClick: (result: ChatRecepient) => void;
}

const SearchResultRow = (props: SearchResultProps) => {
  const { data, onClick } = props;
  const [hover, setHover] = useState(false);
  return (
    <SearchResultRowWrapper
      hover={hover}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => onClick(data)}
    >
      <Avatar
        sx={{
          marginLeft: '10px', // Keeps space from the left side
          height: '36px',
          width: '36px',
        }}
        alt={data.username}
        src={
          'https://pub-1de51ae1e68144d78f7c582e1dda3ab1.r2.dev/clh8n0i2200wsmi08eyobfu35/7ee08a5b-8158-464b-b5da-d183e0e64831.webp'
        }
      />
      <p>{data.username}</p>
    </SearchResultRowWrapper>
  );
};

export default SearchResultRow;
