import { useState } from 'react'
import { NumbersRun } from './NumbersRun'
import { Instruction } from '../../components/instruction/Instruction'

const instruction = `Нажмите на фигуру большего размера так быстро, как только можете, не обращая внимания на числа.

Нажмите на "НАЧАТЬ", когда будете готовы.`

const skill = [
  'Время реакции',
  'Ингибиция',
  'Когнитивная гибкость',
  'Мониторинг',
  'Скорость обработки информации'
]

const imgName = 'numbers.jpg'

export const Numbers = () => {
  const [showInstruction, setShowInstruction] = useState(true)

  const startTest = () => {
    setShowInstruction(false)
  }

  return <>
    {
      showInstruction
        // eslint-disable-next-line no-mixed-spaces-and-tabs
        ? <Instruction imgName={imgName} instruction={instruction} skill={skill} startTest={startTest}/>
        // eslint-disable-next-line no-mixed-spaces-and-tabs
        : <NumbersRun/>
    }
  </>
}
