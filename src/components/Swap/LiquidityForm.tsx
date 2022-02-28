import cn from "classnames";
import React, { useEffect } from "react";

import EButton from "../../components/EButton";
import DropdownButton from "../../components/Shared/DropdownButton";
import SwapSettingsModal from "../../components/Swap/SwapSettingsModal";

import EthereumIcon from "../../assets/images/ethereum.svg";
import UnicornIcon from "../../assets/images/unicorn.png";
import { ReactComponent as CogIcon } from "../../assets/images/cog.svg";
import styled from "@emotion/styled";
import { rgba } from "polished";

type LiquidityFormProps = {
  channel: "dual" | "single";
  type: "add" | "remove";
};

const LiquidityForm: React.FC<LiquidityFormProps> = ({ channel, type }) => {
  const [isSettingsModalVisible, setIsSettingsModalVisible] =
    React.useState(false);
  const [dropdownSelectedIndex, setDropdownSelectedIndex] = React.useState(0);

  const toggleSettingsModal = () =>
    setIsSettingsModalVisible(!isSettingsModalVisible);

  const singleDropdownOptions = [{ image: EthereumIcon, label: "ETH" }];
  const dualDropdownOptions = [
    { image: [UnicornIcon, EthereumIcon], label: "FOX-ETH UNI" },
  ];

  useEffect(() => {
    setDropdownSelectedIndex(0);
  }, [channel]);

  const getSelectedDropdownItem = () => {
    if (channel === "dual") return dualDropdownOptions[dropdownSelectedIndex];
    else return singleDropdownOptions[dropdownSelectedIndex];
  };

  const selectedItem = getSelectedDropdownItem();

  return (
    <StyledLiquidityForm className="position-relative w-100">
      <div className="upper-div p-3">
        <CogIcon
          className="cog position-absolute"
          onClick={toggleSettingsModal}
        />

        <p className="text-primary fw-bold">
          <span className="text-disabled">Amount to</span>{" "}
          {type === "remove" && "Remove"}
          {type === "add" && "Add"}
        </p>

        <div className="d-flex justify-content-between align-items-center">
          <DropdownButton
            selectedIndex={dropdownSelectedIndex}
            options={
              channel === "single" ? singleDropdownOptions : dualDropdownOptions
            }
            onChange={(n) => setDropdownSelectedIndex(n)}
          />
          <div className="ps-2">
            <input
              className="w-100 text-end text-primary"
              type="text"
              defaultValue="138777421.999320"
            />
          </div>
        </div>

        <p className="balance-text text-disabled mt-2">Balance: 0.10202 ETH</p>

        <div className="buttons-container row">
          <div className="col-3">
            <EButton className="percentage-btn w-100" type="secondary">
              25%
            </EButton>
          </div>
          <div className="col-3">
            <EButton className="percentage-btn w-100" type="secondary">
              50%
            </EButton>
          </div>
          <div className="col-3">
            <EButton className="percentage-btn w-100" type="secondary">
              75%
            </EButton>
          </div>

          <div className="col-3">
            <EButton className="percentage-btn w-100" type="secondary">
              100%
            </EButton>
          </div>
        </div>
      </div>

      <div className="lower-div pb-2">
        <div className="p-3 pb-lg-4">
          <p className="fw-bold">Output Received</p>

          <div className="row">
            <div
              className={cn({
                "col-6": channel === "dual",
                "col-12": channel === "single",
              })}
            >
              <div className="w-100 output-item d-flex justify-content-between align-items-center p-2 p-lg-4">
                <div
                  className="img-container"
                  style={{
                    backgroundImage: `url(${
                      channel === "single"
                        ? selectedItem.image
                        : selectedItem.image[0]
                    })`,
                  }}
                ></div>
                <div className="text-container d-flex align-items-center">
                  <p className="mb-0 me-1 me-lg-2">100.0</p>
                  <p className="currency mb-0">ETH</p>
                </div>
              </div>
            </div>
            {channel === "dual" && (
              <div className="col-6">
                <div className="w-100 output-item d-flex justify-content-between align-items-center p-2 p-lg-4">
                  <div
                    className="img-container"
                    style={{ backgroundImage: `url(${selectedItem.image[1]})` }}
                  ></div>
                  <div className="text-container d-flex align-items-center">
                    <p className="mb-0 me-1 me-lg-2">100.0</p>
                    <p className="currency mb-0">ETH</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-3 position-section">
          <p className="fw-bold">Your Position</p>

          <div className="d-flex align-items-center">
            {channel === "single" && (
              <div
                className="img-container me-2"
                style={{ backgroundImage: `url(${selectedItem?.image})` }}
              ></div>
            )}
            {channel === "dual" && (
              <div className="dual-image-container me-3">
                <div
                  className="img-container"
                  style={{ backgroundImage: `url(${selectedItem?.image[0]})` }}
                ></div>
                <div
                  className="img-container"
                  style={{ backgroundImage: `url(${selectedItem?.image[1]})` }}
                ></div>
              </div>
            )}
            <p className="mb-0">ETH/ETH</p>
            <p className="mb-0 ms-auto justify-self-end">
              0.0694 <span>Pool Tokens</span>
            </p>
          </div>
        </div>

        <div className="p-3 pool-info-table">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column text-container">
              <p className="mb-1">Your Pool Share</p>
              <p className="mb-1">ETH</p>
              <p className="mb-1">ISA</p>
            </div>
            <div className="d-flex flex-column text-end text-container">
              <p className="mb-1">00.0000%</p>
              <p className="mb-1">0.09 USDC</p>
              <p className="mb-1">0.09 USDC</p>
            </div>
          </div>
        </div>

        <div className="p-3 pt-4">
          <EButton
            type="secondary"
            className="w-100 approve-btn text-primary mb-2"
          >
            {type === 'add' && 'Approve & Pair'}
            {type === 'remove' && 'Approve & Remove'}
          </EButton>
          <p className="mb-0 text-center bottom-text">
            0.3% fee for all swap transactions
          </p>
        </div>
      </div>
      <SwapSettingsModal
        show={isSettingsModalVisible}
        onHide={toggleSettingsModal}
      />
    </StyledLiquidityForm>
  );
};

export default LiquidityForm;

const StyledLiquidityForm = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  border-radius: 32px;
  border: 2px solid ${({ theme }) => theme.border.primary};
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;

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

  .percentage-btn {
    font-size: 13px;
    line-height: 15px;
    padding: 5px;
    background-color: ${({ theme }) => theme.border.primary};
    transition: all 0.3s ease-in-out;

    &.active,
    &:hover {
      background-color: #6a7a8b;
      color: #f2f2f2;
    }
  }

  input {
    font-size: 18px;
    line-height: 22px;
    border: none;
    background-color: transparent;
    &:focus {
      outline: none;
      border: none;
    }
    @media screen and (min-width: 786px) {
      font-size: 30px;
      line-height: 36px;
    }
  }

  .lower-div {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) =>
      theme.isDark ? theme.background.primary : theme.border.primary};

    & > div {
      border-bottom: 2px solid
        ${({ theme }) => rgba(theme.border.primary, 0.03)};
      &:last-of-type {
        border-bottom: none;
      }
    }

    .img-container {
      background-image: url(${EthereumIcon});
      background-size: cover;
      background-position: center;
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }

    .dual-image-container {
      position: relative;
      width: 75px;
      height: 42px;

      .img-container {
        position: absolute;
        top: 0;
        height: 42px;
        &:first-of-type {
          left: 0;
        }
        &:last-of-type {
          right: 0;
        }
      }
    }

    .output-item {
      background-color: ${({ theme }) =>
        theme.isDark
          ? rgba(theme.background.primary, 0.6)
          : rgba(theme.border.primary, 0.03)};
      border-radius: 10000px;
      .text-container {
        p {
          font-size: 18px;
          line-height: 22px;
          color: ${({ theme }) =>
            theme.isDark ? theme.background.secondary : theme.border.primary};
          &:last-child {
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) =>
              theme.isDark ? theme.color.primary : theme.color.disabled};
          }

          @media screen and (min-width: 786px) {
            font-size: 30px;
            line-height: 36px;
          }
        }
      }
    }

    .position-section {
      /* color: ${({ theme }) =>
        theme.isDark ? theme.color.primary : theme.color.disabled}; */

      p:last-of-type span {
        color: ${({ theme }) =>
          theme.isDark
            ? rgba(theme.background.primary, 0.6)
            : theme.color.disabled};
      }
    }

    .pool-info-table {
      .text-container:first-of-type {
        color: ${({ theme }) =>
          theme.isDark
            ? rgba(theme.background.primary, 0.6)
            : theme.color.disabled};
      }
    }

    .bottom-text {
      color: ${({ theme }) =>
        theme.isDark
          ? rgba(theme.background.primary, 0.6)
          : theme.color.disabled};
    }

    .approve-btn {
      @media screen and (min-width: 786px) {
        font-size: 22px;
        line-height: 26px;
      }
    }
  }
`;
