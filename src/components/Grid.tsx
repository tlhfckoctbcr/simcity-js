import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';
import Tile from '../models/Tile';

interface GridProps {
  gridMap: Tile[][];
}

const StyledGrid = styled.div`
  padding: 70px 0 0 40px;
  background: white;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

export default function Grid(props: GridProps) {
  const { gridMap } = props;

  return (
    <StyledGrid>
      {
        gridMap.map((gridRow, i) =>
          <StyledRow key={`row-${i}`}>
            {
              gridRow.map((gridCell: Tile, j) =>
                <Cell key={`cell-${j}`} tile={gridCell} />
              )
            }
          </StyledRow>
        )
      }
    </StyledGrid>
  )
}
