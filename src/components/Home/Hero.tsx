import styled from "@emotion/styled";
import React from "react";
import EButton from "../EButton";
import EButtonOutlined from "../EButtonOtlined";
import Lightpaper from "../../assets/lightpaper.pdf";

const StyledHero = styled.header`
  padding-top: 35px;
  padding-bottom: 100px;

  @media screen and (min-width: 786px) {
    padding-top: 130px;
    padding-bottom: 160px;

    .title {
      line-height: 50px;
    }
  }

  .docs-link {
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.color.primary};
    text-decoration: underline;
  }
`;

const Hero: React.FC = () => {
  return (
    <StyledHero className="container d-flex flex-column align-items-center">
      <h2 className="text-center title mb-5">
        <span className="fw-bold">ethere.al</span> | bridge the gap between
        traditional finance and crypto using our cross-chain platform for
        minting synthetic hedges for world volatility events with an
        over-collateralized fusion Treasury system
      </h2>

      <div
        className="container d-flex align-items-center justify-content-evenly"
        style={{ width: "30%" }}
      >
        <EButton
          type="primary"
          onClick={() =>
            (window.location.href =
              "https://ethereal-protocol.gitbook.io/ethere.al-protocol/")
          }
        >
          Read Docs
        </EButton>

        <EButtonOutlined type="primary" onClick={() => window.open(Lightpaper)}>
          Lightpaper
        </EButtonOutlined>
      </div>
    </StyledHero>
  );
};

export default Hero;
