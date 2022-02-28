import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { TNavLink } from ".";
import etherealLightLogo from "../../../assets/images/logo-light.png";
import etherealDarkLogo from "../../../assets/images/logo-dark.png";
import { ReactComponent as BackButtonIcon } from "../../../assets/images/back-button.svg";
import { toggleSidebar } from "../../../redux/actions/uiActions";
import { RootState, useAppDispatch, useAppSelector } from "../../../redux/store";
import EButton from "../../EButton";
import { useTheme } from "@emotion/react";

interface SidebarProps {
  navLinks: TNavLink[];
}

const StyledSidebar = styled.aside`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: -100%;
  top: 0;
  z-index: 10;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  .bg-overlay {
    z-index: 1;
    opacity: 0;
    transition: all 0.8s linear;
    background-color: #000;
  }

  &.active {
    left: 0;
    opacity: 1;

    .bg-overlay {
      opacity: 0.85;
    }
  }

  .container {
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 35px;
    min-height: 100%;
    width: 85%;
    z-index: 2;
    max-width: 370px;
    background-color: ${(props) => props.theme.background.primary};
    color: ${(props) => props.theme.color.primary};
  }

  .nav-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    color: ${(props) => props.theme.background.secondary};
    img {
      max-width: 125px;
    }
  }

  .nav-item {
    margin-right: 0;
    margin-bottom: 5px;
    .nav-link {
      text-align: left;
      padding-left: 0;
      padding-right: 45px;
      display: inline-block;
    }
  }

  .launch-app-text {
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ navLinks }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const { isSidebarOpen } = useAppSelector((state:RootState) => state.rootReducer.ui);

  return (
    <StyledSidebar className={isSidebarOpen ? "active" : ""}>
      <div
        className="bg-overlay w-100 h-100 position-absolute"
        onClick={() => dispatch(toggleSidebar())}
      ></div>
      <div className="container px-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="nav-title">
            <img
              src={theme.isDark ? etherealDarkLogo : etherealLightLogo}
              alt="Ethere-al"
            />
          </div>
          <div onClick={() => dispatch(toggleSidebar())}>
            <BackButtonIcon className="w-100" />
          </div>
        </div>

        <ul className="navbar-nav flex-column mt-3 mb-2">
          {navLinks.map((navLink) => (
            <li className="nav-item mb-1 me-0" key={navLink.path}>
              <NavLink
                to={navLink.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => {
                  setTimeout(() => {
                    dispatch(toggleSidebar());
                  }, 100);
                }}
              >
                {navLink.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <EButton className="w-100" type="primary">
          Connect Wallet
        </EButton>

        <p className="launch-app-text text-center mt-3">Launch App</p>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
