import { useState } from "react";

export const Form = () => {
    const [name,setName]=useState("")

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <br />
      </form>
    </div>
  );
};
