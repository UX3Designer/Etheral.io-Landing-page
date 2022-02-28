import styled from "@emotion/styled";
import React, { useState } from "react";
import { TBondItem } from "../../pages/Bonds";
import EButton from "../EButton";
import CurrencySwitch from "../Shared/CurrencySwitch";
import BondItemIcons from "./BondItemIcons";
import BondModal from "./BondModal";

interface MobileBondItemProps {
  bondItem: TBondItem;
}

const StyledMobileBondItem = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;

  .icon-text-container {
    h6 {
      font-size: 16px;
      line-height: 19px;
      color: ${(props) => props.theme.button.secondaryText};
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .payout-asset {
    p {
      font-size: 12px;
      line-height: 22px;
    }
  }

  .roi-tbv-container {
    .roi p,
    .tbv p {
      &:first-of-type {
        font-size: 12px;
        line-height: 22px;
      }
      &:last-of-type {
        //styleName: Body / Medium;
        font-size: 16px;
        line-height: 22px;
        color: ${(props) => props.theme.button.secondaryText};
      }
    }
  }

  .bond-btn-container {
    button {
      max-width: 250px;
    }
  }
`;

const MobileBondItem: React.FC<MobileBondItemProps> = ({ bondItem }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <StyledMobileBondItem>
      {/* first row */}
      <div className="d-flex justify-content-between mb-3">
        <div className="icon-text-container d-flex align-self-end align-items-center">
          <BondItemIcons
            className="me-3"
            leftIcon={bondItem.leftIcon}
            rightIcon={bondItem.rightIcon}
          />
          <div>
            <h6 className="mb-1">{bondItem.title}</h6>
            <p className="mb-0">Get LP</p>
          </div>
        </div>

        <div className="payout-asset">
          <p className="mb-2">Payout Asset</p>
          <CurrencySwitch currencyIcon={bondItem.payoutIcon} />
        </div>
      </div>

      {/* second row */}
      <div className="d-flex justify-content-between">
        <div className="roi-tbv-container d-flex me-5">
          <div className="roi me-5">
            <p className="mb-1">ROI</p>
            <p className="mb-1">130%</p>
          </div>
          <div className="tbv">
            <p className="mb-1">TBV</p>
            <p className="mb-1">120%</p>
          </div>
        </div>
        <div className="bond-btn-container flex-grow-1 d-flex">
          <EButton
            className="ms-auto w-100"
            type="primary"
            outline
            onClick={() => setIsModalVisible(true)}
          >
            Bond
          </EButton>
        </div>
      </div>
      <BondModal
        show={isModalVisible}
        onHide={() => setIsModalVisible(false)}
      />
    </StyledMobileBondItem>
  );
};

export default MobileBondItem;
