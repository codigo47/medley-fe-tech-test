import React from "react";
import {
  TableCell,
  TableEmptyCell,
  TableHeaderCell,
  Table,
  TableHeader,
  TableBody,
  TableRow,
} from "./styles";
import Badge from "../Badge";
import { getShortenDateString } from "../../utils/helpers";

export interface ITableHeader {
  key: string;
  dataIndex: keyof T;
  title: string;
}

export interface ITableProps<T> {
  columns: ITableHeader[];
  rows: T[];
};

export const GenericTable = <T,>({ columns, rows }: ITableProps<T>) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns && columns.map(column => (
            <TableHeaderCell key={column.key}>{column.title}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows && rows.map((row) => (
          <TableRow key={row.id}>
            {columns && columns.map((column) => (
              <TableCell key={column.key}>
                {row[column.dataIndex]}
              </TableCell>
            ))}
          </TableRow>
        ))}
        {!rows || rows.length === 0 && <TableEmptyCell colSpan={4}>No Data</TableEmptyCell>}
      </TableBody>
    </Table>
  );
};