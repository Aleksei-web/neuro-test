import {Progress} from "../components/Progress";
import {useEffect, useState} from "react";

export const Speed = () => {
  const [countClick, setCountClick] = useState(0)
  const [result, setResult] = useState(0)
  const [timer, setTimer] = useState(60)

  useEffect(() => {
    if (timer) {
      startTimer()
    }
  }, [timer])

  const startTimer = () => {
    setTimeout(() => {
      setTimer(prev => --prev)
    }, 1000)
  }

  const run = () => {
    setCountClick(click => ++click)
    console.log(countClick, 60 - timer)
    setResult(Math.round((countClick / (60 - timer)) * 60))
  }
  return <div className="speed-screen">
    <div className='speed-container'>
      <div>
        <div className='timer'>{timer}</div>
        <Progress width={result / 5}/>
      </div>
      <div>
        <button onClick={run} className="btn btn-secondary">
          НАЖМИТЕ БЫСТРО СТОЛЬКО РАЗ, СКОЛЬКО СМОЖЕТЕ
        </button>
      </div>
    </div>
  </div>
}