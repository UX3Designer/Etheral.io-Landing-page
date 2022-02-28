import React from "react";
import styled from "@emotion/styled";
import BackgroundContainer from "../components/BackgroundContainer";
import EFooter from "../components/EFooter";
import Navbar from "../components/Shared/Navbar";

import UnicornIcon from "../assets/images/unicorn.png";
import EthereumIcon from "../assets/images/ethereum.svg";
import ISAIcon from "../assets/images/isa-icon.png";
import { ReactComponent as ClockIcon } from "../assets/images/clock.svg";
import MobileBondItem from "../components/Bonds/MobileBondItem";
import BondTable from "../components/Bonds/BondTable";
import BondItemIcons from "../components/Bonds/BondItemIcons";
import BondFooterItem from "../components/Bonds/BondFooterItem";
import CurrencySwitch from "../components/Shared/CurrencySwitch";

const demoBondItem = {
  leftIcon: UnicornIcon,
  rightIcon: EthereumIcon,
  payoutIcon: ISAIcon,
  title: "FOX - ETH UNI",
  roi: "130%",
  tbv: "120%",
};

export type TBondItem = typeof demoBondItem;

const demoBondItemCount = 6;
const bondItems: TBondItem[] = Array.from({ length: demoBondItemCount }).map(
  (_) => ({ ...demoBondItem })
);

const footerItems = [
  {
    title: "Exchange your LP",
    content:
      "Exchange your available LP tokens you've made under our liquidity section for ISA tokens below the market rate bonds.",
    children: <BondItemIcons leftIcon={UnicornIcon} rightIcon={EthereumIcon} />,
    bottomText: "You Give",
  },
  {
    title: "Linear Vesting",
    content:
      "With flexible 7 and 14 day vesting periods, you are able to choose the strategy that works best for you and offers your desired APR.",
    children: <ClockIcon className="clock-icon" />,
    bottomText: "Vested over 7 days",
  },
  {
    title: "Below-market-rate ROI",
    content:
      "All positive bond discount rates will be able to receive a below market rate swap upon the maturity of their vesting period.",
    children: <CurrencySwitch currencyIcon={ISAIcon} text="7.81%" />,
    bottomText: "You Get",
  },
];

const StyledBonds = styled.section`
  .subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;

    @media screen and (min-width: 786px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 0;
      margin-top: 16px;
    }
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    margin-bottom: 55px;
    padding-bottom: 22px;
    position: relative;

    &::after {
      content: "";
      width: 250%;
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
      margin-top: 15px;
      margin-bottom: 65px;
      padding-bottom: 26px;

      &::after {
        width: 250%;
      }
    }
  }

  .desktop-bond-container {
    margin-bottom: 90px;
  }

  .desktop-bond-footer-container {
    margin-bottom: 130px;
  }

  .clock-icon {
    .svg-fill {
      fill: ${(props) => props.theme.color.primary};
    }
  }
`;

const Bonds: React.FC = () => {
  return (
    <StyledBonds>
      <BackgroundContainer backgroundPosition="bottom">
        <Navbar title="Bonds" />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="subtitle">Total Liqudity Bonded </h2>
          <h2 className="title">$10,144,856</h2>
        </div>

        <div className="container pb-5">
          <div className="mobile-bond-container pb-5 d-md-none">
            <p className="mb-0">
              <b>Bonds</b>
            </p>
            {bondItems.map((bondItem, index) => (
              <MobileBondItem key={index} bondItem={bondItem} />
            ))}
          </div>

          <div className="desktop-bond-container d-none d-md-block">
            <BondTable bondItems={bondItems} />
          </div>

          <div className="desktop-bond-footer-container d-none d-lg-block mt-4">
            <div className="row">
              {footerItems.map((footerItem, index) => (
                <div className="col" key={index}>
                  <BondFooterItem {...footerItem}></BondFooterItem>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundContainer>
      <EFooter />
    </StyledBonds>
  );
};

export default Bonds;
