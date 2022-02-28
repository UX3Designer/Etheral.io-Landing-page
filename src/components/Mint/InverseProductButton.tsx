import cn from "classnames";
import styled from "@emotion/styled";
import React from "react";

interface InverseProductButtonProps {
  firstIcon: string;
  secondIcon: string;
  firstText: string;
  secondText: string;
  selected: "eETH" | "eBTC" | null;
  onChange?: (newValue: "eETH" | "eBTC") => void;
}

const StyledInverseProductButton = styled.div`
  width: 222px;
  height: 42px;
  position: relative;
  cursor: pointer;

  .product-btn {
    position: absolute;
    top: 0;
    background-color: ${({ theme }) => theme.border.primary};
    color: ${({ theme }) => theme.color.disabled};
    font-size: 20px;
    line-height: 24px;
    border-radius: 1000px;
    height: 42px;
    display: flex;
    align-items: center;
    width: 111px;
    transition: all 0.3s ease-in-out;

    &.active {
      background-color: ${({ theme }) =>
        theme.isDark ? "#6a7a8b" : theme.color.primary};
      color: ${({ theme }) =>
        theme.isDark ? theme.color.disabled : theme.border.primary};
      .img-container {
        opacity: 1;
      }
    }

    .img-container {
      position: absolute;
      border-radius: 50%;
      top: 0;
      right: 0;
      width: 42px;
      height: 42px;
      background-size: cover;
      background-position: center;
      opacity: 0.6;
      transition: all 0.3s ease-in-out;
    }

    &:first-of-type {
      left: 0;
      z-index: 1;
      padding-left: 15px;
    }
    &:last-of-type {
      right: 0;
      padding-left: 54px;
      width: 153px;
    }
  }
`;

const InverseProductButton: React.FC<InverseProductButtonProps> = ({
  selected,
  firstIcon,
  firstText,
  secondIcon,
  secondText,
  onChange = (_newValue) => {},
}) => {
  return (
    <StyledInverseProductButton>
      <div
        className={cn("product-btn", { active: selected === "eETH" })}
        onClick={() => onChange("eETH")}
      >
        <span>{firstText}</span>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${firstIcon})` }}
        ></div>
      </div>
      <div
        className={cn("product-btn", { active: selected === "eBTC" })}
        onClick={() => onChange("eBTC")}
      >
        <span>{secondText}</span>
        <div
          className="img-container"
          style={{ backgroundImage: `url(${secondIcon})` }}
        ></div>
      </div>
    </StyledInverseProductButton>
  );
};

export default InverseProductButton;
