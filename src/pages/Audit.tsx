import styled from "@emotion/styled";
import React from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import EFooter from "../components/EFooter";
import Navbar from "../components/Shared/Navbar";
import StyledTitle from "../components/Shared/Title";

const StyledAudit = styled.section``;

const Audit: React.FC = () => {
  return (
    <StyledAudit>
      <BackgroundContainer backgroundPosition="bottom">
        <Navbar title="Audit" />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <StyledTitle className="d-none d-lg-block">Audit</StyledTitle>
        </div>
      </BackgroundContainer>
      <EFooter />
    </StyledAudit>
  );
};

export default Audit;
