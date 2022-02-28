import styled from "@emotion/styled";
import cn from "classnames";
import React, { useState } from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import EFooter from "../components/EFooter";
import Navbar from "../components/Shared/Navbar";
import TabButton from "../components/Shared/TabButton";
import SwapForm from "../components/Swap/SwapForm";
import LiquidityForm from "../components/Swap/LiquidityForm";

const StyledSwap = styled.section`
  .title {
    margin-top: 55px;
    margin-bottom: 24px;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    position: relative;
  }

  .tab-buttons-container {
    width: 200px;
    height: 42px;
    position: relative;
    margin-bottom: 26px;

    button {
      position: absolute;
      top: 0;
      width: calc(50% + 10px);

      &:first-of-type {
        left: 0;
      }

      &:last-of-type {
        right: 0;
      }
    }
  }

  .container.content {
    padding-bottom: 250px;
    padding-top: 35px;
    max-width: 700px;
  }
`;

const Swap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"swap" | "liquidity">("swap");
  const [liquidityType, setLiquidityType] = useState<"add" | "remove">(
    "remove"
  );
  const [liquidityChannel, setLiquidityChannel] = useState<"dual" | "single">(
    "dual"
  );

  return (
    <StyledSwap>
      <BackgroundContainer backgroundPosition="bottom">
        <Navbar title="Swap" />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="title d-none d-lg-block">Swap</h2>
        </div>

        <div className="container content d-flex flex-column justify-content-center align-items-center">
          {/* <div className="tab-buttons-container">
            <TabButton
              className={cn({ active: activeTab === "swap" })}
              onClick={() => setActiveTab("swap")}
            >
              Swap
            </TabButton>
            <TabButton
              className={cn({ active: activeTab === "liquidity" })}
              onClick={() => setActiveTab("liquidity")}
            >
              Liquidity
            </TabButton>
          </div> */}

          <div
            className={cn("top-inputs w-100 d-flex flex-column flex-lg-row", {
              "justify-content-start": activeTab === "liquidity",
              "justify-content-center": activeTab === "swap",
            })}
          >
            <div className="eth-product mb-4">
              {activeTab === "liquidity" && (
                <p className="text-disabled">Action</p>
              )}

              <div className="tab-buttons-container">
                <TabButton
                  className={cn({ active: activeTab === "swap" })}
                  onClick={() => setActiveTab("swap")}
                >
                  Swap
                </TabButton>
                <TabButton
                  className={cn({ active: activeTab === "liquidity" })}
                  onClick={() => setActiveTab("liquidity")}
                >
                  Liquidity
                </TabButton>
              </div>
            </div>

            {activeTab === "liquidity" && (
              <>
                <div className="inverse-product d-flex flex-column justify-content-lg-start ms-lg-4 mb-4">
                  <p className="text-disabled">Liquidity</p>
                  <div className="tab-buttons-container">
                    <TabButton
                      className={cn({ active: liquidityType === "remove" })}
                      onClick={() => setLiquidityType("remove")}
                    >
                      Remove
                    </TabButton>
                    <TabButton
                      className={cn({ active: liquidityType === "add" })}
                      onClick={() => setLiquidityType("add")}
                    >
                      Add
                    </TabButton>
                  </div>
                </div>

                <div className="inverse-product d-flex flex-column justify-content-lg-end ms-lg-auto mb-4">
                  <p className="text-disabled text-lg-end">
                    {liquidityType === 'add' && 'Input'}
                    {liquidityType === 'remove' && 'Output'}
                  </p>
                  <div className="tab-buttons-container">
                    <TabButton
                      className={cn({ active: liquidityChannel === "dual" })}
                      onClick={() => setLiquidityChannel("dual")}
                    >
                      Dual
                    </TabButton>
                    <TabButton
                      className={cn({ active: liquidityChannel === "single" })}
                      onClick={() => setLiquidityChannel("single")}
                    >
                      Single
                    </TabButton>
                  </div>
                </div>
              </>
            )}
          </div>

          {activeTab === "swap" && <SwapForm />}
          {activeTab === "liquidity" && (
            <LiquidityForm channel={liquidityChannel} type={liquidityType} />
          )}
        </div>
      </BackgroundContainer>
      <EFooter />
    </StyledSwap>
  );
};

export default Swap;
