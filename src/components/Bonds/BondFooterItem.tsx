import styled from "@emotion/styled";
import React from "react";

const StyledBondFooterItem = styled.div`
  background-color: ${(props) => props.theme.background.transparent};
  padding: 24px;
  border-radius: 8px;

  .heading {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }

  .content {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
`;

interface BondFooterItemProps {
  title: string;
  content: string;
  bottomText: string;
}

const BondFooterItem: React.FC<BondFooterItemProps> = ({
  title,
  content,
  bottomText,
  children,
}) => {
  return (
    <StyledBondFooterItem className="d-flex flex-column align-items-center">
      <h6 className="heading text-center">{title}</h6>
      <p className="content text-center">{content}</p>
      {children}
      <p className="pt-2">{bottomText}</p>
    </StyledBondFooterItem>
  );
};

export default BondFooterItem;
