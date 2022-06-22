import React from "react";
import ItemNode from "./itemNode";

const ItemList = ({stockData, addToBasket}) => {

    const stockItems = stockData.map((item, index) => {
      return (
        <ItemNode item={item} key={index} addToBasket={addToBasket}></ItemNode>
      )
    })

  return (
  <>
  {stockItems}
  </>
  )
}
 export default ItemList;