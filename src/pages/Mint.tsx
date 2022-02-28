import Web3 from "web3";
import cn from "classnames";
import { rgba } from "polished";
import styled from "@emotion/styled";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";

import EFooter from "../components/EFooter";
import EButton from "../components/EButton";
import Navbar from "../components/Shared/Navbar";
import BackgroundContainer from "../components/BackgroundContainer";
import InverseProductButton from "../components/Mint/InverseProductButton";

import EEthIcon from "../assets/images/eETH.png";
import EBtcIcon from "../assets/images/eBTC.png";
import { ReactComponent as CaretIcon } from "../assets/images/accordion-caret.svg";
import { ReactComponent as BackButtonIcon } from "../assets/images/back-button.svg";

import { useAssetsContracts } from "../hooks/useAssets";
import contracts from "../constants/contracts";
import { useWeb3React } from "@web3-react/core";
import { useApprove } from "../hooks/useApprove";
import { useAllowance } from "../hooks/useAllowance";
import { useTokenBalance } from "../hooks/useTokenBalance";
import {useAmountCalculate} from "../hooks/useAmountCalculate";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const StyledMint = styled.section`
  .title {
    margin-top: 55px;
    margin-bottom: 24px;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    position: relative;
  }

  .muted {
    opacity: 0.6;
  }

  .container.content {
    max-width: 690px;
    padding-top: 15px;
    padding-bottom: 190px;
  }

  .top-info-text {
    font-size: 14px;
    line-height: 22px;
  }

  .top-inputs {
    font-size: 16px;
    line-height: 22px;

    .form-select {
      border-radius: 1000px;
      background-color: ${({ theme }) =>
        theme.isDark ? "#6a7a8b" : theme.color.primary};
      border: none;
      color: ${({ theme }) =>
        theme.isDark ? theme.color.disabled : theme.border.primary};
      background-image: none;
      padding-left: 28px;
      padding-top: 12px;
      padding-bottom: 12px;
      margin-top: 15px;
      transition: opacity 0.3s ease-in-out;
    }

    svg {
      top: 20px;
      right: 15px;
      .svg-fill {
        fill: ${({ theme }) =>
          theme.isDark ? theme.color.disabled : theme.border.primary};
      }
    }
  }

  .form-container {
    border-radius: 32px;
    max-width: 690px;
    overflow: hidden;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.1);
    border: ${({ theme }) =>
      theme.isDark ? `2px solid ${theme.color.disabled}` : "none"};

    .title-text {
      font-size: 18px;
      line-height: 22px;
    }

    .upper-div {
      background-color: ${(props) => props.theme.background.primary};
      padding: 30px 20px 20px;

      .svg-fill {
        fill: ${(props) => props.theme.color.primary};
      }
    }

    .lower-div {
      padding: 16px 20px 22px;
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) =>
        theme.isDark ? theme.background.primary : theme.border.primary};
      .svg-fill {
        fill: ${({ theme }) =>
          theme.isDark ? theme.background.primary : theme.border.primary};
      }

      .title-text {
        flex-wrap: wrap;
        svg {
          transform: rotate(180deg);
          min-width: 16px;
        }
        p {
          white-space: nowrap;

          &:last-of-type {
            color: ${({ theme }) =>
              theme.isDark ? theme.background.primary : theme.color.disabled};
          }
        }
      }

      .input-container .input-area {
        background-color: ${({ theme }) =>
          theme.isDark
            ? rgba(theme.background.primary, 0.6)
            : rgba(theme.border.primary, 0.1)};
        padding-bottom: 20px;
        padding-top: 20px;
        input {
          color: ${({ theme }) =>
            theme.isDark ? theme.color.disabled : theme.border.primary};

          @media screen and (min-width: 786px) {
            margin-bottom: 0;
          }
        }
      }
    }

    .footer-div {
      padding: 20px 22px;
      border-top: 2px solid ${(props) => rgba(props.theme.border.primary, 0.1)};
      background-color: ${(props) => props.theme.color.primary};
      color: ${({ theme }) =>
        theme.isDark ? theme.background.primary : theme.border.primary};

      .mint-btn {
        background-color: ${({ theme }) =>
          theme.isDark ? theme.background.primary : theme.border.primary};
        font-size: 22px;
        line-height: 26px;
        color: ${({ theme }) =>
          theme.isDark ? theme.color.disabled : theme.color.primary};
      }

      .info-text {
        font-size: 14px;
        line-height: 22px;

        @media screen and (min-width: 786px) {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }

  .input-container {
    .input-area {
      border-radius: 1000px;
      padding-bottom: 15px;
      padding-top: 14px;
      padding-left: 30px;
      padding-right: 30px;
      background-color: ${(props) =>
        rgba(props.theme.background.secondary, 0.03)};
      color: ${({ theme }) => theme.color.primary};
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      input {
        color: ${({ theme }) =>
          theme.isDark ? theme.color.disabled : theme.color.primary};
        background-color: transparent;
        border: none;
        box-shadow: none;
        &:focus {
          outline: none;
        }

        @media screen and (min-width: 786px) {
          font-size: 30px;
          line-height: 36px;
          margin-bottom: 12px;
        }
      }
    }
  }
`;

const etherealProducts = [
  { value: "", text: "Select" },
  { value: "eTY3", text: "eTY3 (Ten Year 3x Leverage)" },
  { value: "eTY5", text: "eTY5 (Ten Year 5x Leverage)" },
  { value: "eTY10", text: "eTY10 (Ten Year 10x Leverage)" },
  { value: "eITY3", text: "eITY3 (Inverse Ten Year 3x Leveraged)" },
  { value: "eITY5", text: "eITY5 (Inverse Ten Year 5x Leveraged)" },
  { value: "eITY10", text: "eITY10 (Inverse Ten Year 10x Leveraged)" },
];

