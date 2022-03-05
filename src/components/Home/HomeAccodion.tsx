import styled from "@emotion/styled";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import cn from "classnames";

import EButton from "../EButton";
import { TAccordionItem } from "../../pages/Home";
import { ReactComponent as AccordionCaret } from "../../assets/images/accordion-caret.svg";
import isa from "../../assets/images/isa-icon.png";
import rho from "../../assets/images/rho.png";
import lol from "../../assets/images/options.png";

interface HomeAccodionProps {
  accordionItems: TAccordionItem[];
}

const StyledHomeAccordion = styled.div`
  padding-bottom: 30px;
npm
  @media screen and (min-width: 768px) {
    padding-bottom: 190px;
  }

  h3.section-header {
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    padding-bottom: 22px;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 45%;
      height: 4px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 4px;
      background-color: ${(props) => props.theme.border.primary};
    }

    @media screen and (min-width: 768px) {
      font-size: 30px;
      line-height: 36px;
      margin-bottom: 70px;

      &::after {
        width: 125%;
      }
    }
  }
  h5.accordion-item-header {
    font-size: 18px;
    line-height: 22px;
  }

  .accordion-item {
    border: none;
    background-color: transparent;
  }

  .accordion-button {
    color: ${(props) => props.theme.color.disabled};
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    background: transparent;
    box-shadow: none;
    display: flex;
    align-items: center;
    padding-right: 2rem;

    &::after {
      display: none;
    }

    .caret-icon-container {
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      .svg-fill {
        fill: ${(props) => props.theme.color.primary} !important;
      }
    }

    .svg-stroke {
      stroke: ${(props) => props.theme.color.disabled};
    }
    .svg-fill {
      fill: ${(props) => props.theme.color.disabled};
    }

    &:not(.collapsed) {
      background: ${(props) => props.theme.background.transparent};
      color: ${(props) => props.theme.color.primary};

      .svg-stroke {
        stroke: ${(props) => props.theme.color.primary};
      }
      .svg-fill {
        fill: ${(props) => props.theme.color.primary};
      }
    }
  }

  .accordion-body {
    background: rgba(0, 0, 0, 0.03);
  }

  .desktop-accordion-container {
    .accordion-item {
      border: none;
    }

    .accordion-item-header {
      .accordion-button {
        background: transparent;
        border: none;
        border-radius: 4px;
        transition: all 0.3s ease-in-out;
      }

      &.active {
        .accordion-button {
          background: ${(props) => props.theme.background.transparent};
          color: ${(props) => props.theme.color.primary};

          .svg-stroke {
            stroke: ${(props) => props.theme.color.primary};
          }
          .svg-fill {
            fill: ${(props) => props.theme.color.primary};
          }
        }
      }
    }

    .accordion-body {
      background-color: transparent;
    }

    .caret-icon-container {
      right: 15px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      .svg-fill {
        fill: ${(props) => props.theme.color.primary} !important;
      }
    }
  }
`;

