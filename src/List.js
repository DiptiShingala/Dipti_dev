
import React,{useState,useEffect} from 'react'
    
const List =(props)=>{
  const [costs, setCosts] = useState(
      {data:[{
        price:0,
        quantity:1,
        amount:0,
      }],
      TotalAmount:0,
      }      
  );  
  useEffect(()=>{const finalAmount = costs.data.reduce((TotalAmount,currentAmount) =>{        
    return Number(TotalAmount + currentAmount.amount)
},0);
props.handleAmount(finalAmount);
console.log("famt=>",finalAmount) })

  const addItems = ()=>{
    const oldItems= costs.data; 
    oldItems.push({ price:0,quantity:1, amount:0})
    setCosts({...costs, data:oldItems})
  }


  // on change update the state data
  const onChangeHandler =(index,costs,e,fieldname) =>{
      const data = costs.data
      // console.log("dataaaa=> ",data);
      let item;
      if(fieldname === 'price'){
        item={
          price:Number(e.target.value),
          quantity:Number(costs.data[index].quantity),
          amount:Number(e.target.value*costs.data[index].quantity),
        }
      }
      else{
        item={
          price:Number(costs.ldata[index].price),
          quantity: Number(e.target.value),
          amount:Number(e.target.value*costs.data[index].price),
        }        
      }

    
      data[index] = item;
      
      setCosts({...costs, data:data,});   
  }
  const removeItem=(id)=>{
   
    const deleteItem = costs.data.filter((arrelem,index) =>{ return  index !==id
    })
    setCosts({...costs, data:deleteItem});
  }
  
     return (
        <>
      <div>
      <h1>Account</h1>
       <br />
       
      <label>Price</label>
      <label>Quantity</label>
      <label>Amount</label>
      <button onClick={addItems} >+</button><br />
      

      {costs.data.map((itemval,index) => {
        //  console.log("costsdataaaa=> ",itemval)
          return(
            <div>
          <input  type="text"  value={itemval.price}   name="price" onChange={(e)=>onChangeHandler(index,costs,e,'price')}/>
      
            
          <input  type="text"  value={itemval.quantity}   name="quantity" onChange={(e)=>onChangeHandler(index,costs,e,'quantity')}/>
        
          <input type="text" value = {itemval.amount} />
          <button onClick={()=>removeItem(index)}>Remove</button>
          </div>
          )
        })
      }  
      
      </div>
  </>
    )
}
export default List
