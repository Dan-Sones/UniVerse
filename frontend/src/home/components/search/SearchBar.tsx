import { TextField } from '@mui/material';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface SearchBarProps {
  onSearchIntention: VoidFunction;
}

const SearchBar = (props: SearchBarProps) => {
  const { onSearchIntention } = props;
  return (
    <SearchBarWrapper>
      <TextField
        onClick={onSearchIntention}
        id="outlined-search"
        label="Search UniVerse"
        type="search"
        fullWidth
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
