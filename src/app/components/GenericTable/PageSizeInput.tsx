import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const TablePaginationPageSizeInput = styled.input`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 50px;
  text-align: right;
`;

interface PageSizeInputProps {
  pageSize: number;
  onPageSizeChanged: (pageSize: number) => void;
}

export const PageSizeInput = ({
  pageSize,
  onPageSizeChanged,
}: PageSizeInputProps) => {
  const [newPageSize, setNewPageSize] = useState(pageSize);

  const handleChange = useCallback(() => {
    onPageSizeChanged(newPageSize);
  }, [newPageSize, onPageSizeChanged]);

  return (
    <TablePaginationPageSizeInput
      type="text"
      value={newPageSize}
      onChange={(e) => setNewPageSize(e.target.value)}
      onKeyUp={handleChange}
    />
  );
};

