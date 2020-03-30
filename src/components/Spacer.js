import styled from '@emotion/styled';
import {
  compose,
  layout,
  space,
  position,
} from 'styled-system';

const Spacer = styled('span')(
  compose(layout, space, position)
);

export default Spacer;
