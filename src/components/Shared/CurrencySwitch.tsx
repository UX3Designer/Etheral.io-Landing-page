import styled from "@emotion/styled";
import React from "react";

const StyledCurrencySwitch = styled.div`
  width: 102px;
  height: 42px;
  border-radius: 1000px;
  background-color: ${(props) => props.theme.border.primary};
  color: ${(props) => props.theme.button.secondaryText};

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 43px;
    height: 42px;
  }

  span {
    top: 11px;
    right: 14px;
    font-size: 16px;
    line-height: 22px;
  }
`;

type TCurrencySwitchProps = {
  currencyIcon: string;
  text?: string;
};

const CurrencySwitch: React.FC<TCurrencySwitchProps> = ({
  currencyIcon,
  text = "ISA",
}) => {
  return (
    <StyledCurrencySwitch className="position-relative">
      <img src={currencyIcon} alt="Currency" />
      <span className="position-absolute">{text}</span>
    </StyledCurrencySwitch>
  );
};

export default CurrencySwitch;
