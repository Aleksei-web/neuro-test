import { useState } from 'react'
import { Instruction } from '../../components/instruction/Instruction'
import { RunGrade } from './RunGrade'

const instruction = `Внимательно наблюдайте за движущимися по экрану шарами.
Далее вам будет необходимо сравнить их скорость и определить какой из них 
движется быстрее остальных.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  '	Оценка'
]

const imgName = 'identity.jpg'

export const Grade = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {
      showInstruction
        ? <Instruction imgName={imgName} instruction={instruction} skill={skill} startTest={startTest}/>
        : <RunGrade/>
    }
  </>
}
