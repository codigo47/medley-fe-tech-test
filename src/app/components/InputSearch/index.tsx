import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

interface InputSearchProps {
  searchTerm: string;
  onSearchTerm: (searchTerm: string) => void;
}

const SearchInput = styled.input`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
`;

export const InputSearch = ({
  searchTerm,
  onSearchTerm,
}: InputSearchProps) => {
  const [newSearchTerm, setNewSearchTerm] = useState(searchTerm);

  const handleSearch = useCallback(() => {
    onSearchTerm(newSearchTerm);
  }, [newSearchTerm, onSearchTerm]);

  return (
    <SearchInput
      type="text"
      value={newSearchTerm}
      onChange={(e) => setNewSearchTerm(e.target.value)}
      onKeyUp={handleSearch}
      placeholder="Type to search by Username..."
    />
  );
};
