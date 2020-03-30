import styled from '@emotion/styled';
import {
  compose,
  layout,
  space,
  border,
  position,
} from 'styled-system';

const Image = styled('img')(
  compose(layout, space, border, position)
);

export default Image;
