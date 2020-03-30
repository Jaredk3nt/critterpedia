import styled from '@emotion/styled';
import {
  compose,
  color,
  layout,
  space,
  border,
  flexbox,
  position,
} from 'styled-system';

const Box = styled('div')(
  compose(color, layout, space, border, flexbox, position)
);

export default Box;
