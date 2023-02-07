import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: orange;
  &:hover,
  &:focus,
  &.active {
    color: blue;
  }
`;
