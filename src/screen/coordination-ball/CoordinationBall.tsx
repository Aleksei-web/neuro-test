import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'
import { CoordinationRun } from './CoordinationRun'

const instruction = `Вы увидите шар, который будет перемещаться по экрану.
Следуйте за ним с помощью курсора и постарайтесь с точностью удерживать курсор в центре шара.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Зрительно-моторная координация'
]

const imgName = 'speed.jpg'

export const CoordinationBall = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {showInstruction
      ? <Instruction
        imgName={imgName}
        skill={skill}
        instruction={instruction}
        startTest={startTest}
      />
      : <CoordinationRun/>
    }
  </>
}