const HomeAccodion: React.FC<HomeAccodionProps> = ({ accordionItems }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <StyledHomeAccordion className="d-flex flex-column justify-content-center align-items-center">
      <h3 className="section-header fw-bold">Synthetic Asset Ecosystem</h3>
      <div className="container mt-3" style={{marginBottom: '200px'}}>
        <div className="row">
          <div className="col-sm d-flex flex-column justify-content-start align-items-center">
            <img src={isa} alt="isa" height={'84px'}/>
            <h2 className="mt-2 mb-2">ISA</h2>
            <p>
              The platform's semi-inflationary utility token, ISA, is used to
              mint all synthetic hedges within the protocol. During the mintage
              of any synthetic asset, ISA is 100% locked in the Treasury to earn
              additional yields at a rate congruent with the asset's price at
              the time of the mint. It has a hard cap of 120m with an initial
              supply of 25m. Emissions stand at 5 ISA per block, equating to a
              1.8-year timeline before reaching the max supply. Upon depositing
              ISA into the auto compounding contract, you will receive sISA
              which can be used as collateral for some assets in the future.
            </p>
          </div>
          <div className="col-sm d-flex flex-column justify-content-center align-items-center">
            <img src={rho} alt="rho" height={'84px'}/>
            <h2 className="mt-2 mb-2">RHO</h2>
            <p>
              Rho has been designed to be a dynamic fixed-yield product. While
              these two terms appear to contradict each other, we will explain
              more below. This model is used to bridge the gap between crypto
              and Traditional Finance through its collateral backing system and
              unique evolution metrics. Per dollar of minted Rho, the funds are
              positioned into 80% USDC, 10% ISA, 5% elTY3, and 5% eTY3. However,
              when minting Rho, the ISA used to mint the synthetic yield product
              backings is deposited into a Reserve Fund for Rho. Therefore, Rho
              is already over-collateralized by 10% worth of ISA at the time of
              mint. However, this over-collateralized portion is a synthetic
              backing at the time of mint and acts as a long-term hedge and
              growth multiplier as it is slowly released back into the Rho
              contract to begin appreciating the asset over the course of the
              variable time-locked interval of 1 year. This synthetic backing
              alone sets the fixed income portion of Rho close to 10% YoY.
              Investors looking for diversification and lower volatility will
              enjoy the benefits of Rho. Rho is also used for collateral on
              ethereal for securing short positions and option legs.
            </p>
          </div>
          <div className="col-sm d-flex flex-column justify-content-center align-items-center">
            <img src={lol} alt="options" height={'84px'}/>
            <h2 className="mt-2 mb-2">Options</h2>
            <p>
              As a team that consists of several professional investors, we
              wanted to further bring traditional finance into DeFi and vice
              versa. Through several formulas we use in our own portfolios to
              calculate option prices and volatility skew, we have applied and
              retrofitted them to encompass the utilities of our other exotic
              products. For the first time, we are removing all direct human
              influence in option pricing and assigning stringent yet
              dynamically oscillating values. Through this method - time,
              volume, and underlying volatility become the driving force of
              positional pricing. Therefore, pricing becomes more predictable,
              consistent, and less contingent on human emotions. By striping
              down option buying and selling to these core values which are
              algorithmically enforced - we increase liquidity efficiency. We
              have also developed a thorough margin schedule to allow for
              multi-leg and multi-dated positions to be established both long
              and short utilizing both calls and puts - a first for DeFi. As a
              result of this algorithmic pricing structure, we are able to
              provide options for any searchable token older than 6 weeks - not
              just our own product line - another first in any market.
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-accordion-container d-lg-none w-100">
        <Accordion defaultActiveKey="0">
          {accordionItems.map((accordionItem, index) => (
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header className="accordion-item-header">
                <accordionItem.Icon
                  className={cn("me-3", accordionItem.iconClassName || "")}
                />
                <span className="button-text">{accordionItem.headerText}</span>

                <span className="caret-icon-container position-absolute">
                  <AccordionCaret />
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <h5 className="fw-bold">{accordionItem.headerText}</h5>
                <p>{accordionItem.body}</p>
                {accordionItem.buttonText && (
                  <EButton className="d-block mx-auto" type="primary">
                    {accordionItem.buttonText}
                  </EButton>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* Desktop Accordion */}
      <div className="container desktop-accordion-container d-none d-lg-block w-100">
        <div className="row">
          <div className="col-6">
            {accordionItems.map((accordionItem, index) => (
              <Accordion.Item
                eventKey=""
                key={index}
                onClick={() => setActiveItemIndex(index)}
              >
                <Accordion.Header
                  className={cn("accordion-item-header", {
                    active: index === activeItemIndex,
                  })}
                >
                  <accordionItem.Icon
                    className={cn("me-3", accordionItem.iconClassName || "")}
                  />
                  <span className="button-text">
                    {accordionItem.headerText}
                  </span>

                  <span className="caret-icon-container position-absolute">
                    <AccordionCaret />
                  </span>
                </Accordion.Header>
              </Accordion.Item>
            ))}
          </div>
          <div className="col-6">
            <div className="accordion-body">
              <h5 className="fw-bold">
                {accordionItems[activeItemIndex].headerText}
              </h5>
              <p>{accordionItems[activeItemIndex].body}</p>
              {accordionItems[activeItemIndex].buttonText && (
                <EButton className="d-block mx-auto" type="primary">
                  {accordionItems[activeItemIndex].buttonText}
                </EButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledHomeAccordion>
  );
};

export default HomeAccodion;
