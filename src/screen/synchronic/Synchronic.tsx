import styled from './synchronic.module.css'
import {useState, MouseEvent} from "react";
import {Instruction} from "../../components/instruction/Instruction";
import {SynchronicRun} from "./SynchronicRun";

const instruction = `Наведите курсор на шар и постарайтесь удерживать его в центре.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Зрительно-моторная координация',
  'Когнитивная гибкость',
  'Мониторинг',
  'Скорость обработки информации'
]

const imgName = 'speed.jpg'

export const Synchronic = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <div className={styled.container}>
    {showInstruction ? <Instruction
      imgName={imgName}
      skill={skill}
      instruction={instruction}
      startTest={startTest}
    /> : <SynchronicRun />}
  </div>
}