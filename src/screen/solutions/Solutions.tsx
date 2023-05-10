import {MouseEvent, MouseEventHandler, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Circle} from "../../components/figure/Circle";
import {Polygon} from "../../components/figure/Polygon";
import {Instruction} from "../../components/instruction/Instruction";
import {SolutionRun} from "./SolutionRun";

const instruction = `Нажимайте на центр кругов так быстро, как только можете.
Нажмите "Далее", когда будете готовы начать.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Визуальное сканирование',
  'Зрительно-моторная координация',
  'Пространственное восприятие',
  'Скорость обработки информации',
  'Фокусированное внимание'
]

const imgName = 'solutions.jpg'

export const Solutions = () => {
  const [showInstruction, setShowInstruction] = useState(true)


  const startTest = () => {
    setShowInstruction(false)
  }
  return <div className="speed-screen">
    {showInstruction ?
      <Instruction imgName={imgName} startTest={startTest} instruction={instruction} skill={skill}/> :
      <SolutionRun/>
    }
  </div>
}