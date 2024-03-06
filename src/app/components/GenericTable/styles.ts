import styled from 'styled-components';

export const TableTitleText = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  width: 138px;
  color: #1a1d1f;
`;

export const TableTitleTag = styled.div`
  width: 16px;
  height: 32px;
  border-radius: 4px;
  background: #999dff;
  margin-right: 16px;
  margin-bottom: 18px;
`;

export const TableTitleContainer = styled.div`
  display: flex;
  align-items: left;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #6F767E;
`;

export const TableBody = styled.tbody`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #6F767E;

  tr {
    &:nth-child(odd) {
      background-color: #F4F4F480;
    }
    &:nth-child(even) {
      background-color: #FFF;
    }
  }
`;

export const TableRow = styled.tr``;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 16px 24px 16px 24px;
`;

export const TableCell = styled.td`
  padding: 16px 24px 16px 24px;
`;

export const TableEmptyCell = styled(TableCell)``;

export const TablePagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const TablePaginationButton = styled.button`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 16px 4px 16px;
  background-color: #F4F4F4;
  border-radius: 6px;
`;

export const TablePaginationIndicator = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 16px 4px 16px;
`;
