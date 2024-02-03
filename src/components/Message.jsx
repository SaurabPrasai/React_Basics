import { useState } from "react";

export default function Message() {
  const [count, setCount] = useState(0);
  const [range,setRange]=useState(1)
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + range);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - range);
  };

  const handleRange=()=>{
    setRange(range+1)
  }
  

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h1>We are the changing the value by:{range}</h1>
      <button onClick={handleRange}>Change Range</button>
    </div>
  );
}
