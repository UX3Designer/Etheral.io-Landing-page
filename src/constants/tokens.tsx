import { Token, TokensType, TokenList } from "../model/model";

export const Tokens: TokensType = {
  // isa: new Token(
  //   "0x1bd2A113dC2087F815A7c785EDc546f8Af6Eaa29",
  //   18,
  //   "ISA Token",
  //   "ISA"
  // ),
  isa: new Token(
    "0xc6A737918A5DedfAAE5ED2abF751FB4BE600D910",
    18,
    "ISA Token",
    "ISA"
  ),
  
  btc: new Token(
    "0xf3D295bC69AF6666F7240124e90EDC69b2C5de2f",
    18,
    "Bitcoin",
    "BTC"
  ),
  ebtc: new Token(
    "0xAA66faD330446797c5733c4Be098C6fC40dc20E9",
    18,
    "eBitcoin",
    "eBTC"
  ),

  eth: new Token(
    "0x7dc736C6D3432526bE30e52cfFe4cdC81f79d3a5",
    18,
    "ETH",
    "eth"
  ),
  eeth: new Token(
    "0xeAB13794645f178c4bf75e3e14c9458cB6C310B2",
    18,
    "EETH",
    "eeth"
  ),
  eTY3: new Token(
    "0xe24B3852fb8E48D5E8CAC8E761227C676f97F950",
    18,
    "ETY",
    "eTY"
  ),
  eITY3: new Token(
    "0x3504ef5608A3A8Ff478BD7B6516B185bA0F3F55D",
    18,
    "EITY",
    "eITY"
  ),
  eTY5: new Token(
    "0x4d5077d012405a7913102E38890088618BAd7Adc",
    18,
    "ETY5x",
    "eTY5x"
  ),
  eITY5: new Token(
    "0x193409778B26D32687a4dE4174182dBd2208232B",
    18,
    "EITY5x",
    "eITY5x"
  ),
  eTY10: new Token(
    "0x31d064c361414DAd21143A3110B4B808a4d787d1",
    18,
    "ETY10x",
    "eTY10x"
  ),
  eITY10: new Token(
    "0x965973a3c47A372e43E14c085476F81a330e6Bbd",
    18,
    "EITY10x",
    "eITY10x"
  ),
  wbtc: new Token(
    "0x4DF5f98d228ACD2cDbb973A455550C1e49f82DA9",
    18,
    "Wrapped Bitcoin",
    "wBTC"
  ),
  sISA: new Token(
    "0xE87Eda45FBBDa82dFFE9a0350d6212E7651687e9",
    18,
    "sISA",
    "sISA"
  ),
};

export const tokens = (): TokenList => {
  return Object.keys(Tokens).reduce((accum, key) => {
    return { ...accum, [key]: Tokens[key] };
  }, {});
};
