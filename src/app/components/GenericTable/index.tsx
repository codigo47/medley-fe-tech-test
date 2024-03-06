import React, { useState } from 'react';
import {
  TableTitleContainer,
  TableTitleTag,
  TableTitleText,
  TableCell,
  TableEmptyCell,
  TableHeaderCell,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TablePagination,
  TablePaginationButton,
  TablePaginationIndicator,
} from './styles';
import { PageSizeInput } from './PageSizeInput';

const TableTitle = ({ title }) => (
  <TableTitleContainer>
    <TableTitleTag></TableTitleTag>
    <TableTitleText>{title}</TableTitleText>
  </TableTitleContainer>
);

export interface ITableHeader<T> {
  key: string;
  title: string;
  render?: (row: T) => JSX.Element | string;
}

export interface ITableProps<T> {
  title: string;
  columns: ITableHeader<T>[];
  rows: T[];
  pageSize?: number;
  onPageSizeChanged: (pageSize: number) => void;
}

export const GenericTable = <T,>({
  title,
  columns,
  rows,
  pageSize,
  onPageSizeChanged,
}: ITableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(rows?.length / pageSize);

  const handlePreviousClick = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const currentRows = rows?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <TableTitle title={title} />
      <Table>
        <TableHeader>
          <TableRow>
            {columns &&
              columns.map((column) => (
                <TableHeaderCell key={column.key}>
                  {column.title}
                </TableHeaderCell>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows &&
            currentRows.map((row) => (
              <TableRow key={row.key}>
                {columns &&
                  columns.map((column) => (
                    <TableCell key={`${row.key}-${column.key}`}>
                      {!column.render ? row[column.key] : column.render(row)}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          {!currentRows ||
            (currentRows.length === 0 && (
              <TableEmptyCell colSpan={4}>No Data</TableEmptyCell>
            ))}
        </TableBody>
      </Table>
      <TablePagination>
        <TablePaginationButton
          onClick={handlePreviousClick}
          disabled={currentPage === 1}
        >
          Previous
        </TablePaginationButton>
        <TablePaginationIndicator>
          Page {currentPage} of {totalPages}
        </TablePaginationIndicator>
        <TablePaginationButton
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          Next
        </TablePaginationButton>
      </TablePagination>
      <TablePagination>
        <PageSizeInput
          pageSize={pageSize}
          onPageSizeChanged={(newPageSize) => onPageSizeChanged(newPageSize)}
        />
      </TablePagination>
    </>
  );
};
