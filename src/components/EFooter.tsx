import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router";
// import Container from "react-bootstrap/Container";
import EButton from "./EButton";
import { ReactComponent as Twitter } from "../assets/images/Twitter.svg";
import ethereal_Investor from "../assets/Ethereal_Investor.pdf";

interface EFooterProps {
  showContent?: boolean;
}

const EFooter: React.FC<EFooterProps> = ({ showContent = false }) => {
  const navigate = useNavigate();
  return (
    <StyledEFooter>
      <div className="container d-flex flex-column align-items-center">
        {showContent && (
          <>
            <h4 className="text-center footer-title">Partnered With Veta Fund</h4>
            <div className="container d-flex flex-row justify-content-center align-items-center mb-5 mt-2">

            </div>
            <h6 className="text-center font-weight-bold">Follow Us on Twitter </h6>
            <Twitter
              className="mt-2 cursor-pointer"
              onClick={() =>
                (window.location.href = "https://twitter.com/EtherealMarkets")
              }
            />
          </>
        )}
      </div>
    </StyledEFooter>
  );
};

export default EFooter;

const StyledEFooter = styled.footer`
  background: ${(props) => props.theme.background.secondary};
  color: ${(props) => props.theme.color.secondary};
  padding: 124px 0 35px;
  min-height: 90px;

  .footer-title {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    padding: 35px 0 40px;

    .footer-title {
      font-size: 30px;
      line-height: 36px;
      margin-bottom: 22px;
    }
  }
`;
