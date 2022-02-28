import React, { useState } from "react";

import EButton from "../../components/EButton";
import DropdownButton from "../../components/Shared/DropdownButton";
import SwapSettingsModal from "../../components/Swap/SwapSettingsModal";

import EthereumIcon from "../../assets/images/ethereum.svg";
import { ReactComponent as CogIcon } from "../../assets/images/cog.svg";
import { ReactComponent as BottomArrowIcon } from "../../assets/images/bottom-arrow.svg";
import styled from "@emotion/styled";
import { rgba } from "polished";
import { useSwap } from "../../hooks/useSwap";

const StyledSwapForm = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 32px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.1);
  padding-top: 72px;
  .cog {
    top: 15px;
    right: 15px;
    cursor: pointer;
    .svg-fill {
      fill: ${(props) => props.theme.color.primary};
    }
  }

  .svg-fill {
    fill: ${(props) => props.theme.color.primary};
  }

  .swap-btn {
    font-size: 22px;
    line-height: 26px;
  }

  .input-container {
    .dropdown-button {
      position: absolute;
      left: 0;
      top: -53px;

      @media screen and (min-width: 786px) {
        top: 13px;
        left: 24px;
        background-color: ${(props) => props.theme.background.primary};
        border-radius: 1000px;
        padding-right: 8px;
      }
    }

    .input-area {
      border-radius: 1000px;
      padding-bottom: 15px;
      padding-top: 14px;
      padding-left: 30px;
      padding-right: 30px;
      background-color: ${(props) =>
        rgba(props.theme.background.secondary, 0.03)};
      color: ${(props) => props.theme.color.primary};
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      input {
        color: ${(props) => props.theme.color.primary};
        background-color: transparent;
        border: none;
        box-shadow: none;
        &:focus {
          outline: none;
        }

        @media screen and (min-width: 786px) {
          font-size: 30px;
          line-height: 36px;
          padding-left: 130px;
          margin-bottom: 12px;
        }
      }
      span {
        font-size: 14px;

        @media screen and (min-width: 786px) {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
`;

const SwapForm: React.FC = () => {
  const swapCallback = useSwap("","");
  const [token0, setToken0] = useState<"ETH">("ETH");
  const [token1, setToken1] = useState<"ISA">("ISA");
  
  const [isSettingsModalVisible, setIsSettingsModalVisible] =
    React.useState(false);

  const toggleSettingsModal = () =>
    setIsSettingsModalVisible(!isSettingsModalVisible);

  const swap = () => {
    console.log("swapping");
  };

  return (
    <StyledSwapForm className="position-relative pb-4 w-100 px-3">
      <CogIcon
        className="cog position-absolute"
        onClick={toggleSettingsModal}
      />

      <div className="input-container position-relative">
        <div className="dropdown-button">
          <DropdownButton
            selectedIndex={0}
            options={[{ image: EthereumIcon, label: "ETH" }]}
          />
        </div>
        <div className="input-area">
          <input type="text" defaultValue="138777421.999320" />
          <span className="balance-text text-disabled d-block">
            Balance: 0.10202ETH
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4">
        <BottomArrowIcon />
      </div>

      <div className="input-container position-relative mt-4">
        <div className="dropdown-button">
          <DropdownButton
            options={[
              { image: EthereumIcon, label: "ETH" },
              { image: EthereumIcon, label: "ETH" },
            ]}
          />
        </div>
        <div className="input-area">
          <input type="text" defaultValue="138777421.999320" />
          <span className="balance-text text-disabled d-block">
            Balance: 0.10202ETH
          </span>
        </div>
      </div>

      <p className="bottom-text text-center text-disabled my-3">
        0.3% fee for all swap transactions
      </p>

      <EButton
        type="primary"
        className="swap-btn fw-bold w-100 py-4"
        onClick={swap}
      >
        Swap
      </EButton>
      <SwapSettingsModal
        show={isSettingsModalVisible}
        onHide={toggleSettingsModal}
      />
    </StyledSwapForm>
  );
};

export default SwapForm;
