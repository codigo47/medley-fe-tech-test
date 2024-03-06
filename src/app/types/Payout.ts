export interface IPayout {
  key: string;
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
};

export interface IPayoutMetadata {
  page: number;
  limit: number;
  totalCount: number;
};