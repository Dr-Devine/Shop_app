import React from "react";
import BasketDetais from "./basketDetails";
import ItemList from "./ItemList";

const CheckoutPage = ({basket}) => {
  return (
    <>
    <ItemList stockData={basket}/>
    <BasketDetais basket={basket}/>
    </>
  )
}
 export default CheckoutPage;