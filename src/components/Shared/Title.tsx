import styled from "@emotion/styled";

const StyledTitle = styled.h2`
  margin-bottom: 55px;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  padding-bottom: 22px;
  position: relative;

  &::after {
    content: "";
    width: 125%;
    height: 4px;
    left: 20px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: ${(props) => props.theme.border.primary};
    border-radius: 4px;
  }

  @media screen and (min-width: 786px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 35px;
    margin-bottom: 35px;
    padding-bottom: 26px;

    &::after {
      width: 250%;
    }
  }
`;

const Title = StyledTitle;

export default Title;
