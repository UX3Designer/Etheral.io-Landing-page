import cn from "classnames";
import styled from "@emotion/styled";
import React, { useState } from "react";

import { ReactComponent as AccordionCaret } from "../../assets/images/accordion-caret.svg";

type TButtonProps = { image: string | string[]; label: string };

interface DropdownButtonProps {
  selectedIndex?: number;
  options: TButtonProps[];
  onChange?: (newIndex: number) => void;
}
const DropdownButton: React.FC<DropdownButtonProps> = ({
  selectedIndex,
  options,
  onChange = (_n) => {},
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptions = () => setIsOptionsVisible(!isOptionsVisible);
  // const showOptions = () => setIsOptionsVisible(true);
  const hideOptions = () => setIsOptionsVisible(false);

  const selectedItem = getSelectedItem();

  function getSelectedItem() {
    if (typeof selectedIndex === "number" && selectedIndex >= 0) {
      return options[selectedIndex];
    }
    return null;
  }

  function renderOptionsList() {
    return options.map((option, index) => (
      <StyledDropdownItem
        key={index}
        onClick={() => {
          hideOptions();
          onChange(index);
        }}
      >
        {option.label}
      </StyledDropdownItem>
    ));
  }

  const isDual = options.some((o) => Array.isArray(o.image));

  return (
    <StyledDropdownButton
      className={cn("d-flex align-items-center", { dual: isDual })}
    >
      <div className="dropdown-option-img-container">
        {isDual ? (
          <>
            <div
              className="w-100 h-100"
              style={{
                backgroundImage: selectedItem
                  ? `url(${selectedItem.image[0]})`
                  : "none",
              }}
            />
            <div
              className="w-100 h-100"
              style={{
                backgroundImage: selectedItem
                  ? `url(${selectedItem.image[1]})`
                  : "none",
              }}
            />
          </>
        ) : (
          <div
            className="w-100 h-100"
            style={{
              backgroundImage: selectedItem
                ? `url(${selectedItem.image})`
                : "none",
            }}
          />
        )}
      </div>
      <div
        className="text-container d-flex flex-end w-100 h-100 d-flex justify-content-end align-items-center"
        onClick={toggleOptions}
      >
        <span>{selectedItem ? selectedItem.label : "Select"}</span>
        <AccordionCaret className="position ms-2" />
      </div>

      {isOptionsVisible && options.length > 0 && (
        <div className="options-container position-absolute">
          {renderOptionsList()}
        </div>
      )}
    </StyledDropdownButton>
  );
};

export default DropdownButton;

const StyledDropdownButton = styled.div`
  background-color: transparent;
  position: relative;
  width: 115px;
  height: 42px;
  border-radius: 1000px;
  cursor: pointer;
  color: ${(props) => props.theme.background.secondary};
  text-align: right;
  font-size: 14px;
  line-height: 18px;

  .dropdown-option-img-container {
    height: 42px;
    width: 42px;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;

    & > div {
      background-size: cover;
      background-position: center;
      transition: all 0.3s ease-in-out;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.disabled};
    }
  }

  .options-container {
    top: 43px;
    width: 100%;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  &.dual {
    min-width: 190px;
    .dropdown-option-img-container {
      width: 75px;
      border-radius: 0;
      background-color: transparent;

      & > div {
        max-width: 42px;
        position: absolute;
        top: 0;

        &:first-of-type {
          left: 0;
        }
        &:last-of-type {
          right: 0;
          z-index: 1;
        }
      }
    }

  }
`;

const StyledDropdownItem = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  padding: 8px;
  padding-right: 20px;
  z-index: 1;
  text-align: right;
  border-radius: 12px;

  &:first-of-type {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:last-of-type {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;
