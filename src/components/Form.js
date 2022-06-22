import React from "react";

const Form = () => {

    const saveDiscount = () => {
      
    }

    return (
    <form onSubmit={saveDiscount}>
        <label>Enter Discount Code</label>
        <input type='text'></input>
        <input type='submit' value='Apply discount'></input>
    </form>
    )
}

export default Form;