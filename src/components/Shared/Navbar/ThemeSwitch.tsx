import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { RootState, useAppSelector } from "../../../redux/store";

import DarkThemeIcon from "../../../assets/images/theme-switch-dark.svg";
import LightThemeIcon from "../../../assets/images/theme-switch-light.svg";
import { toggleTheme } from "../../../redux/actions/uiActions";

const StyledThemeSwitch = styled.div`
  .switch-container {
    cursor: pointer;
  }

  .img-container {
    width: 43px;
    height: 21px;
    border-radius: 25px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .switch-indicator {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 2.5px;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;

    &.light {
      left: 2.15px;
    }

    &.dark {
      left: calc(100% - 15px - 2.15px);
    }
  }
`;

const ThemeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useAppSelector((state:RootState) => state.rootReducer.ui);

  return (
    <StyledThemeSwitch>
      <div
        className="switch-container position-relative"
        onClick={() => dispatch(toggleTheme())}
      >
        <div
          className="img-container"
          style={{
            backgroundImage: `url(${
              theme === "dark" ? DarkThemeIcon : LightThemeIcon
            })`,
          }}
        ></div>
        {/* <img
          src={}
          alt={`${theme} Theme`}
        /> */}
        <div className={`switch-indicator bg-white ${theme}`}></div>
      </div>
    </StyledThemeSwitch>
  );
};

export default ThemeSwitch;
