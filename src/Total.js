import React,{useState}from 'react'

const Total = (e) => {
  const [discount, setdiscount] = useState();
  const lastTotal = e.total;
  const inputDiscount = (event)=>{
    setdiscount(event.target.value);
  }
  const afterdiscount = lastTotal-discount;

  return (
        <>
        
        <div>
        <label>Total</label>
        
      <input type="number" value = {lastTotal} placeholder="" name="total"/><br />
      <label>Discount</label>
      <input type="number" placeholder="" name="discount" value={discount} onChange={inputDiscount}/><br />
      <label>Final Amount</label>
      <input type="number" placeholder="" name="finalamount" value={afterdiscount}/><br />
  
        </div>
        </>
    )
}

export default Total
