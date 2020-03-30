import styled from '@emotion/styled';
import { compose, color, layout, space, border, grid } from 'styled-system';

const Grid = styled('div')(
  { display: 'grid' },
  compose(color, layout, space, border, grid)
);

export default Grid;
