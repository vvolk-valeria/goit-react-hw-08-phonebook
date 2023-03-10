import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(146, 207, 235, 0.75);
`;

export const Name = styled.p`
  margin-right: auto;
`;

export const Btn = styled.button`
  padding: 5px 20px;
  margin-left: 10px;
  color: rgb(44 127 146);
  border-radius: 5px;
  border: none;
  background-color: rgba(150, 248, 230, 0.8);
  box-shadow: 0px 0px 5px 2px rgba(146, 207, 235, 0.75);
  cursor: pointer;
  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 2px rgb(125, 177, 201);
  }
`;
