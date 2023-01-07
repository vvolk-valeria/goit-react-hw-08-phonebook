import styled from '@emotion/styled';

export const Btn = styled.button`
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

  :hover {
    color: rgb(179, 237, 250);
    background-color: rgb(69, 243, 185);
    box-shadow: 0px 0px 5px 5px rgb(125, 177, 201);
  }

  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Title = styled.p`
  text-align: center;
  color: #0b118f;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  margin-right: 15px;
`;
