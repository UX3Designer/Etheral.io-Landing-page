import cn from "classnames";
import styled from "@emotion/styled";
import React from "react";
import Modal from "react-bootstrap/Modal";

import EButton from "../EButton";

type TSwapSettingsModalProps = {
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
  .section-heading {
    font-size: 16px;
    line-height: 22px;
  }
  .inner-heading {
    font-size: 14px;
    line-height: 20px;
  }
  .preset-btn {
    font-size: 14px;
    line-height: 20px;
    padding: 8px;
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.border.primary};
    transition: all 0.3s ease-in-out;

    &.active {
      color: ${({ theme }) =>
        theme.isDark ? "#6a7a8b" : theme.border.primary};
      background-color: ${({ theme }) => theme.color.primary};
    }
  }

  input {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.border.primary};
    border: none;
    box-shadow: none;
    outline: none;
    border-radius: 32px;
    width: 175px;
    text-align: center;
    padding: 15px;

    &.custom-tolerance {
      font-size: 18px;
      line-height: 22px;
    }
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

const SwapSettingsModal: React.FC<TSwapSettingsModalProps> = ({
  show,
  onHide,
}) => {
  const [activePercentage, setActivePercentage] = React.useState<null | string>(
    null
  );

  return (
    <Modal show={show} centered onHide={onHide}>
      <StyledModalBody className="w-100 position-relative bg-primary">
        <span
          className="position-absolute close-button text-primary"
          onClick={onHide}
        >
          X
        </span>
        <h6 className="modal-title fw-bold text-primary mb-2">Settings</h6>

        <p className="text-primary fw-bold section-heading mb-2">
          Slippage Tolerance
        </p>

        <p className="text-disabled inner-heading mb-2">Presets</p>

        <div className="row mb-2">
          <div className="col">
            <EButton
              type="secondary"
              className={cn("w-100 preset-btn", {
                active: activePercentage === "0.1",
              })}
              onClick={() => setActivePercentage("0.1")}
            >
              0.1%
            </EButton>
          </div>
          <div className="col">
            <EButton
              type="secondary"
              className={cn("w-100 preset-btn", {
                active: activePercentage === "0.5",
              })}
              onClick={() => setActivePercentage("0.5")}
            >
              0.5%
            </EButton>
          </div>
          <div className="col">
            <EButton
              type="secondary"
              className={cn("w-100 preset-btn", {
                active: activePercentage === "1",
              })}
              onClick={() => setActivePercentage("1")}
            >
              1%
            </EButton>
          </div>
        </div>

        <p className="text-disabled inner-heading mb-2">Custom Tolerance</p>

        <input
          className="custom-tolerance fw-bold mb-3"
          type="text"
          defaultValue="0.0%"
        />

        <p className="text-primary fw-bold section-heading">
          Transaction deadline
        </p>

        <div className="d-flex align-items-center">
          <input
            className="custom-minutes fw-normal mb-2 me-3"
            type="text"
            defaultValue="0.0"
          />

          <p className="mb-0">Minutes</p>
        </div>
      </StyledModalBody>
    </Modal>
  );
};

export default SwapSettingsModal;
