import styled from "@emotion/styled";
import React from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import EFooter from "../components/EFooter";
import Navbar from "../components/Shared/Navbar";

import { ReactComponent as RoadmapIcon1 } from "../assets/images/roadmap-icons/item1.svg";
import { ReactComponent as RoadmapIcon2 } from "../assets/images/roadmap-icons/item2.svg";
import { ReactComponent as RoadmapIcon3 } from "../assets/images/roadmap-icons/item3.svg";
import { ReactComponent as RoadmapIcon4 } from "../assets/images/roadmap-icons/item4.svg";
import RoadmapList from "../components/Roadmap/RoadmapList";
import Title from "../components/Shared/Title";

export type TRoadmapItem = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  content: string;
};

const roadmapItems: TRoadmapItem[] = [
  {
    Icon: RoadmapIcon1,
    title: "Additional Asset Mints",
    content:
      "We are looking into creating additional asset types that further increase the capabilities of portfolios built using ethere.al. New large cap derivative products are under review, along with additional sEconomies, and additional volatility trading tools. Furthermore, we are examining areas to insure physical assets through our platform using NFTs which will allow for yield generation on off chain assets.",
  },
  {
    Icon: RoadmapIcon2,
    title: "Deep Option Liquidity",
    content:
      "We will already be the first to bring to market a fully functional algorithmic option chain. We will also be the first to allow for on demand chain generation. While initially we are optimizing peer-to-peer liquidity, we are developing multi-reinforced “oceans” that will cycle liquidity through a portion of the treasury to allow for one sided fills - which will be another first of its kind. This basket type asset pool will allow for sustainable option chain growth - even for traditionally lower liquidity tokens.",
  },
  {
    Icon: RoadmapIcon3,
    title: "NFT Holder Pools and Hedges",
    content:
      "In an ever greater attempt to fuse traditional investment vehicles with crypto, we will be introducing NFT holder-specific farms in 2022. These NFTs will immortalize tangible works of rare art available to purchase using ISA and unlock additional pools, which will help hedge any possible depreciation risks associated with art investing. In the future, other modern-day artists could be added to the platform to ensure a continual selection of works. Q3, 2022.",
  },
  {
    Icon: RoadmapIcon4,
    title: "Tokenized Algorithms",
    content:
      "We have a diverse portfolio of deeply trained algorithms we created that are at the core of our platform. As we being to reach maturity, we are researching the introduction of a designated hub which opens up these systems to token holders where they can run their own simulations, extrapolations, and forecasts to optimize a particular portfolio they are building. This will allow for broader optimization across the entire ecosystem which will lead to more volume as well as another source of revenue for platform.",
  },
];

const StyledRoadmap = styled.section`
  .title {
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
      margin-bottom: 65px;
      padding-bottom: 26px;

      &::after {
        width: 250%;
      }
    }
  }
`;

const Roadmap: React.FC = () => {
  return (
    <StyledRoadmap>
      <BackgroundContainer backgroundPosition="bottom">
        <Navbar title="Roadmap" />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="title d-lg-none">Synthetic Asset Ecosystem</h2>
          <Title className="title d-none d-lg-block">Roadmap</Title>
        </div>

        <div className="container">
          <RoadmapList roadmapItems={roadmapItems} />
        </div>
      </BackgroundContainer>
      <EFooter />
    </StyledRoadmap>
  );
};

export default Roadmap;
