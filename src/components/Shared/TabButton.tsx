import styled from "@emotion/styled";

const StyledTabButton = styled.button`
  height: 42px;
  width: 106px;
  border-radius: 1000px;
  text-align: center;
  background-color: ${(props) => props.theme.border.primary};
  color: ${(props) => props.theme.color.primary};
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: ${(props) => props.theme.background.tertiary};
    color: ${(props) => props.theme.background.primary};
    z-index: 1;
  }
`;

export default StyledTabButton;
