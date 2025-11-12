import { useState } from 'react';
import Clock  from './componenets/Clock.jsx';
import TypeSpeed from './componenets/TypeSpeed.jsx';
const App = () => {
const [clockIsVisible , setClockIsVisible] = useState(false)
const onToggleClick =() => {
  setClockIsVisible(!clockIsVisible);
}
  return(
  <>
 <TypeSpeed />

   {/* {clockIsVisible &&  <Clock />}
    <button onClick={onToggleClick}>Toggle</button> */}

   
   
    </>
  )
}

export default App;