const Mint: React.FC = () => {
  const { account } = useWeb3React();
  const [amount, setAmount] = useState("0.00");
  const [amountOut, setAmountOut] = useState("0.00");

  const [activeEtherealProduct, setActiveEtherealProduct] = useState("eTY3");
  const [activeInverseProduct, setActiveInverseProduct] = useState<
    "eETH" | "eBTC" | null
  >(null);

  const Bonds = useAssetsContracts(activeInverseProduct || activeEtherealProduct );
  const allowance = useAllowance(Bonds.addresses[3], Bonds.addresses[0]);
  const Approve = useApprove(Bonds.addresses[3]);
  const isaBalance = useTokenBalance(Bonds.addresses[3],account)
  const amountsPerEty3 = useAmountCalculate("", 1)
  const amountsPerEty5 = useAmountCalculate("ety5", 1)
  const amountsPerEty10 = useAmountCalculate("ety10", 1)
  const amountsPerEth = useAmountCalculate("eth", 1)
  const amountsPerBtc = useAmountCalculate("btc", 1)


  const getSelectedProduct = () => {
    if (activeEtherealProduct) {
      const product = etherealProducts.find(
        (product) => product.value === activeEtherealProduct
      );
      return product?.text;
    } else {
      return activeInverseProduct;
    }
  };


  const calculateAmount = () =>{
    console.log(activeEtherealProduct)
  }

  

  const approveAndMint = async () => {
    console.log(amount)
    try{
    await Approve(allowance, Bonds.addresses[0]);
    await Bonds.contracts[0].methods
      .tokenBuy(Bonds.addresses[2], Web3.utils.toWei(amount, "ether"))
      .send({ from: account });
    }catch(e : any){
      
      console.error(e)
      if(e.code == 4001){

      toast.error('User denied transaction', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
        });
      }

      else{
      toast.error('Please switch your network to avalanche!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
        });
      }
        

       
    }
  }

  useEffect(() => {
  }, [allowance, Bonds,activeInverseProduct]);

  return (
    <StyledMint>
      <BackgroundContainer backgroundPosition="bottom">
        <Navbar title="Ethereal Mint " />
        
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="title d-none d-lg-block">Ethereal Mint</h2>
        </div>
        
        <div className="container content">
          <div className="top-inputs d-flex flex-column flex-lg-row justify-content-lg-between">
            <div className="eth-product mb-4">
              <p className="text-disabled">Select Ethereal Product</p>
              <div className="position-relative">
                <Form.Select
                  value={activeEtherealProduct}
                  className={cn({ muted: activeInverseProduct })}
                  onChange={(e) => {
                    setActiveEtherealProduct(e.target.value);
                    setActiveInverseProduct(null);
                  }}
                >
                  {etherealProducts.map((eProduct) => (
                    <option key={eProduct.value} value={eProduct.value}>
                      {eProduct.text}
                    </option>
                  ))}
                </Form.Select>
                <CaretIcon className="position-absolute" />
              </div>
            </div>

            <div className="inverse-product d-flex flex-column justify-content-lg-end mb-4">
              <p className="text-disabled text-lg-end">
                Select Inverse Product
              </p>
              <InverseProductButton
                firstIcon={EEthIcon}
                firstText="eETH"
                secondIcon={EBtcIcon}
                secondText="eBTC"
                selected={activeInverseProduct}
                onChange={(n) => {
                  setActiveInverseProduct(n);
                  setActiveEtherealProduct("");
                }}
              />
            </div>
          </div>

          <p className="top-info-text text-disabled mb-0 text-lg-center">
            Mint fee is 0.5% per transaction | $10 worth of ISA minimum is
            required
          </p>

          <div className="form-container w-100 mt-4">
            <div className="upper-div">
              <div className="title-text d-flex align-items-center mb-4">
                <p className="mb-0 me-3 fw-bold">Input</p>
                <BackButtonIcon className="me-3" />
                <p className="text-disabled mb-0 fw-normal">ISA</p>
              </div>

              <div className="input-container position-relative mt-4">
                <div className="input-area">
                  <input
                    type="text"
                    value={amount}
                    onChange = {(e) => {
                      const re = /^[+-]?\d*(?:[.,]\d*)?$/;
                      if (e.target.value === '' || re.test(e.target.value)){
                        setAmount(e.target.value);

                        calculateAmount();
                       

                      }
                    }
                  }
                  />
                  <span className="balance-text text-disabled d-block">
                    Balance: {isaBalance} ISA
                  </span>
                </div>
              </div>
            </div>

            {/* Lower Div */}
            <div className="lower-div">
              <div className="title-text d-flex align-items-center mb-2">
                <p className="my-2 me-3 fw-bold">Output Received</p>
                <BackButtonIcon className="me-3" />
                <p className="my-2">{getSelectedProduct()}</p>
              </div>

              <div className="input-container position-relative mt-4">
                <div className="input-area">
                  <input type="text" value={amountOut} />
                </div>
              </div>
            </div>

            {/* footer Div */}
            <div className="footer-div">
              <EButton
                type="secondary"
                className="w-100 mint-btn"
                onClick={approveAndMint}
                disabled={(parseInt(amount)) ==0 || amount == ""}
              >
                {allowance === false ? "Approve & Mint" : "Mint"}
              </EButton>

              <p className="info-text text-center mb-0 mt-3">
                You are minting eTY3 (Ten Year 3x Leverage)
              </p>
            </div>
          </div>
        </div>
      </BackgroundContainer>
      <EFooter />
    </StyledMint>
  );
};

export default Mint;
