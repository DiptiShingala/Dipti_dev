import React,{useState} from 'react'
import List from './List'
import Total from './Total'

const App = () => {
  const [data1, setData1] = useState('')
  const finalAmount=(e)=>{
    setData1(e);

  }
  return (
    <div>
      <List handleAmount={finalAmount} />
      <Total total = {data1} />
    </div>
  )
}

export default App

