import cn from "classnames";
import styled from "@emotion/styled";
import React from "react";
import { Modal } from "react-bootstrap";

import BondItemIcons from "./BondItemIcons";
import CurrencySwitch from "../Shared/CurrencySwitch";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import { ReactComponent as QuestionIcon } from "../../assets/images/question-circle.svg";
import EthereumIcon from "../../assets/images/ethereum.svg";
import ISAIcon from "../../assets/images/isa-icon.png";
import UnicornIcon from "../../assets/images/unicorn.png";
import EButton from "../EButton";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../connectors";

type TBondModalProps = {
  show: boolean;
  onHide: () => void;
  bondInfo?: any;
};

const StyledModalBody = styled.div`
  border-radius: 32px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.1);
  border: 2px solid
    ${({ theme }) =>
      theme.isDark ? theme.color.disabled : theme.border.primary};
  padding: 20px 14px;

  .close-button {
    right: 14px;
    top: 20px;
    cursor: pointer;
  }

  .modal-title {
    font-size: 18px;
    line-height: 22px;
  }
  .price-text {
    font-size: 16px;
    line-height: 20px;
  }
  .price-number {
    font-size: 18px;
    line-height: 22px;
  }
  .give-get-text {
    font-size: 14px;
    line-height: 22px;
  }

  .info-text-table {
    p {
      margin-bottom: 12px;

      &:first-of-type {
        color: ${({ theme }) =>
          theme.isDark ? "#6a7a8b" : theme.color.disabled};
        .svg-fill {
          fill: ${({ theme }) =>
            theme.isDark ? "#6a7a8b" : theme.color.disabled};
        }
      }
    }
  }

  .info-icon {
    position: absolute;
    top: -5px;
    right: -30px;
  }

  .price-info-container,
  .give-get-info-container {
    color: ${({ theme }) => (theme.isDark ? "#6a7a8b" : theme.color.disabled)};
  }

  .icon-text-container {
    color: ${({ theme }) => (theme.isDark ? "#6a7a8b" : theme.color.disabled)};
    .svg-fill {
      fill: ${({ theme }) => (theme.isDark ? "#6a7a8b" : theme.color.disabled)};
    }
    .vesting-period-text .active {
      color: ${({ theme }) =>
        theme.isDark ? theme.color.primary : theme.color.primary};
    }
    @media screen and (min-width: 786px) {
      margin-top: -90px;
    }
  }
`;

const BondModal: React.FC<TBondModalProps> = ({ show, onHide }) => {
  const { account, error, activate} = useWeb3React();
  const [activeDays, setActiveDays] = React.useState<7 | 14>(7);

  const connect = () => {
    try {
      activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} centered onHide={onHide}>
      <StyledModalBody className="w-100 position-relative bg-primary">
        <span
          className="position-absolute close-button text-primary"
          onClick={onHide}
        >
          X
        </span>
        <h6 className="modal-title text-center fw-bold text-primary">
          SYN - ETH SLP Bond
        </h6>

        <div className="d-flex price-info-container justify-content-between mt-3">
          <p className="mb-1 price-text">Bond Price</p>
          <p className="mb-1 price-text">Market Price</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-primary fw-bold price-number">$3.30</p>
          <p className="text-primary fw-bold price-number">$3.55</p>
        </div>

        <div className="d-flex info-container justify-content-between mb-3">
          <BondItemIcons leftIcon={UnicornIcon} rightIcon={EthereumIcon} />
          <CurrencySwitch text="7.81%" currencyIcon={ISAIcon} />
        </div>

        <div className="d-flex give-get-info-container justify-content-between mt-2">
          <p className="mb-1 give-get-text">You Give</p>
          <p className="mb-1 give-get-text">You Get</p>
        </div>

        <div className="icon-text-container d-flex flex-column justify-content-center align-items-center">
          <ClockIcon width="20" />
          <p className="give-get-text mb-1">Select Vesting Period</p>
          <p className="vesting-period-text">
            <span
              className={cn("me-2 cursor-pointer", { active: activeDays === 7 })}
              onClick={() => setActiveDays(7)}
            >
              7 days
            </span>
            <span
              className={cn("me-2 cursor-pointer", { active: activeDays === 14 })}
              onClick={() => setActiveDays(14)}
            >
              14 days
            </span>
          </p>
        </div>

        {account && !error ? (
          <React.Fragment />
        ) : (
          <EButton className="w-100 fw-normal mb-4" type="primary" onClick={connect}>
            Connect
          </EButton>
        )}

        <div className="info-text-table">
          <div className="d-flex justify-content-between">
            <p className="position-relative">
              Your Balance
              <QuestionIcon className="info-icon" />
            </p>
            <p className="text-primary">0 SYN - ETH SLP</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="position-relative">
              You will Get
              <QuestionIcon className="info-icon" />
            </p>
            <p className="text-primary">0 ISA</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="position-relative">
              Max
              <QuestionIcon className="info-icon" />
            </p>
            <p className="text-primary">383284.119 SYN</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="position-relative">
              ROI
              <QuestionIcon className="info-icon" />
            </p>
            <p className="text-primary">7.80%</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="position-relative">
              Vested Term
              <QuestionIcon className="info-icon" />
            </p>
            <p className="text-primary">7 Days</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="position-relative">Bond Contract</p>
            <p className="text-primary">View</p>
          </div>
        </div>
      </StyledModalBody>
    </Modal>
  );
};

export default BondModal;
