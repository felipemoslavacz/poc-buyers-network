import styled from "styled-components";

export const ProfileItemContainer = styled.div`
  color: #585858;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  margin-bottom: 30px;
  padding: 10px;
  transition: background 0.3s;

  &:hover,
  &.active {
    background: rgba(89, 195, 120, 0.2);
  }

  &.active {
    svg {
      fill: #59c378;
    }
  }

  h3 {
    font-size: 14px;
    margin: 0 0 5px 0;
  }

  p {
    margin: 0 0 5px 0;
  }

  button {
    background: none;
    color: #337cff;
    cursor: pointer;
    border: none;
    font-size: 11px;
    margin: 0;
    padding: 0;
  }

  svg {
    width: 10px;
    margin-right: 5px;
    fill: #565656;
  }
`;

export const Image = styled.div`
  background-color: #e7e7e7;
  border-radius: 5px;
  margin-right: 20px;
  height: 109px;
  width: 140px;
`;
