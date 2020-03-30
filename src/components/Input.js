import styled from '@emotion/styled';
import {
  compose,
  color,
  space,
  border,
  position,
  typography,
} from 'styled-system';

const Input = styled('input')(
  {
    border: 'none',
    padding: '0rem 1rem',
    height: '2.5rem',
    lineHeight: '1.2',
    fontSize: '1rem'
  },
  compose(color, space, border, position, typography)
);

export default Input;
