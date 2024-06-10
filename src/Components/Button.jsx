import React, { useState } from 'react';

function Button ()  {
  const [color , setColor] = useState(false);
  const changeColor = ()=>{
    setColor(!color);
  }
  return (
    <button onClick={changeColor} className={`px-5 py-2 text-center text-lg font-semibold border-2 ${color ? "bg-green-400" : "bg-blue-400"} rounded-full`}>{color ? "Added" : "Add"}</button>
  );
};

export default Button;