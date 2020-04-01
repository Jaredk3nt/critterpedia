import styled from '@emotion/styled';
import {
  compose,
  layout,
  space,
  position,
  border
} from 'styled-system';

const Spacer = styled('span')(
  compose(layout, space, position, border)
);

export default Spacer;
