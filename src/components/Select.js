import styled from '@emotion/styled';
import {
  compose,
  color,
  space,
  border,
  layout,
  position,
  typography,
} from 'styled-system';

const Select = styled('select')(
  {
    height: '2.5em',
  },
  compose(color, space, border, position, typography, layout)
);

export default Select;
