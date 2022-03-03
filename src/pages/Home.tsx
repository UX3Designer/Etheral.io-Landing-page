import styled from "@emotion/styled";
import React from "react";
import EFooter from "../components/EFooter";
import Hero from "../components/Home/Hero";
import BackgroundContainer from "../components/BackgroundContainer";
import Navbar from "../components/Shared/Navbar";

import { ReactComponent as AccordionIcon1 } from "../assets/images/accordion-icons/item1.svg";
import { ReactComponent as AccordionIcon2 } from "../assets/images/accordion-icons/item2.svg";
import { ReactComponent as AccordionIcon3 } from "../assets/images/accordion-icons/item3.svg";
import { ReactComponent as AccordionIcon4 } from "../assets/images/accordion-icons/item4.svg";
import { ReactComponent as AccordionIcon5 } from "../assets/images/accordion-icons/Notraditional.svg";
import { ReactComponent as AccordionIcon7 } from "../assets/images/accordion-icons/fi_shuffle.svg";
import { ReactComponent as AccordionIcon8 } from "../assets/images/accordion-icons/mgsm.svg";
import { ReactComponent as AccordionIcon9 } from "../assets/images/accordion-icons/usrp.svg";
import HomeAccodion from "../components/Home/HomeAccodion";

const StyledHome = styled.section``;

export type TAccordionItem = {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  headerText: string;
  body: string;
  buttonText: string;
  iconClassName?: string;
};

const accordionItems: TAccordionItem[] = [
  {
    Icon: AccordionIcon7,
    headerText: "sEconomies",
    body: `Taking the same principle workings behind eTY and elTY products, you can mint synthetic and short 
    synthetic economies. You no longer need to position an investment on a single or collective series of events 
    through the use of these products. Instead, you can invest through a thesis of economic growth or regression - 
    rather than the influences of said growth/regression on singular or basket-type assets.

    As Rho evolves, synthetic economies will play a role in its growth through additional fusion backings. 
    We have chosen the following initial economies to represent a dynamic range of stability and growth characteristics.
    `,
    buttonText: "",
  },
  {
    Icon: AccordionIcon8,
    headerText: "MGMS",
    body: `Extrapolating out the market sentiment algorithms weighting our synthetic economy values, 
    we also offer a mintable asset that tracks the projected aggregated sentiments of the US market on a 
    trailing 30 day period cross-weighted by a 10 day measure. The overall sentiment is then weighted to the 
    broader index with results ratioed against the broader crypto market. More than 1,000 separate inputs are 
    accounted for within the model. You can think of MGMS as the VIX which encompasses crypto and traditional markets risks. 
    It is designed to be highly tradable - both short and long.
    Mints start at 10 USD worth of ISA and will theoretically fluctuate daily between 7 and 13 in most 
    cases depending on the cross-weighted sentiments pulled from the algorithm. More extreme range bounds 
    are possible, but unlikely given the fact pricing is reflected on a trailing measure.
    `,
    buttonText: "",
  },
  {
    Icon: AccordionIcon9,
    headerText: "usRP",
    body: `One of the most damaging events to befall a portfolio is an unforeseen recession. Therefore, 
    following suit with our eTY and elTY products, we are introducing a tokenized measure of recession based risk. 
    Initially, this mintable asset will reflect the risks associated with the United States' Economy - given its influence over the global markets. 
    Risk will not only be calculated based of a conglomeration of analyst reflections, but will also utilize 
    several machine learning algorithms which factor in overall market and global sentiments which will be cross-weighted 
    not only quarterly, but also day-to-dav to reflect ever changing shifts in geopolitical inputs.`,
    buttonText: "",
  },
  {
    Icon: AccordionIcon4,
    headerText: "eBTC - eETH | Inverse Large Cap Assets",
    body: `Using similar mint mechanics as eTY and eITY, one can mint two separate large-cap inverse
    hedges using ISA. Rather than opening a leveraged farm to short either BTC or ETH, you can
    create a synthetic asset that inversely follows the price action of the underlying token with a click
    of a button. As such, you can collect a higher yield rate over time upon selling them to the
    Treasury, decreasing your overall risk of holding either the inverse or underlying asset. We will
    add additional large-cap tokens in the future once our platform achieves a more robust Treasury.
    The community can also decide these additions through future governance.`,
    buttonText: "",
  },
  {
    Icon: AccordionIcon2,
    headerText: "eTY | 3x, 5x, 10x Leveraged US Ten Year Yield Hedge",
    body: `With the divergence of opinion on whether BTC is positively correlated to inflation, we have
    developed a synthetic asset that tracks the US Ten Year Treasury Rate (the “Rate”) at a leveraged
    rate between 3-10x. The asset is minted using ISA under the mint section, of which 100% is
    locked in the Treasury to generate additional yields. The resulting asset price will move
    following the Rate. A fee of 0.5% applies at the time of mint, which routes to the Treasury. See
    our Treasury section to read more about its strengths and long-term objectives.`,
    buttonText: "",
  },
  {
    Icon: AccordionIcon3,
    headerText: "eITY | Inverse 3x, 5x, 10x Leveraged US Ten Year Yield Hedge",
    body: `Like eTY, eITY allows you to mint inverse leveraged assets that inversely track the Rate. The
    same mintage, swap, and burn dynamics apply to eITY. However, when paired with eTY, one can
    minimize short-term risk as the assets move tick per tick against one another. While this exposes
    the position to impermanent loss, depending on the leverage used while minting, this is usually
    quickly offset by ISA bond rewards when sold to the Treasury. Furthermore, the mintage of both
    allows additional short-term flexibility for your hedging objectives. The same safety measures
    utilized for stabilizing eTY against a black swan event are present for eITY.`,
    buttonText: "",
  },
  {
    Icon: AccordionIcon5,
    headerText: "Non-Traditional Hedges",
    body: `Coming tentatively in the first half of 2022, we will introduce the ability to mint specific hedges
    against real-world volatility events that are difficult to hedge using traditional financial assets
    such as volatility-killing option spreads. These community-driven asset classes will be minted
    using ISA and carry their own risks and rewards to diversify your portfolio hedges further. We
    will release more information as logistics are finalized and feasibility tests are completed in
    January of 2022. Follow our announcement telegram channel to stay up to date with the latest
    developments platform-wide.`,
    buttonText: "",
  }
];

const Home: React.FC = () => {
  return (
    <StyledHome>
      <BackgroundContainer backgroundPosition="top">
        <Navbar />
        <Hero />
        <HomeAccodion accordionItems={accordionItems} />
      </BackgroundContainer>
      <EFooter showContent />
    </StyledHome>
  );
};

export default Home;
