"use client"
import Image from "next/image";
import Main from "./components/Main";
import { PayoutTable, IPayout } from "./components/PayoutsTable";

const columns = [
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Status',
    key: 'status',
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

const rows: IPayout[] = [
  {
    dateAndTime: '2022-01-05',
    status: 'accepted',
    value: '20.23',
    username: 'pepe',
  },
];

export default function Home() {
  return (
    <Main>
      <PayoutTable columns={columns} rows={rows}></PayoutTable>
    </Main>
  );
}
