import React from 'react';
import { GenericTable, ITableProps } from '@/components/GenericTable';
import { IPayout } from '@/types/IPayout';

export interface IPayoutTableProps extends ITableProps<IPayout> {}

export const PayoutTable = ({
  title,
  pageSize,
  columns,
  rows,
  onPageSizeChanged
}: IPayoutTableProps) => {
  return (
    <GenericTable
      title={title}
      columns={columns}
      rows={rows}
      pageSize={pageSize}
      onPageSizeChanged={onPageSizeChanged}
    />
  );
};
