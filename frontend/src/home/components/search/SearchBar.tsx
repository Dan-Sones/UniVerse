import { TextField } from '@mui/material';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

interface SearchBarProps {
  onSearchIntention: VoidFunction;
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { onSearchIntention, searchValue, onChange } = props;
  return (
    <SearchBarWrapper>
      <TextField
        value={searchValue}
        onChange={onChange}
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
