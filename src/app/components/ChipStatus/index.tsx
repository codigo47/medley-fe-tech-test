import React from 'react';
import styled, { css } from 'styled-components';

type TChipStatus = 'pending' | 'completed';

interface ChipProps {
  status: TChipStatus;
}

const statusStyles = {
  pending: css`
    background: #6F767E66;
  `,
  completed: css`
    background: #60CA57;
  `,
};

const StyledChip = styled.div<{ status: TChipStatus }>`
  color: #1A1D1F;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  padding: 2px 8px 2px 8px;
  border-radius: 6px;
  display: inline-block;
  ${(props) => statusStyles[props.status]}
`;

const ChipStatus: React.FC<ChipProps> = ({ status, children }) => {
  return <StyledChip status={status}>{children}</StyledChip>;
};

export default ChipStatus;