import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getIcon } from "@data/icons";
import Icon from "@components/Icon";
import { RootState } from "@state/store";
import {
  setSearchTerm,
  setSearchResults,
  moveToNextResult,
  moveToPreviousResult,
  clearSearch,
} from "@state/messages/search";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: var(--color-background-secondary);
  box-shadow: 0 0 0.625rem 0 var(--color-default-shadow);
  &:focus-within {
    border: 1px solid var(--color-search-border);
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: var(--color-text);
  flex: 1;
  font-size: 14px;
  margin-left: 1rem;
  width: 100%;
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-secondary);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuggestionButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResultCounter = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { searchTerm, searchResults, currentResultIndex } = useSelector(

    (state: RootState) => state.search

  );
  const { messages } = useSelector((state: RootState) => state.messages);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const performSearch = (term: string) => {
    if (!term) {
      dispatch(setSearchResults([]));
      setIsSearchLoading(false);
      return;
    }

    const results = messages.reduce((acc, message) => {
      const lowerCaseTerm = term.toLowerCase();
      const lowerCaseContent = message.content.toLowerCase();

      if (lowerCaseContent.includes(lowerCaseTerm)) {
        const matchIndices = findAllMatchIndices(message.content, term);
        matchIndices.forEach((highlightIndex) => {
          acc.push({
            messageId: message.id,
            highlightIndex,
          });
        });
      }

      return acc;
    }, []);

    dispatch(setSearchTerm(term));
    dispatch(setSearchResults(results));
    setIsSearchLoading(false);
  };

  const findAllMatchIndices = (text: string, term: string) => {
    const indices = [];
    let index = text.toLowerCase().indexOf(term.toLowerCase());
    while (index !== -1) {
      indices.push(index);
      index = text.toLowerCase().indexOf(term.toLowerCase(), index + 1);
    }
    return indices;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchTerm);
    }, 100);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
    setIsSearchLoading(true);
  };

  const handleClose = () => {
    dispatch(clearSearch());
    onClose();
  };

  return (
    <SearchContainer>
      <Icon>
        {isSearchLoading ? getIcon("CircularProgress") : getIcon("Search")}
      </Icon>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ResultCounter>
        {searchResults.length > 0
          ? `${currentResultIndex + 1} of ${searchResults.length}`
          : searchTerm.length > 0
            ? "0 results"
            : ""}
      </ResultCounter>
      <SuggestionButtons>
        <IconButton
          onClick={() => dispatch(moveToPreviousResult())}
          disabled={searchResults.length === 0}
        >
          {getIcon("KeyboardArrowUp")}
        </IconButton>
        <IconButton
          onClick={() => dispatch(moveToNextResult())}
          disabled={searchResults.length === 0}
        >
          {getIcon("KeyboardArrowDown")}
        </IconButton>
      </SuggestionButtons>
      <IconButton onClick={handleClose}>{getIcon("Close")}</IconButton>
    </SearchContainer>
  );
};

export default SearchBar;
