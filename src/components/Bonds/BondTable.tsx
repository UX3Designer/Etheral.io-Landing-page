import styled from "@emotion/styled";
import React from "react";
import { Table } from "react-bootstrap";
import { TBondItem } from "../../pages/Bonds";
import EButton from "../EButton";
import CurrencySwitch from "../Shared/CurrencySwitch";
import BondItemIcons from "./BondItemIcons";
import BondModal from "./BondModal";

type TBondTableProps = {
  bondItems: TBondItem[];
};

const StyledBondTable = styled.div`
  margin-bottom: 90px;

  .icon-text-container {
    h6 {
      font-size: 16px;
      line-height: 20px;
      color: ${(props) => props.theme.button.secondaryText};
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
  }

  .bond-btn {
    min-width: 180px;
  }

  table {
    color: ${(props) => props.theme.color.primary};
  }

  tbody {
    tr {
      border-bottom: 1px solid ${(props) => props.theme.border.primary};
    }
  }

  thead tr {
    th {
      color: ${(props) => props.theme.color.primary};
      font-family: TT Norms Pro;
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;

      &:nth-of-type(n + 2) {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
      }
    }
  }
`;

const BondTable: React.FC<TBondTableProps> = ({ bondItems }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <StyledBondTable>
      <Table responsive borderless>
        <thead>
          <tr>
            <th>Bonds</th>
            <th>Payout Asset</th>
            <th>ROI</th>
            <th>TBV</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bondItems.map((bondItem, index) => (
            <tr key={index}>
              <td className="pt-3 align-middle">
                <div className="icon-text-container d-flex align-self-end align-items-center">
                  <BondItemIcons
                    className="me-3"
                    leftIcon={bondItem.leftIcon}
                    rightIcon={bondItem.rightIcon}
                  />
                  <div>
                    <h6 className="mb-1">{bondItem.title}</h6>
                    <p className="mb-0">Get LP</p>
                  </div>
                </div>
              </td>
              <td className="pt-3 align-middle">
                <CurrencySwitch currencyIcon={bondItem.payoutIcon} />
              </td>
              <td className="pt-3 align-middle">{bondItem.roi}</td>
              <td className="pt-3 align-middle">{bondItem.tbv}</td>
              <td className="pt-3 align-middle" align="right">
                <EButton
                  className="bond-btn"
                  type="primary"
                  outline
                  onClick={() => setIsModalVisible(true)}
                >
                  Bond
                </EButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <BondModal
        show={isModalVisible}
        onHide={() => setIsModalVisible(false)}
      />
    </StyledBondTable>
  );
};

export default BondTable;
