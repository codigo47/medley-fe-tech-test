import useSWR from 'swr';
import { IPayout, IPayoutMetadata } from '@/types/Payout';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface UsePayoutsProps {
  page?: number;
  limit?: number;
  searchTerm?: string;
}

interface PayoutResponse {
  data: IPayout[];
  metadata?: IPayoutMetadata;
}

export const usePayouts = ({
  page = 1,
  pageSize = 10,
  searchTerm = '',
}: UsePayoutsProps) => {
  const endpoint = searchTerm
    ? `https://theseus-staging.medley.gg/api/v1/analytics/tech-test/search?query=${encodeURIComponent(
        searchTerm
      )}&page=${page}&limit=${pageSize}`
    : `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts?page=${page}&limit=${pageSize}`;

  const { data, error, isLoading } = useSWR<PayoutResponse>(endpoint, fetcher);

  return {
    payouts: data?.data || data,
    metadata: data?.metadata || {},
    isLoading,
    error,
  };
};
