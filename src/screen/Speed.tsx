import {Progress} from "../components/Progress";
import {useEffect, useState} from "react";
import {Instruction} from "../components/instruction/Instruction";

const instruction = `Вы увидите на экране прямоугольник.
              Нажимайте на него так быстро, как только это возможно, в течении 10 секунд.
              Нажмите начать, когда будете гтовы.`

const skill = ['Время реакции']

const imgName = 'speed.jpg'

export const Speed = () => {
  const [countClick, setCountClick] = useState(0)
  const [result, setResult] = useState(0)
  const [timer, setTimer] = useState(60)
  const [showInstruction, setShowInstruction] = useState(true)

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

  const startTest = () => {
    setShowInstruction(false)
  }

  const run = () => {
    setCountClick(click => ++click)
    console.log(countClick, 60 - timer)
    setResult(Math.round((countClick / (60 - timer)) * 60))
  }
  return <div className="speed-screen">
    {showInstruction ? <Instruction
        imgName={imgName}
        skill={skill}
        instruction={instruction}
        startTest={startTest}
      /> :
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
      </div>}
  </div>
}