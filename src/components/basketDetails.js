import React, {useState} from "react";
import Form from "./Form";

const BasketDetais = ({basket}) => {

    const [discount, setDiscount] = useState(0);

      const basketValue = basket.reduce((runningTotal, item) => {
        return runningTotal + item.price;

      }, 0)
      console.log(basketValue)
  return (
  <>
    <h1>Basket Details</h1>
    <Form/>
    <p>Total Value: £{basketValue}</p>
  </>
)};

export default BasketDetais;
