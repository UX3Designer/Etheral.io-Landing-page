import styled from "@emotion/styled";
import { rgba } from "polished";
import cn from "classnames";
import React from "react";

import BackgroundImage from "../assets/images/background-image.png";
import DarkBackgroundImage from "../assets/images/dark-theme-background-image.png";
import { Theme, useTheme } from "@emotion/react";

interface BackgroundContainerProps {
  backgroundPosition: "top" | "bottom";
}

function getOverlayBackground(
  props: BackgroundContainerProps & { theme: Theme }
) {
  if (props.theme.isDark) {
    return props.theme.background.primary;
  }
  return `linear-gradient(
    ${props.backgroundPosition === "top" ? "0deg" : "180deg"},
    ${props.theme.background.primary} 46.22%,
    ${rgba(props.theme.background.primary, 0)} 74.77%
  )`;
}

const StyledBackgroundContainer = styled.section`
  position: relative;
  background-color: transparent;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: ${(props: BackgroundContainerProps) =>
    props.backgroundPosition === "top" ? "top" : "bottom"};
  background-position-x: center;

  .overlay,
  .img-overlay {
    left: 0;
    top: 0;
    z-index: 1;
  }

  .overlay {
    background: ${(props) => getOverlayBackground(props)};
  }

  .img-overlay {
    background-color: transparent;
    background-image: url(${DarkBackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.5s ease-in-out;

    &.show {
      opacity: 1;
    }
  }

  .content-container {
    position: relative;
    z-index: 3;
  }
`;

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  backgroundPosition,
  children,
}) => {
  const theme = useTheme();

  return (
    <StyledBackgroundContainer backgroundPosition={backgroundPosition}>
      <div className="overlay position-absolute w-100 h-100"></div>
      <div
        className={cn("img-overlay position-absolute w-100 h-100", {
          show: theme.isDark,
        })}
      ></div>
      <div className="content-container">{children}</div>
    </StyledBackgroundContainer>
  );
};

export default BackgroundContainer;
