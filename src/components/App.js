import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {

  const [height,setHeight] = useState(300);
  const [width , setWidth] = useState(300)
  return (
    <div id="main">
      <img onClick={()=>{ setHeight(height+2) ; setWidth(width+2)}} src={star}  height={height} width={width} />
    </div>
  )
}


export default App;
