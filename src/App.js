
import { useEffect, useMemo, useState } from 'react';
import './App.scss';
function App() {
  const [clock,setClock]=useState(new Date())

  useEffect(()=>{
    setInterval(()=>{
      setClock(new Date())
    },1000)
    return ()=>{
      clearInterval()
    }
  },[])
  const clockShow=useMemo(()=>{
    const seconds=clock.getSeconds()
    const minutes=clock.getMinutes()
    const hour=+clock.getHours()
    return (hour>=10?hour:"0"+hour)+":"+
    (minutes>=10?minutes:"0"+minutes)+":"+
    (seconds>=10?seconds:"0"+seconds) 
  },[clock])
  return (
    <div className='center'>
      {clockShow}
    </div>
  );
}

export default App;