import React from "react";
import styled from "@emotion/styled";
import { Link, NavLink, useLocation } from "react-router-dom";

import { ReactComponent as HamburgerIcon } from "../../../assets/images/hamburger.svg";
import etherealLightLogo from "../../../assets/images/logo-light.png";
import etherealDarkLogo from "../../../assets/images/logo-dark.png";
import { toggleSidebar } from "../../../redux/actions/uiActions";
import { useAppDispatch } from "../../../redux/store";
import EButton from "../../EButton";
import Sidebar from "./Sidebar";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "@emotion/react";
// import Web3Status from '../Web3Status'
import { useWeb3React } from "@web3-react/core";
import { useWalletModalToggle } from "../../../redux/application/hooks";
import { injected } from "../../../connectors";
import { toast } from "react-toastify";
import { isMobile } from "../../../utils/userAgent";

const StyledNavbar = styled.nav`
  background-color: transparent;
  padding-top: 25px;

  .navbar-brand {
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    margin-right: 40px;
    color: ${(props) => props.theme.background.secondary};

    img {
      max-width: 125px;
    }
  }

  .mobile-page-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.color.disabled};
  }

  .nav-item {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }

    .nav-link {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      color: ${(props) => props.theme.color.disabled};
      padding: 15px;
      border: none;

      &.active,
      &:hover {
        color: ${(props) => props.theme.color.primary};
        border-bottom: 2px solid ${(props) => props.theme.color.primary};
      }
    }
  }

  .buttons-container {
    font-size: 18px;
    line-height: 22px;
    a {
      color: ${(props) => props.theme.color.primary};
      text-decoration: none;
    }
  }

  .svg-fill {
    fill: ${(props) => props.theme.color.primary};
  }
`;

export type TNavLink = {
  path: string;
  text: string;
  protected?: boolean;
};

type TNavbarProps = {
  title?: string;
};

const Navbar: React.FC<TNavbarProps> = ({ title }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
    error,
    chainId,
  } = useWeb3React();
  const toggleWalletModal = useWalletModalToggle();

  const connect = async () => {
    try {
      if (chainId == undefined) {
        toast.error("Please switch your network to avalanche!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        await activate(injected);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // set authentication logic here
  // const isLoggedIn = true;

  const navLinks: TNavLink[] = [
    {
      path: "/",
      text: "About",
    },

    // {
    //   path: "/audit",
    //   text: "Audit",
    // },
    // {
    //   path: "/bonds",
    //   text: "Bonds",
    // },
    // {
    //   path: "/swap",
    //   text: "Swap",
    // },
    // {
    //   path: "/mint",
    //   text: "Mint",
    // },
  ];

  const filteredNavlinks = navLinks.filter((navLink) => {
    if (pathname === "/" || pathname === "/roadmap" || pathname === "/audit") {
      if (navLink.path === "/swap" || navLink.path === "/mint") return false;
      return true;
    } else {
      if (
        navLink.path === "/" ||
        navLink.path === "/audit"
      )
        return false;
      return true;
    }
  });

  return (
    <StyledNavbar className="navbar navbar-expand-lg">
      <div className="container" style={{ justifyContent: "center" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => dispatch(toggleSidebar())}
          style={{ position: "absolute", left: 20 }}
        >
          <HamburgerIcon />
        </button>

        {pathname === "/" && (
          <Link
            className="navbar-brand"
            style={{ margin: isMobile ? "0px" : "" }}
            to="/"
          >
            <img
              src={theme.isDark ? etherealDarkLogo : etherealLightLogo}
              alt="Ethere-al"
            />
          </Link>
        )}
        {title && (
          <span
            className="navbar-brand d-flex justify-content-center align-items-center"
            style={{ minHeight: "125px", margin: isMobile ? "0px" : "" }}
          >
            {title}
          </span>
        )}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {filteredNavlinks.map((navLink) => (
              <li key={navLink.path} className="nav-item">
                <NavLink
                  to={navLink.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {navLink.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="ms-auto buttons-container d-flex align-items-center">

          </div>
        </div>
      </div>

      <Sidebar navLinks={navLinks} />
    </StyledNavbar>
  );
};

export default Navbar;
