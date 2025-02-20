import styled from 'styled-components';
import SearchBar from './search/SearchBar';
import BackButton from './search/BackButton';
import { useState } from 'react';
import SearchResultRow from './search/SearchResultRow';
import { useQuery } from '@tanstack/react-query';
import ChatQueryMethods from '../../api/queries/chatQueries';
import { useDebounce } from 'use-debounce';
import { CircularProgress } from '@mui/material';
import { SearchUser } from '../models/Chat';

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
  onResultSelected: (data: SearchUser) => void;
  activeSearch: boolean;
}
const SEARCH_QUERY_KEY = 'SEARCH_QUERY_KEY';

const SearchArea = (props: SearchAreaProps) => {
  const {
    onBackButtonPress,
    activeSearch,
    onSearchIntention,
    onResultSelected,
  } = props;

  const [searchValue, setSearchValue] = useState<string>('');

  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const { data: searchResults, isPending } = useQuery({
    queryKey: [SEARCH_QUERY_KEY, debouncedSearchValue],
    queryFn: () => ChatQueryMethods.searchUser(searchValue),
    enabled: !!debouncedSearchValue,
  });

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
          {isPending && <CircularProgress />}

          {!isPending &&
            searchResults &&
            searchResults.map((result: SearchUser) => {
              return (
                <SearchResultRow
                  data={result}
                  onClick={onResultSelected}
                  key={result.username}
                ></SearchResultRow>
              );
            })}
        </SearchResultsWrapper>
      )}
    </SearchAreaWrapper>
  );
};

export default SearchArea;
