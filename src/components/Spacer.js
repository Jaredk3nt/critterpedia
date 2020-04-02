import styled from '@emotion/styled';
import {
  color,
  compose,
  layout,
  space,
  position,
  border
} from 'styled-system';

const Spacer = styled('span')(
  compose(color, layout, space, position, border)
);

export default Spacer;
