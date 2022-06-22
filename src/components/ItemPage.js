import React from "react";
import ItemList from "./ItemList";

const ItemPage = ({stockData, addToBasket}) => {
  return (
    <>
    <ItemList stockData={stockData} addToBasket={addToBasket}/>
    <h1>itemPage</h1>
    </>
  )
}
 export default ItemPage;