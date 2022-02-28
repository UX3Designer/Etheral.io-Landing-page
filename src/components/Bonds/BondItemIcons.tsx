import styled from "@emotion/styled";
import cn from "classnames";
import React from "react";

interface BondItemIconsProps {
  leftIcon: string;
  rightIcon: string;
  className?: string;
}

const StyledBondItemIcons = styled.div`
  width: 80px;
  height: 44px;
  img {
    top: 0;
    width: 44px;
    height: 44px;
  }
  .left-icon {
    left: 0;
  }
  .right-icon {
    right: 0;
  }
`;

const BondItemIcons: React.FC<BondItemIconsProps> = ({
  leftIcon,
  rightIcon,
  className = "",
}) => {
  return (
    <StyledBondItemIcons className={cn("position-relative", className)}>
      <img
        src={leftIcon}
        alt="Left Icon"
        className="position-absolute left-icon"
      />
      <img
        src={rightIcon}
        alt="Right Icon"
        className="position-absolute right-icon"
      />
    </StyledBondItemIcons>
  );
};

export default BondItemIcons;
