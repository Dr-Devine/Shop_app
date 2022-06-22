import React from "react";

const ItemNode = ({item, addToBasket}) => {

    const handleClick = () => {
      addToBasket(item)
    }

  return (

    <>
    <h1>{item.title}{item.price}</h1>
    {addToBasket ? <button type='button' onClick={handleClick}>Add to basket</button> : null}
    </>
  )
}
 export default ItemNode;