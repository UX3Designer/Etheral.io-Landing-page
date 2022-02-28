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
    title: "Synthetic World event Hedges",
    content:
      "We will add additional use cases for ISA through synthetic world event hedges scheduled for Q1, 2022. When governance is implemented in Q4, 2022, investors can vote these events in, creating specific hedges for those events.",
  },
  {
    Icon: RoadmapIcon2,
    title: "Dynamic Treasury Backed Stable Coin",
    content:
      "Once the Treasury has been established and the external fund begins returning profit to the Treasury, we will implement a platform-specific stable coin to provide additional use cases for ISA. This stable coin will also allow custom smart contracts to be created to facilitate real-world transactions such as real estate acquisitions and rental management. Our goal is to have this model implemented in the second quarter of 2022, but it will largely depend on the strength of our Treasury by then as the stable itself will have dynamic yield backing. If proven successful, the stable backing will provide additional yields to the Treasury through lending on other platforms or provide additional asset-type deposits into the Treasury.",
  },
  {
    Icon: RoadmapIcon3,
    title: "NFT Holder Pools and Hedges",
    content:
      "In an ever greater attempt to fuse traditional investment vehicles with crypto, we will be introducing NFT holder-specific farms in 2022. These NFTs will immortalize tangible works of rare art available to purchase using ISA and unlock additional pools, which will help hedge any possible depreciation risks associated with art investing. In the future, other modern-day artists could be added to the platform to ensure a continual selection of works. Q3, 2022.",
  },
  {
    Icon: RoadmapIcon4,
    title: "Lending Partnership with Thorus",
    content:
      "Through a partnership with Thorus (formally Wault Finance), additional utilities will be added to ISA in the form of dynamic interest rates upon lending any synthetic asset from our platform.",
  },
  {
    Icon: RoadmapIcon1,
    title: "Governance",
    content:
      "Governance will be added, with input on world hedges, NFT artists, and potential future partnerships. Locked voting pools will last 7-10 days and be implemented in Q4, 2022, with votes weighted per the total unit count held in your wallet. We will establish a separate Governance Committee to collect and sort proposals.",
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
