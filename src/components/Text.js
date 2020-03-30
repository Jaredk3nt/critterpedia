import styled from '@emotion/styled';
import { compose, color, space, border, position, typography } from 'styled-system';

const Text = styled('p')(
  { margin: '0px' },
  compose(color, space, border, typography, position)
);

export default Text;
