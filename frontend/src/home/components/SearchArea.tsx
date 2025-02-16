import styled from 'styled-components';
import SearchBar from './search/SearchBar';
import BackButton from './search/BackButton';
import { useState } from 'react';
import SearchResultRow from './search/SearchResultRow';

const SearchAreaWrapper = styled.div`
  padding-top: 21px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const SearchAreaHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
`;

interface SearchAreaProps {
  onBackButtonPress: VoidFunction;
  onSearchIntention: VoidFunction;
  onResultSelected: (data: SearchResult) => void;
  activeSearch: boolean;
}

export type SearchResult = {
  profilePictureUrl: string;
  username: string;
};

const SearchArea = (props: SearchAreaProps) => {
  const {
    onBackButtonPress,
    activeSearch,
    onSearchIntention,
    onResultSelected,
  } = props;

  const [searchValue, setSearchValue] = useState<string>('');

  // Some API call will populate state
  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([
    {
      profilePictureUrl: 'asd',
      username: 'Jeff',
    },
    {
      profilePictureUrl: 'asd',
      username: 'Amy',
    },
  ]);

  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onCancelSearch = () => {
    onBackButtonPress();
    setSearchValue('');
  };

  return (
    <SearchAreaWrapper>
      <SearchAreaHeader>
        {activeSearch && <BackButton onClick={onCancelSearch} />}
        <SearchBar
          onSearchIntention={onSearchIntention}
          onChange={onSearchInput}
          searchValue={searchValue}
        />
      </SearchAreaHeader>
      {activeSearch && (
        <SearchResultsWrapper>
          {searchResults.map((result) => {
            return (
              <SearchResultRow
                data={result}
                onClick={onResultSelected}
              ></SearchResultRow>
            );
          })}
        </SearchResultsWrapper>
      )}
    </SearchAreaWrapper>
  );
};

export default SearchArea;
