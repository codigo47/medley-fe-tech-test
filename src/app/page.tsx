'use client';
import { useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

import PageTitle from '@/components/PageTitle';
import Main from '@/components/Main';
import { PayoutTable, IPayout } from '@/components/PayoutsTable';
import { ITableHeader } from '@/components/GenericTable';
import ChipStatus from '@/components/ChipStatus';
import { InputSearch } from '@/components/InputSearch';

import { usePayouts } from './hooks/usePayouts';

const columns: ITableHeader<IPayout> = [
  {
    title: 'Date & Time',
    key: 'dateAndTime',
    render: (row) => format(row.dateAndTime, 'E, MMM dd, hh:dd')
  },
  {
    title: 'Status',
    key: 'status',
    render: (row) => (
      <ChipStatus status={row.status.toLowerCase()}>{row.status}</ChipStatus>
    ),
  },
  {
    title: 'Value',
    key: 'value',
  },
  {
    title: 'Username',
    key: 'username',
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<IPayout[]>('');
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const { payouts, metadata, isLoading, error } = usePayouts({ searchTerm });

  if (error) return <div>Error loading payouts.</div>;

  return (
    <Main>
      <PageTitle>Payouts</PageTitle>

      <InputSearch<IPayout>
        searchTerm={searchTerm}
        onSearchTerm={setSearchTerm}
      />

      <PayoutTable
        title="Payout History"
        columns={columns}
        rows={payouts}
        pageSize={currentPageSize || 10}
        onPageSizeChanged={(newPageSize) => setCurrentPageSize(newPageSize)}
      ></PayoutTable>
    </Main>
  );
}
