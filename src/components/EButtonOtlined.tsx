import styled from "@emotion/styled";
import React from "react";
import cn from "classnames";

const StyledButton = styled.button`
  border: 1px solid #6A7A8B;
  border-radius: 1000px;
  padding: 10px 35px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;

  &:hover {
    opacity: 0.8
  }

  &.primary {
    background: transparent};
    color: ${(props) => props.theme.button.primaryBackground};

    &.outline {
      /* background-color: transparent; */
      color: ${(props) => props.theme.button.primaryBackground};
    }
  }

  &.secondary {
    background: ${(props) => props.theme.button.secondaryBackground};
    color: ${(props) => props.theme.button.secondaryText};

    &.outline {
      /* background-color: transparent; */
      color: ${(props) => props.theme.button.secondaryBackground};
    }
  }
`;

interface EButtonProps {
  type: "primary" | "secondary";
  outline?: boolean;
  as?: React.ElementType;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const EButtonOutlined: React.FC<EButtonProps> = ({
  as,
  outline = false,
  type = "primary",
  children,
  className = "",
  onClick,
  disabled
}) => {
  return (
    <StyledButton
      onClick={onClick}
      as={as}
      className={cn(type, className, { outline })}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default EButtonOutlined;
