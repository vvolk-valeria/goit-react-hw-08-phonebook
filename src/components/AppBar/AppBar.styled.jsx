import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(29 107 125);
  box-shadow: 0px 0px 10px 5px rgba(146, 207, 235, 0.75);
  padding: 15px 20px;
  text-align: center;
  margin-bottom: 25px;
`;

export const LinkItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  color: rgb(29, 107, 125);
  border-radius: 5px;
  border: none;
  background-color: rgba(120, 226, 207, 0.8);
  box-shadow: 0px 0px 5px 5px rgba(146, 207, 235, 0.75);
  &.active {
    color: white;
    background-color: rgb(96, 98, 226);
    box-shadow: 0px 0px 5px 5px rgb(77, 125, 148);
  }
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 5px rgb(125, 177, 201);
  }

  :not(:last-child) {
    margin-right: 15px;
  }
`;
