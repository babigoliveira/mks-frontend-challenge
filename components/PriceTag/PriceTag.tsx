import styled from "styled-components";
import { CSSProperties } from "react";
import { formatBrlCurrency } from "../../utils";

export interface PriceTagProps {
  price: number;
  style?: CSSProperties;
}

const Container = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #373737;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  padding: 4px 6px;
`;

const PriceTag = ({ price, style }: PriceTagProps) => {
  return <Container style={style}>{formatBrlCurrency(price)}</Container>;
};

export default PriceTag;
