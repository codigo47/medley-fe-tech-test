import React from 'react';
import { GenericTable } from '@/components/GenericTable';

export interface IPayout {
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
};

export interface IPayoutTableHeader {
  key: string;
  dataIndex: keyof T;
  title: string;
}

export interface IPayoutTableProps {
  columns: IPayoutTableHeader[];
  rows: IPayout[];
};

export const PayoutTable = ({ columns, rows }: IPayoutTableProps) => {
  return <GenericTable columns={columns} row={rows} />;
};